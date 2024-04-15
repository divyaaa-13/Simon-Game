let colors=["red", "blue", "green", "yellow"];

let gamePattern= [];
let userPattern= [];

let started= false;
let level= 0;

function playSound(clr){
    let sound = new Audio(`sounds/${clr}.mp3`);
    sound.play();
}

function animate(val){
    $(`#${val}`).addClass("pressed");
    setTimeout(function(){
        $(`#${val}`).removeClass("pressed");
    }, 100);
}

function startOver(){
    gamePattern=[];
    userPattern=[];
    started= false;
    level= 0;
}



$(document).keypress(function(){
    if(!started){
        started= true;
        gameSequence();
    }
})


function gameSequence(){
    userPattern=[];
    level++;
    $("h1").text(`level ${level}`);
    let randomNum= Math.floor(Math.random()*4);
    let randomColor= colors[randomNum];
    gamePattern.push(randomColor);
    playSound(randomColor);
    animate(randomColor);
}

$(".btn").click(function(){
    let userChoice= this.id;
    playSound(userChoice);
    animate(userChoice);
    userPattern.push(userChoice);
    check();

})

function check(){
    
    let result= true;
        for(i=0; i<=userPattern.length-1; i++){
            if(userPattern[i] !== gamePattern[i]){
                result= false;
            }
        }
    

    if(result){
        console.log(userPattern);
        console.log(gamePattern);
        if(userPattern.length === gamePattern.length){
            setTimeout(function(){
                gameSequence();
            },1000);
        }
      
    }else if(!result){
        console.log(userPattern);
        console.log(gamePattern);
        setTimeout(function(){
            startOver();
            $("h1").text("you lost. press any key to start again!");
            playSound("wrong");
        
        },500);

      
    }
}
console.log("this is working");




 




