
var btngp = document.querySelector("#btngp");

var link1 = btngp.querySelector("#link1");

link1.onmouseover = function(){
    link1.style.transform ="rotateY(360deg)";
}
link1.onmouseout = function(){
    link1.style.animation="turn  1s running"  ;
}

/* @keyframes turn {
    0%{
        transform:rotateY(0);
    }
    100%{
        transform:rotateY(360deg);
    }
} */