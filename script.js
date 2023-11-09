const button = document.getElementById("advices");
const id = document.getElementById("title");
const text = document.getElementById("text");
button.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((json) => {
      id.innerText = "Advice #" + json.slip.id;
      text.innerText = json.slip.advice;
    });
});
