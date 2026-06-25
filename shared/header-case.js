/**
 * Навигация для страниц кейсов v2
 * Хедер с кнопкой закрытия (X) в правом верхнем углу
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

function createCaseHeaderV2() {
  const homeHref = getHomeHref();

  const header = createElement('header', {
    className: 'case-header-v2',
  });

  const closeBtn = createElement('a', {
    className: 'case-header-v2__close',
    attrs: {
      href: homeHref,
      'aria-label': 'Close',
    },
  });

  header.appendChild(closeBtn);

  return header;
}

function initCaseNavigationV2() {
  const homeHref = getHomeHref();

  document.querySelectorAll('.case-header-v2__close').forEach((btn) => {
    btn.addEventListener('click', (e) => {
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
