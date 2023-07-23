const animationDiv = document.querySelector(".animation")
let y=1,x=1,z=1
function anim1(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    const timeout = 250*len+5000
    function anim(i){
        if(i===len) return
        setTimeout(() => {
            divs[i].style.transform= "rotateX(180deg)"
            anim(i+1)
        }, 250);
    }
    anim(0)
}
function anim2(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    const timeout = 250*len+5000
    function anim(i){
        if(i===len)     return
        setTimeout(() => {
            divs[i].style.translate= "0 -50px"
            anim(i+1)
        }, 250);
    }
    anim(0)
    setTimeout(() => {
        function ani(i){
            if(i===len)     return
            setTimeout(() => {
                divs[i].style.translate= "0 0px"
                ani(i+1)
            }, 250);
        }
        ani(0)
    }, 5000);
}
function anim3(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    const timeout = 250*len+5000
    function anim(i){
        if(i===len)     return
        setTimeout(() => {
            divs[i].style.opacity = "0"
            anim(i+1)
        }, 250);
    }
    anim(0)
    setTimeout(() => {
        function ani(i){
            if(i===len)     return
            setTimeout(() => {
                divs[i].style.opacity = "1"
                ani(i+1)
            }, 250);
        }
        ani(0)
    }, 5000);
}
function anim4(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    const timeout = 250*len+5000
    function anim(i){
        if(i===len)     return
        setTimeout(() => {
            divs[i].style.transform= "translateX(50px)"
            anim(i+1)
        }, 250);
    }
    anim(0)
    setTimeout(() => {
        function ani(i){
            if(i===len)     return
            setTimeout(() => {
                divs[i].style.transform= "translateX(0px)"
                ani(i+1)
            }, 250);
        }
        ani(0)
    }, 5000);
}
function rotY(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    if(y%2===1)
        for(let i=0;i<len;i++){
            divs[i].style.rotate = "90deg"
        }
    else
        for(let i=0;i<len;i++){
            divs[i].style.rotate = "0deg"
        }
    y+=1
}
function rotX(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    if(x%2===1)
        for(let i=0;i<len;i++){
            divs[i].style.transform = "rotateX(75deg)"
        }
    else
        for(let i=0;i<len;i++){
            divs[i].style.transform = "rotateX(0deg)"
        }
    x+=1
}
function rotZ(){
    const divs = document.getElementsByClassName("div")
    let len = divs.length 
    if(z%2===1)
        for(let i=0;i<len;i++){
            divs[i].style.transform = "rotateZ(45deg)"
        }
    else
        for(let i=0;i<len;i++){
            divs[i].style.transform = "rotateZ(0deg)"
        }
    z+=1
}
function addDiv(){
    const divEle = '<div class="div"></div>'
    animationDiv.innerHTML += divEle
    const div = document.querySelectorAll(".div")
    let len = div.length
    let minW = (200-(len*10)>20)?(`${200-(len*10)}px`):(`20px`)
    for(let i=0;i<len;i++){
        div[i].style.width = minW
    }
}
function reset(){
    const div = document.querySelectorAll(".div")
    let len = div.length
    x=y=z=1
    for(let i=0;i<len;i++){
        div[i].style.transform = "rotateX(0deg)"
        div[i].style.transform= "translateX(0px)"
        div[i].style.transform = "rotateX(0deg)"
        div[i].style.rotate = "0deg"
    }
}
function removeDiv(){
    const div = document.querySelectorAll(".div")
    div[0].remove()
    let len = div.length
    let minW = (200-(len*10)>20)?(`${200-(len*10)}px`):(`20px`)
    for(let i=0;i<len;i++){
        div[i].style.width = minW
    }
}
document.getElementById("anim1").addEventListener("click",anim1)
document.getElementById("anim2").addEventListener("click",anim2)
document.getElementById("anim3").addEventListener("click",anim3)
document.getElementById("anim4").addEventListener("click",anim4)
document.getElementById("rotateY").addEventListener("click",rotY)
document.getElementById("rotateX").addEventListener("click",rotX)
document.getElementById("rotateZ").addEventListener("click",rotZ)
document.getElementById("add").addEventListener("click",addDiv)
document.getElementById("reset").addEventListener("click",reset)
document.getElementById("remove").addEventListener("click",removeDiv)