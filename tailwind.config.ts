import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        main: '#FFA500',
        light: '#FFC570',
        exLight: '#FFDD95',
        eexLight: '#FFEABF',
        pressing: '#f2a10d',
      },
      secondary: {
        main: '#3652AD',
        light: '#718EED',
        exLight: '#BECDFF',
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
          '04': '#bab8b6',
        },
      },
      caption: {
        main: '#ec5c53',
        light: '#f8867e',
        success: '#36C304',
      },
    },
    fontSize: {
      'display-01': [
        '60px',
        {
          fontWeight: '600',
          lineHeight: '100%',
        },
      ],
      'display-02': [
        '48px',
        {
          fontWeight: '600',
          lineHeight: '100%',
        },
      ],
      'headline-01': [
        '40px',
        {
          fontWeight: '600',
          lineHeight: '100%',
        },
      ],
      'headline-02': [
        '32px',
        {
          fontWeight: '600',
          lineHeight: '100%',
        },
      ],
      'headline-03': [
        '28px',
        {
          fontWeight: '600',
          lineHeight: '100%',
        },
      ],
      'headline-04': [
        '20px',
        {
          fontWeight: '600',
          lineHeight: '100%',
        },
      ],
      'subtitle-01': [
        '16px',
        {
          fontWeight: '600',
          lineHeight: '20px',
        },
      ],
      'subtitle-02': [
        '14px',
        {
          fontWeight: '600',
          lineHeight: '20px',
        },
      ],
      'body-01': [
        '18px',
        {
          fontWeight: '400',
          lineHeight: '100%',
        },
      ],
      'body-02': [
        '16px',
        {
          fontWeight: '400',
          lineHeight: '20px',
        },
      ],
      'body-03': [
        '14px',
        {
          fontWeight: '300',
          lineHeight: '100%',
        },
      ],
      'caption-01': [
        '12px',
        {
          fontWeight: '500',
          lineHeight: '100%',
        },
      ],
      'caption-02': [
        '12px',
        {
          fontWeight: '400',
          lineHeight: '100%',
        },
      ],
      'caption-03': [
        '10px',
        {
          fontWeight: '300',
          lineHeight: '100%',
        },
      ],
    },
    boxShadow: {
      'primary-inner-06': 'inset 0 0 0 6px #FFA500',
      'primary-inner-08': 'inset 0 0 0 8px #FFA500',
      modal: '0 2px 8px 0 #0000001A',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '21': '5.25rem',
        '26': '6.5rem',
        '29': '7.25rem',
      },
    },
    screens: {
      xs: '360px',
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
