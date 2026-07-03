document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); 
      
      navLinks.forEach(item => item.classList.remove('active'));
      
      this.classList.add('active');
    });
  });
  
  const buttons = document.querySelectorAll('.btn, .nav-links a');
  
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.inOut" });
    });
  });

  const fruits = document.querySelectorAll('.main-img, .about-fruits');
  
  fruits.forEach(fruit => {
    fruit.addEventListener('mouseenter', () => {
      gsap.to(fruit, { scale: 1.1, duration: 1.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    });
    fruit.addEventListener('mouseleave', () => {
      gsap.to(fruit, { scale: 1, duration: 0.3, overwrite: "auto" });
    });
  });

  const stepBoxes = document.querySelectorAll('.step-box');
  
  stepBoxes.forEach(box => {
    const icon = box.querySelector('.step-img');
    box.addEventListener('mouseenter', () => {
      gsap.to(icon, { scale: 1.2, duration: 0.4, ease: "back.out(1.7)" });
    });
    box.addEventListener('mouseleave', () => {
      gsap.to(icon, { scale: 1, duration: 0.4, ease: "power2.out" });
    });
  });
});