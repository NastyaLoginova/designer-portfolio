const CONFIG = {
  yandexMetrikaId: 108181957,
  links: window.PORTFOLIO_LINKS,
  hero: {
    photo: 'assets/main/profile-photo-v2.png',
    title: 'Продуктовый дизайнер',
    descriptionBefore: 'Создаю и\u00A0развиваю e‑commerce и\u00A0B2B‑сервисы в\u00A0',
    descriptionAfter: '. Люблю глубоко погружаться в\u00A0проблему, искать её первопричины. Сильные стороны — системное мышление, работа со\u00A0сложными доменами, коммуникация и\u00A0защита решений.',
    descriptionCompany: 'Heads and Hands',
    descriptionCompanyUrl: 'https://handh.ru/',
  },
  cases: [
    {
      id: 'growFood',
      title: 'Grow Food',
      subtitle: 'Редизайн приложения',
      description:
        'Сделала редизайн приложения с\u00A0командой, проектировала профиль и\u00A0программу лояльности, отзывы на\u00A0продукты',
      tags: ['FoodTech', 'Mobile', 'Feature', 'Concept'],
      media: 'assets/main/growfood.mp4',
      logo: 'assets/main/logo_GF.svg',
      link: null,
    },
    {
      id: 'petrovich_services',
      title: 'Петрович',
      subtitle: 'Концепция сервисов',
      description:
        'Спроектировала новую модель сервисов, для масштабирования продукта как Экосистемы',
      tags: ['E-commerce', 'Mobile', 'Leading', 'Concept'],
      media: 'assets/main/petrovich_services.mp4',
      logo: 'assets/main/logo_Petrovich.svg',
      link: './cases/petrovich_services_v2/',
    },
    {
      id: 'securOS',
      title: 'SecurOS',
      subtitle: 'Подавление повторных инцидентов',
      description:
        'Спроектировала модель подавления повторных инцидентов, снизив нагрузку на\u00A0операторов ситуационных центров',
      tags: ['Enterprise', 'Mobile', 'Leading', 'Desktop'],
      media: 'assets/main/securos.png',
      logo: 'assets/main/logo_SecurOS.svg',
      link: './cases/securos_v2/',
    },
    {
      id: 'oskelly',
      title: 'Oskelly',
      subtitle: 'Shop‑in‑shop',
      description:
        'Реализовала 12 мини-магазинов, решение включало в\u00A0себя масштабирование и\u00A0работу с\u00A0дизайн системой',
      tags: ['Marketplace', 'Mobile', 'Feature', 'Concept'],
      media: 'assets/main/oskelly.mp4',
      logo: 'assets/main/logo_Oskelly.svg',
      link: './cases/oskelly_v2/',
    },
    {
      id: 'petrovich_list',
      title: 'Петрович',
      subtitle: 'Новый формат листинга',
      description:
        'Подготовила листинг к\u00A0переходу на\u00A0маркетплейс-модель',
      tags: ['E-commerce', 'Mobile', 'Feature', 'Concept'],
      media: 'assets/main/petrovich_list.mp4',
      logo: 'assets/main/logo_Petrovich.svg',
      link: './cases/petrovich_list_v2/',
    },
    {
      id: 'side_projects',
      title: 'сайд проекты',
      subtitle: '',
      description:
        'Сделала мини-приложение для тренировки голоса, авто-кликер для игр и\u00A0многое другое',
      tags: ['E-commerce', 'Mobile', 'Leading', 'Concept'],
      media: null,
      link: null,
    },
  ],
};

function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  const { className, text, attrs, children } = options;

  if (className) el.className = className;
  if (text) el.textContent = text;
  if (attrs) {
    Object.entries(attrs).forEach(([key, value]) => {
      if (value != null) el.setAttribute(key, value);
    });
  }
  if (children) {
    children.forEach((child) => {
      if (child) el.appendChild(child);
    });
  }

  return el;
}

function createHeader() {
  const header = createElement('header', { className: 'site-header' });
  const inner = createElement('div', { className: 'site-header__inner' });

  const name = createElement('span', {
    className: 'site-header__name',
    text: 'Логинова\nАнастасия',
  });

  const cta = createElement('a', {
    className: 'site-header__cta',
    text: 'Связаться',
    attrs: {
      href: CONFIG.links.tg,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  });

  cta.addEventListener('click', () => {
    ym(CONFIG.yandexMetrikaId, 'reachGoal', 'header_cta_click');
  });

  inner.appendChild(name);
  inner.appendChild(cta);
  header.appendChild(inner);

  return header;
}

function createHeroSection() {
  const section = createElement('section', { className: 'hero' });

  const photoWrapper = createElement('div', { className: 'hero__photo-wrapper' });
  const photo = createElement('img', {
    className: 'hero__photo',
    attrs: { src: CONFIG.hero.photo, alt: 'photo' },
  });

  photoWrapper.appendChild(photo);

  const content = createElement('div', { className: 'hero__content' });
  const title = createElement('h1', {
    className: 'hero__title',
    text: CONFIG.hero.title,
  });
  const description = createElement('p', {
    className: 'hero__description',
  });
  description.append(document.createTextNode(CONFIG.hero.descriptionBefore));
  const companyLink = createElement('a', {
    className: 'inline-text-link',
    text: CONFIG.hero.descriptionCompany,
    attrs: {
      href: CONFIG.hero.descriptionCompanyUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  });
  description.appendChild(companyLink);
  description.append(document.createTextNode(CONFIG.hero.descriptionAfter));

  content.appendChild(title);
  content.appendChild(description);

  section.appendChild(photoWrapper);
  section.appendChild(content);

  return section;
}

function createCasesSection() {
  const section = createElement('section', { className: 'cases-section' });
  const grid = createElement('div', { className: 'cases-grid' });

  CONFIG.cases.forEach((item) => {
    const isLink = item.link != null;
    const card = createElement(isLink ? 'a' : 'div', {
      className: `case-card${isLink ? ' case-card--link' : ''}`,
      attrs: isLink
        ? {
            href: item.link,
            'aria-label': 'Читать кейс: ' + item.title + (item.subtitle ? ' — ' + item.subtitle : ''),
          }
        : undefined,
    });

    // Header
    const header = createElement('div', { className: 'case-card__header' });
    const titleRow = createElement('div', { className: 'case-card__title-row' });
    const title = createElement('h2', {
      className: 'case-card__title',
      text: item.title,
    });
    titleRow.appendChild(title);
    if (item.logo) {
      const logo = createElement('img', {
        className: 'case-card__logo',
        attrs: { src: item.logo, alt: '', 'aria-hidden': 'true' },
      });
      titleRow.appendChild(logo);
    }

    const description = createElement('p', {
      className: 'case-card__description',
      text: item.description,
    });

    header.appendChild(titleRow);
    header.appendChild(description);

    // Tags
    const tags = createElement('div', { className: 'case-card__tags' });
    item.tags.forEach((tag) => {
      const chip = createElement('span', {
        className: 'case-card__chip',
        text: tag,
      });
      tags.appendChild(chip);
    });

    // Top area: header + tags, grows to fill space
    const top = createElement('div', { className: 'case-card__top' });
    top.appendChild(header);
    top.appendChild(tags);

    // Preview
    const preview = createElement('div', { className: 'case-card__preview' });
    if (item.media) {
      const mediaPath = item.media.toLowerCase();
      const isVideo = mediaPath.endsWith('.mp4');
      const media = isVideo
        ? createElement('video', {
            className: '',
            attrs: {
              src: item.media,
              autoplay: true,
              loop: true,
              muted: true,
              preload: 'auto',
              playsinline: true,
            },
          })
        : createElement('img', {
            attrs: {
              src: item.media,
              alt: item.title,
              loading: 'lazy',
              decoding: 'async',
            },
          });
      preview.appendChild(media);
    }

    card.appendChild(top);
    card.appendChild(preview);

    if (isLink) {
      card.addEventListener('click', () => {
        ym(CONFIG.yandexMetrikaId, 'reachGoal', 'read_case_click', { case_id: item.id });
      });
    }

    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

function createCTASection() {
  const section = createElement('section', { className: 'cta-section' });
  const inner = createElement('div', { className: 'cta-section__inner' });

  // Text + links
  const textCol = createElement('div', { className: 'cta-section__text' });
  const heading = createElement('h2', {
    className: 'cta-section__heading',
    text: 'Давайте делать крутые продукты вместе :)',
  });

  const linksRow = createElement('div', { className: 'cta-section__links' });

  const socialLinks = [
    { label: 'Telegram', href: CONFIG.links.tg, icon: 'assets/main/link.svg' },
    { label: 'LinkedIn', href: CONFIG.links.linkedin, icon: 'assets/main/link.svg' },
  ];

  socialLinks.forEach((link) => {
    const btn = createElement('a', {
      className: 'cta-section__link',
      attrs: {
        href: link.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    });

    const label = createElement('span', { text: link.label });
    const icon = createElement('img', {
      className: 'cta-section__link-icon',
      attrs: { src: link.icon, alt: '', 'aria-hidden': 'true' },
    });

    btn.appendChild(label);
    btn.appendChild(icon);
    linksRow.appendChild(btn);
  });

  // Copy email button
  const copyBtn = createElement('button', {
    className: 'cta-section__link',
    attrs: { type: 'button' },
  });

  const copyLabel = createElement('span', { text: 'copy mail' });
  const copyIcon = createElement('img', {
    className: 'cta-section__link-icon',
    attrs: { src: 'assets/main/document.svg', alt: '', 'aria-hidden': 'true' },
  });

  copyBtn.appendChild(copyLabel);
  copyBtn.appendChild(copyIcon);

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText('loginovaanasatasiia@gmail.com').then(() => {
      copyLabel.textContent = 'copied';
      setTimeout(() => {
        copyLabel.textContent = 'copy mail';
      }, 2000);
    });
    ym(CONFIG.yandexMetrikaId, 'reachGoal', 'copy_email_click');
  });

  linksRow.appendChild(copyBtn);

  textCol.appendChild(heading);
  textCol.appendChild(linksRow);

  // Cat area
  const catArea = createElement('div', { className: 'cta-section__cat-area' });
  const cat = createElement('div', {
    className: 'cat',
    attrs: { id: 'cat', 'aria-hidden': 'true' },
  });
  catArea.appendChild(cat);

  inner.appendChild(textCol);
  inner.appendChild(catArea);
  section.appendChild(inner);

  return section;
}

function init() {
  const app = document.getElementById('app');
  if (!app) return;

  const dotGrid = createElement('div', { className: 'dot-grid' });
  document.body.appendChild(dotGrid);

  const header = createHeader();
  const heroSection = createHeroSection();
  const casesSection = createCasesSection();
  const ctaSection = createCTASection();

  document.body.insertBefore(header, app);
  app.appendChild(heroSection);
  app.appendChild(casesSection);
  app.appendChild(ctaSection);
}

function updateHeaderMetrics() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const height = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${height}px`);
}

function initVideosAutoplay() {
  const videos = document.querySelectorAll('video');
  if (!videos.length) return;

  videos.forEach((video) => {
    if (!(video instanceof HTMLVideoElement)) return;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  });
}

function updateHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const scrolled = window.scrollY > 0;
  header.classList.toggle('site-header--scrolled', scrolled);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
  updateHeaderMetrics();
  initVideosAutoplay();
  initializeCat();
});

window.addEventListener('resize', () => {
  updateHeaderMetrics();
});

window.addEventListener('scroll', () => {
  updateHeaderScrollState();
}, { passive: true });

// ===== Cat animation (reused from v1) =====

const states_short = {
  sit: { frames: 20, row: 0, duration: 1.5 },
};

const states_long = {
  sit: { frames: 60, row: 1, duration: 4.5 },
};
const DISPLAY_PX = 292;
let _catCurrentState = 'sit';
let _catShortStartTime = 0;
let _catIsLongPlaying = false;

function playShort(stateName) {
  const el = document.getElementById('cat');
  if (!el) return;
  const s = states_short[stateName] || states_short.sit;

  const totalFrames = s.frames || 1;
  const duration = s.duration || 5;

  el.style.backgroundPositionX = '0px';
  el.style.backgroundPositionY = `${-s.row * DISPLAY_PX}px`;

  const animDistance = -totalFrames * DISPLAY_PX;
  el.style.setProperty('--anim-distance', `${animDistance}px`);

  el.style.animation = 'none';
  el.offsetWidth;
  el.style.animation = `play ${duration}s steps(${totalFrames}) infinite`;

  _catShortStartTime = performance.now();
  _catCurrentState = stateName;
}

function playLong(stateName, startFrame) {
  if (startFrame === undefined) startFrame = 0;
  const el = document.getElementById('cat');
  if (!el) return;
  const l = states_long[stateName] || states_long.sit;

  _catIsLongPlaying = true;
  el.style.pointerEvents = 'none';

  const totalFrames = l.frames || 1;
  const duration = l.duration || 5;

  const remainingFrames = totalFrames - startFrame;
  const frameDuration = duration / totalFrames;
  const remainingDuration = remainingFrames * frameDuration;

  const startX = -startFrame * DISPLAY_PX;
  el.style.backgroundPositionX = `${startX}px`;
  el.style.backgroundPositionY = `${-l.row * DISPLAY_PX}px`;

  const deltaX = -remainingFrames * DISPLAY_PX;
  const endX = startX + deltaX;

  el.style.setProperty('--anim-distance', `${endX}px`);

  el.style.animation = 'none';
  el.offsetWidth;
  el.style.animation = `play ${remainingDuration}s steps(${remainingFrames}) 1`;

  const onEnd = () => {
    el.removeEventListener('animationend', onEnd);
    _catIsLongPlaying = false;
    el.style.pointerEvents = '';
    playShort(stateName);
  };

  el.addEventListener('animationend', onEnd);
}

function initializeCat() {
  const el = document.getElementById('cat');
  if (!el) return;
  const FRAME_PX = 450;
  const canUseHoverCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const img = new Image();
  img.src = 'assets/main/cat.png';
  img.onload = () => {
    const scale = DISPLAY_PX / FRAME_PX;
    const bgW = img.naturalWidth * scale;
    const bgH = img.naturalHeight * scale;
    el.style.width = `${DISPLAY_PX}px`;
    el.style.height = `${DISPLAY_PX}px`;
    el.style.backgroundSize = `${bgW}px ${bgH}px`;

    let catCursor = null;
    if (canUseHoverCursor) {
      catCursor = createElement('div', { className: 'cat-cursor' });
      const ccText = createElement('span', {
        className: 'cat-cursor-text',
        text: 'Погладить',
      });
      const ccIcon = createElement('img', {
        className: 'cat-cursor-icon',
        attrs: { src: 'assets/main/pet.svg', alt: 'pet' },
      });
      catCursor.appendChild(ccText);
      catCursor.appendChild(ccIcon);
      document.body.appendChild(catCursor);
    }

    playShort('sit');

    if (catCursor) {
      el.addEventListener('mouseenter', () => {
        catCursor.style.display = 'flex';
      });
      el.addEventListener('mousemove', (e) => {
        catCursor.style.left = `${e.clientX}px`;
        catCursor.style.top = `${e.clientY}px`;
      });
      el.addEventListener('mouseleave', () => {
        catCursor.style.display = 'none';
      });
    }
  };

  el.addEventListener('click', () => {
    if (_catIsLongPlaying) return;
    const stateName = _catCurrentState || 'sit';
    const s = states_short[stateName] || states_short.sit;
    const duration = s.duration || 5;
    const frames = s.frames || 1;
    const frameDuration = duration / frames;

    const startTime = _catShortStartTime || performance.now();
    const elapsed = (performance.now() - startTime) / 1000;
    const frameIndex = Math.floor(((elapsed % duration) / frameDuration)) % frames;

    ym(CONFIG.yandexMetrikaId, 'reachGoal', 'cat_click');

    playLong(stateName, frameIndex);
  });
}
