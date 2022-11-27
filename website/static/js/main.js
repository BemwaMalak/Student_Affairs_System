let counter = 1;
automateSliding(counter);
function automateSliding(counter){
    counter++;
    if(counter == 5){
        counter = 1;
    }
    checkSlider(counter);
    setTimeout(function(){automateSliding((counter%5))}, 2500);
}
function checkSlider(counter){
    document.getElementById("r"+counter).checked = true;
    document.getElementsByClassName("slide")[counter - 1].classList.add("fade");
    document.getElementsByClassName("bar")[counter - 1].classList.add("active");
    if(counter == 1){
        document.getElementsByClassName("slide")[3].classList.remove("fade");
        document.getElementsByClassName("bar")[3].classList.remove("active");
    }else{
        document.getElementsByClassName("slide")[counter - 2].classList.remove("fade");
        document.getElementsByClassName("bar")[counter - 2].classList.remove("active");
    }
}