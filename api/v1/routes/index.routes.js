const taskRoutes = require('./task.routes')
const userRoutes = require('./user.routes')
module.exports = (app)=>{
   const version = "/api/v1";
   app.use(version+"/tasks",taskRoutes);
   app.use(version+"/users",userRoutes);
}