// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0){
        dodger.style.left = `${left - 3}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10)

    if (left + dodger.clientWidth < window.innerWidth){
        dodger.style.left = `${left + 3}px`;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft"){
        moveDodgerLeft();
    }else if (event.key === "ArrowRight"){
        moveDodgerRight();
    }   
}); 


