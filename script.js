let funMessages = [
  "💖 CONGRATS ONLY TWO MORE WEEKS TILL THE END OF THE SEMESTER 💖",
  "🔥 YOU'RE DOING AMAZING SWEETIE 🔥",
  "🍪 GO DRINK WATER + GET A SNACK 🍪",
  "🌈 WE GETTING STRAIGHT A'S YALL COME ON!🌈"
];

let funIndex = 0;

function haveFun() {
  let heading = document.getElementById("facts-heading");

  heading.innerHTML = funMessages[funIndex];

  funIndex = (funIndex + 1) % funMessages.length;
}