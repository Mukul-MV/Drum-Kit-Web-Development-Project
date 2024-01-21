var numberOfButton = document.querySelectorAll(".drum").length;
// when button was pressed
for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
    makeAnimation(this.innerHTML);
  });
}

// when keyboard was pressed

document.addEventListener("keypress", function (Event) {
  makeSound(Event.key);
  makeAnimation(Event.key);
});

function makeSound(key) {
  //var btn = this.innerHTML;
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "j":
      var bass = new Audio("sounds/kick-bass.mp3");
      bass.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      alert("not found");
      break;
  }
}

function makeAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);

  activeBtn.classList.add("pressed");

  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}

//alert("han click kia gaya mujhe");
//  var audio = new Audio("sounds/crash.mp3");
//  audio.play();
