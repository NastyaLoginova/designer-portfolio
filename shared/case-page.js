/**
 * Основной скрипт для страницы кейса v2
 * С плавной анимацией появления
 */

function parseSimpleMarkdownBlocks(markdownText = '') {
  const lines = markdownText.split('\n');
  const blocks = [];
  let paragraphLines = [];
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const paragraph = paragraphLines.join(' ').trim();
    if (paragraph) {
      blocks.push({ type: 'paragraph', text: paragraph });
    }
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push({ type: 'list', items: [...listItems] });
    listItems = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph();
      listItems.push(trimmed.slice(2).trim());
      return;
    }

    flushList();
    paragraphLines.push(trimmed);
  });

  flushParagraph();
  flushList();

  return blocks;
}

function initCaseV2() {
  const app = document.getElementById('case-app');
  if (!app) return;

  app.classList.add('case-v2');

  const header = createCaseHeaderV2();

  app.appendChild(header);

  const mainContent = document.createElement('main');
  mainContent.className = 'case-main-v2';

  const content = createCaseContentV2(CASE_CONFIG.blocks, {
    title: CASE_CONFIG.title,
    logo: CASE_CONFIG.logo,
    defaultBlockSpacing: CASE_CONFIG.defaultBlockSpacing,
  });
  mainContent.appendChild(content);

  app.appendChild(mainContent);

  initCaseNavigationV2();
  initVideosAutoplayV2();
  updateCaseHeaderScrollState();
}

function updateCaseHeaderScrollState() {
  const header = document.querySelector('.case-header-v2');
  if (!header) return;
  const scrolled = window.scrollY > 0;
  header.classList.toggle('case-header-v2--scrolled', scrolled);
}

function createCaseLeadV2(title, logo) {
  if (!title && !logo) return null;

  const lead = createElement('div', { className: 'case-content-v2__lead' });

  if (logo) {
    const titleRow = createElement('div', { className: 'case-content-v2__lead-title-row' });
    const titleText = createElement('span', {
      className: 'case-content-v2__lead-title-row-text',
      text: title,
    });
    const logoImg = createElement('img', {
      className: 'case-content-v2__lead-logo',
      attrs: { src: logo, alt: '', 'aria-hidden': 'true' },
    });
    titleRow.appendChild(titleText);
    titleRow.appendChild(logoImg);
    lead.appendChild(titleRow);
  } else if (title) {
    const leadTitle = createElement('p', {
      className: 'case-content-v2__lead-title-row-text',
      text: title,
    });
    lead.appendChild(leadTitle);
  }

  return lead;
}

function createCaseBlockV2(block) {
  switch (block.type) {
    case 'text':
      return createCaseTextBlockV2(block);

    case 'image':
      return createCaseImageBlockV2(block);

    case 'video':
      return createCaseVideoBlockV2(block);

    default:
      console.warn(`Unknown block type: ${block.type}`);
      return null;
  }
}

function createCaseTextBlockV2(block) {
  const wrapper = createElement('div', { className: 'case-block-v2 case-block-v2--text' });
  const content = createElement('div', { className: 'case-block-v2__content' });

  if (block.title) {
    const title = createElement('h2', {
      className: 'case-block-v2__title',
      text: block.title,
    });
    content.appendChild(title);
  }

  if (block.subtitle) {
    const subtitle = createElement('h3', {
      className: 'case-block-v2__subtitle',
      text: block.subtitle,
    });
    content.appendChild(subtitle);
  }

  if (block.header) {
    const header = createElement('h4', {
      className: 'case-block-v2__header',
      text: block.header,
    });
    content.appendChild(header);
  }

  if (block.text) {
    if (block.markdown) {
      const markdown = createElement('div', { className: 'case-block-v2__markdown' });

      const markdownBlocks = parseSimpleMarkdownBlocks(block.text);
      markdownBlocks.forEach((mb) => {
        if (mb.type === 'paragraph') {
          const p = createElement('p', {
            className: 'case-block-v2__text case-block-v2__text--markdown',
            text: mb.text,
          });
          markdown.appendChild(p);
          return;
        }
        if (mb.type === 'list') {
          const list = createElement('ul', { className: 'case-block-v2__list' });
          mb.items.forEach((item) => {
            const li = createElement('li', {
              className: 'case-block-v2__list-item',
              text: item,
            });
            list.appendChild(li);
          });
          markdown.appendChild(list);
        }
      });

      content.appendChild(markdown);
    } else {
      const text = createElement('p', {
        className: 'case-block-v2__text case-block-v2__text--preserve-lines',
        text: block.text,
      });
      content.appendChild(text);
    }
  }

  wrapper.appendChild(content);
  return wrapper;
}

function createCaseImageBlockV2(block) {
  const wrapper = createElement('div', { className: 'case-block-v2 case-block-v2--image' });
  const image = createElement('img', {
    className: 'case-block-v2__image',
    attrs: { src: block.src, alt: block.alt || 'Case image' },
  });
  wrapper.appendChild(image);
  return wrapper;
}

function createCaseVideoBlockV2(block) {
  const wrapper = createElement('div', { className: 'case-block-v2 case-block-v2--video' });
  const video = createElement('video', {
    className: 'case-block-v2__video',
    attrs: {
      src: block.src,
      autoplay: true,
      loop: true,
      muted: true,
      preload: 'auto',
      playsinline: true,
    },
  });
  wrapper.appendChild(video);
  if (block.borderRadius != null) {
    video.style.borderRadius = `${block.borderRadius}px`;
  }
  return wrapper;
}

const DEFAULT_BLOCK_SPACING_V2 = 64;
const MEDIA_BLOCK_SPACING_V2 = 40;
const LEAD_FIRST_BLOCK_SPACING_V2 = 20;

function createCaseContentV2(blocks = [], options = {}) {
  const container = createElement('div', { className: 'case-content-v2' });
  const lead = createCaseLeadV2(options.title, options.logo);
  const defaultSpacing = options.defaultBlockSpacing ?? DEFAULT_BLOCK_SPACING_V2;

  if (lead) {
    container.appendChild(lead);
  }

  let appendedBlockCount = 0;
  let prevBlockWasMedia = false;
  blocks.forEach((block) => {
    const blockElement = createCaseBlockV2(block);
    if (!blockElement) return;

    const isMedia = block.type === 'image' || block.type === 'video';
    const customSpacing = block.spacingBefore;

    let marginTop;
    if (appendedBlockCount === 0) {
      marginTop = LEAD_FIRST_BLOCK_SPACING_V2;
    } else if (customSpacing != null) {
      marginTop = customSpacing;
    } else if (isMedia || prevBlockWasMedia) {
      marginTop = MEDIA_BLOCK_SPACING_V2;
    } else {
      marginTop = defaultSpacing;
    }

    blockElement.style.marginTop = `${marginTop}px`;

    container.appendChild(blockElement);
    appendedBlockCount += 1;
    prevBlockWasMedia = isMedia;
  });

  return container;
}

function initVideosAutoplayV2() {
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
  initCaseV2();
});

window.addEventListener('scroll', () => {
  updateCaseHeaderScrollState();
}, { passive: true });
