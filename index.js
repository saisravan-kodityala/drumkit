for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var abcd=this.innerHTML;
    makesound(abcd);
    buttonanim(abcd);
});
}
function makesound(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var bass=new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        default:

    }
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanim(event.key);
})
function buttonanim(currentkey)
{
    var a=document.querySelector("."+currentkey);
    a.classList.add("pressed");
    setTimeout(function(){
    a.classList.remove("pressed");
},100);
}












// var audio=new Audio('./sounds/tom-1.mp3');
//     audio.play();