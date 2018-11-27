//Dynamic JS events
let button = document.getElementById('test');
let cardOverlay = document.getElementById('hidden-overlay');
let cardIcon = document.getElementById('card-icon');
//console.log(button);

//btn colour change
function colourChanged(element){
  element.addEventListener("click", function() {
    element.style.background = "red";
  });
}

colourChanged(button);

//show element from the bottom
function revealBottom(action,element){
  action.addEventListener("click", function(){
    element.style.cssText = "height: 76%; bottom: 20%; display:block;";
  });
}

//revealBottom(cardIcon,cardOverlay)
