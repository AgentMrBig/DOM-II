// Your code goes here
// On mouseover home link, welcome h2 change txt color to red
// on mouseout home link, welcome h2 change txt color to black
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
  this.style.fontSize = "35px";
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
console.log(go); 
window.addEventListener('mousemove', (event) => {
    go.innerHTML = event.pageX.toString();
    
    console.log(event.pageX + " X ");
    console.log(event.pageY + " Y ");
})
