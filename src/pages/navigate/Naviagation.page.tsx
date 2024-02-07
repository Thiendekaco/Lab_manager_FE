import styled, {StyledObject, useTheme} from "styled-components";
import { useTranslation } from  '../../hook';
import { ThemeProps } from "../../types";
import React, {} from "react";
import { Outlet } from "react-router-dom";
import {HeaderPage} from "./Header.page";
import {FooterPage} from "./Footer.page";
import {CreateNewResearchModal} from "../../components/modal/createNewResearchModal.component";


type Props = ThemeProps ;






export function Component ( { className} : Props) {


  return(
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
)}


export const Navigation =  styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '&._navigation_wrap': {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },

    '&._desktop': {
        height: '130px',
        padding:  token.paddingMD,
        paddingBottom: 0,
        marginBottom: token.marginLG,
      '._navigation_item.-logo': {
        img : {
          display: 'block',
          width: '65px',
          height: '65px'
        }
      },

      '._navigation_box': {
          display: 'flex',
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'space-around' ,
          marginLeft: token.marginXS,
          flex: '1 1 60%',
        '.-link': {
          letterSpacing: 0,
          fontSize: token.fontSize,
          fontWeight: token.fontWeightLG,
          textDecoration: 'none',
          transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0s',
          '.-dropdownIcon': {
            border: 'solid black',
            borderWidth: '0 2px 2px 0',
            height: 6,
            margin: '7px 0 0 7px',
            display: 'inline-block',
            padding: 3,
            transform: 'rotate(45deg)',
            '-webkit-transform': 'rotate(45deg)'
          },
        },

        '.-link:hover' : {
          color: token.colorTextRed
        },

        '.-link:hover .-dropdownIcon': {
          borderColor: token.colorTextRed
        }

      },

      '._navigation_item' : {
          color: token.color,
          display: 'flex',
          flex: '0 1 130px',
          margin: token.marginMD
      },
    },

    '&._mobile': {

    },


  }
})
