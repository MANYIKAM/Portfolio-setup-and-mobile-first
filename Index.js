document.querySelector('.nav-menu .hamburger').addEventListener('click', () => {
  document.querySelector('.nav-menu').style.setProperty('left', '-100%');
});

document.querySelectorAll('.nav-item').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.nav-menu').style.setProperty('left', '-100%');
  });
});

document.querySelector('.hamburger.top').addEventListener('click', () => {
  document.querySelector('.nav-menu').style.setProperty('left', '0');
});

// Contact form validation
const email = document.getElementById('email');
const contactForm = document.querySelector('#contact-info');
const errorMsg = document.querySelector('#error-message');
let emailValue = '';

contactForm.addEventListener('submit', (event) => {
  emailValue = email.value;
  if (emailValue.toLowerCase() !== emailValue) {
    errorMsg.textContent = 'Details not submitted, Please resubmit using LOWERCASE letters on email,!';
    errorMsg.style.display = 'block';
    event.preventDefault();
  }
});