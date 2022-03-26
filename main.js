const navbar = {
  root: document.querySelector('.r-navbar'),
  menuBtn: document.querySelector('.r-navbar .hamburger-menu'),
  modal: document.querySelector('.r-navbar .navlink-list'),

  init() {
    this.menuBtn.addEventListener('click', () => this.open());

    window.addEventListener('click', (e) => {
      if (this.modal.dataset.state === 'open' && !this.isInside(e.target)) {
        this.close();
      }
    });
  },

  close() {
    window.setTimeout(() => {
      this.modal.dataset.state = 'closed';
    }, 16);
  },

  open() {
    window.setTimeout(() => {
      this.modal.dataset.state = 'open';
    }, 16);
  },
  isInside(target) {
    return (
      target && (target === this.modal || this.isInside(target.parentNode))
    );
  },
};

navbar.init();
