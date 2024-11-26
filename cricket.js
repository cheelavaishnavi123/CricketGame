const computerChoiceElement = document.getElementById("computer-choice");
const userChoiceElement = document.getElementById("user-choice");

let score = {
  win: 0,
  loose: 0,
  tie: 0,
};
let userchoice;
let computerchoices;

function userChoice(choice) {
  // Set the user choice
  userchoice = choice;
  userChoiceElement.innerText = "Your choice : " + choice;

  // Generate a random choice for the computer (0, 1, or 2)
  let randomnum = Math.random() * 3;
  computerchoice(randomnum);
}

function computerchoice(randomnum) {
  if (randomnum > 0 && randomnum <= 1) {
    computerchoices = "Bat";
    console.log("Computers choice is Bat");
    computerChoiceElement.innerText = "Computer's choice : Bat";
    determineWinner("Bat");
  } else if (randomnum > 1 && randomnum < 2) {
    computerchoices = "Ball";
    console.log("Computers choice is Ball");
    computerChoiceElement.innerText = "Computer's choice : Ball";
    determineWinner("Ball");
  } else {
    computerchoices = "Stump";
    console.log("Computers choice is Stump");
    computerChoiceElement.innerText = "Computer's choice : Stump";
    determineWinner("Stump");
  }
}

function determineWinner(computerChoice) {
  // Check the result based on the game rules
  if (userchoice === computerChoice) {
    document.querySelector("p").innerText = "Oops......, it's a tie 🤐";
    score.tie += 1;
    document.querySelector("body").bgColor = "orange";
  } else if (
    (userchoice === "Bat" && computerChoice === "Stump") ||
    (userchoice === "Ball" && computerChoice === "Bat") ||
    (userchoice === "Stump" && computerChoice === "Ball")
  ) {
    document.querySelector("p").innerText = "Congratulations You won !!! 🥳";
    score.win += 1;
    document.querySelector("body").bgColor = "green";
  } else {
    document.querySelector("p").innerText = "Alaas You lost 🙃";
    score.loose += 1;
    document.querySelector("body").bgColor = "red";
  }
}
