//Navigation constants
const sections = document.querySelectorAll('.section')
const liAnchor = document.querySelectorAll('.liAnchor')

//QuackToggle constants
const quack = new Audio('./assets/075176_duck-quack-40345.mp3')
const quackBox = document.getElementById('quackBox')

//checks if the current section is in the viewport and adds the "active" class to the according anchor tag in the navigation bar
function highlightSections() {
    sections.forEach((section, index) =>{
        const rect = section.getBoundingClientRect();

        //checks if the middleline of the viewport is in the section (window.innerheight * 0.5 is the middle of the viewport)
          if(rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5) {
            //then it adds/removes the active class
            liAnchor.forEach(li => li.classList.remove('active'))
            liAnchor[index].classList.add('active')  
    }
    })
}

//This eventlistener reacts to scrolling and calls the highlightSection function
window.addEventListener('scroll', highlightSections)

highlightSections()

//initialy the check needs to be false
let quackCheck = false

//adds/removes an eventlistener to the whole doument if the checkbox is toggled 
quackBox.addEventListener('change', (e) =>{
    quackCheck = e.target.checked

    if(quackCheck){
        document.addEventListener('click', quackCall)
    }else{
        document.removeEventListener('click', quackCall)
    }
})

//just a helper for the eventlistener to call the sound
function quackCall(){
    quack.currentTime = 0.3;
    quack.play();
}

