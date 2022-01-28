"use strict";

const input = document.querySelector("#iname");
const bodyStyle = document.querySelector("body").style;
const resultText = document.querySelector(".result").querySelector(".text");
const countDText = document
  .querySelector(".countdown")
  .querySelector(".number");
const submitBtn = document.querySelector("#button1");
const restartBtn = document.querySelector("#button2");
const guessList = document.querySelector(".guessList");

const addLi = (content) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(content));
  guessList.appendChild(li);
};
const removeLi = () => {
  while (guessList.firstChild) guessList.removeChild(guessList.firstChild);
};
// functions to show or hide the messages and pictures
const _removeCl = (text_Wrong) =>
  document
    .querySelector(".result")
    .querySelector(`.${text_Wrong}`)
    .classList.remove("hide");

const _addCl = (text_Wrong) =>
  document
    .querySelector(".result")
    .querySelector(`.${text_Wrong}`)
    .classList.add("hide");

const toggleHide = (toggleHide, text_Wrong) =>
  toggleHide === "hide" ? _addCl(text_Wrong) : _removeCl(text_Wrong);

const switchImg = (number, toggleHide) => {
  imgClNum = numPictures.get(number);
  toggleHide === "hide"
    ? document.querySelector(`.${imgClNum}`).classList.add("hide")
    : document.querySelector(`.${imgClNum}`).classList.remove("hide");
};
// variables
let chLetter, countD, imgClNum, chWord, firstLetter, asterix, endRound;
const words = wordlist.split(" ");
const numPictures = new Map([
  [10, "basic"],
  [9, "head"],
  [8, "eye1"],
  [7, "eye2"],
  [6, "nose"],
  [5, "mouth"],
  [4, "body"],
  [3, "arm1"],
  [2, "arm2"],
  [1, "leg1"],
  [0, "leg2"],
]);
// game functions
const initial = () => {
  removeLi();
  chLetter = "";
  countD = 10;
  let random = Math.trunc(Math.random() * words.length);
  chWord = words[random];
  firstLetter = chWord.slice(0, 1).toUpperCase();
  asterix = "";
  endRound = false;

  // calculate hidden word
  for (let i = 0; i < chWord.length; i++) asterix += "*";

  countDText.textContent = countD;
  bodyStyle.backgroundColor = "rgb(179, 179, 179)";

  //change pictures
  for (let i = 9; i >= 0; i--) switchImg(i, "hide");

  imgClNum = 10;
  switchImg(imgClNum, "show");
  resultText.textContent = `Das Wort ist ${asterix}`;
  toggleHide("show", "text");
  input.focus();
};
const playerWon = function () {
  resultText.textContent = `Das Wort ist "${asterix}", du hast gewonnen!`;
  bodyStyle.backgroundColor = "rgb(30, 130, 41)";
  input.value = "";
  endRound = true;
};
const playerLost = function () {
  toggleHide("show", "text");
  switchImg(0, "show");
  switchImg(1, "hide");
  resultText.textContent = `Leider verloren! Das Wort wäre "${
    firstLetter + chWord.slice(1, chWord.length)
  }" gewesen.`;
  countDText.textContent = 0;
  bodyStyle.backgroundColor = "rgb(166, 35, 35)";
  input.value = "";
};
initial();

// on submit
submitBtn.addEventListener("click", function () {
  if (endRound === false) {
    chLetter = input.value.toLowerCase();

    // if countD is greater 1 and the word contains the guessed letter
    if (countD > 0) {
      if (chWord.includes(chLetter)) {
        for (let i = 0; i < asterix.length; i++) {
          // remove asterix and insert letter
          if (chWord[i] === chLetter)
            asterix =
              asterix.slice(0, i) +
              chLetter +
              asterix.slice(i + 1, asterix.length);
        }
        // write first letter big
        if (asterix[0] === chLetter)
          asterix = firstLetter + asterix.slice(1, asterix.length);

        // show result texts
        toggleHide("hide", "wrong");
        toggleHide("show", "text");
        resultText.textContent = `Das Wort ist ${asterix}`;
        input.value = "";
        input.focus();
      }
      // if word doesn't contain the chosen letter
      else {
        countD--;
        if (countD === 0) playerLost();
        countDText.textContent = countD;
        toggleHide("hide", "text");
        toggleHide("show", "wrong");
        switchImg(countD, "show");
        switchImg(countD + 1, "hide");

        // add li Element to ul, which contains the chosen letter
        addLi(`${chLetter}`);

        // hide the message after 2.5 seconds
        setTimeout(
          () => {
            toggleHide("hide", "wrong");
            toggleHide("show", "text");
          },
          countD !== 0 ? 2500 : 0
        );
        input.value = "";
        input.focus();
      }
      // repeat until asterix does't contain '*'
      if (!asterix.includes("*")) playerWon();
    } else playerLost();
  }
});
// on restart
restartBtn.addEventListener("click", initial);
