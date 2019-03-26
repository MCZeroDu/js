var my_div = document.getElementById('HFu');
//console.log(Dr.length);
// 获取
     function getWidth(){
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        return w;
    }
    function getHeight(){
        var h= document.documentElement.clientHeight || document.body.clientHeight;
        return h;
    }
    	//鼠标按下
    	//鼠标按下
    my_div.onmousedown = function (event) {
        var e = event || window.event;
        //点击的坐标距离盒子本身的距离
        var disX = e.clientX - my_div.offsetLeft;
        var disY = e.clientY - my_div.offsetTop;
        document.onmousemove = function (event) {
            var e = event || window.event;
            var l = e.clientX - disX;
            var t = e.clientY - disY;
            if(t <= 0){
                t = 0;
            }
            if(l <= 0){
                l = 0;
            }
            if(l > getWidth() - my_div.offsetWidth){
                l = getWidth() - my_div.offsetWidth;
            }
            if(t > getHeight() - my_div.offsetHeight){
                t = getHeight() - my_div.offsetHeight;
            }
            my_div.style.left = l + "px";
            my_div.style.top = t + "px";
             my_div.style.margin = 0;
        }
        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
