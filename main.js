const CONFIG = {
  yandexMetrikaId: 108181957,
  nav: [
    { id: 'about', label: 'ОБО МНЕ', href: '#about' },
    { id: 'cases', label: 'КЕЙСЫ', href: '#cases' },
    { id: 'contacts', label: 'КОНТАКТЫ', href: '#contacts' },
  ],
  links: window.PORTFOLIO_LINKS,
  profile: {
    name: 'Настя Логинова',
    descriptionStart:
      'Продуктовый дизайнер с опытом более 3 лет. Создаю и развиваю e‑commerce и B2B‑сервисы в ',
    descriptionEnd:
      ', помогая превращать бизнес-задачи и пользовательские проблемы в работающие продуктовые решения.',
  },
  cases: [
    {
      id: 'petrovich_services',
      title: 'Петрович',
      subtitle: 'Концепция сервисов',
      description:
        'Спроектировала модель входа в сервисы: добавила сценарную логику, виджеты и приоритизацию, чтобы снизить случайные переходы и повысить конверсию в веб-сервисы.',
      media: 'assets/main/petrovich_services.mp4',
      link: './cases/petrovich_services/',
    },
    {
      id: 'petrovich_list',
      title: 'Петрович',
      subtitle: 'Новый формат листинга',
      description:
        'Изменила формат отображения товаров с учётом роста инфографики: усилила роль изображений и упростила структуру карточек, что положительно повлияло на конверсию.',
      media: 'assets/main/petrovich_list.mp4',
      link: './cases/petrovich_list/',
    },
    {
      id: 'oskelly',
      title: 'Oskelly',
      subtitle: 'Концепция shop-in-shop',
      description:
        'Спроектировала модель shop-in-shop — отдельных витрин категорий с курируемым ассортиментом от бутиков. Решение позволило встроить новый сценарий «мини-магазинов» и подготовить продукт к масштабированию.',
      media: 'assets/main/oskelly.mp4',
      link: './cases/oskelly/',
    },
    {
      id: 'growFood',
      title: 'Grow Food',
      subtitle: 'Редизайн профиля и программы лояльности',
      description:
        'В рамках редизайна приложения спроектировала профиль, отзывы и программу лояльности. Работала в заданной архитектуре, интегрировала новые механики в существующий продукт.',
      media: 'assets/main/growfood.mp4',
      link: null,
    },
    {
      id: 'securOS',
      title: 'SecurOS',
      subtitle: 'Развитие операторского интерфейса',
      description:
        'Дополняла продукт новыми фичами и улучшала сценарии обработки событий на основе фидбека операторов ситуационных центров.',
      media: 'assets/main/securos.png',
      link: null,
    },
  ],
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
      className: 'site-header__link',
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
      src: 'assets/main/profile-photo.png',
      alt: 'photo',
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

  const cvLabel = createElement('span', {
    className: 'about__action-label',
    text: 'CV',
  });
  const cvIcon = createElement('img', {
    className: 'about__action-icon',
    attrs: {
      src: 'assets/main/cv_icon.svg',
      alt: 'CV',
    },
  });
  cvButton.appendChild(cvLabel);
  cvButton.appendChild(cvIcon);

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
  const tgIcon = createElement('img', {
    className: 'about__action-icon',
    attrs: {
      src: 'assets/main/tg_icon.svg',
      alt: 'TG',
    },
  });
  tgButton.appendChild(tgLabel);
  tgButton.appendChild(tgIcon);

  photoWrapper.appendChild(photoCard);
  // photoWrapper.appendChild(cvButton);
  // photoWrapper.appendChild(tgButton);

  // Текстовая часть
  const content = createElement('div', { className: 'about__content' });
  const cardsWrapper = createElement('div', { className: 'about__cards' });

  const aboutCard = createElement('article', {
    className: 'about__card',
  });
  const aboutTitle = createElement('h2', {
    className: 'card__title',
    text: 'Настя Логинова',
  });
  const aboutText = createElement('p', {
    className: 'card__text',
  });
  aboutText.append(document.createTextNode(config.descriptionStart));
  const companyLink = createElement('a', {
    className: 'inline-text-link',
    text: 'Heads and Hands',
    attrs: {
      href: 'https://handh.ru/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  });
  aboutText.appendChild(companyLink);
  aboutText.append(document.createTextNode(config.descriptionEnd));
  aboutCard.appendChild(aboutTitle);
  aboutCard.appendChild(aboutText);

  cardsWrapper.appendChild(aboutCard);

  content.appendChild(cardsWrapper);

  aboutWrapper.appendChild(photoWrapper);
  aboutWrapper.appendChild(content);
  section.appendChild(aboutWrapper);

  return section;
}

function createCasesSection(cases) {
  const section = createElement('section', {
    className: 'page page--after',
    attrs: { id: 'cases' },
  });

  const list = createElement('div', { className: 'cases' });

  cases.forEach((item) => {
    const isCaseLink = item.link != null;
    const caseBlock = createElement(isCaseLink ? 'a' : 'article', {
      className: `case${isCaseLink ? ' case--link' : ''}`,
      attrs: isCaseLink
        ? {
            href: item.link,
            'aria-label': `Читать кейс: ${item.title}${item.subtitle ? ` — ${item.subtitle}` : ''}`,
          }
        : undefined,
    });

    const mediaPath = (item.media || '').toLowerCase();
    const isVideo = mediaPath.endsWith('.mp4');
    const media = isVideo
      ? createElement('video', {
          className: 'case__media',
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
          className: 'case__media',
          attrs: {
            src: item.media,
            alt: item.title,
            loading: 'lazy',
            decoding: 'async',
          },
        });

    const content = createElement('div', {
      className: 'case__content',
    });
    const card = createElement('div', {
      className: 'about__card case__card',
    });
    const headerRow = createElement('div', {
      className: 'case__header',
    });
    const lead = createElement('div', {
      className: 'case__lead',
    });
    const title = createElement('p', {
      className: 'case__lead-title',
      text: item.title,
    });
    const subtitle = createElement('h3', {
      className: 'case__lead-subtitle',
      text: item.subtitle,
    });
    const button = createElement('span', {
      className: 'case__button',
      text: 'ЧИТАТЬ КЕЙС',
    });

    if (isCaseLink) {
      caseBlock.addEventListener('click', () => {
        ym(CONFIG.yandexMetrikaId, 'reachGoal', 'read_case_click', { case_id: item.id });
      });
    }

    lead.appendChild(title);
    if (item.subtitle) {
      lead.appendChild(subtitle);
    }

    headerRow.appendChild(lead);
    if (isCaseLink) {
      headerRow.appendChild(button);
    }

    const text = createElement('p', {
      className: 'card__text',
      text: item.description,
    });

    card.appendChild(headerRow);
    card.appendChild(text);

    content.appendChild(card);

    caseBlock.appendChild(media);
    caseBlock.appendChild(content);

    list.appendChild(caseBlock);
  });

  section.appendChild(list);
  return section;
}

function createFooterSection() {
  const section = createElement('section', {
    className: 'footer-section',
  });

  const wrapper = createElement('div', { className: 'footer-section__inner' });

  const content = createElement('div', { className: 'footer-section__content' });

  const text1 = createElement('h2', {
    className: 'footer-section__title',
    text: 'Спасибо, что посмотрели',
  });
  const text2 = createElement('p', {
    className: 'footer-section__subtitle',
    text: 'Буду рада обсудить с Вами проект',
  });

  content.appendChild(text1);
  content.appendChild(text2);

  const buttonsWrapper = createElement('div', { className: 'footer-section__buttons' });

  const buttonsConfig = [
    { label: 'CV', href: CONFIG.links.cv, icon: 'assets/main/document.svg' },
    { label: 'TELEGRAM', href: CONFIG.links.tg, icon: 'assets/main/link.svg' },
    { label: 'LINKEDIN', href: CONFIG.links.linkedin, icon: 'assets/main/link.svg' }
  ];

  buttonsConfig.forEach(btn => {
    const button = createElement('a', {
      className: 'footer-section__button',
      attrs: {
        href: btn.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    });

    const buttonLabel = createElement('span', {
      className: 'footer-section__button-label',
      text: btn.label,
    });
    const buttonIcon = createElement('img', {
      className: 'footer-section__button-icon',
      attrs: {
        src: btn.icon,
        alt: '',
        'aria-hidden': 'true',
      },
    });

    button.appendChild(buttonLabel);
    button.appendChild(buttonIcon);
    buttonsWrapper.appendChild(button);
  });

  const cat = createElement('div', {
    className: 'cat',
    attrs: { id: 'cat', 'aria-hidden': 'true' },
  });

  const caption = createElement('div', { className: 'cat__caption' });
  const captionText = createElement('span', {
    className: 'cat__caption-text',
    text: 'Кот отвечает за настроение',
  });
  const captionIcon = createElement('img', {
    className: 'cat__caption-icon',
    attrs: { src: 'assets/main/heart.svg', alt: 'heart' },
  });
  // caption.appendChild(captionText);
  // caption.appendChild(captionIcon);

  content.appendChild(buttonsWrapper);
  content.appendChild(cat);
  content.appendChild(caption);
  wrapper.appendChild(content);
  section.appendChild(wrapper);

  return section;
}

function init() {
  const app = document.getElementById('app');
  if (!app) return;

  const dotGrid = createElement('div', { className: 'dot-grid' });
  document.body.appendChild(dotGrid);

  const header = createHeader(CONFIG.nav);
  const aboutSection = createAboutSection(CONFIG.profile);
  const casesSection = createCasesSection(CONFIG.cases);
  const footerSection = createFooterSection();

  document.body.insertBefore(header, app);
  app.appendChild(aboutSection);
  app.appendChild(casesSection);
  app.appendChild(footerSection);

  setupNavigationScroll();
}

function updateHeaderMetrics() {
  const headerInner = document.querySelector('.site-header__inner');
  if (!headerInner) return;
  const height = headerInner.offsetHeight;
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

document.addEventListener('DOMContentLoaded', () => {
  init();
  updateHeaderMetrics();
  initVideosAutoplay();
  initializeCat();
});

window.addEventListener('resize', () => {
  updateHeaderMetrics();
});

function setupNavigationScroll() {
  const links = document.querySelectorAll('.site-header__link');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      if (href === '#about') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else if (href === '#cases') {
        const casesSection = document.getElementById('cases');
        if (casesSection) {
          const rect = casesSection.getBoundingClientRect();
          const offsetTop = rect.top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      } else if (href === '#contacts') {
        const footerSection = document.querySelector('.footer-section');
        if (footerSection) {
          const rect = footerSection.getBoundingClientRect();
          const offsetTop = rect.top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

const states_short = {
  sit: { frames: 20, row: 0, duration: 1.5 },
};

const states_long = {
  sit: { frames: 60, row: 1, duration: 4.5 },
};
const DISPLAY_PX = 224;

let _catCurrentState = 'sit';
let _catShortStartTime = 0;
let _catIsLongPlaying = false;

function playShort(stateName) {
  const el = document.getElementById('cat');
  if (!el) return;
  const s = states_short[stateName] || states_short.sit;

  const totalFrames = s.frames || 1;
  const duration = s.duration || 5;

  el.style.backgroundPositionX = `0px`;
  el.style.backgroundPositionY = `${-s.row * DISPLAY_PX}px`;

  const animDistance = -totalFrames * DISPLAY_PX;
  el.style.setProperty('--anim-distance', `${animDistance}px`);

  el.style.animation = 'none';
  el.offsetWidth;
  el.style.animation = `play ${duration}s steps(${totalFrames}) infinite`;

  _catShortStartTime = performance.now();
  _catCurrentState = stateName;
}

function playLong(stateName, startFrame = 0) {
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

    playShort('sit', 0);

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