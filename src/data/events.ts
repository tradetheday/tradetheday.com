/**
 * Trading Events Data Store for TradeTheDay
 * Major global and economic events that create trading opportunities
 */

export interface EventBrokerRecommendation {
  brokerId: string;
  reason: string;
  bestFor: string;
}

export interface TradingStrategy {
  name: string;
  description: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  timeframe: string;
  instruments: string[];
}

export interface TradingEvent {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'crypto' | 'politics' | 'economic' | 'geopolitical' | 'regulatory';
  status: 'upcoming' | 'active' | 'completed';

  // Dates
  eventDate?: string; // Specific date if known
  eventPeriod?: string; // Date range or recurring description
  nextOccurrence?: string;

  // Content
  heroImage?: string;
  icon: string;
  tagline: string;
  description: string;
  fullDescription: string;

  // Market Impact
  impactLevel: 'Low' | 'Medium' | 'High' | 'Extreme';
  affectedMarkets: string[];
  affectedInstruments: string[];
  historicalImpact?: string;

  // Trading Information
  tradingStrategies: TradingStrategy[];
  keyDatesToWatch: { date: string; event: string; importance: 'Low' | 'Medium' | 'High' }[];
  riskFactors: string[];

  // Broker Recommendations
  recommendedBrokers: EventBrokerRecommendation[];

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Display
  featured: boolean;
  displayOrder: number;
  lastUpdated: string;
}

export const tradingEvents: TradingEvent[] = [
  {
    id: 'bitcoin-halving-2028',
    slug: 'bitcoin-halving-2028',
    title: 'Bitcoin Halving 2028',
    shortTitle: 'BTC Halving',
    category: 'crypto',
    status: 'upcoming',

    eventDate: 'April 2028 (estimated)',
    eventPeriod: 'Q2 2028',
    nextOccurrence: 'April 2028',

    icon: '₿',
    tagline: 'The most anticipated event in cryptocurrency',
    description: 'Bitcoin halving reduces miner rewards by 50%, historically triggering major bull runs. The 2028 halving will cut block rewards from 3.125 to 1.5625 BTC.',
    fullDescription: `
The Bitcoin halving is a pre-programmed event that occurs approximately every four years (every 210,000 blocks). During a halving, the reward that miners receive for validating new blocks is cut in half.

## What Is the Bitcoin Halving?

Bitcoin's supply is capped at 21 million coins. The halving mechanism ensures that new Bitcoin enters circulation at a decreasing rate over time, making it a deflationary asset. This built-in scarcity is one of Bitcoin's core value propositions.

### Halving History:
- **2012**: Reward reduced from 50 to 25 BTC
- **2016**: Reward reduced from 25 to 12.5 BTC
- **2020**: Reward reduced from 12.5 to 6.25 BTC
- **2024**: Reward reduced from 6.25 to 3.125 BTC
- **2028**: Reward will reduce from 3.125 to 1.5625 BTC

## Historical Price Impact

Every previous halving has preceded significant price appreciation:

- **2012 Halving**: Bitcoin rose from ~$12 to ~$1,100 within a year (9,000%+ gain)
- **2016 Halving**: Bitcoin rose from ~$650 to ~$20,000 within 18 months
- **2020 Halving**: Bitcoin rose from ~$9,000 to ~$69,000 within 18 months

## Why Does the Halving Affect Price?

1. **Supply Shock**: Less new Bitcoin entering the market
2. **Mining Economics**: Higher production costs per Bitcoin
3. **Market Psychology**: Anticipation drives accumulation
4. **Institutional FOMO**: Large players front-run the event

## 2028 Halving Outlook

The 2028 halving will be unique because:
- Bitcoin ETFs are now mainstream
- Institutional adoption is at all-time highs
- Mining is more professionalized than ever
- Regulatory clarity has improved globally

The supply reduction combined with growing demand from institutions could create exceptional price dynamics.
    `.trim(),

    impactLevel: 'Extreme',
    affectedMarkets: ['Cryptocurrency', 'Bitcoin', 'Altcoins', 'Mining Stocks'],
    affectedInstruments: ['BTC/USD', 'BTC/EUR', 'ETH/BTC', 'Crypto Mining ETFs'],
    historicalImpact: 'Previous halvings preceded 1,000-9,000% price increases within 12-18 months',

    tradingStrategies: [
      {
        name: 'Pre-Halving Accumulation',
        description: 'Gradually accumulate Bitcoin 6-12 months before the halving event to benefit from anticipated supply shock.',
        riskLevel: 'Medium',
        timeframe: '6-12 months before event',
        instruments: ['BTC/USD', 'Bitcoin ETFs']
      },
      {
        name: 'Post-Halving Momentum',
        description: 'Trade the momentum following the halving, historically the strongest gains occur 6-18 months after.',
        riskLevel: 'High',
        timeframe: '6-18 months after event',
        instruments: ['BTC/USD', 'Altcoins', 'Crypto indices']
      },
      {
        name: 'Mining Stock Play',
        description: 'Invest in Bitcoin mining companies that benefit from higher BTC prices despite reduced block rewards.',
        riskLevel: 'High',
        timeframe: 'Event period',
        instruments: ['MARA', 'RIOT', 'CLSK', 'Mining ETFs']
      }
    ],

    keyDatesToWatch: [
      { date: 'Q1 2028', event: 'Pre-halving accumulation phase begins', importance: 'Medium' },
      { date: 'Q2 2028', event: 'Bitcoin Halving (exact date TBD)', importance: 'High' },
      { date: 'Q3-Q4 2028', event: 'Post-halving price discovery', importance: 'High' },
      { date: '2029', event: 'Historical cycle peak zone', importance: 'High' }
    ],

    riskFactors: [
      'Past performance does not guarantee future results',
      'Regulatory changes could impact crypto markets',
      'Macroeconomic conditions may differ from previous cycles',
      'Institutional involvement changes market dynamics',
      'High volatility can lead to significant losses'
    ],

    recommendedBrokers: [
      {
        brokerId: 'binance',
        reason: 'Largest crypto exchange with lowest fees and highest liquidity for BTC trading',
        bestFor: 'Active crypto traders'
      },
      {
        brokerId: 'kraken',
        reason: 'US-regulated with excellent security track record, ideal for holding BTC',
        bestFor: 'Security-conscious investors'
      },
      {
        brokerId: 'etoro',
        reason: 'Easy-to-use platform for beginners wanting exposure to Bitcoin',
        bestFor: 'Beginners and copy traders'
      },
      {
        brokerId: 'avatrade',
        reason: 'Trade Bitcoin CFDs with leverage through a regulated multi-asset broker',
        bestFor: 'CFD traders wanting leverage'
      }
    ],

    metaTitle: 'Bitcoin Halving 2028: Complete Trading Guide | TradeTheDay',
    metaDescription: 'Everything you need to know about Bitcoin Halving 2028. Learn trading strategies, historical price impact, and get broker recommendations for this major crypto event.',
    keywords: ['bitcoin halving 2028', 'btc halving', 'bitcoin halving date', 'crypto halving', 'bitcoin price prediction'],

    featured: true,
    displayOrder: 1,
    lastUpdated: '2026-01-20'
  },

  {
    id: 'us-presidential-election-2028',
    slug: 'us-presidential-election-2028',
    title: 'US Presidential Election 2028',
    shortTitle: 'US Election',
    category: 'politics',
    status: 'upcoming',

    eventDate: 'November 3, 2028',
    eventPeriod: 'November 2028',
    nextOccurrence: 'November 3, 2028',

    icon: '🗳️',
    tagline: 'The world\'s most market-moving political event',
    description: 'US Presidential elections historically create massive volatility across stocks, forex, and commodities. The 2028 election will impact global markets.',
    fullDescription: `
The US Presidential Election is arguably the most significant political event for global financial markets. The outcome influences fiscal policy, trade relations, regulatory environments, and market sentiment worldwide.

## Why US Elections Move Markets

The United States has:
- The world's largest economy (~$28 trillion GDP)
- The global reserve currency (USD)
- The largest stock market by capitalization
- Significant influence on global trade policy

Presidential elections create uncertainty, and markets hate uncertainty. This leads to increased volatility before, during, and after elections.

## Historical Market Performance

### Election Year Patterns:
- Markets tend to be flat or slightly negative in the first half
- Volatility increases as election approaches
- Sharp moves occur on election night
- Strong rallies often follow regardless of winner

### By Party Win:
Both Republican and Democratic victories have historically led to positive post-election returns. Markets respond more to certainty than to specific policies.

## Key Sectors to Watch

### Republican Win Scenario:
- Energy (oil & gas): Often positive on deregulation
- Financials: Benefit from lighter regulation
- Defense: Increased spending expectations
- Healthcare: Mixed on policy approach

### Democratic Win Scenario:
- Clean energy: Renewable energy investments
- Healthcare: Varies by specific policies
- Infrastructure: Increased spending
- Technology: Complex regulatory outlook

## 2028 Election Context

Key factors for 2028:
- Economic conditions leading up to the election
- Incumbent vs challenger dynamics
- Key policy debates (taxation, trade, crypto regulation)
- International relations and trade policy

## Trading the Election

The highest volatility occurs:
1. During primaries and party conventions
2. After major debates
3. Election week
4. First 100 days of new administration
    `.trim(),

    impactLevel: 'Extreme',
    affectedMarkets: ['US Stocks', 'Forex', 'Bonds', 'Commodities', 'Global Indices'],
    affectedInstruments: ['USD pairs', 'S&P 500', 'NASDAQ', 'Treasury Yields', 'Gold'],
    historicalImpact: 'S&P 500 has risen in 19 of 24 election years since 1928',

    tradingStrategies: [
      {
        name: 'Volatility Play',
        description: 'Trade VIX options or volatility ETFs as election uncertainty spikes, typically peaking in October.',
        riskLevel: 'High',
        timeframe: 'September-November 2028',
        instruments: ['VIX', 'UVXY', 'VXX']
      },
      {
        name: 'Sector Rotation',
        description: 'Position in sectors likely to benefit from the leading candidate\'s policies as polls stabilize.',
        riskLevel: 'Medium',
        timeframe: 'August-November 2028',
        instruments: ['Sector ETFs', 'Individual stocks']
      },
      {
        name: 'USD Positioning',
        description: 'Trade major USD pairs based on expected fiscal and trade policy changes.',
        riskLevel: 'Medium',
        timeframe: 'Election week',
        instruments: ['EUR/USD', 'USD/JPY', 'GBP/USD']
      },
      {
        name: 'Post-Election Rally',
        description: 'Go long US indices after the election result is clear, regardless of winner, to capture the relief rally.',
        riskLevel: 'Medium',
        timeframe: 'November-December 2028',
        instruments: ['SPY', 'QQQ', 'IWM']
      }
    ],

    keyDatesToWatch: [
      { date: 'Early 2028', event: 'Primary season begins', importance: 'Medium' },
      { date: 'July-August 2028', event: 'Party conventions', importance: 'Medium' },
      { date: 'September-October 2028', event: 'Presidential debates', importance: 'High' },
      { date: 'November 3, 2028', event: 'Election Day', importance: 'High' },
      { date: 'January 20, 2029', event: 'Inauguration Day', importance: 'Medium' }
    ],

    riskFactors: [
      'Contested election results could prolong uncertainty',
      'Pre-election polling may not reflect actual outcomes',
      'Global events could overshadow election impact',
      'Policy implementation differs from campaign promises',
      'Congressional composition affects policy execution'
    ],

    recommendedBrokers: [
      {
        brokerId: 'avatrade',
        reason: 'Multi-regulated broker with excellent forex spreads for USD trading during election volatility',
        bestFor: 'Forex and CFD traders'
      },
      {
        brokerId: 'etoro',
        reason: 'Easy access to US stocks and ETFs with zero commission, perfect for sector plays',
        bestFor: 'Stock investors'
      },
      {
        brokerId: 'axi',
        reason: 'ECN execution with tight spreads ideal for election night trading volatility',
        bestFor: 'Active day traders'
      }
    ],

    metaTitle: 'US Presidential Election 2028: Trading Guide & Market Impact | TradeTheDay',
    metaDescription: 'How to trade the 2028 US Presidential Election. Historical market performance, trading strategies, key dates, and broker recommendations for this market-moving event.',
    keywords: ['us election 2028', 'presidential election trading', 'election market impact', 'us election stocks', 'election volatility'],

    featured: true,
    displayOrder: 2,
    lastUpdated: '2026-01-20'
  },

  {
    id: 'federal-reserve-rate-decisions',
    slug: 'federal-reserve-rate-decisions',
    title: 'Federal Reserve Interest Rate Decisions',
    shortTitle: 'Fed Rates',
    category: 'economic',
    status: 'active',

    eventPeriod: 'Every 6 weeks (8 times per year)',
    nextOccurrence: 'Check Fed calendar',

    icon: '🏛️',
    tagline: 'The world\'s most influential monetary policy',
    description: 'Federal Reserve rate decisions move all markets - stocks, bonds, forex, and commodities. Every FOMC meeting is a major trading event.',
    fullDescription: `
The Federal Open Market Committee (FOMC) meets eight times per year to set US monetary policy. Their decisions on interest rates and quantitative measures move markets globally.

## Why Fed Decisions Matter

The Federal Reserve:
- Controls the world's reserve currency
- Sets the benchmark for global interest rates
- Signals future economic conditions
- Influences asset valuations worldwide

## Understanding Fed Policy

### Rate Hikes (Tightening):
- Typically strengthens the US Dollar
- Pressures stock valuations
- Increases bond yields
- Can slow economic growth

### Rate Cuts (Easing):
- Typically weakens the US Dollar
- Supports stock valuations
- Decreases bond yields
- Stimulates economic growth

## FOMC Meeting Structure

Each FOMC meeting includes:
1. **Rate Decision**: The headline announcement
2. **Statement**: Policy language and outlook
3. **Press Conference**: Chair's Q&A (major meetings)
4. **Dot Plot**: Rate projections (quarterly)

## Market Reactions

### Immediate (0-30 minutes):
- Sharp moves in forex, especially USD pairs
- Bond yields adjust quickly
- Stock indices move on rate surprise

### Extended (hours to days):
- Sector rotation based on rate path
- Currency trends establish
- Yield curve adjustments

## Trading Fed Meetings

### Pre-Meeting:
- Position sizes should be reduced
- Be aware of consensus expectations
- Watch Fed Funds futures for market pricing

### During Announcement:
- Extreme volatility for 15-30 minutes
- Wait for initial spike to settle
- Focus on statement language, not just rate

### Post-Meeting:
- Trade the trend that emerges
- Watch for follow-through in coming days
- Monitor Fed speaker commentary
    `.trim(),

    impactLevel: 'High',
    affectedMarkets: ['Forex', 'US Stocks', 'Bonds', 'Gold', 'Global Indices'],
    affectedInstruments: ['EUR/USD', 'USD/JPY', 'Gold', 'S&P 500', 'Treasury Yields'],
    historicalImpact: 'Average S&P 500 move of 1-2% on Fed days; USD pairs can move 100+ pips',

    tradingStrategies: [
      {
        name: 'Fade the Initial Move',
        description: 'Wait for the initial spike on rate announcement, then trade the reversal as markets digest the full statement.',
        riskLevel: 'High',
        timeframe: '30 minutes after announcement',
        instruments: ['EUR/USD', 'USD/JPY', 'Gold']
      },
      {
        name: 'Trend Following',
        description: 'Wait for dust to settle (1-2 hours), then trade in direction of the established move.',
        riskLevel: 'Medium',
        timeframe: '2 hours to 2 days after',
        instruments: ['USD pairs', 'S&P 500']
      },
      {
        name: 'Options Straddle',
        description: 'Buy both calls and puts before the meeting to profit from large moves in either direction.',
        riskLevel: 'Medium',
        timeframe: 'Pre-meeting to post-announcement',
        instruments: ['SPY options', 'QQQ options']
      }
    ],

    keyDatesToWatch: [
      { date: 'Every 6 weeks', event: 'FOMC Rate Decision', importance: 'High' },
      { date: 'Quarterly', event: 'Summary of Economic Projections (Dot Plot)', importance: 'High' },
      { date: 'Ongoing', event: 'Fed Speaker Events', importance: 'Medium' },
      { date: 'Annual', event: 'Jackson Hole Symposium', importance: 'High' }
    ],

    riskFactors: [
      'Unexpected rate decisions cause extreme volatility',
      'Statement language matters as much as rate decision',
      'Spreads widen significantly during announcements',
      'Stop losses may slip in volatile conditions',
      'Fed guidance can change quickly'
    ],

    recommendedBrokers: [
      {
        brokerId: 'axi',
        reason: 'ECN execution with raw spreads crucial for Fed announcement trading',
        bestFor: 'Professional forex traders'
      },
      {
        brokerId: 'avatrade',
        reason: 'Regulated multi-asset broker with competitive spreads on USD pairs',
        bestFor: 'Multi-asset traders'
      },
      {
        brokerId: 'etoro',
        reason: 'Easy stock trading for positioning based on rate expectations',
        bestFor: 'Stock investors'
      }
    ],

    metaTitle: 'FOMC Federal Reserve Trading Guide | Interest Rate Decisions | TradeTheDay',
    metaDescription: 'How to trade Federal Reserve interest rate decisions. FOMC meeting strategies, market impact analysis, and broker recommendations for Fed day trading.',
    keywords: ['fomc trading', 'fed rate decision', 'interest rate trading', 'federal reserve meeting', 'fomc strategy'],

    featured: true,
    displayOrder: 3,
    lastUpdated: '2026-01-20'
  },

  {
    id: 'ethereum-upgrades',
    slug: 'ethereum-upgrades',
    title: 'Ethereum Network Upgrades',
    shortTitle: 'ETH Upgrades',
    category: 'crypto',
    status: 'active',

    eventPeriod: 'Ongoing development milestones',
    nextOccurrence: 'Various - check Ethereum roadmap',

    icon: 'Ξ',
    tagline: 'Protocol changes that reshape DeFi and Web3',
    description: 'Ethereum upgrades like Dencun and future scalability improvements significantly impact ETH price and the broader crypto ecosystem.',
    fullDescription: `
Ethereum is the backbone of decentralized finance (DeFi), NFTs, and Web3 applications. Major network upgrades can dramatically impact ETH price and the entire crypto market.

## Ethereum Upgrade History

### The Merge (September 2022)
- Transitioned from Proof of Work to Proof of Stake
- Reduced energy consumption by 99.95%
- Introduced staking rewards for validators
- Set foundation for future scalability

### Shanghai/Capella (April 2023)
- Enabled staked ETH withdrawals
- Increased staking participation
- Improved network efficiency

### Dencun (March 2024)
- Introduced "proto-danksharding" (EIP-4844)
- Dramatically reduced Layer 2 transaction fees
- Enhanced data availability for rollups

## Future Upgrades

### Pectra (Expected 2026)
- Account abstraction improvements
- Enhanced validator operations
- Further scaling improvements

### Full Danksharding (Future)
- Complete implementation of data sharding
- Massive increase in network capacity
- Target: 100,000+ transactions per second

## Market Impact of Upgrades

### Pre-Upgrade:
- Speculation drives price action
- Technical analysis often fails
- Community sentiment is crucial

### Post-Upgrade:
- "Buy the rumor, sell the news" pattern is common
- Long-term benefits take months to reflect
- Ecosystem growth drives sustainable value

## Upgrade Investment Thesis

Ethereum upgrades improve:
1. **Scalability**: More users and applications
2. **Cost**: Lower transaction fees
3. **Security**: Enhanced network protection
4. **Utility**: New use cases enabled

Each upgrade makes Ethereum more valuable as digital infrastructure.
    `.trim(),

    impactLevel: 'High',
    affectedMarkets: ['Cryptocurrency', 'DeFi', 'NFTs', 'Layer 2 tokens'],
    affectedInstruments: ['ETH/USD', 'ETH/BTC', 'L2 tokens (ARB, OP)', 'DeFi tokens'],
    historicalImpact: 'The Merge saw ETH rally 90% in anticipation, followed by post-event correction',

    tradingStrategies: [
      {
        name: 'Pre-Upgrade Accumulation',
        description: 'Accumulate ETH 3-6 months before major upgrades when upgrade details are confirmed.',
        riskLevel: 'Medium',
        timeframe: '3-6 months before upgrade',
        instruments: ['ETH/USD', 'stETH']
      },
      {
        name: 'Layer 2 Ecosystem Play',
        description: 'Invest in Layer 2 protocols that benefit from Ethereum scalability improvements.',
        riskLevel: 'High',
        timeframe: 'Pre and post upgrade',
        instruments: ['ARB', 'OP', 'MATIC']
      },
      {
        name: 'Sell the News',
        description: 'Take profits on ETH holdings immediately after successful upgrade completion.',
        riskLevel: 'Medium',
        timeframe: 'Day of upgrade',
        instruments: ['ETH/USD']
      }
    ],

    keyDatesToWatch: [
      { date: 'TBD', event: 'Next major upgrade announcement', importance: 'High' },
      { date: 'Testnet launches', event: 'Upgrade testing phases', importance: 'Medium' },
      { date: 'Mainnet deployment', event: 'Upgrade goes live', importance: 'High' },
      { date: 'Post-upgrade', event: 'Ecosystem adoption metrics', importance: 'Medium' }
    ],

    riskFactors: [
      'Upgrades can be delayed, causing uncertainty',
      'Technical issues could impact confidence',
      'Competing Layer 1s may gain ground during delays',
      'Regulatory uncertainty remains',
      '"Buy the rumor, sell the news" can cause sharp corrections'
    ],

    recommendedBrokers: [
      {
        brokerId: 'binance',
        reason: 'Largest ETH trading volume with lowest fees and staking options',
        bestFor: 'Active ETH traders'
      },
      {
        brokerId: 'kraken',
        reason: 'Secure ETH staking with 4-7% APY and excellent custody',
        bestFor: 'Long-term ETH holders'
      },
      {
        brokerId: 'avatrade',
        reason: 'Trade ETH CFDs with leverage through regulated broker',
        bestFor: 'CFD and leverage traders'
      }
    ],

    metaTitle: 'Ethereum Upgrade Trading Guide | ETH Network Updates | TradeTheDay',
    metaDescription: 'How to trade Ethereum network upgrades. Analysis of past upgrades, future roadmap, trading strategies, and broker recommendations for ETH events.',
    keywords: ['ethereum upgrade', 'eth upgrade', 'dencun', 'ethereum merge', 'ethereum trading'],

    featured: false,
    displayOrder: 4,
    lastUpdated: '2026-01-20'
  },

  {
    id: 'non-farm-payrolls',
    slug: 'non-farm-payrolls',
    title: 'US Non-Farm Payrolls (NFP)',
    shortTitle: 'NFP',
    category: 'economic',
    status: 'active',

    eventPeriod: 'First Friday of every month',
    nextOccurrence: 'First Friday of the month, 8:30 AM ET',

    icon: '📊',
    tagline: 'The most anticipated monthly economic release',
    description: 'US Non-Farm Payrolls is the premier monthly economic indicator, causing significant volatility in forex, stocks, and commodities.',
    fullDescription: `
Non-Farm Payrolls (NFP) is released on the first Friday of each month by the Bureau of Labor Statistics. It measures the change in the number of employed people in the US, excluding farm workers.

## Why NFP Matters

NFP is crucial because it:
- Reflects the health of the US economy
- Influences Federal Reserve policy decisions
- Moves markets immediately and significantly
- Sets the tone for the trading month

## What's Included in NFP

The NFP report contains:
1. **Headline Number**: Net jobs added/lost
2. **Unemployment Rate**: Percentage unemployed
3. **Average Hourly Earnings**: Wage inflation data
4. **Labor Force Participation**: Workforce engagement
5. **Previous Month Revisions**: Updated figures

## Market Expectations

Traders focus on:
- **Consensus**: Average analyst forecast
- **Whisper Number**: Trading floor expectations
- **Previous Month**: For comparison
- **Revisions**: To previous reports

## Typical Market Reactions

### Stronger Than Expected:
- USD strengthens
- Gold weakens
- Stocks mixed (depends on Fed policy outlook)
- Bond yields rise

### Weaker Than Expected:
- USD weakens
- Gold strengthens
- Stocks mixed (bad news can be good if it delays rate hikes)
- Bond yields fall

## NFP Trading Reality

The first 15-30 minutes after NFP are extremely volatile:
- Spreads widen significantly
- Whipsaws are common
- Initial direction often reverses
- Professional traders wait for dust to settle

## Best Practices

1. Know the consensus before the release
2. Reduce position sizes on NFP day
3. Wait 30+ minutes before trading the reaction
4. Watch the USD index (DXY) for direction
5. Consider the Fed policy context
    `.trim(),

    impactLevel: 'High',
    affectedMarkets: ['Forex', 'US Stocks', 'Gold', 'Bonds'],
    affectedInstruments: ['EUR/USD', 'USD/JPY', 'Gold', 'S&P 500', 'US Treasury Yields'],
    historicalImpact: 'Average move of 50-100+ pips on EUR/USD in the hour following release',

    tradingStrategies: [
      {
        name: 'Wait and React',
        description: 'Wait 30 minutes after release for volatility to settle, then trade the established trend.',
        riskLevel: 'Medium',
        timeframe: '30 minutes to hours after release',
        instruments: ['EUR/USD', 'USD/JPY', 'Gold']
      },
      {
        name: 'Straddle Strategy',
        description: 'Place pending orders above and below current price before release to catch the breakout.',
        riskLevel: 'High',
        timeframe: 'Immediately after release',
        instruments: ['EUR/USD', 'GBP/USD']
      },
      {
        name: 'Correlation Play',
        description: 'Trade gold inverse to USD based on NFP result interpretation.',
        riskLevel: 'Medium',
        timeframe: 'Post-release',
        instruments: ['XAU/USD', 'DXY']
      }
    ],

    keyDatesToWatch: [
      { date: 'First Friday monthly', event: 'NFP Release at 8:30 AM ET', importance: 'High' },
      { date: 'Wednesday before', event: 'ADP Private Payrolls (early indicator)', importance: 'Medium' },
      { date: 'Thursday before', event: 'Weekly Jobless Claims', importance: 'Low' }
    ],

    riskFactors: [
      'Extreme volatility in first 30 minutes',
      'Spread widening makes entry/exit difficult',
      'Whipsaws can trigger stops on both sides',
      'Initial reaction often reverses',
      'ADP report not always predictive of NFP'
    ],

    recommendedBrokers: [
      {
        brokerId: 'axi',
        reason: 'ECN execution with minimal slippage crucial for NFP volatility',
        bestFor: 'Professional forex traders'
      },
      {
        brokerId: 'avatrade',
        reason: 'Regulated broker with competitive spreads on major pairs',
        bestFor: 'Intermediate forex traders'
      },
      {
        brokerId: 'etoro',
        reason: 'User-friendly platform for trading post-NFP trends',
        bestFor: 'Casual traders'
      }
    ],

    metaTitle: 'Non-Farm Payrolls (NFP) Trading Guide | TradeTheDay',
    metaDescription: 'Complete guide to trading US Non-Farm Payrolls. Learn NFP trading strategies, market impact, and get broker recommendations for this monthly event.',
    keywords: ['non farm payrolls', 'nfp trading', 'nfp forex', 'us jobs report', 'employment data trading'],

    featured: false,
    displayOrder: 5,
    lastUpdated: '2026-01-20'
  },

  {
    id: 'bank-of-england-rate-decisions',
    slug: 'bank-of-england-rate-decisions',
    title: 'Bank of England Interest Rate Decisions',
    shortTitle: 'BoE Rates',
    category: 'economic',
    status: 'active',

    eventPeriod: '8 times per year',
    nextOccurrence: 'Check BoE calendar',

    icon: '🇬🇧',
    tagline: 'Key driver of GBP and UK market movements',
    description: 'Bank of England rate decisions significantly impact GBP pairs, UK stocks, and gilt yields. Essential for GBP traders.',
    fullDescription: `
The Bank of England's Monetary Policy Committee (MPC) meets eight times per year to set UK interest rates. Their decisions have significant implications for GBP, UK equities, and global markets.

## Why BoE Decisions Matter

The Bank of England:
- Controls monetary policy for the 6th largest economy
- Manages one of the most traded currencies (GBP)
- Influences UK housing and credit markets
- Signals UK economic health

## MPC Meeting Structure

Each MPC meeting includes:
1. **Rate Decision**: Main Bank Rate
2. **Vote Split**: How members voted (e.g., 7-2)
3. **Statement**: Policy outlook and concerns
4. **Monetary Policy Report**: Quarterly economic forecasts

## GBP Reaction Patterns

### Hawkish Surprise:
- GBP strengthens against major currencies
- UK gilt yields rise
- FTSE may weaken (higher rates pressure stocks)

### Dovish Surprise:
- GBP weakens
- UK gilt yields fall
- FTSE may strengthen

## Vote Split Importance

The 9-member committee vote reveals:
- Policy direction trajectory
- Internal disagreements
- Likelihood of future moves

A close vote (5-4 or 6-3) often causes more volatility than unanimous decisions.

## Trading Considerations

### Pre-Meeting:
- Check market pricing via SONIA futures
- Monitor inflation data (CPI is key)
- Watch BoE speaker commentary

### Post-Meeting:
- Initial reaction may be knee-jerk
- Statement language drives secondary moves
- Compare to Fed/ECB policy for relative trades
    `.trim(),

    impactLevel: 'High',
    affectedMarkets: ['Forex', 'UK Stocks', 'Gilts'],
    affectedInstruments: ['GBP/USD', 'EUR/GBP', 'FTSE 100', 'UK Gilts'],
    historicalImpact: 'GBP/USD can move 100+ pips on surprise decisions; FTSE swings 1-2%',

    tradingStrategies: [
      {
        name: 'GBP Trend Trading',
        description: 'Trade GBP pairs in direction of rate surprise after initial volatility settles.',
        riskLevel: 'Medium',
        timeframe: 'Post-announcement to days',
        instruments: ['GBP/USD', 'EUR/GBP', 'GBP/JPY']
      },
      {
        name: 'UK Yield Play',
        description: 'Trade UK government bonds (gilts) based on rate expectations.',
        riskLevel: 'Low',
        timeframe: 'Days to weeks',
        instruments: ['UK Gilt futures', 'UK bond ETFs']
      }
    ],

    keyDatesToWatch: [
      { date: '8 times yearly', event: 'MPC Rate Decision', importance: 'High' },
      { date: 'Quarterly', event: 'Monetary Policy Report', importance: 'High' },
      { date: 'Monthly', event: 'UK CPI Release', importance: 'Medium' }
    ],

    riskFactors: [
      'Brexit-related factors can override rate decisions',
      'Political uncertainty impacts GBP sentiment',
      'Spread widening during announcements',
      'Coordination with Fed/ECB matters for relative trades'
    ],

    recommendedBrokers: [
      {
        brokerId: 'axi',
        reason: 'Tight spreads on GBP pairs with ECN execution',
        bestFor: 'GBP forex traders'
      },
      {
        brokerId: 'avatrade',
        reason: 'Regulated in UK with competitive GBP pair spreads',
        bestFor: 'UK-based traders'
      }
    ],

    metaTitle: 'Bank of England Rate Decision Trading Guide | TradeTheDay',
    metaDescription: 'How to trade Bank of England interest rate decisions. GBP trading strategies, MPC meeting analysis, and broker recommendations.',
    keywords: ['bank of england', 'boe rate decision', 'gbp trading', 'mpc meeting', 'uk interest rates'],

    featured: false,
    displayOrder: 6,
    lastUpdated: '2026-01-20'
  }
];

/**
 * Get an event by its slug
 */
export function getEventBySlug(slug: string): TradingEvent | undefined {
  return tradingEvents.find(e => e.slug === slug);
}

/**
 * Get all featured events
 */
export function getFeaturedEvents(): TradingEvent[] {
  return tradingEvents.filter(e => e.featured).sort((a, b) => a.displayOrder - b.displayOrder);
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: TradingEvent['category']): TradingEvent[] {
  return tradingEvents.filter(e => e.category === category);
}

/**
 * Get events by status
 */
export function getEventsByStatus(status: TradingEvent['status']): TradingEvent[] {
  return tradingEvents.filter(e => e.status === status);
}

/**
 * Get all event slugs for static generation
 */
export function getAllEventSlugs(): string[] {
  return tradingEvents.map(e => e.slug);
}

/**
 * Get sorted events for display
 */
export function getSortedEvents(): TradingEvent[] {
  return [...tradingEvents].sort((a, b) => a.displayOrder - b.displayOrder);
}
