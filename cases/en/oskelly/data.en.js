/**
 * Oskelly case — English
 */

const caseAsset = (file) =>
  window.PORTFOLIO_LOCALE.asset(`assets/cases/oskelly/${file}`);

const CASE_CONFIG = {
  id: 'oskelly',
  title: 'Oskelly',
  subtitle: 'Shop‑in‑shop: curated category storefronts',
  blocks: [
    {
      type: 'text',
      title: null,
      header: null,
      text: 'Designed a shop‑in‑shop model — dedicated category storefronts with curated boutique assortments. The solution introduced “mini‑store” scenarios into the ecosystem and prepared the product for scale.',
    },
    {
      type: 'video',
      src: caseAsset('oskelly.mp4'),
    },
    {
      type: 'text',
      title: 'Context',
      text: 'As part of a redesign, the product gained a new layer — shop‑in‑shop sections. Each section is a standalone direction with its own assortment. Shop‑in‑shop works like a “mini‑store” with its own home, catalog, favorites, and cart.',
    },
    {
      type: 'text',
      title: 'Solution',
      header: '1. Visual differentiation',
      text: 'Early on, we treated shop‑in‑shop as separate spaces with a unique visual language. I designed the storefront home as the key screen that shapes first impressions of the category.',
    },
    {
      type: 'image',
      src: caseAsset('frame_1.png'),
    },
    {
      type: 'text',
      markdown: true,
      text: 'When designing the page, I focused on:\n- making it clear which section the user is in\n- quick assortment overview\n- shorter path to the target business action (purchase)\n- browse-and-explore scenarios via collections and extra entry points',
    },
    {
      type: 'image',
      src: caseAsset('frame_2.png'),
    },
    {
      type: 'text',
      header: '2. System approach',
      markdown: true,
      text: 'After estimating build and maintenance cost, we moved to the design system:\n- adapted existing components for the new scenario\n- kept differentiation through content and layout',
    },
    {
      type: 'image',
      src: caseAsset('frame_3.png'),
    },
    {
      type: 'text',
      title: 'Key decision',
      text: 'Dropped unique styling for every storefront in favor of a system-based approach.',
    },
    {
      type: 'image',
      src: caseAsset('frame_4.png'),
    },
    {
      type: 'text',
      title: 'Outcome',
      markdown: true,
      text: 'A single shop‑in‑shop model rolled out across categories:\n- the new scenario fits naturally into the ecosystem\n- a foundation for further scaling',
    },
    {
      type: 'image',
      src: caseAsset('frame_5.png'),
    },
    {
      type: 'text',
      title: 'My role',
      markdown: true,
      text: '- designed shop‑in‑shop structure and user flows\n- created the visual concept for the streetwear category\n- presented the solution to the client\n- adapted designs to the existing design system',
    },
  ],
};
