"use strict";

const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");

signInBtn.addEventListener("click", () => {
  const id = document.querySelector("#id");
  const psword = document.querySelector("#psword");

  const req = {
    id: id.value,
    psword: psword.value,
  };

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
    .catch((err) => console.error("サインイン　エラー発生"));
});

signUpBtn.addEventListener("click", () => {
  const id = document.querySelector("#signup_id");
  const psword = document.querySelector("#signup_psword");
  const confirmPsword = document.querySelector("#signup_confirm-psword");
  const name = document.querySelector("#signup_name");

  const req = {
    id: id.value,
    psword: psword.value,
    confirmPsword: confirmPsword.value,
    name: name.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else [alert(res.msg)];
    })
    .catch((err) => console.error("サインアップ　エラー発生"));
});
