// TODO: Query for button with an id "theme-button"
const themeButton = document.getElementById("theme-button");
// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
  let themeButton = document.getElementById("theme-button");
   document.body.classList.toggle("dark-mode");
}
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);
// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");

let count = 3;

const addSignature = (person) => {
    // Write your code to manipulate the DOM here
  // const name = document.getElementById("name").value;
  // const hometown = document.getElementById("hometown").value;

  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesContainer = document.querySelector(".signatures");
  signaturesContainer.appendChild(newSignature);

  const oldCounter = document.getElementById("counter");
  if(oldCounter) {
    oldCounter.remove();
  }

  count++;

  const counter = document.createElement("p");
  counter.id = "counter";
  counter.textContent = `🖊️ ${count} people have signed this petition and support this cause.`;

  signaturesContainer.appendChild(counter);

   toggleModal(person);

};

// Add a click event listener to the sign now button here
//signNowButton.addEventListener("click", addSignature);
// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value, 
    email: petitionInputs[2].value
  }
  // TODO: Loop through all inputs
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } 
    else {
      petitionInputs[i].classList.remove('error');
    }

  }

  //validating the email input
  const email = document.getElementById('email');
  if (!email.value.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
  } else {
      email.classList.remove('error');
  }
  // TODO: Validate the value of each input
  if (containsErrors == false) {
    addSignature(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";

    }
    // containsErrors = false;
  }
  // TODO: Call addSignature() and clear fields if no errors
};
signNowButton.addEventListener('click', validateForm);

//Animation Object 
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: '0s',
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
  transition: 'all 2s ease', 
};

const revealableContainers = document.querySelectorAll('.revealable');
const reveal = () => {
  let windowHeight = window.innerHeight;
  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer =  revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    }else {
      revealableContainers[i].classList.remove('active');
    }
    
  }
}

window.addEventListener('scroll', reveal);

function reduceMotion() {
  animation.transition = 'none';
  animation.revealDistance = 50;

  for(let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transition = animation.transition;
    revealableContainers[i].style.transitionDelay = animation.transitionDelay;
  }
}

document.getElementById('reduceMotionButton').addEventListener('click', reduceMotion);


//togglemodal

let scaleFactor = 1;
const modalImage = document.getElementById("modal-image");

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1;
  modalImage.style.transform = `scale(${scaleFactor})`;
};

const modal = document.getElementById("thanks-modal");
const modalContent = document.getElementById("thanks-modal-content");


function toggleModal(person) {
 
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name}!` ;

  const intervalId = setInterval(scaleImage, 500);
 
  setTimeout(() => {
    modal.style.display = "none";
  }, 4000);
}

const closeModalButton = document.getElementById("close-modal-button");

const closeModal = () => {
  modal.style.display = "none";
};

closeModalButton.addEventListener("click", closeModal);
 






