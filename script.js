var blade = document.getElementById("blade")
let on = document.getElementById("on")
let off = document.getElementById("off")
let slow = document.getElementById("slow")
let speed = document.getElementById("speed")
let blade1 = document.getElementById("blade1")
let blade2 = document.getElementById("blade2")


var count = 4;
var count2 = 0.4;

on.onclick= function(){
    count=4;
    blade.style.animationName = "style";
}

off.onclick= function(){
    count=4;
    blade.style.animationName = "";
    blade.style.animationDuration= count+"s";
}

slow.onclick= function(){
    count++;
    if(count==9){
        blade.style.animationName = "";
        count=3;
    }
    blade.style.animationDuration= count+"s";
}

speed.onclick= function(){
    count--;
    blade.style.animationDuration= count+"s";

    if(count==0){
        blade.style.animationDuration= count2+"s";
        
    }
  if(count==-1){
    count=4;
        blade.style.animationDuration= count+"s";
    }
}

// ======== blades ====

blade1.onclick = function(){
    blade.style.backgroundImage= 'url("flower.png")';
}
blade2.onclick = function(){
    blade.style.backgroundImage= 'url("flower5.png")';
}
