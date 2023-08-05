/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "Messi",
    "Samuel"
  ];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function pickRandom() {
    const position1 = Math.floor(Math.random() * who.length);

    const position2 = Math.floor(Math.random() * action.length);

    const position3 = Math.floor(Math.random() * what.length);

    const position4 = Math.floor(Math.random() * when.length);

    return (
      who[position1] +
      " " +
      action[position2] +
      " " +
      what[position3] +
      " " +
      when[position4]
    );
  }

  console.log(pickRandom());

  let parrafo = document.getElementById("excuse");
  parrafo.innerText = pickRandom();
  console.log(parrafo);
};

// let position1 = Math.floor(Math.random() * who.length);

// let position2 = Math.floor(Math.random() * action.length);

// let position3 = Math.floor(Math.random() * what.length);

// let position4 = Math.floor(Math.random() * when.length);
