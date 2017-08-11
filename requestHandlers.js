let exec = require("child_process").exec;
let querystring = require("querystring");

function start(response) {
    console.log("Request handler 'start' was called.");
    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8 />"' +
        '</head>' +
        '<body>' +
        '<from action="/uplod" method="post">' +
        '<textarea name="text" rows="10" clos="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    response.write(body);
    response.end();

}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    response.write("You've sent the text:" + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;