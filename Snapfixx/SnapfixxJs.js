/**
 * Created by User Notebook on 23.10.2017.
 */

document.getElementById("slider_left").onclick = sliderLeft;
document.getElementById("slider_right").onclick = sliderRight;

var stepLeft, stepRight;
stepLeft = stepRight = 0;
var sliderLine = document.getElementById("section_whatPeopleSay_slider__slider_box");

function sliderLeft() {
    "use strict";
    stepLeft = stepLeft + 40;
    if (stepLeft >= 0) {
        stepLeft = 0;
    }
    sliderLine.style.left = stepLeft + "vh";
}


function sliderRight() {
    "use strict";
    stepLeft = stepLeft -40;
    if (stepLeft <= -120) {
        stepLeft = -120;
    }

    sliderLine.style.left = stepLeft + "vh";
}