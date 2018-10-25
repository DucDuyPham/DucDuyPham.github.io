document.addEventListener("DOMContentLoaded", function(){
	var nut = document.getElementsByClassName('so');
	 var result = document.getElementById("result");
	 var del = document.getElementById('xoa');
	 var ac = document.getElementById('ac');
	 var ketqua = document.getElementById('ketqua');
	 var phantram = document.getElementById('phantram');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){

			 if(result.value=="0"){
	 	result.value="";
	 }
			result.value += this.value;

		}
	}
	del.onclick=function(){
		result.value = result.value.substr(0,result.value.length-1);
	}
	ac.onclick = function(){
		result.value="0";
	}
	ketqua.onclick = function(){
		result.value= eval(result.value)	;
	}
	phantram.onclick = function(){
		result.value = result.value/100; 
	}
}, false )