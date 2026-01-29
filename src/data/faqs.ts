// Centralized FAQ Data for TradeTheDay
// Used across multiple pages for consistency and easy updates

export interface FAQItem {
  question: string;
  answer: string;
}

// =============================================================================
// BROKER FINDER FAQs
// Full set used on /guides/how-to-find-broker
// Subset used on /find-broker (quiz page)
// =============================================================================

export const brokerFinderFAQs: FAQItem[] = [
  {
    question: 'How does the broker selector work?',
    answer: 'Our broker selector asks you 5 key questions about your trading experience, preferred style, budget, and priorities. Based on your answers, our algorithm matches you with brokers that best fit your specific needs, showing you a match percentage for each recommendation.'
  },
  {
    question: 'Are the broker recommendations biased?',
    answer: 'Our recommendations are based on objective criteria including regulation, fees, features, and user feedback. While we may receive compensation from some brokers, this does not influence the match algorithm. Promoted brokers are clearly labeled.'
  },
  {
    question: 'Are all recommended brokers regulated?',
    answer: 'Yes, we only recommend brokers that are regulated by reputable financial authorities such as the FCA (UK), ASIC (Australia), CySEC (Cyprus), or equivalent tier-1 and tier-2 regulators. Regulation status is displayed for each broker.'
  },
  {
    question: 'Can I switch brokers if I am not happy?',
    answer: 'Yes, you can open accounts with multiple brokers or switch entirely. Most traders try a demo account first, then start with a small deposit to test real conditions before committing larger amounts. There is no lock-in with legitimate brokers - you can withdraw your funds and close your account whenever you want.'
  },
  {
    question: 'How do I find the right broker for me?',
    answer: 'Start by identifying your priorities: Do you need low costs for frequent trading? Educational resources as a beginner? Access to specific markets like crypto or stocks? Our broker selector asks these questions and matches you with brokers that fit your specific situation. You can also manually compare brokers using our detailed reviews.'
  },
  {
    question: 'What should I look for when choosing a forex broker?',
    answer: 'The four essentials are: regulation (FCA, ASIC, or CySEC are the gold standard), trading costs (spreads plus any commissions), platform quality (MT4/MT5 or proprietary), and customer support responsiveness. Beyond that, consider your specific needs like copy trading, educational content, or multi-asset access.'
  },
  {
    question: 'What is the minimum deposit to start trading?',
    answer: 'Minimum deposits vary widely. Some brokers like eToro require $50-$200 to start, while others have no minimum at all. Higher-tier brokers offering better spreads or premium features often require $500-$10,000. We display minimum deposits for each broker so you can filter by your budget.'
  }
];

// Subset for the quiz page (first 4 questions - most relevant to the tool)
export const brokerFinderFAQsShort: FAQItem[] = brokerFinderFAQs.slice(0, 4);

// Full set for the guide page (all 7 questions)
export const brokerFinderFAQsFull: FAQItem[] = brokerFinderFAQs;
