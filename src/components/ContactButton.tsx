import React from 'react';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = '',
  onClick,
  href = 'mailto:shahriar.rusan12@gmail.com',
}) => {
  const buttonStyle: React.CSSProperties = {
    background:
      'linear-gradient(123deg, #00F0FF 0%, #80C0FF 33%, #E0A0FF 66%, #E0E0E0 100%)',
    boxShadow:
      '0px 0px 24px rgba(0, 240, 255, 0.38), 0px 0px 45px rgba(224, 160, 255, 0.25), inset 0px 1px 3px rgba(255, 255, 255, 0.8), inset 0px -2px 6px rgba(0, 0, 0, 0.12)',
    outline: '2px solid white',
    outlineOffset: '-3px',
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center font-bold uppercase tracking-widest text-[#0C0C0C] text-xs sm:text-sm md:text-base">
      Contact Me
    </span>
  );

  const baseClasses = `relative inline-flex items-center justify-center rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        style={buttonStyle}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
