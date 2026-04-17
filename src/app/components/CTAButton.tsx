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
      className={`group relative w-full min-w-0 bg-[#e30a1a] hover:bg-[#c90816] flex items-center justify-center h-[50px] sm:h-[56px] px-4 py-[14px] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer sm:w-auto sm:justify-center sm:gap-6 sm:pl-8 sm:pr-1.5 shrink-0 ${className}`}
    >
      <span className="block w-auto text-center font-bold text-[14px] sm:w-auto sm:px-0 sm:text-[16px] leading-[1.4] text-white whitespace-nowrap">
        {children}
      </span>
      
      {/* Mobile arrow */}
      <div className="ml-2.5 flex h-5 w-5 items-center justify-center text-white sm:hidden">
        <svg 
          className="size-[18px]" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <path 
            d="M19 12L5 12" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
          />
          <path 
            d="M12 19L19 12L12 5" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Desktop arrow in white circle */}
      <div className="hidden bg-white sm:flex items-center justify-center rounded-full shrink-0 size-[42px] transition-transform duration-300 group-hover:scale-110">
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