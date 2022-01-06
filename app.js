"use strict";

const words = [
  "auto",
  "mercedes",
  "garten",
  "ente",
  "ende",
  "maschine",
  "maus",
  "hexenschuss",
];

let countdown = Number(
  document.querySelector(".countdown").querySelector(".number").textContent
);
console.log(typeof countdown, countdown);

// set focus on input field
document.querySelector("#iname").focus();

// generate random number
let random = Math.trunc(Math.random() * words.length);
console.log(random);

let chosenWord = words[random];
let asterix = "";
let chosenLetter = "";
console.log(chosenWord);

// iterate over array word and convert to asterix
for (let i = 0; i < chosenWord.length; i++) {
  asterix += "*";
}

// on clicking the button1
document.querySelector("#button1").addEventListener("click", function () {
  chosenLetter = document.querySelector("#iname").value;

  //handle countdown
  if (countdown > 1) {
    // if word contains the chosen letter
    if (chosenWord.includes(chosenLetter)) {
      for (let i = 0; i < asterix.length; i++) {
        if (chosenWord[i] === chosenLetter) {
          // remove asterix and insert letter
          asterix =
            asterix.substring(0, i) +
            chosenLetter +
            asterix.substring(i + 1, asterix.length);

          // show result texts
          wrong("hide");
          text("show");
          document
            .querySelector(".result")
            .querySelector(".text").textContent = `Das Wort ist ${asterix}`;
          document.querySelector("#iname").value = "";
          document.querySelector("#iname").focus();
        }
      }

      // if word doesn't contain the chosen letter
    } else {
      countdown--;
      document
        .querySelector(".countdown")
        .querySelector(".number").textContent = countdown;
      wrong("show");
      document.querySelector("#iname").value = "";
      document.querySelector("#iname").focus();
    }

    // repeat until asterix does't contain '*'
    // if player won
    if (!asterix.includes("*")) {
      document
        .querySelector(".result")
        .querySelector(
          ".text"
        ).textContent = `Das Wort ist "${asterix}", du hast gewonnen!`;

      document.querySelector("body").style.backgroundColor = "rgb(0, 158, 0)";
      document.querySelector("#iname").value = "";
    }

    // if player lost
  } else {
    text("show");
    document.querySelector(".result").querySelector(".text").textContent =
      "Leider verloren!";
    document
      .querySelector(".countdown")
      .querySelector(".number").textContent = 0;
    document.querySelector("body").style.backgroundColor = "rgb(139, 0, 0)";
    document.querySelector("#iname").value = "";
  }
});

// on clicking button 2
document.querySelector("#button2").addEventListener("click", function () {
  document.querySelector("#iname").focus();
  chosenLetter = "";

  document.querySelector("body").style.backgroundColor = "rgb(68, 68, 68)";

  //reset countdown
  countdown = 10;
  document.querySelector(".countdown").querySelector(".number").textContent =
    countdown;

  // generate random number
  random = Math.trunc(Math.random() * words.length);
  console.log(random);

  chosenWord = words[random];
  asterix = "";
  console.log(chosenWord);

  // iterate over array word and convert to asterix
  for (let i = 0; i < chosenWord.length; i++) {
    asterix += "*";
  }
  document.querySelector(".result").querySelector(".text").textContent = "";
});

// functions to show or hide the messages
function text(showOrHide) {
  switch (showOrHide) {
    case (showOrHide = "show"):
      document
        .querySelector(".result")
        .querySelector(".text")
        .classList.remove("d-none");
      break;
    case (showOrHide = "hide"):
      document
        .querySelector(".result")
        .querySelector(".text")
        .classList.add("d-none");
  }
}

function wrong(showOrHide) {
  switch (showOrHide) {
    case (showOrHide = "show"):
      document
        .querySelector(".result")
        .querySelector(".wrong")
        .classList.remove("d-none");
      break;
    case (showOrHide = "hide"):
      document
        .querySelector(".result")
        .querySelector(".wrong")
        .classList.add("d-none");
  }
}
