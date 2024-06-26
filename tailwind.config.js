import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line prettier/prettier
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      Dark_Layout: {
        100: '#202225',
        200: '#292B2F',
        300: '#2F3136',
        400: '#41444B',
        500: '#5b5d63',
      },
      Dark_Text_Name: '#F2F2F2',
      Dark_Text_AboutMe: '#A9AEBB',
      Dark_Text_Contents: '#D0D0D0',
      Dark_CategoryText_Icon: '#B9BBBE',
      Light_Layout: {
        100: '#E7E7E7',
        200: '#F0F0F0',
        300: '#F8F8F8',
        400: '#FDFDFD',
      },
      Light_Text_Name: '#616161',
      Light_Text_AboutMe: '#898989',
      Light_CategoryText_Icon_Contents: '#717171',
      Button: '#5964F2',
      skyblue: '#82D5EF',
      pink: '#EA83AB',
      blue: '#658DDE',
      salmon: '#E39999',
      purple: '#C06EF2',
      yellow: '#FFE03A',
      green: '#8EFF9A',
      black: '#000000',
      transparent: 'transparent',
      error: '#F25454',
      Ranking_Bar_Start: '#88A0E9',
      Ranking_Bar_End: '#C7A4F4',
    },

    fontFamily: {
      pre: ['Pretendard'],
      nico: ['NicoMoji'],
    },

    screens: {
      mb: { min: '320px', max: '640px' },
      dt: { min: '640px' },
    },

    extend: {
      backgroundImage: {
        gradient: 'linear-gradient(0.25turn,#3F70DD, #B377F3)',
      },
      transitionProperty: {
        height: 'height',
      },
      keyframes: {
        fadeIn: {
          '100%': { opacity: '1' },
        },
        rightToLeft: {
          from: {
            opacity: 0,
            transform: 'translateX(100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
            marginRight: '0.75rem',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in 0.25s forwards',
        rightToLeftDelay1: 'rightToLeft 0.2s ease-in-out forwards',
        rightToLeftDelay2: 'rightToLeft 0.2s ease-in-out 0.05s forwards',
        rightToLeftDelay3: 'rightToLeft 0.2s ease-in-out 0.1s forwards',
        rightToLeftDelay4: 'rightToLeft 0.2s ease-in-out 0.15s forwards',
        rightToLeftDelay5: 'rightToLeft 0.2s ease-in-out 0.2s forwards',
        rightToLeftDelay6: 'rightToLeft 0.2s ease-in-out 0.25s forwards',
      },
    },
  },
  safelist: [
    {
      pattern: /fill-(skyblue|pink|blue|salmon|purple|yellow|green)/,
    },
    {
      pattern: /border-(skyblue|pink|blue|salmon|purple|yellow|green)/,
    },
    {
      pattern: /bg-(skyblue|pink|blue|salmon|purple|yellow|green)/,
    },
    {
      pattern: /text-(skyblue|pink|blue|salmon|purple|yellow|green)/,
    },
  ],

  plugins: [tailwindScrollbarHide],
};
