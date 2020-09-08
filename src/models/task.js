//Schema used for storing data

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    //Name of the task
    taskname: {
      type: String,
      required: true,
      trim: true,
    },
    //Description of task
    task_description: {
      type: String,
      required: true,
      trim: true,
    },
    //Who is the creater of the task
    creator: {
      type: String,
      required: true,
      trim: true,
    },
    // For what time period you want to save the task in minutes
    duration: {
      type: Number,
      default: null,
    },
    //this is the field created in backend which will do the work of removing
    //document at the specified time
    expireAt: {
      type: Date,
      default: null,
    }
  },
  {
    timestamps: true,
  }
);

//this is the property that i ued on the index in which i have used TTL
userSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

//Just a method to control what I get as output
userSchema.methods.toJSON = function () {
  const task = this;
  const taskObject = task.toObject();

  delete taskObject.updatedAt;
  delete taskObject.expireAt;
  delete taskObject.__v;
  delete taskObject._id;
  return taskObject;
};
const Task = mongoose.model("Task", userSchema);
module.exports = Task;
