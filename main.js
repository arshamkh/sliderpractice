const bt = document.getElementById("bt");
const slider = document.getElementsByClassName("slider");
let slidepage = 1;
function showslide(n){
    if(n > slider.length){
        slidepage = 1;
    }
    if(n < 1){
        slidepage = slider.length;
    }

    for(i = 0 ; i<= slider.length - 1 ; i++){
        slider[i].style.display = "none";
    }
    slider[slidepage - 1].style.display = "block";
    slidepage = slidepage + 1;
}
bt.addEventListener("click" , function(){
    showslide(slidepage);
})