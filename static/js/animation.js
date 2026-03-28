const mnts = document.querySelectorAll(".mnt");
const mntBottomFills = document.querySelectorAll(".mnt-bottom-fill");
const mntFooter = document.querySelector(".footer-mnt");
let latestScrollY = window.scrollY;
let latestInnerHeight = window.innerHeight;
let isTicking = false;

const animateMnts = () => {
  const scrollY = latestScrollY;
  const maxScrollY = Math.max(0, document.documentElement.scrollHeight - latestInnerHeight);
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
};

const queueAnimation = () => {
  if (isTicking) {
    return;
  }

  isTicking = true;
  requestAnimationFrame(() => {
    animateMnts();
    isTicking = false;
  });
};

window.addEventListener("scroll", () => {
  latestScrollY = window.scrollY;
  queueAnimation();
}, { passive: true });

window.addEventListener("resize", () => {
  latestInnerHeight = window.innerHeight;
  latestScrollY = window.scrollY;
  queueAnimation();
}, { passive: true });

queueAnimation();