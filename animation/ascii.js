var currentAnimation;
var speed = 250; 
var size; 
var interval;

window.onload = chargement;
function chargement() {
    document.getElementById("stop").disabled = true;
    document.getElementById("speed").checked=false;
	document.getElementById("anim").onchange = changeAnimation;
	document.getElementById("msize").onchange = changeSize;

}
function hey(){
   
    var checkBox = document.getElementById("speed");
    // Get the output text
    
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        if (interval) {
            clearInterval(interval);
          
        interval = setInterval(function() {showAnimation(currentAnimation);}, 50);
            
        }
    } else {
        clearInterval(interval);
          
        interval = setInterval(function() {showAnimation(currentAnimation);}, 250);
       
    }
}


function selectedAnimation(){
   
    var anim = document.getElementById("anim").value;
    document.getElementById("mtext").value = ANIMATIONS[anim];
}
function selectedSize(){
    var el = document.getElementById('mtext');
 
    var selectedS = document.getElementById("msize").value;
    var fontSize2 = parseFloat(selectedS);
    //document.getElementById("mtext").style.fontSize = "24px";
    el.style.fontSize = fontSize2 + 'px';
}

function showAnimation(animation) {
	var textarea = document.getElementById("mtext");
	var currentFrame = animation.shift();
	textarea.value = currentFrame;
	animation.push(currentFrame);
	//currentAnimation = animation;
}
function stopAnimation() {
	document.getElementById("start").disabled = false;
	document.getElementById("anim").disabled = false;
	selectedAnimation();
	clearInterval(interval);
	document.getElementById("stop").disabled = true;
}
function myFunction() {
    document.getElementById("stop").disabled = false;
	document.getElementById("start").disabled = true;
	document.getElementById("anim").disabled = true;
	var textarea = document.getElementById("mtext");
	var mfrmaes = textarea.value.split("=====\n");
	currentAnimation = mfrmaes;
	interval = setInterval(function() {
		showAnimation(currentAnimation);}
		, speed);
  }