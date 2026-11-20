import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
  onClick?: () => void;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  href = '#',
  onClick,
}) => {
  const baseClasses = `inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95 cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        Live Project
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
    >
      Live Project
    </button>
  );
};
