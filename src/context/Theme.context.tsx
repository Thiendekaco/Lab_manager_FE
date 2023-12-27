// Copyright 2019-2022 @polkadot/extension-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ThemeProps } from '../types';
import { Theme, ThemeNames } from '../types';

import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import { createGlobalStyle, ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import {THEME_CONFIGS} from "../constants/Theme.constant";
import {Styles} from "styled-components/dist/types";



interface Props {
  children: React.ReactNode;
}


const GlobalStyle = createGlobalStyle<ThemeProps>(({ theme }) => {
  const {  token } = theme as Theme;

  return ({
    '*':{
      boxSizing: "border-box",
    },
    body: {
      fontFamily: token.fontFamily,
      color: token.color,
      fontWeight: token.fontWeight,
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      overflowY: 'scroll',
      scrollbarWidth: 'none', /* Ẩn thanh cuộn trên Firefox */
      msOverflowStyle: 'none'
    },
    'body::-webkit-scrollbar' :{
      display: 'none' /* Ẩn thanh cuộn trên Chrome và Safari */
    },
    pre: {
      fontFamily: 'inherit',
      whiteSpace: 'pre-wrap'
    },

    '.loading-icon': {
      fontSize: token.size
    },

    '.main-page-container': {
      border: `${token.lineWidth}px ${token.lineType} ${token.colorBgInput}`
    },

    '.ant-sw-modal .ant-sw-modal-header': {
      borderRadius: '24px 24px 0 0'
    },

    '.ant-sw-modal': {
      '&, &.ant-sw-qr-scanner': {
        '.ant-sw-modal-content': {
          width: 390 - token.lineWidth * 2,
          left: token.lineWidth,
          bottom: 0,
          borderBottom: `1px solid ${token.colorBgInput}`
        }
      },

      '&.modal-full, &.ant-sw-qr-scanner': {
        '.ant-sw-modal-content': {
          top: 1,
          height: 600 - token.lineWidth * 2
        }
      }
    },

    '.modal-full': {
      '.ant-sw-modal-content': {
        '.ant-sw-modal-header': {
          borderRadius: 0
        }
      }
    },

    '.text-secondary': {
      color: token.colorTextSecondary
    },


    '.text-light': {
      color: token.colorTextLight
    },

    '.common-text': {
      fontSize: token.fontSize,
      lineHeight: token.lineHeight
    },

    '.sm-text': {
      fontSize: token.fontSizeSM,
      lineHeight: token.lineHeightSM
    },

    '.mono-text': {
      fontFamily: token.fontFamily
    },

    '.ml-xs': {
      marginLeft: token.marginXS
    },

    '.text-danger': {
      color: token.colorTextError
    },

    '.h3-text': {
      fontSize: token.fontSizeMD,
      lineHeight: token.lineHeightMD,
      fontWeight: token.fontWeightMD
    },

    '.h4-text': {
      fontSize: token.fontSizeLG,
      lineHeight: token.lineHeightLG,
      fontWeight: token.fontWeightMD
    },

    '.h5-text': {
      fontWeight: token.fontWeightXS,
      fontSize: token.fontSizeXS,
      lineHeight: token.lineHeightXS
    },

    '.form-space-xs': {
      '.ant-form-item': {
        marginBottom: token.marginXS
      }
    },

    '.form-space-sm': {
      '.ant-form-item': {
        marginBottom: token.marginSM
      }
    },



    '.form-row': {
      display: 'flex',
      gap: token.sizeSM,
    },

    '.item-disabled': {
      opacity: 0.4,
      cursor: 'not-allowed !important',
      backgroundColor: `${token.colorBgSecondary} !important`
    },

    '.mb-0': {
      marginBottom: 0
    },
  }) as Styles<ThemeProps> ;
});




export interface ThemeProviderProps {
  children: React.ReactNode;
}


export function ThemeProvider ({ children }: ThemeProviderProps): React.ReactElement<ThemeProviderProps> {
  const [themeReady, setThemeReady] = useState(false);
  const ThemeName_ = ThemeNames.LIGHT
  const generateTheme = useCallback((themeName : ThemeNames) =>{
    setThemeReady(true)
    return THEME_CONFIGS[themeName]
  },[])

  const theme = useMemo<Theme>(() => {
    return generateTheme(ThemeName_);
  }, [generateTheme, ThemeName_]);


  // Reduce 5 of re-rendering
  if (!themeReady) {
    return <></>;
  }

  return (
    <StyledComponentThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </StyledComponentThemeProvider>
  );
}
