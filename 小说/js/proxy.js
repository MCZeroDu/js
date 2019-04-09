var http = require('http');
//引入http模块

var request = require("request");
//引入request模块
//创建主机名
var hostName = "127.0.0.1";
//端口号
var port = 8110;
//地址
var baseUrl = "http://api.zhuishushenqi.com";
//创建代理服务器
var apiServer = http.createServer(function(req,res){
	var url = baseUrl + req.url;
	// 创建对像 存储 url 
	var  options = {
		url : url
	};
	//请求获取数据
	/// 发送请求
	request.get(options,function(error,response,body){
		//如果不存在错误 并且 响应 状态码  == 200
		if(!error && response.statusCode == 200){
			//设置编码类型，否则中文会显示为乱码
			res.setHeader('Content-type','text/plain;charset=UTF-8');
			//设置所有域允许跨域
			res.setHeader('Access-Control-Allow-Origin','*');
			//返回代理后的内容
			res.end(body);
		}
	})
})
//监听 事件
apiServer.listen(port,hostName,function(error){
	if (!error) {
		console.log("接口代理运行在 http://"+hostName + ":" + port);
	}
});


