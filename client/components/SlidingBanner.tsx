import React from 'react';

interface SlidingBannerProps {
  className?: string;
}

export default function SlidingBanner({ className = '' }: SlidingBannerProps) {
  const messages = [
    "🎉 LIMITED TIME: FREE 2-Page Website! No Support Included - Grab This Deal Now!",
    "⚡ HURRY UP: Get Your FREE Website Before Offer Expires!",
    "🔥 EXCLUSIVE OFFER: Professional 2-Page Website Absolutely FREE!",
    "💯 LAST CHANCE: Free Website Development - Limited Time Only!"
  ];

  return (
    <div className={`relative overflow-hidden bg-red-600 text-white py-2 ${className}`}>
      <div className="animate-slide-left-to-right whitespace-nowrap">
        {messages.map((message, index) => (
          <span key={index} className="inline-block px-8 font-bold text-sm mr-16">
            {message}
          </span>
        ))}
        {/* Duplicate messages to ensure continuous flow */}
        {messages.map((message, index) => (
          <span key={`duplicate-${index}`} className="inline-block px-8 font-bold text-sm mr-16">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}