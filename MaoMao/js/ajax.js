//封装XMLHttpRequest
function createXHR() {
    if(typeof XMLHttpRequest !== "undefined" ){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject !== "undefined"){
        var version = [
            'MSXML2.XMLHttp.6.0',
            'MSXML2.XMLHttp.3.0',
            'MSXML2.XMLHttp'
        ];
        for(var i=0;i<version.length;i++){
            try {
                return new ActiveXObject(version[i]);
            }catch (e) {

            }
        }
    }else{
        throw new Error('您的浏览器不支持XHR对象！');
    }
}

function ajax(obj){
    //获取XMLHttpRequest对象
    var xhr = new XMLHttpRequest();
    //作用:解决浏览器缓存机制问题
    obj.url += "?rand=" +Math.random();
    //将传递进来的数据格式转化为字符串
    obj.data = params(obj.data);

    //如何提交方式是get,那么将要发送的数据拼接到url后面
    if (obj.method == "get") obj.url = obj.url.indexOf("?") == -1 ? obj.url + "?" + obj.data : obj.url + "&" + obj.data;

    //异步方式接收数据
    if(obj.async == true){
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4) callBack();
        }
    }
    //同步方式接收数据
    if(obj.async == false){
        callBack();
    }
    //准备发送请求
    xhr.open(obj.method,obj.url,obj.async);
    //如果提交方式post,模拟进行提交,通过send发送数据,如果不是post方式提交,发送数据的send的参数为null
    if(obj.method == "post") {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(obj.data)
    }else{
        xhr.send(null);
    }


    function callBack() {
        if(xhr.status == 200){
            obj.success(xhr.responseText);
        }else{
            alert('数据返回失败！状态代码：' + xhr.status + '状态信息：' + xhr.statusText);
        }
    }

}

//将对象转化为字符串
function params(data) {
    var arr = [];
    for(var i in data){
        arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(data[i]));
    }
    return arr.join("&");
}
