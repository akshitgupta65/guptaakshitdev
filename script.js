const nav = document.querySelector(".nav");
const header = document.querySelector(".header");

// TASKS

// 1. (window) Load each section after 25% scroll

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

// 2. (who-am-I) Insert a video message, also make some space for it so that it doesnot ruin the layout of the page after video has been loaded

// 3. (my-work) when hover on window, slide the project description from above and blacken the background image

// 4. (my-work) add all projects in a row (100,200,300,400,...)

// 5. (my-work) to view my projects create a slider, when user clicks right button, slide the slider to left and vice versa
