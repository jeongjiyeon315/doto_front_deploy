import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSilverStarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 24" {...props}>
    <path
      fill="url(#silverStarIcon_svg__a)"
      d="M12.5 0 8.125 7.124 0 9.082l5.42 6.362-.645 8.33 7.725-3.188 7.725 3.188-.645-8.33L25 9.082l-8.125-1.958z"
    />
    <defs>
      <linearGradient id="silverStarIcon_svg__a" x1={8} x2={21} y1={2} y2={24} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F7F7F7" />
        <stop offset={1} stopColor="silver" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgSilverStarIcon;
