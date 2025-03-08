PUSH FOLDER TO GITHUB
Khởi tạo kho lưu trữ Git trong thư mục cần đẩy lên GitHub:

Mở terminal hoặc command prompt và chuyển đến thư mục cần đẩy lên GitHub.
Chạy lệnh git init để khởi tạo một kho lưu trữ Git mới trong thư mục.
Thêm các tệp vào kho lưu trữ:

Sử dụng lệnh git add . để thêm tất cả các tệp trong thư mục vào kho lưu trữ.
Hoặc bạn có thể thêm từng tệp cụ thể bằng lệnh git add <tên_tệp>.
Tạo commit đầu tiên:

Chạy lệnh git commit -m "Initial commit" để tạo commit đầu tiên với thông điệp "Initial commit".
Liên kết kho lưu trữ cục bộ với GitHub:

Tạo một kho lưu trữ mới trên GitHub.
Sao chép URL của kho lưu trữ GitHub.
Chạy lệnh git remote add origin <url_kho_lưu_trữ_github> để liên kết kho lưu trữ cục bộ với kho lưu trữ GitHub.
Đẩy lên GitHub:

Chạy lệnh git push -u origin main để đẩy nội dung kho lưu trữ cục bộ lên GitHub.
-u (hoặc --set-upstream) là tùy chọn để thiết lập upstream branch, giúp các lần push sau đó có thể sử dụng git push mà không cần chỉ định branch.
origin là tên của remote repository (GitHub).
main là tên của nhánh chính (main branch).