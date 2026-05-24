/**
 * Petrovich listing case — English
 */

const caseAsset = (file) =>
  window.PORTFOLIO_LOCALE.asset(`assets/cases/petrovich_list/${file}`);

const CASE_CONFIG = {
  id: 'petrovich_list',
  title: 'Petrovich',
  subtitle: 'New listing format',
  blocks: [
    {
      type: 'text',
      title: null,
      header: null,
      text: 'Reworked product listing as infographics grew on images: emphasized visuals and simplified card structure, which improved conversion.',
    },
    {
      type: 'image',
      src: caseAsset('frame_1.png'),
    },
    {
      type: 'text',
      title: 'Context',
      header: null,
      text: 'Listing is the key screen where users decide to buy. It was originally a list layout designed for sequential, detail-heavy browsing.',
    },
    {
      type: 'text',
      title: 'What changed',
      header: '1. Content',
      text: 'Sellers started using images with infographics (specs, benefits, sizes). The image became the primary information carrier.',
    },
    {
      type: 'text',
      title: null,
      header: '2. User patterns',
      text: 'We saw users often opening the product page for basic information. E‑commerce patterns also train people to choose through visual scanning.',
      spacingBefore: 20,
    },
    {
      type: 'text',
      title: 'Problem',
      header: null,
      text: 'The list format was not adapted to the new content type or behavior.',
    },
    {
      type: 'image',
      src: caseAsset('frame_2.png'),
    },
    {
      type: 'text',
      title: 'Hypothesis',
      header: null,
      text: 'We believed switching to a tile layout with larger images would improve choice efficiency — higher conversion and fewer product-page visits, because users could get key information without extra steps.',
    },
    {
      type: 'image',
      src: caseAsset('frame_3.png'),
    },
    {
      type: 'text',
      title: 'Measuring results',
      header: null,
      text: 'We ran an A/B test and analyzed metrics together.',
    },
    {
      type: 'image',
      src: caseAsset('frame_4.png'),
    },
    {
      type: 'text',
      title: 'A/B test results',
      markdown: true,
      text: '- +2% purchase conversion\n- browse depth increased\n- product-page visits decreased\n- users did not switch back to list view\n- decision speed unchanged\n- returns unchanged',
    },
    {
      type: 'image',
      src: caseAsset('frame_5.png'),
    },
    {
      type: 'text',
      title: 'Next steps',
      header: null,
      text: 'We plan further research with a focus on segmentation: which categories work better with tiles and where list view remains preferable.',
    },
    {
      type: 'text',
      title: 'My role',
      markdown: true,
      text: '- identified the problem and shaped the hypothesis\n- designed the solution and user flows\n- delivered iOS and Android designs and reviewed implementation\n- participated in launching the A/B test and analyzing metrics',
    },
  ],
};
