import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React from "react";
import { useTranslation } from "../../hook";
import { YoutubeLogo, FacebookLogo, TwitterLogo } from "phosphor-react";

const Logo = require('../../assets/images/HustLogo.ico');


interface Props extends ThemeProps{

}



function Component( {className} : Props) {
  const { t }= useTranslation();

  return(
    <div className={CN(className)}>
      <div className={'_footer-wrap'}>
        <div className={'_footer-box'}>
          <img src={Logo} alt={Logo} className={'_footer-item-logo'}/>
          <div className={'_footer-contact'}>
            <h2 className={'_footer-item'}>{ t('Official SNS')}</h2>
            <YoutubeLogo className={'_footer-item'} size={62} weight="fill" color={'#FFFFFF'}/>
            <FacebookLogo className={'_footer-item'} size={62} weight="fill" color={'#FFFFFF'}/>
            <TwitterLogo className={'_footer-item'} size={62} weight="fill" color={'#FFFFFF'}/>
          </div>
        </div>
        <hr className={'_footer-divide'}/>
        <div className={'_footer-box'}>
          <div className={'_footer-privacy'}>
            <span>
              {t('Website policy')}
            </span>
            <span>
              {t('Privacy policy')}
            </span>
          </div>
          <div className={'_footer-university'}>
            Hanoi University Science and Technology
          </div>
        </div>
      </div>
      </div>

  )

}



export const FooterPage = styled(Component)<Props>(({theme: {token}})=>{


  return({
    width: '100%',
    height: 690,
    backgroundImage: 'url("https://www.shibaura-it.ac.jp/assets/img/common/_foo_bg_pc.webp")',
    marginTop: 400,

    '._footer-wrap': {
      height: '100%',
      width: '80%',
      margin: "auto",
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      gap: token.paddingXS,
    },

    '._footer-box': {
        display: "flex",
        justifyContent: 'space-between'
    },

    '._footer-contact': {
      display: "flex",
      gap: token.paddingXS,
      color: 'white',
      transition: 'color .3s',
      cursor: "pointer",
      alignItems: 'center'
    },

    '._footer-divide': {
      backgroundColor: 'white',
      width: '100%',
      height: 1
    },

    '._footer-item-logo': {
        display: 'block',
        width: '100px',
        height: '100px'
    },

    '._footer-item:hover': {
      color: token.colorTextSecondary
    },

    '._footer-privacy': {
      color: "white",
      display: 'flex',
      gap: token.paddingXS,
      fontSize: token.fontSize
    },

    '._footer-university':{
      color: "white",
      fontSize: token.fontSize
    }


  })
})
