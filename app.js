const getColor = ()=>{
const randomNum = Math.floor(Math.random()*16771572);
const randomCode = "#" + randomNum.toString(16)
document.body.style.backgroundColor=randomCode;
document.getElementById("btn").style.backgroundColor =randomCode;
//show text color in screen
document.getElementById("clr-code").innerText=randomCode;
}
// event call
document.getElementById("btn").addEventListener("click",getColor)
//init call
getColor();