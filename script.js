const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

const projects = document.querySelectorAll(".project");
const btnLeft = document.querySelector(".slider_btn--left");
const btnRight = document.querySelector(".slider_btn--right");

const tabContainer = document.querySelector(".tab_container");
const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab_content");

// TASKS

/////////////////////////////////////////////////////////////
// Sticky Navigation Bar

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

/////////////////////////////////////////////////////////////
// Slider Component to view projects

const displayProject = function (projectCount) {
  projects.forEach((project, index) => {
    project.style.transform = `translateX(${100 * (index - projectCount)}%)`;
  });
};
displayProject(0);

let curProject = 0;
const maxProject = projects.length;

const nextProject = function () {
  curProject === maxProject - 1 ? (curProject = 0) : curProject++;
  displayProject(curProject);
};

const prevProject = function () {
  curProject === 0 ? (curProject = maxProject - 1) : curProject--;
  displayProject(curProject);
};

btnRight.addEventListener("click", nextProject);
btnLeft.addEventListener("click", prevProject);

/////////////////////////////////////////////////////////////
// Move Slider automatically after 4s

//////////////////////////////////////////////////////////////
// Displaying project descriptions and blur background

const mouseEnter = function (e) {
  e.preventDefault();
  const targetEl = this.querySelector(".project_text");
  targetEl.classList.add("animation_fadeIn");
  targetEl.classList.remove("animation_fadeOut");
  targetEl.style.zIndex = "3";
};

const mouseLeave = function (e) {
  e.preventDefault();
  const targetEl = this.querySelector(".project_text");
  targetEl.classList.add("animation_fadeOut");
  targetEl.classList.remove("animation_fadeIn");
  targetEl.style.zIndex = "2";
};

projects.forEach((project) => {
  project.addEventListener("mouseenter", mouseEnter);
  project.addEventListener("mouseleave", mouseLeave);
});
//////////////////////////////////////////////////////////////
// Activating Tabs in My Journey

tabContainer.addEventListener("click", function (e) {
  const clickedTab = e.target.closest(".tab");
  if (!clickedTab) return;

  // Removing and Adding ACTIVE class from tabs
  tabs.forEach((tab) => tab.classList.remove("tab--active"));
  clickedTab.classList.add("tab--active");

  // Removing and Adding ACTIVE class from tabs
  tabContent.forEach((content) =>
    content.classList.remove("tab_content--active")
  );

  let tabNum = clickedTab.dataset.tab;
  const targetContent = document.querySelector(`.tab_content--${tabNum}`);
  targetContent.classList.add("tab_content--active");
});

/////////////////////////////////////////////////////////////
// 1. (who-am-I) Insert a video message
// 2. (window) Load each section after 25% scroll
