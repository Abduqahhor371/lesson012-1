// Tasbeh

const count = document.querySelector(".counter")
const title = document.querySelector(".title")

alert("Assalomu Alaykum Xush kelibsiz!");
let name = prompt("Iltimos, ismingizni kiriting:");
alert("Xush kelibsiz " + name + "");

let offset = 0

function inc(){
    offset++
    count.innerHTML = offset
    if(offset < 33){
        title.innerHTML = "Subahanallah"
    }else if(offset < 66){
        title.innerHTML = "Alhamdulillah"
    }else if(offset < 99){
        title.innerHTML ="Allahu Akbar"
    }else{
        offset = 0
    }
}
function reset(){
    offset = 0
    count.innerHTML = offset
}