var question0 = {
	question: "Thủ đô của nước nào có mặt trời mọc sớm nhất?",
	ans1: "Nhật Bản",
	ans2: "Hàn Quốc",
	ans3: "Hà Lan",
	ans4: "Việt Nam",
	correct: "ans4"
};

var question1 = {
	question: "Việt Nam mặt trời mọc lúc mấy giờ?",
	ans1: "5h",
	ans2: "5h30 ",
	ans3: "6h ",
	ans4: "6h30",
	correct: "ans1"
};

var question2 = {
	question: "Việt Nam đẹp nhất mùa nào trong năm?",
	ans1: "Mùa Xuân",
	ans2: "Mùa Hè",
	ans3: "Mùa Thu",
	ans4: "Mùa Đông",
	correct: "ans3"
};

var question3= {
	question: "Ở đâu bán cốm ngon nhất Việt Nam?",
	ans1: "Mễ Trì",
	ans2: "Hàng Than",
	ans3: "Nguyên Ninh",
	ans4: "Cốm Mộc",
	correct: "ans4"
};

var question4 = {
	question: "Mùa hoa sữa ở đâu đẹp nhất Việt Nam?",
	ans1: "Hà Nội",
	ans2: "TP.Hồ Chí Minh",
	ans3: "Thừa Thiên Huế",
	ans4: "Vinh",
	correct: "ans1"
};

var arrQues = [question0,question1,question2,question3,question4];


var flag;
var score = 0;
var count = 1;
var preScore = 0;
var numberClick = 0;
var max = 4;
var answer = document.querySelectorAll(".answer div");

function start() {
	window.location.href = "index.html";
}

function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.background = "#BADDBC";
	}
}

function changeColor(button) {
		resetColor();
		button.style.background = "#f1ff92";
		flag = button.id;
}

function mark(dapAn) {
	if (dapAn == arrQues[count - 1].correct) {
		score += 1 ;
	}
	return score;
}

function nextQuestion() {
	preScore = mark(flag);
	resetColor();
	numberClick++;
	if (numberClick <= max) {
		document.getElementById("ques").innerHTML = arrQues[count].question;
		document.getElementById("ans1").innerHTML = arrQues[count].ans1;
		document.getElementById("ans2").innerHTML = arrQues[count].ans2;
		document.getElementById("ans3").innerHTML = arrQues[count].ans3;
		document.getElementById("ans4").innerHTML = arrQues[count].ans4;
		if(count == max)
			document.getElementById("button-next").innerHTML = "Result";
		count++;
	} else {
		if (score == arrQues.length) {
			window.location.href = "win.html";
		} else {
			alert('Bạn trả lời đúng: '+score +'/5 câu hỏi.');
			window.location.href = "agian.html";
		}
	}
}
var Theme = 1;
function changeTheme(){
	if (Theme == 1){
		$('.index').css('background', 'url(21.jpg)');
   		$('.index').css('background', 'url(21.jpg)');
		   $('body').css('background','url(0.jpg)');
		   $('body').css('background-size','cover');
		Theme -= 1;
	}
		
	else if (Theme == 0){
		$('.index').css('background', 'url(21.jpg)');
   		$('.index').css('background', 'url(21.jpg)');
		   $('body').css('background','url(0.jpg)');
		   $('body').css('background-size','cover');
   		Theme += 1;
   	}
   }