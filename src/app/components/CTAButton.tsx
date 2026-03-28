import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group bg-[#e30a1a] hover:bg-[#c90816] flex gap-6 items-center justify-center h-[56px] pl-8 pr-1.5 py-[18px] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0 ${className}`}
    >
      <span className="font-bold text-[16px] leading-[1.5] text-white whitespace-nowrap">
        {children}
      </span>
      
      {/* White Circle with Arrow Icon */}
      <div className="bg-white flex items-center justify-center rounded-full shrink-0 size-[42px] transition-transform duration-300 group-hover:scale-110">
        <svg 
          className="size-[24px] transition-transform duration-300 group-hover:translate-x-0.5" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M19 12L5 12" 
            stroke="#111928" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
          />
          <path 
            d="M12 19L19 12L12 5" 
            stroke="#111928" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
          />
        </svg>
      </div>
    </button>
  );
};