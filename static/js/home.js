const heroTitle = document.querySelector(".hero-title");
const heroTitleLetters = heroTitle.textContent.split("");
heroTitle.textContent = heroTitleLetters.shift();

const typeWriter = setInterval(() => {
  if (heroTitleLetters.length > 0) {
    heroTitle.textContent += heroTitleLetters.shift();
  } else {
    clearInterval(typeWriter);
  };
}, 100);