let button = document.getElementById("guessButton");
let countWrong = 0;
let random = Math.round(Math.random() * 10) % 10;
button.addEventListener("click", function () {
  // What happens when you click the button?
  // Hint: Perhaps what happens next in Milestone 4.
  if (countWrong >= 10) return;
  let inputValue = document.getElementById("number").value;
  if (random === +inputValue) {
    document.getElementById("message").style.backgroundColor = "green";
    document.getElementById("message").innerHTML =
      "Yah YOU ARE THE LORD OF THE GUESSES";
      countWrong = 0;
      random = Math.round(Math.random() * 10) % 10;
  } else {
    countWrong++;
    document.getElementById("message").style.backgroundColor = "red";
    let limitMessage = "You have " + (10 - +countWrong) + " guesses left";
    if (random > +inputValue) {
      document.getElementById("message").innerHTML =
        "Your guess was to low, guess higher. " + limitMessage;
    } else {
      document.getElementById("message").innerHTML =
        "Your guess was to hight, guess higher. " + limitMessage;
    }
  }
});
