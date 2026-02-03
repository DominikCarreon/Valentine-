const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("loveModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Move NO button
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - noBtn.offsetWidth));
  const y = Math.floor(Math.random() * (window.innerHeight - noBtn.offsetHeight));
  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Show Modal on YES click
yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close Modal when clicking X
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close Modal when clicking outside the box
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}