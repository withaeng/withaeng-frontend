import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        main: '#FFA500',
        light: '#FFC570',
        exLight: '#FFDD95',
        pressing: '#f2a10d',
      },
      secondary: {
        main: '#3652AD',
        light: '#718EED',
      },
      nutral: {
        black: {
          '01': '#131313',
          '02': '#333333',
          '03': '#535353',
          '04': '#737373',
          '05': '#939393',
        },
        white: {
          '01': '#ffffff',
          '02': '#faf8f6',
          '03': '#dad8d6',
          '04': '#babbb6',
        },
      },
      caption: {
        main: '#ec5c53',
        light: '#f8867e',
      },
    },
    fontSize: {
      'display-01': [
        '6rem',
        {
          fontWeight: '600',
          lineHeight: 'auto',
        },
      ],
      'display-02': [
        '4.8rem',
        {
          fontWeight: '600',
          lineHeight: 'auto',
        },
      ],
      'headline-01': [
        '4rem',
        {
          fontWeight: '600',
          lineHeight: 'auto',
        },
      ],
      'headline-02': [
        '3.2rem',
        {
          fontWeight: '600',
          lineHeight: 'auto',
        },
      ],
      'headline-03': [
        '2.8rem',
        {
          fontWeight: '600',
          lineHeight: 'auto',
        },
      ],
      'headline-04': [
        '2rem',
        {
          fontWeight: '600',
          lineHeight: 'auto',
        },
      ],
      'subtitle-01': [
        '1.6rem',
        {
          fontWeight: '600',
          lineHeight: '20px',
        },
      ],
      'subtitle-02': [
        '1.4rem',
        {
          fontWeight: '600',
          lineHeight: '20px',
        },
      ],
      'body-01': [
        '1.8rem',
        {
          fontWeight: '400',
          lineHeight: 'auto',
        },
      ],
      'body-02': [
        '1.6rem',
        {
          fontWeight: '400',
          lineHeight: 'auto',
        },
      ],
      'body-03': [
        '1.4rem',
        {
          fontWeight: '300',
          lineHeight: 'auto',
        },
      ],
      'caption-01': [
        '1.2rem',
        {
          fontWeight: '500',
          lineHeight: 'auto',
        },
      ],
      'caption-02': [
        '1.2rem',
        {
          fontWeight: '400',
          lineHeight: 'auto',
        },
      ],
      'caption-03': [
        '1rem',
        {
          fontWeight: '300',
          lineHeight: 'auto',
        },
      ],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
