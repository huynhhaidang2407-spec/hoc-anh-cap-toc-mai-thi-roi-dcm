/* =====================================================================
   OVERLORD ENGLISH — GENERATORS.JS
   Tác giả: Huỳnh Hải Đăng — 9A6
   ---------------------------------------------------------------------
   File này KHÔNG chứa câu hỏi có sẵn, mà chứa các "KHUÔN CÂU" (template).
   Mỗi khuôn câu giữ cố định điểm ngữ pháp được kiểm tra, chỉ thay đổi
   chủ ngữ / chủ đề / bối cảnh xung quanh — nhờ vậy một khuôn câu có thể
   tạo ra hàng trăm, hàng nghìn câu hỏi khác nhau mà câu nào cũng đúng
   ngữ pháp 100% (vì cấu trúc được giữ cố định, chỉ đổi từ vựng).

   CÁCH THÊM KHUÔN CÂU MỚI: copy 1 object trong đúng nhóm (GRAMMAR_TEMPLATES /
   WORDFORM_TEMPLATES / ERROR_TEMPLATES / TRANSFORM_TEMPLATES), đổi "slots"
   (ngân hàng từ thay được) và hàm "build" (cách ráp câu + đáp án).
===================================================================== */

(function (global) {
  "use strict";

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function resolveSlots(tpl) {
    const v = {};
    if (tpl.slots) {
      Object.keys(tpl.slots).forEach((k) => { v[k] = pick(tpl.slots[k]); });
    }
    if (tpl.pairs) {
      Object.assign(v, pick(tpl.pairs));
    }
    return v;
  }

  /* ---------------- Ngân hàng dùng chung ---------------- */
  const SUBJ = ["My brother","My sister","Our class monitor","The new student","Linh","Minh","Our neighbour",
    "The young scientist","My best friend","The school principal","Several volunteers","The local farmers",
    "A famous photographer","Our English tutor","The tour guide","My cousin","The shop owner",
    "A young researcher","The team leader","Many residents","The exchange student","Our PE teacher"];

  /* ================= 1. NGỮ PHÁP – TỪ VỰNG (22 khuôn câu) ================= */
  const GRAMMAR_TEMPLATES = [

    { id:"decide_to_v",
      slots:{ SUBJ:SUBJ, FILL:["a new hobby","painting as a hobby","photography","a musical instrument","yoga",
        "a new sport","gardening","creative writing","baking","swimming lessons","a foreign language","chess"],
        TIME:["last month","next semester","this year","recently","after the summer break","since last week","this term"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.SUBJ} decided ______ ${v.FILL} ${v.TIME}.`,
        options:["take up","taking up","to take up","took up"], answer:2,
        hint:`Sau "decide" thường đi kèm một dạng động từ đặc biệt, không phải V-ing.`,
        signal:`decide + to-V (động từ nguyên thể có "to").`,
        explain:`"Decide" luôn được theo sau bởi to-infinitive: decide to do something. Đáp án đúng là "to take up".` })},

    { id:"enjoy_ving",
      slots:{ SUBJ:SUBJ, FILL:["comic books","science magazines","mystery novels","short stories","online articles",
        "graphic novels","history books","travel blogs","poetry collections","detective stories",
        "biographies of scientists","fantasy novels"],
        TIME:["every evening","at the weekend","during the holidays","in his free time","in her free time","before bed"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.SUBJ} really enjoys ______ ${v.FILL} ${v.TIME}.`,
        options:["read","reading","to read","reads"], answer:1,
        hint:`"Enjoy" thích những động từ có đuôi "-ing" đứng sau nó.`,
        signal:`enjoy + V-ing.`,
        explain:`Động từ "enjoy" luôn đi với V-ing (gerund): enjoy doing something. Chọn "reading".` })},

    { id:"conditional1",
      slots:{ TIME2:["tomorrow","this weekend","on Saturday","next Sunday"],
        SUBJ2:["we","they","our class","the students"],
        ACT2:["go hiking in the mountains","have a picnic by the river","visit the old citadel",
          "go cycling around the lake","play football at the park","go camping by the sea"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`If the weather ______ fine ${v.TIME2}, ${v.SUBJ2} will ${v.ACT2}.`,
        options:["is","was","were","will be"], answer:0,
        hint:`Có mốc thời gian tương lai và "will" ở mệnh đề sau — đây là câu điều kiện nói về điều có thể xảy ra.`,
        signal:`Câu điều kiện loại 1: If + S + V (hiện tại đơn), S + will + V.`,
        explain:`Đây là câu điều kiện loại 1, mệnh đề "if" dùng thì hiện tại đơn nên ta chọn "is".` })},

    { id:"reduced_relative_passive",
      slots:{ TIME:["last year","two years ago","in 2020","recently","a decade ago"],
        WATER:["river","canal","valley"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The bridge ______ over the ${v.WATER} ${v.TIME} is now open to traffic.`,
        options:["building","built","build","was built"], answer:1,
        hint:`Đây là một mệnh đề quan hệ đã được rút gọn, mang nghĩa bị động.`,
        signal:`Rút gọn mệnh đề quan hệ bị động: (which/that was) + V3/ed.`,
        explain:`Mệnh đề đầy đủ là "which was built..."; khi rút gọn dạng bị động ta giữ V3: "built".` })},

    { id:"report_yesno",
      slots:{ SUBJ:SUBJ, TASK:["the report","my homework","the project","the assignment","the science experiment",
        "the application form","the presentation slides","my essay"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.SUBJ} asked me ______ I had finished ${v.TASK} yet.`,
        options:["that","if","what","when"], answer:1,
        hint:`Câu hỏi gốc là một câu hỏi Yes/No.`,
        signal:`Câu hỏi Yes/No trong câu tường thuật dùng "if" hoặc "whether".`,
        explain:`Vì câu hỏi gốc không có từ hỏi (what/when/where...) nên tường thuật phải dùng "if". ` })},

    { id:"present_perfect_increase",
      slots:{ PLURAL:["students who fail the exam","cars on the road","tourists visiting the area",
        "people using social media","reported pollution cases","online shoppers","electric vehicles",
        "households recycling waste"],
        TIME:["this year","over the past decade","recently","since 2020","in recent years"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The number of ${v.PLURAL} has ______ significantly ${v.TIME}.`,
        options:["increase","increasing","increased","increasement"], answer:2,
        hint:`Sau trợ động từ "has" cần một dạng động từ cụ thể; "increasement" không phải một từ có thật.`,
        signal:`has/have + V3 (thì hiện tại hoàn thành).`,
        explain:`Cấu trúc hiện tại hoàn thành là has/have + V3, nên đáp án đúng là "increased".` })},

    { id:"relative_who_subject",
      slots:{ GROUP:["my class","our school","the whole district","her grade","the English club","the robotics team"],
        AWARD:["a national award","a scholarship abroad","first prize in the contest","a gold medal","a prestigious scholarship"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`She is the only student in ${v.GROUP} ______ has won ${v.AWARD}.`,
        options:["who","whom","whose","which"], answer:0,
        hint:`Từ cần điền đóng vai trò chủ ngữ trong mệnh đề quan hệ, danh từ đứng trước chỉ người.`,
        signal:`Mệnh đề quan hệ, người làm chủ ngữ → who.`,
        explain:`"Student" là người và từ cần điền làm chủ ngữ cho "has won", nên dùng "who".` })},

    { id:"because_of",
      slots:{ SUBJ2:["We","They","The students","Our team"],
        ACT4:["go on the picnic","finish the match","leave on time","hold the event outdoors","continue the trip"],
        CAUSE:["the heavy rain","the sudden storm","the power outage","the road closure","the strong wind"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.SUBJ2} couldn't ${v.ACT4} ______ ${v.CAUSE}.`,
        options:["because","because of","although","so"], answer:1,
        hint:`Phần sau chỗ trống là một cụm danh từ, không có động từ chia.`,
        signal:`because of/due to + cụm danh từ; because + mệnh đề.`,
        explain:`Vì sau chỗ trống là cụm danh từ, ta dùng "because of", không dùng "because".` })},

    { id:"comparative_parallel",
      slots:{ ACT5:["check your essay","plan your trip","read the instructions","prepare for the test",
        "review your code","follow the recipe"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The more carefully you ${v.ACT5}, ______ mistakes you will make.`,
        options:["the fewer","fewer","the few","the less"], answer:0,
        hint:`"Mistakes" là danh từ đếm được, số nhiều.`,
        signal:`The + so sánh hơn, the + so sánh hơn; danh từ đếm được dùng "fewer".`,
        explain:`Cấu trúc song hành cần "the" ở cả hai mệnh đề; "mistakes" đếm được nên dùng "the fewer".` })},

    { id:"nondefining_which_thing",
      slots:{ THING:["This documentary","The short film","Her latest music video","The travel series","This advertisement"],
        PLACE:["the Mekong Delta","Sa Pa","Ha Long Bay","Hoi An","the Central Highlands"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.THING}, ______ was filmed in ${v.PLACE}, has won several awards.`,
        options:["that","which","who","whose"], answer:1,
        hint:`Có dấu phẩy ngay trước chỗ trống — mệnh đề quan hệ không xác định.`,
        signal:`Mệnh đề quan hệ không xác định (có dấu phẩy) không dùng "that".`,
        explain:`Vì có dấu phẩy và vật được nói đến là một sản phẩm (vật), ta dùng "which", không dùng "that".` })},

    { id:"would_rather",
      slots:{ SUBJ3:["I","She","He","We","They"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.SUBJ3} would rather ______ at home than go out in this weather.`,
        options:["stay","staying","to stay","stayed"], answer:0,
        hint:`Cấu trúc "would rather" có quy tắc đặc biệt, không cần "to".`,
        signal:`would rather + V (nguyên thể, không "to").`,
        explain:`"Would rather" theo sau bởi động từ nguyên thể không "to". Chọn "stay".` })},

    { id:"past_perfect_bytime",
      slots:{ TARGET:["the building","the warehouse","the old market","the wooden house","the storage area"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`By the time the firefighters arrived, the fire ______ most of ${v.TARGET}.`,
        options:["destroyed","has destroyed","had destroyed","was destroying"], answer:2,
        hint:`Một hành động đã hoàn tất trước một thời điểm khác trong quá khứ.`,
        signal:`By the time + quá khứ đơn, S + had + V3.`,
        explain:`Đám cháy đã phá hủy TRƯỚC KHI lính cứu hỏa đến, nên dùng quá khứ hoàn thành: "had destroyed".` })},

    { id:"purpose_to_v",
      slots:{ AUTHORITY:["The government","The city council","Local authorities","The ministry"],
        TOPIC:["air pollution","plastic waste","traffic congestion","water shortage","noise pollution"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.AUTHORITY} has introduced new policies ______ ${v.TOPIC} in big cities.`,
        options:["reduce","reduction","reductive","to reduce"], answer:3,
        hint:`Phần này diễn tả mục đích của các chính sách.`,
        signal:`to + V (nguyên thể) diễn tả mục đích.`,
        explain:`Chỗ trống nêu mục đích, nên dùng to-infinitive: "to reduce".` })},

    { id:"despite_ving",
      slots:{ SUBJ4:["the volunteers","the workers","the students","the rescue team"],
        ACT6:["cleaning the beach","repairing the road","searching for survivors","planting trees","collecting donations"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`Despite ______ very tired, ${v.SUBJ4} continued ${v.ACT6} until sunset.`,
        options:["being","they were","be","to be"], answer:0,
        hint:`Sau "despite" không thể có một mệnh đề đầy đủ.`,
        signal:`Despite/In spite of + V-ing/danh từ, KHÔNG + mệnh đề.`,
        explain:`"Despite" phải theo sau bởi V-ing hoặc danh từ, không theo sau bởi mệnh đề. Đáp án là "being".` })},

    { id:"reported_request_turnoff",
      slots:{ MANAGER:["The manager","The supervisor","The teacher","The host","The shop owner"],
        OBJ3:["the lights","the air conditioners","the computers","the fans"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`${v.MANAGER} asked the staff ______ off ${v.OBJ3} before leaving the office.`,
        options:["turn","turning","to turn","turned"], answer:2,
        hint:`Đây là một lời yêu cầu lịch sự được tường thuật lại.`,
        signal:`ask sb (not) to V trong câu tường thuật lời yêu cầu.`,
        explain:`Lời yêu cầu khi tường thuật chuyển thành "ask sb to V": "asked the staff to turn off".` })},

    { id:"due_to",
      slots:{ CAUSE2:["habitat loss","illegal hunting","rising temperatures","pollution","deforestation","climate change"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`Many endangered species are at risk of extinction ______ ${v.CAUSE2}.`,
        options:["due to","because","even though","unless"], answer:0,
        hint:`Sau chỗ trống là một cụm danh từ.`,
        signal:`due to/because of + cụm danh từ.`,
        explain:`Vì theo sau là cụm danh từ, ta dùng "due to". "Because" cần theo sau một mệnh đề.` })},

    { id:"passive_perfect_plural",
      slots:{ TOPIC:["plastic waste","air pollution","climate change","ocean pollution","deforestation"],
        AREA:["marine life","public health","local wildlife","children's behaviour","the economy"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The negative effects of ${v.TOPIC} on ${v.AREA} ______ widely studied by scientists.`,
        options:["is","are","has been","have been"], answer:3,
        hint:`Tìm chủ ngữ thật của câu — số ít hay số nhiều? Câu ở thể bị động hoàn thành.`,
        signal:`Chủ ngữ số nhiều "the effects" + bị động hoàn thành: have been + V3.`,
        explain:`Chủ ngữ chính là "the negative effects" (số nhiều), nên dùng "have been studied".` })},

    { id:"admit_ving",
      slots:{ OBJ:["the window","the vase","the fence","the gate"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`He admitted ______ ${v.OBJ} although his parents had told him not to.`,
        options:["break","breaking","to break","broken"], answer:1,
        hint:`Động từ "admit" đi với một loại động từ quen thuộc, giống "enjoy".`,
        signal:`admit + V-ing.`,
        explain:`"Admit" luôn theo sau bởi V-ing: admit doing something. Chọn "breaking".` })},

    { id:"spend_time_ving",
      slots:{ DURATION:["the whole weekend","several hours","two full days","every afternoon"],
        OBJ2:["trees","young mangroves","flowers","vegetables"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The volunteers spent ${v.DURATION} ______ ${v.OBJ2} along the riverbank.`,
        options:["plant","planted","planting","to plant"], answer:2,
        hint:`Cấu trúc "spend + khoảng thời gian" có quy tắc cố định về dạng động từ theo sau.`,
        signal:`spend + thời gian + V-ing.`,
        explain:`Cấu trúc "spend + time + V-ing" diễn tả việc dành thời gian làm gì, nên chọn "planting".` })},

    { id:"wish_past",
      slots:{ PURPOSE:["prepare for the entrance exam","finish the project","practise my speaking skills",
        "review all the lessons","travel around the country"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`I wish I ______ more time to ${v.PURPOSE}.`,
        options:["have","had","having","will have"], answer:1,
        hint:`Câu này diễn tả một điều không có thật ở hiện tại.`,
        signal:`wish + S + V2/ed (quá khứ đơn) → ước không thật ở hiện tại.`,
        explain:`Câu ước với "wish" diễn tả điều không thật ở hiện tại dùng quá khứ đơn: "wish I had".` })},

    { id:"suggest_bare",
      slots:{ TASK2:["extra exercises","the reading passage","our notes","the vocabulary list"],
        EVENT2:["the test","the final exam","the presentation","the interview"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The teacher suggested that we ______ ${v.TASK2} before ${v.EVENT2}.`,
        options:["do","did","doing","to do"], answer:0,
        hint:`Sau "suggest that" động từ ở mệnh đề sau không chia theo chủ ngữ.`,
        signal:`suggest/recommend that + S + V (nguyên thể, không chia).`,
        explain:`Với "suggest that", động từ giữ nguyên thể, không chia: "suggested that we do".` })},

    { id:"allow_sb_to",
      slots:{ ACT7:["their daily water consumption","their monthly spending","their sleep quality",
        "their exercise progress","their carbon footprint"] },
      build:(v)=>({ kind:"mc", sub:"grammar",
        prompt:`The smartphone app allows users ______ ${v.ACT7} easily.`,
        options:["track","tracked","to track","tracking"], answer:2,
        hint:`Cấu trúc "allow somebody" cần một dạng động từ quen thuộc theo sau.`,
        signal:`allow sb to V.`,
        explain:`Cấu trúc cố định "allow sb to do something", đáp án đúng là "to track".` })}
  ];

  /* ================= 2. ĐÚNG DẠNG TỪ (18 khuôn câu) ================= */
  const WORDFORM_TEMPLATES = [

    { id:"wf_reduction",
      slots:{ TOPIC:["Deforestation","Urban expansion","Overfishing","Industrial pollution","Climate change","Illegal logging"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`${v.TOPIC} has caused a significant ______ in biodiversity across the region.`,
        badge:"REDUCE", accepted:["reduction"],
        hint:`Chỗ trống cần một danh từ.`, signal:`Danh từ thường có đuôi -ion/-tion.`,
        explain:`Cần danh từ "sự suy giảm": reduction.` })},

    { id:"wf_creativity",
      slots:{ PERSON2:["the new intern","the design team","a first-year student","the marketing department","a young entrepreneur"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The committee was impressed by the ______ of the proposal submitted by ${v.PERSON2}.`,
        badge:"CREATE", accepted:["creativity"],
        hint:`Chỗ trống đứng sau "the" và cần một danh từ.`, signal:`the + danh từ + of.`,
        explain:`Cần danh từ "sự sáng tạo": creativity.` })},

    { id:"wf_separately",
      slots:{ MATERIAL:["paper, glass, and plastic","different types of waste","household rubbish","electronic devices","old batteries"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`It is important to recycle ${v.MATERIAL} ______.`,
        badge:"SEPARATE", accepted:["separately"],
        hint:`Chỗ trống bổ nghĩa cho động từ "recycle".`, signal:`Động từ + trạng từ.`,
        explain:`Cần trạng từ "riêng biệt": separately.` })},

    { id:"wf_awareness",
      slots:{ ISSUE:["single-use plastic","food additives","air pollution","online scams","climate change"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The lecture raised public ______ about the dangers of ${v.ISSUE}.`,
        badge:"AWARE", accepted:["awareness"],
        hint:`Chỗ trống là tân ngữ của "raised", cần một danh từ.`, signal:`raise + danh từ.`,
        explain:`Cần danh từ "sự nhận thức": awareness.` })},

    { id:"wf_proud",
      slots:{ PERSON3:["She","He","The young athlete","Our whole team"],
        EVENT3:["the competition","the science fair","the singing contest","the marathon","the chess tournament"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`${v.PERSON3} felt extremely ______ after winning first prize in ${v.EVENT3}.`,
        badge:"PRIDE", accepted:["proud"],
        hint:`Chỗ trống bổ nghĩa cho động từ "felt", cần một tính từ.`, signal:`feel + tính từ.`,
        explain:`Cần tính từ "tự hào": proud (từ danh từ pride).` })},

    { id:"wf_accessible",
      slots:{ SERVICE:["public transport","the library","this website","the train station","local parks"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The new policy aims to make ${v.SERVICE} more ______ for people with disabilities.`,
        badge:"ACCESS", accepted:["accessible"],
        hint:`Chỗ trống bổ nghĩa cho danh từ phía trước, sau "more".`, signal:`more + tính từ.`,
        explain:`Cần tính từ "dễ tiếp cận": accessible.` })},

    { id:"wf_congestion",
      slots:{ SUBJECT4:["The new metro line","The bicycle-sharing scheme","The road expansion project","The carpooling campaign"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`${v.SUBJECT4} reduced traffic ______ in the city centre noticeably.`,
        badge:"CONGEST", accepted:["congestion"],
        hint:`Chỗ trống đứng sau "traffic" và cần một danh từ.`, signal:`Danh từ + danh từ (traffic congestion).`,
        explain:`Cần danh từ "sự tắc nghẽn": congestion.` })},

    { id:"wf_irrigation",
      slots:{ REGION:["the Mekong Delta","this province","the highlands","the central region","the northern mountains"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`Many farmers in ${v.REGION} rely on rainwater for ______ purposes.`,
        badge:"IRRIGATE", accepted:["irrigation"],
        hint:`Chỗ trống bổ nghĩa cho danh từ "purposes".`, signal:`Danh từ + danh từ.`,
        explain:`Cần danh từ "sự tưới tiêu": irrigation.` })},

    { id:"wf_historical",
      slots:{ ERA:["the Ly Dynasty","the colonial period","ancient Champa","the Bronze Age","the early 20th century"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The museum's new exhibition focuses on ______ artefacts from ${v.ERA}.`,
        badge:"HISTORY", accepted:["historical"],
        hint:`Chỗ trống bổ nghĩa cho danh từ "artefacts".`, signal:`Tính từ + danh từ.`,
        explain:`Cần tính từ "thuộc về lịch sử": historical.` })},

    { id:"wf_protection",
      slots:{ SPECIES:["endangered species","sea turtles","the local forest","coral reefs","rare orchids"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`Volunteers played an important role in the ______ of ${v.SPECIES}.`,
        badge:"PROTECT", accepted:["protection"],
        hint:`Chỗ trống đứng sau "the" và "in the", cần một danh từ.`, signal:`the + danh từ + of.`,
        explain:`Cần danh từ "sự bảo vệ": protection.` })},

    { id:"wf_informative",
      slots:{ SUBJ_TOPIC:["renewable energy","marine biology","artificial intelligence","ancient civilisations","climate science"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The professor gave a very ______ lecture on ${v.SUBJ_TOPIC}.`,
        badge:"INFORM", accepted:["informative"],
        hint:`Chỗ trống bổ nghĩa cho danh từ "lecture".`, signal:`Tính từ + danh từ.`,
        explain:`Cần tính từ "có nhiều thông tin bổ ích": informative.` })},

    { id:"wf_ability",
      slots:{ PERSON4:["Her","His","My classmate's","The young boy's"],
        SKILL:["three languages by the age of fifteen","the violin in just six months","advanced mathematics","coding at the age of ten"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`${v.PERSON4} ______ to learn ${v.SKILL} amazed everyone.`,
        badge:"ABLE", accepted:["ability"],
        hint:`Chỗ trống làm chủ ngữ của câu, cần một danh từ.`, signal:`Tính từ sở hữu + danh từ.`,
        explain:`Cần danh từ "khả năng": ability.` })},

    { id:"wf_innovative",
      slots:{ GOAL:["reducing plastic packaging","customer service","employee training","reducing carbon emissions"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The company was praised for its ______ approach to ${v.GOAL}.`,
        badge:"INNOVATE", accepted:["innovative"],
        hint:`Chỗ trống bổ nghĩa cho danh từ "approach".`, signal:`Tính từ + danh từ.`,
        explain:`Cần tính từ "đổi mới, sáng tạo": innovative.` })},

    { id:"wf_fortunately",
      slots:{ INFRA:["bridge","highway","railway line","tunnel"], PLACES:["cities","districts","provinces","towns"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`______, the new ${v.INFRA} has reduced travel time between the two ${v.PLACES}.`,
        badge:"FORTUNATE", accepted:["fortunately"],
        hint:`Chỗ trống đứng đầu câu, có dấu phẩy — cần một trạng từ.`, signal:`Trạng từ + dấu phẩy + mệnh đề.`,
        explain:`Cần trạng từ "may mắn là": fortunately.` })},

    { id:"wf_harmful",
      slots:{ WATERBODY:["the river","the local lake","the canal","the bay"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The factory was fined for releasing ______ chemicals into ${v.WATERBODY}.`,
        badge:"HARM", accepted:["harmful"],
        hint:`Chỗ trống bổ nghĩa cho danh từ "chemicals".`, signal:`Tính từ + danh từ.`,
        explain:`Cần tính từ "có hại": harmful.` })},

    { id:"wf_fitness",
      slots:{},
      build:()=>({ kind:"text", sub:"wordform",
        prompt:`Doctors recommend regular exercise to improve overall physical ______.`,
        badge:"FIT", accepted:["fitness"],
        hint:`Chỗ trống đứng sau tính từ "physical", cần một danh từ.`, signal:`Tính từ + danh từ.`,
        explain:`Cần danh từ "sự khỏe mạnh, thể lực": fitness.` })},

    { id:"wf_practical",
      slots:{ PROBLEM:["the design problem","the flooding issue","the traffic bottleneck","the software bug","the energy shortage"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`It took the engineers several months to find a ______ solution to ${v.PROBLEM}.`,
        badge:"PRACTICE", accepted:["practical"],
        hint:`Chỗ trống bổ nghĩa cho danh từ "solution".`, signal:`Tính từ + danh từ.`,
        explain:`Cần tính từ "thực tế, khả thi": practical.` })},

    { id:"wf_generosity",
      slots:{ VICTIMS:["flood victims rebuild their homes","homeless families during winter","earthquake survivors","orphaned children"] },
      build:(v)=>({ kind:"text", sub:"wordform",
        prompt:`The volunteers showed great ______ when helping ${v.VICTIMS}.`,
        badge:"GENEROUS", accepted:["generosity"],
        hint:`Chỗ trống đứng sau "great", cần một danh từ.`, signal:`great + danh từ.`,
        explain:`Cần danh từ "sự rộng lượng": generosity.` })}
  ];

  /* ================= 3. TÌM VÀ SỬA LỖI SAI (14 khuôn câu) ================= */
  const ERROR_TEMPLATES = [

    { id:"er_one_of_plural",
      slots:{ SUBJ:["She","He","Linh","Minh","My classmate"],
        NOUN_SING:["student","athlete","volunteer","employee","artist","engineer"],
        OBJ:["homework on time","reports before the deadline","assignments early","projects on schedule"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`${v.SUBJ} is one of the ${v.NOUN_SING} who always submit ${v.OBJ}.`,
        wrong:v.NOUN_SING, accepted:[v.NOUN_SING + "s"],
        hint:`Cấu trúc "one of the + ?" luôn cần danh từ ở một dạng đặc biệt.`,
        signal:`one of the + danh từ số nhiều.`,
        explain:`Cấu trúc "one of the + danh từ số nhiều" — phải sửa thành "${v.NOUN_SING}s".` })},

    { id:"er_conditional2",
      slots:{ OFFER:["the scholarship offer","the job offer","this opportunity","the internship position","the exchange programme"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`If I was you, I would accept ${v.OFFER} immediately.`,
        wrong:"was", accepted:["were"],
        hint:`Đây là câu điều kiện diễn tả một tình huống giả định không thật ở hiện tại.`,
        signal:`Câu điều kiện loại 2: If I were you, ...`,
        explain:`Trong câu điều kiện loại 2, "to be" ở mệnh đề if luôn dùng "were" cho mọi chủ ngữ.` })},

    { id:"er_despite_of",
      slots:{ PLACE2:["the airport","the train station","the venue","the meeting","school"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`Despite of the heavy traffic, we arrived at ${v.PLACE2} on time.`,
        wrong:"Despite of", accepted:["Despite"],
        hint:`"Despite" không cần thêm giới từ "of" theo sau.`,
        signal:`Despite + N (không "of"); In spite of + N (có "of").`,
        explain:`"Despite" đã mang nghĩa "mặc dù", không cần "of". Phải sửa thành "Despite".` })},

    { id:"er_relative_tense",
      slots:{ EXAM:["the final exam","the entrance test","this subject","the mock exam"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`The number of students who failing ${v.EXAM} has increased this year.`,
        wrong:"failing", accepted:["fail"],
        hint:`Mệnh đề quan hệ "who ______" cần một động từ được chia, không phải V-ing.`,
        signal:`Mệnh đề quan hệ cần động từ chia theo thời của câu.`,
        explain:`Mệnh đề quan hệ "who" cần động từ ở thì hiện tại đơn để khớp với "has increased": "who fail".` })},

    { id:"er_since_for",
      slots:{ DURATION:["five years","ten years","three years","a decade","two years"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`My father has been working at this company since ${v.DURATION}.`,
        wrong:"since", accepted:["for"],
        hint:`Phần sau chỗ gạch dưới là một khoảng thời gian, không phải một mốc thời gian.`,
        signal:`since + mốc thời gian; for + khoảng thời gian.`,
        explain:`"${v.DURATION}" là một khoảng thời gian, nên phải dùng "for", không dùng "since".` })},

    { id:"er_reported_question",
      slots:{ TRANSPORT:["the train","the bus","the ferry","the flight"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`She wanted to know what time does ${v.TRANSPORT} leave.`,
        wrong:`does ${v.TRANSPORT} leave`, accepted:[`${v.TRANSPORT} leaves`],
        hint:`Đây là một câu hỏi được tường thuật lại, không giữ trật tự câu hỏi trực tiếp.`,
        signal:`Câu hỏi gián tiếp có trật tự S + V, không dùng trợ động từ does/did.`,
        explain:`Trong câu hỏi gián tiếp, không dùng "does" và giữ trật tự chủ ngữ - động từ: "${v.TRANSPORT} leaves".` })},

    { id:"er_double_superlative",
      slots:{ PLACE4:["beach","city","temple","village","island","mountain"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`This is the most beautifulest ${v.PLACE4} I have ever visited.`,
        wrong:"most beautifulest", accepted:["most beautiful"],
        hint:`Đây là lỗi so sánh kép — dùng hai cách so sánh cùng lúc.`,
        signal:`Không dùng "most" và đuôi "-est" cùng một lúc.`,
        explain:`"Beautiful" là tính từ dài, chỉ cần "most beautiful", không thêm cả đuôi "-est".` })},

    { id:"er_lookforward",
      slots:{ PERSON5:["you","the admissions office","your team","the organisers"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`I look forward to hear from ${v.PERSON5} soon.`,
        wrong:"hear", accepted:["hearing"],
        hint:`Cụm "look forward to" có quy tắc riêng về từ loại theo sau.`,
        signal:`look forward to + V-ing.`,
        explain:`Cụm "look forward to" luôn theo sau bởi V-ing: "look forward to hearing".` })},

    { id:"er_much_many",
      slots:{ EVENT4:["the concert","the festival","the stadium","the night market"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`There is too much people at ${v.EVENT4} tonight.`,
        wrong:"much", accepted:["many"],
        hint:`"People" là danh từ đếm được, số nhiều.`,
        signal:`many + danh từ đếm được; much + danh từ không đếm được.`,
        explain:`"People" là danh từ đếm được (số nhiều), nên phải dùng "many", không dùng "much".` })},

    { id:"er_suggest_sb_to",
      slots:{ EXAM2:["the final exam","the entrance test","the upcoming quiz","next week's test"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`He suggested me to study harder for ${v.EXAM2}.`,
        wrong:"me to study", accepted:["that I (should) study"],
        hint:`Động từ "suggest" không đi theo cấu trúc "suggest sb to V".`,
        signal:`suggest (that) + S + (should) + V; KHÔNG dùng suggest sb to V.`,
        explain:`"Suggest" không được dùng với "suggest sb to V"; phải dùng "suggest that + S + (should) + V".` })},

    { id:"er_that_which",
      slots:{ THING4:["The bridge","The old theatre","The tower","The stadium","The library"],
        YEAR:["1980","1975","1990","2001","1968"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`${v.THING4}, that was built in ${v.YEAR}, is now closed for repairs.`,
        wrong:"that", accepted:["which"],
        hint:`Có dấu phẩy trước và sau cụm thông tin thêm.`,
        signal:`Mệnh đề quan hệ không xác định (có dấu phẩy) không dùng "that".`,
        explain:`Vì có dấu phẩy (mệnh đề không xác định), phải dùng "which" thay vì "that".` })},

    { id:"er_each_of",
      slots:{ GROUPNOUN:["the students","the players","the volunteers","the staff members"],
        ITEM:["their own laptop","a valid ID card","their own lunch","a signed form"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`Each of ${v.GROUPNOUN} have to bring ${v.ITEM} tomorrow.`,
        wrong:"have", accepted:["has"],
        hint:`"Each of + danh từ số nhiều" luôn đi với động từ chia theo ngôi thứ ba số ít.`,
        signal:`Each of + danh từ số nhiều + động từ số ít.`,
        explain:`Chủ ngữ thật của câu là "each" (số ít), nên động từ phải là "has".` })},

    { id:"er_information",
      slots:{ PERSON6:["you","she","the guide","the website","my colleague"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`The information that ${v.PERSON6} gave me yesterday were not accurate.`,
        wrong:"were", accepted:["was"],
        hint:`"Information" là một danh từ không đếm được, luôn ở dạng số ít.`,
        signal:`"Information" là danh từ không đếm được → động từ số ít.`,
        explain:`"Information" luôn số ít, nên động từ phải là "was", không dùng "were".` })},

    { id:"er_neither_of",
      slots:{ OPTIONS:["the answers","the two options","these statements","those choices"] },
      build:(v)=>({ kind:"text", sub:"errors",
        prompt:`Neither of ${v.OPTIONS} are correct, I'm afraid.`,
        wrong:"are", accepted:["is"],
        hint:`"Neither of + danh từ số nhiều" luôn đi với động từ số ít.`,
        signal:`Neither of + danh từ số nhiều + động từ số ít.`,
        explain:`"Neither" mang nghĩa số ít, nên động từ theo sau phải chia số ít: "is".` })}
  ];

  /* ================= 4. VIẾT LẠI CÂU (14 khuôn câu) ================= */
  const TRANSFORM_TEMPLATES = [

    { id:"tr_because_of_ving",
      slots:{ EVENT:["the meeting","the interview","the ceremony","class","the exam"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`Mr. Hung's car broke down, so he was late for ${v.EVENT}.`,
        prompt:`Because of ______, Mr. Hung was late for ${v.EVENT}.`,
        accepted:["his car breaking down","his car's breaking down"], maxWords:4,
        hint:`"Because of" cần theo sau là một cụm danh từ/danh động từ.`,
        signal:`because of + V-ing (danh động từ) hoặc cụm danh từ.`,
        explain:`Chuyển mệnh đề "his car broke down" thành cụm danh động từ: "his car breaking down".` })},

    { id:"tr_unless",
      slots:{ VERB3:["study","practise","train","prepare"], EXAM3:["the exam","the test","the interview","the trial"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`Unless you ${v.VERB3} harder, you won't pass ${v.EXAM3}.`,
        prompt:`If you ______ harder, you won't pass ${v.EXAM3}.`,
        accepted:[`don't ${v.VERB3}`], maxWords:4,
        hint:`"Unless" mang nghĩa phủ định, tương đương với "if... not".`,
        signal:`Unless = If... not.`,
        explain:`"Unless you ${v.VERB3}" = "If you don't ${v.VERB3}".` })},

    { id:"tr_reported_want",
      slots:{ PLACE:["Da Lat","Hoi An","Phu Quoc","Sa Pa","Nha Trang"] },
      pairs:[{NAME:"Lan",PRON:"she"},{NAME:"Nam",PRON:"he"},{NAME:"Mai",PRON:"she"},{NAME:"Hung",PRON:"he"},{NAME:"An",PRON:"she"}],
      build:(v)=>({ kind:"text", sub:"transform",
        original:`"I want to visit ${v.PLACE} next summer," said ${v.NAME}.`,
        prompt:`${v.NAME} said that ______ to visit ${v.PLACE} next summer.`,
        accepted:[`${v.PRON} wanted`], maxWords:4,
        hint:`Câu trực tiếp ở thì hiện tại đơn cần được lùi thì khi chuyển sang câu tường thuật.`,
        signal:`Câu tường thuật: lùi thì hiện tại đơn → quá khứ đơn.`,
        explain:`"I want" lùi thì thành "${v.PRON} wanted" trong câu tường thuật.` })},

    { id:"tr_wish_could",
      slots:{ EVENT5:["your wedding","the ceremony","the graduation party","the reunion","the workshop"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`It's a pity that I can't attend ${v.EVENT5}.`,
        prompt:`I wish ______ attend ${v.EVENT5}.`,
        accepted:["I could"], maxWords:4,
        hint:`Câu ước diễn tả điều không thể xảy ra ở hiện tại.`,
        signal:`wish + S + could + V.`,
        explain:`"I can't attend" chuyển thành "I wish I could attend".` })},

    { id:"tr_nondefining_who",
      slots:{ SKILL2:["football","badminton","chess","swimming"], TEAM:["the school team","the district team","our class team","the youth club"] },
      pairs:[{PERSON7:"My brother",PRON2:"He"},{PERSON7:"My sister",PRON2:"She"},{PERSON7:"My cousin",PRON2:"He"},{PERSON7:"Her classmate",PRON2:"She"}],
      build:(v)=>({ kind:"text", sub:"transform",
        original:`${v.PERSON7} is good at ${v.SKILL2}. ${v.PRON2} plays for ${v.TEAM}.`,
        prompt:`${v.PERSON7}, ______ for ${v.TEAM}, is good at ${v.SKILL2}.`,
        accepted:["who plays"], maxWords:4,
        hint:`Hai câu được nối lại bằng một mệnh đề quan hệ không xác định.`,
        signal:`Mệnh đề quan hệ không xác định: who + V.`,
        explain:`Câu thứ hai rút gọn thành mệnh đề quan hệ: "who plays for ${v.TEAM}".` })},

    { id:"tr_passive_believe",
      slots:{ THING5:["the bridge","the temple","the citadel","the tower","the pagoda"], AGE:["100","200","500","1,000"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`People believe that ${v.THING5} was built over ${v.AGE} years ago.`,
        prompt:`${cap(v.THING5)} ______ built over ${v.AGE} years ago.`,
        accepted:["is believed to have been"], maxWords:4,
        hint:`Cấu trúc bị động đặc biệt với động từ tường thuật "believe".`,
        signal:`S + be + believed + to have been + V3.`,
        explain:`Cấu trúc bị động: "${cap(v.THING5)} is believed to have been built...".` })},

    { id:"tr_present_perfect_cont",
      slots:{ SKILL3:["the piano","the guitar","Japanese","painting"], AGO:["five years","three years","two years","six months"] },
      pairs:[{SUBJ8:"She"},{SUBJ8:"He"},{SUBJ8:"My brother"},{SUBJ8:"My friend"}],
      build:(v)=>({ kind:"text", sub:"transform",
        original:`${v.SUBJ8} started learning ${v.SKILL3} ${v.AGO} ago.`,
        prompt:`${v.SUBJ8} ______ ${v.SKILL3} for ${v.AGO}.`,
        accepted:["has been learning","has learnt","has learned"], maxWords:4,
        hint:`Hành động bắt đầu trong quá khứ và vẫn tiếp tục đến hiện nay.`,
        signal:`have/has been + V-ing (hiện tại hoàn thành tiếp diễn).`,
        explain:`Vì hành động bắt đầu cách đây ${v.AGO} và vẫn tiếp diễn, dùng hiện tại hoàn thành (tiếp diễn): "has been learning".` })},

    { id:"tr_reported_request2",
      slots:{ THING6:["the lights","the air conditioners","the computers","the machines"],
        MANAGER2:["The manager","The supervisor","The teacher"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`"Could you please turn off ${v.THING6} before you leave?" ${v.MANAGER2} said to the staff.`,
        prompt:`${v.MANAGER2} asked the staff ______ off ${v.THING6} before they left.`,
        accepted:["to turn"], maxWords:4,
        hint:`Đây là một lời yêu cầu lịch sự được tường thuật lại.`,
        signal:`ask sb to V trong câu tường thuật lời yêu cầu.`,
        explain:`Lời yêu cầu chuyển thành "asked the staff to turn off".` })},

    { id:"tr_so_adj_that",
      pairs:[
        {THING7:"The weather",ADJ:"cold",RESULT2:"we decided to stay indoors"},
        {THING7:"The exam",ADJ:"difficult",RESULT2:"many students felt discouraged"},
        {THING7:"The traffic",ADJ:"heavy",RESULT2:"we arrived an hour late"},
        {THING7:"The music",ADJ:"loud",RESULT2:"we couldn't hear each other"},
        {THING7:"The lecture",ADJ:"boring",RESULT2:"several students fell asleep"},
        {THING7:"The food",ADJ:"spicy",RESULT2:"I couldn't finish my plate"}
      ],
      build:(v)=>({ kind:"text", sub:"transform",
        original:`${v.THING7} was so ${v.ADJ} that ${v.RESULT2}.`,
        prompt:`It was ______ ${v.ADJ} that ${v.RESULT2}.`,
        accepted:["so"], maxWords:4,
        hint:`Cấu trúc "so... that" diễn tả kết quả của một mức độ rất cao.`,
        signal:`so + tính từ + that + mệnh đề kết quả.`,
        explain:`Cấu trúc "so + adj + that" diễn tả kết quả — chỉ cần điền "so".` })},

    { id:"tr_although_despite",
      pairs:[
        {CAUSEPHRASE:"the heavy rain",CLAUSE:"it was raining heavily",RESULT3:"the football match continued"},
        {CAUSEPHRASE:"his busy schedule",CLAUSE:"he was very busy",RESULT3:"he still helped us move"},
        {CAUSEPHRASE:"the high price",CLAUSE:"the price was high",RESULT3:"many people still bought the phone"},
        {CAUSEPHRASE:"the strong wind",CLAUSE:"the wind was blowing strongly",RESULT3:"the boats still went out to sea"},
        {CAUSEPHRASE:"her lack of experience",CLAUSE:"she didn't have much experience",RESULT3:"she finished the project successfully"}
      ],
      build:(v)=>({ kind:"text", sub:"transform",
        original:`Despite ${v.CAUSEPHRASE}, ${v.RESULT3}.`,
        prompt:`Although ______, ${v.RESULT3}.`,
        accepted:[v.CLAUSE], maxWords:6,
        hint:`"Although" cần theo sau một mệnh đề đầy đủ, khác với "despite".`,
        signal:`Although + S + V; despite + N/V-ing.`,
        explain:`Cụm danh từ sau "despite" được chuyển thành mệnh đề đầy đủ sau "although": "${v.CLAUSE}".` })},

    { id:"tr_first_time_never",
      pairs:[
        {SUBJ9:"I",AUX:"have"},{SUBJ9:"We",AUX:"have"},{SUBJ9:"She",AUX:"has"},{SUBJ9:"He",AUX:"has"},{SUBJ9:"They",AUX:"have"}
      ],
      slots:{ FOOD:["durian","snails","this dish","raw fish","balut"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`This is the first time ${v.SUBJ9} ${v.AUX} eaten ${v.FOOD}.`,
        prompt:`${v.SUBJ9} ______ ${v.FOOD} before.`,
        accepted:[`${v.AUX} never eaten`], maxWords:4,
        hint:`"This is the first time + hiện tại hoàn thành" tương đương với cách nói dùng "never".`,
        signal:`This is the first time S has/have V3 = S have/has never V3 ... before.`,
        explain:`Câu trên mang nghĩa tương đương với "${v.SUBJ9} ${v.AUX} never eaten ${v.FOOD} before".` })},

    { id:"tr_passive_continuous",
      slots:{ STRUCT2:["a new hospital","a new bridge","a sports stadium","a shopping mall"],
        AREA2:["our district","the city centre","this province","the new urban area"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`They are building ${v.STRUCT2} in ${v.AREA2}.`,
        prompt:`${cap(v.STRUCT2)} ______ in ${v.AREA2}.`,
        accepted:["is being built"], maxWords:4,
        hint:`Câu chủ động ở thì hiện tại tiếp diễn cần được chuyển sang thể bị động.`,
        signal:`Bị động hiện tại tiếp diễn: is/are + being + V3.`,
        explain:`Câu chủ động ở thì hiện tại tiếp diễn chuyển sang bị động: "is being built".` })},

    { id:"tr_too_enough",
      slots:{ SUBJ10:["He","She","My little brother","My cousin"],
        ACT8:["drive a motorbike","vote in the election","watch this film","join the army","get a driving licence"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`${v.SUBJ10} is too young to ${v.ACT8}.`,
        prompt:`${v.SUBJ10} isn't ______ to ${v.ACT8}.`,
        accepted:["old enough"], maxWords:4,
        hint:`Cấu trúc "too...to" có thể chuyển sang cấu trúc phủ định với "enough".`,
        signal:`too + adj + to V = not + adj + enough + to V.`,
        explain:`"Too young to" tương đương với "not old enough to": "isn't old enough".` })},

    { id:"tr_promise_to",
      slots:{ PERSON8:["My sister","My brother","My friend","My classmate"],
        TASK4:["my homework","the project","my essay","the presentation"] },
      build:(v)=>({ kind:"text", sub:"transform",
        original:`${v.PERSON8} said, "I will help you with ${v.TASK4} tonight."`,
        prompt:`${v.PERSON8} promised ______ me with ${v.TASK4} that night.`,
        accepted:["to help"], maxWords:4,
        hint:`Động từ "promise" thường đi với một dạng động từ quen thuộc.`,
        signal:`promise to V.`,
        explain:`Cấu trúc "promise to do something" — câu trực tiếp "I will help" chuyển thành "promised to help".` })}
  ];

  /* ---------------- Hàm sinh câu (chọn ngẫu nhiên, không trùng trong 1 lượt) ---------------- */
  function generateMany(list, n, usedSet) {
    const set = usedSet || new Set();
    const out = [];
    let guard = 0;
    while (out.length < n && guard < n * 40 + 80) {
      guard++;
      const tpl = pick(list);
      const v = resolveSlots(tpl);
      const sig = tpl.id + "::" + JSON.stringify(v);
      if (set.has(sig)) continue;
      set.add(sig);
      const built = tpl.build(v);
      built.uid = tpl.id + "-" + Math.random().toString(36).slice(2, 8);
      out.push(built);
    }
    return out;
  }

  global.GENERATORS = {
    grammar:   (n, usedSet) => generateMany(GRAMMAR_TEMPLATES, n, usedSet),
    wordform:  (n, usedSet) => generateMany(WORDFORM_TEMPLATES, n, usedSet),
    errors:    (n, usedSet) => generateMany(ERROR_TEMPLATES, n, usedSet),
    transform: (n, usedSet) => generateMany(TRANSFORM_TEMPLATES, n, usedSet),
    templateCounts: {
      grammar: GRAMMAR_TEMPLATES.length,
      wordform: WORDFORM_TEMPLATES.length,
      errors: ERROR_TEMPLATES.length,
      transform: TRANSFORM_TEMPLATES.length
    }
  };

})(typeof window !== "undefined" ? window : globalThis);
