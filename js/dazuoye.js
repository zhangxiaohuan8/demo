var box= document.getElementById('zhongxiaokuangshang');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1;  
var timer;
var isMoving = false;
box.onmouseover = function () {
  animate(left, {
    opacity: 0.6
  })
  animate(right, {
    opacity: 0.6
  })
  clearInterval(timer);  
}
box.onmouseout = function () {
  animate(left, {
    opacity: 0
  })
  animate(right, {
    opacity: 0
  })
  timer = setInterval(next, 3000);  
}
right.onclick = next;
left.onclick = prev;

function next() {
  if (isMoving) {
     return;
  }
  isMoving = true;
  index++;
  navmove();
  animate(slider, {
     left: -800 * index
  }, function () {
    if (index == 7) {
      slider.style.left = '-800px';
      index = 1;
    }
    isMoving = false;
  });
}

function prev() {
  if (isMoving) {
     return;
  }
  isMoving = true;
  index--;
  navmove();
  animate(slider, {
    left: -800 * index
  }, function () {
    if (index == 0) {
       slider.style.left = '-4800px';
      index = 6;
    }
    isMoving = false;
  });
}
for (var i = 0; i < oNavlist.length; i++) {
  oNavlist[i].index = i;
  oNavlist[i].onclick = function () {
    index = this.index + 1;
    navmove();
    animate(slider, {
      left: -800 * index
    });
  }

}
function navmove() {
  for (var i = 0; i < oNavlist.length; i++) {
    oNavlist[i].className = "";
  }
   if (index > 6) {
    oNavlist[0].className = "active";
  } else if (index <= 0) {
    oNavlist[5].className = "active";
  } else {
    oNavlist[index - 1].className = "active";
  }
}
timer = setInterval(next, 3000);
function getStyle(obj, attr) { 
  if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

function animate(obj, json, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
  	var flag = true;
  	for (var attr in json) {
  		(function (attr) {
  			if (attr == "opacity") {
  				var now = parseInt(getStyle(obj, attr) * 100);
  				var dest = json[attr] * 100;
  			} else {
  				var now = parseInt(getStyle(obj, attr));
  				var dest = json[attr];
  			}
  			var speed = (dest - now) / 7;
  			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  			if (now != dest) {
  				flag = false;
  				if (attr == "opacity") {
  					obj.style[attr] = (now + speed) / 100;
  				} else {
  					obj.style[attr] = now + speed + "px";
  				}
  			}
  		})(attr);
  	}
  	if (flag) {
  		clearInterval(obj.timer);
  		callback && callback(); 
  	}
  }, 30);
}
var youbiankuang3 = document.getElementById("youbiankuang3");
function show() {
  var top = youbiankuang3.offsetTop - 1;  
  youbiankuang3.style.top = top+ "px";  
  if (-1 * youbiankuang3.offsetTop >= youbiankuang3.offsetHeight / 2) {
      youbiankuang3.style.top = 0;
  }
}
var t = setInterval(show, 30);
var gonggao = document.getElementsByClassName("gonggao");
for (var i = 0; i < gonggao.length; i++) {
  gonggao[i].onmouseout = function () {
    t = setInterval(show, 30);
  };
  gonggao[i].onmouseover = function () {
    clearInterval(t);
  };
}
window.onload=function(){
  var baifenzhi=document.getElementsByClassName('baifenzhi')[0];
  window.onscroll=function(){
    var st=document.documentElement.scrollTop||document.body.scrollTop;
    if(st>180){
      baifenzhi.style.position='fixed'
    }else{
      baifenzhi.style.position='static'
    }
  }
}
qian1.onchange = function(){
  var div=  document.createElement('div');
  var qian1 = document.getElementById("qian1");
  var qian2 = document.getElementById("qian2");
  var qian = document.getElementById("qian");
  var sele = qian1.options;
  for(var i=0;i<qian1.length;i++){
    if(qian1[i].selected==true){
      var qian3=qian1[i].text;
    }
  }
  qian2.innerHTML=" "
  qian2.innerHTML="¥"+qian3
} 
function shubiao(){
  var youhuang1 = document.getElementById("youhuang1");
  youhuang1.setAttribute("style","right:0;");
}
function shubiaochu(){
  var youhuang1 = document.getElementById("youhuang1");
  youhuang1.setAttribute("style","right:-82px;");
}
function shubiao3(){
  var youhuang3 = document.getElementById("youhuang3");
  youhuang3.setAttribute("style","right:0;");
}
function shubiaochu3(){
  var youhuang3 = document.getElementById("youhuang3");
  youhuang3.setAttribute("style","right:-82px;");
}
function shubiao4(){
  var youhuang4 = document.getElementById("youhuang4");
  var youhuang5 = document.getElementById("youhuang5");
  youhuang4.setAttribute("style","right:0;");
  youhuang5.setAttribute("style","margin-top:0px;");
  youhuang5.setAttribute("src","img/erwei.png");
}
function shubiaochu4(){
  var youhuang4 = document.getElementById("youhuang4");
  var youhuang5 = document.getElementById("youhuang5");
  youhuang4.setAttribute("style","right:-82px;");
  youhuang5.setAttribute("src","img/serwei.png");
  youhuang5.setAttribute("style","margin-top:40px;");
}
function shubiao6(){
  var youhuang6 = document.getElementById("youhuang6");
  youhuang6.setAttribute("style","right:0;");
}
function shubiaochu6(){
  var youhuang6 = document.getElementById("youhuang6");
  youhuang6.setAttribute("style","right:-82px;");
}