let exec = require("child_process").exec;

function start(response) {
    console.log("Request handler 'start' was called.");
    /**
     * exec()做了什么呢？
     * 它从Node.js来执行一个shell命令。
     * 在本例子中，我们用它来获取当前目录下所有的文件（“ls -lah”）
     * 然后，当`/start` URL请求的时候将文件信息输出到浏览器中。
     * 下面的代码非常直观的： 
     * 创建了一个新的变量content（初始值为“empty”）。
     * 执行“ls -lah”命令，将结果赋值给content，最后将content返回。
     */
    exec("ls -lah", function(error, stdout, stderr) {
        response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;