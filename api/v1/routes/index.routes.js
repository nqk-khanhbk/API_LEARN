const taskRoutes = require('./task.routes')

module.exports = (app)=>{
   const version = "/api/v1";
   app.use(version+"/tasks",taskRoutes);
}