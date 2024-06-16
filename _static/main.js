
function addDiv(el, className) {
    var div;
    div = document.createElement('div');
    div.classList = className;
    el.append(div);
    return div;
}

function addLineDivs(el, className) {
    addDiv(el, "line top " + className);
    addDiv(el, "line bottom " + className);
    addDiv(el, "line left " + className);
    addDiv(el, "line right " + className);
}

document.addEventListener("DOMContentLoaded", function(event) {

    /* Add waves to the slides */
    var starBg = document.querySelectorAll("[data-background-hash='0#333333nullnullnullnullnull']");
    for (var i = 0; i < starBg.length; i++) {
        console.log(starBg[i]);
        addDiv(starBg[i], "waves");
    }

    /* Add bubbles to the slides */
    var starBg = document.querySelectorAll("[data-background-hash='0#4973ffnullnullnullnullnull']");
    for (var i = 0; i < starBg.length; i++) {
        console.log(starBg[i]);
        var div = addDiv(starBg[i], "bubbles");
        for (var j = 0; j < 50; j++) {
            addDiv(div, "bubble");
        }
    }

//    var starBg = document.querySelectorAll("[data-background-hash='nullauto_static/grid-bg.pngnullnull#ffffffnullrepeat-xleft topnullnull']");
//    for (var i = 0; i < starBg.length; i++) {
//        console.log(starBg[i]);
//        addLineDivs(starBg[i], "grid");
//    }
//
//    var starBg = document.querySelectorAll("[data-background-hash='0#2b5b84linear-gradient(180deg, rgba(10,59,102,1) 0%, rgba(43,91,132,1) 30%)nullnullnullnull']");
//    for (var i = 0; i < starBg.length; i++) {
//        console.log(starBg[i]);
//        addLineDivs(starBg[i], "blue");
//    }
//
//    // Map ids in "mejoras-en-mensajes-de-error" slide using data-id for slide auto-animate.
//    var section = document.getElementById("mejoras-en-mensajes-de-error");
//    var section2 = document.querySelector("[data-auto-animate-duration='1.1']");
//    var lines = section.querySelectorAll("tr");
//    for (var i = 0; i < lines.length; i++) {
//        var line = lines[i];
//        if (i === 0 || i === 1) {
//            line.setAttribute("data-id", i + "a");
//        } else {
//            line.setAttribute("data-id", i);
//        }
//    }
//    var lines = section2.querySelectorAll("tr");
//    for (var i = 0; i < lines.length; i++) {
//        var line = lines[i];
//        if (i === 0 || i === 1) {
//            line.setAttribute("data-id", i + "b");
//        } else {
//            line.setAttribute("data-id", i);
//        }
//    }
});
