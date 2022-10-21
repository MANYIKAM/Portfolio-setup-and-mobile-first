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

// Mobile pop up window

document.getElementById('pop-ton').innerHTML = projects[index].title;
  document.getElementById('candy').innerHTML = projects[index].cat[index];
  document.getElementById('counter1').innerHTML = projects[index].cat[0];
  document.getElementById('counter2').innerHTML = projects[index].cat[1];
  document.getElementById('ton-img').src = projects[index].img;
  document.getElementById('mesg').innerHTML = projects[index].desc;
  document.getElementById('live1').setAttribute('onclick', `${projects[index].liveurl}`);
  document.getElementById('easy-see').setAttribute('onclick', `${projects[index].githubsrc}`);
  // get all list items and change values
  const items = document.getElementById('orig').querySelectorAll('.jhs');
  items[0].innerHTML = projects[index].lang[0];
  items[1].innerHTML = projects[index].lang[1];
  items[2].innerHTML = projects[index].lang[2];
};

function closeDemo() {
  document.getElementById('project-pop').style.display = 'none';
  bodyS.classList.remove('stopScroll');
}

function prepareProject(projects) {
  const worksection = document.querySelector('.grid-container');
  for (let i = 0; i < projects.length; i += 1) {
    const con = document.createElement('div');
    if (i === 1) {
      con.classList.toggle('works-flex-container', 'flex-flip');
      const img = document.createElement('img');
      img.src = 'hi';
      img.alt = 'hi';
      img.classList.toggle('photo');
      const contdetails = document.createElement('div');
      const title = document.createElement('h2');
      title.classList.add('pop-ton');
      const history1 = document.createElement('h6');
      history1.classList.add('tab-a');
      history1.setAttribute('id', 'candy');
      const history2 = document.createElement('h6');
      history2.classList.add('yale-a');
      const history3 = document.createElement('h6');
      history3.classList.add('year-a');
    }