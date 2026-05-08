// Fade-in animation on scroll

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.project-card, .skill-card, .publication-item');

hiddenElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});