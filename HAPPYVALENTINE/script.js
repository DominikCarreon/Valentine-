const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  // Calculate random positions within the visible window
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));

  // Switch to fixed positioning so it can move anywhere on screen
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  alert("I LOVE YOU! 💕🐻🐼");
});