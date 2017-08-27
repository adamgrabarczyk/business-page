$(".holder").hide();
$(".holder").fadeIn(2000);


//*************************************************************
function isNumber(valueToCheck) {

    return !isNaN(valueToCheck);
}


var isEveryThinkOkey = true;




var button = document.getElementById("button");

var name = document.getElementById("name");

var email = document.getElementById("email");

var info = document.getElementById("info");

email.onkeyup = function (e) {

    if(isNumber(this.value)) {

        this.style.backgroundColor = 'green';
        info.innerHTML = "poprawne dane";
        var isEveryThinkOkey = true;
    }
    else {
        e.preventDefault();

        this.style.backgroundColor = "red";

        info.innerHTML = "wpisz liczbę";
        var isEveryThinkOkey = false;
    }};


button.onclick = function (e) {

    if (!isEveryThinkOkey)
        e.preventDefault()

}







// button.onclick = function (e) {
//
//
//     e.preventDefault();
//
//     alert("siema");
// }