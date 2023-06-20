var card3 = document.getElementById("01")
var box1 = document.getElementById('boxes-main')
var tri1 = document.getElementById('testetriangle1')
var active = false

card3.addEventListener("click", function(){
    if (active === false) {
        box1.style.display = "block";
        tri1.style.display = "block";
        active = true;

    }else if(active === true) {
        box1.style.display = "none";
        tri1.style.display = "none";
        active = false;
    }
   
})