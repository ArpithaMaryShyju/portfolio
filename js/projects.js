/**
 * Project Data, Filtering, and Interactive Modal Logic
 * Arpitha Mary Shyju Portfolio
 */

const PROJECTS_DATA = [
  {
    id: 'editorial-portfolio',
    category: 'web',
    title: 'Modern Editorial Portfolio Website',
    subtitle: 'Personal Brand & Digital Identity',
    description: 'A bespoke personal website built with clean semantic HTML5, CSS3 custom properties, and modern JavaScript. Features a warm cream & terracotta editorial aesthetic with smooth scroll interactions.',
    longDescription: 'Crafted as an authentic reflection of my journey as a first-year Computer Science student. Prioritized typography, generous whitespace, accessible forms, responsive drawer navigation, and zero heavy dependencies to achieve lightning-fast loading speeds.',
    tags: ['HTML5', 'CSS3 Variables', 'JavaScript', 'Responsive Design', 'Editorial UI'],
    highlights: [
      'Warm cream and terracotta color tokens designed for high readability',
      'Accessible mobile navigation drawer with keyboard trap and smooth backdrop',
      'Interactive contact clipboard and client-side form validation',
      'Modular CSS architecture organized into variables, base, components, and sections'
    ],
    github: 'https://github.com/arpithamaryshyju/personal-portfolio',
    demo: '#',
    accentColor: '#B47C5A'
  },
  {
    id: 'academic-compass',
    category: 'web',
    title: 'AJCE Engineering Resource Compass',
    subtitle: 'First-Year Academic Companion Portal',
    description: 'A streamlined web portal designed for engineering peers at Amal Jyothi College of Engineering to quickly access syllabus checklists, subject notes, and lab references.',
    longDescription: 'Developed to address the real-world challenge of scattered study materials across student groups. The platform organizes first-year modules into clean, searchable categories with intuitive download links and quick bookmarks.',
    tags: ['JavaScript (ES6+)', 'CSS Grid', 'Local Storage', 'Student Utility'],
    highlights: [
      'Categorized syllabus roadmap for B.Tech First-Year CSE subjects',
      'Fast client-side search to quickly filter notes and lab experiments',
      'Local Storage bookmarking to save frequently accessed modules',
      'Optimized for mobile viewing during campus study sessions'
    ],
    github: 'https://github.com/arpithamaryshyju/ajce-resource-compass',
    demo: '#',
    accentColor: '#382D26'
  },
  {
    id: 'python-tracker',
    category: 'python',
    title: 'Python Academic Tracker & SGPA Suite',
    subtitle: 'Automated Engineering Grade Computation',
    description: 'A Python-powered command-line and logic tool built to calculate semester grade-point averages (SGPA/CGPA) with credit-weighted algorithmic precision.',
    longDescription: 'Created as a practical programming exercise in Python. Implements robust input validation, file serialization for saving multiple semester records, and clean formatted terminal outputs.',
    tags: ['Python 3', 'Object-Oriented', 'Algorithms', 'CLI Tool'],
    highlights: [
      'Credit-weighted calculations matching KTU engineering grading scales',
      'Interactive CLI prompts with defensive exception handling',
      'Target GPA forecasting helper based on remaining semester credits',
      'Export feature generating formatted summary text reports'
    ],
    github: 'https://github.com/arpithamaryshyju/python-academic-tracker',
    demo: '#',
    accentColor: '#9D6745'
  },
  {
    id: 'algorithm-visualizer',
    category: 'academic',
    title: 'Logic & Algorithm Concept Explorer',
    subtitle: 'Interactive Computer Science Visualizer',
    description: 'An interactive web app demonstrating fundamental data structures (Arrays, Stacks, Queues) and foundational sorting techniques for fellow students.',
    longDescription: 'A passion project driven by my curiosity to understand how algorithms behave under the hood. Visualizes step-by-step element swapping, push/pop operations, and provides intuitive text explanations alongside visual state shifts.',
    tags: ['HTML5 Canvas', 'Modern JS', 'Algorithms', 'Educational Tech'],
    highlights: [
      'Step-by-step visual playback with speed controls for sorting simulations',
      'Visual interactive representation of Stack and Queue memory behavior',
      'Time and Space complexity cheat-sheet integrated into each concept',
      'Clean, accessible color-coded highlights for active index comparisons'
    ],
    github: 'https://github.com/arpithamaryshyju/algorithm-concept-explorer',
    demo: '#',
    accentColor: '#B47C5A'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initSkillFiltering();
  initProjectModal();
});

/**
 * Filter skills by category pill
 */
function initSkillFiltering() {
  const filterBtns = document.querySelectorAll('#skills .filter-btn');
  const skillCards = document.querySelectorAll('#skills .skill-card');

  if (!filterBtns.length || !skillCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * Interactive Project Detail Modal
 */
function initProjectModal() {
  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('closeModalBtn');
  const modalBody = document.getElementById('modalContentBody');
  const previewButtons = document.querySelectorAll('.btn-preview-project');

  if (!modalOverlay || !modalCloseBtn || !modalBody) return;

  const openModal = (projectId) => {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge" style="margin-bottom: 0.75rem;">${project.subtitle}</span>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem; color: var(--text-primary);">${project.title}</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-top: 0.75rem;">
          ${project.tags.map(t => `<span class="badge badge-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom: 1.75rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.5rem; color: var(--text-primary);">About This Project</h4>
        <p style="font-size: 1rem; line-height: 1.75; color: var(--text-secondary);">${project.longDescription}</p>
      </div>

      <div style="margin-bottom: 2rem;">
        <h4 style="font-size: 1.05rem; margin-bottom: 0.75rem; color: var(--text-primary);">Key Architectural Highlights</h4>
        <ul style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${project.highlights.map(h => `
            <li style="display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.95rem; color: var(--text-secondary);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 3px;">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${h}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 1rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          Explore Source on GitHub
        </a>
        <button type="button" class="btn btn-secondary btn-sm" onclick="closeProjectModal()">
          Close Preview
        </button>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.closeProjectModal = closeModal;

  previewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openModal(projectId);
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}
