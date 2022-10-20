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
contactForm.addEventListener('submit', (event) => {
  // eslint-disable-next-line quotes, no-useless-escape
  const pattern = "[a-z0-9-]+@[a-z0-9-]+\.[a-z0-9-.]+";
  const emailValue = email.value;
  if (emailValue.match(pattern)[0] !== emailValue) {
    errorMsg.textContent = 'Details not submitted, Please resubmit using LOWERCASE letters on email,!';
    errorMsg.style.display = 'block';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
    errorMsg.style.display = 'none';
  }
});