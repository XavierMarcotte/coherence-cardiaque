const body = document.querySelector("body");
const bubble = document.querySelector(".page");
const button = document.querySelector(".lancer");
const select = document.querySelectorAll(".select");
const lancer = document.querySelector(".lancer");
const close = document.querySelector(".close");
// console.log(lancer);
button.addEventListener("click", ()=>{
    bubble.style.display = "block";
    bubble.style.zIndex = "5";
    body.style.background = "rgba(0,0,0,0.8)";
    select.forEach((selects)=>{
        selects.style.background = "rgba(0,0,0,0.8)";
    });
    lancer.style.background = "rgba(0,0,0,0.8)";
});
close.addEventListener("click", ()=>{
    bubble.style.display = "none";
    bubble.style.zIndex = "0";
    body.style.background = "";
    select.forEach((selects)=>{
        selects.style.background = "";
    });
    lancer.style.background = "";
});

//# sourceMappingURL=index.579125c3.js.map
