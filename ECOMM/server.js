let serverConfig = require("./config/server.Config");
const expressApp=require('./app');
expressApp.listen(serverConfig.PORT, () => {
  console.log("Server Is Running On Port " + serverConfig.PORT);
});
