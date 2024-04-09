import { create } from '@storybook/theming';

export const lightTheme = create({
  base: 'light',

  // colorPrimary is the primary color
  colorPrimary: '#ff4785',

  // colorSecondary is the secondary color
  colorSecondary: '#1ea7fd',

  // UI
  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  fontWeightBold: '700',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,
});

export const darkTheme = create({
  base: 'dark',

  colorPrimary: '#ff4785',
  colorSecondary: '#1ea7fd',

  // UI
  appBg: 'black',
  appContentBg: 'grey',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  fontWeightBold: '700',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: 'hotpink',

  // Form colors
  inputBg: 'grey',
  inputBorder: 'silver',
  inputTextColor: 'white',
  inputBorderRadius: 4,
});