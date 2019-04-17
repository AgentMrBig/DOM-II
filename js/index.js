// Your code goes here
// On mouseover 
// home link, welcome h2 change txt color to red
// on mouseout 
// home link, welcome h2 change txt color to black
document.getElementById("home").addEventListener("mouseover", txtRed);
document.getElementById("home").addEventListener("mouseout", txtBlack);
document.getElementById("contact").addEventListener("click", function(event){
    document.getElementById("contact").style.color = "green";
  });
function txtRed(){  
    document.getElementById("welcomH2").style.color = "red";
}
function txtBlack(){  
    document.getElementById("welcomH2").style.color = "black";
}

// on double click
// on double click reset the logo back to default, resizing the window changes
// the innerHTML to the width
document.getElementsByTagName("body")[0].addEventListener("dblclick", dblClick);
function dblClick(){
    document.getElementById("navH1").innerHTML = "Fun Bus";
    document.getElementsByTagName("body")[0].style.background = "white";
    document.getElementById("contact").style.color = "black";
}

// On resize
window.addEventListener("resize", function(){
document.getElementById("navH1").innerHTML = document.getElementById("navH1").clientWidth.toString();
});

// gradientAnim
document.getElementById("navH1").addEventListener("mouseover", ()=>{
    var mainCon = document.getElementById("mainContainer");
    mainCon.setAttribute('class','gradientAnim');
});
document.getElementById("navH1").addEventListener("mouseout", ()=>{
    var mainCon = document.getElementById("mainContainer");
    mainCon.setAttribute('class','container home');
});

// wheel
document.getElementById("welcomH2").addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "60px";
}

// key down
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    console.log(key);
    if(key.keyCode == "65"){
        var body = document.getElementsByTagName("body");
        body[0].style.background = "red";
        console.log("boo " + body[0])
    }
}

// load
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    document.getElementsByTagName("body")[0].style.background = "pink";
});

// mousemove
var go = document.getElementById("letsGoH2");
var xmouse, ymouse;

console.log(go); 
window.addEventListener('mousemove', (event) => {
    go.innerHTML = event.pageX.toString();
    xmouse = event.clientX;
    ymouse = event.clientY;
    //followMouse();
   
})


//context menu
document.getElementById("letsGoH2").addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    alert('success!');
    return false;
}, false);

//mouseup

var ball = document.createElement("div");
ball.setAttribute("id", "ball");
ball.style.width = "60px";
ball.style.height = "60px";
ball.style.background = "none";
ball.style.border = "1px solid grey";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.left = "50%";
ball.style.right = "50%";
ball.style.margin = "-10px 0 0 -10px";
ball.style.pointerEvents =  "none";
ball.style.zIndex = "200";

console.log(ball);
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1
var followMouse = function followMouse(){
    key = requestAnimationFrame(followMouse);

    if(!x || !y){
        x = xmouse;
        y = ymouse;
    }else{
        dx = (xmouse - x) * 0.125;
        dy = (ymouse - y) * 0.125;
        if(Math.abs(dx) + Math.abs(dy) < 0.1){
            x = xmouse;
            y = ymouse;
        }else{
            x += dx;
            y += dy;
        }
    }
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
}

window.addEventListener('mouseup', (event) => {
   
    document.body.appendChild(ball);
    ball.style.left = event.pageX + 'px';
    ball.style.top = event.pageY + 'px';
   
})