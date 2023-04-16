// Shorthand function for document.querySelector
const $ = (selector) => document.querySelector(selector);

// Get menu-bars element by its ID
const menuBars = $('#menu-bars');
// Get overlay element by its ID
const overlay = $('#overlay');
// Get nav items using their IDs and map them to an array
const navItems = ['#nav-1', '#nav-2', '#nav-3', '#nav-4', '#nav-5'].map($);

// Function to control navigation animation, takes two directions as parameters
const navAnimation = (direction1, direction2) => {
  // For each nav item, replace the class with a new one based on the given directions
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`);
  });
};

// Function to toggle navigation
const toggleNav = () => {
  // Toggle 'change' class for menuBars element
  menuBars.classList.toggle('change');
  // Toggle 'overlay-active' class for overlay element based on the existence of 'overlay-slide-right'
  overlay.classList.toggle('overlay-active', !overlay.classList.contains('overlay-slide-right'));

  // Check if overlay has the 'overlay-active' class
  if (overlay.classList.contains('overlay-active')) {
    // Replace 'overlay-slide-left' with 'overlay-slide-right' for overlay element
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Call navAnimation function to animate nav items (in)
    navAnimation('out', 'in');
  } else {
    // Replace 'overlay-slide-right' with 'overlay-slide-left' for overlay element
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Call navAnimation function to animate nav items (out)
    navAnimation('in', 'out');
  }
};

// Add 'click' event listener to menuBars element, calling toggleNav function
menuBars.addEventListener('click', toggleNav);
// Add 'click' event listener to each nav item, calling toggleNav function
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});
