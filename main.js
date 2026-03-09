const CONFIG = {
  nav: [
    { id: 'about', label: 'ОБО МНЕ', href: '#about' },
    { id: 'cases', label: 'КЕЙСЫ', href: '#cases' },
    { id: 'contacts', label: 'СВЯЗАТЬСЯ', href: '#contacts' },
  ],
  links: {
    cv: 'https://www.google.com/',
    tg: 'https://www.google.com/',
  },
  profile: {
    name: 'Настя Логинова',
    description:
      'Проектирую и развиваю цифровые продукты в e-commerce и B2B-сервисах. Веду задачи от определения проблемы и гипотез до внедрения и оценки результата.',
    experience: [
      {
        company: 'Heads and Hands',
        role: 'продуктовый дизайнер',
        period: '2024 — now',
      },
      {
        company: 'K‑Digital',
        role: 'UX/UI дизайнер',
        period: '2023 — 2024',
      },
    ],
  },
};

function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  const { className, text, attrs, children } = options;

  if (className) {
    el.className = className;
  }

  if (text) {
    el.textContent = text;
  }

  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value != null) {
        el.setAttribute(key, value);
      }
    });
  }

  if (children) {
    children.forEach((child) => {
      if (child) {
        el.appendChild(child);
      }
    });
  }

  return el;
}

function createHeader(navItems) {
  const header = createElement('header', {
    className: 'site-header',
  });

  const inner = createElement('nav', {
    className: 'site-header__inner',
  });

  navItems.forEach((item, index) => {
    const itemWrapper = createElement('div', {
      className: 'site-header__item',
    });

    const link = createElement('a', {
      className:
        'site-header__link' + (index === 0 ? ' site-header__link--active' : ''),
      text: item.label,
      attrs: { href: item.href },
    });

    itemWrapper.appendChild(link);
    inner.appendChild(itemWrapper);
  });

  header.appendChild(inner);
  return header;
}

function createAboutSection(config) {
  const section = createElement('section', {
    className: 'page',
    attrs: { id: 'about' },
  });

  const aboutWrapper = createElement('div', { className: 'about' });

  // Фото и кнопки
  const photoWrapper = createElement('div', { className: 'about__photo-wrapper' });

  const photoCard = createElement('div', { className: 'about__photo-card' });
  const img = createElement('img', {
    className: 'about__photo',
    attrs: {
      src: 'assets/profile-photo.png',
      alt: 'Портрет Насти Логиновой',
    },
  });
  photoCard.appendChild(img);

  const cvButton = createElement('a', {
    className: 'about__action about__action--cv',
    attrs: {
      href: CONFIG.links.cv,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  });

  const cvIcon = createElement('span', {
    className: 'about__action-icon',
  });
  const cvLabel = createElement('span', {
    className: 'about__action-label',
    text: 'CV',
  });
  cvButton.appendChild(cvIcon);
  cvButton.appendChild(cvLabel);

  const tgButton = createElement('a', {
    className: 'about__action about__action--tg',
    attrs: {
      href: CONFIG.links.tg,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  });

  const tgLabel = createElement('span', {
    className: 'about__action-label',
    text: 'TG',
  });
  const tgArrow = createElement('span', {
    className: 'about__action-arrow',
    text: '→',
  });
  tgButton.appendChild(tgLabel);
  tgButton.appendChild(tgArrow);

  photoWrapper.appendChild(photoCard);
  photoWrapper.appendChild(cvButton);
  photoWrapper.appendChild(tgButton);

  // Текстовая часть
  const content = createElement('div', { className: 'about__content' });
  const cardsWrapper = createElement('div', { className: 'about__cards' });

  const aboutCard = createElement('article', {
    className: 'about__card',
  });
  const aboutTitle = createElement('h2', {
    className: 'about__card-title',
    text: 'Настя Логинова',
  });
  const aboutText = createElement('p', {
    className: 'about__card-text',
    text: `${config.description}`,
  });
  aboutCard.appendChild(aboutTitle);
  aboutCard.appendChild(aboutText);

  const expCard = createElement('article', {
    className: 'about__card',
  });

  const metaList = createElement('div', { className: 'about__meta' });

  config.experience.forEach((item) => {
    const row = createElement('div', { className: 'about__meta-row' });
    const company = createElement('span', {
      className: 'about__meta-company',
      text: `${item.company} — ${item.role}`,
    });
    const period = createElement('span', {
      className: 'about__meta-role',
      text: item.period,
    });
    row.appendChild(company);
    row.appendChild(period);
    metaList.appendChild(row);
  });

  expCard.appendChild(metaList);

  cardsWrapper.appendChild(aboutCard);
  cardsWrapper.appendChild(expCard);

  content.appendChild(cardsWrapper);

  aboutWrapper.appendChild(photoWrapper);
  aboutWrapper.appendChild(content);
  section.appendChild(aboutWrapper);

  return section;
}

function init() {
  const app = document.getElementById('app');
  if (!app) return;

  const header = createHeader(CONFIG.nav);
  const aboutSection = createAboutSection(CONFIG.profile);

  document.body.insertBefore(header, app);
  app.appendChild(aboutSection);
}

function updateHeaderMetrics() {
  const headerInner = document.querySelector('.site-header__inner');
  if (!headerInner) return;
  const height = headerInner.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${height}px`);
}

function updateActiveNav() {
  const links = Array.from(document.querySelectorAll('.site-header__link'));
  if (!links.length) return;

  const sections = links
    .map((link) => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#') || href.length === 1) return null;
      const section = document.querySelector(href);
      if (!section) return null;
      return { link, section };
    })
    .filter(Boolean);

  if (!sections.length) return;

  let activeLink = sections[0].link;
  let minDist = Infinity;

  const styles = getComputedStyle(document.documentElement);
  const headerTop = parseFloat(styles.getPropertyValue('--header-top')) || 0;
  const headerHeight =
    parseFloat(styles.getPropertyValue('--header-height')) || 0;
  const offset = headerTop + headerHeight + 1;

  sections.forEach(({ link, section }) => {
    const rect = section.getBoundingClientRect();
    const top = rect.top;
    const bottom = rect.bottom;
    if (bottom <= offset) return;
    const dist = Math.abs(top - offset);
    if (dist < minDist) {
      minDist = dist;
      activeLink = link;
    }
  });

  links.forEach((link) => link.classList.remove('site-header__link--active'));
  if (activeLink) {
    activeLink.classList.add('site-header__link--active');
  }
}

function updateDotGridStep() {
  const width = window.innerWidth;
  const innerWidth = Math.max(width - 40, 0);
  if (!innerWidth) return;

  const minStep = 92;
  const columns = Math.max(Math.floor(innerWidth / minStep), 1);
  const step = Math.round(innerWidth / columns);

  document.documentElement.style.setProperty('--dot-step', `${step}px`);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  updateHeaderMetrics();
  updateDotGridStep();
  updateActiveNav();
});

window.addEventListener('resize', () => {
  updateHeaderMetrics();
  updateDotGridStep();
});

window.addEventListener('scroll', updateActiveNav);