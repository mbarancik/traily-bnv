const mnts = document.querySelectorAll(".mnt");
const mntBottomFills = document.querySelectorAll(".mnt-bottom-fill");
const mntFooter = document.querySelector(".footer-mnt");

const animateMnts = () => {
  const scrollY = window.scrollY;
  const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const scrollYBottom = maxScrollY - scrollY;

  mnts.forEach(mnt => {
    const speed = Number(mnt.dataset.speed || 0);
    mnt.style.height = `calc(var(--mnt-init-height) + ${scrollY * -speed}px)`;
  });

  if (mntFooter) {
    const speed = Number(mntFooter.dataset.speed || 0);
    const translateScroll = Math.max(0, scrollYBottom - 50);
    mntFooter.style.transform = `translate3d(0, ${translateScroll * speed + 1}px, 0)`;
  }
}

window.addEventListener("scroll", () => animateMnts());
window.addEventListener("resize", () => animateMnts());
animateMnts();