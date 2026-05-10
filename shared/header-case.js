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

/**
 * Создает навигационную панель для кейса
 * @param {Object} config - Конфигурация
 * @param {string} config.caseId - ID кейса
 * @param {string} config.caseName - Название кейса
 * @returns {HTMLElement}
 */
function createCaseHeader() {
  const linksConfig = window.PORTFOLIO_LINKS;
  const homeHref = getHomeHref();

  const header = createElement('header', {
    className: 'case-header',
  });

  const inner = createElement('nav', {
    className: 'case-header__inner',
  });

  // Левая часть - на главную
  const leftItem = createElement('div', {
    className: 'case-header__item case-header__item--home',
  });
  const homeLink = createElement('a', {
    className: 'case-header__link case-header__home-link',
    text: 'НА ГЛАВНУЮ',
    attrs: { href: homeHref },
  });
  leftItem.appendChild(homeLink);

  const rightStack = createElement('div', { className: 'case-header__stack' });
  const links = [
    { label: 'CV', href: linksConfig.cv },
    { label: 'TELEGRAM', href: linksConfig.tg },
    { label: 'LINKEDIN', href: linksConfig.linkedin },
  ];

  links.forEach((item) => {
    const stackItem = createElement('div', {
      className: 'case-header__item case-header__item--stack',
    });
    const link = createElement('a', {
      className: 'case-header__link',
      text: item.label,
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

/**
 * Инициализирует навигацию для кейса
 */
function initCaseNavigation() {
  const homeHref = getHomeHref();

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

function getHomeHref() {
  const { protocol, pathname } = window.location;

  if (protocol === 'file:') {
    const fileParts = pathname.split('/cases/');
    if (fileParts.length > 1) {
      return `${fileParts[0]}/index.html`;
    }
    return '../../index.html';
  }

  const pathParts = pathname.split('/cases/');
  if (pathParts.length > 1) {
    const basePath = pathParts[0] || '';
    return `${basePath}/index.html`;
  }

  return '/';
}
