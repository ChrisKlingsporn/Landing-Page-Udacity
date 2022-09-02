/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('[data-nav]');
const header = document.getElementsByClassName('main__hero');
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  const navList = document.getElementById('navbar__list');
  sections.forEach((section) => {
    const link = section.dataset.nav;
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.setAttribute('class', 'menu__link');
    navLink.setAttribute('href', `#${section.id}`);
    navLink.innerHTML = link;
    navItem.append(navLink);
    navList.appendChild(navItem);
  });
}
// Add class 'active' to section when near top of viewport
function makeActive(e) {
  sections.forEach((section) => {
    const position = section.getBoundingClientRect();
    const sectionId = section.getAttribute('id');
    if (position.top <= 150 && position.bottom >= 150) {
      document.querySelector(`[href='#${sectionId}']`).classList.add('active');
      section.classList.add('your-active-class');
    } else {
      document
        .querySelector(`[href='#${sectionId}']`)
        .classList.remove('active');
      section.classList.remove('your-active-class');
    }
  });
}
// Scroll to anchor ID using scrollTO event
function scrollToSection(e) {
  const navigation = document.querySelectorAll('.menu__link');

  navigation.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const navItem = e.target;

      const element = document.querySelector(navItem.getAttribute('href'));

      scrollBy({
        top: element.getBoundingClientRect().top,
        behavior: 'smooth',
      });
    });
  });
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  console.log('DOM Loaded');
  buildNav();
});
// Scroll to section on link click
document.addEventListener('click', (e) => {
  // e.preventDefault();
  scrollToSection(e);
});
// Set sections as active
document.addEventListener('scroll', (e) => {
  e.preventDefault();
  makeActive(e);
});
