const express = require("express");
const router = express.Router();

const controller = require('../controllers/task.controllers');

//[GET]/api/v1/tasks
router.get("/", controller.index);

//[GET]/api/v1/detail/:id
router.get("/detail/:id", controller.detail);

//[PATCH]/api/v1/change-status/:id
router.patch('/change-status/:id',controller.changeStatus)

//[PATCH]/api/v1/change-multi
router.patch('/change-multi',controller.changeMulti)

//[POST]/api/v1/tasks/create
router.post('/create',controller.create);

//[PATCH]/api/v1/tasks/edit/:id
router.patch('/edit/:id',controller.edit);
//[DELETE]/api/v1/tasks/delete/:id
router.delete('/delete/:id', controller.delete);

module.exports = router;