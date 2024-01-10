export interface ThemeProps {
  theme: Theme;
  className?: string;
}

export enum ThemeNames {
  LIGHT = 'light',
  DARK = 'dark',
}




export interface GlobalToken {
  backgroundColor : string,
  color: string,
  lineBox: number,
  radiusBox: number,
  colorBgInput: string,
  lineType: number,

  colorTextSecondary: string,
  colorTextRed: string,
  colorTextLight: string,
  colorTextDark: string,
  colorTextError: string,
  colorTextBlue: string,

  colorBgSecondary: string,
  colorBgLight: string,
  colorBgDark: string,
  colorBgRed: string,
  colorBgError: string,
  colorTransparent: string,
  colorBgMix: string,
  colorBgGreen: string,
  colorBgGreen1: string,
  colorBgBlue: string,
  colorBgPink: string,
  colorBgYellow: string,
  colorBgBlue2: string,
  colorBgBlue3: string,
  borderColor: string,

  lineWidth: number,
  lineWidthMD: number,
  lineWidthSM: number,
  lineWidthLG: number,
  lineWidthXS: number,

  lineHeight: number,
  lineHeightSM: number,
  lineHeightMD: number,
  lineHeightLG: number,
  lineHeightXS: number,

  margin: number,
  marginSM: number,
  marginMD: number,
  marginLG: number,
  marginXS: number,

  padding: number,
  paddingSM: number,
  paddingMD: number,
  paddingLG: number,
  paddingXS: number

  fontSize: number,
  fontSizeSM: number,
  fontSizeMD: number,
  fontSizeLG: number,
  fontSizeXS: number,

  fontWeight: number,
  fontWeightSM:  number,
  fontWeightMD: number,
  fontWeightLG: number,
  fontWeightXS: number,

  fontFamily: string,

  size: number,
  sizeSM: number,
  sizeMD: number,
  sizeLG: number,
  sizeXS: number,
}



export type Theme = {
  id: ThemeNames;
  name: string;
  token: GlobalToken;
};

