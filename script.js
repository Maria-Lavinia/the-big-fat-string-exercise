"use strict";

window.addEventListener("load", start);
let input;
let selected;

function start() {
  console.log("start()");
  document.querySelector("button").addEventListener("click", checkdropdown);
}

function checkdropdown() {
  console.log("checkdropdown()");
  selected = document.querySelector("select").value;
  readInput();
}

function readInput() {
  console.log("readInput()");
  input = document.querySelector("#input").value;
  findSelectedFunction();
}

function findSelectedFunction() {
  console.log("findChosenFunction()");
  console.log(selected);
  if (selected === "1") {
    option1();
  } else if (selected === "2") {
    option2();
  } else if (selected === "3") {
    option3();
  } else if (selected === "4") {
    option4();
  } else if (selected === "5") {
    option5();
  } else if (selected === "6") {
    option6();
  } else if (selected === "7") {
    option7();
  } else if (selected === "8") {
    option8();
  }
}

function option1() {
  let firstName = input.substring(0, 1).toUpperCase() + input.substring(1, 700).toLowerCase();
  document.querySelector("#output").value = firstName;
}

function option2() {
  let firstName = input.substring(input.indexOf(" "), input.lastIndexOf());
  document.querySelector("#output").value = firstName;
}

function option3() {
  const firstSpace = input.indexOf(" ");
  let firstName = input.substring(0, firstSpace).length;
  document.querySelector("#output").value = firstName;
}

function option4() {
  const firstSpace = input.indexOf(" ");
  const lastSpace = input.lastIndexOf(" ");
  let firstName = input.substring(firstSpace + 1, lastSpace).trim();
  document.querySelector("#output").value = firstName;
}

function option5() {
  if (input.endsWith(".jpg")) {
    document.querySelector("#output").value = "JPG file";
  } else if (input.endsWith(".png")) {
    document.querySelector("#output").value = "PNG file";
  } else {
    document.querySelector("#output").value = "Neither JPG or PNG file";
  }
}

function option6() {
  const inputLength = input.length;
  const stars = input.slice(inputLength).padStart(inputLength, "*");
  document.querySelector("#output").value = stars;
}

function option7() {
  let firstName = input.substring(0, 2).toLowerCase() + input[2].toUpperCase() + input.substring(3, 500).toLowerCase();
  document.querySelector("#output").value = firstName;
}

// function option8(){
//     const dash = input.search(“-“);
// const capitalLetter = input.slice(dash).toUpperCase;
// }
