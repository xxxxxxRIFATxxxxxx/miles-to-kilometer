// Define UI
var miles = document.querySelector("#miles");
var result = document.querySelector("#result");

// Define Function
function milesToKilometer() {
    var kilometer = miles.value * 1.60934;
    result.innerText = kilometer;
};

// Define Event Listener
miles.addEventListener("keyup", milesToKilometer);

