const container1=document.getElementById("container");
const icon1=document.getElementsByClassName("ri-heart-fill")[0];

function over(){
    icon1.style.transform="scale(0)";
    container1.style.height="35%";
    container1.style.width="25%";
}
function love() {
    icon1.style.transform="scale(1)";
    container1.style.height="40%";
    container1.style.width="28%";
    setTimeout(over,700);
}

container1.addEventListener("dblclick",love);