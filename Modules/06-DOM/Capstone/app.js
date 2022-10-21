// Select the header element
const navBar = document.querySelector('.header')
let lastScrollY = window.scrollY;
                
// Event listener: Mouse move                
// When user hovers around the top area, show the header
document.addEventListener('mousemove', throttle(mouseMoveEventAction, 200));

function throttle(callback, interval) {
  let enableCall = true;

  return function(...args) {
    if (!enableCall) return;

    enableCall = false;
    callback.apply(this, args);
    setTimeout(() => enableCall = true, interval);
  }
}

function mouseMoveEventAction(e) {
	navPanel(isInsideThreshold(e.clientY));
}

function navPanel(isActive) {
	const navBar = document.querySelector('.header');

  if (isActive || lastScrollY === 0) {
    navBar.style.visibility = "visible";
  } else {
    navBar.style.visibility = "hidden"; 
  }
}

function isInsideThreshold(cursorY) {
	const threshold = 540;
	const clientHeight = document.documentElement.clientHeight;
  return cursorY < (clientHeight - threshold);
}
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header
document.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        navBar.style.visibility = "hidden";
    } else {
        navBar.style.visibility = "visible";
    }

    lastScrollY = window.scrollY;
})

function mousemove(event){
    if (event.clientY < 100) {
        navBar.classList.remove('hidden') 
    }
}