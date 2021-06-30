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
    .catch((err) => console.error("サインイン　エラー発生"));
});

signUpBtn.addEventListener("click", () => {
  console.log("sign up");

  const id = document.querySelector("#signup_id");
  const psword = document.querySelector("#signup_psword");
  const confirmPsword = document.querySelector("#signup_confirm-psword");
  const name = document.querySelector("#signup_name");

  if (!id.value) {
    return alert("IDを入力して");
  }
  if (!psword.value) {
    return alert("パスワードを入力して");
  }
  if (psword.value != confirmPsword.value) {
    return alert("パスワードが一致しない");
  }
  const req = {
    id: id.value,
    psword: psword.value,
    name: name.value,
  };

  console.log(JSON.stringify(req));

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
    .catch((err) => console.error("sサインアップ　エラー発生"));
});
