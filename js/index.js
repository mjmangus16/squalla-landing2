const section1_1Container = document.querySelector(".section1-1");
const section1_2Container = document.querySelector(".section1-2");
const section1_3Container = document.querySelector(".section1-3");

const learnMoreButton1 = document.getElementById("learn-more-1");
const learnMoreButton2 = document.getElementById("learn-more-2");
const learnMoreButton3 = document.getElementById("learn-more-3");

learnMoreButton1.addEventListener("click", () => {
  section1_1Container.classList.add("section1-1-active");
  section1_2Container.classList.remove("section1-2-active");
  section1_3Container.classList.remove("section1-3-active");
});

learnMoreButton2.addEventListener("click", () => {
  section1_2Container.classList.add("section1-2-active");
  section1_1Container.classList.remove("section1-1-active");
  section1_3Container.classList.remove("section1-3-active");
});

learnMoreButton3.addEventListener("click", () => {
  section1_3Container.classList.add("section1-3-active");
  section1_1Container.classList.remove("section1-1-active");
  section1_2Container.classList.remove("section1-2-active");
});
