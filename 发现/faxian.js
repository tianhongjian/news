//导航栏分类
var a1=document.querySelector('.a1');
var a2=document.querySelector('.a2');
var a3=document.querySelector('.a3');
var a4=document.querySelector('.a4');
var a5=document.querySelector('.a5');
var a6=document.querySelector('.a6');
var a7=document.querySelector('.a7');
var a8=document.querySelector('.a8');

var a11=document.querySelector('.a11');
var a21=document.querySelector('.a21');
var a31=document.querySelector('.a31');
var a41=document.querySelector('.a41');
var a51=document.querySelector('.a51');
var a61=document.querySelector('.a61');
var a71=document.querySelector('.a71');
var a81=document.querySelector('.a81');

a1.onmouseover=function(){
    a11.style.display='block';
    a1.style.background='#fff';
    a1.style.color='red';
}
a1.onmouseout=function(){
    a11.style.display='none';
    a1.style.background='#000';
    a1.style.color='#fff';
}
a2.onmouseover=function(){
    a21.style.display='block';
    a2.style.background='#fff';
    a2.style.color='red';
}
a2.onmouseout=function(){
    a21.style.display='none';
    a2.style.background='#000';
    a2.style.color='#fff';
}
a3.onmouseover=function(){
    a31.style.display='block';
    a3.style.background='#fff';
    a3.style.color='red';
}
a3.onmouseout=function(){
    a31.style.display='none';
    a3.style.background='#000';
    a3.style.color='#fff';
}
a4.onmouseover=function(){
    a41.style.display='block';
    a4.style.background='#fff';
    a4.style.color='red';
}
a4.onmouseout=function(){
    a41.style.display='none';
    a4.style.background='#000';
    a4.style.color='#fff';
}
a5.onmouseover=function(){
    a51.style.display='block';
    a5.style.background='#fff';
    a5.style.color='red';
}
a5.onmouseout=function(){
    a51.style.display='none';
    a5.style.background='#000';
    a5.style.color='#fff';
}
a6.onmouseover=function(){
    a61.style.display='block';
    a6.style.background='#fff';
    a6.style.color='red';
}
a6.onmouseout=function(){
    a61.style.display='none';
    a6.style.background='#000';
    a6.style.color='#fff';
}
a7.onmouseover=function(){
    a71.style.display='block';
    a7.style.background='#fff';
    a7.style.color='red';
}
a7.onmouseout=function(){
    a71.style.display='none';
    a7.style.background='#000';
    a7.style.color='#fff';
}
a8.onmouseover=function(){
    a81.style.display='block';
    a8.style.background='#fff';
    a8.style.color='red';
}
a8.onmouseout=function(){
    a81.style.display='none';
    a8.style.background='#000';
    a8.style.color='#fff';
}


//banner轮播图
var ban2 = document.querySelector('.ban2');
var ban3 = document.querySelector('.ban3');
var ban11 = document.querySelector('.ban11');
var ban1 = document.querySelector('.ban1');
var timer, setLeft, end, timer1, tween, juli;
var index = 0;
function next() {
    clearInterval(timer);
    index++;
    if (index == 3) {
        ban11.style.left = 0;
        index = 1;
    }
    end = -index * 1366;
    timer = setInterval(() => {
        setLeft = ban11.offsetLeft;
        tween = Math.floor((end - setLeft) / 8);
        // tween=-30;
        juli = setLeft + tween;
        if (juli == end) {
            clearInterval(timer);
            timer1 = setTimeout(next, 1500);
        }
        ban11.style.left = juli + 'px';
    }, 50)
}
function str() {
    timer1 = setTimeout(next, 1500);
}
function end() {
    clearTimeout(timer1);
}
str();
// ban2.onclick=function(){
//     var left= ban11.offsetLeft;
//     // if(left==0){
//     //     left=-2732+'px';
//     // }
//     ban11.style.left=left+1366+'px';
// }
// ban3.onclick=function(){
//     var left= ban11.offsetLeft;
//     // if(left==-2732){
//     //     left=1366+'px';
//     // }
//     ban11.style.left=left-1366+'px';
// }
// ban1.onmouseover=function(){
//     clearTimeout(timer);
// }
// ban1.onmouseout=function(){
//     str();
// }

//热门排行榜
var sec5 = document.querySelector('.sec5');
window.onscroll=function(){
    var top = this.document.documentElement.scrollTop;
    if(top>500){
        this.sec5.style.position='fixed';
        this.sec5.style.top='100px';
        this.sec5.style.right='95px';
    }
    if(top<450||top>1400){
        this.sec5.style.position='absolute';
        this.sec5.style.top='150px';
        this.sec5.style.right='42px';
    }
}