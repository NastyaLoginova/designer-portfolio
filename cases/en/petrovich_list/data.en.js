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
      text: 'Redesigned the product listing as infographic-heavy product images became more common: emphasized visuals and simplified card structure, which improved conversion.',
    },
    {
      type: 'image',
      src: caseAsset('frame_1.png'),
    },
    {
      type: 'text',
      title: 'Context',
      header: null,
      text: 'The listing is the key screen where users make purchase decisions. It was originally a list layout designed for sequential, detail-heavy browsing.',
    },
    {
      type: 'text',
      title: 'What changed',
      header: '1. Content',
      text: 'Sellers increasingly used infographic-rich product images (specs, benefits, sizes). Images became the primary source of product information.',
    },
    {
      type: 'text',
      title: null,
      header: '2. User patterns',
      text: 'We noticed users frequently opening product pages just to access basic information. Modern e-commerce patterns also encourage visual scanning behavior.',
      spacingBefore: 20,
    },
    {
      type: 'text',
      title: 'Problem',
      header: null,
      text: 'The existing list layout no longer matched the new content format or user behavior.',
    },
    {
      type: 'image',
      src: caseAsset('frame_2.png'),
    },
    {
      type: 'text',
      title: 'Hypothesis',
      header: null,
      text: 'We believed that switching to a tile layout with larger images would improve decision-making efficiency: increase conversion and reduce product-page visits by exposing key information earlier in the flow.',
    },
    {
      type: 'image',
      src: caseAsset('frame_3.png'),
    },
    {
      type: 'text',
      title: 'Validation',
      header: null,
      text: 'We launched an A/B test and analyzed the impact on key metrics.',
    },
    {
      type: 'image',
      src: caseAsset('frame_4.png'),
    },
    {
      type: 'text',
      title: 'A/B test results',
      markdown: true,
      text: '- +2% purchase conversion\n- browse depth increased\n- product page visits decreased\n- users did not switch back to list view\n- decision-making speed unchanged\n- returns unchanged',
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
      text: '- identified the problem and shaped the hypothesis\n- designed the solution and user flows\n- delivered iOS and Android designs and supervised implementation\n- participated in launching the A/B test and analyzing metrics',
    },
  ],
};
