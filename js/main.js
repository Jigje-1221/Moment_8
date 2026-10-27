"use strict";

const hamburgerMeny = document.querySelector("#hamburgerMeny");

hamburgerMeny.addEventListener("click", function(event){
    event.preventDefault()

    const dropDown = document.querySelector("#dropDown");

    if(dropDown.style.display == "none" || dropDown.style.display == ""){
        dropDown.style.display = "block";
    }
    else{
        dropDown.style.display = "none";
    }

})