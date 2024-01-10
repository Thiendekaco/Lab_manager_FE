import {GlobalToken, Theme, ThemeNames} from "../types";

export  const THEME_TOKEN_DEFAULT: GlobalToken = {
  backgroundColor : '#0d1117',
  color: '#ffffff',
  lineBox: 10,
  radiusBox: 3,
  colorBgInput: '#ffffff',
  lineType: 10,

  colorTextSecondary: '#646464',
  colorTextLight: '#ffffff',
  colorTextDark: '#160002',
  colorTextError: '#d5413b',
  colorTextRed: '#bf1616',
  colorTextBlue: '#008482',


  colorBgSecondary: '#f5f5f5',
  colorBgYellow: '#D3D548',
  colorBgLight: '#ffffff',
  colorBgBlue: '#62a3ea' ,
  colorBgBlue2: '#22b6c7',
  colorBgBlue3: '#3c6ed1',
  colorBgPink: '#f36fed',
  colorBgDark: '#0d1117',
  colorBgRed: '#f65353',
  colorBgError: '#ef3a3a',
  colorBgGreen: '#7aed52',
  colorBgGreen1: '#134e3b',
  colorBgMix: 'linear-gradient(270deg, #4aaed3 0%, #4aaed3 6.4102564103%, #4ac4d3 23.8461538462%, #89f2b8 76.1538461538%, #bef2dc 87.1794871795%, #bef2dc 100%), url("https://www.shibaura-it.ac.jp/assets/img/common/_noise.svg")',
  colorTransparent: 'rgba(0, 0, 0, 0.1)',
  borderColor : '#d0d7de',

  lineWidth: 10,
  lineWidthMD: 5,
  lineWidthSM: 20,
  lineWidthLG: 30,
  lineWidthXS: 40,

  lineHeight: 10,
  lineHeightSM: 5,
  lineHeightMD: 26,
  lineHeightLG: 30,
  lineHeightXS: 40,


  margin: 10,
  marginSM: 5,
  marginMD: 15,
  marginLG: 40,
  marginXS: 100,

  padding: 5,
  paddingSM: 5,
  paddingMD: 20,
  paddingLG: 60,
  paddingXS: 80,

  fontSize: 26,
  fontSizeSM: 14,
  fontSizeMD: 50,
  fontSizeLG: 70,
  fontSizeXS: 90,

  fontWeight: 400,
  fontWeightSM:  300,
  fontWeightMD: 500,
  fontWeightLG: 600,
  fontWeightXS: 900,

  fontFamily: 'Plus Jakarta Sans',

  size: 5,
  sizeSM: 10,
  sizeMD: 20,
  sizeLG: 30,
  sizeXS: 35,
}


export const THEME_CONFIGS: Record<ThemeNames, Theme> = {
  [ThemeNames.DARK]: {
    id: ThemeNames.DARK,
    name: 'Dark',
    token: {
      ...THEME_TOKEN_DEFAULT,
      backgroundColor : '#0d1117',
      color: '#ffffff',
      colorBgInput: '#252525',
    }
  },
  [ThemeNames.LIGHT]: {
    id: ThemeNames.LIGHT,
    name: 'Light',
    token: {
      ...THEME_TOKEN_DEFAULT,
      backgroundColor : '#ffffff',
      color: '#171717',
      colorBgInput: '#f2f2f2',
    }
  },
};
