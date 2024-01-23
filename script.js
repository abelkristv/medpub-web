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
  document.getElementById('main').addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const benefits = document.getElementById('benefit');
    const benefitsTop = benefits.getBoundingClientRect().top;
    const navbarHeight = navbar.offsetHeight;

    console.log(benefitsTop);

    if (benefitsTop - navbarHeight <= 0) {
        navbar.classList.add('black-background');
    } else {
        navbar.classList.remove('black-background');
    }
});};

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.hard-skill-logo .slide').forEach(slide => {
    slide.addEventListener('mouseover', () => {
        document.querySelector('.hard-skill-logo').style.animationPlayState = 'paused';
    });

    slide.addEventListener('mouseout', () => {
        document.querySelector('.hard-skill-logo').style.animationPlayState = 'running';
    });
  });

  document.querySelectorAll('.soft-skill-logo .slide').forEach(slide => {
      slide.addEventListener('mouseover', () => {
          document.querySelector('.soft-skill-logo').style.animationPlayState = 'paused';
      });

      slide.addEventListener('mouseout', () => {
          document.querySelector('.soft-skill-logo').style.animationPlayState = 'running';
      });
  });

  document.querySelectorAll('.others-logo .slide').forEach(slide => {
    slide.addEventListener('mouseover', () => {
        document.querySelector('.others-logo').style.animationPlayState = 'paused';
    });

    slide.addEventListener('mouseout', () => {
        document.querySelector('.others-logo').style.animationPlayState = 'running';
    });
});
});


createMouseTrail();
initializeParallaxEffect();

window.onload = function() {
  // Check if the page is reloaded
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.log("Page is reloaded, redirecting to root...");
    window.location.href = '/';
  } else {
    console.log("Page loaded normally.");
  }
};

document.addEventListener('DOMContentLoaded', function() {
  checkNavbarReachBenefit();
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Additional script to disable certain keyboard shortcuts
document.addEventListener('keydown', function(event) {
  // Disable F12 key
  if (event.keyCode === 123) {
    event.preventDefault();
  }

  // Disable Ctrl+Shift+I combination
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    event.preventDefault();
  }

  // Disable Ctrl+Shift+J combination
  if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
    event.preventDefault();
  }

  // Disable Ctrl+U combination
  if (event.ctrlKey && event.keyCode === 85) {
    event.preventDefault();
  }
});
