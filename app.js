//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//                                       Global Constants / Variables
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//Navigation constants
const sections = document.querySelectorAll(".section");
const liAnchor = document.querySelectorAll(".liAnchor");

//Mobile navigation
const mobileMenuBtn = document.querySelector(".mobileMenuBtn");
const mobileNav = document.getElementById("mobileNav");

const mobileliAnchor = document.querySelectorAll('mobileliAnchor')

//QuackToggle constants
const quack = new Audio("./assets/075176_duck-quack-40345.mp3");
const quackBox = document.getElementById("quackBox");
//initialy the check needs to be false
let quackCheck = false;

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//                                       Header / Section Animation
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//checks if the current section is in the viewport and adds the "active" class to the according anchor tag in the navigation bar
function highlightSections() {
  sections.forEach((section, index) => {
    //getBoundingClientRect() gibt die position der section innerhalb des viewport wieder
    const rect = section.getBoundingClientRect();

    //checks if the middleline of the viewport is in the section (window.innerheight * 0.5 is the middle of the viewport)
    if (
      rect.top < window.innerHeight * 0.5 &&
      rect.bottom > window.innerHeight * 0.5
    ) {
      //then it adds/removes the active class
      liAnchor.forEach((li) => li.classList.remove("active"));
      liAnchor[index].classList.add("active");
      sections.forEach((sec) => sec.classList.remove("active"));
      sections[index].classList.add("active");
    }
  });
}

//This eventlistener reacts to scrolling and calls the highlightSection function
window.addEventListener("scroll", highlightSections);

highlightSections();

//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//                                       Quacksound Easteregg
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//adds/removes an eventlistener to the whole doument if the duck got clicked
quackBox.addEventListener("click", (e) => {
  quackCheck = !quackCheck;

  if (quackCheck) {
    document.addEventListener("click", quackCall);
    quackBox.style.filter = 'invert()'
  } else {
    document.removeEventListener("click", quackCall);
    quackBox.style.filter = 'unset'
    e.stopPropagation()
    e.stopImmediatePropagation()
  }
});

//just a helper for the eventlistener to call the sound
function quackCall() {
  quack.currentTime = 0.3;
  quack.play();
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//                            Mobile Hamburger Button and eventlisteners
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

mobileMenuBtn.addEventListener("click", (e) => {
  if (!mobileNav.classList.contains("active")) {
    mobileNav.classList.add("active");
  } else {
    mobileNav.classList.remove("active");
  }
  e.stopPropagation();
});

//click outside to close
mobileNav.addEventListener('click', (e) =>{
    if(e.target = mobileliAnchor){
        mobileNav.classList.remove("active");
    }
    e.stopPropagation()
})

document.addEventListener("click", (e) => {
  mobileNav.classList.remove("active");
});

// close the mobile nav if a anchor is clicked

mobileliAnchor.forEach((anchor)=>{
    anchor.addEventListener('click', () =>{
        mobileNav.classList.remove("active");
    })
})
