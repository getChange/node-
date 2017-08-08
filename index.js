//从`server`模块中导入server对象
let server = require('./server');
let router = require("./router");
//启动服务器
server.start(router.route);