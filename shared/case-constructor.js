/**
 * Универсальный конструктор для блоков кейса
 * Поддерживает текст, изображения и видео в случайном порядке
 */

function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  const { className, text, attrs, children, html } = options;

  if (className) {
    el.className = className;
  }

  if (text) {
    el.textContent = text;
  }

  if (html) {
    el.innerHTML = html;
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

function parseSimpleMarkdownBlocks(markdownText = '') {
  const lines = markdownText.split('\n');
  const blocks = [];
  let paragraphLines = [];
  let listItems = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const paragraph = paragraphLines.join(' ').trim();
    if (paragraph) {
      blocks.push({
        type: 'paragraph',
        text: paragraph,
      });
    }
    paragraphLines = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push({
      type: 'list',
      items: [...listItems],
    });
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

function createCaseBlock(block) {
  const container = createElement('div', { className: 'case-block' });

  switch (block.type) {
    case 'text':
      return createTextBlock(block);

    case 'image':
      return createImageBlock(block);

    case 'video':
      return createVideoBlock(block);

    default:
      console.warn(`Unknown block type: ${block.type}`);
      return null;
  }
}

function createTextBlock(block) {
  const wrapper = createElement('div', { className: 'case-block case-block--text' });

  const content = createElement('div', { className: 'case-block__content' });

  if (block.title) {
    const title = createElement('h2', {
      className: 'case-block__title',
      text: block.title,
    });
    content.appendChild(title);
  }

  if (block.subtitle) {
    const subtitle = createElement('h3', {
      className: 'case-block__subtitle',
      text: block.subtitle,
    });
    content.appendChild(subtitle);
  }

  if (block.header) {
    const header = createElement('h4', {
      className: 'case-block__header',
      text: block.header,
    });
    content.appendChild(header);
  }

  if (block.text) {
    if (block.markdown) {
      const markdown = createElement('div', {
        className: 'case-block__markdown',
      });

      const markdownBlocks = parseSimpleMarkdownBlocks(block.text);
      markdownBlocks.forEach((markdownBlock) => {
        if (markdownBlock.type === 'paragraph') {
          const paragraph = createElement('p', {
            className: 'case-block__text case-block__text--markdown',
            text: markdownBlock.text,
          });
          markdown.appendChild(paragraph);
          return;
        }

        if (markdownBlock.type === 'list') {
          const list = createElement('ul', {
            className: 'case-block__list',
          });
          markdownBlock.items.forEach((item) => {
            const listItem = createElement('li', {
              className: 'case-block__list-item',
              text: item,
            });
            list.appendChild(listItem);
          });
          markdown.appendChild(list);
        }
      });

      content.appendChild(markdown);
    } else {
      const text = createElement('p', {
        className: 'case-block__text case-block__text--preserve-lines',
        text: block.text,
      });
      content.appendChild(text);
    }
  }

  wrapper.appendChild(content);
  return wrapper;
}

function createImageBlock(block) {
  const wrapper = createElement('div', { className: 'case-block case-block--image' });

  const image = createElement('img', {
    className: 'case-block__image',
    attrs: {
      src: block.src,
      alt: block.alt || 'Case image',
    },
  });

  wrapper.appendChild(image);
  return wrapper;
}

function createVideoBlock(block) {
  const wrapper = createElement('div', { className: 'case-block case-block--video' });

  const video = createElement('video', {
    className: 'case-block__video',
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
  return wrapper;
}

function createImageTextBlock(block) {
  const wrapper = createElement('div', {
    className: `case-block case-block--image-text case-block--image-text-${block.layout || 'left'}`,
  });

  const content = createElement('div', { className: 'case-block__content' });

  if (block.title) {
    const title = createElement('h2', {
      className: 'case-block__title',
      text: block.title,
    });
    content.appendChild(title);
  }

  if (block.text) {
    const text = createElement('p', {
      className: 'case-block__text',
      text: block.text,
    });
    content.appendChild(text);
  }

  const image = createElement('img', {
    className: 'case-block__image',
    attrs: {
      src: block.src,
      alt: block.alt || 'Case image',
    },
  });

  wrapper.appendChild(content);
  wrapper.appendChild(image);

  return wrapper;
}

function createCaseLead(title, subtitle) {
  if (!title && !subtitle) return null;

  const lead = createElement('div', { className: 'case-content__lead' });

  if (title) {
    const leadTitle = createElement('p', {
      className: 'case-content__lead-title',
      text: title,
    });
    lead.appendChild(leadTitle);
  }

  if (subtitle) {
    const leadSubtitle = createElement('h1', {
      className: 'case-content__lead-subtitle',
      text: subtitle,
    });
    lead.appendChild(leadSubtitle);
  }

  return lead;
}

const DEFAULT_BLOCK_SPACING_BEFORE = 40;
const LEAD_FIRST_BLOCK_SPACING_OFFSET = 34;

function createCaseContent(blocks = [], options = {}) {
  const container = createElement('div', { className: 'case-content' });
  const lead = createCaseLead(options.title, options.subtitle);
  const defaultSpacing =
    options.defaultBlockSpacing ?? DEFAULT_BLOCK_SPACING_BEFORE;

  if (lead) {
    container.appendChild(lead);
  }

  let appendedBlockCount = 0;
  blocks.forEach((block) => {
    const blockElement = createCaseBlock(block);
    if (!blockElement) return;

    const spacing = block.spacingBefore ?? defaultSpacing;
    let marginTop;
    if (appendedBlockCount === 0) {
      marginTop = 0;
    } else {
      marginTop = spacing;
    }

    if (marginTop !== 0) {
      blockElement.style.marginTop = `${marginTop}px`;
    }

    container.appendChild(blockElement);
    appendedBlockCount += 1;
  });

  return container;
}