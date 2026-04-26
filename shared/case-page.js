/**
 * Основной скрипт для страницы кейса
 */

function initCase() {
  const app = document.getElementById('case-app');
  if (!app) return;

  const header = createCaseHeader({
    caseId: CASE_CONFIG.id,
    caseName: CASE_CONFIG.title,
  });

  app.appendChild(header);

  const mainContent = document.createElement('main');
  mainContent.className = 'case-main';

  const content = createCaseContent(CASE_CONFIG.blocks, {
    title: CASE_CONFIG.title,
    subtitle: CASE_CONFIG.subtitle,
  });
  mainContent.appendChild(content);

  app.appendChild(mainContent);

  initCaseNavigation();
  initVideosAutoplay();
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
  initCase();
});
