let http = require("http");
let url = require("url");

//模块化
let start = (route) => {
        let onRequest = (request, response) => {
            let pathname = url.parse(request.url).pathname;
            console.log("Request for " + pathname + " received.");
            route(pathname);

            console.log("Request received.");
            response.writeHead(200, {
                "Content-Type": "text/plain;charset=utf-8"
            });
            response.write("Hello World");
            response.end();
        }

        http.createServer(onRequest).listen(8888);
        console.log("Server has started.");
        console.log("请在浏览器中打开 http://127.0.0.1:8888");
    }
    //导出`server`对象,对象中包含一个start函数
    //对象格式为
    /**
     * {
     *      start
     * }
     */
    //这个对象导入到其他文件中即可使用,可以用任意的名字来接受这个对象
exports.start = start;