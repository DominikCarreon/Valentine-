const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");

const moveButton = () => {
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
};

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveButton();
});

// Show Pop-up when YES is clicked
yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close Pop-up when X is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close Pop-up if user clicks outside the white box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});