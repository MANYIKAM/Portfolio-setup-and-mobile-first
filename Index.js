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