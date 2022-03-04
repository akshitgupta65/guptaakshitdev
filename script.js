const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

// TASKS

// (window) Load each section after 25% scroll

// Sticky Navigation Bar

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(header);

// Slider Component to view projects

const projects = document.querySelectorAll(".project");
const btnLeft = document.querySelector(".slider_btn--left");
const btnRight = document.querySelector(".slider_btn--right");

const displayProject = function (projectCount) {
  console.log(projectCount);
  console.log(projects.length);
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

//
//
// 2. (who-am-I) Insert a video message

// 3. (my-work) when hover on window, slide the project description from above and blacken the background image
