// Glossary terms data for TradeTheDay
// Each term has full content for individual pages

export interface GlossaryTerm {
  slug: string;
  name: string;
  category: 'essential' | 'technical' | 'forex-slang' | 'order-type';
  shortDescription: string;
  definition: string;
  howItWorks?: string[];
  types?: { name: string; description: string }[];
  tradingTips?: string[];
  relatedTerms: string[];
  popular?: boolean;
}

export const glossaryTerms: GlossaryTerm[] = [
  // === POPULAR TERMS (High Search Volume) ===
  {
    slug: 'mio',
    name: 'Mio',
    category: 'forex-slang',
    shortDescription: 'Financial abbreviation for million. Commonly used in banking, trading, and finance.',
    definition: 'Mio is a financial abbreviation for million, commonly used in banking, trading, and international finance. When traders say "5 mio USD" they mean 5 million US dollars. This shorthand is standard in interbank trading and professional finance.',
    howItWorks: [
      '"1 mio" = 1 million',
      '"5 mio EUR" = 5 million euros',
      'Used in trade tickets, chat, and verbal communication',
      'Standard in interbank foreign exchange markets'
    ],
    tradingTips: [
      'Common in forex dealing rooms and institutional trading',
      'Different from "MM" which some use for million',
      'Be aware: some regions use "mia" for billion (milliard)'
    ],
    relatedTerms: ['forex', 'lot', 'currency-pair'],
    popular: true
  },
  {
    slug: 'g10',
    name: 'G10 Currencies',
    category: 'forex-slang',
    shortDescription: 'The ten most heavily traded and liquid currencies in the forex market.',
    definition: 'G10 currencies refer to the ten most liquid and heavily traded currencies in the global foreign exchange market. Despite the name suggesting 10, it actually includes 11 currencies from countries with advanced economies.',
    howItWorks: [
      'USD (US Dollar) - dominant reserve currency',
      'EUR (Euro) - second most traded',
      'JPY (Japanese Yen)',
      'GBP (British Pound Sterling)',
      'CHF (Swiss Franc)',
      'AUD (Australian Dollar)',
      'NZD (New Zealand Dollar)',
      'CAD (Canadian Dollar)',
      'SEK (Swedish Krona)',
      'NOK (Norwegian Krone)',
      'DKK (Danish Krone) - sometimes included'
    ],
    tradingTips: [
      'G10 pairs have the tightest spreads',
      'Most liquid during overlapping sessions (London-New York)',
      'Lower risk than exotic currencies'
    ],
    relatedTerms: ['forex', 'currency-pair', 'spread'],
    popular: true
  },
  {
    slug: 'gopher',
    name: 'Gopher',
    category: 'forex-slang',
    shortDescription: 'Slang term for the USD/JPY currency pair, used by forex traders.',
    definition: 'Gopher is forex trader slang for the USD/JPY (US Dollar/Japanese Yen) currency pair. The nickname comes from the phrase "go for" (yen) which sounds like "gopher." It\'s one of the most traded currency pairs globally.',
    howItWorks: [
      '"Buying the gopher" = going long USD/JPY',
      '"Selling the gopher" = going short USD/JPY',
      'Commonly used in dealing rooms and trading chat'
    ],
    tradingTips: [
      'USD/JPY is highly liquid during Asian and US sessions',
      'Sensitive to Bank of Japan policy and US Treasury yields',
      'Often used as a risk sentiment indicator'
    ],
    relatedTerms: ['cable', 'fiber', 'aussie', 'g10'],
    popular: true
  },
  {
    slug: 'left-hand-side',
    name: 'Left-Hand Side (LHS)',
    category: 'forex-slang',
    shortDescription: 'The bid side of a two-way price quote. Selling "on the left" means selling at the bid price.',
    definition: 'Left-hand side (LHS) refers to the bid price in a two-way forex quote. In the standard quote format "bid/ask" or "bid/offer," the bid is on the left. When you sell at the bid, you\'re "hitting the left" or "dealing on the left-hand side."',
    howItWorks: [
      'Quote: 1.1000/1.1005',
      '1.1000 = left-hand side (bid) = price to sell',
      '1.1005 = right-hand side (ask) = price to buy',
      '"Mine!" in dealing = selling at bid'
    ],
    tradingTips: [
      'Market makers buy on the left (bid) and sell on the right (ask)',
      'The difference between sides is the spread',
      'Understanding this helps with order execution'
    ],
    relatedTerms: ['right-hand-side', 'bid', 'spread'],
    popular: true
  },
  {
    slug: 'right-hand-side',
    name: 'Right-Hand Side (RHS)',
    category: 'forex-slang',
    shortDescription: 'The ask/offer side of a two-way price quote. Buying "on the right" means buying at the ask price.',
    definition: 'Right-hand side (RHS) refers to the ask or offer price in a two-way forex quote. In the standard quote "bid/ask," the ask is on the right. When you buy at the ask price, you\'re "paying the right" or "dealing on the right-hand side."',
    howItWorks: [
      'Quote: 1.1000/1.1005',
      '1.1000 = left-hand side (bid)',
      '1.1005 = right-hand side (ask) = price to buy',
      '"Yours!" in dealing = buying at ask'
    ],
    tradingTips: [
      'You always buy on the right and sell on the left',
      'The spread (difference) is the market maker\'s profit',
      'Tighter spreads mean lower trading costs'
    ],
    relatedTerms: ['left-hand-side', 'ask', 'spread'],
    popular: true
  },
  {
    slug: 'broken-dates',
    name: 'Broken Dates',
    category: 'forex-slang',
    shortDescription: 'Non-standard settlement dates in forex that don\'t match typical market conventions.',
    definition: 'Broken dates (also called odd dates or cock dates) are forex settlement dates that fall outside standard market conventions. Standard dates are spot (T+2), tom (T+1), and standard forward dates (1W, 1M, 3M, etc.). Any date that doesn\'t match these is a "broken date."',
    howItWorks: [
      'Standard: Spot, 1 week, 1 month, 3 months, etc.',
      'Broken: T+5 days, 17 days, 45 days, etc.',
      'Requires interpolation between standard rates',
      'Common when hedging specific cash flows'
    ],
    tradingTips: [
      'Broken date forwards often have wider spreads',
      'Used for precise cash flow hedging',
      'Some brokers charge extra for non-standard dates'
    ],
    relatedTerms: ['outright-deal', 'forex'],
    popular: true
  },
  {
    slug: 'outright-deal',
    name: 'Outright Deal',
    category: 'forex-slang',
    shortDescription: 'A forex transaction for delivery on any date other than spot, not part of a swap.',
    definition: 'An outright deal (or outright forward) is a forex transaction where currency exchange happens on a date other than spot (T+2), and it\'s not part of a swap transaction. It\'s a standalone forward contract used for hedging future currency needs.',
    howItWorks: [
      'Single leg transaction (not a swap)',
      'Delivery date beyond spot',
      'Price includes forward points (interest differential)',
      'Used to lock in future exchange rates'
    ],
    tradingTips: [
      'Outright forwards are priced off the spot + forward points',
      'Forward points reflect interest rate differentials',
      'Useful for hedging known future payments'
    ],
    relatedTerms: ['forex', 'broken-dates', 'currency-pair'],
    popular: true
  },
  {
    slug: 'forward-settlement-date',
    name: 'Forward Settlement Date',
    category: 'forex-slang',
    shortDescription: 'The future date when a forward forex contract will settle and currencies will be exchanged.',
    definition: 'A forward settlement date is the agreed-upon future date when a forward foreign exchange contract will be settled. Unlike spot transactions (T+2), forward contracts can settle on any agreed date in the future, from a few days to several years ahead.',
    howItWorks: [
      'Agreed at contract inception',
      'Can be any business day after spot date',
      'Standard tenors: 1W, 1M, 2M, 3M, 6M, 1Y',
      'Non-standard dates are called "broken dates"'
    ],
    tradingTips: [
      'Forward rates include interest rate differentials',
      'Longer dates typically have wider spreads',
      'Match settlement date to your actual currency need'
    ],
    relatedTerms: ['outright-deal', 'broken-dates', 'forex'],
    popular: false
  },

  // === ESSENTIAL TRADING TERMS ===
  {
    slug: 'pip',
    name: 'Pip',
    category: 'essential',
    shortDescription: 'The smallest price movement in a currency pair. Typically the fourth decimal place (0.0001).',
    definition: 'A pip (percentage in point or price interest point) is the smallest standardized price movement in forex trading. For most currency pairs, one pip equals 0.0001 (the fourth decimal place). For JPY pairs, one pip equals 0.01 (the second decimal place).',
    howItWorks: [
      'EUR/USD moves from 1.1000 to 1.1001 = 1 pip move',
      'USD/JPY moves from 150.00 to 150.01 = 1 pip move',
      'Pip value depends on lot size and pair',
      'Standard lot (100,000): 1 pip ≈ $10 for major pairs'
    ],
    types: [
      { name: 'Standard Pip', description: '0.0001 for most pairs' },
      { name: 'JPY Pip', description: '0.01 for JPY pairs' },
      { name: 'Pipette', description: '0.00001 - fractional pip (1/10th pip)' }
    ],
    tradingTips: [
      'Calculate pip value before entering trades',
      'Spreads and commissions are measured in pips',
      'Risk management often expressed in pips'
    ],
    relatedTerms: ['spread', 'lot', 'leverage']
  },
  {
    slug: 'spread',
    name: 'Spread',
    category: 'essential',
    shortDescription: 'The difference between the bid and ask price. A key trading cost in forex and CFD markets.',
    definition: 'The spread is the difference between the bid (sell) price and the ask (buy) price of a trading instrument. It represents a key cost of trading and is how brokers often make money. Tighter spreads mean lower trading costs.',
    howItWorks: [
      'Bid: 1.1000 / Ask: 1.1002 = 2 pip spread',
      'You buy at ask, sell at bid',
      'Spread is an immediate cost when entering a trade',
      'Variable spreads widen during volatility'
    ],
    types: [
      { name: 'Fixed Spread', description: 'Stays constant regardless of market conditions' },
      { name: 'Variable Spread', description: 'Fluctuates based on liquidity and volatility' },
      { name: 'Raw Spread', description: 'Interbank spread with separate commission' }
    ],
    tradingTips: [
      'Compare spreads across brokers',
      'Spreads widen during news events and low liquidity',
      'Major pairs have tighter spreads than exotics'
    ],
    relatedTerms: ['pip', 'bid', 'ask']
  },
  {
    slug: 'leverage',
    name: 'Leverage',
    category: 'essential',
    shortDescription: 'Using borrowed capital to increase the potential return of an investment. Amplifies both gains and losses.',
    definition: 'Leverage allows traders to control a larger position with a smaller amount of capital. For example, 100:1 leverage means $1,000 controls $100,000 in the market. While leverage amplifies profits, it equally amplifies losses.',
    howItWorks: [
      '100:1 leverage: $1,000 margin controls $100,000',
      '50:1 leverage: $2,000 margin controls $100,000',
      'Higher leverage = higher risk and reward',
      'Margin is the collateral required'
    ],
    types: [
      { name: 'Forex Leverage', description: 'Often 30:1 to 500:1 depending on regulation' },
      { name: 'CFD Leverage', description: 'Varies by instrument (stocks, indices, commodities)' },
      { name: 'Crypto Leverage', description: 'Typically 2:1 to 100:1' }
    ],
    tradingTips: [
      'Regulated brokers have leverage limits (EU: 30:1 forex)',
      'Start with lower leverage as a beginner',
      'Higher leverage increases margin call risk'
    ],
    relatedTerms: ['margin', 'margin-call', 'lot']
  },
  {
    slug: 'mas',
    name: 'MAS',
    category: 'essential',
    shortDescription: 'Monetary Authority of Singapore - Singapore\'s central bank and top-tier financial regulator.',
    definition: 'MAS (Monetary Authority of Singapore) is Singapore\'s central bank and integrated financial regulator. It\'s a highly respected Tier-1 regulator with strict standards. MAS-regulated brokers must meet substantial capital requirements and follow comprehensive conduct rules.',
    howItWorks: [
      'Central bank and financial regulator combined',
      'Capital Markets Services license for forex brokers',
      'Strict capital and conduct requirements',
      'No ESMA-style leverage caps but strong oversight'
    ],
    tradingTips: [
      'MAS regulation is highly trusted globally',
      'Check MAS Financial Institutions Directory',
      'Singapore is a major Asian financial hub'
    ],
    relatedTerms: ['fca', 'asic', 'jfsa', 'sfc']
  },
  {
    slug: 'mfsa',
    name: 'MFSA',
    category: 'essential',
    shortDescription: 'Malta Financial Services Authority - EU regulator popular with fintech and gaming companies.',
    definition: 'MFSA (Malta Financial Services Authority) is Malta\'s financial services regulator. As an EU member, MFSA-licensed firms can passport across Europe. Malta has attracted many forex brokers and fintech companies with its business-friendly approach within EU rules.',
    howItWorks: [
      'EU member - MiFID II compliant',
      'Brokers can passport to all EU/EEA countries',
      'Investor compensation up to €20,000',
      'ESMA leverage restrictions apply'
    ],
    tradingTips: [
      'EU regulation with full passporting rights',
      'Popular with crypto and fintech companies',
      'Check MFSA register for licensed entities'
    ],
    relatedTerms: ['cysec', 'fca', 'cbi', 'esma']
  },
  {
    slug: 'margin',
    name: 'Margin',
    category: 'essential',
    shortDescription: 'The collateral required to open and maintain a leveraged trading position.',
    definition: 'Margin is the amount of money required to open and maintain a leveraged trading position. It acts as collateral against potential losses. Margin requirements vary by broker, instrument, and regulatory jurisdiction.',
    howItWorks: [
      'Used margin: funds locked in open positions',
      'Free margin: available for new trades',
      'Margin level: (Equity / Used Margin) × 100%',
      'Below margin call level triggers warnings'
    ],
    types: [
      { name: 'Initial Margin', description: 'Required to open a position' },
      { name: 'Maintenance Margin', description: 'Required to keep position open' },
      { name: 'Variation Margin', description: 'Daily profit/loss adjustments' }
    ],
    tradingTips: [
      'Monitor your margin level constantly',
      'Never use all available margin',
      'Different instruments have different margin requirements'
    ],
    relatedTerms: ['leverage', 'margin-call', 'lot']
  },
  {
    slug: 'meme-coin',
    name: 'Meme Coin',
    category: 'essential',
    shortDescription: 'A cryptocurrency created as a joke or based on internet memes, often with no utility but high speculation.',
    definition: 'A meme coin is a cryptocurrency inspired by internet memes, jokes, or social media trends rather than technological innovation. While some (like Dogecoin) have gained mainstream attention, most are highly speculative with extreme volatility and risk of total loss.',
    howItWorks: [
      'Created as jokes or community tokens',
      'Value driven by social media hype and community',
      'Often have unlimited or massive token supply',
      'Little to no underlying utility or technology'
    ],
    types: [
      { name: 'Dogecoin (DOGE)', description: 'The original meme coin, created in 2013' },
      { name: 'Shiba Inu (SHIB)', description: 'Self-proclaimed "Dogecoin killer"' },
      { name: 'Pepe (PEPE)', description: 'Based on Pepe the Frog meme' },
      { name: 'Solana Meme Coins', description: 'BONK, WIF, and others on Solana' }
    ],
    tradingTips: [
      'Extremely high risk - only trade what you can lose entirely',
      'Watch social media sentiment and influencer posts',
      'Liquidity can disappear instantly (rug pulls)',
      'Most meme coins go to zero - survivorship bias'
    ],
    relatedTerms: ['volatility', 'leverage', 'stop-loss']
  },
  {
    slug: 'margin-call',
    name: 'Margin Call',
    category: 'essential',
    shortDescription: 'A broker\'s demand for additional funds when account equity falls below required margin levels.',
    definition: 'A margin call occurs when your account equity falls below the required margin level. The broker demands you deposit more funds or close positions. If ignored, the broker may automatically close (stop out) your positions to protect against further losses.',
    howItWorks: [
      'Margin level drops below threshold (e.g., 100%)',
      'Broker issues margin call warning',
      'Trader must add funds or close positions',
      'Stop out level (e.g., 50%) triggers automatic closures'
    ],
    tradingTips: [
      'Set alerts before margin call levels',
      'Use stop losses to prevent margin calls',
      'Keep sufficient free margin as buffer'
    ],
    relatedTerms: ['margin', 'leverage', 'stop-loss']
  },
  {
    slug: 'loonie',
    name: 'Loonie',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the Canadian Dollar (CAD) or USD/CAD currency pair.',
    definition: 'Loonie is trader slang for the Canadian Dollar (CAD) and the USD/CAD pair. The nickname comes from the common loon bird depicted on Canada\'s one-dollar coin. Canada\'s economy is heavily tied to oil exports.',
    howItWorks: [
      '"Buying the Loonie" = going long CAD (short USD/CAD)',
      '"Selling the Loonie" = going short CAD (long USD/CAD)',
      'Note: USD/CAD quote - higher = weaker CAD',
      'Strongly correlated with crude oil prices'
    ],
    tradingTips: [
      'Watch WTI crude oil for direction',
      'Most active during North American session',
      'Bank of Canada rate decisions cause volatility'
    ],
    relatedTerms: ['aussie', 'g10', 'currency-pair', 'forex']
  },
  {
    slug: 'lot',
    name: 'Lot',
    category: 'essential',
    shortDescription: 'A standardized trading unit. In forex, a standard lot is 100,000 units of the base currency.',
    definition: 'A lot is a standardized unit of measurement for a trading position. In forex, a standard lot equals 100,000 units of the base currency. Lots help standardize trading and calculate position sizes consistently.',
    types: [
      { name: 'Standard Lot', description: '100,000 units - 1 pip ≈ $10' },
      { name: 'Mini Lot', description: '10,000 units - 1 pip ≈ $1' },
      { name: 'Micro Lot', description: '1,000 units - 1 pip ≈ $0.10' },
      { name: 'Nano Lot', description: '100 units - 1 pip ≈ $0.01' }
    ],
    tradingTips: [
      'Start with micro lots when learning',
      'Calculate lot size based on risk percentage',
      'Different instruments may have different lot sizes'
    ],
    relatedTerms: ['pip', 'leverage', 'margin']
  },
  {
    slug: 'stop-loss',
    name: 'Stop Loss',
    category: 'order-type',
    shortDescription: 'An order to automatically close a position at a specified price to limit potential losses.',
    definition: 'A stop loss is an order placed to automatically close a position when price reaches a specified level, limiting potential losses. It\'s a crucial risk management tool that protects traders from excessive losses.',
    howItWorks: [
      'Set below entry for long positions',
      'Set above entry for short positions',
      'Triggered when price touches the level',
      'Market order executed at next available price'
    ],
    types: [
      { name: 'Fixed Stop Loss', description: 'Set at a specific price level' },
      { name: 'Trailing Stop', description: 'Moves with price to lock in profits' },
      { name: 'Guaranteed Stop', description: 'Executes exactly at set price (may have fee)' }
    ],
    tradingTips: [
      'Never trade without a stop loss',
      'Place beyond key support/resistance levels',
      'Slippage can occur in volatile markets'
    ],
    relatedTerms: ['take-profit', 'margin-call', 'support', 'resistance']
  },
  {
    slug: 'take-profit',
    name: 'Take Profit',
    category: 'order-type',
    shortDescription: 'An order to automatically close a position at a specified price to lock in profits.',
    definition: 'A take profit (TP) order automatically closes a position when price reaches a predetermined profit target. It helps traders lock in gains without needing to monitor positions constantly.',
    howItWorks: [
      'Set above entry for long positions',
      'Set below entry for short positions',
      'Triggered when price reaches target',
      'Often used with stop loss for risk:reward ratios'
    ],
    tradingTips: [
      'Set at key resistance (longs) or support (shorts)',
      'Consider multiple take profit levels',
      'Aim for positive risk:reward ratios (e.g., 1:2, 1:3)'
    ],
    relatedTerms: ['stop-loss', 'resistance', 'support']
  },
  // === FOREX PAIR NICKNAMES ===
  // === FINANCIAL REGULATORS ===
  {
    slug: 'asic',
    name: 'ASIC',
    category: 'essential',
    shortDescription: 'Australian Securities and Investments Commission - Australia\'s top-tier financial regulator.',
    definition: 'ASIC (Australian Securities and Investments Commission) is Australia\'s corporate, markets, and financial services regulator. It\'s considered a Tier-1 regulator with strict requirements for brokers including leverage caps (30:1 forex) and negative balance protection.',
    howItWorks: [
      'Regulates financial services companies in Australia',
      'Requires brokers to hold client funds in segregated accounts',
      'Leverage capped at 30:1 for forex retail clients',
      'Mandatory negative balance protection'
    ],
    tradingTips: [
      'ASIC-regulated brokers offer strong consumer protection',
      'Check the ASIC register to verify broker licenses',
      'Complaints can be made to AFCA (Australian Financial Complaints Authority)'
    ],
    relatedTerms: ['fca', 'cysec', 'leverage', 'forex']
  },
  {
    slug: 'afm',
    name: 'AFM',
    category: 'essential',
    shortDescription: 'Authority for the Financial Markets - The Netherlands\' financial regulatory authority.',
    definition: 'AFM (Autoriteit Financiële Markten) is the Dutch financial markets regulator responsible for supervising the conduct of financial institutions. Operating under EU MiFID II regulations, it ensures fair and transparent financial markets in the Netherlands.',
    howItWorks: [
      'Supervises conduct of financial institutions in Netherlands',
      'Operates under EU MiFID II framework',
      'Works alongside DNB (Dutch Central Bank) for prudential supervision',
      'Enforces ESMA restrictions on retail CFD/forex trading'
    ],
    tradingTips: [
      'Dutch brokers follow strict EU regulations',
      'Leverage caps apply (30:1 forex)',
      'Check AFM register for authorized firms'
    ],
    relatedTerms: ['fca', 'bafin', 'cysec', 'esma']
  },
  {
    slug: 'amf',
    name: 'AMF (France)',
    category: 'essential',
    shortDescription: 'Autorité des Marchés Financiers - France\'s financial markets regulator.',
    definition: 'AMF (Autorité des Marchés Financiers) is France\'s stock market regulator responsible for protecting investors and ensuring orderly financial markets. It enforces EU regulations including MiFID II and ESMA restrictions on retail trading.',
    howItWorks: [
      'Regulates financial markets and investment services in France',
      'Maintains blacklist of unauthorized forex/CFD providers',
      'Enforces EU-wide leverage restrictions',
      'Investor compensation scheme up to €70,000'
    ],
    tradingTips: [
      'Check AMF blacklist before choosing a broker',
      'French investors protected under EU regulations',
      'AMF actively warns about forex/CFD risks'
    ],
    relatedTerms: ['fca', 'bafin', 'esma', 'cysec']
  },
  {
    slug: 'aussie',
    name: 'Aussie',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the Australian Dollar (AUD) or AUD/USD currency pair.',
    definition: 'Aussie is trader slang for the Australian Dollar (AUD) and commonly refers to the AUD/USD pair. Australia\'s economy is heavily tied to commodities, making the Aussie sensitive to gold, iron ore, and coal prices.',
    howItWorks: [
      '"Buying the Aussie" = going long AUD/USD',
      '"Selling the Aussie" = going short AUD/USD',
      'Correlates with commodity prices (gold, iron ore)',
      'Sensitive to RBA (Reserve Bank of Australia) decisions'
    ],
    tradingTips: [
      'Most active during Asian and early London sessions',
      'Watch Chinese economic data (Australia\'s main export partner)',
      'Risk-on currency - rises when markets are optimistic'
    ],
    relatedTerms: ['kiwi', 'g10', 'currency-pair', 'forex']
  },
  {
    slug: 'ask',
    name: 'Ask (Offer)',
    category: 'essential',
    shortDescription: 'The price at which a seller is willing to sell a security. Also known as the offer price.',
    definition: 'The ask price (or offer price) is the lowest price at which a seller is willing to sell. When you want to buy, you pay the ask price. The ask is always higher than the bid, with the difference being the spread.',
    howItWorks: [
      'Quote: 1.1000 (bid) / 1.1002 (ask)',
      'Buy orders execute at the ask',
      'Ask = right-hand side of quote',
      'Also called "offer" in some markets'
    ],
    tradingTips: [
      'Watch for ask price when entering long positions',
      'Slippage occurs when ask moves before execution',
      'During volatility, ask can spike significantly'
    ],
    relatedTerms: ['bid', 'spread', 'right-hand-side']
  },
  {
    slug: 'bafin',
    name: 'BaFin',
    category: 'essential',
    shortDescription: 'Federal Financial Supervisory Authority - Germany\'s top-tier financial regulator.',
    definition: 'BaFin (Bundesanstalt für Finanzdienstleistungsaufsicht) is Germany\'s federal financial regulatory authority. As a Tier-1 regulator, it supervises banks, insurance companies, and securities trading with strict consumer protection standards under EU regulations.',
    howItWorks: [
      'Regulates all financial services in Germany',
      'Operates under EU MiFID II framework',
      'Enforces ESMA leverage restrictions (30:1 forex)',
      'German investor compensation scheme up to €20,000'
    ],
    tradingTips: [
      'BaFin-regulated brokers are highly trusted',
      'Check BaFin database to verify authorization',
      'Strict rules on marketing and risk warnings'
    ],
    relatedTerms: ['fca', 'cysec', 'asic', 'esma']
  },
  {
    slug: 'bid',
    name: 'Bid',
    category: 'essential',
    shortDescription: 'The price at which a buyer is willing to purchase a security.',
    definition: 'The bid price is the highest price a buyer is willing to pay for a security. When you want to sell, you receive the bid price. The bid is always lower than the ask, with the difference being the spread.',
    howItWorks: [
      'Quote: 1.1000 (bid) / 1.1002 (ask)',
      'Sell orders execute at the bid',
      'Bid = left-hand side of quote',
      'Market makers buy at bid, sell at ask'
    ],
    tradingTips: [
      'Watch bid when closing long positions',
      'Bid can drop sharply in panic selling',
      'Wider spreads mean lower bids relative to ask'
    ],
    relatedTerms: ['ask', 'spread', 'left-hand-side']
  },
  {
    slug: 'long-position',
    name: 'Long Position',
    category: 'essential',
    shortDescription: 'Buying an asset with the expectation that its price will rise.',
    definition: 'Going long means buying an asset expecting its price to increase. You profit when price rises and lose when it falls. In forex, going long EUR/USD means buying euros and selling dollars.',
    howItWorks: [
      'Buy at current price',
      'Hold while expecting price increase',
      'Sell later at higher price for profit',
      'Maximum loss = purchase price (can\'t go below zero)'
    ],
    tradingTips: [
      'Classic strategy: buy low, sell high',
      'In forex, you\'re simultaneously long one currency and short another',
      'Stop loss below entry to limit downside'
    ],
    relatedTerms: ['short-position', 'stop-loss', 'take-profit']
  },
  {
    slug: 'scb',
    name: 'SCB Bahamas',
    category: 'essential',
    shortDescription: 'Securities Commission of The Bahamas - Offshore regulator in the Caribbean.',
    definition: 'SCB (Securities Commission of The Bahamas) regulates securities and capital markets in The Bahamas. It\'s an offshore jurisdiction that licenses forex brokers with fewer restrictions than Tier-1 regulators, popular with brokers seeking Caribbean presence.',
    howItWorks: [
      'Regulates securities dealers in The Bahamas',
      'Securities Industry Act governs forex brokers',
      'No leverage restrictions like EU/UK',
      'Lighter regulatory requirements than FCA'
    ],
    tradingTips: [
      'Offshore regulation - verify broker reputation',
      'Higher leverage available',
      'Check SCB register for licensed entities'
    ],
    relatedTerms: ['cima', 'fsc-bvi', 'fca', 'vfsc']
  },
  {
    slug: 'sec',
    name: 'SEC',
    category: 'essential',
    shortDescription: 'Securities and Exchange Commission - US regulator for securities markets.',
    definition: 'SEC (Securities and Exchange Commission) is the US federal agency responsible for regulating securities markets, protecting investors, and maintaining fair markets. While CFTC handles forex, the SEC regulates stocks, ETFs, and increasingly cryptocurrency.',
    howItWorks: [
      'Regulates US securities markets',
      'Enforces securities laws and prosecutes fraud',
      'Oversees broker-dealers and investment advisers',
      'Increasingly active in crypto regulation'
    ],
    tradingTips: [
      'SEC doesn\'t directly regulate forex (that\'s CFTC)',
      'Check SEC EDGAR for company filings',
      'SEC enforcement actions can impact crypto markets'
    ],
    relatedTerms: ['cftc', 'nfa', 'fca', 'asic']
  },
  {
    slug: 'sebi',
    name: 'SEBI',
    category: 'essential',
    shortDescription: 'Securities and Exchange Board of India - India\'s securities market regulator.',
    definition: 'SEBI (Securities and Exchange Board of India) is India\'s securities markets regulator. Retail forex trading is heavily restricted in India - only INR pairs through authorized dealers. SEBI regulates stockbrokers, mutual funds, and listed companies.',
    howItWorks: [
      'Regulates Indian securities markets',
      'Forex trading restricted to INR pairs only',
      'Only authorized dealers can offer forex',
      'Offshore forex trading is technically illegal for Indian residents'
    ],
    tradingTips: [
      'Indian residents have limited legal forex options',
      'Only trade through SEBI-registered brokers',
      'Currency futures/options available on NSE/BSE'
    ],
    relatedTerms: ['fca', 'asic', 'jfsa', 'forex']
  },
  {
    slug: 'sfc',
    name: 'SFC',
    category: 'essential',
    shortDescription: 'Securities and Futures Commission - Hong Kong\'s top-tier financial regulator.',
    definition: 'SFC (Securities and Futures Commission) is Hong Kong\'s independent statutory body regulating securities and futures markets. It\'s a highly respected Tier-1 regulator with strict requirements, making Hong Kong a major Asian financial center.',
    howItWorks: [
      'Regulates securities and futures in Hong Kong',
      'Type 3 license required for leveraged forex',
      'Strict capital and conduct requirements',
      'Investor Compensation Fund up to HK$500,000'
    ],
    tradingTips: [
      'SFC regulation is highly trusted',
      'Check SFC public register for licensed firms',
      'Hong Kong maintains separate system from mainland China'
    ],
    relatedTerms: ['mas', 'jfsa', 'asic', 'fca']
  },
  {
    slug: 'svg-fsa',
    name: 'SVG FSA',
    category: 'essential',
    shortDescription: 'St. Vincent and the Grenadines Financial Services Authority - Minimal offshore regulation.',
    definition: 'SVG FSA (St. Vincent and the Grenadines Financial Services Authority) is often cited by forex brokers, but notably does NOT actually regulate forex trading. SVG has explicitly stated it doesn\'t license or supervise forex brokers, making "SVG regulated" essentially meaningless.',
    howItWorks: [
      'Does NOT regulate forex brokers',
      'Company registration only - no supervision',
      'No capital requirements or oversight',
      'Essentially unregulated jurisdiction for forex'
    ],
    tradingTips: [
      'SVG "regulation" offers zero protection',
      'Treat SVG-registered brokers as unregulated',
      'High risk - only for experienced traders if at all'
    ],
    relatedTerms: ['vfsc', 'ifsc', 'fca', 'fsa-seychelles']
  },
  {
    slug: 'short-position',
    name: 'Short Position',
    category: 'essential',
    shortDescription: 'Selling an asset with the expectation that its price will fall, allowing you to buy it back cheaper.',
    definition: 'Going short means selling an asset you don\'t own, expecting its price to decrease. You profit when price falls and lose when it rises. In forex, going short EUR/USD means selling euros and buying dollars.',
    howItWorks: [
      'Borrow and sell at current price',
      'Wait for price to fall',
      'Buy back at lower price',
      'Return borrowed asset, keep the difference'
    ],
    tradingTips: [
      'Potential loss is unlimited (price can rise indefinitely)',
      'Used to profit from declining markets',
      'Stop loss above entry to limit upside risk'
    ],
    relatedTerms: ['long-position', 'stop-loss', 'leverage']
  },
  {
    slug: 'currency-pair',
    name: 'Currency Pair',
    category: 'essential',
    shortDescription: 'Two currencies quoted against each other, showing how much of one currency is needed to buy the other.',
    definition: 'A currency pair consists of two currencies where the value of one is quoted against the other. The first currency is the base currency, and the second is the quote currency. EUR/USD = 1.1000 means 1 euro costs 1.10 US dollars.',
    howItWorks: [
      'EUR/USD: EUR is base, USD is quote',
      'Price shows quote currency per 1 base currency',
      'Going long = buying base, selling quote',
      'Going short = selling base, buying quote'
    ],
    types: [
      { name: 'Major Pairs', description: 'Include USD (EUR/USD, GBP/USD, USD/JPY)' },
      { name: 'Minor Pairs', description: 'No USD (EUR/GBP, AUD/NZD)' },
      { name: 'Exotic Pairs', description: 'Include emerging market currency' }
    ],
    tradingTips: [
      'Major pairs have tightest spreads',
      'Exotic pairs can have significant spreads',
      'Understand which currency you\'re buying/selling'
    ],
    relatedTerms: ['forex', 'g10', 'spread']
  },
  {
    slug: 'contract-for-difference',
    name: 'Contract for Difference (CFD)',
    category: 'essential',
    shortDescription: 'A derivative product that allows you to speculate on price movements without owning the underlying asset.',
    definition: 'A CFD is a derivative contract between you and a broker to exchange the difference in an asset\'s price from when you open to when you close the position. You don\'t own the underlying asset but can profit from price movements in either direction.',
    howItWorks: [
      'No ownership of underlying asset',
      'Profit/loss = price difference × position size',
      'Can go long (buy) or short (sell)',
      'Leveraged product - amplifies gains and losses'
    ],
    types: [
      { name: 'Share CFDs', description: 'Based on individual stocks' },
      { name: 'Index CFDs', description: 'Based on stock indices (S&P 500, FTSE 100)' },
      { name: 'Commodity CFDs', description: 'Gold, oil, natural gas, etc.' },
      { name: 'Forex CFDs', description: 'Currency pair speculation' }
    ],
    tradingTips: [
      'CFDs have leverage - manage risk carefully',
      'You may pay overnight financing charges',
      'Understand margin requirements for each instrument'
    ],
    relatedTerms: ['leverage', 'margin', 'spread']
  },
  {
    slug: 'fca',
    name: 'FCA',
    category: 'essential',
    shortDescription: 'Financial Conduct Authority - UK\'s top-tier financial regulator, globally respected.',
    definition: 'FCA (Financial Conduct Authority) is the UK\'s financial services regulator, widely considered the gold standard globally. FCA-regulated brokers must meet strict capital requirements, segregate client funds, and provide negative balance protection.',
    howItWorks: [
      'Regulates all financial services firms in the UK',
      'FSCS protection up to £85,000 per person',
      'Leverage capped at 30:1 for retail forex',
      'Strict rules on marketing and client money'
    ],
    tradingTips: [
      'FCA regulation is considered the best protection',
      'Verify brokers on FCA Register before depositing',
      'FSCS compensation if broker fails'
    ],
    relatedTerms: ['asic', 'cysec', 'esma', 'leverage'],
    popular: true
  },
  {
    slug: 'finma',
    name: 'FINMA',
    category: 'essential',
    shortDescription: 'Swiss Financial Market Supervisory Authority - Switzerland\'s top-tier financial regulator.',
    definition: 'FINMA (Swiss Financial Market Supervisory Authority) is Switzerland\'s independent financial regulator. Known for strict banking secrecy laws and high standards, FINMA-regulated brokers are among the most trusted, though Swiss regulation is separate from the EU.',
    howItWorks: [
      'Regulates banks, insurers, and securities dealers in Switzerland',
      'Not part of EU - different rules from ESMA',
      'High capital requirements for brokers',
      'Depositor protection scheme for bank accounts'
    ],
    tradingTips: [
      'FINMA brokers often have higher minimum deposits',
      'Swiss franc accounts popular for stability',
      'Check FINMA register for authorized firms'
    ],
    relatedTerms: ['fca', 'bafin', 'asic', 'swissy']
  },
  {
    slug: 'fma',
    name: 'FMA (New Zealand)',
    category: 'essential',
    shortDescription: 'Financial Markets Authority - New Zealand\'s financial services regulator.',
    definition: 'FMA (Financial Markets Authority) is New Zealand\'s financial markets regulator. Previously popular with offshore brokers due to lighter regulation, New Zealand has since tightened rules to align more closely with Australian (ASIC) standards.',
    howItWorks: [
      'Regulates financial services in New Zealand',
      'Derivatives issuer license required for forex brokers',
      'Rules tightened significantly since 2021',
      'Works closely with ASIC on cross-border issues'
    ],
    tradingTips: [
      'NZ regulation has improved but verify broker carefully',
      'Some older NZ licenses were obtained under lax rules',
      'Check FMA register for current license status'
    ],
    relatedTerms: ['asic', 'fca', 'kiwi', 'forex']
  },
  {
    slug: 'fsa-seychelles',
    name: 'FSA Seychelles',
    category: 'essential',
    shortDescription: 'Financial Services Authority of Seychelles - Offshore regulator with minimal oversight.',
    definition: 'FSA Seychelles (Financial Services Authority of Seychelles) is an offshore regulator that licenses many forex brokers seeking to offer high leverage and fewer restrictions. While legitimate, it offers less protection than Tier-1 regulators.',
    howItWorks: [
      'Offshore jurisdiction with lighter regulation',
      'No leverage restrictions - brokers offer up to 1000:1',
      'Lower capital requirements than FCA/ASIC',
      'No investor compensation scheme'
    ],
    tradingTips: [
      'Higher leverage but much higher risk',
      'No guaranteed protection if broker fails',
      'Choose FSA Seychelles brokers with proven track record only'
    ],
    relatedTerms: ['vfsc', 'cima', 'fca', 'leverage']
  },
  {
    slug: 'fsca',
    name: 'FSCA',
    category: 'essential',
    shortDescription: 'Financial Sector Conduct Authority - South Africa\'s financial markets regulator.',
    definition: 'FSCA (Financial Sector Conduct Authority) is South Africa\'s financial services regulator, replacing the former FSB. It regulates OTC derivative providers including forex brokers and has increasingly aligned with international standards.',
    howItWorks: [
      'Regulates financial services in South Africa',
      'ODP (Over-the-Counter Derivative Provider) license for forex',
      'Requires segregated client funds',
      'No ESMA-style leverage restrictions'
    ],
    tradingTips: [
      'FSCA regulation has strengthened in recent years',
      'Popular with brokers targeting African markets',
      'Verify license on FSCA website'
    ],
    relatedTerms: ['fca', 'cysec', 'asic', 'forex']
  },
  {
    slug: 'fsc-bvi',
    name: 'FSC BVI',
    category: 'essential',
    shortDescription: 'Financial Services Commission of the British Virgin Islands - Offshore regulator.',
    definition: 'FSC BVI (Financial Services Commission of the British Virgin Islands) is an offshore regulator that licenses investment businesses including forex brokers. It offers limited oversight compared to Tier-1 regulators but more than unregulated jurisdictions.',
    howItWorks: [
      'Offshore jurisdiction in the Caribbean',
      'Investment Business license for forex brokers',
      'No leverage restrictions',
      'Lower regulatory burden than FCA/ASIC'
    ],
    tradingTips: [
      'Offshore regulation - less protection than Tier-1',
      'Higher leverage available but more risk',
      'Research broker reputation thoroughly'
    ],
    relatedTerms: ['cima', 'vfsc', 'fsa-seychelles', 'fca']
  },
  {
    slug: 'fsc-mauritius',
    name: 'FSC Mauritius',
    category: 'essential',
    shortDescription: 'Financial Services Commission of Mauritius - Offshore regulator in the Indian Ocean.',
    definition: 'FSC Mauritius (Financial Services Commission of Mauritius) regulates financial services in Mauritius. It\'s an offshore jurisdiction popular with brokers targeting Asian and African markets, offering more flexibility than Tier-1 regulators.',
    howItWorks: [
      'Regulates financial services in Mauritius',
      'Investment Dealer license for forex brokers',
      'No leverage restrictions like EU',
      'Requires minimum capital and compliance procedures'
    ],
    tradingTips: [
      'Offshore regulation with moderate oversight',
      'Popular for brokers serving emerging markets',
      'Verify license and broker reputation carefully'
    ],
    relatedTerms: ['fsa-seychelles', 'cima', 'fsca', 'fca']
  },
  {
    slug: 'fiber',
    name: 'Fiber',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the EUR/USD currency pair, the most traded pair in the world.',
    definition: 'Fiber is a modern nickname for EUR/USD, the world\'s most traded currency pair. The name references fiber optic cables used for modern price transmission, contrasting with the older "Cable" (GBP/USD) nickname from telegraph days.',
    howItWorks: [
      '"Buying Fiber" = going long EUR/USD',
      '"Selling Fiber" = going short EUR/USD',
      'Most liquid currency pair - tightest spreads',
      'Accounts for ~24% of daily forex volume'
    ],
    tradingTips: [
      'Most active during London-New York overlap',
      'Sensitive to ECB and Fed policy decisions',
      'Lower volatility than Cable typically'
    ],
    relatedTerms: ['cable', 'g10', 'currency-pair', 'forex']
  },
  {
    slug: 'forex',
    name: 'Forex (Foreign Exchange)',
    category: 'essential',
    shortDescription: 'The global market for trading currencies. The world\'s largest financial market.',
    definition: 'Forex (FX) is the global decentralized market for trading currencies. It\'s the world\'s largest financial market with daily volume exceeding $7.5 trillion. Forex operates 24/5 across major financial centers worldwide.',
    howItWorks: [
      'Currencies traded in pairs (EUR/USD, GBP/JPY)',
      'Over-the-counter (OTC) market - no central exchange',
      'Open 24 hours, 5 days a week',
      'Sessions: Sydney, Tokyo, London, New York'
    ],
    tradingTips: [
      'Most liquid during London-New York overlap',
      'Major news releases cause volatility',
      'Start with major pairs for tighter spreads'
    ],
    relatedTerms: ['currency-pair', 'pip', 'g10']
  },
  {
    slug: 'technical-analysis',
    name: 'Technical Analysis',
    category: 'technical',
    shortDescription: 'Analyzing price charts and indicators to forecast future price movements based on historical patterns.',
    definition: 'Technical analysis is a method of forecasting price movements by studying historical charts, patterns, and indicators. It assumes all relevant information is reflected in price and that history tends to repeat itself.',
    howItWorks: [
      'Study price charts and patterns',
      'Use indicators (RSI, MACD, moving averages)',
      'Identify support and resistance levels',
      'Look for trend continuation or reversal signals'
    ],
    types: [
      { name: 'Chart Patterns', description: 'Head & shoulders, triangles, double tops' },
      { name: 'Indicators', description: 'RSI, MACD, Bollinger Bands, moving averages' },
      { name: 'Price Action', description: 'Candlestick patterns, support/resistance' }
    ],
    tradingTips: [
      'Combine multiple indicators for confirmation',
      'Works best in trending markets',
      'Consider fundamental factors alongside technicals'
    ],
    relatedTerms: ['support', 'resistance', 'stop-loss']
  },
  {
    slug: 'swissy',
    name: 'Swissy',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the Swiss Franc (CHF) or USD/CHF currency pair.',
    definition: 'Swissy is trader slang for the Swiss Franc (CHF) and commonly refers to USD/CHF. Switzerland\'s reputation for neutrality, stability, and banking secrecy makes the Franc a traditional safe-haven currency.',
    howItWorks: [
      '"Buying the Swissy" = going long CHF (short USD/CHF)',
      '"Selling the Swissy" = going short CHF (long USD/CHF)',
      'Note: USD/CHF quote - higher = weaker CHF',
      'Safe-haven currency - strengthens in market turmoil'
    ],
    tradingTips: [
      'Inversely correlated with risk appetite',
      'SNB (Swiss National Bank) occasionally intervenes',
      'Often moves opposite to EUR/USD'
    ],
    relatedTerms: ['cable', 'g10', 'currency-pair', 'forex']
  },
  {
    slug: 'support',
    name: 'Support',
    category: 'technical',
    shortDescription: 'A price level where buying pressure tends to overcome selling pressure, preventing further price declines.',
    definition: 'Support is a price level where demand is strong enough to prevent price from declining further. Buyers step in at support, creating a "floor" where price tends to bounce. Breaking support can signal further declines.',
    howItWorks: [
      'Price approaches support level',
      'Buyers enter, creating demand',
      'Price bounces or consolidates',
      'Break below = potential further decline'
    ],
    types: [
      { name: 'Horizontal Support', description: 'Previous lows, round numbers' },
      { name: 'Trend Line Support', description: 'Rising support in uptrends' },
      { name: 'Moving Average Support', description: 'Price bouncing off MAs' }
    ],
    tradingTips: [
      'Place stop loss below support when going long',
      'Broken support can become resistance',
      'Look for confluence of multiple support levels'
    ],
    relatedTerms: ['resistance', 'technical-analysis', 'stop-loss']
  },
  {
    slug: 'resistance',
    name: 'Resistance',
    category: 'technical',
    shortDescription: 'A price level where selling pressure tends to overcome buying pressure, preventing further price increases.',
    definition: 'Resistance is a price level where supply is strong enough to prevent price from rising further. Sellers enter at resistance, creating a "ceiling" where price tends to reverse. Breaking resistance can signal further gains.',
    howItWorks: [
      'Price approaches resistance level',
      'Sellers enter, creating supply',
      'Price reverses or consolidates',
      'Break above = potential further gains'
    ],
    types: [
      { name: 'Horizontal Resistance', description: 'Previous highs, round numbers' },
      { name: 'Trend Line Resistance', description: 'Falling resistance in downtrends' },
      { name: 'Moving Average Resistance', description: 'Price rejected at MAs' }
    ],
    tradingTips: [
      'Place take profit at or before resistance when long',
      'Broken resistance can become support',
      'Look for confluence of multiple resistance levels'
    ],
    relatedTerms: ['support', 'technical-analysis', 'take-profit']
  },
  {
    slug: 'cbi',
    name: 'CBI',
    category: 'essential',
    shortDescription: 'Central Bank of Ireland - Ireland\'s financial services regulator under EU framework.',
    definition: 'CBI (Central Bank of Ireland) is Ireland\'s financial regulator responsible for authorizing and supervising financial services firms. As an EU member, it operates under MiFID II and enforces ESMA restrictions, making it a respected Tier-1 regulator.',
    howItWorks: [
      'Regulates banks, insurers, and investment firms in Ireland',
      'EU passporting allows firms to operate across Europe',
      'Enforces ESMA leverage caps and negative balance protection',
      'Investor compensation scheme up to €20,000'
    ],
    tradingTips: [
      'Many international brokers are CBI-regulated for EU access',
      'Check CBI register for authorized firms',
      'Strong consumer protection under EU law'
    ],
    relatedTerms: ['fca', 'cysec', 'esma', 'mfsa']
  },
  {
    slug: 'cftc',
    name: 'CFTC',
    category: 'essential',
    shortDescription: 'Commodity Futures Trading Commission - US regulator for derivatives and forex.',
    definition: 'CFTC (Commodity Futures Trading Commission) is the US federal agency that regulates commodity futures, options, and retail forex markets. Along with the NFA, it provides some of the strictest broker regulations globally, including 50:1 leverage limits.',
    howItWorks: [
      'Regulates US futures and forex markets',
      'Maximum 50:1 leverage on major forex pairs',
      'No hedging allowed (FIFO rule applies)',
      'Works with NFA for broker registration'
    ],
    tradingTips: [
      'Very few forex brokers accept US clients due to strict rules',
      'US traders have strong protections but fewer broker choices',
      'Check NFA BASIC database to verify broker registration'
    ],
    relatedTerms: ['nfa', 'sec', 'fca', 'leverage']
  },
  {
    slug: 'cima',
    name: 'CIMA',
    category: 'essential',
    shortDescription: 'Cayman Islands Monetary Authority - Offshore regulator with moderate oversight.',
    definition: 'CIMA (Cayman Islands Monetary Authority) regulates financial services in the Cayman Islands. While more credible than some offshore jurisdictions, it offers less protection than Tier-1 regulators. Popular with brokers seeking a balance of regulation and flexibility.',
    howItWorks: [
      'Regulates banks, insurance, and securities in Cayman Islands',
      'No leverage restrictions like EU/UK',
      'Requires audited financial statements',
      'Less stringent than FCA/ASIC but more than SVG'
    ],
    tradingTips: [
      'Middle-tier regulation - verify broker reputation carefully',
      'Higher leverage available but more risk',
      'Check CIMA register for licensed entities'
    ],
    relatedTerms: ['fca', 'vfsc', 'fsa-seychelles', 'asic']
  },
  {
    slug: 'cnmv',
    name: 'CNMV',
    category: 'essential',
    shortDescription: 'Comisión Nacional del Mercado de Valores - Spain\'s securities market regulator.',
    definition: 'CNMV (Comisión Nacional del Mercado de Valores) is <a href="/spain">Spain</a>\'s securities markets supervisor. Operating under EU MiFID II, it regulates investment services firms and enforces ESMA restrictions on retail forex and CFD trading.',
    howItWorks: [
      'Regulates securities markets and investment firms in Spain',
      'Operates under EU MiFID II framework',
      'Enforces ESMA leverage caps (30:1 forex)',
      'Maintains warning list of unauthorized entities'
    ],
    tradingTips: [
      'Spanish traders protected under EU regulations',
      'Check CNMV register and warning list',
      'Investor compensation up to €100,000'
    ],
    relatedTerms: ['fca', 'amf', 'consob', 'esma']
  },
  {
    slug: 'consob',
    name: 'CONSOB',
    category: 'essential',
    shortDescription: 'Commissione Nazionale per le Società e la Borsa - Italy\'s securities regulator.',
    definition: 'CONSOB (Commissione Nazionale per le Società e la Borsa) is Italy\'s public authority responsible for regulating securities markets. It enforces EU regulations and maintains a blacklist of unauthorized investment firms.',
    howItWorks: [
      'Regulates Italian securities markets and investment services',
      'Operates under EU MiFID II framework',
      'Maintains blacklist of unauthorized brokers',
      'Enforces ESMA restrictions on retail trading'
    ],
    tradingTips: [
      'Check CONSOB blacklist before trading with any broker',
      'Italian traders have EU-level protection',
      'CONSOB actively pursues unauthorized firms'
    ],
    relatedTerms: ['fca', 'cnmv', 'amf', 'esma']
  },
  {
    slug: 'cysec',
    name: 'CySEC',
    category: 'essential',
    shortDescription: 'Cyprus Securities and Exchange Commission - Popular EU regulator for forex brokers.',
    definition: 'CySEC (Cyprus Securities and Exchange Commission) is the financial regulator of Cyprus. As an EU member, CySEC-licensed brokers can passport services across Europe. It\'s one of the most common regulators for retail forex brokers due to Cyprus\'s business-friendly environment.',
    howItWorks: [
      'EU member - MiFID II compliant',
      'Brokers can passport to all EU/EEA countries',
      'Investor Compensation Fund up to €20,000',
      'Leverage capped at 30:1 for retail forex'
    ],
    tradingTips: [
      'Very common for forex brokers - verify on CySEC register',
      'EU regulations apply including negative balance protection',
      'Some brokers have CySEC plus other licenses'
    ],
    relatedTerms: ['fca', 'asic', 'esma', 'mfsa']
  },
  {
    slug: 'cable',
    name: 'Cable',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the GBP/USD currency pair, one of the oldest and most traded pairs.',
    definition: 'Cable is the traditional nickname for the GBP/USD (British Pound/US Dollar) pair. The name dates back to the mid-1800s when the exchange rate was transmitted between London and New York via a transatlantic telegraph cable under the ocean.',
    howItWorks: [
      '"Buying Cable" = going long GBP/USD',
      '"Selling Cable" = going short GBP/USD',
      'One of the most liquid currency pairs',
      'Third most traded pair after EUR/USD and USD/JPY'
    ],
    tradingTips: [
      'Most volatile during London session',
      'Sensitive to Bank of England decisions and UK politics',
      'Often moves with EUR/USD but can diverge on UK-specific news'
    ],
    relatedTerms: ['fiber', 'g10', 'currency-pair', 'forex']
  },
  {
    slug: 'chunnel',
    name: 'Chunnel',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the EUR/GBP currency pair, named after the Channel Tunnel.',
    definition: 'Chunnel is trader slang for the EUR/GBP (Euro/British Pound) cross rate. The nickname references the Channel Tunnel connecting England and France, symbolizing the link between the two currencies.',
    howItWorks: [
      '"Buying the Chunnel" = going long EUR/GBP',
      '"Selling the Chunnel" = going short EUR/GBP',
      'Cross rate (no USD) - derived from EUR/USD and GBP/USD',
      'Reflects relative strength of Eurozone vs UK economy'
    ],
    tradingTips: [
      'Less volatile than major pairs',
      'Sensitive to ECB vs Bank of England policy divergence',
      'Brexit news has historically caused large moves'
    ],
    relatedTerms: ['cable', 'fiber', 'x-rate', 'forex']
  },
  {
    slug: 'cleared-funds',
    name: 'Cleared Funds',
    category: 'essential',
    shortDescription: 'Money that has been fully processed and is available for trading or withdrawal.',
    definition: 'Cleared funds are deposits that have been fully processed by the banking system and are available for immediate use. Until funds clear, they may show in your account but cannot be traded with or withdrawn.',
    howItWorks: [
      'Deposit initiated by trader',
      'Bank processes the transaction',
      'Clearing period varies by method (instant to 5 days)',
      'Funds become available for trading'
    ],
    tradingTips: [
      'Credit cards often clear instantly',
      'Bank transfers may take 1-5 business days',
      'Plan deposits ahead of trading needs'
    ],
    relatedTerms: ['margin', 'forex']
  },
  {
    slug: 'ifsc',
    name: 'IFSC Belize',
    category: 'essential',
    shortDescription: 'International Financial Services Commission of Belize - Offshore regulator with light oversight.',
    definition: 'IFSC (International Financial Services Commission of Belize) is an offshore regulator that licenses forex brokers and other financial services. It\'s known for minimal regulatory requirements, making it popular with brokers seeking flexibility but offering limited trader protection.',
    howItWorks: [
      'Offshore jurisdiction in Central America',
      'Minimal capital requirements',
      'No leverage restrictions',
      'Light regulatory oversight'
    ],
    tradingTips: [
      'Very limited protection if broker fails',
      'High leverage available but high risk',
      'Only use IFSC brokers with excellent reputation'
    ],
    relatedTerms: ['vfsc', 'fsa-seychelles', 'svg-fsa', 'fca']
  },
  {
    slug: 'indicative-quote',
    name: 'Indicative Quote',
    category: 'forex-slang',
    shortDescription: 'A non-binding price quote that shows an approximate market rate but cannot be traded on directly.',
    definition: 'An indicative quote shows an approximate market price but isn\'t guaranteed for execution. It gives traders an idea of current pricing without committing the market maker to trade at that level. Executable quotes are firm and tradable.',
    howItWorks: [
      'Shows approximate current market price',
      'Not binding - cannot execute at this price',
      'Common during low liquidity or market closures',
      'Firm/executable quotes are needed to trade'
    ],
    tradingTips: [
      'Check if quotes are indicative or executable',
      'Spreads may differ between indicative and firm quotes',
      'Weekend quotes are typically indicative'
    ],
    relatedTerms: ['spread', 'forex', 'bid', 'ask']
  },

  // === ADDITIONAL TERMS FOR COMPLETE A-Z COVERAGE ===

  // D
  {
    slug: 'dfsa',
    name: 'DFSA',
    category: 'essential',
    shortDescription: 'Dubai Financial Services Authority - Regulator for the Dubai International Financial Centre.',
    definition: 'DFSA (Dubai Financial Services Authority) is the independent regulator of financial services in the Dubai International Financial Centre (DIFC). It\'s considered a reputable regulator with standards comparable to major financial centers.',
    howItWorks: [
      'Regulates firms within DIFC free zone only',
      'Risk-based regulatory approach',
      'Requires minimum capital and segregated client funds',
      'Not as strict as FCA but more credible than offshore'
    ],
    tradingTips: [
      'DFSA regulation applies only to DIFC-based operations',
      'Check if broker\'s DFSA license covers retail forex',
      'Different from UAE Central Bank (which regulates rest of UAE)'
    ],
    relatedTerms: ['fca', 'cysec', 'asic', 'mas']
  },
  {
    slug: 'day-trading',
    name: 'Day Trading',
    category: 'essential',
    shortDescription: 'Buying and selling financial instruments within the same trading day, closing all positions before market close.',
    definition: 'Day trading involves opening and closing positions within a single trading day, never holding overnight. Day traders aim to profit from short-term price movements and avoid overnight risk. It requires discipline, quick decision-making, and typically uses technical analysis.',
    howItWorks: [
      'Open positions during market hours',
      'Close all positions before market close',
      'Profit from intraday price movements',
      'No overnight holding risk or swap fees'
    ],
    types: [
      { name: 'Scalping', description: 'Very short trades, seconds to minutes' },
      { name: 'Momentum Trading', description: 'Trading strong intraday trends' },
      { name: 'Range Trading', description: 'Trading between support and resistance' }
    ],
    tradingTips: [
      'Requires significant time commitment',
      'Start with a demo account to practice',
      'Use strict risk management rules'
    ],
    relatedTerms: ['technical-analysis', 'stop-loss', 'volatility']
  },
  {
    slug: 'drawdown',
    name: 'Drawdown',
    category: 'essential',
    shortDescription: 'The decline from a peak to a trough in account value, measuring the loss from highest to lowest point.',
    definition: 'Drawdown measures the decline in account value from its highest point (peak) to its lowest point (trough) before recovering. It\'s expressed as a percentage and is a key metric for evaluating trading strategy risk and trader performance.',
    howItWorks: [
      'Peak equity: $10,000',
      'Trough equity: $8,000',
      'Drawdown: ($10,000 - $8,000) / $10,000 = 20%',
      'Maximum drawdown = largest peak-to-trough decline'
    ],
    tradingTips: [
      'Keep maximum drawdown under 20-30%',
      'Drawdown affects psychology - plan for it',
      'Recovery requires larger gains (20% loss needs 25% gain to recover)'
    ],
    relatedTerms: ['margin', 'stop-loss', 'leverage']
  },

  // E
  {
    slug: 'esma',
    name: 'ESMA',
    category: 'essential',
    shortDescription: 'European Securities and Markets Authority - EU-wide regulator setting rules for all member states.',
    definition: 'ESMA (European Securities and Markets Authority) is the EU\'s financial markets regulator that sets rules implemented by national regulators (FCA, CySEC, BaFin, etc.). In 2018, ESMA introduced strict leverage limits and banned binary options for retail traders across the EU.',
    howItWorks: [
      'Sets EU-wide rules implemented by national regulators',
      'Leverage caps: 30:1 forex, 20:1 indices, 2:1 crypto',
      'Mandatory negative balance protection',
      'Risk warnings required on all marketing'
    ],
    tradingTips: [
      'ESMA rules apply to all EU/EEA regulated brokers',
      'Professional clients can access higher leverage',
      'Rules designed to protect retail traders from losses'
    ],
    relatedTerms: ['fca', 'cysec', 'bafin', 'leverage']
  },
  {
    slug: 'equity',
    name: 'Equity',
    category: 'essential',
    shortDescription: 'The total value of a trading account including the balance plus or minus any unrealized profits or losses.',
    definition: 'Equity represents the current total value of your trading account. It equals your account balance plus or minus any floating (unrealized) profits or losses from open positions. Equity fluctuates in real-time as markets move.',
    howItWorks: [
      'Equity = Balance + Floating P/L',
      'Balance: $10,000, Open profit: $500 → Equity: $10,500',
      'Balance: $10,000, Open loss: -$300 → Equity: $9,700',
      'Used to calculate margin level'
    ],
    tradingTips: [
      'Monitor equity, not just balance',
      'Margin level = (Equity / Used Margin) × 100%',
      'Low equity triggers margin calls'
    ],
    relatedTerms: ['margin', 'margin-call', 'drawdown']
  },

  // H
  {
    slug: 'hedge',
    name: 'Hedge',
    category: 'essential',
    shortDescription: 'A position taken to offset potential losses from another position, reducing overall risk exposure.',
    definition: 'Hedging involves opening a position to offset the risk of another position. It\'s an insurance strategy that limits potential losses (but also potential gains). Common in forex to protect against adverse currency movements.',
    howItWorks: [
      'Long EUR/USD + Short EUR/USD = Hedged',
      'Losses on one position offset by gains on the other',
      'Reduces net exposure to market movements',
      'Used by businesses to lock in exchange rates'
    ],
    types: [
      { name: 'Direct Hedge', description: 'Opposite position in same instrument' },
      { name: 'Cross Hedge', description: 'Position in correlated instrument' },
      { name: 'Options Hedge', description: 'Using options to limit downside' }
    ],
    tradingTips: [
      'Some brokers don\'t allow hedging (US regulations)',
      'Hedging costs money (spreads, swaps)',
      'Consider correlation between positions'
    ],
    relatedTerms: ['long-position', 'short-position', 'forex']
  },

  // J
  {
    slug: 'jfsa',
    name: 'JFSA',
    category: 'essential',
    shortDescription: 'Japan Financial Services Agency - Japan\'s strict financial regulator with very low leverage limits.',
    definition: 'JFSA (Japan Financial Services Agency) is Japan\'s integrated financial regulator. It imposes some of the strictest rules globally, including maximum 25:1 leverage on forex. JFSA-regulated brokers serve Japanese residents exclusively.',
    howItWorks: [
      'Regulates all financial services in Japan',
      'Maximum leverage 25:1 on forex (among lowest globally)',
      'Strict advertising and disclosure rules',
      'Only for Japanese residents'
    ],
    tradingTips: [
      'JFSA brokers only serve Japanese clients',
      'Very strict but excellent protection',
      'Most international traders can\'t access JFSA brokers'
    ],
    relatedTerms: ['fca', 'asic', 'gopher', 'leverage']
  },
  {
    slug: 'japanese-candlestick',
    name: 'Japanese Candlestick',
    category: 'technical',
    shortDescription: 'A charting method showing open, high, low, and close prices that reveals market sentiment and potential reversals.',
    definition: 'Japanese candlesticks are a charting technique that displays four price points (open, high, low, close) in a visual format. The "body" shows the open-close range, while "wicks" show the high-low range. Patterns formed by candlesticks can signal potential price movements.',
    howItWorks: [
      'Green/white body: Close > Open (bullish)',
      'Red/black body: Close < Open (bearish)',
      'Upper wick: High price reached',
      'Lower wick: Low price reached'
    ],
    types: [
      { name: 'Doji', description: 'Open and close nearly equal - indecision' },
      { name: 'Hammer', description: 'Small body, long lower wick - potential reversal' },
      { name: 'Engulfing', description: 'Large candle engulfs previous - strong signal' }
    ],
    tradingTips: [
      'Patterns are more reliable on higher timeframes',
      'Confirm with other indicators',
      'Consider the trend context'
    ],
    relatedTerms: ['technical-analysis', 'support', 'resistance']
  },

  // K
  {
    slug: 'kiwi',
    name: 'Kiwi',
    category: 'forex-slang',
    shortDescription: 'Forex slang for the New Zealand Dollar (NZD) or NZD/USD currency pair.',
    definition: 'Kiwi is trader slang for the New Zealand Dollar (NZD) and the NZD/USD pair. The nickname comes from New Zealand\'s national bird, which appears on the one dollar coin. NZD is one of the G10 currencies, known for higher yields and commodity correlation.',
    howItWorks: [
      '"Buying the Kiwi" = going long NZD/USD',
      '"Selling the Kiwi" = going short NZD/USD',
      'NZD pairs correlate with dairy prices',
      'Sensitive to RBNZ (Reserve Bank of New Zealand) policy'
    ],
    tradingTips: [
      'Most liquid during Asian and early London sessions',
      'Correlates with AUD (Aussie dollar)',
      'Watch dairy auction results for NZD moves'
    ],
    relatedTerms: ['aussie', 'g10', 'currency-pair', 'forex']
  },

  // N
  {
    slug: 'nfa',
    name: 'NFA',
    category: 'essential',
    shortDescription: 'National Futures Association - US self-regulatory organization for futures and forex.',
    definition: 'NFA (National Futures Association) is the self-regulatory organization for the US derivatives industry, working alongside the CFTC. All US forex brokers must be NFA members. The NFA enforces strict rules including the FIFO rule and 50:1 maximum leverage.',
    howItWorks: [
      'Self-regulatory body under CFTC oversight',
      'All US forex brokers must be NFA members',
      'FIFO rule - no hedging allowed',
      'Maximum 50:1 leverage on major pairs'
    ],
    tradingTips: [
      'Use NFA BASIC database to verify broker registration',
      'Very few brokers accept US clients due to strict rules',
      'Strong protection but limited broker choices for US traders'
    ],
    relatedTerms: ['cftc', 'sec', 'fca', 'leverage']
  },
  {
    slug: 'net-position',
    name: 'Net Position',
    category: 'essential',
    shortDescription: 'The difference between long and short positions in a particular instrument or market.',
    definition: 'Net position is your overall exposure in a market after accounting for both long and short positions. If you\'re long 3 lots and short 1 lot, your net position is long 2 lots. It represents your actual directional exposure.',
    howItWorks: [
      'Long 5 lots EUR/USD, Short 2 lots EUR/USD = Net long 3 lots',
      'Net position determines profit/loss from price moves',
      'Zero net position = fully hedged',
      'Reported in COT (Commitment of Traders) reports'
    ],
    tradingTips: [
      'Always know your net exposure',
      'Multiple positions can hide true risk',
      'Brokers calculate margin on net position'
    ],
    relatedTerms: ['long-position', 'short-position', 'hedge']
  },

  // Q
  {
    slug: 'quote-currency',
    name: 'Quote Currency',
    category: 'essential',
    shortDescription: 'The second currency in a currency pair, showing how much of it is needed to buy one unit of the base currency.',
    definition: 'The quote currency (or counter currency) is the second currency listed in a forex pair. In EUR/USD, USD is the quote currency. The exchange rate tells you how many units of the quote currency are needed to buy one unit of the base currency.',
    howItWorks: [
      'EUR/USD = 1.1000 means 1 EUR costs 1.10 USD',
      'USD is the quote currency',
      'Profit/loss calculated in quote currency',
      'Then converted to account currency'
    ],
    tradingTips: [
      'Pip value depends on quote currency',
      'USD as quote = simpler pip calculations',
      'Cross rates have non-USD quote currencies'
    ],
    relatedTerms: ['currency-pair', 'pip', 'forex']
  },

  // U
  {
    slug: 'uptrend',
    name: 'Uptrend',
    category: 'technical',
    shortDescription: 'A market condition characterized by rising prices, with higher highs and higher lows over time.',
    definition: 'An uptrend is a sustained price movement where each successive peak (high) and trough (low) is higher than the previous one. It indicates bullish sentiment and suggests buyers are in control. Traders often look to buy during uptrends.',
    howItWorks: [
      'Price makes higher highs',
      'Price makes higher lows',
      'Draw trend line connecting lows',
      'Trend continues until line is broken'
    ],
    types: [
      { name: 'Primary Uptrend', description: 'Long-term trend (months to years)' },
      { name: 'Secondary Uptrend', description: 'Medium-term (weeks to months)' },
      { name: 'Minor Uptrend', description: 'Short-term (days to weeks)' }
    ],
    tradingTips: [
      '"The trend is your friend" - trade with the trend',
      'Buy pullbacks to trend line support',
      'Broken trend line may signal reversal'
    ],
    relatedTerms: ['support', 'resistance', 'technical-analysis']
  },

  // V
  {
    slug: 'vfsc',
    name: 'VFSC',
    category: 'essential',
    shortDescription: 'Vanuatu Financial Services Commission - Offshore regulator with minimal oversight.',
    definition: 'VFSC (Vanuatu Financial Services Commission) is an offshore regulator in the South Pacific that licenses forex brokers. Known for minimal capital requirements and light oversight, it\'s popular with brokers seeking high leverage offerings but provides limited trader protection.',
    howItWorks: [
      'Offshore jurisdiction in South Pacific',
      'Very low capital requirements (~$50,000)',
      'No leverage restrictions',
      'Minimal ongoing supervision'
    ],
    tradingTips: [
      'Very limited protection - treat as high risk',
      'High leverage available but dangerous',
      'Only consider with brokers that have other Tier-1 licenses'
    ],
    relatedTerms: ['fsa-seychelles', 'ifsc', 'svg-fsa', 'fca']
  },
  {
    slug: 'volatility',
    name: 'Volatility',
    category: 'essential',
    shortDescription: 'A measure of how much and how quickly prices change, indicating market uncertainty and risk.',
    definition: 'Volatility measures the degree of price variation over time. High volatility means large, rapid price swings; low volatility means stable, slow-moving prices. It\'s a key factor in risk assessment, option pricing, and position sizing.',
    howItWorks: [
      'Measured by standard deviation of returns',
      'VIX index measures S&P 500 volatility',
      'ATR (Average True Range) measures daily volatility',
      'Higher volatility = higher risk and opportunity'
    ],
    types: [
      { name: 'Historical Volatility', description: 'Based on past price movements' },
      { name: 'Implied Volatility', description: 'Expected future volatility from options' },
      { name: 'Realized Volatility', description: 'Actual volatility that occurred' }
    ],
    tradingTips: [
      'Reduce position size in high volatility',
      'Spreads widen during volatile periods',
      'News events spike volatility'
    ],
    relatedTerms: ['spread', 'stop-loss', 'leverage']
  },

  // W
  {
    slug: 'whipsaw',
    name: 'Whipsaw',
    category: 'technical',
    shortDescription: 'A rapid price movement in one direction followed by a sharp reversal, often triggering stop losses on both sides.',
    definition: 'A whipsaw is a sharp price movement that quickly reverses, catching traders off guard. It often triggers stop losses for both long and short positions. Whipsaws are common during low liquidity, news events, or in ranging markets.',
    howItWorks: [
      'Price spikes up, triggering short stop losses',
      'Price immediately reverses down',
      'Long traders now stopped out',
      'Price ends near where it started'
    ],
    tradingTips: [
      'Use wider stops in choppy markets',
      'Avoid trading during major news releases',
      'Wait for confirmation before entering'
    ],
    relatedTerms: ['stop-loss', 'volatility', 'support']
  },

  // X
  {
    slug: 'x-rate',
    name: 'X-Rate (Cross Rate)',
    category: 'forex-slang',
    shortDescription: 'A currency pair that doesn\'t include the US dollar, calculated from two USD pairs.',
    definition: 'An X-rate (cross rate or simply "cross") is an exchange rate between two currencies that doesn\'t involve the US dollar. Examples include EUR/GBP, AUD/JPY, and GBP/CHF. Cross rates are derived from each currency\'s rate against USD.',
    howItWorks: [
      'EUR/GBP derived from EUR/USD and GBP/USD',
      'EUR/JPY = EUR/USD × USD/JPY',
      'No direct USD involvement',
      'Spreads often wider than major pairs'
    ],
    tradingTips: [
      'Cross rates can be more volatile',
      'Liquidity varies by cross',
      'EUR crosses most liquid among crosses'
    ],
    relatedTerms: ['currency-pair', 'forex', 'spread']
  },

  // Y
  {
    slug: 'yield',
    name: 'Yield',
    category: 'essential',
    shortDescription: 'The income return on an investment, typically expressed as an annual percentage based on cost or current value.',
    definition: 'Yield is the income generated by an investment, expressed as a percentage. In forex, yield differences between currencies (interest rate differential) drive swap rates and can influence currency values. Higher-yielding currencies often attract capital.',
    howItWorks: [
      'Bond yield: annual interest / bond price',
      'Forex: interest rate differential between currencies',
      'High yield currency: positive swap when long',
      'Carry trade: borrow low yield, buy high yield'
    ],
    tradingTips: [
      'Check swap rates before holding positions overnight',
      'Yield differentials can support currency trends',
      'Central bank rate decisions affect yields'
    ],
    relatedTerms: ['forex', 'currency-pair', 'leverage']
  },

  // Z
  {
    slug: 'zero-sum',
    name: 'Zero-Sum Game',
    category: 'essential',
    shortDescription: 'A market situation where one participant\'s gain equals another\'s loss, with total gains minus losses equaling zero.',
    definition: 'In a zero-sum game, the total gains of all participants exactly equal the total losses. Forex and derivatives trading are often considered zero-sum: for every profitable trade, there\'s a losing counterparty. However, transaction costs make it slightly negative-sum.',
    howItWorks: [
      'You profit $100 on EUR/USD long',
      'Someone else lost $100 on the other side',
      'Total: +$100 - $100 = $0',
      'Minus spreads/commissions = negative-sum'
    ],
    tradingTips: [
      'Your profits come from other traders\' losses',
      'Brokers/exchanges profit from all trades',
      'Edge and discipline determine long-term success'
    ],
    relatedTerms: ['forex', 'spread', 'contract-for-difference']
  }
];

// Helper function to get term by slug
export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

// Helper function to get all slugs for static paths
export function getAllSlugs(): string[] {
  return glossaryTerms.map(term => term.slug);
}

// Helper function to get terms by category
export function getTermsByCategory(category: GlossaryTerm['category']): GlossaryTerm[] {
  return glossaryTerms.filter(term => term.category === category);
}

// Helper function to get popular terms
export function getPopularTerms(): GlossaryTerm[] {
  return glossaryTerms.filter(term => term.popular);
}
