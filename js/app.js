/**
 * Define Global Variables
 * 
 */


// find and return a list of elements with the tag "section" 
let sections = document.querySelectorAll('section');

//find and return ONE element with an ID of "navbar__list" (ul list)
const navBarList = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

//create elements for nav bar 
function createNavBarElement(section) {

  const newList = document.createElement('li');

  //make anchor tag in every element in the navbar 
  newList.innerHTML =
    `<a href="#${section.id}" class="menu__link"> ${section.getAttribute('data-nav')} </a>`;

  return newList;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav 
function createNav(navList, sections) {

  //create element and add it to nav bar for every section to the nav bar
  for (let section of sections) 
  {
    navList.append(createNavBarElement(section));
  }
}

createNav(navBarList, sections);



// Add class 'active' to section and nav bar element when near top of viewport and when clicked
function makeActive(sections){
  
  for (let section of sections) 
  {
    const box = section.getBoundingClientRect();

    if (box.top <= 150 && box.bottom >= 150) 
    {
      //apply active state on current section and corresponding Nav link
      section.classList.add('active-section');

      //apply active state on current navBar element
      let listItem = document.querySelector(`#navbar__list [href="#${section.id}"]`);
      listItem.classList.add('active-nav-elemnet');

    } else 
    {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove('active-section');
      
      //Remove active state from other navBar elements
      let listItem = document.querySelector(`#navbar__list [href="#${section.id}"]`);
      listItem.classList.remove('active-nav-elemnet');

    }
  }
}

// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll", function () {
  makeActive(sections);
});

// Listening on navBar using click event
document.querySelector("#navbar__list").addEventListener('click', function () {
  makeActive(sections);
});




/**
 * End Main Functions
 * Begin Events
 * 
 */


//listen event on scroll
let navBarMenu = document.querySelector('#navbar__list');

navBarMenu.addEventListener('click', function (event) {
  event.preventDefault();

  // Get the element to scroll to by the link of it
  let scrollTo = document.querySelector(event.target.getAttribute('href'));

  // Scroll to the element smoothly
  scrollTo.scrollIntoView({
    behavior: 'smooth'
  });
});



// Build menu 

// Scroll to section on link click

// Set sections as active