"use strict";

// Score
let scoreHomeEl = document.getElementById("score-home");
let scoreGuestEl = document.getElementById("score-guest");

// Home
let addOneHomeEl = document.getElementById("add-one-home");
let addTwoHomeEl = document.getElementById("add-two-home");
let addThreeHomeEl = document.getElementById("add-three-home");
let resultHome = 0;

// Guest
let addOneGuestEl = document.getElementById("add-one-guest");
let addTwoGuestEl = document.getElementById("add-two-guest");
let addThreeGuestEl = document.getElementById("add-three-guest");
let resultGuest = 0;

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

// Adding points to GUEST
function addOneGuest() {
  resultGuest += 1;
  scoreGuestEl.textContent = resultGuest;
}

function addTwoGuest() {
  resultGuest += 2;
  scoreGuestEl.textContent = resultGuest;
}

function addThreeGuest() {
  resultGuest += 3;
  scoreGuestEl.textContent = resultGuest;
}
