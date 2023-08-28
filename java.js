let secretno = Math.trunc(Math.random() * 20 + 1);
// console.log(secretno);
let score = 5;
let highscore = 0;
document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".text").value);
  console.log(guess);
  if (score !== 0) {
    if (!guess) {
      document.querySelector(".guess").textContent = "No number entered!";
    } else if (guess === secretno) {
      document.querySelector(".guess").textContent = "you won the match";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".hscore").textContent = "highscore:" + score;
      if (score > highscore) {
        highscore = score;
        document.querySelector(".hscore").textContent =
          "highscore:" + highscore;
      }
    } else if (guess > secretno) {
      document.querySelector(".guess").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = "score" + ":" + score;
    } else if (guess < secretno) {
      document.querySelector(".guess").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = "score" + ":" + score;
    }
  } else {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".guess").textContent = "you cannot play any more";
  }
});
document.querySelector(".agains").addEventListener("click", function () {
  document.querySelector(".guess").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = "score:5";
  score = 5;
  secretno = Math.trunc(Math.random() * 20 + 1);
  console.log(secretno);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".text").value = "";
});
