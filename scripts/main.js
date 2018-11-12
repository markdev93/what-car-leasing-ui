//Dynamic JS events
let button = document.getElementById('test');
//console.log(button);

//btn colour change
function colourChanged(element){
  element.addEventListener("click", function() {
    element.style.background = "red";
  });
}

colourChanged(button);
