function createMouseTrail() {
  const arr = [1, 0.9, 0.8, 0.5, 0.2];

  window.addEventListener('mousemove', function(e) {
      createStars(e, arr);
  }, false);
}

function createStars(e, arr) {
  arr.forEach(function(i) {
      const star = createStar(e, i);
      animateAndRemoveStar(star, i);
  });
}

function createStar(e, intensity) {
  const x = (1 - intensity) * 50;
  const star = document.createElement('div');
  star.className = 'star';
  const correctedX = e.pageX - window.scrollX;
  const correctedY = e.pageY - window.scrollY;
  star.style.top = correctedY + Math.round(Math.random() * x - x / 2) + 'px';
  star.style.left = correctedX + Math.round(Math.random() * x - x / 2) + 'px';
  document.body.appendChild(star);
  return star;
}

function animateAndRemoveStar(star, intensity) {
  window.setTimeout(function() {
      document.body.removeChild(star);
  }, Math.round(Math.random() * intensity * 600));
}

function initializeParallaxEffect() {
  window.addEventListener('mousemove', function(event) {
      applyParallaxEffect(event);
  });
}

function applyParallaxEffect(event) {
  const movex = event.clientX;
  const movey = event.clientY;
  const parallax = document.getElementById('first-layer');
  parallax.style.transform = `translateX(${movex * -0.125}px) translateY(${movey * 0.125}px)`;
}

function checkNavbarReachBenefit() {
  document.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const benefits = document.getElementById('benefit');
    const benefitsTop = benefits.getBoundingClientRect().top;
    const navbarHeight = navbar.offsetHeight;

    if (benefitsTop - navbarHeight <= 0) {
        navbar.classList.add('black-background');
    } else {
        navbar.classList.remove('black-background');
    }
});};

let whereAmi="";

function sectionScrolling() {
  document.addEventListener('scroll', function() {
    const requirements = document.getElementById('requirements');
    if (requirements.getBoundingClientRect().top <= window.innerHeight / 2 && requirements.getBoundingClientRect().bottom >= window.innerHeight / 2 && whereAmi!="requirements") {
      requirements.scrollIntoView()
      whereAmi="requirements"
    }
    whereAmi=""
  })
}

createMouseTrail();
initializeParallaxEffect();
checkNavbarReachBenefit();
// sectionScrolling();