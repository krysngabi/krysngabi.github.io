var timesRun = 0;
var interval;
function changeSize(){
    var el = document.getElementById('mtext');
    var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    //document.getElementById("mtext").style.fontSize = "24px";
    el.style.fontSize = (fontSize + 2) + 'px';
}
function changeInterval(){

    if(timesRun==0){
        interval= setInterval(changeSize, 500);
        timesRun += 1;
    }else if(timesRun==1){
        clearInterval((interval));
        timesRun=0;
    }
  
   
}
function mBlink(){
    var checkBox = document.getElementById("bling");
    // Get the output text
    
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        document.getElementById("mtext").style.fontWeight = "bold";
        document.getElementById("mtext").style.color = "green";
        document.getElementById("mtext").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
        document.body.style.backgroundRepeat="no-repeat"
    } else {
        document.getElementById("mtext").style.fontWeight = "normal";
        document.body.style.backgroundImage = "url('')";
    }
}
function fOnChange(){
   alert("Onchange");
}
function toPigLatin(){
    var allConsonantsRegex = /^[^aeiou]+$/i;
    var texte=  document.getElementById("mtext");
    var firstletter=texte.value.substring(0,1);

    var indexvow=myFirstVowel(texte);
    //alert(indexvow);
    if (allConsonantsRegex.test(firstletter)) {
       var newtext=texte.value.substring(1,texte.value.length)+firstletter;
       alert(newtext);
      
       
    }
function myFirstVowel(str){
    alert("Length "+str.value.length);
    for(var i = 0; i<str.value.length; i++)
    {
    if (str.value.charAt(i) =='a' || str.value.charAt(i) == 'e' || str.value.charAt(i) =='i'
    || str.value.charAt(i) == 'o' || str.value.charAt(i) == 'u' || str.value.charAt(i) == 'A' ||
    str.value.charAt(i) == 'E' || str.value.charAt(i) =='I' || str.value.charAt(i) =='O' ||
     str.value.charAt(i) == 'U')
    {
        var pos = i+1;
        return pos;

    }
   
    //

}

}
  
}