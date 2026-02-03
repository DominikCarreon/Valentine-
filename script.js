const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 50;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener("click", () => {
  alert("I LOVE YOU! 💕🐻🐼");
});
