/* =====================================================================
   OVERLORD ENGLISH — APP.JS
   Tác giả: Huỳnh Hải Đăng — 9A6
   2 chế độ:
   - EXAM  : "Làm đề thi" — đề ngẫu nhiên 34 câu (giống cấu trúc đề thi thật),
             không chấm ngay, làm xong bấm "Nộp bài" mới biết điểm /10.
   - PRACT : "Luyện theo dạng bài" — duyệt tự do theo từng dạng câu,
             có chấm ngay + gợi ý + dấu hiệu nhận biết + lời giải.
===================================================================== */

(function () {
  "use strict";

  /* ===================== 0. Helpers dùng chung ===================== */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]));
  }
  function norm(str) {
    return String(str || "").trim().toLowerCase().replace(/\s+/g, " ").replace(/[.,!?;:]+$/g, "");
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function sampleN(arr, n) {
    const c = arr.slice();
    for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[c[i], c[j]] = [c[j], c[i]]; }
    return c.slice(0, n);
  }
  function showToast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    if (typeof requestAnimationFrame === "function") requestAnimationFrame(() => t.classList.add("show"));
    else t.classList.add("show");
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 2400);
  }

  /* ===================== 1. Render helpers thuần (dùng chung 2 chế độ) ===================== */
  function renderPassageHTML(item, clozeFillMap) {
    if (item.sub === "cloze") {
      const fillMap = clozeFillMap || {};
      let html = escapeHtml(item.passageTemplate);
      html = html.replace(/\[\[(\d+)\]\]/g, (m, nStr) => {
        const n = parseInt(nStr, 10);
        if (n === item.blankNum) return '<span class="blank blank-active">(' + n + ")…</span>";
        const fill = fillMap[n];
        if (fill && fill.status) {
          const cls = fill.status === "correct" ? "blank-good" : fill.status === "wrong" ? "blank-bad" : "blank-skip";
          return '<span class="blank ' + cls + '">(' + n + ") " + escapeHtml(fill.text) + "</span>";
        }
        return '<span class="blank">(' + n + ") _____</span>";
      });
      html = html.replace(/\n\n/g, "<br><br>");
      return '<div class="passage-box">' + html + "</div>";
    }
    if (item.passage) {
      return '<div class="passage-box">' + escapeHtml(item.passage).replace(/\n\n/g, "<br><br>") + "</div>";
    }
    if (item.lines) {
      const rows = Object.keys(item.lines).map((k) => "<li><b>" + k + ".</b> " + escapeHtml(item.lines[k]) + "</li>").join("");
      return '<ul class="lines-list">' + rows + "</ul>";
    }
    return "";
  }

  function renderOptionsHTML(options, st) {
    const letters = ["A", "B", "C", "D", "E", "F"];
    return '<div class="options">' + options.map((opt, i) => {
      let cls = "";
      if (st.revealCorrect) {
        if (i === st.correctIdx) cls = "correct";
        else if (i === st.chosenIdx) cls = "wrong";
      } else if (i === st.chosenIdx) cls = "picked";
      return '<button class="option-btn ' + cls + '" data-opt="' + i + '" ' + (st.locked ? "disabled" : "") + '>' +
        '<span class="letter">' + letters[i] + "</span><span>" + escapeHtml(opt) + "</span></button>";
    }).join("") + "</div>";
  }

  function renderTFHTML(st) {
    function btn(val, label, icon) {
      let cls = "";
      if (st.revealCorrect) {
        if (val === st.correct) cls = "correct";
        else if (val === st.chosen) cls = "wrong";
      } else if (val === st.chosen) cls = "picked";
      return '<button class="tf-btn ' + cls + '" data-tf="' + val + '" ' + (st.locked ? "disabled" : "") + ">" + icon + " " + label + "</button>";
    }
    return '<div class="tf-row">' + btn(true, "Đúng (True)", "✅") + btn(false, "Sai (False)", "❌") + "</div>";
  }

  function renderTextFieldHTML(item, st) {
    let prompt = escapeHtml(item.prompt);
    let badgeHtml = "";
    if (item.sub === "wordform") {
      prompt = prompt.replace("______", '<span class="gap">______</span>');
      badgeHtml = '<div class="word-badge">Từ gợi ý: <b>' + escapeHtml(item.badge) + "</b></div>";
    } else if (item.sub === "errors") {
      const safeWrong = escapeHtml(item.wrong);
      if (prompt.indexOf(safeWrong) !== -1) prompt = prompt.replace(safeWrong, "<mark>" + safeWrong + "</mark>");
    } else if (item.sub === "transform") {
      badgeHtml = '<div class="word-badge">Câu gốc: “' + escapeHtml(item.original) + '”' +
        (item.maxWords ? " · Không quá " + item.maxWords + " từ" : "") + "</div>";
      prompt = prompt.replace("______", '<span class="gap">______</span>');
    }

    let resultHtml = "";
    if (st.resultStatus) {
      const cls = st.resultStatus === "correct" ? "good" : st.resultStatus === "wrong" ? "bad" : "skip";
      const label = st.resultStatus === "correct" ? "✅ Chính xác!" :
        st.resultStatus === "wrong" ? "❌ Chưa khớp đáp án mẫu — hãy so sánh với lời giải chi tiết" :
        "⏭️ Chưa trả lời / đã bỏ qua";
      resultHtml = '<div class="text-result ' + cls + '">' + label + " — Đáp án mẫu: <b>" +
        item.accepted.map(escapeHtml).join(" / ") + "</b></div>";
    }
    let selfGradeHtml = "";
    if (st.showSelfGrade) {
      selfGradeHtml = '<div class="self-grade"><span>Sau khi xem lời giải, bạn tự thấy bài làm của mình:</span>' +
        '<button class="btn ghost good-ghost" data-self="correct">✅ Mình làm đúng</button>' +
        '<button class="btn ghost bad-ghost" data-self="wrong">❌ Mình làm sai</button></div>';
    }

    return badgeHtml + '<p class="text-prompt">' + prompt + "</p>" +
      '<input type="text" class="text-input" id="textInput" placeholder="Nhập câu trả lời của bạn..." value="' +
      escapeHtml(st.value || "") + '" ' + (st.locked ? "disabled" : "") + ' autocomplete="off" />' +
      (st.showCheck ? '<button class="btn primary" id="checkTextBtn">Kiểm tra</button>' : "") +
      resultHtml + selfGradeHtml;
  }

  function notesHTML(item, open) {
    return '<div class="notes">' +
      (open.hint ? '<div class="note note-hint">💡 <b>Gợi ý:</b> ' + escapeHtml(item.hint) + "</div>" : "") +
      (open.signal ? '<div class="note note-signal">🔎 <b>Dấu hiệu nhận biết:</b> ' + escapeHtml(item.signal) + "</div>" : "") +
      (open.explain ? '<div class="note note-explain">📕 <b>Lời giải chi tiết:</b> ' + escapeHtml(item.explain) + "</div>" : "") +
      "</div>";
  }

  /* =====================================================================
     2. PRACTICE MODE — Luyện theo dạng bài (chấm ngay, có gợi ý/lời giải)
  ===================================================================== */
  const Practice = (function () {
    function buildItems() {
      const out = {};
      out.grammar = DATA.grammar.map((it) => ({
        kind: "mc", sub: "grammar", prompt: it.q, options: it.options, answer: it.answer,
        hint: it.hint, signal: it.signal, explain: it.explain
      }));
      out.cloze = [];
      DATA.cloze.forEach((group) => {
        group.blanks.forEach((b) => {
          out.cloze.push({
            kind: "mc", sub: "cloze", groupId: group.id,
            passageTemplate: group.passage, blankNum: b.n,
            prompt: "Chọn từ/cụm từ thích hợp cho ô số (" + b.n + ") trong đoạn văn trên.",
            options: b.options, answer: b.answer, hint: b.hint, signal: b.signal, explain: b.explain
          });
        });
      });
      out.rearrange = DATA.rearrange.map((it) => ({
        kind: "mc", sub: "rearrange", lines: it.lines,
        prompt: "Chọn cách sắp xếp đúng để tạo thành đoạn hội thoại/đoạn văn có nghĩa:",
        options: it.options, answer: it.answer, hint: it.hint, signal: it.signal, explain: it.explain
      }));
      out.reading = [];
      DATA.reading.forEach((group) => {
        group.qs.forEach((q) => {
          out.reading.push({
            kind: "mc", sub: "reading", groupId: group.id, passage: group.passage,
            prompt: q.q, options: q.options, answer: q.answer, hint: q.hint, signal: q.signal, explain: q.explain
          });
        });
      });
      out.truefalse = [];
      DATA.truefalse.forEach((group) => {
        group.items.forEach((stm) => {
          out.truefalse.push({
            kind: "tf", sub: "truefalse", groupId: group.id, passage: group.passage,
            prompt: stm.text, answer: stm.answer, hint: stm.hint, signal: stm.signal, explain: stm.explain
          });
        });
      });
      out.wordform = DATA.wordform.map((it) => ({
        kind: "text", sub: "wordform", prompt: it.sentence, badge: it.word, accepted: it.accepted,
        hint: it.hint, signal: it.signal, explain: it.explain
      }));
      out.errors = DATA.errors.map((it) => ({
        kind: "text", sub: "errors", prompt: it.sentence, wrong: it.wrong, accepted: [it.correct],
        hint: it.hint, signal: it.signal, explain: it.explain
      }));
      out.transform = DATA.transform.map((it) => ({
        kind: "text", sub: "transform", original: it.original, prompt: it.rewrite,
        accepted: it.accepted, maxWords: it.maxWords, hint: it.hint, signal: it.signal, explain: it.explain
      }));
      return out;
    }

    const ITEMS = buildItems();

    const SUBTYPE_META = {
      grammar: { label: "📘 Ngữ pháp & Từ vựng" }, cloze: { label: "📰 Điền từ đoạn văn" },
      rearrange: { label: "🔀 Sắp xếp câu" }, reading: { label: "📖 Đọc hiểu" },
      truefalse: { label: "✅❌ Đúng / Sai" }, wordform: { label: "🔤 Đúng dạng từ" },
      errors: { label: "🛠️ Tìm & sửa lỗi" }, transform: { label: "✏️ Viết lại câu" }
    };
    const TAB_SUBTYPES = { tn: ["grammar", "cloze", "rearrange", "reading"], ds: ["truefalse"], tl: ["wordform", "errors", "transform"] };
    const TAB_META = { tn: { label: "📝 Trắc nghiệm" }, ds: { label: "✅❌ Đúng / Sai" }, tl: { label: "✍️ Tự luận" } };

    const state = { tab: "tn", sub: "grammar", index: 0, status: {}, chosen: {}, open: {}, clozeFill: {} };
    Object.keys(ITEMS).forEach((sub) => {
      state.status[sub] = ITEMS[sub].map(() => "unanswered");
      state.chosen[sub] = ITEMS[sub].map(() => null);
      state.open[sub] = ITEMS[sub].map(() => ({ hint: false, signal: false, explain: false }));
    });

    let $tabs, $chips, $starmap, $card, $overall;

    function scoreOf(sub) {
      let correct = 0, total = 0;
      state.status[sub].forEach((s) => { if (s === "correct") { correct++; total++; } else if (s === "wrong") total++; });
      return { correct, total };
    }
    function overallScore() {
      let correct = 0, total = 0;
      Object.keys(ITEMS).forEach((sub) => { const s = scoreOf(sub); correct += s.correct; total += s.total; });
      return { correct, total };
    }
    function updateOverall() {
      if (App.currentMode() !== "practice") return;
      const o = overallScore();
      $overall.textContent = "🌌 Tổng điểm: " + o.correct + "/" + o.total;
    }

    function renderTabs() {
      $tabs.innerHTML = Object.keys(TAB_META).map((t) =>
        '<button class="tab-btn ' + (t === state.tab ? "active" : "") + '" data-tab="' + t + '">' + TAB_META[t].label + "</button>"
      ).join("");
    }
    function renderChips() {
      const subs = TAB_SUBTYPES[state.tab];
      if (subs.length <= 1) { $chips.innerHTML = ""; $chips.classList.add("hidden"); return; }
      $chips.classList.remove("hidden");
      $chips.innerHTML = subs.map((s) => {
        const sc = scoreOf(s);
        return '<button class="chip ' + (s === state.sub ? "active" : "") + '" data-sub="' + s + '">' + SUBTYPE_META[s].label +
          ' <span class="chip-count">' + sc.correct + "/" + sc.total + " · " + ITEMS[s].length + " câu</span></button>";
      }).join("");
    }
    function renderStarmap() {
      const items = ITEMS[state.sub], statuses = state.status[state.sub];
      $starmap.innerHTML = '<div class="starmap-track">' + items.map((it, i) => {
        const st = statuses[i];
        const cls = st === "correct" ? "good" : st === "wrong" ? "bad" : st === "skipped" ? "skip" : "void";
        const cur = i === state.index ? "current" : "";
        return '<button class="star ' + cls + " " + cur + '" data-idx="' + i + '" title="Câu ' + (i + 1) + '"></button>';
      }).join("") + "</div>";
    }

    function fillCloze(item, optIdx, correct, skipped) {
      if (!state.clozeFill[item.groupId]) state.clozeFill[item.groupId] = {};
      const status = skipped ? "skipped" : (correct ? "correct" : "wrong");
      const text = skipped ? item.options[item.answer] : item.options[optIdx];
      state.clozeFill[item.groupId][item.blankNum] = { text, status };
    }

    function renderCard() {
      const items = ITEMS[state.sub];
      if (state.index >= items.length) state.index = items.length - 1;
      if (state.index < 0) state.index = 0;
      const item = items[state.index], idx = state.index;
      const locked = state.status[state.sub][idx] !== "unanswered";
      const chosen = state.chosen[state.sub][idx];

      const passageHtml = renderPassageHTML(item, state.clozeFill[item.groupId]);
      let bodyHtml = "";
      if (item.kind === "mc") {
        bodyHtml = renderOptionsHTML(item.options, { chosenIdx: chosen, correctIdx: item.answer, revealCorrect: locked, locked });
      } else if (item.kind === "tf") {
        bodyHtml = renderTFHTML({ chosen, correct: item.answer, revealCorrect: locked, locked });
      } else {
        const correctness = state.status[state.sub][idx];
        bodyHtml = renderTextFieldHTML(item, {
          value: chosen || "", locked, showCheck: !locked,
          resultStatus: locked ? correctness : null, showSelfGrade: locked && correctness === "wrong"
        });
      }

      const promptBlock = (item.kind === "mc" || item.kind === "tf") ? '<p class="prompt-text">' + escapeHtml(item.prompt) + "</p>" : "";
      const sc = scoreOf(state.sub);

      $card.innerHTML =
        '<div class="card-head"><span class="badge-sub">' + SUBTYPE_META[state.sub].label + "</span>" +
        '<span class="badge-pos">Câu ' + (idx + 1) + "/" + items.length + " · Điểm: " + sc.correct + "/" + sc.total + "</span></div>" +
        passageHtml + promptBlock + bodyHtml + notesHTML(item, state.open[state.sub][idx]) +
        '<div class="controls">' +
        '<button class="ctrl-btn" id="btnSkip">😭 Khó quá, bỏ qua</button>' +
        '<button class="ctrl-btn" id="btnHint">💡 Gợi ý / manh mối</button>' +
        '<button class="ctrl-btn" id="btnSignal">🔎 Dấu hiệu nhận biết</button>' +
        '<button class="ctrl-btn" id="btnExplain">📕 Lời giải chi tiết</button>' +
        '<button class="ctrl-btn next" id="btnNext">Câu tiếp theo ➡️</button></div>';

      bindCardEvents(item, idx);
    }

    function afterAnswer() { renderCard(); renderChips(); renderStarmap(); updateOverall(); }

    function goNext() {
      const items = ITEMS[state.sub];
      if (state.index < items.length - 1) state.index++;
      else { state.index = 0; showToast("🎉 Bạn đã hoàn thành hết phần này! Quay lại câu 1."); }
      renderCard(); renderStarmap(); renderChips(); updateOverall();
    }

    function bindCardEvents(item, idx) {
      const sub = state.sub;
      document.querySelectorAll("#card .option-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.status[sub][idx] !== "unanswered") return;
          const opt = parseInt(btn.dataset.opt, 10);
          state.chosen[sub][idx] = opt;
          const correct = opt === item.answer;
          state.status[sub][idx] = correct ? "correct" : "wrong";
          if (item.sub === "cloze") fillCloze(item, opt, correct, false);
          afterAnswer();
        });
      });
      document.querySelectorAll("#card .tf-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (state.status[sub][idx] !== "unanswered") return;
          const val = btn.dataset.tf === "true";
          state.chosen[sub][idx] = val;
          const correct = val === item.answer;
          state.status[sub][idx] = correct ? "correct" : "wrong";
          afterAnswer();
        });
      });
      const checkBtn = document.getElementById("checkTextBtn");
      if (checkBtn) {
        checkBtn.addEventListener("click", () => {
          const input = document.getElementById("textInput");
          const val = input ? input.value : "";
          state.chosen[sub][idx] = val;
          const ok = item.accepted.some((a) => norm(a) === norm(val));
          state.status[sub][idx] = ok ? "correct" : "wrong";
          afterAnswer();
        });
      }
      document.querySelectorAll("#card [data-self]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.status[sub][idx] = btn.dataset.self === "correct" ? "correct" : "wrong";
          afterAnswer();
        });
      });
      document.getElementById("btnSkip").addEventListener("click", () => {
        if (state.status[sub][idx] === "unanswered") {
          state.status[sub][idx] = "skipped";
          if (item.sub === "cloze") fillCloze(item, null, false, true);
        }
        goNext();
      });
      document.getElementById("btnHint").addEventListener("click", () => { state.open[sub][idx].hint = !state.open[sub][idx].hint; renderCard(); });
      document.getElementById("btnSignal").addEventListener("click", () => { state.open[sub][idx].signal = !state.open[sub][idx].signal; renderCard(); });
      document.getElementById("btnExplain").addEventListener("click", () => {
        state.open[sub][idx].explain = !state.open[sub][idx].explain;
        if (state.status[sub][idx] === "unanswered") {
          state.status[sub][idx] = "skipped";
          if (item.sub === "cloze") fillCloze(item, null, false, true);
        }
        afterAnswer();
      });
      document.getElementById("btnNext").addEventListener("click", goNext);
    }

    function renderAll() { renderTabs(); renderChips(); renderStarmap(); renderCard(); updateOverall(); }

    function init() {
      $tabs = document.getElementById("mainTabs");
      $chips = document.getElementById("subChips");
      $starmap = document.getElementById("starmap");
      $card = document.getElementById("card");
      $overall = document.getElementById("overallScore");

      $tabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".tab-btn"); if (!btn) return;
        state.tab = btn.dataset.tab; state.sub = TAB_SUBTYPES[state.tab][0]; state.index = 0;
        renderAll();
      });
      $chips.addEventListener("click", (e) => {
        const btn = e.target.closest(".chip"); if (!btn) return;
        state.sub = btn.dataset.sub; state.index = 0;
        renderAll();
      });
      $starmap.addEventListener("click", (e) => {
        const star = e.target.closest(".star"); if (!star) return;
        state.index = parseInt(star.dataset.idx, 10);
        renderCard(); renderStarmap();
      });

      renderAll();
    }

    return { init, renderAll, updateOverall };
  })();

  /* =====================================================================
     3. EXAM MODE — Làm đề thi (đề ngẫu nhiên, nộp bài mới chấm điểm)
  ===================================================================== */
  const Exam = (function () {
    const STRUCTURE = [
      { key: "p1", label: "Phần 1 — Ngữ pháp & Từ vựng", point: 0.25, n: 8, source: "grammar" },
      { key: "p2", label: "Phần 2 — Điền từ vào đoạn văn", point: 0.25, n: 4, source: "cloze" },
      { key: "p3", label: "Phần 3 — Sắp xếp câu", point: 0.25, n: 4, source: "rearrange" },
      { key: "p4", label: "Phần 4 — Đọc hiểu", point: 0.25, n: 4, source: "reading" },
      { key: "p5", label: "Phần 5 — Đúng / Sai", point: 0.25, n: 4, source: "truefalse" },
      { key: "p6", label: "Phần 6 — Đúng dạng từ", point: 0.25, n: 4, source: "wordform" },
      { key: "p7", label: "Phần 7 — Tìm và sửa lỗi", point: 0.5, n: 2, source: "errors" },
      { key: "p8", label: "Phần 8 — Viết lại câu", point: 0.5, n: 4, source: "transform" }
    ];
    const TOTAL_QUESTIONS = STRUCTURE.reduce((s, p) => s + p.n, 0);

    let exam = null;
    let state = null;
    let confirmTimer = null;

    function buildExam() {
      const used = { grammar: new Set(), wordform: new Set(), errors: new Set(), transform: new Set() };
      const parts = STRUCTURE.map((meta) => {
        let items = [];
        if (meta.source === "grammar") items = GENERATORS.grammar(meta.n, used.grammar);
        else if (meta.source === "wordform") items = GENERATORS.wordform(meta.n, used.wordform);
        else if (meta.source === "errors") items = GENERATORS.errors(meta.n, used.errors);
        else if (meta.source === "transform") items = GENERATORS.transform(meta.n, used.transform);
        else if (meta.source === "cloze") {
          const group = pick(DATA.cloze);
          items = group.blanks.map((b) => ({
            kind: "mc", sub: "cloze", groupId: group.id, passageTemplate: group.passage, blankNum: b.n,
            prompt: "Chọn từ/cụm từ thích hợp cho ô số (" + b.n + ").",
            options: b.options, answer: b.answer, hint: b.hint, signal: b.signal, explain: b.explain
          }));
        } else if (meta.source === "rearrange") {
          items = sampleN(DATA.rearrange, meta.n).map((it) => ({
            kind: "mc", sub: "rearrange", lines: it.lines, prompt: "Chọn cách sắp xếp đúng:",
            options: it.options, answer: it.answer, hint: it.hint, signal: it.signal, explain: it.explain
          }));
        } else if (meta.source === "reading") {
          const group = pick(DATA.reading);
          items = group.qs.map((q) => ({
            kind: "mc", sub: "reading", passage: group.passage, prompt: q.q,
            options: q.options, answer: q.answer, hint: q.hint, signal: q.signal, explain: q.explain
          }));
        } else if (meta.source === "truefalse") {
          const group = pick(DATA.truefalse);
          items = group.items.map((s) => ({
            kind: "tf", sub: "truefalse", passage: group.passage, prompt: s.text,
            answer: s.answer, hint: s.hint, signal: s.signal, explain: s.explain
          }));
        }
        return Object.assign({}, meta, { items });
      });

      const flat = [];
      parts.forEach((part, pi) => {
        part.items.forEach((it, ii) => {
          flat.push(Object.assign({}, it, { partIndex: pi, point: part.point, posInPart: ii }));
        });
      });
      return { parts, flat };
    }

    function newExam() {
      exam = buildExam();
      state = {
        index: 0, submitted: false,
        status: exam.flat.map(() => "unanswered"),
        chosen: exam.flat.map(() => null),
        open: exam.flat.map(() => ({ hint: false, signal: false, explain: false })),
        clozeFill: {}
      };
    }

    let $score, $starmap, $card, $restartBtn, $overall;

    function answeredCount() { return state.chosen.filter((c) => c !== null && c !== "").length; }

    function updateScoreBar() {
      if (!state.submitted) {
        $score.textContent = "Đã làm: " + answeredCount() + "/" + TOTAL_QUESTIONS + " câu";
      } else {
        const r = computeResult();
        $score.textContent = "📊 Điểm: " + r.points.toFixed(2) + "/10 — Đúng " + r.correctCount + "/" + TOTAL_QUESTIONS + " câu";
      }
    }

    function computeResult() {
      let points = 0, correctCount = 0;
      const perPart = exam.parts.map(() => ({ correct: 0, total: 0 }));
      exam.flat.forEach((item, i) => {
        perPart[item.partIndex].total++;
        if (state.status[i] === "correct") { points += item.point; correctCount++; perPart[item.partIndex].correct++; }
      });
      return { points, correctCount, perPart };
    }

    function renderStarmap() {
      let html = "";
      exam.parts.forEach((part, pi) => {
        if (pi > 0) html += '<div class="star-divider"></div>';
        part.items.forEach((it, ii) => {
          const flatIdx = exam.flat.findIndex((f) => f.partIndex === pi && f.posInPart === ii);
          const st = state.status[flatIdx];
          const cls = st === "correct" ? "good" : st === "wrong" ? "bad" : st === "blank" ? "skip" : "void";
          const cur = flatIdx === state.index ? "current" : "";
          html += '<button class="star ' + cls + " " + cur + '" data-idx="' + flatIdx + '" title="Câu ' + (flatIdx + 1) + '"></button>';
        });
      });
      $starmap.innerHTML = '<div class="starmap-track">' + html + "</div>";
    }

    function fillCloze(item, optIdx, correct) {
      if (!state.clozeFill[item.groupId]) state.clozeFill[item.groupId] = {};
      state.clozeFill[item.groupId][item.blankNum] = {
        text: item.options[optIdx], status: correct ? "correct" : "wrong"
      };
    }

    function gradeAll() {
      exam.flat.forEach((item, i) => {
        const chosen = state.chosen[i];
        if (chosen === null || chosen === "" || chosen === undefined) { state.status[i] = "blank"; return; }
        if (item.kind === "mc") {
          state.status[i] = chosen === item.answer ? "correct" : "wrong";
          if (item.sub === "cloze") fillCloze(item, chosen, chosen === item.answer);
        } else if (item.kind === "tf") {
          state.status[i] = chosen === item.answer ? "correct" : "wrong";
        } else {
          const ok = item.accepted.some((a) => norm(a) === norm(chosen));
          state.status[i] = ok ? "correct" : "wrong";
        }
      });
      state.submitted = true;
    }

    function renderResultBanner() {
      const r = computeResult();
      const parts = exam.parts.map((p, i) =>
        '<span class="result-part-chip">' + p.label.replace("Phần ", "P") + ": " + r.perPart[i].correct + "/" + r.perPart[i].total + "</span>"
      ).join("");
      return '<div class="result-banner">' +
        '<div class="score-big">' + r.points.toFixed(2) + " / 10</div>" +
        '<div class="score-sub">Đúng ' + r.correctCount + "/" + TOTAL_QUESTIONS + ' câu — bấm vào từng câu trong "bản đồ sao" để xem lời giải chi tiết.</div>' +
        '<div class="result-parts">' + parts + "</div></div>";
    }

    function renderCard() {
      const flat = exam.flat;
      if (state.index >= flat.length) state.index = flat.length - 1;
      if (state.index < 0) state.index = 0;
      const idx = state.index, item = flat[idx];
      const part = exam.parts[item.partIndex];
      const chosen = state.chosen[idx];
      const locked = state.submitted;

      const passageHtml = renderPassageHTML(item, state.clozeFill[item.groupId]);
      let bodyHtml = "";
      if (item.kind === "mc") {
        bodyHtml = renderOptionsHTML(item.options, { chosenIdx: chosen, correctIdx: item.answer, revealCorrect: locked, locked });
      } else if (item.kind === "tf") {
        bodyHtml = renderTFHTML({ chosen, correct: item.answer, revealCorrect: locked, locked });
      } else {
        bodyHtml = renderTextFieldHTML(item, {
          value: chosen || "", locked, showCheck: false,
          resultStatus: locked ? state.status[idx] : null, showSelfGrade: false
        });
      }
      const promptBlock = (item.kind === "mc" || item.kind === "tf") ? '<p class="prompt-text">' + escapeHtml(item.prompt) + "</p>" : "";
      const notes = locked ? notesHTML(item, state.open[idx]) : "";
      const reviewBtns = locked ?
        '<button class="ctrl-btn" id="btnHint">💡 Gợi ý / manh mối</button>' +
        '<button class="ctrl-btn" id="btnSignal">🔎 Dấu hiệu nhận biết</button>' +
        '<button class="ctrl-btn" id="btnExplain">📕 Lời giải chi tiết</button>' : "";
      const submitBtn = !locked ? '<button class="ctrl-btn next" id="btnSubmitExam">✅ Nộp bài</button>' : "";

      const bannerHtml = (locked && idx === 0) ? renderResultBanner() : "";

      $card.innerHTML = bannerHtml +
        '<div class="card-head"><span class="badge-sub">' + part.label + "</span>" +
        '<span class="badge-pos">Câu ' + (item.posInPart + 1) + "/" + part.items.length + " (toàn bài: " + (idx + 1) + "/" + flat.length + ")</span></div>" +
        passageHtml + promptBlock + bodyHtml + notes +
        '<div class="nav-row">' +
        '<button class="ctrl-btn" id="btnPrev" ' + (idx === 0 ? "disabled" : "") + '>⬅️ Câu trước</button>' +
        '<button class="ctrl-btn next" id="btnNext" ' + (idx === flat.length - 1 ? "disabled" : "") + '>Câu tiếp theo ➡️</button>' +
        "</div>" +
        (reviewBtns ? '<div class="controls">' + reviewBtns + "</div>" : "") +
        (submitBtn ? '<div class="controls">' + submitBtn + "</div>" : "") +
        (!locked && answeredCount() < TOTAL_QUESTIONS ?
          '<div class="unanswered-warning">Còn ' + (TOTAL_QUESTIONS - answeredCount()) + " câu chưa trả lời.</div>" : "");

      bindCardEvents(item, idx);
    }

    function bindCardEvents(item, idx) {
      document.querySelectorAll("#examCard .option-btn").forEach((btn) => {
        if (state.submitted) return;
        btn.addEventListener("click", () => {
          state.chosen[idx] = parseInt(btn.dataset.opt, 10);
          renderCard(); renderStarmap(); updateScoreBar();
        });
      });
      document.querySelectorAll("#examCard .tf-btn").forEach((btn) => {
        if (state.submitted) return;
        btn.addEventListener("click", () => {
          state.chosen[idx] = btn.dataset.tf === "true";
          renderCard(); renderStarmap(); updateScoreBar();
        });
      });
      const textInput = document.getElementById("textInput");
      if (textInput && !state.submitted) {
        textInput.addEventListener("input", () => {
          state.chosen[idx] = textInput.value;
          updateScoreBar();
          renderStarmap();
        });
      }
      const prevBtn = document.getElementById("btnPrev");
      if (prevBtn) prevBtn.addEventListener("click", () => { state.index--; renderCard(); renderStarmap(); });
      const nextBtn = document.getElementById("btnNext");
      if (nextBtn) nextBtn.addEventListener("click", () => { state.index++; renderCard(); renderStarmap(); });

      const submitBtn = document.getElementById("btnSubmitExam");
      if (submitBtn) {
        submitBtn.addEventListener("click", () => {
          gradeAll();
          state.index = 0;
          renderCard(); renderStarmap(); updateScoreBar();
          showToast("✅ Đã nộp bài! Xem điểm và lời giải chi tiết bên dưới.");
        });
      }

      if (state.submitted) {
        const hintBtn = document.getElementById("btnHint");
        const signalBtn = document.getElementById("btnSignal");
        const explainBtn = document.getElementById("btnExplain");
        if (hintBtn) hintBtn.addEventListener("click", () => { state.open[idx].hint = !state.open[idx].hint; renderCard(); });
        if (signalBtn) signalBtn.addEventListener("click", () => { state.open[idx].signal = !state.open[idx].signal; renderCard(); });
        if (explainBtn) explainBtn.addEventListener("click", () => { state.open[idx].explain = !state.open[idx].explain; renderCard(); });
      }

      $starmap.onclick = (e) => {
        const star = e.target.closest(".star"); if (!star) return;
        state.index = parseInt(star.dataset.idx, 10);
        renderCard(); renderStarmap();
      };
    }

    function restart() {
      newExam();
      renderCard(); renderStarmap(); updateScoreBar();
      showToast("🎲 Đề mới đã sẵn sàng — chúc bạn làm bài tốt!");
    }

    function handleRestartClick() {
      if (!$restartBtn.classList.contains("confirming")) {
        $restartBtn.classList.add("confirming");
        $restartBtn.textContent = "⚠️ Bấm lần nữa để xác nhận";
        confirmTimer = setTimeout(() => {
          $restartBtn.classList.remove("confirming");
          $restartBtn.textContent = "🎲 Làm đề mới";
        }, 4000);
      } else {
        clearTimeout(confirmTimer);
        $restartBtn.classList.remove("confirming");
        $restartBtn.textContent = "🎲 Làm đề mới";
        restart();
      }
    }

    function init() {
      $score = document.getElementById("examScore");
      $starmap = document.getElementById("examStarmap");
      $card = document.getElementById("examCard");
      $restartBtn = document.getElementById("btnRestartExam");
      $overall = document.getElementById("overallScore");

      $restartBtn.addEventListener("click", handleRestartClick);

      newExam();
      renderCard(); renderStarmap(); updateScoreBar();
    }

    function refreshOverall() {
      if (App.currentMode() !== "exam") return;
      if (!state) { $overall.textContent = "🌌 Sẵn sàng cho đề mới"; return; }
      if (!state.submitted) $overall.textContent = "🌌 Làm đề thi · " + answeredCount() + "/" + TOTAL_QUESTIONS + " câu";
      else { const r = computeResult(); $overall.textContent = "🌌 Điểm đề thi: " + r.points.toFixed(2) + "/10"; }
    }

    return { init, refreshOverall };
  })();

  /* =====================================================================
     4. Chuyển đổi chế độ + khởi động
  ===================================================================== */
  const App = (function () {
    let mode = "exam";
    const $modeToggle = () => document.getElementById("modeToggle");
    const $examSection = () => document.getElementById("examSection");
    const $practiceSection = () => document.getElementById("practiceSection");

    function currentMode() { return mode; }

    function renderModeButtons() {
      $modeToggle().querySelectorAll(".mode-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.mode === mode);
      });
    }

    function setMode(next) {
      mode = next;
      renderModeButtons();
      $examSection().classList.toggle("hidden", mode !== "exam");
      $practiceSection().classList.toggle("hidden", mode !== "practice");
      if (mode === "exam") Exam.refreshOverall();
      else Practice.updateOverall();
    }

    function buildStarfield() {
      const layer = document.getElementById("stars");
      const twinkleLayer = document.getElementById("starsTwinkle");
      if (!layer || !twinkleLayer) return;
      const shadows = [];
      for (let i = 0; i < 130; i++) shadows.push((Math.random() * 100).toFixed(2) + "vw " + (Math.random() * 100).toFixed(2) + "vh #fff");
      layer.style.boxShadow = shadows.join(",");
      const tw = [];
      for (let i = 0; i < 22; i++) tw.push((Math.random() * 100).toFixed(2) + "vw " + (Math.random() * 100).toFixed(2) + "vh #bcd2ff");
      twinkleLayer.style.boxShadow = tw.join(",");
    }

    function init() {
      buildStarfield();
      $modeToggle().addEventListener("click", (e) => {
        const btn = e.target.closest(".mode-btn"); if (!btn) return;
        setMode(btn.dataset.mode);
      });
      Exam.init();
      Practice.init();
      setMode("exam");
    }

    return { init, currentMode };
  })();

  App.init();
})();
