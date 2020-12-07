//Part 4 Clock
window.addEventListener('DOMContentLoaded', documentLoaded, false);

var startTime;
var limit;
var timer;
//listen for click in the field
function documentLoaded() {
  document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);
}

function clicked(evt) {
  // get the <input> and check if it is hidden
  var input = this.querySelector("input");
  var label = this.querySelector("div");

  if (evt.target === input) {
    // if user clicked on <input> do nothing, he is editing

  } else if (evt.target === label) {
    // <input> was hidden, make it visible
    input.classList.remove("hide");

    // and hide the label
    label.classList.add("hide");

    // fill the <input> with the text from the label
    input.value = label.innerHTML;

    // adicionar o listener para detectar o fim da edicao com "ENTER"
    input.addEventListener("keydown", function keydown(evt) {

      // 13 is the code for ENTER
      if (evt.keyCode === 13) {
        label.innerHTML = input.value;
        label.classList.remove("hide");
        input.classList.add("hide");

        // its important to remove the keydown listener, otherwise in a subsequent edit
        // we will end up with several keydown listeners running
        input.removeEventListener("keydown", keydown);
      }

    });
    input.focus();
  } else {
    // <input> was visible, hide it without modifying the value
    input.classList.add("hide");

    // show the label
    label.classList.remove("hide");
  }
  label=startTime;
  function buttonClicked() {
  "use strict";

  startTime = new Date();

  limit = parseInt(document.getElementById("input").value);

  clearInterval(timer);
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  "use strict";

  // read the current time
  var currentTime = new Date();

  // calculate how many seconds passed since the start of the timer
  var elapsed = (currentTime.getTime() - startTime.getTime()) / 1000;

  // convert seconds to minutes and seconds (below 60)
  var minutes = Math.floor(elapsed / 60);
  var seconds = Math.floor(elapsed % 60);

  // pad with zeroes on the left to look better
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // show the elapsed time
  document.getElementById("part4clock").innerHTML = minutes + ":" + seconds;

  // check if we are above the time limit and set the color of the timer accordingly
  if (minutes >= limit) {
    document.getElementById("part4clock").className = "red";
  } else {
    document.getElementById("part4clock").className = "blue";
  }

}

}
