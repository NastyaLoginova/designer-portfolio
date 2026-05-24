/**
 * Petrovich Services case — English
 */

const caseAsset = (file) =>
  window.PORTFOLIO_LOCALE.asset(`assets/cases/petrovich_services/${file}`);

const CASE_CONFIG = {
  id: 'petrovich_services',
  title: 'Petrovich',
  subtitle: 'Services concept',
  blocks: [
    {
      type: 'text',
      title: null,
      header: null,
      text: 'Designed the “Services” section with scenario-based logic, widgets, and prioritization to reduce random navigation and improve conversion to web services.',
    },
    {
      type: 'image',
      src: caseAsset('frame_1.png'),
    },
    {
      type: 'text',
      title: 'Context',
      header: null,
      text: 'Services were a potential growth area, but over time the section grew to 23 services and was underused.',
    },
    {
      type: 'text',
      title: 'Problem',
      markdown: true,
      text: 'The section was a flat list without structure or prioritization. As a result:\n- users did not understand what was inside each service\n- every item looked equally important\n- WebView transitions broke the experience',
    },
    {
      type: 'image',
      src: caseAsset('frame_2.png'),
    },
    {
      type: 'text',
      title: 'Research',
      markdown: true,
      text: 'I ran a qualitative study with card sorting followed by interviews.\n\nFindings:\n- users think in tasks, not services\n- names do not explain outcomes\n- context and the next step matter',
    },
    {
      type: 'text',
      title: 'Hypothesis',
      header: null,
      text: 'We assumed a scenario model with contextual widgets could make services clearer and increase engagement through a clearer entry and a shorter path to action.',
    },
    {
      type: 'text',
      title: 'Concepts',
      header: null,
      text: 'I explored several approaches to organizing the section.',
    },
    {
      type: 'text',
      title: null,
      header: 'Concept 1 — customizable list',
      text: 'The first concept let users build a personal favorites set.',
      spacingBefore: 20,
    },
    {
      type: 'image',
      src: caseAsset('frame_3.png'),
    },
    {
      type: 'text',
      title: null,
      header: null,
      text: 'I dropped this direction because it did not solve comprehension and customization required too much effort.',
      spacingBefore: 20,
    },
    {
      type: 'text',
      title: null,
      header: 'Concept 2 — improved list',
      markdown: true,
      text: 'Next, I simplified the current model without heavy customization.\n\nIn this concept:\n- services were grouped\n- names were rewritten around user actions\n- frequently used services appeared in favorites automatically',
    },
    {
      type: 'image',
      src: caseAsset('frame_4.png'),
    },
    {
      type: 'text',
      title: null,
      header: 'Concept 3 — scenarios with contextual widgets',
      text: 'The core idea — widgets that reflect the user’s current state and suggest the next step. Unlike a static list, the same scenario can look different depending on context.',
    },
    {
      type: 'image',
      src: caseAsset('frame_5.png'),
    },
    {
      type: 'text',
      title: null,
      header: null,
      text: 'I also explored promo blocks with video to strengthen the scenario model as an additional layer.',
      spacingBefore: 20,
    },
    {
      type: 'image',
      src: caseAsset('frame_6.png'),
    },
    {
      type: 'text',
      title: 'Outcome',
      header: null,
      markdown: true,
      text: 'The scenario model with contextual widgets became the main concept direction.\n\nCompared to earlier approaches, it:\n- made services clearer through scenarios and context\n- shortened the path to action\n- created a base for personalization and service growth\n\nThe concept was presented to the team and stakeholders and supported as a potential direction for the services section.',
    },
    {
      type: 'text',
      title: 'My role',
      header: null,
      markdown: true,
      text: '- identified systemic issues in the current services model\n- researched how users perceive services\n- shaped the product hypothesis and section direction\n- developed and compared several conceptual approaches\n- presented the concept to the team and stakeholders',
    },
  ],
};
