// Video content data for TradeTheDay
// YouTube video IDs and metadata for embedding

export interface Video {
  id: string;
  videoId: string; // YouTube video ID
  title: string;
  description: string;
  duration: string; // e.g., "12:45"
  publishDate: string; // ISO date
  category: 'broker-review' | 'tutorial' | 'strategy' | 'news' | 'comparison';
  tags: string[];
  brokerId?: string; // Link to broker if applicable
  featured: boolean;
  views?: number;
}

export const videos: Video[] = [
  // Broker Reviews
  {
    id: "avatrade-review-2026",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "AvaTrade Review 2026 - Is It Worth It?",
    description: "Complete AvaTrade review covering fees, platforms, regulation, and our honest verdict after trading with them for 6 months.",
    duration: "15:32",
    publishDate: "2026-01-15",
    category: "broker-review",
    tags: ["avatrade", "broker review", "forex broker"],
    brokerId: "avatrade",
    featured: true
  },
  {
    id: "etoro-review-2026",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "eToro Review 2026 - Copy Trading Explained",
    description: "Full eToro review with focus on their copy trading feature. See real results from copying top traders.",
    duration: "18:47",
    publishDate: "2026-01-10",
    category: "broker-review",
    tags: ["etoro", "copy trading", "social trading"],
    brokerId: "etoro",
    featured: true
  },
  {
    id: "xm-review-2026",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "XM Broker Review - $5 Minimum Deposit Test",
    description: "Can you actually trade with just $5? We test XM's micro account and share our experience.",
    duration: "12:15",
    publishDate: "2026-01-05",
    category: "broker-review",
    tags: ["xm", "micro account", "low deposit"],
    brokerId: "xm",
    featured: false
  },

  // Tutorials
  {
    id: "position-sizing-guide",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Position Sizing: The #1 Rule of Trading",
    description: "Learn how to calculate the perfect position size for every trade. This one skill can save your account.",
    duration: "10:24",
    publishDate: "2026-01-12",
    category: "tutorial",
    tags: ["risk management", "position sizing", "beginner"],
    featured: true
  },
  {
    id: "mt4-tutorial-beginners",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "MetaTrader 4 Tutorial for Complete Beginners",
    description: "Step-by-step guide to using MT4. From installation to placing your first trade.",
    duration: "22:18",
    publishDate: "2026-01-08",
    category: "tutorial",
    tags: ["mt4", "metatrader", "beginner", "platform"],
    featured: false
  },
  {
    id: "candlestick-patterns",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "5 Candlestick Patterns Every Trader Must Know",
    description: "Master these essential candlestick patterns to improve your entry timing and win rate.",
    duration: "14:56",
    publishDate: "2026-01-03",
    category: "tutorial",
    tags: ["candlesticks", "technical analysis", "patterns"],
    featured: false
  },

  // Strategies
  {
    id: "scalping-strategy-2026",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Simple Scalping Strategy That Actually Works",
    description: "A proven 5-minute scalping strategy using moving averages and RSI. Live trading examples included.",
    duration: "16:42",
    publishDate: "2026-01-14",
    category: "strategy",
    tags: ["scalping", "strategy", "5-minute", "forex"],
    featured: true
  },
  {
    id: "swing-trading-gold",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "Swing Trading Gold: My Exact Strategy",
    description: "How I trade gold on the 4-hour chart. Complete strategy breakdown with entry, exit, and risk rules.",
    duration: "19:33",
    publishDate: "2026-01-06",
    category: "strategy",
    tags: ["gold", "xauusd", "swing trading", "strategy"],
    featured: false
  },

  // Comparisons
  {
    id: "avatrade-vs-etoro",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "AvaTrade vs eToro - Which Broker to Choose?",
    description: "Head-to-head comparison of two popular brokers. We compare fees, platforms, features, and give our recommendation.",
    duration: "13:28",
    publishDate: "2026-01-11",
    category: "comparison",
    tags: ["avatrade", "etoro", "comparison", "broker"],
    featured: true
  },
  {
    id: "mt4-vs-mt5",
    videoId: "dQw4w9WgXcQ", // Replace with actual video ID
    title: "MT4 vs MT5 - Which Platform is Better?",
    description: "MetaTrader 4 vs MetaTrader 5 comparison. Which one should you use in 2026?",
    duration: "11:15",
    publishDate: "2026-01-02",
    category: "comparison",
    tags: ["mt4", "mt5", "metatrader", "platform"],
    featured: false
  }
];

// Get featured videos
export function getFeaturedVideos(): Video[] {
  return videos.filter(v => v.featured);
}

// Get videos by category
export function getVideosByCategory(category: Video['category']): Video[] {
  return videos.filter(v => v.category === category);
}

// Get videos by broker
export function getVideosByBroker(brokerId: string): Video[] {
  return videos.filter(v => v.brokerId === brokerId);
}

// Get video by ID
export function getVideoById(id: string): Video | undefined {
  return videos.find(v => v.id === id);
}

// Get latest videos
export function getLatestVideos(limit: number = 5): Video[] {
  return [...videos]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

// Get all categories
export function getVideoCategories(): { category: Video['category']; label: string; count: number }[] {
  const categories: Record<Video['category'], string> = {
    'broker-review': 'Broker Reviews',
    'tutorial': 'Tutorials',
    'strategy': 'Trading Strategies',
    'news': 'Market News',
    'comparison': 'Comparisons'
  };

  return Object.entries(categories).map(([category, label]) => ({
    category: category as Video['category'],
    label,
    count: videos.filter(v => v.category === category).length
  }));
}
