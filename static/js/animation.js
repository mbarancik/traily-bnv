const mnts = document.querySelectorAll(".mnt");
const mntBottomFills = document.querySelectorAll(".mnt-bottom-fill");
const mntFooter = document.querySelector(".footer-mnt");

const animateMnts = () => {
  const scrollY = window.scrollY;
  const scrollYBottom = window.scrollMaxY - window.scrollY;

  mnts.forEach(mnt => {
    const speed = mnt.dataset.speed || 0;
    mnt.style.height = `calc(var(--mnt-init-height) + ${scrollY * -speed}px)`;
  });

  if (mntFooter) {
    const speed = mntFooter.dataset.speed || 0;
    const translateScroll = Math.max(0, scrollYBottom - 50)
    mntFooter.style.transform = `translateY(${translateScroll * speed + 1}px)`;
  }
}

window.addEventListener("scroll", () => animateMnts());
animateMnts();