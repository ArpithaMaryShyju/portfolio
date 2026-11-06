/**
 * Contact Form Validation, Copy to Clipboard & Toast Notifications
 * Arpitha Mary Shyju Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyEmail();
});

/**
 * Toast Notification Utility
 */
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'success' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C53030" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-text">${message}</span>
  `;

  container.appendChild(toast);

  // Auto dismiss after 3.8 seconds
  setTimeout(() => {
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => {
      toast.remove();
      if (container.children.length === 0) {
        container.remove();
      }
    });
  }, 3800);
}

/**
 * Copy Email to Clipboard with User Feedback
 */
function initCopyEmail() {
  const copyBtns = document.querySelectorAll('.btn-copy-email');
  const targetEmail = 'arpithamaryshyju2030@cs.ajce.in';

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(targetEmail);
        showToast('Email copied to clipboard: arpithamaryshyju2030@cs.ajce.in');
        
        // Brief visual state change
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Copied!
        `;
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-secondary');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-secondary');
        }, 2200);

      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = targetEmail;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Email copied to clipboard!');
      }
    });
  });
}

/**
 * Real-time Form Validation & Submission Simulation
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const subjectInput = document.getElementById('contactSubject');
  const messageInput = document.getElementById('contactMessage');
  const submitBtn = document.getElementById('contactSubmitBtn');

  // Email regex validator
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateInput = (input, isValid) => {
    if (!isValid) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
    return isValid;
  };

  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('error');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateInput(nameInput, nameInput.value.trim().length >= 2);
    const isEmailValid = validateInput(emailInput, isValidEmail(emailInput.value.trim()));
    const isSubjectValid = validateInput(subjectInput, subjectInput.value.trim().length >= 3);
    const isMessageValid = validateInput(messageInput, messageInput.value.trim().length >= 10);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      showToast('Please correct the highlighted fields before submitting.', 'error');
      return;
    }

    // Simulate sending with nice button loading animation
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite;">
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      Sending Message...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      form.reset();
      showToast('Thank you! Your message has been received. Arpitha will respond shortly.');
    }, 1200);
  });
}

