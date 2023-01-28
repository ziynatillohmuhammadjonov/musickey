const drum = document.querySelectorAll(".drum");
drum.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectSound(e.target.textContent);
    animate(item);
  });
});
document.body.addEventListener("keyup", (e) => {
  selectSound(e.key);
  drum.forEach((item) => {
    if (item.classList[0] == e.key) {
      item.classList.add("pressed");
      setTimeout(() => {
        item.classList.remove("pressed");
      }, 100);
    }
  });
});
function selectSound(letter) {
  switch (letter) {
    case "w":
      playSound("crash");
      break;
    case "a":
      playSound("kick-bass");
      break;
    case "s":
      playSound("snare");
      break;
    case "d":
      playSound("tom-1");
      break;
    case "j":
      playSound("tom-2");
      break;
    case "k":
      playSound("tom-3");
      break;
    case "l":
      playSound("tom-4");
      break;
  }
}
function playSound(sound) {
  let music = new Audio(`./sounds/${sound}.mp3`);
  music.play();
}
function animate(item) {
  item.classList.add("pressed");
  setTimeout(() => {
    item.classList.remove("pressed");
  }, 100);
}
