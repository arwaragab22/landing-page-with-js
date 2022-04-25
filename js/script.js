let imagesphones = document.querySelectorAll(".foot img");
let mainphone = document.querySelector(".phone img");

imagesphones.forEach(function (e, i, array) {
    e.onmouseover = function () {
        e.style.cssText = " transform: scale(1.3)";
        document.body.style.backgroundColor = e.getAttribute("data-color");
        let a = e.id;
        mainphone.src = e.src;


    }
    e.onmouseout = function () {
        e.style.cssText = " transform: scale(1)";
    }
});