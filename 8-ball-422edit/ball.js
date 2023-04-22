const shakeButton = document.getElementById("shake-button");
const shakingSound = document.getElementById("shaking-sound");
const response = document.getElementById("response");

function getRandomResponse() {
  const responses = [
    "Yes",
    "No",
    "Maybe",
    "It is certain",
    "Without a doubt",
    "Most likely",
    "Don't count on it",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
  ];
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}

shakeButton.addEventListener("click", () => {
  shakingSound.currentTime = 0;
  shakingSound.play();
  shakeButton.classList.add("shaking");
  setTimeout(() => {
    shakeButton.classList.remove("shaking");
    const question = document.getElementById("question").value;
    if (question.trim() === "") {
      response.innerText = "Please enter a question.";
    } else {
      response.innerText = getRandomResponse();
    }
  }, 2000);
});