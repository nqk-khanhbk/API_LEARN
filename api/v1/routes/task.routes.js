const express = require("express");
const router = express.Router();

const controller = require('../controllers/task.controllers');

//[GET]/api/v1/tasks
router.get("/", controller.index);

//[GET]/api/v1/detail/:id
router.get("/detail/:id", controller.detail);

module.exports = router;