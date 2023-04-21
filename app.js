const responses = [
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes, definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no"
  ];
  
  const input = document.getElementById("question");
  const button = document.getElementById("shake-button");
  const response = document.getElementById("response");
  
  function shakeBall() {
    const index = Math.floor(Math.random() * responses.length);
    response.textContent = responses[index];
  }
  
  button.addEventListener("click", shakeBall);
  