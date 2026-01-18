// YEAR
document.getElementById('year').textContent = new Date().getFullYear();

// TYPING ANIMATION
const text = ['Web Developer', 'Content Creator', 'Front-End Designer'];
let i = 0, j = 0, current = '', deleting = false;
const typing = document.getElementById('typing');

function typeLoop() {
  if (!typing) return;
  if (!deleting && j <= text[i].length) {
    current = text[i].slice(0, j++);
  } else if (deleting && j >= 0) {
    current = text[i].slice(0, j--);
  }
  typing.textContent = current;
  if (j === text[i].length) deleting = true;
  if (j === 0 && deleting) { deleting = false; i = (i + 1) % text.length; }
  setTimeout(typeLoop, deleting ? 60 : 100);
}
typeLoop();

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('active'); });
}, { threshold:0.15 });
reveals.forEach(sec => observer.observe(sec));

// NAVBAR INDICATOR
const navLinks = document.querySelectorAll('.nav-links a');
const indicator = document.getElementById('indicator');

function updateIndicator(el) {
  indicator.style.width = el.offsetWidth + 'px';
  indicator.style.left = el.offsetLeft + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('click', e => updateIndicator(link));
});

// Update indicator on scroll to match active section
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight/2;
  sections.forEach((section, idx) => {
    if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      updateIndicator(navLinks[idx]);
    }
  });
});




