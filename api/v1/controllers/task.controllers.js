const Tasks = require('../models/task.models');
const searchHelper = require('../../../helper/search.helper');
const paginationHelper = require('../../../helper/pagination.helper');
//[GET]/api/v1/tasks
module.exports.index = async(req,res)=>{
    const find = {
        deleted:false,
    }
    //Bộ lọc
    if (req.query.status) {
        find.status = req.query.status;
    }
    //Hết bộ lọc
    //Search
    const objectSearch = searchHelper(req.query);
    if (objectSearch.regex) {
        find.title = objectSearch.regex;
    }
    // End Search

    // Pagination
    const countTasks = await Tasks.countDocuments(find);

    let objectPagination = paginationHelper(
        {
            currentPage: 1,
            limitItems: 3,
        },
        req.query,
        countTasks
    );

    //End Pagination

    // Sort
    const sort = {};
    if (req.query.sortKey && req.query.sortValue) {
        sort[req.query.sortKey] = req.query.sortValue;
    }
    // End Sort

   console.log(req.query)
    const tasks = await Tasks.find(find).sort(sort).limit(objectPagination.limitItems).skip(objectPagination.skip);
    res.json(tasks);
}

//[GET]/api/v1/detail/:id
module.exports.detail = async(req,res)=>{
    try {
        const id = req.params.id;
        const tasks = await Tasks.findOne({
          _id: id,
          deleted: false,
        });
        res.json(tasks);
    } 
    catch (error) {
    res.json({
        code: 400,
        message: "Cập nhật trạng thái không thành công",
    });
    }
}
//[PATCH]/api/v1/change-status/:id
module.exports.changeStatus= async(req,res)=>{
    try {
        const listStatus = ["initial", "doing", "notFinish", "finish"];
        const id = req.params.id;
        const status = req.body.status;
        if (listStatus.includes(status)) {
          await Tasks.updateOne({_id:id},{status:status});
          res.json({
            code: 200,
            message: "Cập nhật trạng thái thành công",
          });
        } else {
          res.json({
            code: 400,
            message: "Cập nhật trạng thái không thành công",
            error: "status not format",
          });
        }
      } 
    catch (error) {
        res.json({
          code: 400,
          message: "Cập nhật trạng thái không thành công",
        });
    }

}

//[PATH]/api/v1/change-multi
module.exports.changeMulti = async (req, res) => {
    try {
      const { ids, key, value } = req.body;
    //   console.log(ids)
    //   console.log(key)
    //   console.log(value)
      switch (key) {
        case "status":
          await Tasks.updateMany({ _id: { $in: ids } }, { status: value });
          res.json({
            code: 200,
            message: "Cập nhật trạng thái thành công",
          });
          break;
        case "deleted":
          await Tasks.updateMany({ _id: { $in: ids } }, { deleted: true, deleteAt: new Date() });
          res.json({
            code: 200,
            message: "Xoá thành công",
          });
          break;
  
        default:
          res.json({
            code: 400,
            message: "Cập nhật trạng thái không thành công",
          });
          break;
      }
    } catch (error) {
      res.json({
        code: 400,
        message: "Cập nhật trạng thái không thành công",
      });
    }
  };
//[POST]/api/v1/tasks/create
module.exports.create = async(req,res)=>{
    try {
        // console.log(req.body)
        const task = new Tasks(req.body);
        const data = await task.save();
        res.json({
          code: 200,
          message: "Tạo thành công",
          data: data,
        });
      } catch (error) {
        res.json({
          code: 400,
          message: "Tạo không thành công",
        });
      }
}
//[PATCH]/appi/v1/tasks/edit/:id
module.exports.edit = async (req, res) => {
    try {
      const id = req.params.id;
    //   console.log(id);
      await Tasks.updateOne({ _id: id }, req.body);
      res.json({
        code: 200,
        message: "Cập nhật thành công",
      });
    } catch (error) {
      res.json({
        code: 400,
        message: "Cập nhật không thành công",
      });
    }
  };
//[DELETE]/appi/v1/tasks/delete/:id
module.exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id)
        await Tasks.updateOne(
          { _id: id },
          {
            deleted: true,
            deleteAt: new Date(),
          }
        );
        res.json({
          code: 200,
          message: "Xoá thành công",
        });
      } catch (error) {
        res.json({
          code: 400,
          message: "Xoá không thành công",
        });
      }
  };