const steamButton = document.getElementById("steam");
const vkButton = document.getElementById("vk");
const telegramButton = document.getElementById("telegram");
const fly = document.getElementById("fly");

steamButton.addEventListener("click", () => {
  window.location.href = "https://steamcommunity.com/profiles/76561199390685814/";
});

vkButton.addEventListener("click", () => {
  window.location.href = "https://vk.com/carbonarik";
});

telegramButton.addEventListener("click", () => {
  window.location.href = "https://t.me/Karalineverny";
});

fly.addEventListener("click", () => {
  fly.style.display = "none";
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
});

function randomizeFlyPosition() {
  const topPosition = Math.floor(Math.random() * window.innerHeight);
  const leftPosition = Math.floor(Math.random() * window.innerWidth);
  fly.style.top = `${topPosition}px`;
  fly.style.left = `${leftPosition}px`;
}

setInterval(randomizeFlyPosition, 650);
