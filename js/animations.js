/**
 * Scroll Animations & Interactive Resume Viewer
 * Arpitha Mary Shyju Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initResumeModal();
});

/**
 * Editorial Scroll Reveal using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    animatedElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/**
 * Interactive Resume Modal Logic
 */
function initResumeModal() {
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtns = document.querySelectorAll('.btn-open-resume');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  if (!resumeModal || !closeResumeBtn) return;

  const openModal = () => {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  closeResumeBtn.addEventListener('click', closeModal);

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal.classList.contains('active')) {
      closeModal();
    }
  });
}

