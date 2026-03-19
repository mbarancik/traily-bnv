const cardInsides = document.querySelectorAll(".card-inside");
const borders = document.querySelectorAll(".card-border");

const handleMouseMove = e => {
  const targetCard = e.target;
  const cardRect = targetCard.getBoundingClientRect();

  const cardX = e.clientX - cardRect.x;
  const cardY = e.clientY - cardRect.y;
  targetCard.style.setProperty("--mouse-x", cardX + "px");
  targetCard.style.setProperty("--mouse-y", cardY + "px");

  for(const border of borders) {
    const borderRect = border.parentElement.getBoundingClientRect();

    const borderX = e.clientX - borderRect.x;
    const borderY = e.clientY - borderRect.y;
    border.style.setProperty("--mouse-x", borderX + "px");
    border.style.setProperty("--mouse-y", borderY + "px");

    const perspectiveX = (borderY - borderRect.width / 2) / (borderRect.width / 2) * -1 * 0.3;
    const perspectiveY = (borderX - borderRect.width / 2) / (borderRect.width / 2) * 0.3;
    border.style.setProperty("--perspective-x", perspectiveX + "deg");
    border.style.setProperty("--perspective-y", perspectiveY + "deg");
  };
};

cardInsides.forEach(card => {
  card.addEventListener("mousemove", e => handleMouseMove(e));
});

const cards = document.querySelectorAll(".card");
const backdrop = document.querySelector(".backdrop");
const modals = document.querySelectorAll(".modal");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const trailId = card.dataset.trail;
    console.log(trailId);
    const modal = document.querySelector(`.modal[data-trail="${trailId}"]`);
    if (modal) {
      backdrop.classList.add("active");
      modal.classList.add("active");
    }
  });
});

const closeAllModals = () => {
  backdrop.classList.remove("active");
  modals.forEach(m => m.classList.remove("active"));
};

document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    closeAllModals();
  });
});

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    closeAllModals();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllModals();
  }
});