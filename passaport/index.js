const passInput =  document.querySelector(".input-group input");
const toggleIcon = document.querySelector(".input-group .toggle");
const ripple = document.querySelector("input-group .ripplr");
const percentbar = document.querySelector(".strength-percent span");
const passLabel = document.querySelector("strangth-label");

passInput.addEventListener("input", handlePassInput);
toggleIcon.addEventListener("click", togglePassInput);

function handlePassInput(e) {
    if (passInput.value.length=0) {
    passLabel.innerHTML ="Strength"
        addClass();
    }else if(passInput.value.length <4) {
        passLabel.innerHTML = "weak";
        addClass("weak")
    }else if (passInput.value.length <7) {
        passLabel.innerHTML = "not bad"
        add("average")
    }else {
        passLabel.innerHTML ="Strong";
        addClass("strong")
    }
 }

 function addClass(className) {
    percentbar.classList.renove("weak")
percentbar.classList.renove("awverage")
percentbar.classList.renove("strong")
    if(className) {
        percentbar.classList.add(className);
    }
 }