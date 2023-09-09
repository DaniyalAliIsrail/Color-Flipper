document.getElementById("btn").addEventListener("click", getcolor=()=>{
       const randNum = Math.floor(Math.random()*16771567);
       const randColor = "#"+randNum.toString(16)
       console.log(randColor);
       document.body.style.backgroundColor=randColor
       const colorCode =document.getElementById("color-code")
       colorCode.innerText=randColor;
       const btn1 = document.getElementById("btn").style.backgroundColor=randColor;
       


});
getcolor()

