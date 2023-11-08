const button = document.getElementById("advices");
const id = document.getElementById("title");
const text = document.getElementById("text");
const upper = document.querySelector(".upper");
const lower = document.querySelector(".lower");
const InitialText = document.querySelector(".InitialText");

button.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => {
      id.innerText = "Advice #" + json.slip.id;
      text.innerText = json.slip.advice;
      if (!upper.classList.contains("active")) {
        upper.classList.add("active");
        lower.classList.add("active");
        InitialText.classList.add("inactive");
      }
    });
});
