gsap.registerPlugin(ScrollTrigger);

const panels = document.querySelectorAll(".panel");
const totalPanels = panels.length;
const scrollWidth = (totalPanels - 1) * window.innerWidth;

gsap.to(".content", {
  x: -scrollWidth, // 向左水平移動
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: () => `+=${scrollWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});