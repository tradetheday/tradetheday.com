// Exclusive Deals Data for TradeTheDay
// These are time-limited, exclusive offers negotiated with brokers

export interface Deal {
  id: string;
  brokerId: string;
  brokerName: string;
  brokerLogo: string;
  affiliateLink: string;
  partnerCode?: string;

  // Deal Details
  headline: string;
  subheadline: string;
  dealType: 'bonus' | 'cashback' | 'free-trial' | 'reduced-fees' | 'bundle';

  // Value Props
  mainValue: string; // e.g., "$10,000", "50%", "Free"
  mainValueLabel: string; // e.g., "Welcome Bonus", "Cashback", "Trial"
  originalValue?: string; // If there's a "was" price
  savings?: string; // How much they save

  // Features included
  features: {
    icon: string;
    title: string;
    description: string;
  }[];

  // Urgency elements
  endDate: string; // ISO date
  spotsTotal: number;
  spotsClaimed: number;
  isLimited: boolean;

  // Bonus tiers (if applicable)
  bonusTiers?: {
    deposit: string;
    bonus: string;
    percentage: string;
  }[];

  // Terms
  terms: string[];
  minDeposit?: number;

  // Display
  featured: boolean;
  badge?: string; // e.g., "EXCLUSIVE", "BEST VALUE", "ENDING SOON"
  accentColor?: string;
}

export const deals: Deal[] = [
  {
    id: "avatrade-welcome-2026",
    brokerId: "avatrade",
    brokerName: "AvaTrade",
    brokerLogo: "/images/brokers/avatrade/avatrade-logo-light.svg",
    affiliateLink: "https://www.avatrade.com/?tag=tradetheday",
    partnerCode: "128979",

    headline: "Exclusive AvaTrade Welcome Package",
    subheadline: "Get up to $10,000 bonus + free trading signals + AvaProtect insurance",
    dealType: "bonus",

    mainValue: "$10,000",
    mainValueLabel: "Welcome Bonus",
    originalValue: "$5,000",
    savings: "2x Standard Bonus",

    features: [
      { icon: "💰", title: "Up to $10,000 Bonus", description: "100% match on your first deposit" },
      { icon: "📊", title: "Free Trading Signals", description: "Daily signals from expert analysts worth $997/yr" },
      { icon: "🛡️", title: "AvaProtect™ Free Trial", description: "Insure your trades against losses" },
      { icon: "📱", title: "Premium Mobile App", description: "Award-winning AvaTradeGO app" },
      { icon: "🎓", title: "1-on-1 Training", description: "Personal account manager for 30 days" },
      { icon: "⚡", title: "Priority Support", description: "Skip the queue with VIP support access" }
    ],

    endDate: "2026-02-28",
    spotsTotal: 500,
    spotsClaimed: 347,
    isLimited: true,

    bonusTiers: [
      { deposit: "$100 - $499", bonus: "$100", percentage: "100%" },
      { deposit: "$500 - $999", bonus: "$500", percentage: "100%" },
      { deposit: "$1,000 - $4,999", bonus: "$1,000", percentage: "100%" },
      { deposit: "$5,000 - $9,999", bonus: "$2,500", percentage: "50%" },
      { deposit: "$10,000+", bonus: "$10,000", percentage: "100%" }
    ],

    terms: [
      "New clients only",
      "Bonus requires trading volume to withdraw",
      "Valid for 14 days after registration",
      "Cannot be combined with other offers"
    ],
    minDeposit: 100,

    featured: true,
    badge: "EXCLUSIVE",
    accentColor: "#FF4800"
  },
  {
    id: "xm-ultra-low-2026",
    brokerId: "xm",
    brokerName: "XM",
    brokerLogo: "/images/brokers/xm-logo.svg",
    affiliateLink: "https://www.xm.com/",

    headline: "XM Ultra Low Account + Bonus",
    subheadline: "Trade with spreads from 0.6 pips and get up to $5,000 bonus",
    dealType: "bonus",

    mainValue: "$5,000",
    mainValueLabel: "Deposit Bonus",

    features: [
      { icon: "📉", title: "Ultra Low Spreads", description: "From 0.6 pips on majors" },
      { icon: "💵", title: "Deposit Bonus", description: "Up to $5,000 on first deposit" },
      { icon: "🔄", title: "No Re-quotes", description: "Guaranteed order execution" },
      { icon: "📚", title: "Free Education", description: "Access to XM Live Education" }
    ],

    endDate: "2026-03-31",
    spotsTotal: 1000,
    spotsClaimed: 523,
    isLimited: true,

    bonusTiers: [
      { deposit: "$5 - $500", bonus: "$50", percentage: "30%" },
      { deposit: "$501 - $5,000", bonus: "$500", percentage: "20%" },
      { deposit: "$5,001+", bonus: "$5,000", percentage: "20%" }
    ],

    terms: [
      "New clients only",
      "Minimum deposit $5",
      "Bonus credited after verification"
    ],
    minDeposit: 5,

    featured: false,
    badge: "LOW DEPOSIT"
  },
  {
    id: "ic-markets-cashback-2026",
    brokerId: "ic-markets",
    brokerName: "IC Markets",
    brokerLogo: "/images/brokers/ic-markets-logo.svg",
    affiliateLink: "https://www.icmarkets.com/",

    headline: "IC Markets Cashback Program",
    subheadline: "Get $3 cashback per lot traded - no limits, no restrictions",
    dealType: "cashback",

    mainValue: "$3",
    mainValueLabel: "Per Lot Traded",
    savings: "Up to $3,000/month",

    features: [
      { icon: "💸", title: "$3 Per Lot", description: "Cashback on every trade, win or lose" },
      { icon: "🚫", title: "No Limits", description: "Trade as much as you want" },
      { icon: "📈", title: "Raw Spreads", description: "From 0.0 pips on Raw account" },
      { icon: "⚡", title: "Fast Execution", description: "Average execution under 40ms" }
    ],

    endDate: "2026-12-31",
    spotsTotal: 10000,
    spotsClaimed: 2847,
    isLimited: false,

    terms: [
      "Available for Raw Spread accounts",
      "Cashback paid monthly",
      "Minimum 10 lots per month to qualify"
    ],
    minDeposit: 200,

    featured: true,
    badge: "ONGOING"
  },
  {
    id: "etoro-zero-commission-2026",
    brokerId: "etoro",
    brokerName: "eToro",
    brokerLogo: "/images/brokers/etoro-logo.svg",
    affiliateLink: "https://www.etoro.com/",

    headline: "eToro Zero Commission Stocks",
    subheadline: "Trade real stocks with 0% commission + copy top investors",
    dealType: "reduced-fees",

    mainValue: "0%",
    mainValueLabel: "Commission on Stocks",

    features: [
      { icon: "📈", title: "Real Stocks", description: "Own the underlying asset, not CFDs" },
      { icon: "👥", title: "Copy Trading", description: "Automatically copy successful investors" },
      { icon: "💰", title: "Zero Commission", description: "No fees on stock trades" },
      { icon: "📱", title: "Easy Platform", description: "Intuitive for beginners" }
    ],

    endDate: "2026-12-31",
    spotsTotal: 100000,
    spotsClaimed: 45000,
    isLimited: false,

    terms: [
      "Zero commission on real stocks",
      "CFDs have spreads",
      "$50 minimum deposit",
      "$5 withdrawal fee applies"
    ],
    minDeposit: 50,

    featured: false,
    badge: "ZERO FEES"
  },
  {
    id: "axi-free-vps-2026",
    brokerId: "axi",
    brokerName: "Axi",
    brokerLogo: "/images/brokers/axi-logo.svg",
    affiliateLink: "https://www.axi.com/",

    headline: "Axi Free VPS + Raw Spreads",
    subheadline: "Get free VPS hosting worth $30/month when you trade 20+ lots",
    dealType: "bundle",

    mainValue: "FREE",
    mainValueLabel: "VPS Hosting",
    originalValue: "$30/month",
    savings: "$360/year",

    features: [
      { icon: "🖥️", title: "Free VPS", description: "Low-latency server for EAs and algos" },
      { icon: "📉", title: "Raw Spreads", description: "From 0.0 pips" },
      { icon: "🤖", title: "EA Friendly", description: "Run your trading bots 24/7" },
      { icon: "💵", title: "$0 Minimum", description: "No minimum deposit required" }
    ],

    endDate: "2026-06-30",
    spotsTotal: 500,
    spotsClaimed: 189,
    isLimited: true,

    terms: [
      "Trade 20+ lots per month to qualify",
      "VPS located in London or New York",
      "Cancel anytime"
    ],
    minDeposit: 0,

    featured: false,
    badge: "ALGO TRADERS"
  }
];

// Get featured deals
export function getFeaturedDeals(): Deal[] {
  return deals.filter(d => d.featured);
}

// Get deal by ID
export function getDealById(id: string): Deal | undefined {
  return deals.find(d => d.id === id);
}

// Get deals by broker
export function getDealsByBroker(brokerId: string): Deal[] {
  return deals.filter(d => d.brokerId === brokerId);
}

// Get active deals (not expired)
export function getActiveDeals(): Deal[] {
  const now = new Date();
  return deals.filter(d => new Date(d.endDate) > now);
}

// Calculate spots remaining
export function getSpotsRemaining(deal: Deal): number {
  return deal.spotsTotal - deal.spotsClaimed;
}

// Calculate percentage claimed
export function getPercentageClaimed(deal: Deal): number {
  return Math.round((deal.spotsClaimed / deal.spotsTotal) * 100);
}
