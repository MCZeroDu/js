var header = document.getElementById('my_header');
var nav    = header.getElementsByClassName('nav')[0];
var shen   = document.getElementsByClassName('Shenti')[0];
var ku	   = shen.getElementsByClassName('kuang')[0];
var wozi  = ku.getElementsByClassName('wozi')[0];
//	console.log(oZi.length);
var index = false;
function fun(a,b){
        if (window.getComputedStyle) {
            return window.getComputedStyle(a,null)[b];
        } else{
            return window.getComputedStyle[b];
        }
    }
function stopPro(evt){
        var e = evt || window.event;
        window.event ? e.cancelBubble = true : e.stopPropagation();
    }
nav.onclick = function(event){
	if(fun(ku,"display") == "none"){
		ku.style.display = "block";
		this.style.background = "url(img/ico.gif)no-repeat 110px 24px";
	}else{
		this.style.background = "url(img/ico.gif)no-repeat 110px -6px";
		ku.style.display = "none";
		index = true;
	}
	stopPro(event);
}
var thime;
thime = setInterval(function(){
	 ku.style.display = "none";
} ,5000)
var inner = shen.getElementsByClassName('inner')[0];
var b = shen.getElementsByClassName('myp')[0];
var c = b.getElementsByClassName('wodetu')[0];
var fg = shen.getElementsByClassName('wodeww')[0];
var quxiao = ku.getElementsByClassName('tuichu')[0];

wozi.onclick = function(){
    inner.style.display = "block";
    fg.style.display = "block";
    document.body.style.overflow = "hidden";
}
c.onclick = function(){
    fg.style.display = "none";
    inner.style.display = "none";
    ku.style.display = "none";
    my_div.style.display = "none";
}

var inp = inner.getElementsByTagName('input')[0];//标题
var atext = inner.getElementsByTagName('textarea')[0];//内容
var btn = inner.getElementsByTagName('button')[0];//按钮

var mypp = inner.getElementsByClassName('anniu')[0];
mypp.onclick = function(){
    
    if(inp.value != '' && atext.value != ''){
        var div = document.createElement("div");
        div.className = "nima";
        shen.appendChild(div);
        
        var wer = document.createElement("div");
        wer.className = "niba";
        div.appendChild(wer);
        
        var span = document.createElement('span');
        span.className = "Woinner";
        wer.appendChild(span);
        
        var apan = document.createElement('span');
        apan.className = "Sz";
        wer.appendChild(apan);
        
        var bpan = document.createElement('div');
        bpan.className = "NR";
        div.appendChild(bpan);
        
        var time = new Date();
        //获取年份
        var nian = time.getFullYear();
        //获取月份
        var yue  = time.getMonth();
        //获取日期
        var ri 	 = time.getDate();
        //获取时
        var shi  = time.getHours();
        //获取分钟
        var fen  = time.getMinutes();
        //获取秒钟
        var miao = time.getSeconds();
        
        apan.innerHTML = zero(nian) + ":" + zero((yue+1))+":"+
        zero(ri)+"&nbsp"+"&nbsp"+zero(shi)+":"+zero(fen)+":"+zero(miao);
        fg.style.display = "none";
        inner.style.display = "none";
        div.style.display = "block";
        ku.style.display = "none";
        span.innerHTML += inp.value;
        inp.value = "";
        bpan.innerHTML += atext.value;
        atext.value = "";
    }else{
        alert('标题或内容不能为空');
    }
}
inp.onclick = function(){
    ku.style.display = "none";
    my_div.style.display = "none";
}
//	var he = shen.getElementsByClassName('nima')[0];
//	console.log(he)
quxiao.onclick = function(){
    fg.style.display = "none";
    inner.style.display = "none";
    ku.style.display = "none";
    div.style.display = "none";
    my_div.style.display = "none";
}

 //补零函数
function zero(n) {
    if(n < 10){
        return "0" + n;
    }else{
        return "" + n;
    }
}
