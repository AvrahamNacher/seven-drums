

function playDrumSound (drum) {
  switch (drum) {
    case "w":
      var sound = new Audio("./sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      var sound2 = new Audio("./sounds/tom-1.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("./sounds/tom-2.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("./sounds/tom-3.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("./sounds/tom-4.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("./sounds/kick-bass.mp3");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("./sounds/snare.mp3");
      sound7.play();
      break;
    default: console.log ("Default case triggered");
  }
}

function buttonAnimation (drum) {
  document.querySelector("."+drum).classList.add("pressed");
  setTimeout (function () {document.querySelector("."+drum).classList.remove("pressed");}, 100);
}


var drumButtons = document.querySelectorAll("button");
for (var i = 0; i < drumButtons.length; i++) {

  drumButtons[i].addEventListener("click", function () {
    playDrumSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  } );
    //var sound = new Audio ("./sounds/crash.mp3");
    //sound.play();
    //console.log (this);
    //this.style.color = "white";
    //this.classList.toggle ( "white");
}

document.addEventListener("keydown", function (event) {
   playDrumSound(event.key);
   buttonAnimation(event.key);
 });
