var http = require("http");
var querystring = require("querystring");
var fs = require("fs");
http.createServer(function(request,response){
    //设置跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应的字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    var info = null;
    var strData = "";
    var tData = "qweasdzxc";
    request.on("data",function (data) {
        strData += data;
    });
    request.on("end",function () {
        strData = querystring.parse(strData);
        fs.readFile("register.json","utf8",function(error,data){
           var userData = JSON.parse(data);
           if(strData.username == userData.uname&&strData.password == userData.pword){
                info = {"code":0,"message":"success","token":"qweasdzxc"};
                response.write(JSON.stringify(info,null,4));
           }else{
            info = {"code":0,"message":"error","token":tData};
            response.write(JSON.stringify(info,null,4));
           }
           response.end();
        })
    })
}).listen(8021);
