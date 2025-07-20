const rainContainer = document.getElementById("rain-container");

function createRaindrop() {
  const drop = document.createElement("div");
  drop.classList.add("raindrop");

  // لون عشوائي أحمر أو أبيض
  const isRed = Math.random() > 0.5;
  drop.style.backgroundColor = isRed ? "red" : "white";

  // تحديد الموضع والحجم والسرعة
  drop.style.left = Math.random() * window.innerWidth + "px";
  const duration = 2 + Math.random() * 3;
  drop.style.animationDuration = duration + "s";
  const size = 4 + Math.random() * 4;
  drop.style.width = size + "px";
  drop.style.height = size + "px";

  rainContainer.appendChild(drop);

  setTimeout(() => {
    rainContainer.removeChild(drop);
  }, duration * 1000);
}

// استمرار تساقط المطر
setInterval(createRaindrop, 100);

// ✅ تشغيل الصوت بعد أول تفاعل
document.addEventListener("click", () => {
  const audio = document.getElementById("birthday-audio");
  if (audio) {
    audio.play().catch((e) => {
      console.log("Autoplay prevented:", e);
    });
  }
}, { once: true });