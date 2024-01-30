// const primaryHeader = document.querySelector(".primary-header");
// const navToggle = document.querySelector(".mobile-nav-toggle");
// const primaryNav = document.querySelector(".primary-navigation");

// navToggle.addEventListener("click", () => {
//   primaryNav.hasAttribute("data-visible")
//     ? navToggle.setAttribute("aria-expanded", false)
//     : navToggle.setAttribute("aria-expanded", true);

//   primaryNav.toggleAttribute("data-visible");
//   primaryHeader.toggleAttribute("data-overlay");
// });

const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  centerMode: true,
  arrows: false,
  responsive: {
    800: {
      dots: false,
    },
  },
});

navToggle.addEventListener("click", () => {
  const isExpanded = primaryNav.hasAttribute("data-visible");

  if (isExpanded) {
    // fold mode
    navToggle.setAttribute("aria-expanded", false);
    primaryNav.removeAttribute("data-visible");
    primaryHeader.removeAttribute("data-overlay");
  } else {
    // expand mode
    navToggle.setAttribute("aria-expanded", true);
    primaryNav.setAttribute("data-visible", "");
    primaryHeader.setAttribute("data-overlay", "");
  }

  // switch to icon mode
  toggleIcons(isExpanded);
});

function toggleIcons(isExpanded) {
  const iconHamburger = document.querySelector(".icon-hamburger");
  const iconClose = document.querySelector(".icon-close");

  if (isExpanded) {
    // 如果是展开状态，则显示 icon-hamburger，隐藏 icon-close
    iconHamburger.style.display = "inline-block";
    iconClose.style.display = "none";
  } else {
    // 如果是折叠状态，则显示 icon-close，隐藏 icon-hamburger
    iconHamburger.style.display = "none";
    iconClose.style.display = "inline-block";
  }
}
