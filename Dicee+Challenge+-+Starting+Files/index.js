var ran1 = Math.floor(Math.random() * 6) + 1;
var imageRan1 = `images/dice${ran1}.png`;
document.querySelector(".img1").setAttribute("src", imageRan1);

var ran2 = Math.floor(Math.random() * 6) + 1;
var imageRan2 = `images/dice${ran2}.png`;
document.querySelector(".img2").setAttribute("src", imageRan2);

if (ran1 > ran2) {
  document.querySelector("h1").innerHTML = "Player1 Win! 🚩";
} else if (ran1 < ran2) {
  document.querySelector("h1").innerHTML = "🚩Player2 Win!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw";
}
