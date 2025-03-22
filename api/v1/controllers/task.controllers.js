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