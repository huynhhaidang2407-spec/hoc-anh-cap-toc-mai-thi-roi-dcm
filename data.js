/* =====================================================================
   OVERLORD ENGLISH — NGÂN HÀNG CÂU HỎI
   Tác giả nội dung & web: Huỳnh Hải Đăng — 9A6
   ---------------------------------------------------------------------
   CÁCH THÊM CÂU HỎI MỚI (đọc kỹ trước khi sửa):
   File này chỉ chứa DỮ LIỆU (câu hỏi), không chứa giao diện.
   Mỗi nhóm dưới đây là một MẢNG (array). Muốn thêm câu, copy 1 object
   mẫu trong đúng nhóm đó, dán xuống cuối mảng (trước dấu `]`), rồi sửa
   nội dung. Nhớ giữ dấu phẩy `,` giữa các object và dùng dấu backtick
   `  (phím dưới ESC) để bao quanh chuỗi chữ, không dùng dấu nháy " hay '
   để tránh lỗi khi câu có chứa dấu nháy.

   - hint      : gợi ý / manh mối (chưa lộ đáp án)
   - signal    : dấu hiệu nhận biết (mẹo ngữ pháp / cấu trúc)
   - explain   : lời giải chi tiết (giải thích đầy đủ)
===================================================================== */

const DATA = {

/* ============================== 1. NGỮ PHÁP – TỪ VỰNG (Trắc nghiệm) ============================== */
grammar: [
  { id:"gr01", q:`My brother decided ______ a part-time job to earn extra money this summer.`,
    options:[`take`,`taking`,`to take`,`taken`], answer:2,
    hint:`Sau "decide" thường đi kèm một dạng động từ đặc biệt, không phải V-ing.`,
    signal:`decide + to-V (động từ nguyên thể có "to").`,
    explain:`"Decide" luôn được theo sau bởi to-infinitive: decide to do something. Vậy đáp án đúng là "to take".` },

  { id:"gr02", q:`I really enjoy ______ to music while doing my homework.`,
    options:[`listen`,`listening`,`to listen`,`listened`], answer:1,
    hint:`"Enjoy" thích những động từ có đuôi "-ing" đứng sau nó.`,
    signal:`enjoy + V-ing.`,
    explain:`Động từ "enjoy" luôn đi với V-ing (gerund): enjoy doing something. Chọn "listening".` },

  { id:"gr03", q:`If the weather ______ fine tomorrow, we will go camping by the lake.`,
    options:[`is`,`was`,`were`,`will be`], answer:0,
    hint:`Có "tomorrow" và "will" ở mệnh đề sau — đây là loại câu điều kiện nói về tương lai có thể xảy ra.`,
    signal:`Câu điều kiện loại 1: If + S + V (hiện tại đơn), S + will + V.`,
    explain:`Đây là câu điều kiện loại 1 (sự việc có thể xảy ra ở tương lai), mệnh đề "if" dùng thì hiện tại đơn nên ta chọn "is".` },

  { id:"gr04", q:`The bridge ______ over the river last year is now open to traffic.`,
    options:[`building`,`built`,`build`,`was built`], answer:1,
    hint:`Đây là một mệnh đề quan hệ đã được rút gọn, mang nghĩa bị động.`,
    signal:`Rút gọn mệnh đề quan hệ bị động: (which/that was) + V3/ed.`,
    explain:`Mệnh đề đầy đủ là "which was built over the river last year"; khi rút gọn dạng bị động ta bỏ "which was" và giữ V3: "built".` },

  { id:"gr05", q:`Nam asked me ______ I had finished my project yet.`,
    options:[`that`,`if`,`what`,`when`], answer:1,
    hint:`Câu hỏi gốc là một câu hỏi Yes/No ("Have you finished...?").`,
    signal:`Câu hỏi Yes/No trong câu tường thuật dùng "if" hoặc "whether".`,
    explain:`Vì câu hỏi gốc không có từ hỏi (what/when/where...) nên khi tường thuật ta phải dùng "if" (hoặc "whether"). Chọn "if".` },

  { id:"gr06", q:`The number of students who fail the exam has ______ recently.`,
    options:[`increase`,`increasing`,`increased`,`increasement`], answer:2,
    hint:`Sau trợ động từ "has" cần một dạng động từ cụ thể, và "increasement" không phải là một từ có thật.`,
    signal:`has/have + V3 (thì hiện tại hoàn thành).`,
    explain:`Cấu trúc hiện tại hoàn thành là has/have + V3. "Increasement" không tồn tại trong tiếng Anh, nên đáp án đúng là "increased".` },

  { id:"gr07", q:`She is the only student in my class ______ has won a national award.`,
    options:[`who`,`whom`,`whose`,`which`], answer:0,
    hint:`Từ cần điền đóng vai trò chủ ngữ trong mệnh đề quan hệ, và danh từ đứng trước nó chỉ người.`,
    signal:`Mệnh đề quan hệ, danh từ chỉ người + làm chủ ngữ → who.`,
    explain:`"Student" là người và từ cần điền làm chủ ngữ cho động từ "has won", nên dùng đại từ quan hệ "who".` },

  { id:"gr08", q:`We couldn't go on the picnic ______ the heavy rain.`,
    options:[`because`,`because of`,`although`,`so`], answer:1,
    hint:`Phần sau chỗ trống là một cụm danh từ ("the heavy rain"), không phải một mệnh đề có chủ ngữ - động từ.`,
    signal:`because of/due to + (cụm) danh từ; because + mệnh đề (S + V).`,
    explain:`Vì sau chỗ trống là cụm danh từ "the heavy rain" (không có động từ) nên phải dùng "because of", không dùng "because".` },

  { id:"gr09", q:`The more carefully you check your essay, ______ mistakes you will make.`,
    options:[`the fewer`,`fewer`,`the few`,`the less`], answer:0,
    hint:`"Mistakes" là danh từ đếm được, số nhiều.`,
    signal:`Cấu trúc song hành: The + so sánh hơn, the + so sánh hơn. Danh từ đếm được dùng "fewer".`,
    explain:`Cấu trúc "The more..., the + so sánh hơn..." cần "the" ở cả hai mệnh đề; vì "mistakes" đếm được nên dùng "the fewer".` },

  { id:"gr10", q:`This documentary, ______ was filmed in the Mekong Delta, has won several awards.`,
    options:[`that`,`which`,`who`,`whose`], answer:1,
    hint:`Có dấu phẩy ngay trước chỗ trống — đây là mệnh đề quan hệ không xác định.`,
    signal:`Mệnh đề quan hệ không xác định (có dấu phẩy) không dùng "that".`,
    explain:`Vì có dấu phẩy, đây là mệnh đề quan hệ không xác định nói thêm về "this documentary" (vật) nên dùng "which", không dùng "that".` },

  { id:"gr11", q:`I would rather ______ at home than go out in this storm.`,
    options:[`stay`,`staying`,`to stay`,`stayed`], answer:0,
    hint:`Cấu trúc "would rather" có một quy tắc đặc biệt về động từ theo sau, không cần "to".`,
    signal:`would rather + V (nguyên thể, không "to").`,
    explain:`"Would rather" được theo sau bởi động từ nguyên thể không "to": would rather + V. Chọn "stay".` },

  { id:"gr12", q:`By the time the firefighters arrived, the fire ______ most of the building.`,
    options:[`destroyed`,`has destroyed`,`had destroyed`,`was destroying`], answer:2,
    hint:`Một hành động đã hoàn tất trước một thời điểm khác trong quá khứ ("the firefighters arrived").`,
    signal:`By the time + S + V (quá khứ đơn), S + had + V3 (quá khứ hoàn thành).`,
    explain:`Đám cháy đã phá hủy phần lớn tòa nhà TRƯỚC KHI lính cứu hỏa đến, nên dùng quá khứ hoàn thành: "had destroyed".` },

  { id:"gr13", q:`The government has introduced new policies ______ air pollution in big cities.`,
    options:[`reduce`,`reduction`,`reductive`,`to reduce`], answer:3,
    hint:`Phần này diễn tả mục đích của các chính sách.`,
    signal:`to + V (nguyên thể) diễn tả mục đích.`,
    explain:`Chỗ trống nêu mục đích của "new policies", nên dùng động từ nguyên thể có "to": "to reduce".` },

  { id:"gr14", q:`Despite ______ very tired, the volunteers continued cleaning the beach until sunset.`,
    options:[`being`,`they were`,`be`,`to be`], answer:0,
    hint:`Sau "despite" không thể có một mệnh đề đầy đủ (chủ ngữ + động từ chia).`,
    signal:`Despite/In spite of + V-ing/danh từ, KHÔNG + mệnh đề.`,
    explain:`"Despite" phải theo sau bởi V-ing hoặc danh từ, không theo sau bởi mệnh đề. Vậy đáp án là "being".` },

  { id:"gr15", q:`"Could you turn down the volume?" she asked. → She asked me ______ down the volume.`,
    options:[`turn`,`turning`,`to turn`,`turned`], answer:2,
    hint:`Đây là một lời yêu cầu lịch sự được tường thuật lại.`,
    signal:`ask/tell sb (not) to V trong câu tường thuật lời yêu cầu/đề nghị.`,
    explain:`Lời yêu cầu "Could you...?" khi tường thuật chuyển thành "ask sb to V": "asked me to turn down".` },

  { id:"gr16", q:`Many endangered species are at risk of extinction ______ habitat loss.`,
    options:[`due to`,`because`,`even though`,`unless`], answer:0,
    hint:`Sau chỗ trống là một cụm danh từ ("habitat loss").`,
    signal:`due to/because of + cụm danh từ.`,
    explain:`Vì theo sau là cụm danh từ "habitat loss" (không có động từ chia), ta dùng "due to". "Because" cần theo sau là một mệnh đề.` },

  { id:"gr17", q:`The negative effects of plastic waste on marine life ______ widely studied by scientists.`,
    options:[`is`,`are`,`has been`,`have been`], answer:3,
    hint:`Tìm chủ ngữ thật của động từ — nó là số ít hay số nhiều? Và câu này ở thể bị động, thời hoàn thành.`,
    signal:`Chủ ngữ số nhiều "the effects" + bị động hoàn thành: have been + V3.`,
    explain:`Chủ ngữ chính là "the negative effects" (số nhiều), câu ở thể bị động hoàn thành nên dùng "have been studied".` },

  { id:"gr18", q:`He admitted ______ the window although his parents had told him not to.`,
    options:[`break`,`breaking`,`to break`,`broken`], answer:1,
    hint:`Động từ "admit" (thừa nhận) đi với một loại động từ quen thuộc, giống "enjoy".`,
    signal:`admit + V-ing.`,
    explain:`"Admit" luôn được theo sau bởi V-ing: admit doing something. Chọn "breaking".` },

  { id:"gr19", q:`The volunteers spent the whole weekend ______ trees along the riverbank.`,
    options:[`plant`,`planted`,`planting`,`to plant`], answer:2,
    hint:`Cấu trúc "spend + khoảng thời gian" có một quy tắc cố định về dạng động từ theo sau.`,
    signal:`spend + thời gian + V-ing.`,
    explain:`Cấu trúc "spend + time + V-ing" diễn tả việc dành thời gian làm gì, nên chọn "planting".` },

  { id:"gr20", q:`I wish I ______ more time to prepare for the entrance exam.`,
    options:[`have`,`had`,`having`,`will have`], answer:1,
    hint:`Câu này diễn tả một điều không có thật ở hiện tại — ước muốn ngược với thực tế.`,
    signal:`wish + S + V2/ed (quá khứ đơn) → ước không thật ở hiện tại.`,
    explain:`Câu ước với "wish" diễn tả điều không thật ở hiện tại dùng động từ ở thì quá khứ đơn: "wish I had more time".` },

  { id:"gr21", q:`The teacher suggested that we ______ extra exercises before the test.`,
    options:[`do`,`did`,`doing`,`to do`], answer:0,
    hint:`Sau "suggest that" động từ ở mệnh đề sau không chia theo chủ ngữ.`,
    signal:`suggest/recommend that + S + V (nguyên thể, không chia).`,
    explain:`Với "suggest that", động từ trong mệnh đề "that" giữ nguyên thể (bare infinitive), không chia: "suggested that we do".` },

  { id:"gr22", q:`Hoi An, ______ is famous for its ancient houses, attracts thousands of tourists every year.`,
    options:[`that`,`which`,`who`,`whose`], answer:1,
    hint:`Có dấu phẩy trước và sau cụm thông tin thêm về Hội An.`,
    signal:`Mệnh đề quan hệ không xác định, vật/địa danh làm chủ ngữ → which.`,
    explain:`Vì có dấu phẩy (mệnh đề không xác định) và "Hoi An" là một địa danh (vật), ta dùng "which", không dùng "that".` },

  { id:"gr23", q:`The article points out several measures ______ to protect coral reefs from bleaching.`,
    options:[`take`,`taking`,`taken`,`to take`], answer:3,
    hint:`Đây là cụm danh từ + động từ diễn tả hành động có thể/nên thực hiện.`,
    signal:`danh từ + to-V (diễn tả mục đích/khả năng thực hiện).`,
    explain:`Cấu trúc "danh từ + to-V" diễn tả hành động cần làm, nên chọn "to take": "measures to take".` },

  { id:"gr24", q:`______ the traffic jam, we still arrived at the airport on time.`,
    options:[`Although`,`Despite`,`Because`,`Since`], answer:1,
    hint:`Phần sau chỗ trống chỉ là một cụm danh từ, không có động từ chia.`,
    signal:`Despite/In spite of + cụm danh từ.`,
    explain:`"The traffic jam" là cụm danh từ, nên dùng "Despite". "Although" cần theo sau một mệnh đề đầy đủ.` },

  { id:"gr25", q:`The smartphone app allows users ______ their daily water consumption easily.`,
    options:[`track`,`tracked`,`to track`,`tracking`], answer:2,
    hint:`Cấu trúc "allow somebody" cần một dạng động từ quen thuộc theo sau.`,
    signal:`allow sb to V.`,
    explain:`Cấu trúc cố định là "allow sb to do something", vậy đáp án đúng là "to track".` },

  { id:"gr26", q:`The more renewable energy we use, ______ we depend on fossil fuels.`,
    options:[`the less`,`less`,`the fewer`,`fewer`], answer:0,
    hint:`"Depend on fossil fuels" diễn tả mức độ, không phải số lượng đếm được.`,
    signal:`Cấu trúc song hành "the + so sánh hơn, the + so sánh hơn"; mức độ (không đếm được) dùng "less".`,
    explain:`Vì diễn tả mức độ phụ thuộc (không đếm được) nên dùng "the less", theo đúng cấu trúc song hành với "the more".` },

  { id:"gr27", q:`The data shows a strong connection between screen time and teenagers' sleep quality, ______ surprises many parents.`,
    options:[`that`,`which`,`who`,`it`], answer:1,
    hint:`Từ cần điền không thay cho một danh từ cụ thể, mà thay cho cả ý vừa nêu ở mệnh đề trước.`,
    signal:`"which" có thể thay cho cả một mệnh đề/ý đứng trước nó (mệnh đề quan hệ không xác định).`,
    explain:`"Which" ở đây không thay cho một danh từ cụ thể mà thay cho cả thông tin "a strong connection... sleep quality" vừa nêu.` },

  { id:"gr28", q:`We need a reliable friend ______ can help us with the project.`,
    options:[`who`,`whom`,`which`,`whose`], answer:0,
    hint:`Từ cần điền làm chủ ngữ cho động từ "can help", và danh từ đứng trước chỉ người.`,
    signal:`Mệnh đề quan hệ, người làm chủ ngữ → who.`,
    explain:`"Friend" là người và từ cần điền làm chủ ngữ trong mệnh đề quan hệ, nên dùng "who".` },

  { id:"gr29", q:`After studying medicine for six years, she finally ______ her dream of becoming a doctor.`,
    options:[`fulfilled`,`filled`,`full-filled`,`fulfilling`], answer:0,
    hint:`Đây là một cụm từ cố định nói về việc đạt được một ước mơ.`,
    signal:`Cụm cố định: fulfil(l) a dream/goal (biến thì quá khứ vì có mốc thời gian "after... for six years").`,
    explain:`Cụm từ cố định "fulfil a dream" nghĩa là thực hiện được ước mơ; ở đây cần chia thì quá khứ đơn: "fulfilled".` },

  { id:"gr30", q:`Street food vendors in Vietnam are required ______ proper hygiene standards in their cooking.`,
    options:[`follow`,`following`,`to follow`,`followed`], answer:2,
    hint:`Cấu trúc "be required" cần theo sau một dạng động từ quen thuộc.`,
    signal:`be required to V.`,
    explain:`Cấu trúc cố định "be required to do something" nghĩa là bị yêu cầu phải làm gì. Chọn "to follow".` }
],

/* ============================== 2. ĐIỀN TỪ VÀO ĐOẠN VĂN (Trắc nghiệm) ============================== */
/* Mỗi "passage" chứa khung văn bản với các ô trống đánh số [[n]].
   "blanks" là mảng 4 câu hỏi tương ứng với 4 số đó. */
cloze: [
  { id:"cz1", title:`GREEN SCHOOL CAMPAIGN`,
    passage:`Dear students, our school is launching a Green Campaign next week [[9]] plastic waste on campus. Every class will be [[10]] to set up a recycling corner near the entrance. Teachers will give a short talk [[11]] how small actions can protect the environment. We are looking forward [[12]] all of you taking part in this meaningful event. Thank you for your cooperation!`,
    blanks:[
      { n:9, options:[`reduce`,`reducing`,`to reduce`,`reduction`], answer:2,
        hint:`Đây là mục đích của chiến dịch.`, signal:`to + V nguyên thể diễn tả mục đích.`,
        explain:`Chiến dịch được tổ chức "để giảm" rác thải nhựa, dùng to-infinitive chỉ mục đích: "to reduce".` },
      { n:10, options:[`encourage`,`encouraged`,`encouraging`,`to encourage`], answer:1,
        hint:`Chủ ngữ "every class" là vật nhận hành động khuyến khích.`, signal:`will be + V3 (thể bị động ở tương lai).`,
        explain:`Câu ở thể bị động tương lai "will be + V3": "will be encouraged".` },
      { n:11, options:[`about`,`for`,`in`,`with`], answer:0,
        hint:`Đây là giới từ thường đi cùng "a talk" khi nói về chủ đề của buổi nói chuyện.`, signal:`give a talk about + chủ đề.`,
        explain:`Cụm cố định "a talk about something" chỉ chủ đề buổi nói chuyện. Chọn "about".` },
      { n:12, options:[`see`,`seeing`,`saw`,`to see`], answer:1,
        hint:`Cụm "look forward to" có quy tắc riêng về từ loại theo sau.`, signal:`look forward to + V-ing.`,
        explain:`Cụm "look forward to" luôn theo sau bởi V-ing (to ở đây là giới từ, không phải to-infinitive): "to seeing".` }
    ]},

  { id:"cz2", title:`A NEW LANGUAGE APP`,
    passage:`Are you tired of boring grammar books? SpeakUp is a mobile app [[9]] for learners who want to improve their speaking skills naturally. The app offers short conversations with native speakers and [[10]] feedback after every lesson. Users can also join group chats to practise [[11]] confidently with people from different countries. Download SpeakUp today and make your English [[12]] more enjoyable!`,
    blanks:[
      { n:9, options:[`design`,`designed`,`designing`,`to design`], answer:1,
        hint:`Cụm từ này bổ nghĩa cho "app", mang nghĩa bị động (app được thiết kế bởi ai đó).`, signal:`Mệnh đề quan hệ rút gọn dạng bị động: V3.`,
        explain:`"An app (which is) designed for learners" — rút gọn mệnh đề quan hệ bị động dùng V3: "designed".` },
      { n:10, options:[`instant`,`instantly`,`instance`,`instantness`], answer:0,
        hint:`Từ cần điền bổ nghĩa trực tiếp cho danh từ "feedback".`, signal:`Tính từ + danh từ.`,
        explain:`"Feedback" là danh từ nên cần một tính từ đứng trước để bổ nghĩa: "instant feedback".` },
      { n:11, options:[`speak`,`speaking`,`spoken`,`to speaking`], answer:1,
        hint:`Động từ "practise" đi cùng một dạng động từ quen thuộc.`, signal:`practise + V-ing.`,
        explain:`"Practise" luôn theo sau bởi V-ing: practise doing something. Chọn "speaking".` },
      { n:12, options:[`learn`,`learning`,`learner`,`learnt`], answer:1,
        hint:`Cụm từ "English ______" ở đây đóng vai trò một danh từ ghép.`, signal:`Danh động từ (V-ing) làm danh từ: "English learning".`,
        explain:`"English learning" là một danh từ ghép chỉ việc học tiếng Anh, dùng V-ing làm danh từ: "learning".` }
    ]},

  { id:"cz3", title:`SUMMER VOLUNTEER PROGRAMME`,
    passage:`Our summer volunteer programme gives students a chance [[9]] new skills while helping local communities. Volunteers will work in small teams and [[10]] for tasks such as teaching children or cleaning public parks. Each team is required to submit a short report [[11]] the end of the programme. Please remember to bring your own water bottle and [[12]] comfortable shoes for outdoor activities.`,
    blanks:[
      { n:9, options:[`to learn`,`learn`,`learning`,`learned`], answer:0,
        hint:`Cụm "a chance ______" diễn tả cơ hội để làm gì.`, signal:`danh từ "chance" + to-V.`,
        explain:`Cụm "a chance to do something" nghĩa là cơ hội để làm gì, dùng to-infinitive: "to learn".` },
      { n:10, options:[`responsible`,`be responsible`,`responsibility`,`responsibly`], answer:1,
        hint:`Đây là động từ thứ hai song song với "work" sau trợ động từ "will".`, signal:`will + V1 và V2 song song (will work...and (will) be responsible...).`,
        explain:`Hai hành động song song sau "will": "work" và "be responsible", nên giữ dạng động từ nguyên thể "be responsible".` },
      { n:11, options:[`at`,`on`,`in`,`by`], answer:0,
        hint:`Đây là một cụm giới từ cố định nói về thời điểm kết thúc.`, signal:`at the end of + (khoảng thời gian/sự việc).`,
        explain:`Cụm cố định "at the end of something" nghĩa là vào cuối (giai đoạn nào đó). Chọn "at".` },
      { n:12, options:[`wear`,`wearing`,`wore`,`to wear`], answer:0,
        hint:`Động từ này song song với "bring" sau "remember to".`, signal:`remember to V1 and V2 (hai động từ nguyên thể song song).`,
        explain:`"Remember to bring... and (to) wear..." — hai động từ nguyên thể song song sau "remember to", nên chọn "wear".` }
    ]},

  { id:"cz4", title:`SMART HOMES OF THE FUTURE`,
    passage:`Smart home technology is changing the way we live. Many devices can now be [[9]] controlled through a single app on your phone. For example, you can adjust the lighting, lock the doors, or even [[10]] your fridge to see what food you need to buy. Experts believe that within ten years, most new houses [[11]] built with smart systems as standard. However, some people are still worried about [[12]] their personal data with so many connected devices.`,
    blanks:[
      { n:9, options:[`remote`,`remotely`,`remoteness`,`removal`], answer:1,
        hint:`Từ cần điền bổ nghĩa cho động từ "controlled".`, signal:`Trạng từ bổ nghĩa cho động từ.`,
        explain:`Để bổ nghĩa cho động từ "controlled" ta cần một trạng từ: "remotely controlled" (điều khiển từ xa).` },
      { n:10, options:[`check`,`checking`,`to check`,`checked`], answer:0,
        hint:`Động từ này song song với "adjust" và "lock" sau "can".`, signal:`can + V1, V2, or even V3 (các động từ nguyên thể song song).`,
        explain:`Ba hành động song song sau "can": "adjust", "lock", và "check", nên giữ nguyên thể: "check".` },
      { n:11, options:[`are`,`will be`,`have been`,`were`], answer:1,
        hint:`Cụm "within ten years" cho biết đây là một dự đoán về tương lai.`, signal:`Dự đoán tương lai bị động: will be + V3.`,
        explain:`"Within ten years" báo hiệu một dự đoán ở tương lai, nên dùng thể bị động tương lai: "will be built".` },
      { n:12, options:[`protect`,`protecting`,`to protect`,`protection`], answer:1,
        hint:`Cụm "worried about" cần một dạng từ quen thuộc theo sau.`, signal:`worried about + V-ing.`,
        explain:`Cụm "be worried about" theo sau bởi V-ing (vì "about" là giới từ): "protecting".` }
    ]},

  { id:"cz5", title:`EXCHANGE STUDENT EXPERIENCE`,
    passage:`Last month I had the chance to take part in a student exchange programme in Singapore. During the trip, we stayed with local families and [[9]] how to use public transport by ourselves. The host students were extremely friendly and always [[10]] us around their neighbourhood. One of the most memorable activities was a cooking class, [[11]] we learned to make traditional Singaporean dishes. By the end of the week, I had [[12]] several lifelong friends and a deeper understanding of another culture.`,
    blanks:[
      { n:9, options:[`learn`,`learning`,`learned`,`to learn`], answer:2,
        hint:`Động từ này song song với "stayed" ở cùng thì quá khứ đơn.`, signal:`Hai động từ quá khứ đơn song song nối bằng "and".`,
        explain:`"Stayed" và động từ này cùng nằm trong câu kể chuyện ở quá khứ đơn, nối với nhau bằng "and": "learned".` },
      { n:10, options:[`show`,`showed`,`showing`,`shown`], answer:1,
        hint:`Động từ này song song với "were" ở cùng thì quá khứ đơn.`, signal:`were... and always + V-ed (quá khứ đơn song song).`,
        explain:`Cấu trúc song song "were extremely friendly and always showed" — quá khứ đơn: "showed".` },
      { n:11, options:[`that`,`which`,`where`,`who`], answer:2,
        hint:`Sự việc đứng trước (a cooking class) được xem như "nơi/hoàn cảnh" diễn ra hành động học nấu ăn.`, signal:`Mệnh đề quan hệ chỉ nơi chốn/hoàn cảnh diễn ra sự việc → where.`,
        explain:`"A cooking class, where we learned..." — "where" được dùng để chỉ hoàn cảnh/buổi học nơi sự việc xảy ra.` },
      { n:12, options:[`make`,`made`,`making`,`to make`], answer:1,
        hint:`Đây là một hành động đã hoàn tất trước một mốc thời gian khác trong quá khứ ("by the end of the week").`, signal:`had + V3 (quá khứ hoàn thành).`,
        explain:`"By the end of the week" + "I had ______" báo hiệu thì quá khứ hoàn thành: "had made".` }
    ]},

  { id:"cz6", title:`A SCHOOL RECYCLING CONTEST`,
    passage:`Dear students, our school will hold a recycling contest next month [[9]] students to collect more recyclable waste. Each class will be [[10]] points based on the weight of materials collected. The class with the highest score will be [[11]] a special prize at the closing ceremony. We hope every student will take part [[12]] enthusiasm and care for our environment. Thank you!`,
    blanks:[
      { n:9, options:[`encourage`,`encouraging`,`encouraged`,`to encourage`], answer:3,
        hint:`Phần này nêu mục đích của cuộc thi.`, signal:`to + V nguyên thể diễn tả mục đích.`,
        explain:`Cuộc thi được tổ chức "để khuyến khích" học sinh, dùng to-infinitive chỉ mục đích: "to encourage".` },
      { n:10, options:[`award`,`awarded`,`awarding`,`awards`], answer:1,
        hint:`Mỗi lớp là vật nhận hành động trao điểm.`, signal:`will be + V3 (thể bị động tương lai).`,
        explain:`Câu ở thể bị động tương lai: "will be awarded points".` },
      { n:11, options:[`give`,`given`,`giving`,`to give`], answer:1,
        hint:`Lớp học là vật nhận giải thưởng.`, signal:`will be + V3 (thể bị động tương lai).`,
        explain:`Thể bị động tương lai: "will be given a special prize".` },
      { n:12, options:[`with`,`in`,`for`,`by`], answer:0,
        hint:`Đây là giới từ cố định đi cùng "enthusiasm".`, signal:`take part with enthusiasm (cụm cố định).`,
        explain:`Cụm cố định "with enthusiasm" diễn tả thái độ hăng hái khi tham gia. Chọn "with".` }
    ]},

  { id:"cz7", title:`ONLINE LEARNING PLATFORM`,
    passage:`EduWave is an online learning platform [[9]] for students who want extra practice outside school hours. Learners can choose from hundreds of video lessons and [[10]] quizzes after each topic. The platform also lets students chat with tutors to get help [[11]] difficult exercises. Many parents say their children have become more [[12]] in studying since they started using EduWave.`,
    blanks:[
      { n:9, options:[`design`,`designed`,`designing`,`to design`], answer:1,
        hint:`Cụm từ này bổ nghĩa cho "platform", mang nghĩa bị động.`, signal:`Mệnh đề quan hệ rút gọn dạng bị động: V3.`,
        explain:`"A platform (which is) designed for students" — rút gọn mệnh đề quan hệ bị động: "designed".` },
      { n:10, options:[`interactive`,`interact`,`interaction`,`interactively`], answer:0,
        hint:`Từ cần điền bổ nghĩa cho danh từ "quizzes".`, signal:`Tính từ + danh từ.`,
        explain:`Cần tính từ bổ nghĩa cho "quizzes": "interactive quizzes".` },
      { n:11, options:[`on`,`with`,`about`,`for`], answer:1,
        hint:`Đây là giới từ cố định đi cùng "help".`, signal:`get help with something.`,
        explain:`Cụm cố định "get help with something" — chọn "with".` },
      { n:12, options:[`confidence`,`confidently`,`confident`,`confide`], answer:2,
        hint:`Từ cần điền bổ nghĩa cho động từ "become", cần một tính từ.`, signal:`become + tính từ.`,
        explain:`Cần tính từ "tự tin": "become more confident".` }
    ]},

  { id:"cz8", title:`COMMUNITY GARDEN PROJECT`,
    passage:`Our neighbourhood is starting a community garden project [[9]] unused land into a green space for everyone. Residents who want to join should [[10]] their names at the local community centre before Friday. Volunteers will meet every Saturday morning to plant vegetables and [[11]] the soil. Anyone interested in [[12]] fresh produce with neighbours is welcome to take part.`,
    blanks:[
      { n:9, options:[`turn`,`turning`,`to turn`,`turned`], answer:2,
        hint:`Phần này nêu mục đích của dự án.`, signal:`danh từ + to-V diễn tả mục đích.`,
        explain:`"A project to turn unused land into..." — to-infinitive chỉ mục đích.` },
      { n:10, options:[`register`,`registering`,`registered`,`registers`], answer:0,
        hint:`Sau động từ khuyết thiếu "should" cần một động từ nguyên thể.`, signal:`should + V (nguyên thể).`,
        explain:`Sau "should" luôn dùng động từ nguyên thể: "should register".` },
      { n:11, options:[`prepare`,`preparing`,`prepared`,`to prepare`], answer:0,
        hint:`Động từ này song song với "plant" sau "to".`, signal:`to plant...and (to) prepare (hai động từ song song).`,
        explain:`Hai hành động song song sau "to": "plant" và "prepare". Chọn "prepare".` },
      { n:12, options:[`share`,`sharing`,`shared`,`to share`], answer:1,
        hint:`Cụm "interested in" cần một dạng từ quen thuộc theo sau.`, signal:`interested in + V-ing.`,
        explain:`Cụm "be interested in" theo sau bởi V-ing: "interested in sharing".` }
    ]},

  { id:"cz9", title:`A LOCAL FOOD FESTIVAL`,
    passage:`The annual Mekong Food Festival will take place next weekend, [[9]] visitors a chance to taste dishes from across the region. This year's festival will feature over fifty food stalls, [[10]] traditional recipes passed down through generations. Organisers encourage guests [[11]] reusable bags and bottles to help reduce waste. Tickets are free, but donations are [[12]] welcomed to support local farmers.`,
    blanks:[
      { n:9, options:[`give`,`giving`,`given`,`to give`], answer:1,
        hint:`Đây là mệnh đề phân từ bổ sung thông tin cho cả câu trước.`, signal:`Mệnh đề phân từ chủ động: V-ing.`,
        explain:`Mệnh đề phân từ chủ động bổ sung thông tin: "...next weekend, giving visitors a chance...".` },
      { n:10, options:[`feature`,`featuring`,`featured`,`features`], answer:1,
        hint:`Đây cũng là một mệnh đề phân từ bổ sung thông tin cho "fifty food stalls".`, signal:`Mệnh đề phân từ chủ động: V-ing.`,
        explain:`Mệnh đề phân từ: "...stalls, featuring traditional recipes...".` },
      { n:11, options:[`bring`,`bringing`,`to bring`,`brought`], answer:2,
        hint:`Cấu trúc "encourage somebody" cần một dạng động từ quen thuộc.`, signal:`encourage sb to V.`,
        explain:`Cấu trúc cố định "encourage sb to do something". Chọn "to bring".` },
      { n:12, options:[`warm`,`warmly`,`warmth`,`warming`], answer:1,
        hint:`Từ cần điền bổ nghĩa cho động từ "welcomed".`, signal:`Trạng từ + động từ (thể bị động).`,
        explain:`Cần trạng từ bổ nghĩa cho động từ bị động "welcomed": "warmly welcomed".` }
    ]},

  { id:"cz10", title:`TIPS FOR A GOOD NIGHT'S SLEEP`,
    passage:`Getting enough sleep is essential for students who want to stay focused at school. Experts suggest [[9]] screens at least one hour before bedtime to help the brain relax. It is also helpful to keep your bedroom dark and [[10]] , since light and noise can disrupt sleep. Try to go to bed at the same time every night, [[11]] on weekends. If you still feel tired after a full night's sleep, it [[12]] be a good idea to talk to a doctor.`,
    blanks:[
      { n:9, options:[`avoid`,`avoiding`,`to avoid`,`avoided`], answer:1,
        hint:`Động từ "suggest" đi với một loại động từ quen thuộc.`, signal:`suggest + V-ing.`,
        explain:`"Suggest" luôn theo sau bởi V-ing: "suggest avoiding".` },
      { n:10, options:[`quiet`,`quietly`,`quietness`,`quieten`], answer:0,
        hint:`Từ cần điền song song với tính từ "dark".`, signal:`dark and + tính từ (song song).`,
        explain:`Hai tính từ song song nối bằng "and": "dark and quiet".` },
      { n:11, options:[`even`,`despite`,`although`,`unless`], answer:0,
        hint:`Từ cần điền nhấn mạnh rằng quy tắc này áp dụng cả vào cuối tuần.`, signal:`even on + (thời gian) — nhấn mạnh sự ngoại lệ vẫn được áp dụng.`,
        explain:`"Even on weekends" nhấn mạnh việc duy trì thói quen này dù là cuối tuần.` },
      { n:12, options:[`might`,`mustn't`,`can't`,`shouldn't`], answer:0,
        hint:`Câu này đưa ra một lời gợi ý nhẹ nhàng, không chắc chắn.`, signal:`might + V diễn tả khả năng/gợi ý nhẹ.`,
        explain:`"Might be a good idea" là cách gợi ý nhẹ nhàng, lịch sự — các đáp án còn lại mang nghĩa phủ định, không phù hợp.` }
    ]}
],

/* ============================== 3. SẮP XẾP CÂU (Trắc nghiệm) ============================== */
rearrange: [
  { id:"rg01", lines:{a:`Lan: That sounds relaxing. Can I join you?`,b:`Mai: Hi Lan! Do you have any plans for the weekend?`,c:`Mai: Of course! Let's meet at the lake at 7 a.m.`,d:`Lan: Not really. What about you?`,e:`Mai: I'm planning to go fishing with my dad early in the morning.`},
    options:[`b-e-d-a-c`,`b-d-e-a-c`,`d-b-e-a-c`,`b-d-a-e-c`], answer:1,
    hint:`Hội thoại nên bắt đầu bằng một lời chào và một câu hỏi mở đầu.`,
    signal:`Câu hỏi mở đầu → câu trả lời/hỏi lại → thông tin chi tiết → phản hồi → lời mời.`,
    explain:`Mai chào và hỏi kế hoạch (b) → Lan trả lời và hỏi lại (d) → Mai nói kế hoạch của mình (e) → Lan muốn tham gia (a) → Mai đồng ý hẹn giờ (c).` },

  { id:"rg02", lines:{a:`Tom: That's a relief! How long will it take to fix?`,b:`Tom: My phone screen cracked yesterday. I don't know what to do.`,c:`Susan: Don't worry, there's a repair shop near the school.`,d:`Susan: The man told me it usually takes about an hour.`},
    options:[`c-b-a-d`,`b-a-c-d`,`b-c-a-d`,`c-a-b-d`], answer:2,
    hint:`Người nêu vấn đề nên nói trước.`,
    signal:`Nêu vấn đề → gợi ý giải pháp → hỏi thêm thông tin → trả lời thông tin.`,
    explain:`Tom nêu vấn đề (b) → Susan gợi ý chỗ sửa (c) → Tom hỏi thời gian sửa (a) → Susan trả lời (d).` },

  { id:"rg03", lines:{a:`First, separate your rubbish into different bins for paper, plastic, and glass.`,b:`Recycling at home is easier than most people think.`,c:`Finally, take the bins out on the correct collection day each week.`,d:`Next, rinse any containers that had food or drink in them.`},
    options:[`a-b-d-c`,`b-d-a-c`,`a-d-b-c`,`b-a-d-c`], answer:3,
    hint:`Đoạn văn hướng dẫn các bước nên có một câu mở đầu giới thiệu chủ đề chung trước.`,
    signal:`Câu chủ đề → First → Next → Finally.`,
    explain:`Câu chủ đề giới thiệu việc tái chế (b) → bước đầu (a - "First") → bước tiếp theo (d - "Next") → bước cuối (c - "Finally").` },

  { id:"rg04", lines:{a:`Hoa: I've been so stressed about the entrance exam lately.`,b:`Binh: Try making a study schedule. It really helped me stay calm.`,c:`Hoa: That's a good idea. I'll start one tonight.`,d:`Binh: Why? You've always done well in tests.`,e:`Hoa: This one feels different because it decides which high school I'll go to.`},
    options:[`a-e-d-b-c`,`a-d-b-e-c`,`a-d-e-b-c`,`a-b-d-e-c`], answer:2,
    hint:`Sau khi Hoa than phiền, Bình sẽ hỏi lý do trước khi đưa lời khuyên.`,
    signal:`Nêu vấn đề → hỏi lý do → giải thích lý do → đưa lời khuyên → đồng ý làm theo.`,
    explain:`Hoa than phiền (a) → Bình hỏi tại sao (d) → Hoa giải thích (e) → Bình khuyên (b) → Hoa đồng ý (c).` },

  { id:"rg05", lines:{a:`People also enjoy watching dragon dances performed in the streets.`,b:`The Mid-Autumn Festival is one of the most beloved celebrations in Vietnam.`,c:`Children carry colourful lanterns and sing traditional songs at night.`,d:`Families gather together to share mooncakes and admire the full moon.`},
    options:[`b-d-c-a`,`b-c-d-a`,`d-b-c-a`,`b-d-a-c`], answer:0,
    hint:`Câu giới thiệu chủ đề chung nên đứng đầu, sau đó là các hoạt động liên quan đến gia đình trước, trẻ em sau.`,
    signal:`Câu chủ đề → hoạt động gia đình → hoạt động trẻ em → hoạt động cộng đồng.`,
    explain:`Giới thiệu lễ hội (b) → hoạt động của gia đình (d) → hoạt động của trẻ em (c) → hoạt động cộng đồng (a).` },

  { id:"rg06", lines:{a:`Anna: I ordered a jacket online last week, but it still hasn't arrived.`,b:`Mark: Have you tracked the package on the website?`,c:`Anna: Yes, it says it's still at the local post office.`,d:`Mark: Maybe you should contact the seller to ask what happened.`},
    options:[`b-a-c-d`,`a-c-b-d`,`a-b-c-d`,`b-a-d-c`], answer:2,
    hint:`Anna nên nêu vấn đề trước khi Mark đưa ra câu hỏi/gợi ý.`,
    signal:`Nêu vấn đề → hỏi đã kiểm tra chưa → trả lời → gợi ý hành động tiếp theo.`,
    explain:`Anna nêu vấn đề (a) → Mark hỏi đã theo dõi đơn hàng chưa (b) → Anna trả lời (c) → Mark gợi ý liên hệ người bán (d).` },

  { id:"rg07", lines:{a:`After that, place the young tree carefully into the hole and cover the roots with soil.`,b:`To plant a tree successfully, first dig a hole twice the size of the root ball.`,c:`Finally, water the tree well and check on it regularly during the first few weeks.`,d:`Then, press the soil down gently to remove any air pockets around the roots.`},
    options:[`b-a-d-c`,`a-b-d-c`,`b-d-a-c`,`a-d-b-c`], answer:0,
    hint:`Tìm các từ nối chỉ thứ tự: first, after that, then, finally.`,
    signal:`first → after that → then → finally.`,
    explain:`Thứ tự đúng theo các từ nối: "first" (b) → "after that" (a) → "then" (d) → "finally" (c).` },

  { id:"rg08", lines:{a:`Linh: Yes, I'm working at a coffee shop on weekends now.`,b:`Trang: That's great! Is it difficult to manage with your studies?`,c:`Linh: A little, but I only work eight hours a week, so it's manageable.`,d:`Trang: I heard you got a part-time job. Is that true?`},
    options:[`d-b-a-c`,`d-a-b-c`,`a-d-b-c`,`d-a-c-b`], answer:1,
    hint:`Trang nên hỏi xác nhận thông tin trước, rồi mới hỏi thêm chi tiết.`,
    signal:`Hỏi xác nhận → xác nhận → hỏi thêm → trả lời chi tiết.`,
    explain:`Trang hỏi xác nhận (d) → Linh xác nhận (a) → Trang hỏi thêm về việc quản lý thời gian (b) → Linh trả lời (c).` },

  { id:"rg09", lines:{a:`In addition, reading regularly can significantly expand a person's vocabulary.`,b:`Reading books offers many valuable benefits for people of all ages.`,c:`Most importantly, it allows readers to relax and escape from daily stress.`,d:`For example, it helps readers understand different cultures and perspectives.`},
    options:[`b-a-d-c`,`b-d-a-c`,`d-b-a-c`,`b-c-a-d`], answer:1,
    hint:`Tìm các từ nối: for example, in addition, most importantly.`,
    signal:`Câu chủ đề → For example → In addition → Most importantly.`,
    explain:`Câu chủ đề (b) → ví dụ minh họa (d - "For example") → ý bổ sung (a - "In addition") → ý quan trọng nhất (c - "Most importantly").` },

  { id:"rg10", lines:{a:`Phong: We could test how different amounts of light affect plant growth.`,b:`Mai: I'm not sure yet. Do you have any suggestions?`,c:`Mai: What topic should we choose for our science project?`,d:`Phong: That sounds interesting and easy to test at home.`},
    options:[`b-c-a-d`,`c-b-a-d`,`c-a-b-d`,`b-a-c-d`], answer:1,
    hint:`Mai nên đặt câu hỏi mở đầu cuộc trò chuyện về chủ đề dự án.`,
    signal:`Đặt câu hỏi → chưa có ý tưởng, hỏi gợi ý → đưa gợi ý → nhận xét tích cực.`,
    explain:`Mai hỏi chủ đề (c) → Mai nói chưa chắc, hỏi gợi ý (b) → Phong đưa gợi ý (a) → Phong tự nhận xét gợi ý đó (d).` },

  { id:"rg11", lines:{a:`Firstly, spending too much time online can affect students' sleep and concentration.`,b:`Social media has become a major part of teenagers' daily lives.`,c:`These problems show why teenagers need to use social media responsibly.`,d:`Secondly, comparing oneself to others online can lead to low self-esteem.`},
    options:[`b-a-d-c`,`a-b-d-c`,`b-d-a-c`,`a-d-b-c`], answer:0,
    hint:`Tìm các từ nối: Firstly, Secondly, và câu kết luận.`,
    signal:`Câu chủ đề → Firstly → Secondly → câu kết luận.`,
    explain:`Câu chủ đề (b) → vấn đề thứ nhất (a - "Firstly") → vấn đề thứ hai (d - "Secondly") → câu kết luận (c).` },

  { id:"rg12", lines:{a:`I also wanted to thank you for showing me around the city.`,b:`Dear Mr. Phong, I really enjoyed my visit to your homestay last week.`,c:`I hope to visit again next summer if possible.`,d:`Best wishes, Anna`},
    options:[`a-b-c-d`,`b-a-c-d`,`b-c-a-d`,`a-c-b-d`], answer:1,
    hint:`Một bức thư cảm ơn nên bắt đầu bằng lời chào và lý do viết thư.`,
    signal:`Lời chào & lý do viết thư → lời cảm ơn thêm → mong muốn ở tương lai → lời chào kết thư.`,
    explain:`Lời chào và lý do viết thư (b) → lời cảm ơn bổ sung (a) → mong muốn tương lai (c) → lời chào kết thư (d).` },

  { id:"rg13", lines:{a:`Huy: I'm still not sure what to major in at university.`,b:`Trang: Have you thought about what subjects you enjoy the most?`,c:`Huy: I really like biology and chemistry.`,d:`Trang: Then maybe you should consider studying medicine or environmental science.`},
    options:[`b-a-c-d`,`a-c-b-d`,`a-b-c-d`,`b-c-a-d`], answer:2,
    hint:`Huy nên nêu vấn đề của mình trước khi Trang đưa ra câu hỏi gợi mở.`,
    signal:`Nêu vấn đề → hỏi gợi mở → trả lời chi tiết → đưa lời khuyên.`,
    explain:`Huy nêu vấn đề (a) → Trang hỏi gợi mở (b) → Huy trả lời (c) → Trang đưa lời khuyên (d).` },

  { id:"rg14", lines:{a:`First, boil water and steep the tea leaves for about five minutes.`,b:`Making a refreshing glass of iced tea at home is simple.`,c:`Finally, pour the tea over ice and add sugar or lemon to taste.`,d:`Next, let the tea cool down to room temperature before refrigerating it.`},
    options:[`a-b-d-c`,`b-d-a-c`,`a-d-b-c`,`b-a-d-c`], answer:3,
    hint:`Tìm các từ nối chỉ thứ tự: First, Next, Finally.`,
    signal:`Câu chủ đề → First → Next → Finally.`,
    explain:`Câu chủ đề (b) → bước đầu (a - "First") → bước tiếp theo (d - "Next") → bước cuối (c - "Finally").` },

  { id:"rg15", lines:{a:`Mai: That's a great idea! Where should we hold it?`,b:`Tom: I'm thinking of throwing a surprise party for Lan's birthday.`,c:`Tom: How about at the community hall near her house?`,d:`Mai: Sounds perfect. I'll help you send out invitations.`},
    options:[`a-b-c-d`,`b-a-c-d`,`b-c-a-d`,`a-c-b-d`], answer:1,
    hint:`Tom nên nêu ý tưởng của mình trước khi Mai phản hồi.`,
    signal:`Nêu ý tưởng → phản hồi tích cực, hỏi thêm → trả lời → đồng ý, đề xuất giúp đỡ.`,
    explain:`Tom nêu ý tưởng (b) → Mai hỏi địa điểm (a) → Tom đề xuất (c) → Mai đồng ý và đề nghị giúp (d).` },

  { id:"rg16", lines:{a:`Firstly, buses and trains produce less pollution per passenger than private cars.`,b:`Public transport offers several advantages over private vehicles in busy cities.`,c:`For these reasons, many cities are investing more in public transport systems.`,d:`Secondly, using public transport can save commuters a significant amount of money.`},
    options:[`b-d-a-c`,`a-d-b-c`,`a-b-d-c`,`b-a-d-c`], answer:3,
    hint:`Tìm các từ nối: Firstly, Secondly, và câu kết luận.`,
    signal:`Câu chủ đề → Firstly → Secondly → câu kết luận.`,
    explain:`Câu chủ đề (b) → lợi ích thứ nhất (a) → lợi ích thứ hai (d) → câu kết luận (c).` },

  { id:"rg17", lines:{a:`Customer: Hi, I'd like to return this blender. It stopped working after two days.`,b:`Staff: I'm sorry to hear that. Do you have the receipt with you?`,c:`Customer: Yes, here it is.`,d:`Staff: Thank you. I'll process a refund for you right away.`},
    options:[`b-a-c-d`,`a-c-b-d`,`b-c-a-d`,`a-b-c-d`], answer:3,
    hint:`Khách hàng nên nêu vấn đề trước khi nhân viên hỏi thêm thông tin.`,
    signal:`Nêu vấn đề → hỏi giấy tờ → đưa giấy tờ → xử lý yêu cầu.`,
    explain:`Khách hàng nêu vấn đề (a) → nhân viên hỏi hóa đơn (b) → khách hàng đưa hóa đơn (c) → nhân viên xử lý hoàn tiền (d).` },

  { id:"rg18", lines:{a:`Volunteering allows young people to gain real-world skills outside the classroom.`,b:`In addition, it helps students build confidence when working with new people.`,c:`Most importantly, it teaches the value of contributing to one's community.`,d:`For instance, organising an event teaches planning and communication skills.`},
    options:[`a-d-b-c`,`a-b-d-c`,`d-a-b-c`,`a-d-c-b`], answer:0,
    hint:`Tìm các từ nối: For instance, In addition, Most importantly.`,
    signal:`Câu chủ đề → For instance (ví dụ) → In addition → Most importantly.`,
    explain:`Câu chủ đề (a) → ví dụ minh họa (d) → ý bổ sung (b) → ý quan trọng nhất (c).` },

  { id:"rg19", lines:{a:`Dad: Before you go out, can you help tidy up the living room?`,b:`Con: Sure, I can do that after breakfast.`,c:`Dad: Thanks! Also, please take out the rubbish before it gets too full.`,d:`Con: No problem, I'll do both before I leave.`},
    options:[`b-a-c-d`,`a-b-c-d`,`a-c-b-d`,`b-c-a-d`], answer:1,
    hint:`Bố nên đưa ra yêu cầu đầu tiên trước khi con trả lời.`,
    signal:`Yêu cầu 1 → đồng ý → yêu cầu 2 → đồng ý làm cả hai.`,
    explain:`Bố đưa yêu cầu đầu (a) → con đồng ý (b) → bố đưa thêm yêu cầu (c) → con đồng ý làm cả hai (d).` },

  { id:"rg20", lines:{a:`To reduce food waste, start by planning meals before going grocery shopping.`,b:`Next, store fruits and vegetables properly to help them last longer.`,c:`Finally, try to use leftovers creatively instead of throwing them away.`,d:`You should also avoid buying more food than your family actually needs.`},
    options:[`d-a-b-c`,`a-b-d-c`,`a-d-c-b`,`a-d-b-c`], answer:3,
    hint:`Tìm các từ nối chỉ thứ tự trong đoạn văn hướng dẫn.`,
    signal:`start by → also → Next → Finally.`,
    explain:`Bước đầu (a) → bước bổ sung (d) → bước tiếp theo (b - "Next") → bước cuối (c - "Finally").` }
],

/* ============================== 4. ĐỌC HIỂU (Trắc nghiệm) ============================== */
reading: [
  { id:"rd1", title:`HA LONG BAY`,
    passage:`Ha Long Bay, located in the north-east of Vietnam, is one of the country's most stunning natural wonders. The bay is famous for its thousands of limestone islands and islets, many of which rise dramatically from the emerald waters. In 1994, UNESCO recognised Ha Long Bay as a World Heritage Site because of its outstanding natural beauty and unique geological value.\n\nVisitors to the bay can explore mysterious caves, kayak between towering rocks, or stay overnight on a traditional wooden boat called a junk. Local fishing villages floating on the water also give tourists a glimpse into the daily life of the people who have lived there for generations.\n\nDespite its popularity, Ha Long Bay faces serious environmental challenges. Increasing numbers of tourists and boats have led to pollution problems that threaten the bay's delicate ecosystem. Authorities are now working on stricter regulations to protect this natural treasure for future generations.`,
    qs:[
      { q:`What is the passage mainly about?`, options:[`The history of UNESCO World Heritage Sites`,`The beauty of Ha Long Bay and the challenges it faces`,`Different types of boats used in northern Vietnam`,`How fishing villages survive on the water`], answer:1,
        hint:`Cả ba đoạn đều xoay quanh một địa danh cụ thể, vừa khen vẻ đẹp vừa nêu vấn đề.`,
        signal:`Ý chính thường là sự kết hợp giữa nội dung của đoạn 1-2 (vẻ đẹp) và đoạn 3 (thử thách).`,
        explain:`Đoạn 1-2 nói về vẻ đẹp và hoạt động ở Ha Long Bay, đoạn 3 nói về thử thách môi trường, nên ý chính là cả vẻ đẹp và thử thách.` },
      { q:`The word "outstanding" in paragraph 1 is closest in meaning to ______.`, options:[`ordinary`,`remarkable`,`ancient`,`dangerous`], answer:1,
        hint:`Từ này mô tả vẻ đẹp khiến nơi này được UNESCO công nhận.`, signal:`Tìm từ đồng nghĩa trong các lựa chọn.`,
        explain:`"Outstanding" nghĩa là nổi bật, xuất sắc — đồng nghĩa với "remarkable" (đáng chú ý/nổi bật).` },
      { q:`According to the passage, why is Ha Long Bay's ecosystem under threat?`, options:[`Because of strict government regulations`,`Because fishing villages have disappeared`,`Because of pollution caused by growing tourism`,`Because the limestone islands are sinking`], answer:2,
        hint:`Đọc lại đoạn cuối của bài.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp trong đoạn 3.`,
        explain:`Đoạn 3 nêu rõ: số lượng khách du lịch và tàu thuyền tăng lên gây ra ô nhiễm, đe dọa hệ sinh thái của vịnh.` },
      { q:`Which of the following is NOT mentioned as an activity for visitors?`, options:[`Exploring caves`,`Kayaking`,`Staying on a traditional boat`,`Scuba diving with dolphins`], answer:3,
        hint:`So sánh từng lựa chọn với các hoạt động được liệt kê ở đoạn 2.`, signal:`Loại trừ các hoạt động đã được nêu trong bài.`,
        explain:`Đoạn 2 chỉ nêu: khám phá hang động, chèo kayak, và ngủ đêm trên thuyền; không có hoạt động lặn biển với cá heo.` }
    ]},

  { id:"rd2", title:`LEARNING A SECOND LANGUAGE`,
    passage:`Learning a second language offers far more than the ability to order food in a foreign country. Researchers have found that bilingual people often perform better on tasks that require focus and problem-solving, since switching between two languages keeps the brain active and flexible.\n\nIn addition to these cognitive benefits, speaking another language opens doors to new friendships and job opportunities. Many companies today prefer candidates who can communicate with international clients or read documents in more than one language.\n\nLearning a language also deepens a person's understanding of other cultures. Idioms, humour, and traditions are often closely tied to the language they come from, so studying a language naturally teaches learners about the people who speak it.\n\nOf course, becoming fluent takes time and consistent practice. Experts recommend setting realistic goals, practising daily, and not being afraid of making mistakes along the way.`,
    qs:[
      { q:`What is the main idea of the passage?`, options:[`Why translators are highly paid professionals`,`The various benefits of learning a second language`,`How to become fluent in six months`,`Why English is the most useful language to learn`], answer:1,
        hint:`Mỗi đoạn nêu lên một lợi ích khác nhau.`, signal:`Khi mỗi đoạn nêu một lợi ích, ý chính thường là tổng hợp các lợi ích đó.`,
        explain:`Bài viết liệt kê nhiều lợi ích của việc học ngôn ngữ thứ hai: tư duy, công việc, văn hóa — nên ý chính là các lợi ích đó.` },
      { q:`The word "fluent" in the last paragraph mostly means ______.`, options:[`able to speak a language easily and accurately`,`unable to understand a language`,`interested in many languages`,`translating word by word`], answer:0,
        hint:`Từ này thường được dùng để khen khả năng ngôn ngữ của ai đó.`, signal:`Tìm định nghĩa đúng nhất với nghĩa thường gặp của từ.`,
        explain:`"Fluent" nghĩa là nói một ngôn ngữ trôi chảy, chính xác và tự nhiên.` },
      { q:`According to the passage, why do many companies prefer bilingual candidates?`, options:[`Because they require lower salaries`,`Because they can communicate with international clients`,`Because they work faster than other employees`,`Because they need less training`], answer:1,
        hint:`Đọc lại đoạn 2 của bài.`, signal:`Tìm câu nêu lý do trực tiếp trong đoạn văn.`,
        explain:`Đoạn 2 nêu rõ các công ty thích ứng viên có thể giao tiếp với khách hàng quốc tế hoặc đọc tài liệu đa ngôn ngữ.` },
      { q:`Which of the following is NOT TRUE according to the passage?`, options:[`Bilingual people often have better focus and problem-solving skills.`,`Learning a language helps people understand other cultures.`,`Becoming fluent in a language happens almost instantly.`,`Experts suggest practising a language every day.`], answer:2,
        hint:`Đọc kỹ đoạn cuối nói về thời gian cần để trở nên thành thạo.`, signal:`Tìm thông tin trái ngược với nội dung bài đọc.`,
        explain:`Đoạn cuối nói rõ "becoming fluent takes time and consistent practice", nên việc "xảy ra ngay lập tức" là KHÔNG đúng.` }
    ]},

  { id:"rd3", title:`RENEWABLE ENERGY`,
    passage:`As concerns about climate change grow, more countries are turning to renewable energy sources such as solar, wind, and hydropower. Unlike fossil fuels, these sources do not release large amounts of greenhouse gases, making them a cleaner alternative for generating electricity.\n\nSolar power, for example, has become significantly cheaper over the past decade, allowing even small households to install solar panels on their rooftops. Wind farms, often built along coastlines or on hills, can generate electricity for thousands of homes without using any fuel at all.\n\nHowever, renewable energy still faces challenges. Sunlight and wind are not always available, so storing energy efficiently remains an important area of research. Building large wind or solar farms can also require significant amounts of land, which sometimes affects local wildlife and communities.\n\nDespite these challenges, many scientists believe that renewable energy will continue to grow rapidly, eventually replacing most fossil fuels within the coming decades.`,
    qs:[
      { q:`What is the passage mainly about?`, options:[`The history of fossil fuels`,`The benefits and challenges of renewable energy`,`How solar panels are manufactured`,`Why wind farms harm wildlife`], answer:1,
        hint:`Đoạn 1-2 nói về lợi ích, đoạn 3 nói về thử thách.`, signal:`Ý chính kết hợp cả nội dung lợi ích và thử thách.`,
        explain:`Bài nói về cả lợi ích (sạch, rẻ) và thử thách (lưu trữ năng lượng, diện tích đất) của năng lượng tái tạo.` },
      { q:`The word "alternative" in paragraph 1 is closest in meaning to ______.`, options:[`requirement`,`option`,`mistake`,`shortage`], answer:1,
        hint:`Từ này nói về một lựa chọn khác để thay thế nhiên liệu hóa thạch.`, signal:`Tìm từ đồng nghĩa với "lựa chọn".`,
        explain:`"Alternative" nghĩa là một lựa chọn/phương án khác — đồng nghĩa với "option".` },
      { q:`According to the passage, what is one challenge of renewable energy?`, options:[`It produces more greenhouse gases than fossil fuels.`,`Sunlight and wind are not always available.`,`It is more expensive than it was ten years ago.`,`Governments refuse to invest in it.`], answer:1,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 3 nêu rõ: ánh nắng và gió không phải lúc nào cũng có sẵn, gây khó khăn cho việc lưu trữ năng lượng.` },
      { q:`Which of the following is NOT mentioned in the passage?`, options:[`Solar panels becoming cheaper`,`Wind farms built along coastlines`,`Renewable energy being used in space stations`,`The need to store energy efficiently`], answer:2,
        hint:`So sánh từng lựa chọn với nội dung của bài.`, signal:`Loại trừ những ý không xuất hiện trong bài.`,
        explain:`Bài không hề đề cập đến việc sử dụng năng lượng tái tạo trong trạm vũ trụ.` }
    ]},

  { id:"rd4", title:`A YOUNG INVENTOR`,
    passage:`At just sixteen years old, Tran Minh Khoa built a low-cost water filter using materials found in his hometown, including sand, charcoal, and old plastic bottles. The idea came to him after he noticed that many families in the nearby countryside could not access clean drinking water.\n\nKhoa spent several months testing different combinations of materials before finding a design that removed most bacteria from river water. He shared his invention at a national science fair, where it caught the attention of a non-profit organisation working on clean water projects.\n\nWithin a year, more than two hundred of Khoa's filters had been distributed to rural households. He says the most rewarding part of the project was visiting families and watching them use clean water for cooking and drinking for the first time.\n\nKhoa hopes to study environmental engineering at university so that he can continue developing affordable solutions for communities in need.`,
    qs:[
      { q:`What is the passage mainly about?`, options:[`A teenager who built an affordable water filter`,`The dangers of drinking river water`,`A science fair held in Vietnam`,`How charcoal is produced`], answer:0,
        hint:`Bài nói về một bạn trẻ cụ thể và sáng chế của bạn ấy.`, signal:`Ý chính thường là chủ thể chính xuyên suốt cả bài.`,
        explain:`Cả bài kể về Khoa và chiếc máy lọc nước giá rẻ mà cậu đã sáng chế.` },
      { q:`The word "rewarding" in paragraph 3 is closest in meaning to ______.`, options:[`exhausting`,`satisfying`,`confusing`,`expensive`], answer:1,
        hint:`Từ này mô tả cảm xúc tích cực khi thấy thành quả của mình giúp được người khác.`, signal:`Tìm từ đồng nghĩa mang nghĩa tích cực.`,
        explain:`"Rewarding" nghĩa là mang lại cảm giác hài lòng/ý nghĩa — gần nghĩa với "satisfying".` },
      { q:`According to the passage, how did Khoa's invention reach rural households?`, options:[`He sold the filters at a local market.`,`A non-profit organisation helped distribute them.`,`The government bought them in bulk.`,`He posted them online for free.`], answer:1,
        hint:`Đọc lại đoạn 2 và 3.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 2 nói một tổ chức phi lợi nhuận đã chú ý đến sáng chế, và đoạn 3 cho biết hơn 200 máy lọc đã được phân phối.` },
      { q:`Which of the following is NOT TRUE according to the passage?`, options:[`Khoa used simple, locally available materials.`,`His filter removed most bacteria from water.`,`He plans to study environmental engineering.`,`He invented the filter within a single weekend.`], answer:3,
        hint:`Chú ý mốc thời gian được nêu trong bài để chế tạo ra máy lọc.`, signal:`Tìm thông tin trái với nội dung bài.`,
        explain:`Bài nói Khoa đã mất "several months" (vài tháng) để thử nghiệm, không phải chỉ một cuối tuần.` }
    ]},

  { id:"rd5", title:`FAST FOOD AND HEALTH`,
    passage:`Fast food has become a regular part of life for many people because it is cheap, quick, and easy to find. However, nutritionists warn that eating fast food too often can lead to serious health problems over time.\n\nMost fast food products are high in salt, sugar, and unhealthy fats, which can contribute to weight gain, high blood pressure, and an increased risk of heart disease. Because these meals are often low in fibre and essential vitamins, regularly choosing fast food over home-cooked meals can leave the body lacking important nutrients.\n\nSome fast food chains have started offering healthier menu options, such as salads and grilled dishes, in response to growing public concern. Nutrition experts, however, still recommend that people limit fast food to occasional treats rather than everyday meals.\n\nSimple habits, like cooking at home more often and reading nutrition labels carefully, can help people enjoy convenience without sacrificing their long-term health.`,
    qs:[
      { q:`What is the main idea of the passage?`, options:[`Fast food chains are closing due to low sales`,`The health risks of eating fast food too often`,`How to open a fast food restaurant`,`Why salads are more expensive than burgers`], answer:1,
        hint:`Đa số bài tập trung vào các vấn đề sức khỏe.`, signal:`Tìm ý chính lặp lại xuyên suốt các đoạn.`,
        explain:`Bài chủ yếu cảnh báo về tác hại sức khỏe khi ăn fast food quá thường xuyên.` },
      { q:`The word "contribute to" in paragraph 2 is closest in meaning to ______.`, options:[`prevent`,`help cause`,`replace`,`reduce`], answer:1,
        hint:`Cụm từ này nói về mối liên hệ giữa fast food và các vấn đề sức khỏe.`, signal:`Tìm cụm đồng nghĩa với "góp phần gây ra".`,
        explain:`"Contribute to" nghĩa là góp phần gây ra điều gì đó — gần nghĩa với "help cause".` },
      { q:`According to the passage, what have some fast food chains done recently?`, options:[`Closed all their restaurants`,`Increased the price of their meals`,`Offered healthier menu options`,`Stopped selling salads`], answer:2,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 3 nói rõ một số chuỗi fast food đã bắt đầu cung cấp các món lành mạnh hơn như salad và món nướng.` },
      { q:`Which of the following is NOT mentioned as a way to stay healthy?`, options:[`Cooking at home more often`,`Reading nutrition labels`,`Eating fast food every day`,`Choosing grilled dishes occasionally`], answer:2,
        hint:`So sánh các lựa chọn với lời khuyên ở đoạn cuối.`, signal:`Loại trừ ý trái với lời khuyên trong bài.`,
        explain:`Bài khuyên hạn chế fast food, không phải ăn nó mỗi ngày — nên đây là đáp án KHÔNG được đề cập như một cách giữ sức khỏe.` }
    ]},

  { id:"rd6", title:`URBAN FARMING`,
    passage:`As cities grow larger and green space becomes limited, many residents are turning to urban farming as a way to grow their own food. Urban farms can be found on rooftops, balconies, and even small patches of unused land between buildings.\n\nOne of the main benefits of urban farming is that it reduces the distance food travels from farm to table, which can lower transport costs and emissions. Growing vegetables locally also allows city dwellers to enjoy fresher produce and to better understand where their food comes from.\n\nUrban farming can also bring communities together. Shared garden plots give neighbours a reason to meet, work together, and exchange gardening tips. In some cities, schools have started their own gardens, teaching children valuable lessons about nature and healthy eating.\n\nDespite its benefits, urban farming faces challenges such as limited space, poor soil quality, and a lack of sunlight in densely built areas. Even so, many city planners believe urban farming will continue to grow in popularity as more people seek a closer connection to nature.`,
    qs:[
      { q:`What is the passage mainly about?`, options:[`The history of agriculture`,`The benefits and challenges of urban farming`,`How to build a rooftop garden`,`Why cities should ban farming`], answer:1,
        hint:`Bài nói cả về lợi ích (đoạn 2-3) và khó khăn (đoạn 4) của việc trồng cây trong đô thị.`,
        signal:`Ý chính thường kết hợp cả lợi ích và thử thách được nêu trong bài.`,
        explain:`Bài trình bày cả lợi ích (giảm chi phí vận chuyển, gắn kết cộng đồng) và khó khăn (thiếu đất, ánh sáng) của nông nghiệp đô thị.` },
      { q:`The word "dwellers" in paragraph 2 is closest in meaning to ______.`, options:[`visitors`,`residents`,`farmers`,`tourists`], answer:1,
        hint:`Từ này chỉ những người sống lâu dài trong thành phố.`, signal:`Tìm từ đồng nghĩa với "người sinh sống tại".`,
        explain:`"Dwellers" nghĩa là người sinh sống ở một nơi — đồng nghĩa với "residents".` },
      { q:`According to the passage, how does urban farming reduce transport costs?`, options:[`By using electric vehicles`,`By growing food closer to where people live`,`By selling food online`,`By importing food from rural areas`], answer:1,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 2 nói trồng cây gần nơi sinh sống giúp giảm khoảng cách vận chuyển thực phẩm, từ đó giảm chi phí.` },
      { q:`Which of the following is NOT mentioned as a challenge of urban farming?`, options:[`Limited space`,`Poor soil quality`,`Lack of sunlight`,`Government subsidies for urban farmers`], answer:3,
        hint:`So sánh các lựa chọn với những khó khăn được nêu ở đoạn cuối.`, signal:`Loại trừ ý không xuất hiện trong bài.`,
        explain:`Đoạn cuối chỉ nêu ba khó khăn: thiếu không gian, đất kém chất lượng, thiếu ánh sáng — không nói về trợ cấp của chính phủ.` }
    ]},

  { id:"rd7", title:`THE RISE OF E-SPORTS`,
    passage:`Once seen as a niche hobby, competitive video gaming, known as e-sports, has grown into a global industry worth billions of dollars. Major tournaments now fill stadiums with fans, while millions more watch online through live streaming platforms.\n\nProfessional gamers train for hours each day, much like traditional athletes, to improve their reaction speed, strategy, and teamwork. Universities in several countries have begun offering scholarships for talented e-sports players, recognising gaming as a legitimate competitive skill.\n\nCritics, however, raise concerns about the long hours young players spend in front of screens, warning that this could affect their physical health and social development. Supporters argue that, like any sport, e-sports can be practised safely if players maintain a healthy balance with exercise, sleep, and offline activities.\n\nAs internet access continues to improve worldwide, the popularity of e-sports is expected to keep growing, attracting even more sponsors, viewers, and aspiring professional players in the years ahead.`,
    qs:[
      { q:`What is the main idea of the passage?`, options:[`The history of video games`,`The growth and debate surrounding e-sports`,`How to become a professional gamer`,`Why universities should ban gaming`], answer:1,
        hint:`Bài nói về sự phát triển của e-sports và những tranh luận xung quanh nó.`,
        signal:`Ý chính thường kết hợp các nội dung chính của các đoạn.`,
        explain:`Bài trình bày cả sự phát triển mạnh mẽ của e-sports và những lo ngại/tranh luận xung quanh nó.` },
      { q:`The word "niche" in paragraph 1 is closest in meaning to ______.`, options:[`popular`,`small and specific`,`expensive`,`dangerous`], answer:1,
        hint:`Từ này mô tả e-sports trước khi nó trở nên phổ biến toàn cầu.`, signal:`Tìm từ đồng nghĩa với "nhỏ, đặc thù".`,
        explain:`"Niche" nghĩa là một lĩnh vực nhỏ, đặc thù, chỉ thu hút một nhóm người nhất định.` },
      { q:`According to the passage, what concern do critics raise about e-sports?`, options:[`It costs too much money`,`It could affect young players' health and social development`,`It is not entertaining`,`It requires too much travel`], answer:1,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 3 nói các nhà phê bình lo ngại việc dành quá nhiều thời gian trước màn hình ảnh hưởng đến sức khỏe và sự phát triển xã hội.` },
      { q:`Which of the following is TRUE according to the passage?`, options:[`E-sports has completely replaced traditional sports`,`Some universities now offer e-sports scholarships`,`E-sports players don't need to train`,`Critics believe e-sports has no risks`], answer:1,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm thông tin đúng với nội dung bài.`,
        explain:`Đoạn 2 nói một số trường đại học đã bắt đầu cấp học bổng cho các tuyển thủ e-sports tài năng.` }
    ]},

  { id:"rd8", title:`THE ART OF WATER PUPPETRY`,
    passage:`Water puppetry is a traditional form of entertainment that has existed in northern Vietnam for nearly a thousand years. Performances take place on a pool of water, with puppets controlled by hidden rods and strings operated by puppeteers standing behind a bamboo screen.\n\nThe stories told through water puppetry often come from rural life, folk tales, and historical legends, featuring scenes such as farmers ploughing fields, fishermen catching fish, or dragons dancing across the water. Traditional music played on instruments like the drum and the flute accompanies each scene, adding atmosphere to the performance.\n\nToday, water puppetry remains a popular attraction for both local audiences and international tourists, particularly in Hanoi, where several theatres hold daily shows. Performers undergo years of training to master the physically demanding technique of operating puppets while standing in water.\n\nAs with many traditional art forms, water puppetry faces the challenge of attracting younger audiences who are more familiar with modern entertainment. Cultural organisations continue to promote the art form through festivals and educational programmes to keep this unique tradition alive.`,
    qs:[
      { q:`What is the passage mainly about?`, options:[`Modern Vietnamese cinema`,`A traditional Vietnamese art form and its challenges`,`Fishing techniques in northern Vietnam`,`Famous dragons in Vietnamese legends`], answer:1,
        hint:`Bài giới thiệu về múa rối nước và những khó khăn hiện tại của nó.`,
        signal:`Ý chính thường kết hợp giới thiệu + thử thách được nêu trong bài.`,
        explain:`Bài giới thiệu về nghệ thuật múa rối nước truyền thống và thử thách trong việc thu hút khán giả trẻ.` },
      { q:`The word "atmosphere" in paragraph 2 is closest in meaning to ______.`, options:[`air pollution`,`weather`,`mood or feeling`,`noise`], answer:2,
        hint:`Từ này nói về cảm giác mà âm nhạc mang lại cho buổi diễn.`, signal:`Tìm từ đồng nghĩa với "không khí, cảm xúc".`,
        explain:`"Atmosphere" trong ngữ cảnh này nghĩa là không khí/cảm xúc của buổi diễn, không phải nghĩa đen về khí quyển.` },
      { q:`According to the passage, where do many water puppetry performances take place today?`, options:[`Ho Chi Minh City`,`Hanoi`,`Hue`,`Da Nang`], answer:1,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 3 nói rõ múa rối nước đặc biệt phổ biến ở Hà Nội, nơi có nhiều nhà hát biểu diễn hàng ngày.` },
      { q:`Which of the following is NOT mentioned in the passage?`, options:[`Puppets are controlled by rods and strings`,`Performers train for years`,`Stories often come from rural life`,`Tickets are sold only to foreign tourists`], answer:3,
        hint:`So sánh các lựa chọn với nội dung bài.`, signal:`Loại trừ ý không xuất hiện trong bài.`,
        explain:`Bài nói cả khán giả trong nước và quốc tế đều xem múa rối nước, không nói vé chỉ bán cho khách nước ngoài.` }
    ]},

  { id:"rd9", title:`DIGITAL DETOX`,
    passage:`In an age when smartphones are almost always within reach, more people are choosing to take a "digital detox" — a period of time deliberately spent away from screens and social media.\n\nSupporters of digital detoxing say that stepping away from constant notifications allows the mind to rest and reduces feelings of anxiety often linked to comparing oneself to others online. Some report sleeping better and feeling more present during conversations after reducing their screen time.\n\nA digital detox does not have to mean giving up technology completely. Many people start with small steps, such as turning off notifications during meals, setting a screen-time limit, or choosing one day a week to stay offline. Schools in some countries have even introduced "phone-free" periods to help students concentrate better during lessons.\n\nWhile technology offers many benefits, experts agree that taking occasional breaks from screens can help people maintain a healthier relationship with their devices and the world around them.`,
    qs:[
      { q:`What is the passage mainly about?`, options:[`The dangers of social media companies`,`The benefits of taking breaks from screens`,`How smartphones are made`,`Why schools should ban technology completely`], answer:1,
        hint:`Bài nói về việc tạm xa màn hình và những lợi ích của nó.`, signal:`Ý chính thường là nội dung lặp lại xuyên suốt các đoạn.`,
        explain:`Bài tập trung vào lợi ích của việc "digital detox" — tạm ngừng sử dụng màn hình.` },
      { q:`The word "deliberately" in paragraph 1 is closest in meaning to ______.`, options:[`accidentally`,`on purpose`,`rarely`,`quickly`], answer:1,
        hint:`Từ này mô tả một hành động có chủ đích, không phải ngẫu nhiên.`, signal:`Tìm từ đồng nghĩa với "có chủ ý".`,
        explain:`"Deliberately" nghĩa là một cách có chủ ý — đồng nghĩa với "on purpose".` },
      { q:`According to the passage, what is one small step people can take to start a digital detox?`, options:[`Deleting all their social media accounts`,`Turning off notifications during meals`,`Buying a new phone`,`Avoiding all technology forever`], answer:1,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 3 nêu ví dụ: tắt thông báo trong giờ ăn là một bước nhỏ để bắt đầu "digital detox".` },
      { q:`Which of the following is NOT TRUE according to the passage?`, options:[`A digital detox must mean giving up technology completely`,`Some schools have introduced phone-free periods`,`Reducing screen time may improve sleep`,`Experts agree that taking breaks can be helpful`], answer:0,
        hint:`Đọc lại đoạn 3, chú ý câu đầu đoạn.`, signal:`Tìm thông tin trái với nội dung bài.`,
        explain:`Đoạn 3 nói rõ "digital detox" KHÔNG cần phải từ bỏ công nghệ hoàn toàn, nên đáp án A là không đúng.` }
    ]},

  { id:"rd10", title:`THE SCIENCE OF HABITS`,
    passage:`Habits are behaviours that become automatic through repetition, allowing the brain to perform tasks with little conscious effort. Scientists explain that habits form through a loop: a cue triggers a routine, which leads to a reward, and over time, the brain begins to crave that reward whenever the cue appears.\n\nUnderstanding this loop can help people build better habits. For example, someone who wants to exercise more might place their running shoes by the door as a visible cue, making it easier to start the routine without relying purely on willpower.\n\nBreaking a bad habit can be more difficult than forming a new one, partly because the brain has already linked a cue to a reward. Experts often recommend replacing an unwanted habit with a healthier routine that provides a similar reward, rather than trying to eliminate the behaviour altogether.\n\nResearch suggests that it can take anywhere from a few weeks to several months to build a new habit, depending on the complexity of the behaviour and how consistently it is practised.`,
    qs:[
      { q:`What is the main idea of the passage?`, options:[`Why willpower is the only way to change habits`,`How habits form and how they can be changed`,`The history of psychological research`,`Why bad habits cannot be broken`], answer:1,
        hint:`Bài giải thích cơ chế hình thành thói quen và cách thay đổi chúng.`, signal:`Ý chính thường là nội dung xuyên suốt các đoạn.`,
        explain:`Bài giải thích vòng lặp hình thành thói quen và đưa ra cách xây dựng/thay đổi thói quen.` },
      { q:`The word "automatic" in paragraph 1 is closest in meaning to ______.`, options:[`difficult`,`done without thinking`,`dangerous`,`expensive`], answer:1,
        hint:`Từ này mô tả hành động đã trở thành thói quen, không cần suy nghĩ nhiều.`, signal:`Tìm từ đồng nghĩa với "tự động, không cần suy nghĩ".`,
        explain:`"Automatic" nghĩa là tự động, được thực hiện mà không cần suy nghĩ nhiều.` },
      { q:`According to the passage, what is one strategy for building a new habit?`, options:[`Avoiding all routines`,`Placing a visible cue, such as running shoes by the door`,`Relying only on willpower`,`Ignoring rewards completely`], answer:1,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 2 nêu ví dụ đặt giày chạy bộ gần cửa như một "tín hiệu" để dễ bắt đầu thói quen.` },
      { q:`Which of the following is NOT TRUE according to the passage?`, options:[`Habits form through a loop of cue, routine, and reward`,`Breaking a bad habit is always easier than forming a new one`,`Replacing a habit can be more effective than eliminating it`,`Building a new habit can take weeks or months`], answer:1,
        hint:`Đọc lại đoạn 3, chú ý câu đầu đoạn.`, signal:`Tìm thông tin trái với nội dung bài.`,
        explain:`Đoạn 3 nói bỏ một thói quen xấu THƯỜNG KHÓ HƠN hình thành thói quen mới, không phải "luôn dễ hơn".` }
    ]}
],

/* ============================== 5. ĐÚNG / SAI (Đúng - Sai) ============================== */
truefalse: [
  { id:"tf1", title:`VIETNAMESE TEA CULTURE`,
    passage:`Tea has been part of Vietnamese culture for hundreds of years. It is common to see people drinking tea at home, in small street-side stalls, or during important ceremonies such as weddings and funerals. Vietnamese tea is usually served without sugar or milk, allowing drinkers to enjoy its natural flavour.\n\nIn many families, offering a cup of tea to a guest is considered a sign of respect and hospitality. Older generations often say that sharing tea together is a good opportunity for family members to talk and strengthen their relationships.\n\nToday, young people in cities have also developed an interest in newer tea drinks, such as milk tea and fruit tea, which are sold at many trendy cafés. Despite this trend, traditional tea still holds a special place in Vietnamese daily life and culture.`,
    items:[
      { text:`Vietnamese tea is traditionally served with sugar and milk.`, answer:false,
        hint:`Đọc lại câu cuối đoạn 1.`, signal:`So sánh trực tiếp với câu mô tả cách phục vụ trà.`,
        explain:`Bài nói trà Việt Nam thường được phục vụ KHÔNG có đường hay sữa, nên câu này SAI.` },
      { text:`Offering tea to a guest is seen as a sign of respect.`, answer:true,
        hint:`Đọc lại câu đầu đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp trong bài.`,
        explain:`Đoạn 2 nói rõ mời khách uống trà được xem là dấu hiệu của sự tôn trọng và lòng mến khách, nên câu này ĐÚNG.` },
      { text:`Young people in Vietnam have no interest in tea drinks at all.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Chú ý các từ phủ định tuyệt đối như "no...at all".`,
        explain:`Đoạn 3 nói người trẻ ở thành phố có hứng thú với các loại trà mới như trà sữa, trà hoa quả, nên câu này SAI.` },
      { text:`Traditional tea remains important in Vietnamese culture today.`, answer:true,
        hint:`Đọc lại câu cuối bài.`, signal:`Tìm câu kết luận của đoạn cuối.`,
        explain:`Câu cuối bài khẳng định trà truyền thống vẫn giữ vị trí đặc biệt trong văn hóa Việt Nam ngày nay, nên câu này ĐÚNG.` }
    ]},

  { id:"tf2", title:`BENEFITS OF CYCLING`,
    passage:`Cycling is one of the most affordable and environmentally friendly ways to travel short distances. Unlike cars and motorbikes, bicycles do not produce any exhaust fumes, which helps reduce air pollution in busy cities.\n\nRegular cycling is also good for physical health. It strengthens the heart, improves muscle tone, and can help people maintain a healthy weight. Many doctors recommend cycling as a low-impact exercise that is suitable for people of almost any age.\n\nIn several countries, local governments have built more cycling paths to encourage citizens to cycle to work or school instead of driving. While cycling has many benefits, riders are still advised to wear helmets and follow traffic rules to stay safe on the road.`,
    items:[
      { text:`Bicycles produce exhaust fumes that pollute the air.`, answer:false,
        hint:`Đọc lại đoạn 1.`, signal:`Tìm thông tin trái nghĩa trong bài.`,
        explain:`Bài nói xe đạp KHÔNG tạo ra khí thải, khác với ô tô và xe máy, nên câu này SAI.` },
      { text:`Cycling can help people maintain a healthy weight.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nói rõ đạp xe giúp duy trì cân nặng hợp lý, nên câu này ĐÚNG.` },
      { text:`Cycling is recommended only for young athletes.`, answer:false,
        hint:`Đọc lại đoạn 2.`, signal:`Chú ý các từ giới hạn như "only".`,
        explain:`Bài nói đạp xe phù hợp với người ở "almost any age" (gần như mọi lứa tuổi), không chỉ vận động viên trẻ, nên câu này SAI.` },
      { text:`Wearing a helmet is advised when cycling.`, answer:true,
        hint:`Đọc lại câu cuối bài.`, signal:`Tìm lời khuyên được nêu ở cuối bài.`,
        explain:`Câu cuối bài khuyên người đi xe đạp nên đội mũ bảo hiểm và tuân thủ luật giao thông, nên câu này ĐÚNG.` }
    ]},

  { id:"tf3", title:`PLASTIC POLLUTION IN OCEANS`,
    passage:`Every year, millions of tonnes of plastic waste end up in the world's oceans, harming marine animals and damaging fragile ecosystems. Much of this plastic comes from everyday items such as bottles, bags, and food packaging that are not properly recycled.\n\nSea creatures, including turtles, fish, and seabirds, often mistake small pieces of plastic for food. This can cause serious injuries or even death. Scientists have also discovered tiny plastic particles, known as microplastics, in seawater, salt, and even the fish that people eat.\n\nMany countries have introduced bans on single-use plastic bags and straws in an effort to reduce ocean pollution. Environmental groups continue to encourage individuals to reduce, reuse, and recycle plastic products in their daily lives.`,
    items:[
      { text:`Most ocean plastic comes from large industrial machinery.`, answer:false,
        hint:`Đọc lại đoạn 1.`, signal:`So sánh với nguồn rác thải được nêu trong bài.`,
        explain:`Bài nói rác thải nhựa chủ yếu đến từ vật dụng hàng ngày như chai, túi, bao bì — không phải máy móc công nghiệp, nên câu này SAI.` },
      { text:`Sea animals sometimes mistake plastic for food.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nói các sinh vật biển thường nhầm các mảnh nhựa nhỏ với thức ăn, nên câu này ĐÚNG.` },
      { text:`Microplastics have been found in seawater and fish.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm thông tin chi tiết được nêu trực tiếp.`,
        explain:`Đoạn 2 nói các nhà khoa học đã phát hiện vi nhựa trong nước biển, muối, và cả trong cá, nên câu này ĐÚNG.` },
      { text:`No countries have introduced bans on single-use plastic.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Chú ý các từ phủ định tuyệt đối như "no countries".`,
        explain:`Đoạn 3 nói nhiều quốc gia đã ban hành lệnh cấm đồ nhựa dùng một lần, nên câu này SAI.` }
    ]},

  { id:"tf4", title:`THE IMPORTANCE OF SLEEP`,
    passage:`Getting enough sleep is essential for both physical and mental health, especially for teenagers whose bodies and brains are still developing. Experts recommend that teenagers sleep between eight and ten hours every night.\n\nA lack of sleep can affect memory, concentration, and mood, making it harder for students to perform well at school. Over time, poor sleep habits have also been linked to a weaker immune system and a higher risk of certain health problems.\n\nSimple habits, such as avoiding screens before bedtime and keeping a consistent sleep schedule, can improve sleep quality significantly. Although homework and social activities often make it tempting to stay up late, experts stress that prioritising sleep is just as important as studying for exams.`,
    items:[
      { text:`Teenagers need less sleep than adults because their bodies are smaller.`, answer:false,
        hint:`Đọc lại đoạn 1.`, signal:`So sánh với số giờ ngủ được khuyến nghị cho thanh thiếu niên.`,
        explain:`Bài khuyến nghị thanh thiếu niên cần ngủ 8-10 giờ, không liên quan đến kích thước cơ thể, nên câu này SAI.` },
      { text:`A lack of sleep can affect students' concentration and mood.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nói thiếu ngủ ảnh hưởng đến khả năng tập trung và tâm trạng, nên câu này ĐÚNG.` },
      { text:`Using screens right before bed can improve sleep quality.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin trái nghĩa trong bài.`,
        explain:`Bài khuyên TRÁNH dùng màn hình trước giờ ngủ để cải thiện chất lượng ngủ, nên câu này SAI.` },
      { text:`Keeping a consistent sleep schedule is a recommended habit.`, answer:true,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 3 nêu rõ việc duy trì giờ ngủ cố định là một thói quen được khuyến nghị, nên câu này ĐÚNG.` }
    ]},

  { id:"tf5", title:`A TRADITIONAL WEAVING VILLAGE`,
    passage:`Hidden among the rice fields of northern Vietnam, Van Phuc silk village has been producing fine silk fabric for over a thousand years. Skilled craftsmen and craftswomen use traditional looms to weave intricate patterns that have been passed down through many generations.\n\nThe process of making silk begins with raising silkworms, which produce the raw silk threads used for weaving. After the threads are collected, they are dyed in natural colours before being woven into soft, lightweight fabric prized for its quality.\n\nIn recent years, the village has welcomed growing numbers of tourists who come to watch the weaving process and purchase handmade silk products. Local authorities hope that combining tourism with traditional craft will help preserve this cultural heritage for future generations.`,
    items:[
      { text:`Van Phuc village has produced silk for over a thousand years.`, answer:true,
        hint:`Đọc lại câu đầu bài.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Câu đầu bài nói làng Vạn Phúc đã sản xuất lụa hơn một nghìn năm, nên câu này ĐÚNG.` },
      { text:`Silk threads are produced by machines instead of silkworms.`, answer:false,
        hint:`Đọc lại đoạn 2.`, signal:`So sánh với nguồn gốc của sợi tơ trong bài.`,
        explain:`Bài nói sợi tơ thô được tạo ra từ con tằm (silkworms), không phải máy móc, nên câu này SAI.` },
      { text:`The fabric is dyed before it is woven.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Chú ý thứ tự các công đoạn được mô tả.`,
        explain:`Đoạn 2 nói sợi tơ được nhuộm màu TRƯỚC KHI được dệt thành vải, nên câu này ĐÚNG.` },
      { text:`Tourism in the village has decreased in recent years.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm thông tin trái nghĩa với xu hướng được nêu trong bài.`,
        explain:`Đoạn 3 nói số lượng khách du lịch đến làng đang TĂNG lên trong những năm gần đây, nên câu này SAI.` }
    ]},

  { id:"tf6", title:`BENEFITS OF LIBRARIES`,
    passage:`Public libraries offer far more than just a place to borrow books. Many libraries today provide free internet access, study spaces, and even workshops on topics such as coding or job applications.\n\nFor students, libraries can be an ideal place to study, since they are usually quiet and free from the distractions found at home. Librarians are also trained to help visitors find reliable information for school projects or personal research.\n\nIn some communities, libraries host events such as storytelling sessions for children or reading clubs for adults, helping to bring people together. Despite the rise of digital media, many people continue to value libraries as important community spaces that support lifelong learning.`,
    items:[
      { text:`Libraries only allow people to borrow printed books.`, answer:false,
        hint:`Đọc lại câu đầu bài.`, signal:`Chú ý từ giới hạn "only".`,
        explain:`Bài nói thư viện ngày nay còn cung cấp internet, không gian học tập, và các buổi hội thảo, không chỉ cho mượn sách, nên câu này SAI.` },
      { text:`Some libraries offer workshops on coding or job applications.`, answer:true,
        hint:`Đọc lại đoạn 1.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 1 nói rõ một số thư viện cung cấp hội thảo về lập trình hoặc xin việc, nên câu này ĐÚNG.` },
      { text:`Librarians can help visitors find reliable information.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nói thủ thư được đào tạo để giúp người đọc tìm thông tin đáng tin cậy, nên câu này ĐÚNG.` },
      { text:`Libraries have become completely unnecessary because of digital media.`, answer:false,
        hint:`Đọc lại câu cuối bài.`, signal:`Chú ý các từ phủ định tuyệt đối như "completely unnecessary".`,
        explain:`Câu cuối bài nói nhiều người vẫn coi trọng thư viện dù truyền thông số phát triển, nên câu này SAI.` }
    ]},

  { id:"tf7", title:`THE BENEFITS OF JOURNALING`,
    passage:`Keeping a daily journal is a simple habit that can have a positive impact on mental health. Writing down thoughts and feelings allows people to process emotions rather than letting them build up over time.\n\nMany psychologists recommend journaling as a way to reduce stress, since putting worries into words can make them feel more manageable. Journaling can also help people recognise patterns in their mood or behaviour that they might not notice otherwise.\n\nSome people prefer to write a few sentences each morning, while others journal at night to reflect on their day. There is no single correct way to journal — the most important thing is to write honestly and regularly.\n\nBeyond emotional benefits, journaling can also improve writing skills and memory, since regularly putting experiences into words helps the brain better store and recall information.`,
    items:[
      { text:`Journaling can help people process their emotions.`, answer:true,
        hint:`Đọc lại câu cuối đoạn 1.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 1 nói viết nhật ký giúp con người xử lý cảm xúc, nên câu này ĐÚNG.` },
      { text:`Psychologists never recommend journaling for stress relief.`, answer:false,
        hint:`Đọc lại đoạn 2.`, signal:`Chú ý từ phủ định tuyệt đối "never".`,
        explain:`Đoạn 2 nói nhiều nhà tâm lý học khuyên viết nhật ký để giảm stress, nên câu này SAI.` },
      { text:`There is only one correct way to journal.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Chú ý từ giới hạn "only one".`,
        explain:`Đoạn 3 nói không có cách viết nhật ký "đúng" duy nhất, nên câu này SAI.` },
      { text:`Journaling may improve memory as well as emotional wellbeing.`, answer:true,
        hint:`Đọc lại đoạn cuối.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn cuối nói viết nhật ký có thể cải thiện trí nhớ bên cạnh lợi ích cảm xúc, nên câu này ĐÚNG.` }
    ]},

  { id:"tf8", title:`COFFEE FARMING IN THE CENTRAL HIGHLANDS`,
    passage:`Vietnam is one of the largest coffee producers in the world, with much of its coffee grown in the Central Highlands, where the climate and soil are ideal for cultivation. Farmers in this region grow mainly robusta beans, which are known for their strong flavour and high caffeine content.\n\nCoffee farming provides income for millions of households, but farmers often face challenges such as unpredictable weather and fluctuating market prices. In recent years, some farmers have started growing coffee alongside other crops, a method known as intercropping, to reduce financial risk.\n\nSustainable farming practices, such as using natural fertilisers and conserving water, are becoming more common as both farmers and buyers pay greater attention to environmental impact. Some coffee farms now offer tours, allowing tourists to learn about the harvesting and roasting process firsthand.\n\nAs global demand for coffee continues to rise, experts believe sustainable farming will play an increasingly important role in the future of Vietnam's coffee industry.`,
    items:[
      { text:`Most coffee in the Central Highlands is arabica, not robusta.`, answer:false,
        hint:`Đọc lại đoạn 1.`, signal:`So sánh với loại cà phê được nêu trong bài.`,
        explain:`Đoạn 1 nói nông dân ở đây trồng chủ yếu cà phê robusta, không phải arabica, nên câu này SAI.` },
      { text:`Farmers face challenges like unpredictable weather and changing prices.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nói rõ nông dân gặp khó khăn về thời tiết và giá cả thị trường, nên câu này ĐÚNG.` },
      { text:`Intercropping means growing coffee alongside other crops.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm định nghĩa được nêu trực tiếp trong bài.`,
        explain:`Đoạn 2 định nghĩa "intercropping" là trồng cà phê cùng với các loại cây khác, nên câu này ĐÚNG.` },
      { text:`No coffee farms in Vietnam offer tours to tourists.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Chú ý từ phủ định tuyệt đối "no...".`,
        explain:`Đoạn 3 nói một số nông trại cà phê có tổ chức tour cho khách du lịch, nên câu này SAI.` }
    ]},

  { id:"tf9", title:`THE HISTORY OF THE AO DAI`,
    passage:`The ao dai is a traditional Vietnamese garment, often recognised by its long, flowing tunic worn over loose trousers. Although its exact origins are debated, the modern form of the ao dai developed gradually over centuries, influenced by both Vietnamese and foreign fashion styles.\n\nFor much of its history, the ao dai was worn by both men and women, though today it is more commonly associated with women's formal and traditional wear. It remains a popular choice for special occasions such as weddings, festivals, and important ceremonies.\n\nMany schools across Vietnam also require female students to wear a white ao dai as part of their uniform, particularly in southern provinces. Designers continue to experiment with new patterns, fabrics, and cuts, blending tradition with modern fashion trends.\n\nDespite changes in style over time, the ao dai remains an important symbol of Vietnamese identity, often featured in cultural events, tourism promotions, and international fashion shows.`,
    items:[
      { text:`The ao dai was historically worn only by women.`, answer:false,
        hint:`Đọc lại đoạn 2.`, signal:`Chú ý từ giới hạn "only".`,
        explain:`Đoạn 2 nói trong lịch sử, áo dài được cả nam và nữ mặc, không chỉ riêng nữ, nên câu này SAI.` },
      { text:`The ao dai is commonly worn for special occasions like weddings.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nói áo dài vẫn phổ biến trong các dịp đặc biệt như đám cưới, nên câu này ĐÚNG.` },
      { text:`Some schools require female students to wear a white ao dai.`, answer:true,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 3 nói nhiều trường học yêu cầu nữ sinh mặc áo dài trắng, nên câu này ĐÚNG.` },
      { text:`Designers have completely stopped creating new ao dai designs.`, answer:false,
        hint:`Đọc lại đoạn 3.`, signal:`Chú ý từ phủ định tuyệt đối "completely stopped".`,
        explain:`Đoạn 3 nói các nhà thiết kế vẫn tiếp tục thử nghiệm mẫu mới, nên câu này SAI.` }
    ]},

  { id:"tf10", title:`THE IMPORTANCE OF BEES`,
    passage:`Bees play a crucial role in many ecosystems by pollinating flowers, which allows plants to reproduce and produce fruit and seeds. Without bees, many crops that humans rely on for food would struggle to grow successfully.\n\nIn recent decades, bee populations in several parts of the world have declined due to factors such as pesticide use, habitat loss, and disease. Scientists warn that a continued decline in bee populations could seriously affect global food production.\n\nTo help protect bees, some farmers have reduced their use of harmful pesticides and planted more flowering plants near their fields. Individuals can also help by planting bee-friendly flowers in gardens and avoiding unnecessary pesticide use at home.\n\nBeekeeping has also become a popular hobby and small business for many people, helping to support local bee populations while producing honey and other bee products.`,
    items:[
      { text:`Bees help plants reproduce through pollination.`, answer:true,
        hint:`Đọc lại câu đầu bài.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Câu đầu bài nói ong giúp cây sinh sản qua việc thụ phấn, nên câu này ĐÚNG.` },
      { text:`Bee populations have increased rapidly worldwide in recent decades.`, answer:false,
        hint:`Đọc lại đoạn 2.`, signal:`So sánh với xu hướng được nêu trong bài.`,
        explain:`Đoạn 2 nói số lượng ong đã SUY GIẢM ở nhiều nơi, không phải tăng, nên câu này SAI.` },
      { text:`Pesticide use is mentioned as one cause of bee population decline.`, answer:true,
        hint:`Đọc lại đoạn 2.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 2 nêu việc sử dụng thuốc trừ sâu là một nguyên nhân khiến số lượng ong giảm, nên câu này ĐÚNG.` },
      { text:`Beekeeping has become a popular hobby for some people.`, answer:true,
        hint:`Đọc lại câu cuối bài.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Câu cuối bài nói nuôi ong đã trở thành một sở thích phổ biến, nên câu này ĐÚNG.` }
    ]},

  { id:"tf11", title:`THE BENEFITS OF LEARNING A MUSICAL INSTRUMENT`,
    passage:`Learning to play a musical instrument offers benefits that extend far beyond simply making music. Studies suggest that regular practice can improve memory, concentration, and discipline, skills that are also useful in academic subjects.\n\nPlaying an instrument requires coordinating multiple skills at once, such as reading notes, moving fingers accurately, and listening carefully, which can strengthen connections between different areas of the brain. Many young musicians also develop patience, since mastering an instrument takes consistent practice over a long period of time.\n\nBeyond individual benefits, playing in a band or orchestra teaches teamwork and communication, as musicians must listen to one another and adjust their playing to create music together. Performing in front of an audience can also help build confidence and reduce stage fright over time.\n\nWhile progress can feel slow at first, most teachers agree that consistent short practice sessions are more effective than occasional long ones.`,
    items:[
      { text:`Learning an instrument can improve memory and concentration.`, answer:true,
        hint:`Đọc lại đoạn 1.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 1 nói luyện tập thường xuyên giúp cải thiện trí nhớ và khả năng tập trung, nên câu này ĐÚNG.` },
      { text:`Playing an instrument only uses one part of the brain.`, answer:false,
        hint:`Đọc lại đoạn 2.`, signal:`Chú ý từ giới hạn "only one part".`,
        explain:`Đoạn 2 nói chơi nhạc cụ kết hợp nhiều kỹ năng, tăng cường kết nối giữa NHIỀU vùng não, nên câu này SAI.` },
      { text:`Performing in front of an audience can help build confidence.`, answer:true,
        hint:`Đọc lại đoạn 3.`, signal:`Tìm câu khẳng định trực tiếp.`,
        explain:`Đoạn 3 nói biểu diễn trước khán giả giúp xây dựng sự tự tin, nên câu này ĐÚNG.` },
      { text:`Teachers agree that occasional long practice sessions are more effective than short, regular ones.`, answer:false,
        hint:`Đọc lại câu cuối bài.`, signal:`So sánh với lời khuyên được nêu ở cuối bài.`,
        explain:`Câu cuối bài nói các buổi tập NGẮN và THƯỜNG XUYÊN hiệu quả hơn buổi tập dài, không thường xuyên — ngược với câu này, nên SAI.` }
    ]}
],

/* ============================== 6. ĐÚNG DẠNG TỪ (Tự luận) ============================== */
wordform: [
  { id:"wf01", sentence:`The government has introduced several measures to reduce traffic ______.`, word:`CONGEST`, accepted:[`congestion`],
    hint:`Chỗ trống đứng sau "traffic" và cần một danh từ.`, signal:`Danh từ thường có đuôi -ion/-tion.`,
    explain:`Cần danh từ chỉ "sự tắc nghẽn": congestion. → traffic congestion (tình trạng tắc nghẽn giao thông).` },

  { id:"wf02", sentence:`Many farmers in the region rely on rainwater for ______ purposes.`, word:`IRRIGATE`, accepted:[`irrigation`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "purposes" nên cần một danh từ đứng trước nó.`, signal:`Danh từ + danh từ (purposes).`,
    explain:`Cần danh từ "sự tưới tiêu": irrigation. → for irrigation purposes (cho mục đích tưới tiêu).` },

  { id:"wf03", sentence:`The museum's new exhibition focuses on ______ artefacts from the Ly Dynasty.`, word:`HISTORY`, accepted:[`historical`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "artefacts" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "thuộc về lịch sử": historical. → historical artefacts (di vật lịch sử).` },

  { id:"wf04", sentence:`Volunteers played an important role in the ______ of endangered species.`, word:`PROTECT`, accepted:[`protection`],
    hint:`Chỗ trống đứng sau "the" và "in the", cần một danh từ.`, signal:`the + danh từ + of.`,
    explain:`Cần danh từ "sự bảo vệ": protection. → the protection of endangered species.` },

  { id:"wf05", sentence:`The professor gave a very ______ lecture on renewable energy.`, word:`INFORM`, accepted:[`informative`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "lecture" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "có nhiều thông tin bổ ích": informative. → an informative lecture.` },

  { id:"wf06", sentence:`Her ______ to learn three languages by the age of fifteen amazed everyone.`, word:`ABLE`, accepted:[`ability`],
    hint:`Chỗ trống làm chủ ngữ của câu, cần một danh từ.`, signal:`Tính từ sở hữu (her) + danh từ.`,
    explain:`Cần danh từ "khả năng": ability. → Her ability to learn three languages...` },

  { id:"wf07", sentence:`The company was praised for its ______ approach to reducing plastic packaging.`, word:`INNOVATE`, accepted:[`innovative`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "approach" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "đổi mới, sáng tạo": innovative. → an innovative approach.` },

  { id:"wf08", sentence:`______, the new bridge has reduced travel time between the two cities by half.`, word:`FORTUNATE`, accepted:[`fortunately`],
    hint:`Chỗ trống đứng đầu câu, có dấu phẩy ngay sau — cần một trạng từ.`, signal:`Trạng từ + dấu phẩy + mệnh đề.`,
    explain:`Cần trạng từ "may mắn là": fortunately. → Fortunately, the new bridge has reduced...` },

  { id:"wf09", sentence:`The factory was fined for releasing ______ chemicals into the river.`, word:`HARM`, accepted:[`harmful`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "chemicals" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "có hại": harmful. → harmful chemicals.` },

  { id:"wf10", sentence:`The charity organised a ______ campaign to collect winter clothes for poor children.`, word:`NATION`, accepted:[`national`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "campaign" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "trên toàn quốc": national. → a national campaign.` },

  { id:"wf11", sentence:`Doctors recommend regular exercise to improve overall physical ______.`, word:`FIT`, accepted:[`fitness`],
    hint:`Chỗ trống đứng sau tính từ "physical" nên cần một danh từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần danh từ "sự khỏe mạnh, thể lực": fitness. → physical fitness.` },

  { id:"wf12", sentence:`The ______ between the two reports made the manager suspicious.`, word:`DIFFER`, accepted:[`difference`],
    hint:`Chỗ trống làm chủ ngữ của câu, đứng sau "the".`, signal:`the + danh từ.`,
    explain:`Cần danh từ "sự khác biệt": difference. → The difference between the two reports...` },

  { id:"wf13", sentence:`It took the engineers several months to find a ______ solution to the design problem.`, word:`PRACTICE`, accepted:[`practical`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "solution" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "thực tế, khả thi": practical. → a practical solution.` },

  { id:"wf14", sentence:`The volunteers showed great ______ when helping flood victims rebuild their homes.`, word:`GENEROUS`, accepted:[`generosity`],
    hint:`Chỗ trống đứng sau "great" nên cần một danh từ.`, signal:`great + danh từ.`,
    explain:`Cần danh từ "sự rộng lượng": generosity. → showed great generosity.` },

  { id:"wf15", sentence:`Local authorities are working to improve ______ between schools and parents.`, word:`COMMUNICATE`, accepted:[`communication`],
    hint:`Chỗ trống là tân ngữ của động từ "improve" nên cần một danh từ.`, signal:`improve + danh từ.`,
    explain:`Cần danh từ "sự giao tiếp/liên lạc": communication. → improve communication between...` },

  { id:"wf16", sentence:`The professor's theory was later proven ______ correct.`, word:`SCIENCE`, accepted:[`scientifically`],
    hint:`Chỗ trống bổ nghĩa cho tính từ "correct" nên cần một trạng từ.`, signal:`Trạng từ + tính từ.`,
    explain:`Cần trạng từ "về mặt khoa học": scientifically. → proven scientifically correct.` },

  { id:"wf17", sentence:`The new regulations have made the workplace much ______ for everyone.`, word:`SAFE`, accepted:[`safer`],
    hint:`Có từ "much" đứng trước chỗ trống, báo hiệu cấu trúc so sánh.`, signal:`much + so sánh hơn.`,
    explain:`"Much" thường đi kèm dạng so sánh hơn để nhấn mạnh mức độ: safer.` },

  { id:"wf18", sentence:`Despite the difficulty of the route, his ______ helped him finish the marathon.`, word:`DETERMINE`, accepted:[`determination`],
    hint:`Chỗ trống làm chủ ngữ của mệnh đề sau, cần một danh từ.`, signal:`Tính từ sở hữu (his) + danh từ.`,
    explain:`Cần danh từ "sự quyết tâm": determination. → his determination helped him...` },

  { id:"wf19", sentence:`The artist is well known for her ______ use of colour and light.`, word:`SKILL`, accepted:[`skilful`,`skillful`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "use" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "khéo léo, điêu luyện": skilful (hoặc skillful). → her skilful use of colour.` },

  { id:"wf20", sentence:`The team's ______ planning helped them finish the project ahead of schedule.`, word:`CARE`, accepted:[`careful`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "planning" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "cẩn thận, kỹ lưỡng": careful. → careful planning.` },

  { id:"wf21", sentence:`The number of electric cars on the road has grown ______ in recent years.`, word:`RAPID`, accepted:[`rapidly`],
    hint:`Chỗ trống bổ nghĩa cho động từ "grown" nên cần một trạng từ.`, signal:`Động từ + trạng từ.`,
    explain:`Cần trạng từ "nhanh chóng": rapidly. → grown rapidly.` },

  { id:"wf22", sentence:`The book offers a fascinating ______ of life in rural Vietnam fifty years ago.`, word:`DESCRIBE`, accepted:[`description`],
    hint:`Chỗ trống đứng sau "a fascinating" nên cần một danh từ.`, signal:`a/an + tính từ + danh từ.`,
    explain:`Cần danh từ "sự miêu tả": description. → a fascinating description of life.` },

  { id:"wf23", sentence:`The students were asked to write a short ______ of the documentary they had watched.`, word:`SUMMARISE`, accepted:[`summary`],
    hint:`Chỗ trống đứng sau "a short" nên cần một danh từ.`, signal:`a/an + tính từ + danh từ.`,
    explain:`Cần danh từ "bản tóm tắt": summary. → write a short summary.` },

  { id:"wf24", sentence:`The festival attracted visitors from many different ______ backgrounds.`, word:`CULTURE`, accepted:[`cultural`],
    hint:`Chỗ trống bổ nghĩa cho danh từ "backgrounds" nên cần một tính từ.`, signal:`Tính từ + danh từ.`,
    explain:`Cần tính từ "thuộc về văn hóa": cultural. → cultural backgrounds.` }
],

/* ============================== 7. TÌM VÀ SỬA LỖI SAI (Tự luận) ============================== */
errors: [
  { id:"er01", sentence:`The book that I am reading it is extremely interesting.`, wrong:`it`, correct:`(bỏ từ "it")`,
    hint:`Mệnh đề quan hệ đã thay cho danh từ rồi, không cần đại từ nào nữa.`, signal:`Mệnh đề quan hệ không cần đại từ lặp lại danh từ đã được thay thế.`,
    explain:`"That I am reading" đã là mệnh đề quan hệ thay cho "the book", nên không cần thêm đại từ "it" — phải bỏ từ này.` },

  { id:"er02", sentence:`She is one of the student who always submit homework on time.`, wrong:`student`, correct:`students`,
    hint:`Cấu trúc "one of the + ?" luôn cần danh từ ở một dạng đặc biệt.`, signal:`one of the + danh từ số nhiều.`,
    explain:`Cấu trúc "one of the + danh từ số nhiều" — phải sửa "student" thành "students".` },

  { id:"er03", sentence:`If I was you, I would accept the scholarship offer immediately.`, wrong:`was`, correct:`were`,
    hint:`Đây là câu điều kiện diễn tả một tình huống giả định không thật ở hiện tại.`, signal:`Câu điều kiện loại 2: If I were you, ...`,
    explain:`Trong câu điều kiện loại 2, động từ "to be" ở mệnh đề if luôn dùng "were" cho mọi chủ ngữ: "If I were you".` },

  { id:"er04", sentence:`Despite of the heavy traffic, we arrived at the airport on time.`, wrong:`Despite of`, correct:`Despite`,
    hint:`"Despite" không cần thêm giới từ "of" theo sau.`, signal:`Despite + N (không "of"); In spite of + N (có "of").`,
    explain:`"Despite" đã mang nghĩa "mặc dù", không cần "of" sau nó. Phải sửa thành "Despite" hoặc "In spite of".` },

  { id:"er05", sentence:`The number of students who failing the final exam has increased this year.`, wrong:`failing`, correct:`fail`,
    hint:`Mệnh đề quan hệ "who ______" cần một động từ được chia, không phải V-ing.`, signal:`Mệnh đề quan hệ cần động từ chia theo chủ ngữ và thời của câu.`,
    explain:`Mệnh đề quan hệ "who" cần động từ chia ở thì hiện tại đơn để khớp với "has increased": "who fail".` },

  { id:"er06", sentence:`My father has been working at this company since five years.`, wrong:`since`, correct:`for`,
    hint:`Phần sau chỗ gạch dưới là một khoảng thời gian, không phải một mốc thời gian.`, signal:`since + mốc thời gian; for + khoảng thời gian.`,
    explain:`"Five years" là một khoảng thời gian (duration), nên phải dùng "for", không dùng "since" (dùng cho mốc thời gian).` },

  { id:"er07", sentence:`She wanted to know what time does the train leave.`, wrong:`does the train leave`, correct:`the train leaves`,
    hint:`Đây là một câu hỏi được tường thuật lại, không giữ trật tự của câu hỏi trực tiếp.`, signal:`Câu hỏi trong câu tường thuật có trật tự từ như câu khẳng định (S + V), không dùng trợ động từ "does/did".`,
    explain:`Trong câu hỏi gián tiếp, ta không dùng trợ động từ "does" và giữ trật tự chủ ngữ - động từ bình thường: "the train leaves".` },

  { id:"er08", sentence:`This is the most beautifulest beach I have ever visited.`, wrong:`most beautifulest`, correct:`most beautiful`,
    hint:`Đây là lỗi so sánh kép — dùng hai cách so sánh cùng lúc cho một tính từ.`, signal:`Không dùng "most" và đuôi "-est" cùng một lúc.`,
    explain:`"Beautiful" là tính từ dài, chỉ cần thêm "most" phía trước (most beautiful), không thêm cả đuôi "-est".` },

  { id:"er09", sentence:`I look forward to hear from you soon.`, wrong:`hear`, correct:`hearing`,
    hint:`Cụm "look forward to" có quy tắc riêng về từ loại theo sau.`, signal:`look forward to + V-ing.`,
    explain:`Cụm "look forward to" luôn theo sau bởi V-ing: "look forward to hearing from you".` },

  { id:"er10", sentence:`There is too much people at the concert tonight.`, wrong:`much`, correct:`many`,
    hint:`"People" là danh từ đếm được, số nhiều.`, signal:`many + danh từ đếm được; much + danh từ không đếm được.`,
    explain:`"People" là danh từ đếm được (số nhiều), nên phải dùng "many", không dùng "much".` },

  { id:"er11", sentence:`He suggested me to study harder for the final exam.`, wrong:`me to study`, correct:`that I (should) study`,
    hint:`Động từ "suggest" không đi theo cấu trúc "suggest sb to V".`, signal:`suggest (that) + S + (should) + V; KHÔNG dùng suggest sb to V.`,
    explain:`"Suggest" không được dùng với cấu trúc "suggest sb to V" như "advise"; phải dùng "suggest that + S + (should) + V": "suggested that I (should) study".` },

  { id:"er12", sentence:`The bridge, that was built in 1980, is now closed for repairs.`, wrong:`that`, correct:`which`,
    hint:`Có dấu phẩy trước và sau cụm thông tin thêm về cây cầu.`, signal:`Mệnh đề quan hệ không xác định (có dấu phẩy) không dùng "that".`,
    explain:`Vì có dấu phẩy (mệnh đề quan hệ không xác định), ta phải dùng "which" thay vì "that".` },

  { id:"er13", sentence:`By the time we arrived at the cinema, the film already started.`, wrong:`started`, correct:`had started`,
    hint:`Bộ phim đã bắt đầu TRƯỚC KHI họ đến rạp — một hành động xảy ra trước một hành động khác trong quá khứ.`, signal:`By the time + quá khứ đơn, S + had + V3 (quá khứ hoàn thành).`,
    explain:`Vì hành động "bộ phim bắt đầu" xảy ra trước hành động "họ đến rạp" (đã ở quá khứ), nên phải dùng quá khứ hoàn thành: "had started".` },

  { id:"er14", sentence:`Each of the students have to bring their own laptop tomorrow.`, wrong:`have`, correct:`has`,
    hint:`"Each of + danh từ số nhiều" luôn đi với động từ chia theo ngôi thứ ba số ít.`, signal:`Each of + danh từ số nhiều + động từ số ít.`,
    explain:`Mặc dù theo sau là danh từ số nhiều ("students"), chủ ngữ thật của câu là "each" (số ít), nên động từ phải là "has".` },

  { id:"er15", sentence:`The information that you gave me yesterday were not accurate.`, wrong:`were`, correct:`was`,
    hint:`"Information" là một danh từ không đếm được, luôn ở dạng số ít.`, signal:`"Information" là danh từ không đếm được → động từ số ít.`,
    explain:`"Information" là danh từ không đếm được (luôn số ít), nên động từ phải là "was", không dùng "were".` },

  { id:"er16", sentence:`Neither of the answers are correct, I'm afraid.`, wrong:`are`, correct:`is`,
    hint:`"Neither of + danh từ số nhiều" luôn đi với động từ số ít.`, signal:`Neither of + danh từ số nhiều + động từ số ít.`,
    explain:`"Neither" mang nghĩa số ít ("không cái nào"), nên động từ theo sau phải chia số ít: "is".` }
],

/* ============================== 8. VIẾT LẠI CÂU (Tự luận) ============================== */
transform: [
  { id:"tr01", original:`Mr. Hung's car broke down, so he was late for the meeting.`, rewrite:`Because of ______, Mr. Hung was late for the meeting.`,
    accepted:[`his car breaking down`,`his car's breaking down`], maxWords:4,
    hint:`"Because of" cần theo sau là một cụm danh từ/danh động từ, không phải một mệnh đề.`, signal:`because of + V-ing (danh động từ) hoặc cụm danh từ.`,
    explain:`Chuyển mệnh đề "his car broke down" thành cụm danh động từ sau "because of": "his car breaking down".` },

  { id:"tr02", original:`Unless you study harder, you won't pass the exam.`, rewrite:`If you ______ harder, you won't pass the exam.`,
    accepted:[`don't study`], maxWords:4,
    hint:`"Unless" mang nghĩa phủ định, tương đương với "if... not".`, signal:`Unless = If... not.`,
    explain:`"Unless" có nghĩa tương đương "if...not", nên "Unless you study" = "If you don't study".` },

  { id:"tr03", original:`"I want to visit Da Lat next summer," said Lan.`, rewrite:`Lan said that ______ to visit Da Lat next summer.`,
    accepted:[`she wanted`], maxWords:4,
    hint:`Câu trực tiếp ở thì hiện tại đơn cần được lùi thì khi chuyển sang câu tường thuật.`, signal:`Câu tường thuật: lùi thì hiện tại đơn → quá khứ đơn; "I" → "she".`,
    explain:`"I want" ở câu trực tiếp lùi thì thành "she wanted" trong câu tường thuật (chủ ngữ "I" đổi thành "she" vì Lan là người nói).` },

  { id:"tr04", original:`It's a pity that I can't attend your wedding.`, rewrite:`I wish ______ attend your wedding.`,
    accepted:[`I could`], maxWords:4,
    hint:`Câu ước diễn tả điều không thể xảy ra ở hiện tại sử dụng một động từ khuyết thiếu ở quá khứ.`, signal:`wish + S + could + V (ước không thật ở hiện tại với khả năng).`,
    explain:`"I can't attend" ở câu gốc chuyển thành "I wish I could attend" để diễn tả điều không thể xảy ra ở hiện tại.` },

  { id:"tr05", original:`My brother is good at football. He plays for the school team.`, rewrite:`My brother, ______ for the school team, is good at football.`,
    accepted:[`who plays`], maxWords:4,
    hint:`Hai câu được nối lại bằng một mệnh đề quan hệ không xác định.`, signal:`Mệnh đề quan hệ không xác định: chủ ngữ chỉ người → who + V.`,
    explain:`Câu thứ hai "He plays for the school team" được rút gọn thành mệnh đề quan hệ không xác định: "who plays for the school team".` },

  { id:"tr06", original:`People believe that the bridge was built over 100 years ago.`, rewrite:`The bridge ______ built over 100 years ago.`,
    accepted:[`is believed to have been`], maxWords:4,
    hint:`Cấu trúc "People believe that + S + was + V3" có thể chuyển sang một dạng bị động đặc biệt với động từ tường thuật.`, signal:`S + be + believed + to have been + V3.`,
    explain:`Cấu trúc bị động với động từ tường thuật: "The bridge is believed to have been built..." (người ta tin rằng cây cầu đã được xây dựng).` },

  { id:"tr07", original:`She started learning the piano five years ago.`, rewrite:`She ______ the piano for five years.`,
    accepted:[`has been learning`,`has learnt`,`has learned`], maxWords:4,
    hint:`Hành động bắt đầu trong quá khứ và vẫn tiếp tục đến hiện nay.`, signal:`have/has + been + V-ing (hiện tại hoàn thành tiếp diễn) hoặc have/has + V3.`,
    explain:`Vì hành động học piano bắt đầu cách đây 5 năm và vẫn tiếp diễn, ta dùng hiện tại hoàn thành (tiếp diễn): "has been learning".` },

  { id:"tr08", original:`"Could you please turn off the lights before you leave?" the manager said to the staff.`, rewrite:`The manager asked the staff ______ off the lights before they left.`,
    accepted:[`to turn`], maxWords:4,
    hint:`Đây là một lời yêu cầu lịch sự được tường thuật lại.`, signal:`ask sb to V trong câu tường thuật lời yêu cầu.`,
    explain:`Lời yêu cầu "Could you...?" khi tường thuật chuyển thành "ask sb to V": "asked the staff to turn off".` },

  { id:"tr09", original:`The weather was so cold that we decided to stay indoors.`, rewrite:`It was ______ cold that we decided to stay indoors.`,
    accepted:[`so`], maxWords:4,
    hint:`Cấu trúc "so... that" diễn tả kết quả của một mức độ rất cao.`, signal:`so + tính từ + that + mệnh đề kết quả.`,
    explain:`Cấu trúc "so + adj + that" diễn tả kết quả: "It was so cold that..." — chỉ cần điền "so".` },

  { id:"tr10", original:`Despite the heavy rain, the football match continued.`, rewrite:`Although ______ heavily, the football match continued.`,
    accepted:[`it was raining`,`it rained`], maxWords:4,
    hint:`"Although" cần theo sau một mệnh đề đầy đủ (chủ ngữ + động từ), khác với "despite".`, signal:`Although + S + V (mệnh đề đầy đủ); despite + N/V-ing.`,
    explain:`"Despite the heavy rain" (cụm danh từ) chuyển thành mệnh đề đầy đủ sau "although": "it was raining heavily".` },

  { id:"tr11", original:`This is the first time I have eaten durian.`, rewrite:`I ______ durian before.`,
    accepted:[`have never eaten`], maxWords:4,
    hint:`Cấu trúc "This is the first time + hiện tại hoàn thành" có một cách diễn đạt khác mang nghĩa tương đương với "never".`, signal:`This is the first time S has V3 = S have never V3 ... before.`,
    explain:`"This is the first time I have eaten durian" mang nghĩa tương đương với "I have never eaten durian before".` },

  { id:"tr12", original:`They are building a new hospital in our district.`, rewrite:`A new hospital ______ in our district.`,
    accepted:[`is being built`], maxWords:4,
    hint:`Câu chủ động ở thì hiện tại tiếp diễn cần được chuyển sang thể bị động.`, signal:`Bị động hiện tại tiếp diễn: is/are + being + V3.`,
    explain:`Câu chủ động "They are building" ở thì hiện tại tiếp diễn chuyển sang bị động: "is being built".` },

  { id:"tr13", original:`He is too young to drive a motorbike.`, rewrite:`He isn't ______ to drive a motorbike.`,
    accepted:[`old enough`], maxWords:4,
    hint:`Cấu trúc "too...to" có thể chuyển sang cấu trúc phủ định với "enough".`, signal:`too + adj + to V = not + adj + enough + to V.`,
    explain:`"Too young to drive" mang nghĩa tương đương với "not old enough to drive": "isn't old enough".` },

  { id:"tr14", original:`We couldn't go on the trip because of the storm.`, rewrite:`If ______, we could have gone on the trip.`,
    accepted:[`there hadn't been a storm`,`it hadn't stormed`], maxWords:4,
    hint:`Đây là một tình huống giả định trái với thực tế đã xảy ra trong quá khứ.`, signal:`Câu điều kiện loại 3: If + S + had (not) + V3, S + could have + V3.`,
    explain:`Vì sự việc đã xảy ra trong quá khứ và không thể thay đổi, ta dùng câu điều kiện loại 3: "If there hadn't been a storm".` },

  { id:"tr15", original:`My sister said, "I will help you with your homework tonight."`, rewrite:`My sister promised ______ me with my homework that night.`,
    accepted:[`to help`], maxWords:4,
    hint:`Động từ "promise" thường đi với một dạng động từ quen thuộc.`, signal:`promise to V.`,
    explain:`Cấu trúc "promise to do something" — câu trực tiếp "I will help" chuyển thành "promised to help".` },

  { id:"tr16", original:`It is necessary for every student to wear a uniform.`, rewrite:`Every student ______ wear a uniform.`,
    accepted:[`has to`,`must`], maxWords:4,
    hint:`Câu gốc diễn tả một sự bắt buộc; có thể diễn đạt lại bằng một động từ khuyết thiếu chỉ sự bắt buộc.`, signal:`have to/must + V diễn tả sự bắt buộc.`,
    explain:`"It is necessary for sb to V" mang nghĩa tương đương với "S has to/must V": "Every student has to wear a uniform".` },

  { id:"tr17", original:`The teacher was so strict that no one dared to talk during the test.`, rewrite:`The teacher was ______ strict that no one dared to talk during the test.`,
    accepted:[`so`], maxWords:4,
    hint:`Cấu trúc "so... that" diễn tả kết quả của một mức độ rất cao.`, signal:`so + adj + that + mệnh đề kết quả.`,
    explain:`Giữ nguyên cấu trúc "so + adj + that" — chỉ cần điền "so".` },

  { id:"tr18", original:`People say that eating too much sugar is bad for health.`, rewrite:`Eating too much sugar ______ to be bad for health.`,
    accepted:[`is said`], maxWords:4,
    hint:`Cấu trúc "People say that + S + V" có thể chuyển sang một dạng bị động đặc biệt với động từ tường thuật.`, signal:`S + be + said + to V.`,
    explain:`Cấu trúc bị động với động từ tường thuật: "Eating too much sugar is said to be bad for health".` },

  { id:"tr19", original:`She hasn't visited her hometown for three years.`, rewrite:`The last time ______ her hometown was three years ago.`,
    accepted:[`she visited`], maxWords:4,
    hint:`Cấu trúc "The last time + S + V (quá khứ đơn)" diễn tả mốc thời gian gần nhất của một hành động.`, signal:`The last time + S + V (quá khứ đơn).`,
    explain:`Cấu trúc "the last time + S + V (quá khứ đơn)" diễn tả lần gần nhất hành động xảy ra: "the last time she visited".` },

  { id:"tr20", original:`I last saw my cousin two years ago.`, rewrite:`I haven't ______ my cousin for two years.`,
    accepted:[`seen`], maxWords:4,
    hint:`Cấu trúc "last + V (quá khứ đơn) ... ago" có thể chuyển sang thì hiện tại hoàn thành phủ định.`, signal:`S + last + V-ed ... ago = S + haven't/hasn't + V3 + for ....`,
    explain:`"I last saw...two years ago" mang nghĩa tương đương với "I haven't seen...for two years" — chỉ cần điền dạng V3: "seen".` }
]

};

if (typeof window !== "undefined") { window.DATA = DATA; }
