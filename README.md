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
 
  7. Thay đổi trạng thái 1 sản phẩm(PATCH)
        
        http://localhost:3000/api/v1/tasks/change-status/67dbfbc673c7c4e3196c64ea  

  8. Thay đổi trạng thái nhiều sản phẩm(PATCH)

         http://localhost:3000/api/v1/tasks/change-multi

         ```c
         {
              "ids":[
                     "67dbfbc673c7c4e3196c64ea",
                     "67dbfbc673c7c4e3196c64eb"
              ],
              "key":"status",
              "value":"notFinish"
        }
        ```
  9. Thêm mới một task(POST)
       
        http://localhost:3000/api/v1/tasks/create

        ```c
        {
       "title": "Công việc 6",
       "status": "notFinish",
       "content": "Nội dung công việc 6 là gì...",
       "timeStart": "2023-09-18T14:43:01.579Z",
       "timeFinish": "2023-09-24T14:43:01.579Z"
       }
        ```
 
  10. Chỉnh sửa chi tiết 1 task(PATCH)
       
        http://localhost:3000/api/v1/tasks/edit/67dbfbc673c7c4e3196c64ea 

       ```c
       {
       "title":"Khánh đz",
       "status":"finish"
       }
       ```

  11. Xóa một task(DELETE)

         http://localhost:3000/api/v1/tasks/delete/67dbfbc673c7c4e3196c64ea
