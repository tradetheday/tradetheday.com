/**
 * Prop Firms Data Store for TradeTheDay
 * Proprietary trading firms that fund traders
 */

export interface PropFirmChallenge {
  name: string;
  accountSize: string;
  price: string;
  profitTarget: string;
  maxDrawdown: string;
  dailyDrawdown: string;
  profitSplit: string;
  timeLimit: string;
}

export interface PropFirmData {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  logo: string;
  url: string;
  affiliateUrl: string;
  reviewUrl: string;
  foundingYear: number;
  headquarters: {
    country: string;
    city: string;
  };

  // Key Stats
  maxFunding: string;
  profitSplit: string;
  startingPrice: string;
  platforms: string[];
  instruments: string[];

  // Scoring
  scores: {
    overall: number;
    pricing: number;
    rules: number;
    payouts: number;
    support: number;
    trustworthiness: number;
  };

  // Challenges/Programs
  challenges: PropFirmChallenge[];

  // Features
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];

  // Discount code info
  discountCode?: {
    code: string;
    discount: string;
    pageUrl: string;
  };

  // Display
  promoted: boolean;
  featured: boolean;
}

export const propFirms: PropFirmData[] = [
  {
    id: 'ftmo',
    name: 'FTMO',
    slug: 'ftmo',
    tagline: 'The Most Trusted Prop Firm in the Industry',
    description: 'FTMO is the world\'s leading prop trading firm, having paid out over $200M to traders. Known for fair rules, reliable payouts, and excellent support.',
    logo: '/images/propfirms/ftmo-logo.svg',
    url: 'https://ftmo.com',
    affiliateUrl: 'https://ftmo.com/?ref=tradetheday',
    reviewUrl: '/propfirms/ftmo',
    foundingYear: 2015,
    headquarters: {
      country: 'Czech Republic',
      city: 'Prague'
    },

    maxFunding: '$400,000',
    profitSplit: 'Up to 90%',
    startingPrice: '$155',
    platforms: ['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'DXtrade'],
    instruments: ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks'],

    scores: {
      overall: 4.7,
      pricing: 4.2,
      rules: 4.5,
      payouts: 4.9,
      support: 4.6,
      trustworthiness: 4.9
    },

    challenges: [
      {
        name: 'FTMO Challenge',
        accountSize: '$10,000',
        price: '$155',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '30 days'
      },
      {
        name: 'FTMO Challenge',
        accountSize: '$25,000',
        price: '$250',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '30 days'
      },
      {
        name: 'FTMO Challenge',
        accountSize: '$50,000',
        price: '$345',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '30 days'
      },
      {
        name: 'FTMO Challenge',
        accountSize: '$100,000',
        price: '$540',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '30 days'
      },
      {
        name: 'FTMO Challenge',
        accountSize: '$200,000',
        price: '$1,080',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '30 days'
      }
    ],

    features: [
      'Free trial available',
      'Scaling plan up to $400K',
      '90% profit split after scaling',
      'Bi-weekly payouts',
      'No time limit after funded',
      'Free retake on profit target miss'
    ],

    pros: [
      'Industry-leading reputation and trust',
      'Over $200M paid to traders',
      'Scaling plan to $400K',
      'Multiple platform options',
      'Excellent customer support',
      'Free trial to test the platform'
    ],
    cons: [
      'Higher challenge fees than competitors',
      'Strict trading rules',
      '5% daily drawdown can be limiting'
    ],

    bestFor: ['Serious traders', 'Those wanting reliable payouts', 'Traders prioritizing trust'],

    discountCode: {
      code: 'TRADETHEDAY',
      discount: '10% off challenge fee',
      pageUrl: '/propfirms/ftmo/discount-code/'
    },

    promoted: true,
    featured: true
  },
  {
    id: 'the-funded-trader',
    name: 'The Funded Trader',
    slug: 'the-funded-trader',
    tagline: 'Flexible Rules, Fast Payouts',
    description: 'The Funded Trader offers some of the most flexible trading rules in the industry with multiple challenge types to suit different trading styles.',
    logo: '/images/propfirms/tft-logo.svg',
    url: 'https://thefundedtraderprogram.com',
    affiliateUrl: 'https://thefundedtraderprogram.com/?ref=tradetheday',
    reviewUrl: '/propfirms/the-funded-trader',
    foundingYear: 2021,
    headquarters: {
      country: 'United States',
      city: 'Liberty Hill, TX'
    },

    maxFunding: '$600,000',
    profitSplit: 'Up to 90%',
    startingPrice: '$65',
    platforms: ['MetaTrader 4', 'MetaTrader 5', 'cTrader'],
    instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],

    scores: {
      overall: 4.3,
      pricing: 4.6,
      rules: 4.4,
      payouts: 4.2,
      support: 4.0,
      trustworthiness: 4.2
    },

    challenges: [
      {
        name: 'Standard Challenge',
        accountSize: '$5,000',
        price: '$65',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '35 days'
      },
      {
        name: 'Standard Challenge',
        accountSize: '$50,000',
        price: '$299',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '35 days'
      },
      {
        name: 'Standard Challenge',
        accountSize: '$200,000',
        price: '$949',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '35 days'
      }
    ],

    features: [
      'Multiple challenge types',
      'Rapid Challenge option',
      'Knight Challenge for aggressive traders',
      'Scaling up to $600K',
      'Weekend holding allowed',
      'News trading allowed'
    ],

    pros: [
      'Affordable pricing',
      'Flexible trading rules',
      'Multiple challenge options',
      'High max funding ($600K)',
      'Weekend holding permitted'
    ],
    cons: [
      'Newer company (est. 2021)',
      'Some payout delays reported',
      'Customer support can be slow'
    ],

    bestFor: ['Budget-conscious traders', 'News traders', 'Those wanting flexible rules'],

    promoted: false,
    featured: true
  },
  {
    id: 'e8-funding',
    name: 'E8 Funding',
    slug: 'e8-funding',
    tagline: 'Instant Funding & Flexible Programs',
    description: 'E8 Funding offers instant funding options and some of the most competitive pricing in the prop firm industry.',
    logo: '/images/propfirms/e8-logo.svg',
    url: 'https://e8funding.com',
    affiliateUrl: 'https://e8funding.com/?ref=tradetheday',
    reviewUrl: '/propfirms/e8-funding',
    foundingYear: 2021,
    headquarters: {
      country: 'United States',
      city: 'Dallas, TX'
    },

    maxFunding: '$400,000',
    profitSplit: 'Up to 80%',
    startingPrice: '$138',
    platforms: ['MetaTrader 4', 'MetaTrader 5'],
    instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],

    scores: {
      overall: 4.1,
      pricing: 4.7,
      rules: 4.2,
      payouts: 4.0,
      support: 3.8,
      trustworthiness: 4.0
    },

    challenges: [
      {
        name: 'E8 Track',
        accountSize: '$25,000',
        price: '$138',
        profitTarget: '8%',
        maxDrawdown: '8%',
        dailyDrawdown: '4%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'E8 Track',
        accountSize: '$50,000',
        price: '$248',
        profitTarget: '8%',
        maxDrawdown: '8%',
        dailyDrawdown: '4%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'E8 Track',
        accountSize: '$100,000',
        price: '$478',
        profitTarget: '8%',
        maxDrawdown: '8%',
        dailyDrawdown: '4%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      }
    ],

    features: [
      'No time limit on evaluation',
      'Lower profit targets (8%)',
      'ELEV8 scaling program',
      'Instant funding option',
      'Competitive pricing'
    ],

    pros: [
      'Very competitive pricing',
      'No time limit on challenges',
      'Lower profit targets than competitors',
      'Instant funding available'
    ],
    cons: [
      'Lower max drawdown (8%)',
      'Newer company',
      '80% max profit split (no 90% option)'
    ],

    bestFor: ['Budget traders', 'Those wanting no time pressure', 'Conservative traders'],

    promoted: false,
    featured: false
  },
  {
    id: 'true-forex-funds',
    name: 'True Forex Funds',
    slug: 'true-forex-funds',
    tagline: 'Simple Rules, Fast Scaling',
    description: 'True Forex Funds offers straightforward evaluation programs with some of the most trader-friendly rules in the industry, including no minimum trading days and flexible scaling options.',
    logo: '/images/propfirms/tff-logo.svg',
    url: 'https://trueforexfunds.com',
    affiliateUrl: 'https://trueforexfunds.com/?ref=tradetheday',
    reviewUrl: '/propfirms/true-forex-funds',
    foundingYear: 2021,
    headquarters: {
      country: 'Hungary',
      city: 'Budapest'
    },

    maxFunding: '$400,000',
    profitSplit: 'Up to 80%',
    startingPrice: '$59',
    platforms: ['MetaTrader 4', 'MetaTrader 5'],
    instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],

    scores: {
      overall: 4.0,
      pricing: 4.5,
      rules: 4.4,
      payouts: 3.8,
      support: 3.7,
      trustworthiness: 3.9
    },

    challenges: [
      {
        name: 'Standard Challenge',
        accountSize: '$10,000',
        price: '$59',
        profitTarget: '8%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Standard Challenge',
        accountSize: '$25,000',
        price: '$139',
        profitTarget: '8%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Standard Challenge',
        accountSize: '$50,000',
        price: '$259',
        profitTarget: '8%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Standard Challenge',
        accountSize: '$100,000',
        price: '$449',
        profitTarget: '8%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Standard Challenge',
        accountSize: '$200,000',
        price: '$899',
        profitTarget: '8%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      }
    ],

    features: [
      'No minimum trading days',
      'No time limit on evaluation',
      'Lower profit targets (8%)',
      'One-phase evaluation option',
      'Weekend holding allowed',
      'News trading allowed'
    ],

    pros: [
      'Very affordable pricing',
      'No minimum trading days requirement',
      'No time pressure on challenges',
      'Lower 8% profit target',
      'Flexible trading rules'
    ],
    cons: [
      'Newer company (founded 2021)',
      'Lower profit split (80% max)',
      'Some payout delays reported',
      'Less established track record'
    ],

    bestFor: ['Budget traders', 'Swing traders', 'Traders wanting flexibility'],

    promoted: false,
    featured: false
  },
  {
    id: 'fidelcrest',
    name: 'Fidelcrest',
    slug: 'fidelcrest',
    tagline: 'Micro Accounts & Aggressive Options',
    description: 'Fidelcrest offers both micro and standard accounts with aggressive challenge options for traders who want higher profit targets and scaling potential.',
    logo: '/images/propfirms/fidelcrest-logo.svg',
    url: 'https://fidelcrest.com',
    affiliateUrl: 'https://fidelcrest.com/?ref=tradetheday',
    reviewUrl: '/propfirms/fidelcrest',
    foundingYear: 2018,
    headquarters: {
      country: 'Cyprus',
      city: 'Nicosia'
    },

    maxFunding: '$2,000,000',
    profitSplit: 'Up to 90%',
    startingPrice: '$99',
    platforms: ['MetaTrader 4', 'MetaTrader 5'],
    instruments: ['Forex', 'Indices', 'Commodities', 'Crypto', 'Stocks'],

    scores: {
      overall: 4.2,
      pricing: 4.0,
      rules: 4.1,
      payouts: 4.2,
      support: 4.0,
      trustworthiness: 4.3
    },

    challenges: [
      {
        name: 'Micro Trader Normal',
        accountSize: '$10,000',
        price: '$99',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '60 days'
      },
      {
        name: 'Pro Trader Normal',
        accountSize: '$50,000',
        price: '$349',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '60 days'
      },
      {
        name: 'Pro Trader Normal',
        accountSize: '$100,000',
        price: '$549',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '60 days'
      },
      {
        name: 'Pro Trader Aggressive',
        accountSize: '$100,000',
        price: '$649',
        profitTarget: '20%',
        maxDrawdown: '20%',
        dailyDrawdown: '10%',
        profitSplit: '90%',
        timeLimit: '60 days'
      },
      {
        name: 'Pro Trader Normal',
        accountSize: '$500,000',
        price: '$1,999',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: '60 days'
      }
    ],

    features: [
      'Micro accounts from $10K',
      'Aggressive challenge options',
      'Up to 90% profit split',
      'Scaling to $2M max funding',
      'One-time fee, no monthly costs',
      'Weekend holding allowed'
    ],

    pros: [
      'Established since 2018',
      'Highest max funding ($2M)',
      'Aggressive options with 90% split',
      'Micro accounts for beginners',
      'Good track record for payouts'
    ],
    cons: [
      'Higher pricing than some competitors',
      'Aggressive accounts have stricter rules',
      '60-day time limit',
      'Customer support can be slow'
    ],

    bestFor: ['Aggressive traders', 'Those wanting high scaling', 'Micro account starters'],

    promoted: false,
    featured: true
  },
  {
    id: 'funded-next',
    name: 'Funded Next',
    slug: 'funded-next',
    tagline: 'Get Paid During Evaluation',
    description: 'Funded Next is unique in offering profit sharing even during the evaluation phase, letting traders earn while proving themselves.',
    logo: '/images/propfirms/fundednext-logo.svg',
    url: 'https://fundednext.com',
    affiliateUrl: 'https://fundednext.com/?ref=tradetheday',
    reviewUrl: '/propfirms/funded-next',
    foundingYear: 2022,
    headquarters: {
      country: 'United Arab Emirates',
      city: 'Dubai'
    },

    maxFunding: '$4,000,000',
    profitSplit: 'Up to 95%',
    startingPrice: '$59',
    platforms: ['MetaTrader 4', 'MetaTrader 5'],
    instruments: ['Forex', 'Indices', 'Commodities', 'Crypto'],

    scores: {
      overall: 4.3,
      pricing: 4.6,
      rules: 4.3,
      payouts: 4.4,
      support: 4.1,
      trustworthiness: 4.2
    },

    challenges: [
      {
        name: 'Evaluation',
        accountSize: '$6,000',
        price: '$59',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Evaluation',
        accountSize: '$15,000',
        price: '$119',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Evaluation',
        accountSize: '$50,000',
        price: '$269',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Evaluation',
        accountSize: '$100,000',
        price: '$519',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      },
      {
        name: 'Evaluation',
        accountSize: '$200,000',
        price: '$999',
        profitTarget: '10%',
        maxDrawdown: '10%',
        dailyDrawdown: '5%',
        profitSplit: '80%',
        timeLimit: 'Unlimited'
      }
    ],

    features: [
      '15% profit share during evaluation',
      'Up to 95% profit split after funding',
      'No time limit on challenges',
      'Scaling to $4M maximum',
      'Express model available',
      'Bi-weekly payouts'
    ],

    pros: [
      'Earn during evaluation phase',
      'Highest profit split in industry (95%)',
      'Massive scaling potential ($4M)',
      'Affordable starting price',
      'No time limits'
    ],
    cons: [
      'Very new company (2022)',
      'Rapid growth raises sustainability questions',
      'Support can be overwhelmed',
      'Some rule complexity'
    ],

    bestFor: ['Traders wanting immediate earnings', 'High-volume scalers', 'Experienced prop traders'],

    promoted: false,
    featured: true
  }
];

/**
 * Get a prop firm by ID
 */
export function getPropFirmById(id: string): PropFirmData | undefined {
  return propFirms.find(pf => pf.id === id);
}

/**
 * Get a prop firm by slug
 */
export function getPropFirmBySlug(slug: string): PropFirmData | undefined {
  return propFirms.find(pf => pf.slug === slug);
}

/**
 * Get featured prop firms
 */
export function getFeaturedPropFirms(): PropFirmData[] {
  return propFirms.filter(pf => pf.featured);
}

/**
 * Get promoted prop firms
 */
export function getPromotedPropFirms(): PropFirmData[] {
  return propFirms.filter(pf => pf.promoted);
}

/**
 * Get prop firms sorted by score
 */
export function getPropFirmsByScore(limit?: number): PropFirmData[] {
  const sorted = [...propFirms].sort((a, b) => b.scores.overall - a.scores.overall);
  return limit ? sorted.slice(0, limit) : sorted;
}
