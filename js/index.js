// Navbar Animations
gsap.from("nav", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power3.inOut",
});

// Header Animations
gsap.from(
  ["header section.one figure p", "header section.one figure figcaption"],
  {
    duration: 1.5,
    y: -100,
    opacity: 0,
    ease: "power3.out",
    stagger: 1,
    delay: 1,
  }
);

gsap.from("header section.two img", {
  duration: 1.5,
  x: 200,
  opacity: 0,
  ease: "power3.out",
  delay: 3,
});
