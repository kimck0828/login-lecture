"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(`id:${req.id}, psword:${req.psword}`);
});
