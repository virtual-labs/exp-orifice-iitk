var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var valvePositioningText = document.getElementById("valve-positioning-text");
var manometerText = document.getElementById("manometer-text")
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;
// var w1 = document.getElementById("Water_1") 
var w2 = document.getElementById("Water_3")
var w3 = document.getElementById("Water_4")
var w4 = document.getElementById("Water_5")
var w5 = document.getElementById("Water_5_00000062907981060019551920000004634209684482722736_")
// w5 is for direct flow of water from the manometer
var w6 = document.getElementById("Manometer_Water_Right_00000080197925184150286820000005080878160067944331_")
var w7 = document.getElementById("Manometer_Water_Right")
var w8 = document.getElementById("Water_6")
var w9 = document.getElementById("Water_7")
var w10 = document.getElementById("Water_8")
var w11 = document.getElementById("Water_9")


var waterTankFront = document.getElementById("Tank_Water_Front")
var waterTankBase = document.getElementById("Water_Tank_Base")
var waterTankBack = document.getElementById("Tank_Water_Back");
var waterTankLeft = document.getElementById("Tank_Water_Left");
var ml = document.getElementById("Mercury_Left")
var timerSec = document.getElementById("timer-sec")
var timerMS = document.getElementById("timer-ms")

var arrowRect = document.getElementById("arrow-rect")
var arrowPol = document.getElementById("arrow-pol")

let shouldStop=false;

var svgContainer1 = document.getElementById("svg-container-1");
var svgElements1 = document.querySelectorAll(".arrow-1");

var animationTimeouts = [];
function displayArrows() {
    svgElements1.forEach(function (element) {
        element.style.animation = "arrowAnimation 1s infinite";       
    });
}
function stopAnimation() {

    svgElements1.forEach(function (element) {
        element.setAttribute("opacity","0")
        element.style.animation = "none";
    });
    
 }
function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1
        waterFlow3()
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}

valvePositioning.addEventListener("change", updateValvePositioning);

function waterFlow3(){
    w2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "345.2");
    animateElement.setAttribute("dur", "5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    animateElement.setAttribute("values", "0;345.2");
    animateElement.setAttribute("keyTimes", "0;1");
    animateElement.setAttribute("calcMode", "spline");
    animateElement.setAttribute("keySplines", "0.42 0 0.58 1");

    w2.appendChild(animateElement)


    const animateOpacity = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateOpacity.setAttribute("attributeName", "opacity");
    animateOpacity.setAttribute("from", "1");
    animateOpacity.setAttribute("to", "1");
    animateOpacity.setAttribute("dur", "5s");
    animateOpacity.setAttribute("begin", "0s");
    animateOpacity.setAttribute("values", "0;1");
    animateOpacity.setAttribute("keyTimes", "0;1");
    w2.appendChild(animateOpacity);

    animateElement.addEventListener("input", function () {
        const currentHeight = parseFloat(w2.getAttribute("height"));
        if (currentHeight >= 345.2) {
            w2.setAttribute("opacity", "1");
        }
    
    });
    animateElement.beginElement();

    setTimeout(function(){
        waterFlow4()
    },5000);
}

function waterFlow4(){


    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "56.8");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "995");
    animateX.setAttribute("to", "938.2");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w3.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Choose a value on the valve positioning slider to regulate the water flow."
        valvePositioning.disabled = false
      }, 1500);
    
}

function waterFlow5(){
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "93.8");
    animateElement.setAttribute("dur", "2.5s");
    animateElement.setAttribute("fill","freeze");

    w4.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "923.9");
    animateX.setAttribute("to", "830.1");
    animateX.setAttribute("dur", "2.5s");
    animateX.setAttribute("fill","freeze");

    w4.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        
        // waterFlow7()
        waterFlow6()
      }, 2500);
    
}

function waterFlow6(){

    w5.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "155.7");
    animateElement.setAttribute("dur", "2.5s");
    animateElement.setAttribute("fill","freeze");

    w5.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "806");
    animateX.setAttribute("to", "650.3");
    animateX.setAttribute("dur", "2.5s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow7()
      }, 500);

      setTimeout(function() {
        
        console.log(waterFlow8())
      }, 1500);

      setTimeout(function(){
        waterFlow9()
      }, 2500)
    
}

function waterFlow7(){


    //manometer water right
    
    var currentHeight = parseFloat(w6.getAttribute("height"))
    if (currentHeight < 120) {
        currentHeight += 3;
        w6.setAttribute("height", currentHeight);
        setTimeout(waterFlow7, 100); 

        if(currentHeight > 100){
            var increament = 38.2
            var currentHeight_m = 32.2

            const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
            animateElement.setAttribute("attributeName", "height");
            animateElement.setAttribute("from", currentHeight_m);
            animateElement.setAttribute("to", increament);
            animateElement.setAttribute("dur", ".5s");
            animateElement.setAttribute("begin", "0s");
            animateElement.setAttribute("fill","freeze");

            currentHeight = increament
            increament += 6

            ml.appendChild(animateElement)

            animateElement.beginElement();
        }

    }
}
    
    
//     //manometer left water
function waterFlow8(){
    var currentHeight = parseFloat(w7.getAttribute("height"))
    if (currentHeight < 97) {
        currentHeight += 3;
        w7.setAttribute("height", currentHeight);
        setTimeout(waterFlow8, 100); 
    }
}

function waterFlow9(){
    w8.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "350");
    animateElement.setAttribute("dur", "5s");
    animateElement.setAttribute("fill","freeze");

    w8.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "639.4");
    animateX.setAttribute("to", "289.4");
    animateX.setAttribute("dur", "5s");
    animateX.setAttribute("fill","freeze");

    w8.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlow10()
      }, 5000);

}


function waterFlow10(){
    var currentHeight = parseFloat(w9.getAttribute("height"))
    
    if (currentHeight < 297.1) {
        currentHeight += 3;
        w9.setAttribute("height", currentHeight);
        setTimeout(waterFlow10, 100); 
    }
    setTimeout(function() {
        waterTankBase.setAttribute("opacity","1")
        waterFlow13()
      }, 5000);
}

function waterFlow13(){
    w10.style.opacity="1"
    var currentwidth = parseFloat(w10.getAttribute("width"))
    if(shouldStop){
        return;
    }else{
        if (currentwidth < 87.2) {
            currentwidth += 3;
            w10.setAttribute("width", currentwidth);
            setTimeout(waterFlow13, 100); 
        }
        setTimeout(function() {
            waterFlow14()
          }, 500);
    }
}

function waterFlow14(){
    var currentHeight = parseFloat(w11.getAttribute("height"))
    if(shouldStop){
        return;
    }else{
        if (currentHeight < 62.7) {
            currentHeight += 3;
            w11.setAttribute("height", currentHeight);
            setTimeout(waterFlow14, 100); 
        }
        setTimeout(function() {

            if(valvePositioning.value==1){
                manometerText.textContent = "102 mm Hg"
            }
            if(valvePositioning.value==2){
                manometerText.textContent = "146 mm Hg"
            }if(valvePositioning.value==3){
                manometerText.textContent = "210 mm Hg"
            }

            document.getElementById("steps").innerHTML = "Take note of the manometer reading, and then close the gate valve using the close gate valve button."
            purzeButton.disabled = false;
        }, 1000);
    // }
    }
}


    

    
  

function fillTankFront(){

    waterTankFront.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "110");
    animateElement.setAttribute("dur","3.5s")

    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    waterTankFront.appendChild(animateElement)

    animateElement.beginElement();


    setTimeout(function() {
        document.getElementById("steps").innerHTML = "Take note of the current time on the timer, and then readjust the gate valve value using the slider for additional readings. Finally, use the provided data to calculate Qact and Qth."
        purzeButton.disabled = false;
        if(valvePositioning.value == 3){
            document.getElementById("steps").innerHTML = "Take note of the current time on the timer and use the provided data to calculate Qact and Qth."
        }valvePositioning.disabled=false
      }, 3500);

}   
        
function waterTankBackFlow(y){
    if (y > 399) {
        y -= 1;
        waterTankBack.setAttribute("points", `245.1,${y} 587.9,${y} 587.9,508.1 245.1,508.1 `);
        setTimeout(() => waterTankBackFlow(y), 21.5);
    }
}

function waterTankSideFlow(y1,y2){

    if (y1 > 469) {
        y1 -= 1;
        y2-=1;
        waterTankLeft.setAttribute("points", `245.1,508.1 190.1,578.7 190.1,${y1} 245.1,${y2}`);
        setTimeout(() => waterTankSideFlow(y1, y2), 21.5);
    }

}
    


let [milliseconds,seconds] = [0,0];
let int = null;
let timerRunning = true;

function timer(targetsec,targetms){

    if(int!==null){
        clearInterval(int);
    }
    console.log("Timer started with targetsec:", targetsec, "and targetms:", targetms); // Add this line for debugging

    int = setInterval(function() {
        displayTimer(targetsec, targetms); 
    }, 10);
}


function displayTimer(targetsec,targetms){


    if(valvePositioning.value==1){
        if(timerRunning){
            milliseconds+=(65*(5/28));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        // ms=int(ms*10)
        timerSec.textContent = s;
        timerMS.textContent = parseInt(ms);
    }

    if(valvePositioning.value==2){
        if(timerRunning){
            milliseconds+=(45*(5/23));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }

    if(valvePositioning.value==3){
        if(timerRunning){
            milliseconds+=(35*(5/20));
            if(milliseconds >= (100)){
                milliseconds -= 100;
                seconds++;
                if(seconds == 60){
                    seconds = 0;
                }
            }
        }
        let s = seconds < 10 ? "0" + seconds : seconds;
        let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds < 100 ? "" + milliseconds : milliseconds;
        ms=parseInt(ms)
        timerSec.textContent = s;
        timerMS.textContent = ms;
    }


    if(seconds==targetsec ){
        timerRunning = false;
        clearInterval(int);
        timerMS.textContent = targetms;
    }

    
}

function resetTimer() {
    clearInterval(int); 
    [milliseconds, seconds] = [0, 0]; 
    timerRunning = true; 
    timerSec.textContent = "00"; 
    timerMS.textContent = "00";
}

function purzeAction(){

    shouldStop=true
    
    w10.setAttribute("width","0")
    w11.setAttribute("height","0")
   
    console.log("Value:", valvePositioning.value);

    if(valvePositioning.value==1){
        timer(28,91)
    }
    if(valvePositioning.value==2){
        timer(23,89)

    }if(valvePositioning.value==3){
        timer(20,72)
    }

    fillTankFront()
    waterTankBackFlow(508.1)
    waterTankSideFlow(577.5,506.9)
    arrowMovement()
    arrowMovement2(573.3,579.3,585.3 )

    purzeButton.disabled= true
}


function updateValvePositioning()  {
    // stopAnimation()
    shouldStop=false
    displayArrows()
    reset()
    resetTimer()

    var selectedValue = valvePositioning.value;
    if(selectedValue == 0){
        document.getElementById("steps").innerHTML = "Select the value of Valve Positioning greater than 0!"
        w4.setAttribute("opacity","0")
    }else{
        waterFlow5() 
        valvePositioning.disabled = true;
    }
    
    valvePositioningText.textContent = selectedValue;
}

function reset(){
    w5.setAttribute("opacity","0")
    w9.setAttribute("height","0")
    w8.setAttribute("opacity","0")
    w6.setAttribute("height","0")
    w7.setAttribute("height","0")
    
    arrowRect.setAttribute("y","577.7")
    arrowPol.setAttribute("points","143.5,573.3 151.6,579.3 143.5,585.3 ")
    waterTankBack.setAttribute("points","245.1,508.1 587.9,508.1 587.9,508.1 245.1,508.1")
    waterTankFront.setAttribute("opacity","0")
    waterTankLeft.setAttribute("points","250.2,506.9 195.2,577.5 195.2,577.5 250.2,506.9")
    waterTankBase.setAttribute("opacity","0")

    manometerText.textContent = "0 mm Hg"
}


function arrowMovement(){
    var currentY = parseFloat(arrowRect.getAttribute("y"))
    if (currentY > 467.7) {
        currentY -= 1;
        arrowRect.setAttribute("y", currentY);
        setTimeout(arrowMovement, 21.5); 
    }
}

function arrowMovement2(y1,y2,y3){

    if (y1 > 463.3) {
        y1 -= 1;
        y2-=1;
        y3-=1;
        arrowPol.setAttribute("points", `136.4,${y1} 144.5,${y2} 136.4,${y3} `);
        setTimeout(() => arrowMovement2(y1,y2,y3), 21.5);
    }

}
