//Global variables
var buttonColours = ["red", "blue", "green", "yellow"];
var numberOfButtonColours = buttonColours.length;
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

//Begin nextSequence upon keypress
var yourName = prompt("What is your name?");
$(document).one("keypress", nextSequence);
$(document).one("keypress", function(event) {
  $("h1").text("Level " + 0);
});

//Generate a sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Generate a random number and flash/sound the color selected.
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  var name = randomChosenColour;
  playSound(name);
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeOut(250)
    .fadeIn(250)
    .fadeOut(250)
    .fadeIn(250);
  level = level++
  $("h1").text("Level " + level++);
};

//Save the color clicked by the user to trigger a handler function.
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  var name = userChosenColour;
  var currentColour = userChosenColour;
  var currentLevel = userClickedPattern;
  playSound(name);
  animatePress(currentColour);
  checkAnswer(userClickedPattern.length-1);
});

//Add animations to user clicks
function animatePress(currentColour) {
  $("div#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("div#" + currentColour).removeClass("pressed");
  }, 100)
};

//Checking user answers to computerChoice
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, " + yourName + " ,YOU GOT WAPPED, Press Any Key to Restart");
    startOver();
  };
}

//Restart the game if the user pattern is wrong
function startOver() {
  level = 0;
  gamePattern = [];
  $(document).one("keypress", nextSequence);
  $(document).one("keypress", function(event) {
    $("h1").text("Level " + 0);
    var yourName = prompt("What is your name?");
  });
};








//Identify a color based on the random number chosen

/*
function chosenColour() {
  if (randomNumber === 0) {
    randomChosenColour.push("red");
    return randomChosenColour;
    console.log(randomChosenColour);
  } else if (randomNumber === 1) {
    randomChosenColour.push("blue");
    return randomChosenColour;
    console.log(randomChosenColour);
  } else if (randomNumber === 2) {
    randomChosenColour.push("green");
    return randomChosenColour;
    console.log(randomChosenColour);
  } else {
    randomChosenColour.push("yellow");
    return randomChosenColour;
    console.log(randomChosenColour);
  }
};

//Select button where button id = randomChosenColour. Animate a flash to the button selected.

function computerChoice (randomChosenColour) {

  switch (randomChosenColour) {
    case "red":
    $("#red").fadeOut(250).fadeIn(250);
      break;
   case "blue":
   $("#blue").fadeOut(250).fadeIn(250);
   break;
   case "green":
   $("#green").fadeOut(250).fadeIn(250);
   break;
    default:
    $("#yellow").fadeOut(250).fadeIn(250);
  }
  };


var numberOfColorButtons = document.querySelectorAll(".button").length;

for (var i=0; i<numberOfColorButtons; i++) {

$("#"+"randomChosenColour")[i].addEventListener("click", function () {

switch (randomChosenColour) {
  case "red":
  $(".red").fadeOut(250).fadeIn(250);
    break;
 case "blue":
 $(".blue").fadeOut(250).fadeIn(250);
 break;
 case "green":
 $(".green").fadeOut(250).fadeIn(250);
 break;
  default:
  $(".yellow").fadeOut(250).fadeIn(250);
}
});
}


$("#red").click(function() {
  if(randomChosenColour = "red"){
    $(".red").fadeOut(250).fadeIn(250);
  }
  else if (randomChosenColour = "#blue"){
    $(".blue").fadeOut(250).fadeIn(250);
  }
else if (randomChosenColour = "green"){
  $(".green").fadeOut(250).fadeIn(250);
}
else {$(".yellow").fadeOut(250).fadeIn(250);
}
});*/
