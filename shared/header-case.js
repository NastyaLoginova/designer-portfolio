/**
 * Навигация для страниц кейсов
 */

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

function createCaseHeader() {
  const linksConfig = window.PORTFOLIO_LINKS;
  const locale = window.PORTFOLIO_LOCALE;
  const homeHref = locale.homeHref();
  const linkedinHref = locale.isEn
    ? linksConfig.linkedin.replace('locale=ru-RU', 'locale=en_US')
    : linksConfig.linkedin;

  const header = createElement('header', {
    className: 'case-header',
  });

  const inner = createElement('nav', {
    className: 'case-header__inner',
  });

  const leftItem = createElement('div', {
    className: 'case-header__item case-header__item--home',
  });
  const homeIcon = createElement('img', {
    className: 'case-header__home-icon',
    attrs: {
      src: locale.asset('assets/cases/back.svg'),
      alt: '',
      'aria-hidden': 'true',
    },
  });
  const homeLabel = createElement('span', {
    className: 'case-header__home-label',
    text: locale.strings.homeLabel,
  });
  const homeLink = createElement('a', {
    className: 'case-header__home-link',
    children: [homeIcon, homeLabel],
    attrs: { href: homeHref },
  });
  leftItem.appendChild(homeLink);

  const rightStack = createElement('div', { className: 'case-header__stack' });
  const links = [
    { label: 'CV', shortLabel: 'CV', href: linksConfig.cv },
    { label: 'TELEGRAM', shortLabel: 'TG', href: linksConfig.tg },
    { label: 'LINKEDIN', shortLabel: 'IN', href: linkedinHref },
  ];

  links.forEach((item) => {
    const stackItem = createElement('div', {
      className: 'case-header__item case-header__item--stack',
    });
    const link = createElement('a', {
      className: 'case-header__link',
      text: window.innerWidth <= 648 ? item.shortLabel : item.label,
      attrs: {
        href: item.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    });
    stackItem.appendChild(link);
    rightStack.appendChild(stackItem);
  });

  inner.appendChild(leftItem);
  inner.appendChild(rightStack);
  header.appendChild(inner);

  return header;
}

function initCaseNavigation() {
  const homeHref = window.PORTFOLIO_LOCALE.homeHref();

  document.querySelectorAll('.case-header__home-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const cameFromHome =
        document.referrer &&
        new URL(document.referrer).pathname === new URL(homeHref, location.href).pathname;

      if (cameFromHome && history.length > 1) {
        history.back();
      } else {
        location.href = homeHref;
      }
    });
  });
}
