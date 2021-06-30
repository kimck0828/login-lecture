"use strict";

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");

signInBtn.addEventListener("click", () => {
  const req = {
    id: id.value,
    psword: psword.value,
  };
  console.log(JSON.stringify(req));

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else [alert(res.msg)];
    })
    .catch((err) => console.error("エラー発生"));
});

signUpBtn.addEventListener("click", () => {
  console.log("sign up");
});
