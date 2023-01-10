"use strict";

// Score
let scoreHomeEl = document.getElementById("score-home");
let scoreAwayEl = document.getElementById("score-away");

// Home
let addOneHomeEl = document.getElementById("add-one-home");
let addTwoHomeEl = document.getElementById("add-two-home");
let addThreeHomeEl = document.getElementById("add-three-home");
let resultHome = 0;

// Guest
let addOneAwayEl = document.getElementById("add-one-away");
let addTwoAwayEl = document.getElementById("add-two-away");
let addThreeAwayEl = document.getElementById("add-three-away");
let resultAway = 0;

// Adding points to HOME
function addOneHome() {
  resultHome += 1;
  scoreHomeEl.textContent = resultHome;
}

function addTwoHome() {
  resultHome += 2;
  scoreHomeEl.textContent = resultHome;
}

function addThreeHome() {
  resultHome += 3;
  scoreHomeEl.textContent = resultHome;
}

// Adding points to AWAY
function addOneAway() {
  resultAway += 1;
  scoreAwayEl.textContent = resultAway;
}

function addTwoAway() {
  resultAway += 2;
  scoreAwayEl.textContent = resultAway;
}

function addThreeAway() {
  resultAway += 3;
  scoreAwayEl.textContent = resultAway;
}
