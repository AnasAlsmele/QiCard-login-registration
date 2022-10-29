/*
    Anas Alsmele - Full-Stack Web Developer
    ++++++++++++++
    find me out on:
    # Github:     https://github.com/AnasAlsmele
    # LinkedIn:   https://www.linkedin.com/in/anasalsmele/
    ++++++++++++++
    or contact me on:
    # E-mail:     anasalsmele@gmail.com
*/

/* general variables */
let gender = "";

function changePage(e){
    let page = e.srcElement.getAttribute("data-p");
    let current = e.srcElement.getAttribute("data-c");

    // change form
    document.getElementById(page+"-img").className = "img";
    document.getElementById(current+"-img").className = "img-hidden";
    document.getElementById(page+"-div").className = "login-div";
    document.getElementById(current+"-div").className = "login-div-hidden";

    // reset forms
    document.getElementById("login-form").reset();
    document.getElementById("register-form").reset();
    radioReset();
}

/* radio buttons functions */
function radioInput(e){
    let r = e.srcElement.getAttribute("data-r");
    if(gender != ""){
        document.getElementById(gender+"-circle").className = "radio-circle";
    }
    document.getElementById(r+"-circle").className = "radio-circle-active";
    gender = r;
}

function radioReset(){
    document.getElementById("male-circle").className = "radio-circle";
    document.getElementById("female-circle").className = "radio-circle";
}
