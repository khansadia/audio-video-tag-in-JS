const audio = document.querySelector("audio");

// audio.addEventListener("play", () => {
//   console.log("Audio is now playing");
// });

// audio.addEventListener("pause", () => {
//   console.log("Audio is now paused");
// });

audio.addEventListener("seeking", () => {
  console.log("Current time has been updated");
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (button.innerText === "Play") {
    audio.play();
    button.innerText = "Pause";
  } else if (button.innerText === "Pause") {
    audio.pause();
    button.innerText = "Play";
  }
});