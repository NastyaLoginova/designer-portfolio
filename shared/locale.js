/**
 * URL-based locale:
 * - Main: Russian at site root, English under /en/
 * - Cases: /cases/ru/{id}/ and /cases/en/{id}/
 */
(function () {
  const LOCALE_EN = 'en';
  const LOCALE_RU = 'ru';

  function normalizePathname(pathname) {
    let path = pathname || '/';
    if (path.endsWith('/index.html')) {
      path = path.slice(0, -'/index.html'.length) || '/';
    }
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }
    return path;
  }

  function hasEnglishSegment(path) {
    return /\/en(\/|$)/.test(path);
  }

  function getCaseLocaleFromPath(path) {
    const match = path.match(/\/cases\/(ru|en)(\/|$)/);
    if (!match) {
      return null;
    }
    return match[1] === 'en' ? LOCALE_EN : LOCALE_RU;
  }

  function getLocale() {
    const path = normalizePathname(window.location.pathname);
    const caseLocale = getCaseLocaleFromPath(path);
    if (caseLocale) {
      return caseLocale;
    }
    return hasEnglishSegment(path) ? LOCALE_EN : LOCALE_RU;
  }

  function getPathToSiteRoot() {
    const path = normalizePathname(window.location.pathname);
    if (!path || path === '/') {
      return './';
    }
    const segments = path.split('/').filter(Boolean);
    if (!segments.length) {
      return './';
    }
    return `${'../'.repeat(segments.length)}`;
  }

  function pathToIndexHtml(relativeFromRoot) {
    const root = getPathToSiteRoot();
    const clean = relativeFromRoot.replace(/^\//, '').replace(/\/$/, '');
    if (!clean) {
      return `${root}index.html`;
    }
    return `${root}${clean}/index.html`;
  }

  function getSiteBasePath() {
    const segments = getSiteBaseSegments();
    return segments.length ? `/${segments.join('/')}` : '';
  }

  /** Absolute path from site root — same for all locales */
  function asset(pathFromRoot) {
    const normalized = pathFromRoot.replace(/^\//, '');
    const base = getSiteBasePath();
    return base ? `${base}/${normalized}` : `/${normalized}`;
  }

  function getSiteBaseSegments() {
    const path = normalizePathname(window.location.pathname);
    const parts = path.split('/').filter(Boolean);
    const base = [];
    for (const part of parts) {
      // Stop before locale segments (main /en/ or cases/ru|en/...)
      if (part === 'cases' || part === 'en' || part === 'ru') {
        break;
      }
      base.push(part);
    }
    return base;
  }

  function homeHref() {
    const base = getSiteBaseSegments();
    const basePath = base.length ? `${base.join('/')}/` : '';
    if (getLocale() === LOCALE_EN) {
      return pathToIndexHtml(`${basePath}en`.replace(/\/$/, ''));
    }
    return pathToIndexHtml(basePath.replace(/\/$/, ''));
  }

  function caseHref(caseId) {
    const base = getSiteBaseSegments();
    const basePath = base.length ? `${base.join('/')}/` : '';
    const caseLocale = getLocale() === LOCALE_EN ? LOCALE_EN : LOCALE_RU;
    return pathToIndexHtml(`${basePath}cases/${caseLocale}/${caseId}`);
  }

  function applyDocumentLocale() {
    document.documentElement.lang = getLocale() === LOCALE_EN ? 'en' : 'ru';
  }

  window.PORTFOLIO_LOCALE = {
    locale: getLocale(),
    isEn: getLocale() === LOCALE_EN,
    asset,
    homeHref,
    caseHref,
    strings:
      getLocale() === LOCALE_EN
        ? {
            homeLabel: 'HOME',
            readCaseAria: (title, subtitle) =>
              `Read case: ${title}${subtitle ? ` — ${subtitle}` : ''}`,
          }
        : {
            homeLabel: 'НА ГЛАВНУЮ',
            readCaseAria: (title, subtitle) =>
              `Читать кейс: ${title}${subtitle ? ` — ${subtitle}` : ''}`,
          },
  };

  applyDocumentLocale();
})();
