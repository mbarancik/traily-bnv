const cards = document.getElementsByClassName("card-inside");
const borders = document.getElementsByClassName("card-border");

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

for(const card of cards) {
  card.addEventListener("mousemove", e => handleMouseMove(e));
};