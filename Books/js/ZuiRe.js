var baseUrl = "http://127.0.0.1:8888";
    var aUl = document.getElementsByClassName("mui-table-view");
//  console.log(aUl.length)
 var sxd = localStorage.getItem("JI");
 
 //获取与盒子
var OBx = document.getElementById("item1");
var oul = document.getElementById("nimabi");

//var OBx2= document.getElementById("item2");
var oul2 = document.getElementById("nimabi2");

//var OBx3 = document.getElementById("item3");
var oul3 = document.getElementById("nimabi3");
// console.log(OBx);
//console.log(oul);
	ajax({
		url: baseUrl + "/ranking/"+sxd,
		method: "get",
		data: {},
		success: function(response) {
//			console.log(JSON.parse(response))
			var data1 = JSON.parse(response).ranking;
//			console.log(data1)
			var data2 = data1.books;
			for (var i=0;i<data2.length;i++) {
					var li = document.createElement("li");
					li.className = "mui-table-view-cell mui-media";
					oul.appendChild(li);
					
					//图片
					var div = document.createElement('div');
					div.id = "tu";
					li.appendChild(div);
			            
					var img = document.createElement('img');
					div.appendChild(img);
					img.src = data2[i].cover //图片
					//作者
					var div = document.createElement("div");
					li.appendChild(div);
					
					var p1 = document.createElement('p');
					p1.innerHTML = data2[i].author;
					div.appendChild(p1);
					
					var p2 = document.createElement("p");
					p2.className = "mui-ellipsis"
					p2.innerHTML = data2[i].shortIntro;
					div.appendChild(p2);
					
					var b = document.createElement('b');
					div.appendChild(b);
					b.innerHTML=data2[i]._id;
					
					var p3 = document.createElement("hp");
					p3.innerHTML = data2[i].latelyFollower;
					div.appendChild(p3);
			}
			for (var i=0;i<data2.length;i++) {
					var li = document.createElement("li");
					li.className = "mui-table-view-cell mui-media";
					oul2.appendChild(li);
					
					//图片
					var div = document.createElement('div');
					div.id = "tu";
					li.appendChild(div);
			            
					var img = document.createElement('img');
					div.appendChild(img);
					img.src = data2[i].cover //图片
					//作者
					var div = document.createElement("div");
					li.appendChild(div);
					
					var p1 = document.createElement('p');
					p1.innerHTML = data2[i].author;
					div.appendChild(p1);
					
					var p2 = document.createElement("p");
					p2.className = "mui-ellipsis"
					p2.innerHTML = data2[i].shortIntro;
					div.appendChild(p2);
					var b = document.createElement('b');
					div.appendChild(b);
					b.innerHTML=data2[i]._id;
					
					var p3 = document.createElement("hp");
					p3.innerHTML = data2[i].latelyFollower;
					div.appendChild(p3);
			}
			for (var i=0;i<data2.length;i++) {
					var li = document.createElement("li");
					li.className = "mui-table-view-cell mui-media";
					oul3.appendChild(li);
					
					//图片
					var div = document.createElement('div');
					div.id = "tu";
					li.appendChild(div);
			          
			            
					var img = document.createElement('img');
					div.appendChild(img);
					img.src = data2[i].cover //图片
					//作者
					var div = document.createElement("div");
					li.appendChild(div);
					
					var p1 = document.createElement('p');
					p1.innerHTML = data2[i].author;
					div.appendChild(p1);
					var b = document.createElement('b');
					div.appendChild(b);
					b.innerHTML=data2[i]._id;
					
					var p2 = document.createElement("p");
					p2.className = "mui-ellipsis"
					p2.innerHTML = data2[i].shortIntro;
					div.appendChild(p2);
					
					
					var p3 = document.createElement("hp");
					p3.innerHTML = data2[i].latelyFollower;
					div.appendChild(p3);
			}
			var kli = document.getElementsByTagName('li');
//			console.log(kli.length);
			for (var i=0;i < kli.length;i++) {
				kli[i].index = i;
				var lp = document.getElementsByTagName('b');
				kli[i].onclick = function() {
					alert(111);
					for (var i=0;i<lp.length;i++) {
						localStorage.setItem("BId", lp[this.index].innerHTML);
						console.log(lp[this.index].innerHTML);
						location.href = "XiangQing.html";
					}
//					alert(1111);
				}
			}		
		},
		async: true
	});