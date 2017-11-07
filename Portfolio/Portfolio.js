/**
 * Created by User Notebook on 31.10.2017.
 */
var modalWindow1 = document.getElementById("section_news__modal_window1");
var modalWindow2 = document.getElementById("section_news__modal_window2");
var modalWindow3 = document.getElementById("section_news__modal_window3");
var modalWindowPortfolio = document.getElementById("section_portfolio__modal_window");
var modalWindowOurTeam = document.getElementById("section_our_team__modal_window");

var buttonLink1 = document.getElementById("linkPeace");
var buttonLink2 = document.getElementById("linkFree");
var buttonLink3 = document.getElementById("linkSimple");
var buttonLinkPortfolio = document.getElementById("linkPortfolio");
var buttonLinkOurTeam = document.getElementById("linkOurTeam");

var buttonClose1 = document.getElementsByClassName("close__modal_window")[0];
var buttonClose2 = document.getElementsByClassName("close__modal_window")[1];
var buttonClose3 = document.getElementsByClassName("close__modal_window")[2];
var buttonClosePortfolio = document.getElementsByClassName("close__modal_window")[3];
var buttonCloseOurTeam = document.getElementsByClassName("close__modal_window")[4];

buttonLink1.onclick = function () {
    "use strict";
    modalWindow1.style.display = "block";
};


buttonLink2.onclick = function () {
    "use strict";
    modalWindow2.style.display = "block";
};


buttonLink3.onclick = function () {
    "use strict";
    modalWindow3.style.display = "block";
};


buttonLinkPortfolio.onclick = function () {
    "use strict";
    modalWindowPortfolio.style.display = "block";
};

buttonLinkOurTeam.onclick = function () {
    "use strict";
    modalWindowOurTeam.style.display = "block";
};


buttonClose1.onclick = function () {
    "use strict";
    modalWindow1.style.display = "none";
};

buttonClose2.onclick = function () {
    "use strict";
    modalWindow2.style.display = "none";
};

buttonClose3.onclick = function () {
    "use strict";
    modalWindow3.style.display = "none";
};

buttonClosePortfolio.onclick = function () {
    "use strict";
    modalWindowPortfolio.style.display = "none";
};

buttonCloseOurTeam.onclick = function () {
    "use strict";
    modalWindowOurTeam.style.display = "none";
};


window.onclick = function (event) {
    "use strict";
    if (event.target === modalWindow1) {
        modalWindow1.style.display = "none";
    }
    if (event.target === modalWindow2) {
        modalWindow2.style.display = "none";
    }
    if (event.target === modalWindow3) {
        modalWindow3.style.display = "none";
    }
    if (event.target === modalWindowPortfolio) {
        modalWindowPortfolio.style.display = "none";
    }
    if (event.target === modalWindowOurTeam) {
        modalWindowOurTeam.style.display = "none";
    }
};




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    "use strict";
    showSlides(slideIndex += n);
}

function currentSlide(n){
    "use strict";
    showSlides(slideIndex = n);
}

function showSlides(n){
    "use strict";
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function slideTime(n){
    "use strict";
    n = 1;
    showSlides(slideIndex += n);
}

setInterval(slideTime, 44000);
