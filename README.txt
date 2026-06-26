OVERLORD ENGLISH — Trạm luyện thi tiếng Anh vào 10
Thực hiện bởi Huỳnh Hải Đăng — 9A6

CÁCH DÙNG
1. Giữ 5 file này trong CÙNG một thư mục:
   index.html, style.css, app.js, data.js, generators.js
2. Mở index.html bằng trình duyệt (Chrome/Edge/Cốc Cốc...) — dùng được trên điện thoại và máy tính.
3. Muốn đưa lên mạng cho cả lớp dùng: upload cả thư mục lên GitHub Pages, Netlify,
   hoặc bất kỳ web hosting tĩnh nào (chỉ là HTML/CSS/JS thuần, không cần server riêng).

2 CHẾ ĐỘ
🎯 LÀM ĐỀ THI (mặc định khi mở web)
  - Mỗi lần mở web hoặc bấm "🎲 Làm đề mới" sẽ tạo MỘT ĐỀ NGẪU NHIÊN MỚI, 34 câu,
    đúng cấu trúc đề thi thật: Phần 1 Ngữ pháp-Từ vựng (8c), Phần 2 Điền từ đoạn văn (4c),
    Phần 3 Sắp xếp câu (4c), Phần 4 Đọc hiểu (4c), Phần 5 Đúng/Sai (4c),
    Phần 6 Đúng dạng từ (4c), Phần 7 Sửa lỗi (2c), Phần 8 Viết lại câu (4c).
  - KHÔNG chấm điểm ngay lúc làm (giống thi thật) — làm xong bấm "✅ Nộp bài"
    mới ra điểm /10 và xem được lời giải chi tiết từng câu.
  - "🎲 Làm đề mới" phải bấm 2 LẦN để xác nhận (tránh bấm nhầm mất bài đang làm).
  - Nhờ có "bộ sinh câu" (generators.js), các câu Ngữ pháp/Đúng dạng từ/Sửa lỗi/Viết lại câu
    được TẠO RA TỪ KHUÔN CÂU + NGÂN HÀNG TỪ VỰNG ngay lúc đó, nên có hàng nghìn cách
    kết hợp khác nhau — gần như không đề nào giống đề nào.

📚 LUYỆN THEO DẠNG BÀI (chế độ cũ, vẫn giữ nguyên)
  - Tự do chọn từng dạng câu để luyện, chấm điểm NGAY khi chọn đáp án,
    có nút Gợi ý 💡 / Dấu hiệu nhận biết 🔎 / Lời giải chi tiết 📕 / Bỏ qua 😭 cho từng câu.
  - 234 câu có sẵn (đã viết tay, không lặp lại với đề thi ngẫu nhiên).

NỘI DUNG (kho câu hỏi có sẵn dùng cho cả 2 chế độ)
- 30 câu Ngữ pháp-Từ vựng, 10 đoạn Điền từ (40 câu), 20 câu Sắp xếp câu,
  10 đoạn Đọc hiểu (40 câu), 11 đoạn Đúng/Sai (44 câu),
  24 câu Đúng dạng từ, 16 câu Sửa lỗi, 20 câu Viết lại câu = 234 câu viết tay.
- Cộng thêm: 68 "khuôn câu" sinh ngẫu nhiên (generators.js) áp dụng cho Ngữ pháp,
  Đúng dạng từ, Sửa lỗi, Viết lại câu — mỗi khuôn câu có thể tạo ra hàng trăm/hàng nghìn
  câu khác nhau (chỉ dùng cho chế độ Làm đề thi).

MUỐN THÊM CÂU HỎI VIẾT TAY MỚI (cho chế độ Luyện theo dạng bài)?
Mở file data.js bằng trình soạn thảo (Notepad, VS Code...). Đầu file có hướng dẫn.
Copy 1 object mẫu trong đúng nhóm, dán xuống cuối mảng, sửa nội dung.

MUỐN THÊM "KHUÔN CÂU" SINH NGẪU NHIÊN MỚI (cho chế độ Làm đề thi)?
Mở file generators.js. Copy 1 object trong đúng nhóm (GRAMMAR_TEMPLATES/
WORDFORM_TEMPLATES/ERROR_TEMPLATES/TRANSFORM_TEMPLATES), đổi "slots" (ngân hàng
từ thay được) và hàm "build" (cách ráp câu + đáp án).

MUỐN ĐỔI MÀU / GIAO DIỆN?
Mở style.css, sửa các giá trị trong khối ":root" ở đầu file (ví dụ --accent, --bg-deep...).
