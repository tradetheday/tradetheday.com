/**
 * Centralized Broker Data Store for TradeTheDay
 * Used by the AI Broker Selector and broker comparison pages
 */

export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';
export type TradingStyle = 'day-trading' | 'swing' | 'scalping' | 'long-term' | 'copy-trading';
export type AssetFocus = 'forex' | 'crypto' | 'stocks' | 'commodities' | 'indices' | 'etfs';
export type BudgetRange = 'low' | 'medium' | 'high';
export type PriorityFeature = 'low-fees' | 'education' | 'copy-trading' | 'regulation' | 'mobile-app' | 'advanced-tools' | 'crypto-selection' | 'leverage';

export interface BrokerRegulation {
  authority: string;
  country: string;
  licenseNumber: string;
  tier: 1 | 2 | 3; // 1 = top tier (FCA, ASIC, etc), 2 = good (CySEC), 3 = offshore
}

export interface BrokerData {
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
  minDeposit: number;
  minDepositDisplay: string;
  spreadsFrom: string;
  leverage: string;
  instruments: number;
  instrumentsDisplay: string;
  monthlyVolume?: string;
  userCount?: string;

  // Scoring Attributes (used by AI selector)
  experienceLevels: ExperienceLevel[];
  tradingStyles: TradingStyle[];
  assetFocus: AssetFocus[];
  budgetRange: BudgetRange[];
  priorityFeatures: PriorityFeature[];

  // Individual Scores (out of 10)
  scores: {
    overall: number;
    fees: number;
    platforms: number;
    research: number;
    education: number;
    customerService: number;
    safety: number;
    mobileApp: number;
  };

  // Regulations
  regulations: BrokerRegulation[];

  // Features
  platforms: string[];
  paymentMethods: string[];
  accountTypes: string[];

  // Pros and Cons
  pros: string[];
  cons: string[];

  // Best For tags
  bestFor: string[];

  // Partner code info (if applicable)
  partnerCode?: {
    code: string;
    bonus: string;
    pageUrl: string;
  };

  // Type of broker
  brokerType: 'forex' | 'crypto' | 'multi-asset' | 'stock';

  // Is this broker promoted/sponsored?
  promoted: boolean;
}

export const brokers: BrokerData[] = [
  {
    id: 'avatrade',
    name: 'AvaTrade',
    slug: 'avatrade',
    tagline: 'Award-Winning Multi-Asset Broker',
    description: 'AvaTrade is a globally regulated multi-asset broker offering forex, CFDs, cryptocurrencies, and options trading with award-winning platforms and comprehensive educational resources.',
    logo: '/images/brokers/avatrade-logo.svg',
    url: 'https://www.avatrade.com',
    affiliateUrl: 'https://www.avatrade.com/?aid=tradetheday',
    reviewUrl: '/brokers/avatrade',
    foundingYear: 2006,
    headquarters: {
      country: 'Ireland',
      city: 'Dublin'
    },
    minDeposit: 100,
    minDepositDisplay: '$100',
    spreadsFrom: '0.9 pips',
    leverage: 'Up to 400:1',
    instruments: 1250,
    instrumentsDisplay: '1,250+',
    monthlyVolume: '$60B+',
    userCount: '400,000+',

    experienceLevels: ['beginner', 'intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'swing', 'long-term', 'copy-trading'],
    assetFocus: ['forex', 'crypto', 'commodities', 'indices', 'stocks'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['education', 'regulation', 'mobile-app', 'copy-trading'],

    scores: {
      overall: 4.2,
      fees: 3.8,
      platforms: 4.5,
      research: 4.0,
      education: 4.5,
      customerService: 4.0,
      safety: 4.8,
      mobileApp: 4.2
    },

    regulations: [
      { authority: 'Central Bank of Ireland', country: 'Ireland', licenseNumber: 'C53877', tier: 1 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '406684', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '792505', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '109/10', tier: 2 },
      { authority: 'FSCA', country: 'South Africa', licenseNumber: '45984', tier: 2 },
      { authority: 'JFSA', country: 'Japan', licenseNumber: '1662', tier: 1 }
    ],

    platforms: ['MetaTrader 4', 'MetaTrader 5', 'AvaTradeGO', 'WebTrader', 'DupliTrade', 'ZuluTrade'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal', 'Skrill', 'Neteller'],
    accountTypes: ['Standard', 'Professional', 'Islamic'],

    pros: [
      'Multi-regulated by 6+ tier-1 authorities',
      'Excellent educational resources',
      'Multiple trading platforms including MT4/MT5',
      'No commission on standard accounts',
      'AvaProtect risk management feature'
    ],
    cons: [
      'Spreads higher than ECN brokers',
      'Inactivity fee after 3 months',
      'Limited stock CFD selection compared to specialists'
    ],

    bestFor: ['Beginners seeking education', 'Copy trading enthusiasts', 'Risk-conscious traders'],

    partnerCode: {
      code: '128979',
      bonus: 'Up to $10,000 Welcome Bonus',
      pageUrl: '/brokers/avatrade/partner-code'
    },

    brokerType: 'multi-asset',
    promoted: true
  },

  {
    id: 'etoro',
    name: 'eToro',
    slug: 'etoro',
    tagline: 'The World\'s Leading Social Trading Platform',
    description: 'eToro revolutionized trading with its social trading features, allowing users to follow and copy successful traders. Offers stocks, crypto, forex, and CFDs to 30M+ users worldwide.',
    logo: '/images/brokers/etoro-logo.svg',
    url: 'https://www.etoro.com',
    affiliateUrl: 'https://www.etoro.com/en-au/',
    reviewUrl: '/brokers/etoro',
    foundingYear: 2007,
    headquarters: {
      country: 'Israel',
      city: 'Tel Aviv'
    },
    minDeposit: 50,
    minDepositDisplay: '$50',
    spreadsFrom: '1.0 pips',
    leverage: 'Up to 30:1 (EU)',
    instruments: 3000,
    instrumentsDisplay: '3,000+',
    userCount: '30M+',

    experienceLevels: ['beginner', 'intermediate'],
    tradingStyles: ['copy-trading', 'long-term', 'swing'],
    assetFocus: ['stocks', 'crypto', 'forex', 'commodities', 'etfs'],
    budgetRange: ['low', 'medium'],
    priorityFeatures: ['copy-trading', 'mobile-app', 'regulation'],

    scores: {
      overall: 4.0,
      fees: 3.5,
      platforms: 4.0,
      research: 3.8,
      education: 4.2,
      customerService: 3.5,
      safety: 4.5,
      mobileApp: 4.5
    },

    regulations: [
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '583263', tier: 1 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '491139', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '109/10', tier: 2 }
    ],

    platforms: ['eToro Platform', 'eToro Mobile App'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal', 'Skrill', 'Neteller', 'Apple Pay'],
    accountTypes: ['Retail', 'Professional'],

    pros: [
      'Industry-leading copy trading (CopyTrader)',
      'Low minimum deposit of $50',
      'Commission-free stock trading',
      'User-friendly mobile app',
      'Large social community of 30M+ users'
    ],
    cons: [
      '$5 withdrawal fee',
      'Spreads higher than traditional brokers',
      'Limited advanced charting tools',
      'Proprietary platform only (no MT4/MT5)'
    ],

    bestFor: ['Social traders', 'Beginners', 'Copy trading enthusiasts', 'Part-time investors'],

    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'axi',
    name: 'Axi',
    slug: 'axi',
    tagline: 'Professional-Grade ECN Trading',
    description: 'Axi (formerly AxiTrader) is an award-winning ECN broker offering ultra-tight spreads and fast execution. Ideal for serious forex traders and algorithmic strategies.',
    logo: '/images/brokers/axi-logo.svg',
    url: 'https://www.axi.com',
    affiliateUrl: 'https://www.axi.com/',
    reviewUrl: '/brokers/axi',
    foundingYear: 2007,
    headquarters: {
      country: 'Australia',
      city: 'Sydney'
    },
    minDeposit: 0,
    minDepositDisplay: '$0',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 220,
    instrumentsDisplay: '220+',
    monthlyVolume: '$100B+',

    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools', 'leverage'],

    scores: {
      overall: 4.3,
      fees: 4.8,
      platforms: 4.2,
      research: 4.0,
      education: 3.5,
      customerService: 4.0,
      safety: 4.3,
      mobileApp: 3.8
    },

    regulations: [
      { authority: 'ASIC', country: 'Australia', licenseNumber: '318232', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '509746', tier: 1 },
      { authority: 'DFSA', country: 'UAE', licenseNumber: 'F003742', tier: 2 }
    ],

    platforms: ['MetaTrader 4', 'MetaTrader 5', 'Axi Copy Trading'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'POLi'],
    accountTypes: ['Standard', 'Pro', 'Elite'],

    pros: [
      'Raw spreads from 0.0 pips',
      'No minimum deposit requirement',
      'Fast ECN execution',
      'Strong MT4/MT5 integration',
      'VPS hosting for EAs'
    ],
    cons: [
      'Limited educational content',
      'Smaller instrument selection',
      'Basic research tools compared to competitors'
    ],

    bestFor: ['Scalpers', 'Day traders', 'EA/Algo traders', 'Cost-conscious professionals'],

    brokerType: 'forex',
    promoted: false
  },

  {
    id: 'binance',
    name: 'Binance',
    slug: 'binance',
    tagline: 'World\'s Largest Cryptocurrency Exchange',
    description: 'Binance is the world\'s largest cryptocurrency exchange by trading volume, offering 350+ cryptocurrencies, advanced trading features, and competitive fees.',
    logo: '/images/brokers/binance-logo.svg',
    url: 'https://www.binance.com',
    affiliateUrl: 'https://www.binance.com/',
    reviewUrl: '/exchanges/binance',
    foundingYear: 2017,
    headquarters: {
      country: 'Global',
      city: 'Various'
    },
    minDeposit: 10,
    minDepositDisplay: '$10',
    spreadsFrom: '0.1%',
    leverage: 'Up to 125x (Futures)',
    instruments: 350,
    instrumentsDisplay: '350+ Cryptos',
    monthlyVolume: '$760B+',
    userCount: '185M+',

    experienceLevels: ['beginner', 'intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing', 'long-term'],
    assetFocus: ['crypto'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['low-fees', 'crypto-selection', 'advanced-tools', 'mobile-app'],

    scores: {
      overall: 4.4,
      fees: 4.8,
      platforms: 4.5,
      research: 4.2,
      education: 3.8,
      customerService: 3.2,
      safety: 4.0,
      mobileApp: 4.6
    },

    regulations: [
      { authority: 'Various', country: 'Global', licenseNumber: 'Regional licenses', tier: 2 }
    ],

    platforms: ['Binance Web', 'Binance App', 'Binance Desktop'],
    paymentMethods: ['Credit Card', 'Bank Transfer', 'P2P', 'Crypto'],
    accountTypes: ['Standard', 'VIP'],

    pros: [
      'Lowest trading fees in crypto (0.1%)',
      'Largest selection of cryptocurrencies (350+)',
      'Advanced trading features (Futures, Margin)',
      'High liquidity and fast execution',
      'Earn features (Staking, Savings)'
    ],
    cons: [
      'Regulatory challenges in some regions',
      'Customer support can be slow',
      'Complex interface for beginners',
      'Not available in all countries'
    ],

    bestFor: ['Crypto traders', 'Active traders', 'Altcoin investors', 'DeFi users'],

    brokerType: 'crypto',
    promoted: false
  },

  {
    id: 'kraken',
    name: 'Kraken',
    slug: 'kraken',
    tagline: 'Security-First Cryptocurrency Exchange',
    description: 'Kraken is one of the oldest and most trusted cryptocurrency exchanges, known for its strong security, proof of reserves, and comprehensive trading features.',
    logo: '/images/brokers/kraken-logo.svg',
    url: 'https://www.kraken.com',
    affiliateUrl: 'https://www.kraken.com/',
    reviewUrl: '/exchanges/kraken',
    foundingYear: 2011,
    headquarters: {
      country: 'United States',
      city: 'San Francisco'
    },
    minDeposit: 10,
    minDepositDisplay: '$10',
    spreadsFrom: '0.16%',
    leverage: 'Up to 5x',
    instruments: 200,
    instrumentsDisplay: '200+ Cryptos',
    userCount: '10M+',

    experienceLevels: ['beginner', 'intermediate', 'advanced'],
    tradingStyles: ['long-term', 'swing', 'day-trading'],
    assetFocus: ['crypto'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['regulation', 'crypto-selection', 'advanced-tools'],

    scores: {
      overall: 4.2,
      fees: 4.2,
      platforms: 4.0,
      research: 4.0,
      education: 3.8,
      customerService: 4.0,
      safety: 4.9,
      mobileApp: 4.0
    },

    regulations: [
      { authority: 'FinCEN', country: 'United States', licenseNumber: 'MSB', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '928768', tier: 1 }
    ],

    platforms: ['Kraken Pro', 'Kraken App', 'Kraken Web'],
    paymentMethods: ['Bank Wire', 'ACH', 'Credit Card', 'Crypto'],
    accountTypes: ['Starter', 'Intermediate', 'Pro'],

    pros: [
      'Industry-leading security (never hacked)',
      'Proof of reserves audits',
      'Strong regulatory compliance (US-based)',
      'Competitive fees with volume discounts',
      'Staking available for 15+ assets'
    ],
    cons: [
      'Fewer altcoins than Binance',
      'Higher fees than some competitors',
      'Limited margin trading options',
      'Interface less intuitive for beginners'
    ],

    bestFor: ['Security-conscious investors', 'US traders', 'Long-term holders', 'Staking enthusiasts'],

    brokerType: 'crypto',
    promoted: false
  },

  {
    id: 'kucoin',
    name: 'KuCoin',
    slug: 'kucoin',
    tagline: 'The People\'s Exchange with 700+ Altcoins',
    description: 'KuCoin is a global cryptocurrency exchange known for its massive altcoin selection (700+ coins), low fees, and innovative features like trading bots and lending.',
    logo: '/images/brokers/kucoin-logo.svg',
    url: 'https://www.kucoin.com',
    affiliateUrl: 'https://www.kucoin.com/',
    reviewUrl: '/exchanges/kucoin',
    foundingYear: 2017,
    headquarters: {
      country: 'Seychelles',
      city: 'Victoria'
    },
    minDeposit: 0,
    minDepositDisplay: 'No minimum',
    spreadsFrom: '0.1%',
    leverage: 'Up to 100x',
    instruments: 700,
    instrumentsDisplay: '700+ Cryptos',
    userCount: '30M+',

    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['swing', 'day-trading', 'scalping'],
    assetFocus: ['crypto'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['crypto-selection', 'advanced-tools', 'low-fees'],

    scores: {
      overall: 4.0,
      fees: 4.5,
      platforms: 4.0,
      research: 3.8,
      education: 3.5,
      customerService: 3.5,
      safety: 3.5,
      mobileApp: 4.2
    },

    regulations: [
      { authority: 'Offshore', country: 'Seychelles', licenseNumber: 'N/A', tier: 3 }
    ],

    platforms: ['KuCoin Web', 'KuCoin App', 'KuCoin API'],
    paymentMethods: ['Crypto', 'P2P', 'Credit Card', 'Bank Transfer'],
    accountTypes: ['Standard', 'VIP'],

    pros: [
      'Massive altcoin selection (700+ coins)',
      'Low trading fees (0.1%)',
      'KCS token for fee discounts',
      'Built-in trading bots',
      'Lending and staking options'
    ],
    cons: [
      'Not available to US residents',
      'Offshore regulation only',
      'Customer support can be slow',
      '2020 hack (funds recovered)'
    ],

    bestFor: ['Altcoin hunters', 'Bot traders', 'Low-fee seekers', 'Non-US traders'],

    brokerType: 'crypto',
    promoted: false
  },

  {
    id: 'pepperstone',
    name: 'Pepperstone',
    slug: 'pepperstone',
    tagline: 'Award-Winning Forex & CFD Broker',
    description: 'Pepperstone is an Australian-based, award-winning forex and CFD broker known for ultra-fast execution, razor-sharp spreads, and professional-grade trading platforms including MT4, MT5, cTrader, and TradingView.',
    logo: '/images/brokers/pepperstone-logo.svg',
    url: 'https://www.pepperstone.com',
    affiliateUrl: 'https://www.pepperstone.com/',
    reviewUrl: '/brokers/pepperstone',
    foundingYear: 2010,
    headquarters: {
      country: 'Australia',
      city: 'Melbourne'
    },
    minDeposit: 0,
    minDepositDisplay: '$0',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 1200,
    instrumentsDisplay: '1,200+',
    monthlyVolume: '$12.5B+',
    userCount: '400,000+',

    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto', 'stocks'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools', 'leverage'],

    scores: {
      overall: 4.5,
      fees: 4.9,
      platforms: 4.8,
      research: 4.2,
      education: 3.8,
      customerService: 4.3,
      safety: 4.6,
      mobileApp: 4.4
    },

    regulations: [
      { authority: 'ASIC', country: 'Australia', licenseNumber: '414530', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '684312', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '388/20', tier: 2 },
      { authority: 'DFSA', country: 'UAE', licenseNumber: 'F004356', tier: 2 },
      { authority: 'BaFin', country: 'Germany', licenseNumber: '151148', tier: 1 },
      { authority: 'SCB', country: 'Bahamas', licenseNumber: 'SIA-F217', tier: 3 }
    ],

    platforms: ['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'TradingView'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal', 'Skrill', 'Neteller', 'POLi'],
    accountTypes: ['Standard', 'Razor', 'Swap-Free'],

    pros: [
      'Razor-sharp spreads from 0.0 pips',
      'Ultra-fast execution (avg 30ms)',
      'Multiple platforms: MT4, MT5, cTrader, TradingView',
      'No minimum deposit requirement',
      'Award-winning customer service',
      'Excellent for scalping and algo trading'
    ],
    cons: [
      'Limited educational resources',
      'No proprietary platform',
      'Research tools could be improved',
      'No guaranteed stop losses'
    ],

    bestFor: ['Scalpers', 'Day traders', 'Algorithmic traders', 'Professional traders'],

    brokerType: 'forex',
    promoted: false
  },

  {
    id: 'ic-markets',
    name: 'IC Markets',
    slug: 'ic-markets',
    tagline: 'True ECN Trading with Raw Spreads',
    description: 'IC Markets is a leading ECN broker offering some of the tightest spreads in the industry, institutional-grade liquidity, and lightning-fast execution for forex and CFD traders.',
    logo: '/images/brokers/icmarkets-logo.svg',
    url: 'https://www.icmarkets.com',
    affiliateUrl: 'https://www.icmarkets.com/',
    reviewUrl: '/brokers/ic-markets',
    foundingYear: 2007,
    headquarters: {
      country: 'Australia',
      city: 'Sydney'
    },
    minDeposit: 200,
    minDepositDisplay: '$200',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 2250,
    instrumentsDisplay: '2,250+',
    monthlyVolume: '$1T+',
    userCount: '200,000+',

    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto', 'stocks'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools', 'leverage'],

    scores: {
      overall: 4.6,
      fees: 4.9,
      platforms: 4.7,
      research: 4.0,
      education: 3.5,
      customerService: 4.2,
      safety: 4.5,
      mobileApp: 4.3
    },

    regulations: [
      { authority: 'ASIC', country: 'Australia', licenseNumber: '335692', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '362/18', tier: 2 },
      { authority: 'FSA', country: 'Seychelles', licenseNumber: 'SD018', tier: 3 }
    ],

    platforms: ['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'TradingView'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal', 'Skrill', 'Neteller', 'POLi', 'Crypto'],
    accountTypes: ['Standard', 'Raw Spread', 'cTrader'],

    pros: [
      'Industry-leading raw spreads from 0.0 pips',
      'True ECN execution with no dealing desk',
      '$1 trillion+ monthly trading volume',
      'Multiple platforms including TradingView',
      'Excellent for high-frequency and algo trading',
      'Deep institutional liquidity'
    ],
    cons: [
      '$200 minimum deposit',
      'Limited educational content',
      'No proprietary platform',
      'Basic research tools'
    ],

    bestFor: ['High-volume traders', 'Scalpers', 'Algorithmic traders', 'Professional traders'],

    brokerType: 'forex',
    promoted: false
  },

  {
    id: 'plus500',
    name: 'Plus500',
    slug: 'plus500',
    tagline: 'Simple CFD Trading Platform',
    description: 'Plus500 is a publicly traded CFD broker offering a simple, user-friendly platform for trading forex, stocks, commodities, and cryptocurrencies with competitive spreads.',
    logo: '/images/brokers/plus500-logo.svg',
    url: 'https://www.plus500.com',
    affiliateUrl: 'https://www.plus500.com/',
    reviewUrl: '/brokers/plus500',
    foundingYear: 2008,
    headquarters: { country: 'Israel', city: 'Haifa' },
    minDeposit: 100,
    minDepositDisplay: '$100',
    spreadsFrom: '0.6 pips',
    leverage: 'Up to 30:1 (EU)',
    instruments: 2800,
    instrumentsDisplay: '2,800+',
    userCount: '26M+',
    experienceLevels: ['beginner', 'intermediate'],
    tradingStyles: ['swing', 'long-term'],
    assetFocus: ['forex', 'stocks', 'commodities', 'indices', 'crypto'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['mobile-app', 'regulation'],
    scores: { overall: 4.0, fees: 4.0, platforms: 3.8, research: 3.5, education: 3.2, customerService: 3.8, safety: 4.5, mobileApp: 4.3 },
    regulations: [
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '509909', tier: 1 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '417727', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '250/14', tier: 2 }
    ],
    platforms: ['Plus500 WebTrader', 'Plus500 Mobile App'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal', 'Skrill'],
    accountTypes: ['Standard', 'Professional'],
    pros: ['Publicly traded company (LSE)', 'Simple intuitive platform', 'No commissions', 'Wide instrument range', 'Negative balance protection'],
    cons: ['Limited research tools', 'No MetaTrader support', 'Basic charting', 'No copy trading'],
    bestFor: ['Beginners', 'Casual traders', 'Mobile traders'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'ig',
    name: 'IG',
    slug: 'ig',
    tagline: 'World\'s #1 CFD Provider',
    description: 'IG is the world\'s largest CFD and spread betting provider with 50+ years of experience, offering 17,000+ markets, advanced platforms, and comprehensive research.',
    logo: '/images/brokers/ig-logo.svg',
    url: 'https://www.ig.com',
    affiliateUrl: 'https://www.ig.com/',
    reviewUrl: '/brokers/ig',
    foundingYear: 1974,
    headquarters: { country: 'United Kingdom', city: 'London' },
    minDeposit: 250,
    minDepositDisplay: '$250',
    spreadsFrom: '0.6 pips',
    leverage: 'Up to 30:1 (EU)',
    instruments: 17000,
    instrumentsDisplay: '17,000+',
    userCount: '313,000+',
    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'swing', 'long-term'],
    assetFocus: ['forex', 'stocks', 'commodities', 'indices', 'crypto'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['advanced-tools', 'regulation', 'education'],
    scores: { overall: 4.4, fees: 3.8, platforms: 4.6, research: 4.7, education: 4.5, customerService: 4.2, safety: 4.9, mobileApp: 4.4 },
    regulations: [
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '195355', tier: 1 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '515106', tier: 1 },
      { authority: 'BaFin', country: 'Germany', licenseNumber: '148759', tier: 1 }
    ],
    platforms: ['IG Trading Platform', 'MetaTrader 4', 'ProRealTime', 'L2 Dealer'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal'],
    accountTypes: ['Standard', 'Professional'],
    pros: ['50+ years established', 'Publicly traded (FTSE 250)', '17,000+ markets', 'Excellent research', 'Advanced ProRealTime charts'],
    cons: ['Higher minimum deposit', 'Inactivity fees', 'Complex fee structure'],
    bestFor: ['Experienced traders', 'Research-focused traders', 'UK traders'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'go-markets',
    name: 'GO Markets',
    slug: 'go-markets',
    tagline: 'Award-Winning Australian Broker',
    description: 'GO Markets is an Australian ECN broker offering competitive spreads, multiple platforms, and excellent customer service since 2006.',
    logo: '/images/brokers/go-markets-logo.svg',
    url: 'https://www.gomarkets.com',
    affiliateUrl: 'https://www.gomarkets.com/',
    reviewUrl: '/brokers/go-markets',
    foundingYear: 2006,
    headquarters: { country: 'Australia', city: 'Melbourne' },
    minDeposit: 200,
    minDepositDisplay: '$200',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 1000,
    instrumentsDisplay: '1,000+',
    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools'],
    scores: { overall: 4.1, fees: 4.3, platforms: 4.2, research: 3.8, education: 3.5, customerService: 4.3, safety: 4.2, mobileApp: 4.0 },
    regulations: [
      { authority: 'ASIC', country: 'Australia', licenseNumber: '254963', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '256/14', tier: 2 }
    ],
    platforms: ['MetaTrader 4', 'MetaTrader 5', 'cTrader', 'GO WebTrader'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'POLi'],
    accountTypes: ['Standard', 'GO Plus+'],
    pros: ['Raw spreads from 0.0 pips', 'Multiple platforms', 'ASIC regulated', 'Good customer service', 'Copy trading available'],
    cons: ['$200 minimum deposit', 'Limited educational content', 'Smaller instrument range'],
    bestFor: ['Australian traders', 'ECN traders', 'cTrader users'],
    brokerType: 'forex',
    promoted: false
  },

  {
    id: 'libertex',
    name: 'Libertex',
    slug: 'libertex',
    tagline: 'Zero Spread Trading',
    description: 'Libertex is a CFD broker offering commission-based trading with zero spreads, making costs transparent and predictable for traders.',
    logo: '/images/brokers/libertex-logo.svg',
    url: 'https://www.libertex.com',
    affiliateUrl: 'https://www.libertex.com/',
    reviewUrl: '/brokers/libertex',
    foundingYear: 1997,
    headquarters: { country: 'Cyprus', city: 'Limassol' },
    minDeposit: 100,
    minDepositDisplay: '$100',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 30:1 (EU)',
    instruments: 250,
    instrumentsDisplay: '250+',
    userCount: '3M+',
    experienceLevels: ['beginner', 'intermediate'],
    tradingStyles: ['day-trading', 'swing'],
    assetFocus: ['forex', 'stocks', 'crypto', 'commodities'],
    budgetRange: ['low', 'medium'],
    priorityFeatures: ['low-fees', 'mobile-app'],
    scores: { overall: 3.8, fees: 4.2, platforms: 3.7, research: 3.5, education: 3.8, customerService: 3.8, safety: 4.0, mobileApp: 4.0 },
    regulations: [
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '164/12', tier: 2 }
    ],
    platforms: ['Libertex Platform', 'MetaTrader 4', 'MetaTrader 5'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'Crypto'],
    accountTypes: ['Standard'],
    pros: ['Zero spreads model', 'Transparent commission pricing', 'MT4/MT5 available', 'Low minimum deposit', 'Crypto deposits accepted'],
    cons: ['CySEC only regulation', 'Limited instruments', 'Commission can add up'],
    bestFor: ['Cost-transparent traders', 'Beginners', 'Crypto enthusiasts'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'city-index',
    name: 'City Index',
    slug: 'city-index',
    tagline: 'Professional Trading Since 1983',
    description: 'City Index is a UK-based spread betting and CFD broker with 40+ years experience, offering advanced platforms and comprehensive market access.',
    logo: '/images/brokers/city-index-logo.svg',
    url: 'https://www.cityindex.com',
    affiliateUrl: 'https://www.cityindex.com/',
    reviewUrl: '/brokers/city-index',
    foundingYear: 1983,
    headquarters: { country: 'United Kingdom', city: 'London' },
    minDeposit: 100,
    minDepositDisplay: '£100',
    spreadsFrom: '0.5 pips',
    leverage: 'Up to 30:1 (EU)',
    instruments: 13500,
    instrumentsDisplay: '13,500+',
    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'swing', 'long-term'],
    assetFocus: ['forex', 'stocks', 'commodities', 'indices'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['advanced-tools', 'regulation', 'education'],
    scores: { overall: 4.2, fees: 3.9, platforms: 4.4, research: 4.3, education: 4.2, customerService: 4.1, safety: 4.7, mobileApp: 4.2 },
    regulations: [
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '113942', tier: 1 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '345646', tier: 1 }
    ],
    platforms: ['City Index Platform', 'MetaTrader 4', 'TradingView'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'PayPal'],
    accountTypes: ['Standard', 'Professional'],
    pros: ['40+ years established', 'FCA regulated', 'Spread betting (tax-free UK)', 'TradingView integration', 'Extensive markets'],
    cons: ['UK/AU focused', 'Higher spreads on some assets', 'No cryptocurrency trading'],
    bestFor: ['UK spread bettors', 'Experienced traders', 'Index traders'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'easymarkets',
    name: 'easyMarkets',
    slug: 'easy-markets',
    tagline: 'Trade with Confidence',
    description: 'easyMarkets offers unique risk management tools like dealCancellation and Freeze Rate, along with fixed spreads and negative balance protection.',
    logo: '/images/brokers/easymarkets-logo.svg',
    url: 'https://www.easymarkets.com',
    affiliateUrl: 'https://www.easymarkets.com/',
    reviewUrl: '/brokers/easy-markets',
    foundingYear: 2001,
    headquarters: { country: 'Cyprus', city: 'Limassol' },
    minDeposit: 25,
    minDepositDisplay: '$25',
    spreadsFrom: '0.7 pips',
    leverage: 'Up to 400:1',
    instruments: 200,
    instrumentsDisplay: '200+',
    experienceLevels: ['beginner', 'intermediate'],
    tradingStyles: ['swing', 'long-term'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto'],
    budgetRange: ['low', 'medium'],
    priorityFeatures: ['education', 'mobile-app'],
    scores: { overall: 3.9, fees: 3.5, platforms: 3.8, research: 3.6, education: 4.2, customerService: 4.0, safety: 4.3, mobileApp: 4.0 },
    regulations: [
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '079/07', tier: 2 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '246566', tier: 1 }
    ],
    platforms: ['easyMarkets Platform', 'MetaTrader 4', 'MetaTrader 5', 'TradingView'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'Crypto'],
    accountTypes: ['Standard', 'Premium', 'VIP'],
    pros: ['Unique dealCancellation feature', 'Fixed spreads', 'Very low minimum deposit', 'Negative balance protection', 'TradingView integration'],
    cons: ['Higher fixed spreads', 'Limited instruments', 'Proprietary platform basic'],
    bestFor: ['Risk-averse traders', 'Beginners', 'Fixed spread preference'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'vantage',
    name: 'Vantage',
    slug: 'vantage',
    tagline: 'Trade Smarter',
    description: 'Vantage (formerly Vantage FX) is an Australian ECN broker offering raw spreads, multiple platforms, and excellent execution for active traders.',
    logo: '/images/brokers/vantage-logo.svg',
    url: 'https://www.vantagemarkets.com',
    affiliateUrl: 'https://www.vantagemarkets.com/',
    reviewUrl: '/brokers/vantage',
    foundingYear: 2009,
    headquarters: { country: 'Australia', city: 'Sydney' },
    minDeposit: 50,
    minDepositDisplay: '$50',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 1000,
    instrumentsDisplay: '1,000+',
    userCount: '900,000+',
    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto', 'stocks'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools', 'leverage'],
    scores: { overall: 4.2, fees: 4.5, platforms: 4.3, research: 3.8, education: 3.7, customerService: 4.0, safety: 4.2, mobileApp: 4.1 },
    regulations: [
      { authority: 'ASIC', country: 'Australia', licenseNumber: '428901', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '590299', tier: 1 },
      { authority: 'CIMA', country: 'Cayman Islands', licenseNumber: '1383491', tier: 3 }
    ],
    platforms: ['MetaTrader 4', 'MetaTrader 5', 'ProTrader', 'TradingView'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'Crypto'],
    accountTypes: ['Standard STP', 'Raw ECN', 'Pro ECN'],
    pros: ['Raw spreads from 0.0 pips', 'Low $50 minimum deposit', 'Multiple platforms', 'Fast execution', 'Copy trading available'],
    cons: ['Commission on Raw account', 'Limited educational content', 'Mixed regulation tiers'],
    bestFor: ['Active traders', 'Scalpers', 'Budget-conscious ECN traders'],
    brokerType: 'forex',
    promoted: false
  },

  {
    id: 'admiral-markets',
    name: 'Admiral Markets',
    slug: 'admiral-markets',
    tagline: 'Trade with the Admirals',
    description: 'Admiral Markets (Admirals) is a multi-regulated broker offering competitive conditions, extensive education, and the unique MetaTrader Supreme Edition.',
    logo: '/images/brokers/admiral-markets-logo.svg',
    url: 'https://admiralmarkets.com',
    affiliateUrl: 'https://admiralmarkets.com/',
    reviewUrl: '/brokers/admiral-markets',
    foundingYear: 2001,
    headquarters: { country: 'Estonia', city: 'Tallinn' },
    minDeposit: 100,
    minDepositDisplay: '$100',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 8000,
    instrumentsDisplay: '8,000+',
    experienceLevels: ['beginner', 'intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'swing', 'long-term'],
    assetFocus: ['forex', 'stocks', 'commodities', 'indices', 'crypto', 'etfs'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['education', 'advanced-tools', 'regulation'],
    scores: { overall: 4.3, fees: 4.2, platforms: 4.5, research: 4.2, education: 4.6, customerService: 4.1, safety: 4.4, mobileApp: 4.0 },
    regulations: [
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '595450', tier: 1 },
      { authority: 'CySEC', country: 'Cyprus', licenseNumber: '201/13', tier: 2 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '410681', tier: 1 }
    ],
    platforms: ['MetaTrader 4', 'MetaTrader 5', 'MetaTrader Supreme Edition', 'StereoTrader'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'Crypto'],
    accountTypes: ['Trade.MT4', 'Trade.MT5', 'Zero.MT4', 'Zero.MT5', 'Invest.MT5'],
    pros: ['MetaTrader Supreme Edition (free)', 'Excellent education', 'Wide instrument range', 'Multi-regulated', 'Stock investing account'],
    cons: ['Complex account structure', 'Higher spreads on standard account', 'Inactivity fee'],
    bestFor: ['Education-focused traders', 'MetaTrader enthusiasts', 'Multi-asset traders'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'saxo',
    name: 'Saxo Bank',
    slug: 'saxo',
    tagline: 'Professional-Grade Trading',
    description: 'Saxo Bank is a Danish investment bank offering institutional-grade trading platforms, 70,000+ instruments, and premium research for sophisticated investors.',
    logo: '/images/brokers/saxo-logo.svg',
    url: 'https://www.home.saxo',
    affiliateUrl: 'https://www.home.saxo/',
    reviewUrl: '/brokers/saxo',
    foundingYear: 1992,
    headquarters: { country: 'Denmark', city: 'Copenhagen' },
    minDeposit: 2000,
    minDepositDisplay: '$2,000',
    spreadsFrom: '0.4 pips',
    leverage: 'Up to 30:1 (EU)',
    instruments: 71000,
    instrumentsDisplay: '71,000+',
    experienceLevels: ['advanced'],
    tradingStyles: ['day-trading', 'swing', 'long-term'],
    assetFocus: ['forex', 'stocks', 'commodities', 'indices', 'crypto', 'etfs'],
    budgetRange: ['high'],
    priorityFeatures: ['advanced-tools', 'regulation'],
    scores: { overall: 4.5, fees: 3.5, platforms: 4.8, research: 4.9, education: 4.3, customerService: 4.2, safety: 4.9, mobileApp: 4.6 },
    regulations: [
      { authority: 'Danish FSA', country: 'Denmark', licenseNumber: 'Bank License', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '551422', tier: 1 },
      { authority: 'ASIC', country: 'Australia', licenseNumber: '280372', tier: 1 }
    ],
    platforms: ['SaxoTraderGO', 'SaxoTraderPRO', 'SaxoInvestor'],
    paymentMethods: ['Bank Wire', 'Credit Card'],
    accountTypes: ['Classic', 'Platinum', 'VIP'],
    pros: ['71,000+ instruments', 'Award-winning platforms', 'Bank-level security', 'Premium research', 'Options and futures'],
    cons: ['High minimum deposit ($2,000)', 'Premium pricing', 'Complex for beginners', 'Inactivity fees'],
    bestFor: ['Professional traders', 'High-net-worth investors', 'Multi-asset portfolios'],
    brokerType: 'multi-asset',
    promoted: false
  },

  {
    id: 'eightcap',
    name: 'Eightcap',
    slug: 'eightcap',
    tagline: 'Trade with the Best',
    description: 'Eightcap is an Australian broker offering raw spreads, fast execution, and excellent TradingView integration for forex and CFD traders.',
    logo: '/images/brokers/eightcap-logo.svg',
    url: 'https://www.eightcap.com',
    affiliateUrl: 'https://www.eightcap.com/',
    reviewUrl: '/brokers/eightcap',
    foundingYear: 2009,
    headquarters: { country: 'Australia', city: 'Melbourne' },
    minDeposit: 100,
    minDepositDisplay: '$100',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 800,
    instrumentsDisplay: '800+',
    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto', 'stocks'],
    budgetRange: ['low', 'medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools'],
    scores: { overall: 4.1, fees: 4.4, platforms: 4.3, research: 3.7, education: 3.5, customerService: 4.0, safety: 4.2, mobileApp: 4.0 },
    regulations: [
      { authority: 'ASIC', country: 'Australia', licenseNumber: '391441', tier: 1 },
      { authority: 'FCA', country: 'United Kingdom', licenseNumber: '921296', tier: 1 },
      { authority: 'SCB', country: 'Bahamas', licenseNumber: 'SIA-F220', tier: 3 }
    ],
    platforms: ['MetaTrader 4', 'MetaTrader 5', 'TradingView'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'Crypto'],
    accountTypes: ['Standard', 'Raw'],
    pros: ['Raw spreads from 0.0 pips', 'TradingView integration', 'Fast execution', 'Low commissions', 'Crypto deposits'],
    cons: ['Smaller instrument range', 'Limited educational content', 'Basic research tools'],
    bestFor: ['TradingView users', 'Active forex traders', 'Scalpers'],
    brokerType: 'forex',
    promoted: false
  },

  {
    id: 'stormgain',
    name: 'StormGain',
    slug: 'stormgain',
    tagline: 'Crypto Trading with Free Cloud Mining',
    description: 'StormGain is a cryptocurrency trading platform offering built-in cloud mining, up to 300x leverage, and an all-in-one crypto experience.',
    logo: '/images/exchanges/stormgain-logo.svg',
    url: 'https://stormgain.com',
    affiliateUrl: 'https://app.stormgain.com/',
    reviewUrl: '/exchanges/stormgain',
    foundingYear: 2019,
    headquarters: { country: 'Seychelles', city: 'Victoria' },
    minDeposit: 50,
    minDepositDisplay: '$50',
    spreadsFrom: '0.25%',
    leverage: 'Up to 300x',
    instruments: 50,
    instrumentsDisplay: '50+ Cryptos',
    userCount: '5M+',
    experienceLevels: ['beginner', 'intermediate'],
    tradingStyles: ['day-trading', 'swing'],
    assetFocus: ['crypto'],
    budgetRange: ['low', 'medium'],
    priorityFeatures: ['crypto-selection', 'leverage', 'mobile-app'],
    scores: { overall: 3.7, fees: 3.5, platforms: 4.0, research: 3.2, education: 3.0, customerService: 3.8, safety: 3.0, mobileApp: 4.2 },
    regulations: [
      { authority: 'FSA', country: 'Seychelles', licenseNumber: 'SD052', tier: 3 }
    ],
    platforms: ['StormGain Web', 'StormGain Mobile'],
    paymentMethods: ['Crypto', 'Credit Card', 'Bank Wire'],
    accountTypes: ['Standard'],
    pros: ['Free built-in cloud mining', 'Up to 300x leverage', 'No KYC for basic accounts', 'Demo account available', 'Mobile-first design'],
    cons: ['Offshore regulation only', 'Higher fees than major exchanges', 'Limited coin selection', 'No fiat withdrawals'],
    bestFor: ['Crypto mining curious', 'High leverage traders', 'Mobile traders'],
    brokerType: 'crypto',
    promoted: false
  },

  {
    id: 'titanfx',
    name: 'Titan FX',
    slug: 'titanfx',
    tagline: 'Zero Point Technology Trading',
    description: 'Titan FX is an ECN broker offering institutional-grade execution with their Zero Point technology, raw spreads from 0.0 pips, and no requotes or dealing desk intervention.',
    logo: '/images/brokers/titanfx-logo.svg',
    url: 'https://www.titanfx.com',
    affiliateUrl: 'https://www.titanfx.com/',
    reviewUrl: '/brokers/titanfx',
    foundingYear: 2014,
    headquarters: { country: 'Vanuatu', city: 'Port Vila' },
    minDeposit: 200,
    minDepositDisplay: '$200',
    spreadsFrom: '0.0 pips',
    leverage: 'Up to 500:1',
    instruments: 150,
    instrumentsDisplay: '150+',
    userCount: '50,000+',

    experienceLevels: ['intermediate', 'advanced'],
    tradingStyles: ['day-trading', 'scalping', 'swing'],
    assetFocus: ['forex', 'commodities', 'indices', 'crypto'],
    budgetRange: ['medium', 'high'],
    priorityFeatures: ['low-fees', 'advanced-tools', 'leverage'],

    scores: {
      overall: 4.0,
      fees: 4.6,
      platforms: 4.2,
      research: 3.5,
      education: 3.2,
      customerService: 4.0,
      safety: 3.5,
      mobileApp: 4.0
    },

    regulations: [
      { authority: 'VFSC', country: 'Vanuatu', licenseNumber: '40313', tier: 3 },
      { authority: 'FSA', country: 'Mauritius', licenseNumber: 'GB20025832', tier: 3 }
    ],

    platforms: ['MetaTrader 4', 'MetaTrader 5', 'Titan FX Social'],
    paymentMethods: ['Credit Card', 'Bank Wire', 'Skrill', 'Neteller', 'Crypto', 'bitwallet'],
    accountTypes: ['Zero Standard', 'Zero Blade', 'Zero Micro'],

    pros: [
      'Zero Point execution technology',
      'Raw spreads from 0.0 pips',
      'No dealing desk intervention',
      'Fast execution (avg <37ms)',
      'High leverage up to 500:1',
      'Accepts crypto deposits'
    ],
    cons: [
      'Offshore regulation only (Vanuatu)',
      'Limited instrument selection',
      '$200 minimum deposit',
      'No tier-1 regulation'
    ],

    bestFor: ['Scalpers', 'Day traders', 'High-leverage traders', 'ECN enthusiasts'],

    brokerType: 'forex',
    promoted: false
  }
];

/**
 * Get a broker by its ID
 */
export function getBrokerById(id: string): BrokerData | undefined {
  return brokers.find(b => b.id === id);
}

/**
 * Get a broker by its slug
 */
export function getBrokerBySlug(slug: string): BrokerData | undefined {
  return brokers.find(b => b.slug === slug);
}

/**
 * Get all promoted brokers
 */
export function getPromotedBrokers(): BrokerData[] {
  return brokers.filter(b => b.promoted);
}

/**
 * Get brokers sorted by a specific score
 */
export function getBrokersByScore(scoreKey: keyof BrokerData['scores'], limit?: number): BrokerData[] {
  const sorted = [...brokers].sort((a, b) => b.scores[scoreKey] - a.scores[scoreKey]);
  return limit ? sorted.slice(0, limit) : sorted;
}

/**
 * Get brokers filtered by experience level
 */
export function getBrokersByExperience(level: ExperienceLevel): BrokerData[] {
  return brokers.filter(b => b.experienceLevels.includes(level));
}

/**
 * Get brokers filtered by trading style
 */
export function getBrokersByTradingStyle(style: TradingStyle): BrokerData[] {
  return brokers.filter(b => b.tradingStyles.includes(style));
}

/**
 * Get brokers filtered by asset focus
 */
export function getBrokersByAssetFocus(asset: AssetFocus): BrokerData[] {
  return brokers.filter(b => b.assetFocus.includes(asset));
}

/**
 * Get brokers filtered by budget range
 */
export function getBrokersByBudget(budget: BudgetRange): BrokerData[] {
  return brokers.filter(b => b.budgetRange.includes(budget));
}

/**
 * Calculate broker match score based on user preferences
 * Returns a score from 0-100
 */
export interface UserPreferences {
  experienceLevel: ExperienceLevel;
  tradingStyle: TradingStyle;
  assetFocus: AssetFocus[];
  budgetRange: BudgetRange;
  priorityFeatures: PriorityFeature[];
}

export function calculateBrokerMatchScore(broker: BrokerData, preferences: UserPreferences): number {
  let score = 0;
  let maxScore = 0;

  // Experience level match (weight: 20)
  maxScore += 20;
  if (broker.experienceLevels.includes(preferences.experienceLevel)) {
    score += 20;
  }

  // Trading style match (weight: 25)
  maxScore += 25;
  if (broker.tradingStyles.includes(preferences.tradingStyle)) {
    score += 25;
  }

  // Asset focus match (weight: 25)
  maxScore += 25;
  const assetMatches = preferences.assetFocus.filter(a => broker.assetFocus.includes(a)).length;
  score += (assetMatches / preferences.assetFocus.length) * 25;

  // Budget range match (weight: 15)
  maxScore += 15;
  if (broker.budgetRange.includes(preferences.budgetRange)) {
    score += 15;
  }

  // Priority features match (weight: 15)
  maxScore += 15;
  const featureMatches = preferences.priorityFeatures.filter(f => broker.priorityFeatures.includes(f)).length;
  score += (featureMatches / Math.max(preferences.priorityFeatures.length, 1)) * 15;

  // Normalize to 0-100
  return Math.round((score / maxScore) * 100);
}

/**
 * Get top broker recommendations based on user preferences
 */
export function getRecommendedBrokers(preferences: UserPreferences, limit: number = 3): Array<{ broker: BrokerData; matchScore: number }> {
  const scored = brokers.map(broker => ({
    broker,
    matchScore: calculateBrokerMatchScore(broker, preferences)
  }));

  // Sort by match score, with promoted brokers getting a slight boost
  scored.sort((a, b) => {
    const aScore = a.matchScore + (a.broker.promoted ? 5 : 0);
    const bScore = b.matchScore + (b.broker.promoted ? 5 : 0);
    return bScore - aScore;
  });

  return scored.slice(0, limit);
}

/**
 * Get brokers that support a specific platform
 */
export function getBrokersByPlatform(platform: string): BrokerData[] {
  return brokers.filter(b =>
    b.platforms.some(p => p.toLowerCase().includes(platform.toLowerCase()))
  );
}

/**
 * Get all unique platforms across all brokers
 */
export function getAllPlatforms(): string[] {
  const platforms = new Set<string>();
  brokers.forEach(b => b.platforms.forEach(p => platforms.add(p)));
  return Array.from(platforms).sort();
}

/**
 * Quiz questions for the broker selector
 */
export const quizQuestions = [
  {
    id: 'experience',
    question: 'What is your trading experience level?',
    options: [
      { value: 'beginner', label: 'Beginner', description: 'New to trading, learning the basics' },
      { value: 'intermediate', label: 'Intermediate', description: '1-3 years of trading experience' },
      { value: 'advanced', label: 'Advanced', description: '3+ years, comfortable with complex strategies' }
    ]
  },
  {
    id: 'tradingStyle',
    question: 'What is your preferred trading style?',
    options: [
      { value: 'day-trading', label: 'Day Trading', description: 'Multiple trades per day, close positions before market close' },
      { value: 'swing', label: 'Swing Trading', description: 'Hold positions for days to weeks' },
      { value: 'scalping', label: 'Scalping', description: 'Quick trades for small profits, many per day' },
      { value: 'long-term', label: 'Long-term Investing', description: 'Buy and hold for months or years' },
      { value: 'copy-trading', label: 'Copy Trading', description: 'Automatically copy successful traders' }
    ]
  },
  {
    id: 'assets',
    question: 'What do you want to trade? (Select all that apply)',
    multiSelect: true,
    options: [
      { value: 'forex', label: 'Forex', description: 'Currency pairs (EUR/USD, GBP/USD, etc.)' },
      { value: 'crypto', label: 'Cryptocurrency', description: 'Bitcoin, Ethereum, altcoins' },
      { value: 'stocks', label: 'Stocks', description: 'Individual company shares' },
      { value: 'commodities', label: 'Commodities', description: 'Gold, oil, silver, etc.' },
      { value: 'indices', label: 'Indices', description: 'S&P 500, NASDAQ, FTSE 100' },
      { value: 'etfs', label: 'ETFs', description: 'Exchange-traded funds' }
    ]
  },
  {
    id: 'budget',
    question: 'How much are you planning to deposit initially?',
    options: [
      { value: 'low', label: 'Under $100', description: 'Starting small to learn' },
      { value: 'medium', label: '$100 - $1,000', description: 'Moderate starting capital' },
      { value: 'high', label: '$1,000+', description: 'Serious trading capital' }
    ]
  },
  {
    id: 'priorities',
    question: 'What matters most to you? (Select up to 3)',
    multiSelect: true,
    maxSelections: 3,
    options: [
      { value: 'low-fees', label: 'Low Fees', description: 'Tight spreads and low commissions' },
      { value: 'education', label: 'Education', description: 'Learning resources and tutorials' },
      { value: 'copy-trading', label: 'Copy Trading', description: 'Ability to follow successful traders' },
      { value: 'regulation', label: 'Strong Regulation', description: 'Top-tier licensing and protection' },
      { value: 'mobile-app', label: 'Mobile App', description: 'Trade on the go with a great app' },
      { value: 'advanced-tools', label: 'Advanced Tools', description: 'Professional charting and analysis' },
      { value: 'crypto-selection', label: 'Crypto Selection', description: 'Wide range of cryptocurrencies' },
      { value: 'leverage', label: 'High Leverage', description: 'Maximize trading power' }
    ]
  }
];

/**
 * Get all possible broker comparison pairs (for programmatic SEO)
 */
export function getBrokerComparisons(): { broker1: BrokerData; broker2: BrokerData; slug: string }[] {
  const comparisons: { broker1: BrokerData; broker2: BrokerData; slug: string }[] = [];

  for (let i = 0; i < brokers.length; i++) {
    for (let j = i + 1; j < brokers.length; j++) {
      comparisons.push({
        broker1: brokers[i],
        broker2: brokers[j],
        slug: `${brokers[i].slug}-vs-${brokers[j].slug}`
      });
    }
  }

  return comparisons;
}

/**
 * Countries for regional broker pages
 */
export const countries = [
  { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
  { code: "us", name: "United States", flag: "🇺🇸" },
  { code: "au", name: "Australia", flag: "🇦🇺" },
  { code: "ca", name: "Canada", flag: "🇨🇦" },
  { code: "sg", name: "Singapore", flag: "🇸🇬" },
  { code: "ae", name: "UAE", flag: "🇦🇪" },
  { code: "za", name: "South Africa", flag: "🇿🇦" },
  { code: "in", name: "India", flag: "🇮🇳" },
  { code: "de", name: "Germany", flag: "🇩🇪" },
  { code: "nz", name: "New Zealand", flag: "🇳🇿" }
];
