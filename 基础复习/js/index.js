window.onload = function(){
	
	var OBox = document.getElementById('box');
	OBox.onclick = function(){
		if (index == true) {
			this.style.background ="red";
			index = false;
		}
	}
}