var h1 = document.getElementById("H1")
var h2 = document.getElementById("H2")
var h3 = document.getElementById("H3")

var t1 = document.getElementById("T1")
var t2 = document.getElementById("T2")
var t3 = document.getElementById("T3")

var qact1 = document.getElementById("Qact1")
var qact2 = document.getElementById("Qact2")
var qact3 = document.getElementById("Qact3")

var qt1 = document.getElementById("Qt1")
var qt2 = document.getElementById("Qt2")
var qt3 = document.getElementById("Qt3")

var cd1 = document.getElementById("Cd1")
var cd2 = document.getElementById("Cd2")
var cd3 = document.getElementById("Cd3")

var cdAvg = document.getElementById("avg-cd")

function calculate(){

    if(h1.querySelector("input").value=="" || h2.querySelector("input").value=="" || h3.querySelector("input").value=="" || t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || qt1.querySelector("input").value=="" || qt2.querySelector("input").value=="" || qt3.querySelector("input").value=="" || qact1.querySelector("input").value=="" || qact2.querySelector("input").value=="" || qact3.querySelector("input").value=="" ){
        alert("Please Fill all input fields or Enter valid values in all input fields.");
    }else{
        cd1.querySelector("input").value = (qact1.querySelector("input").value/qt1.querySelector("input").value).toFixed(4)

        cd2.querySelector("input").value = (qact2.querySelector("input").value/qt2.querySelector("input").value).toFixed(4)
    
        cd3.querySelector("input").value = (qact3.querySelector("input").value/qt3.querySelector("input").value).toFixed(4)
    
        cdAvg.querySelector("input").value = (((qact1.querySelector("input").value/qt1.querySelector("input").value) + (qact2.querySelector("input").value/qt2.querySelector("input").value) + (qact3.querySelector("input").value/qt3.querySelector("input").value)) / 3).toFixed(4)
    
        document.querySelector("#check-button").disabled = false
    }

    
}


function checkYourResult() {

    let flag = true

    if(h1.querySelector("input").value!=102){
        h1.querySelector("input").style.color = "red"
        flag= false
    }

    if(h2.querySelector("input").value!=146){
        h2.querySelector("input").style.color = "red"
        flag= false
  
    }

    if(h3.querySelector("input").value!=210){
        h3.querySelector("input").style.color = "red"
        flag= false
        
    }

    if(t1.querySelector("input").value!=28.91){
        t1.querySelector("input").style.color = "red"
        flag= false
        
    }

    if(t2.querySelector("input").value!=23.89){
        t2.querySelector("input").style.color = "red"
        flag= false
    }


    if(t3.querySelector("input").value!=20.72){
        t3.querySelector("input").style.color = "red"
        flag= false
    }

    if(qact1.querySelector("input").value> 4.067 && qact1.querySelector("input").value< 4.233){
        qact1.querySelector("input").style.color = "black"
        flag= true
    }else{
        qact1.querySelector("input").style.color = "red"
        flag= false
    }

    if(qact2.querySelector("input").value >4.9196  && qact2.querySelector("input").value<5.1204){
        qact2.querySelector("input").style.color = "black"
        flag= true
    }else{
        qact2.querySelector("input").style.color = "red"
        flag= false
    }
    
    if(qact3.querySelector("input").value > 5.6742 && qact3.querySelector("input").value< 5.9058){
        qact3.querySelector("input").style.color = "black"
        flag= true
    }else{
        qact3.querySelector("input").style.color = "red"
        flag= false
    }


    if(qt1.querySelector("input").value>6.2328 && qt1.querySelector("input").value<6.4872){
        qt1.querySelector("input").style.color = "black"
        flag= true
    }else{
        qt1.querySelector("input").style.color = "red"
        flag= false
    }

    if(qt2.querySelector("input").value>7.4578 && qt2.querySelector("input").value<7.7622){
        qt2.querySelector("input").style.color = "black"
        flag= true
    }else{
        qt2.querySelector("input").style.color = "red"
        flag= false
    }

    if(qt3.querySelector("input").value>8.9376 && qt3.querySelector("input").value<9.3024){
        qt3.querySelector("input").style.color = "black"
        flag= true
    }else{
        qt3.querySelector("input").style.color = "red"
        flag= false
    }


    if(cd1.querySelector("input").value>0.639 && cd1.querySelector("input").value<0.665){
        cd1.querySelector("input").style.color = "black"
        flag= true
    }else{
        cd1.querySelector("input").style.color = "red"
        flag= false
    }

    if(cd2.querySelector("input").value>0.646 && cd2.querySelector("input").value<0.672){
        cd2.querySelector("input").style.color = "black"
        flag= true
    }else{
        cd2.querySelector("input").style.color = "red"
        flag= false
    }

    if(cd3.querySelector("input").value>0.621 && cd3.querySelector("input").value<0.647){
        cd3.querySelector("input").style.color = "black"
        flag= true
    }else{
        cd3.querySelector("input").style.color = "red"
        flag= false
    }

    if(cdAvg.querySelector("input").value >0.60 && cdAvg.querySelector("input").value <0.80){
        console.log(cdAvg.querySelector("input"))
        cdAvg.querySelector("input").style.color = "black"
        if(flag){
            flag = true
        }
    }else{
        console.log(cdAvg.querySelector("input").value)
        cdAvg.querySelector("input").style.color = "red"
        flag= false
    }
    // }


    if(flag){
        
        for (let i = 0; i < 5; i++) {
            document.querySelector(".result-table").style.display = "none"
            confetti();
          }
        
        alert("Congratulations! You have successfully completed the experiment.");
    }else{
        document.querySelector(".result-table").style.display = "flex"
    }
}