
import React from 'react';
import { useTheme } from '@/hooks/useTheme';

const NextJsIcon: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="bg-white dark:bg-black rounded-full p-1 flex items-center justify-center w-10 h-10 shadow-md dark:shadow-neo-inner">
      <svg 
        viewBox="0 0 180 180" 
        width="24" 
        height="24" 
        xmlns="http://www.w3.org/2000/svg"
        className={theme === 'dark' ? 'fill-white' : 'fill-black'}
      >
        <mask height="180" width="180" id="mask0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill={theme === 'dark' ? 'black' : 'white'} />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#paint0_linear)"
          />
          <rect
            width="12"
            height="72"
            x="115"
            y="54"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear"
            x1="109"
            x2="144.5"
            y1="116.5"
            y2="160.5"
          >
            <stop stopColor={theme === 'dark' ? 'white' : 'black'} />
            <stop offset="1" stopColor={theme === 'dark' ? 'white' : 'black'} stopOpacity="0" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear"
            x1="121"
            x2="120.799"
            y1="54"
            y2="106.875"
          >
            <stop stopColor={theme === 'dark' ? 'white' : 'black'} />
            <stop offset="1" stopColor={theme === 'dark' ? 'white' : 'black'} stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NextJsIcon;
