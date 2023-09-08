const hrt= document.querySelector("i");
const love=document.querySelector("img");

love.addEventListener("dblclick",function(){
    hrt.style.transform="translate(-50%,-50%) scale(6)"
    setTimeout(function(){
        hrt.style.opacity="0";
    },1000);
})