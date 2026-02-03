const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const modal = document.getElementById("loveModal");
const closeBtn = document.querySelector(".close");

// Move NO button logic
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

// Show custom pop-up when YES is clicked
yesBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close the pop-up
closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const music = document.getElementById("valentineMusic");

// Previous code for moveButton and createHeart remains the same...

// Updated YES button action
yesBtn.addEventListener("click", () => {
  // Show the modal
  modal.style.display = "flex";
  
  // Play the music
  music.play().catch(error => {
    console.log("Music play was prevented by browser. Click anywhere to play.");
  });
});

music.volume = 0;
music.play();
let vol = 0;
let interval = setInterval(() => {
    if (vol < 1) {
        vol += 0.1;
        music.volume = vol.toFixed(1);
    } else {
        clearInterval(interval);
    }
}, 200);