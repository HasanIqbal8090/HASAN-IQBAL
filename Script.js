
 
  
  document.querySelectorAll('.project-card').forEach(card => {
    const inner = card.querySelector('.project-inner');
  
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = ((y / rect.height) - 0.5) * -20;
  
      inner.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  
    card.addEventListener('mouseleave', () => {
      inner.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });


  document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('mousemove', e => {
      const rect = link.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 15;
      const rotateX = ((y / rect.height) - 0.5) * -15;
  
      link.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
  });
  
  
  // Scroll Progress Bar Script
  window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgressBar');
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
  });


  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  
  sr.reveal('.about-section', { interval: 200 })
  sr.reveal('.about-card about-skills', { interval: 200 })
  
  /*------------------------PROJECT BOX-----------------------*/
  sr.reveal('.projects-grid', { interval: 200 })
  