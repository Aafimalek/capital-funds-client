import React from 'react';

const stocks = [
  { symbol: "NIFTY 50", price: "24,350.00", change: "+0.5%", isPositive: true },
  { symbol: "BANK NIFTY", price: "52,100.00", change: "+0.8%", isPositive: true },
  { symbol: "RELIANCE", price: "2,950.00", change: "+1.2%", isPositive: true },
  { symbol: "TATA MOTORS", price: "980.00", change: "-0.3%", isPositive: false },
  { symbol: "TCS", price: "4,100.00", change: "+0.1%", isPositive: true },
  { symbol: "ADANI ENT", price: "3,200.00", change: "+2.4%", isPositive: true },
  { symbol: "INFY", price: "1,850.00", change: "-0.5%", isPositive: false },
  { symbol: "HDFC BANK", price: "1,650.00", change: "+0.2%", isPositive: true },
];

export const MarketTicker = () => {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 glass-light py-3">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap pause-animation">
        {/* Original List */}
        <div className="flex items-center gap-12 px-6">
          {stocks.map((stock, index) => (
            <TickerItem key={`stock-1-${index}`} stock={stock} />
          ))}
        </div>
        {/* Duplicate List for seamless loop */}
        <div className="flex items-center gap-12 px-6">
          {stocks.map((stock, index) => (
            <TickerItem key={`stock-2-${index}`} stock={stock} />
          ))}
        </div>
        {/* Triplicate List to ensure coverage on large screens */}
        <div className="flex items-center gap-12 px-6">
          {stocks.map((stock, index) => (
            <TickerItem key={`stock-3-${index}`} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TickerItem = ({ stock }: { stock: typeof stocks[0] }) => (
  <div className="flex items-center gap-3">
    <span className="font-bold text-white">{stock.symbol}</span>
    <span className="font-medium text-gray-400">{stock.price}</span>
    <span className={`flex items-center gap-1 text-sm font-semibold ${stock.isPositive ? 'text-green-400' : 'text-red-400'}`}>
      {stock.isPositive ? (
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      ) : (
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      )}
      {stock.change}
    </span>
  </div>
);
