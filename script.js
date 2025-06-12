window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  this.innerHTML = "<p>Thank you! Your message has been sent.</p>";
});
