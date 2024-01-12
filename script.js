// Mouse Trail Effect
window.addEventListener('mousemove', function(e) {
    var arr = [1, 0.9, 0.8, 0.5, 0.2];
  
    arr.forEach(function(i) {
      var x = (1 - i) * 50;
      var star = document.createElement('div');
  
      star.className = 'star';
      // Adjust for scroll
      var correctedX = e.pageX - window.scrollX;
      var correctedY = e.pageY - window.scrollY;
  
      star.style.top = correctedY + Math.round(Math.random() * x - x / 2) + 'px';
      star.style.left = correctedX + Math.round(Math.random() * x - x / 2) + 'px';
  
      document.body.appendChild(star);
  
      window.setTimeout(function() {
        document.body.removeChild(star);
      }, Math.round(Math.random() * i * 600));
    });
}, false);

// Main Page Parallax Effect
window.addEventListener('mousemove', function(event) {
  let movex = event.clientX;
  let movey = event.clientY;
  var parallax = document.getElementById('layer1');
  parallax.style.transform = 'translateX(' + movex * -0.125 + 'px) translateY(' + movey * 0.125 + 'px)';

  console.log("movex: ", movex, " movey: ", movey)

});

// 