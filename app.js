const a = document.querySelector("#A");
const b = document.querySelector("#B");
const rounds = document.querySelectorAll(".dropdown-item");
const player1 = document.querySelector("#button1");
const player2 = document.querySelector("#button2");
const reset = document.querySelector("#reset");
const roundname = document.querySelector("#dropdownMenuButton1");
let scoreA = 0;
let scoreB = 0;
let isGameOver = false;
for (round of rounds) {
  round.addEventListener("click", change);
  round.addEventListener("click", anew);
}

function change() {
  roundname.innerText = this.innerText;
}

player1.addEventListener("click", () => {
  if (!isGameOver && roundname.innerText != "Select Rounds") {
    scoreA++;
  }
  if (scoreA == roundname.innerText) {
    a.innerText = scoreA;
    a.classList.add("text-success");
    b.classList.add("text-danger");
    isGameOver = true;
    player1.disabled = true;
    player2.disabled = true;
  }
  if (scoreA < roundname.innerText) {
    a.innerText = scoreA;
  }
});
player2.addEventListener("click", () => {
  if (!isGameOver && roundname.innerText != "Select Rounds") {
    scoreB++;
  }
  if (scoreB == roundname.innerText) {
    b.innerText = scoreB;
    b.classList.add("text-success");
    a.classList.add("text-danger");
    isGameOver = true;
    player1.disabled = true;
    player2.disabled = true;
  }
  if (scoreB < roundname.innerText) {
    b.innerText = scoreB;
  }
});
reset.addEventListener("click", anew);
function anew() {
  scoreA = scoreB = 0;
  a.innerText = 0;
  b.innerText = 0;
  a.classList.remove("text-success", "text-danger");
  b.classList.remove("text-success", "text-danger");
  if (this == reset) {
    roundname.innerText = "Select Rounds";
  }
  isGameOver = false;
  player1.disabled = false;
  player2.disabled = false;
}
