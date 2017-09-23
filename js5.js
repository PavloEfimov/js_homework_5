// задание 1

document.getElementById('res1').onclick = work1

function work1() {
	var text1 = document.getElementById('task1').value;
	out1.innerHTML = 'длина строки составляет '+text1.length+' символов.';
}

// задание 2

document.getElementById('res2').onclick = work2

function work2() {

	var images = [  'one',
					'two',
					'three',
					'four',
					'five'];
	for (var i = 0; i < images.length; i++) {
		var img = "<img src='img/"+images[i]+".png'>"
		out2.innerHTML += img;
	}

}

// задание 3

document.getElementById('res3').onclick = work3

function work3() {

var text3 = document.getElementById('task3').value;


if (text3.substr(0,7) =='http://'){
	out3.innerHTML = 'имя домена: '+text3.substr(7);	
}

else if (text3.substr(0,8) =='https://') {
	out3.innerHTML = 'имя домена: '+text3.substr(8);	
}

else out3.innerHTML = 'корректно введите имя домена'

}

// задание 4

document.getElementById('res4').onclick = work4

function work4() {

var text4 = document.getElementById('task4').value;

if (text4.substr(0,12) =='https://www.') {
	out4.innerHTML = 'имя домена: '+text4.substr(12);	
}

else if (text4.substr(0,11) =='http://www.') {
	out4.innerHTML = 'имя домена: '+text4.substr(11);
}

else if (text4.substr(0,8) =='https://') {
	out4.innerHTML = 'имя домена: '+text4.substr(8);	
}

else if (text4.substr(0,7) =='http://'){
	out4.innerHTML = 'имя домена: '+text4.substr(7);	
}
// следующее условие можно испраовить, если проверяется любой сайт, на
// else out4.innerHTML = text4.substr(0)

	else if (text4.substr(0) =='site.ua') {
	out4.innerHTML = 'имя домена: '+text4.substr(0);	
}
// -------------------------------------------------------------
else out4.innerHTML = 'корректно введите имя домена'

}

// задание 5

document.getElementById('res5').onclick = work5

function work5() {

var surname = document.getElementById('task5_1').value;
var surname1='';
var name = document.getElementById('task5_2').value;
var name1='';
var pass = document.getElementById('task5_3').value;
var mail = document.getElementById('task5_4').value;



for (var i = 0; i < surname.length; i++) {
	if (surname[i]==' ') continue;
	surname1+=surname[i];
}

for (var i = 0; i < name.length; i++) {
	if (name[i]==' ') continue;
	name1+=name[i];
}

if ( mail.indexOf("@")==-1||mail.indexOf(" ")!=-1 ) {
	out5.innerHTML = 'email должен содержать один символ @ и не содержать пробелов';
	return false}
// --------------обработка условия по вводу только одного символа @-----------------
	var j =0;
for (var i = 0; i < mail.length; i++) {
	if (mail[i]!='@') continue;
	j +=1;}

	if (j>1) {out5.innerHTML = 'email должен содержать ТОЛЬКО один символ @';
		return false}

// ---------------------------------------------------------------------------------

if (pass.length<5) out5.innerHTML = 'длина пароля меньше 5 символов!!!'



else {
	task5_1.value = ''+surname1;
	task5_2.value = ''+name1;
	out5.innerHTML = 'Фамилия: '+surname1+'<br>'+'Имя: '+name1+'<br>'+'форма заполнена корректно';
	return true}

}

// задание 5

document.getElementById('task6').onkeydown = function(event) {

// console.log(event);
out6.innerHTML = 'код символа: '+ event.keyCode;

}