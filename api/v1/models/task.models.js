const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    createBy: String,
    // listUsers: Array,
    //supervisor : Array
    // taskParentId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema, "tasks");

module.exports = Task;