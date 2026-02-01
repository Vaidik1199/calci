var body = document.querySelector("body")
var day_shifter = document.querySelector('#shifter');
var screen =document.querySelector(".screen");
var gridss =document.querySelector(".gridss");
var buttons = document.querySelectorAll(".gridss button");
var backspace = document.querySelector("#back");
var reset = document.querySelector("#reset");
var calculate = document.querySelector("#submit");
var flag = 0;

day_shifter.addEventListener("click",function(){
    if(flag==0){
        body.style.backgroundColor="black";
        console.log("dark theme");
        day_shifter.innerText="Light";
        screen.style.backgroundColor="black";
        screen.style.color="white";
        gridss.style.backgroundColor="black";
        flag = 1;
    } else {
        body.style.backgroundColor="transparent";
        console.log("default theme");
        day_shifter.innerHTML="Dark";
        screen.style.backgroundColor="white";
        screen.style.color="black";
        gridss.style.backgroundColor="white";
        flag = 0;
    }
})

buttons.forEach(function(btn){
    btn.addEventListener("click",function(){
        screen.value = screen.value+ btn.value;
    });
});

backspace.addEventListener("click",function(){
    screen.value= screen.value.slice(0,-1);
});

reset.addEventListener("click",function(){
    screen.value= reset.value;
});

calculate.addEventListener("click",function(){
    try{
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
});