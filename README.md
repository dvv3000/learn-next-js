# Note
## Sử dụng CSS trong Nextjs
1. Global style
    - Nên dùng `@layer` để đảm bảo tính dễ đọc cũng như độ ưu tiên css khi build: layer utilities > components > base
2. Tạo 1 class CSS phức tạp mà tailwind không hỗ trợ hoặc overwrite lại 1 class của thư viện nào đó
    - Dùng CSS Module để đảm bảo k bị xung đột với class CSS khác
3. Khi cần toggle class hoặc CSS động:
    - Dùng clsx
4. Có thể tìm hiểu thêm: styled component, emotion, styled-jsx

## Sử dụng font trong Nextjs
1. Khi muốn sử dụng font khác ngoài font của Google
    - Tải font về  và để vào trong thư mục src
    - Docs: https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts

## Middleware
1. Do Nextjs quản lý cả các trang ở client và ở server. Đối với các trang không cần authen thì không sao nhưng với các trang cần authen thì làm sao để Nextjs quản lý được chúng = Sử dụng Middleware
