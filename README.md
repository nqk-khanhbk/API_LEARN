# API_Lean 
## 1.Tạo API 
  1. Lấy danh sách công việc(GET)
     
         http://localhost:3000/api/v1/tasks

   2. Lấy chi tiết công việc(GET)

         http://localhost:3000/api/v1/tasks/detail/:id
    
   3. Lọc theo trạng thái (GET)
       
         http://localhost:3000/api/v1/tasks?status=initial

    4. Tìm kiếm theo tiêu đề (GET)

         http://localhost:3000/api/v1/tasks?keyword=Công việc 2

    5. Phân trang sản phẩm (GET) giới hạn mỗi trang là 3,tùy chỉnh theo ý muốn
       
         http://localhost:3000/api/v1/tasks?page=1&limit=3

    6. Sắp xếp theo tiêu chí (VD sắp xếp theo trạng thái)

        http://localhost:3000/api/v1/tasks?sortKey=status&sortValue=asc