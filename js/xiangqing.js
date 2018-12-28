function dianji(){
  	var huazhuangping21=document.getElementById('huazhuangping21');
  	var huazhuangping22=document.getElementById('huazhuangping22');
  	var duigou1=document.getElementById('duigou1');
  	var duigou2=document.getElementById('duigou2');
  	var xuanze1=document.getElementById('xuanze1');
  	var div=  document.createElement('div');
  	huazhuangping21.setAttribute("class","huazhuangping2");
  	huazhuangping22.setAttribute("class"," ");
  	duigou1.setAttribute("class","duigou");
  	var div1=xuanze1.getElementsByTagName('div');
  	if(div1[1]){
  		xuanze1.removeChild(div1[1]);
  	}
  	duigou2.setAttribute("class"," ");
  	xuanze1.appendChild(div);
  	div.innerHTML="<div class='xuanze2'>"+'"150ml"'+"</div>"
}
function dianji1(){
    var huazhuangping21=document.getElementById('huazhuangping21');
  	var huazhuangping22=document.getElementById('huazhuangping22');
  	var duigou1=document.getElementById('duigou1');
  	var duigou2=document.getElementById('duigou2');
  	var xuane1=document.getElementById('xuanze1');
  	var div=  document.createElement('div');
  	var div1=xuanze1.getElementsByTagName('div');
  	if(div1[1]){
  		xuanze1.removeChild(div1[1]);
  	}
  	huazhuangping21.setAttribute("class"," ");
  	huazhuangping22.setAttribute("class","huazhuangping2");
  	duigou1.setAttribute("class"," ");
  	duigou2.setAttribute("class","duigou");
  	xuanze1.appendChild(div);
  	div.innerHTML="<div class='xuanze2'>"+'"200ml"'+"</div>"
}
function zhuanhuan1(){
	var jianyou1=document.getElementById('jianyou1');
	var jianyou2=document.getElementById('jianyou2');
	var fangda=document.getElementsByClassName('fangda');
	var src=document.getElementById('src');
	var Bimg=document.getElementById('Bimg');
	Bimg.setAttribute("src"," ");
	Bimg.setAttribute("src","img/pp0.jpeg");
	src.setAttribute("src"," ");
	src.setAttribute("src","img/pp0.jpeg");
	jianyou1.setAttribute("class","jianyou");
	jianyou2.setAttribute("class"," ");
}
function zhuanhuan2(){
	var jianyou1=document.getElementById('jianyou1');
	var jianyou2=document.getElementById('jianyou2');
	var fangda=document.getElementsByClassName('fangda');
	var src=document.getElementById('src');
	var Bimg=document.getElementById('Bimg');
	Bimg.setAttribute("src"," ");
	Bimg.setAttribute("src","img/pp1.jpeg");
	src.setAttribute("src"," ");
	src.setAttribute("src","img/pp1.jpeg");
	jianyou2.setAttribute("class","jianyou");
	jianyou1.setAttribute("class"," ");
}
function button1(){
	var jian2=document.getElementById('jian2');
	var num=jian2.value;
	var jian3=document.getElementById('jian3');
	jian3.setAttribute("style","cursor: pointer;");
	console.log(num);
	num--;
	jian2.setAttribute("value",num);
	if(num<1){
		jian3.setAttribute("style","cursor: not-allowed;");
		jian2.setAttribute("value","1");
	}
}
function button2(){
	var jian2=document.getElementById('jian2');
	var jian4=document.getElementById('jian4');
	jian4.setAttribute("style","cursor: pointer;");
	var num=jian2.value;
	num++;
	jian2.setAttribute("value",num);
	if(num>5){
		// jian4.setAttribute("style","cursor: pointer;");
		jian4.setAttribute("style","cursor: not-allowed;");
		jian2.setAttribute("value","5");
	}
}
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var fanfdakuang = document.getElementById("fangdakuang");
var Bimg = document.getElementById("Bimg");
var fangda= document.getElementById('fangda');
img1.onmouseover = function () {
	fangdakuang.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function () {
	fangdakuang.style.display = 'none';
	img2.style.display = 'none';
}

img1.onmousemove = function (ev) {
	var ev = ev || window.event;

	var oL = ev.clientX - fangda.offsetLeft - fangdakuang.offsetWidth/2;
	var oT = ev.clientY - fangda.offsetTop - fangdakuang.offsetHeight/2;

	var oMaxw = img1.offsetWidth - fangdakuang.offsetWidth;
	var oMaxh = img1.offsetHeight - fangdakuang.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	fangdakuang.style.left = oL + 'px';
	fangdakuang.style.top = oT + 'px';

	var scale = img2.offsetWidth / fangdakuang.offsetWidth;
	Bimg.style.left = -scale * oL + 'px'
	Bimg.style.top = -scale * oT + 'px'
}
function cha(){
	var wuzhao = document.getElementById("wuzhao");
	var wuzhao1 = document.getElementById("wuzhao1");
	wuzhao1.setAttribute("style","display:none;");
	wuzhao.setAttribute("style","display:none;");
}
function cha1(){
	var wuzhao = document.getElementById("wuzhao");
	var wuzhao1 = document.getElementById("wuzhao1");
	wuzhao1.setAttribute("style","display:block;");
	wuzhao.setAttribute("style","display:block;");
}