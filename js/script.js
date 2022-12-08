let rating_container = document.querySelector(".reaction__box");
let thank_container = document.querySelector(".thank__box");
let submit= document.getElementById("btn_submit");
let rateagain = document.getElementById("btn_again");
let rating = document.querySelector("#rating");
let rates = document.querySelectorAll(".btn");
submit.addEventListener("click", ()=>{
    thank_container.classList.remove("hidden");
    rating_container.style.display ="none";
});
rateagain.addEventListener("click", ()=>{
    rating_container.style.display ="block";
    thank_container.classList.toggle("hidden");

});

rates.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML;
    })
})

