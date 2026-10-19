/**
 * Everything on the home page that isn't a case study lives here.
 * A link set to `null` is hidden on the site until you fill it in,
 * so nothing ever points to a dead page.
 */

export const links = {
  email: 'heismckee@gmail.com',
  github: 'https://github.com/heismckee',
  youtube: 'https://www.youtube.com/@NaimMcKee1',
  imdb: 'https://www.imdb.com/name/nm14832153/',
  hockeystack: 'https://www.hockeystack.com/case-studies/dice',
  linkedin: null as string | null,   // TODO: your LinkedIn profile URL
  resume: null as string | null,     // TODO: put resume.pdf in /public and set this to '/resume.pdf'
};

export const hero = {
  eyebrow: 'Marketing · Growth · Analytics · AI',
  lines: ['Marketing', 'Leader.', 'Learning.', 'Adapting.'],
  scriptLine: 'Delivering.',
  supporting:
    "I'm Na'im McKee. I helped take Ping Identity to $90M before its IPO, built the growth model Dice planned from, and grew marketing's share of new revenue at InfoTrust to 43%.",
  portrait: { src: '/images/hero-portrait.jpg', alt: "Na'im McKee in a grey suit, smiling, hands raised mid-gesture", width: 840, height: 1075 },
  script: 'To boldly go',
};

export const proofPoints = [
  { number: '+36%', label: 'Marketing ROI after rolling out multi-touch attribution at Dice' },
  { number: '43%', label: "Marketing's share of new and growth ARR at InfoTrust" },
  { number: '0→25K', label: 'Executive users in under a year at AboveBoard' },
];

export type Build = {
  key: 'ppo' | 'mmm' | 'geo' | 'agent' | 'boxbox' | 'codeblack';
  type: string;
  title: string;
  description: string;
  cta: string;
  href: string | null;
};

export const featuredBuild = {
  eyebrow: 'Featured · Research short',
  title: 'What is snow worth?',
  description:
    'How snowfall drives U.S. skier visits, what each visit is worth to the wider economy, and how that changes by 2050 under two climate scenarios.',
  // Shown as the mountain illustration from the comp; swap in a video still later if you like.
  video: null as string | null,      // TODO: video URL
  sources: null as string | null,    // TODO: model and sources URL
};

export const builds: Build[] = [
  {
    key: 'ppo',
    type: 'Colab · Reinforcement learning',
    title: 'Pipeline PPO',
    description: 'An agent that learns which sales play to run each week. +16% net value per deal over the playbook.',
    cta: 'View the code',
    href: 'https://github.com/heismckee/pipeline-ppo',
  },
  {
    key: 'mmm',
    type: 'GitHub · Python',
    title: 'Marketing mix modeling from first principles',
    description: 'Adstock, saturation and budget response curves, built step by step so every number is traceable.',
    cta: 'View the code',
    href: 'https://github.com/heismckee/mmm-from-first-principles',
  },
  {
    key: 'geo',
    type: 'GitHub · Python',
    title: 'Geo incrementality testing',
    description: 'Matched-market tests that measure lift instead of assuming it.',
    cta: 'View the code',
    href: 'https://github.com/heismckee/incrementality-geo-test',
  },
  {
    key: 'agent',
    type: 'GitHub · AI agent',
    title: 'Self-auditing ad budget agent',
    description: 'Proposes budget moves, checks its own math and asks permission before it changes anything.',
    cta: 'View the code',
    href: null, // TODO: repo or Colab URL
  },
  {
    key: 'boxbox',
    type: 'Browser game',
    title: 'Box Box Box!',
    description: 'A motorsport strategy game that runs in the browser.',
    cta: 'Play on itch.io',
    href: null, // TODO: itch.io URL
  },
  {
    key: 'codeblack',
    type: 'Product · Voice AI',
    title: 'CodeBlack',
    description: 'A voice AI product. In user testing now.',
    cta: 'Learn more',
    href: null, // TODO: CodeBlack URL
  },
];

export const content = [
  { channel: 'YouTube', title: 'Marketing analytics and AI, built on screen', description: 'Code-alongs and research shorts: mix models, incrementality, RL for pipelines.', cta: 'Watch', href: links.youtube },
  { channel: 'LinkedIn', title: 'Carousels on growth and measurement', description: 'Short, chart-first posts on what to measure and why.', cta: 'Read', href: links.linkedin },
  { channel: 'Series', title: 'Racing the Curve', description: 'Motorsport history, marketing and the stories behind the sponsorships.', cta: 'Watch', href: null as string | null },
  { channel: 'Speaking', title: 'Shop.org, Microsoft Inspire, CES, GELF', description: 'Talks and panels on digital marketing, analytics and growth.', cta: 'See talks', href: null as string | null },
  { channel: 'Case study', title: 'HockeyStack × Dice', description: 'How Dice used multi-touch attribution to raise marketing ROI 36%.', cta: 'Read', href: links.hockeystack },
  { channel: 'On TV', title: 'Screen credits', description: 'Television appearances, listed on IMDb.', cta: 'View on IMDb', href: links.imdb },
];

export const about = {
  headline: 'I run marketing as a system I can measure.',
  paragraphs: [
    "At Dice, I built the demand waterfall and the growth model that became the standard for our QBRs and board reporting. At InfoTrust, I rebuilt the team, the brand and the go-to-market plan, and marketing's share of new revenue reached 43%. At AboveBoard, I was the first marketing hire and took the platform from zero to 25,000 executives in under a year.",
    "Lately I build in public: marketing mix models, incrementality tests and AI agents that ask permission before they change anything. I'm looking for a Director or VP role where growth and measurement sit in the same seat.",
  ],
  trail: 'Dice · InfoTrust · AboveBoard · Cincinnati → Denver',
  portrait: { src: '/images/about-portrait.jpg', alt: "Black-and-white portrait of Na'im McKee, arms crossed, smiling", width: 840, height: 840 },
};

export const contact = {
  line: 'Open to Director and VP roles in marketing, growth and analytics.',
  footer: "© 2026 Na'im McKee · Englewood, Colorado",
  script: 'Then sell it.',
};
