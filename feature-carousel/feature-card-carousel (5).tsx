import React, { useState } from 'react';
import { 
  Activity, BarChart3, DollarSign, LineChart, TrendingUp, Users, Mail, 
  FileText, AlertTriangle, Gift, FileSearch, Leaf, ChevronRight, 
  TrendingDown, BookOpen, ArrowRight
} from 'lucide-react';

const FeatureCardCarousel = () => {
  // Default active card is "Company Financials" (index 2)
  const [activeCardIndex, setActiveCardIndex] = useState(2);

  // Card data with titles, descriptions, and icons
  const cards = [
    {
      title: "Live Pricing",
      icon: <DollarSign size={20} />,
      description: "Real-time market data with customizable price alerts and historical comparisons."
    },
    {
      title: "Analyst Estimates",
      icon: <TrendingUp size={20} />,
      description: "Consensus recommendations, price targets, and earnings estimates from top analysts."
    },
    {
      title: "Company Financials",
      icon: <BarChart3 size={20} />,
      description: "Comprehensive financial statements with interactive charts and ratio analysis."
    },
    {
      title: "Peer Analysis",
      icon: <Users size={20} />,
      description: "Side-by-side comparison with industry peers across key performance metrics."
    },
    {
      title: "Historical Earnings",
      icon: <LineChart size={20} />,
      description: "Quarter-by-quarter earnings data with variance analysis and future projections."
    },
    {
      title: "Insider Transactions",
      icon: <Activity size={20} />,
      description: "Track executive buying and selling patterns with intuitive visualization tools."
    },
    {
      title: "Email Updates",
      icon: <Mail size={20} />,
      description: "Customizable alerts for price movements, news, and analyst rating changes."
    },
    {
      title: "News & Events",
      icon: <FileText size={20} />,
      description: "Curated news feed with sentiment analysis and upcoming corporate events calendar."
    },
    {
      title: "Risk Analysis",
      icon: <AlertTriangle size={20} />,
      description: "Volatility metrics, downside risk assessment, and stress test scenarios."
    },
    {
      title: "Dividend History",
      icon: <Gift size={20} />,
      description: "Historical yield data, payout ratios, and future dividend projections."
    },
    {
      title: "SEC Filings",
      icon: <FileSearch size={20} />,
      description: "Direct access to regulatory filings with AI-powered summary and analysis tools."
    },
    {
      title: "ESG Metrics",
      icon: <Leaf size={20} />,
      description: "Environmental, social, and governance scores with industry benchmarking."
    },
    {
      title: "Technical Indicators",
      icon: <ChevronRight size={20} />,
      description: "Advanced chart patterns, support/resistance levels, and momentum indicators."
    },
    {
      title: "Options Chain",
      icon: <TrendingDown size={20} />,
      description: "Interactive options trading data with implied volatility and Greeks calculation."
    },
    {
      title: "Research Reports",
      icon: <BookOpen size={20} />,
      description: "Premium research content from leading financial institutions and analysts."
    },
  ];

  return (
    <div className="flex flex-col w-full bg-black p-6 rounded-xl">
      <h2 className="text-white text-xl font-semibold mb-6">Dashboard Features</h2>
      
      {/* Card carousel container */}
      <div className="flex items-stretch space-x-1 h-72 overflow-x-auto pb-4 scrollbar-hide">
        {cards.map((card, index) => {
          const isActive = activeCardIndex === index;
          
          return (
            <div
              key={index}
              className={`relative flex transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] rounded-lg overflow-hidden ${
                isActive 
                  ? 'flex-1 bg-gradient-to-br from-gray-900 to-gray-950 shadow-lg translate-y-[-4px]' 
                  : 'w-12 bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
              }`}
              onMouseEnter={() => setActiveCardIndex(index)}
              style={{
                boxShadow: isActive ? '0 8px 16px rgba(0, 0, 0, 0.5), 0 0 4px rgba(255, 255, 255, 0.1)' : 'none',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Vertical title bar */}
              <div 
                className={`relative flex flex-col justify-between items-center p-2 h-full ${
                  isActive ? 'bg-gradient-to-b from-blue-900/30 to-purple-900/30 w-12' : 'w-full'
                }`}
              >
                {/* Vertical title */}
                <div 
                  className={`absolute top-1/2 left-1/2 origin-center transform -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {card.title}
                </div>
                
                {/* Icon at bottom */}
                <div 
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  {card.icon}
                </div>
              </div>

              {/* Card expanded content - only visible when active */}
              {isActive && (
                <div className="flex-1 flex flex-col justify-between p-5 overflow-hidden">
                  <div>
                    <h3 className="text-white text-lg font-medium mb-3">{card.title}</h3>
                    <p className="text-gray-300 text-sm">{card.description}</p>
                  </div>
                  
                  <div className="mt-4">
                    <button 
                      className="group flex items-center text-sm text-white border border-white rounded-md px-4 py-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-gray-900"
                    >
                      <span>View details</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCardCarousel;
