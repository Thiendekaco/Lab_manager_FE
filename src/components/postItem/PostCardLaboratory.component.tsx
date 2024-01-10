import {ContentType, ResearchType, Theme, ThemeProps} from "../../types";
import React, {useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";

import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";

import {fadeDown, fadeInRight, fadeStart, scaleButton} from "../../styles/styles.animation";

import {ReactionComponent} from "../reaction/Reaction.component";
import {HeaderPostComponent} from "../header-post/HeaderPost.component";



interface PropsPostInterface extends ThemeProps {
  content : ResearchType;
  footer ?: React.ReactNode;
}


function Component (props : PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { footer, content : {title, activity, subTitle, admin, research, description, image }, className } = props;
  const { token } = useTheme() as Theme;

  return(
    <div className={CN(className, 'post-item-laboratory')}>
      <div className={'_post-item-title'}>
          <HeaderPostComponent image={'https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/399356655_228679893564845_4690910822546452853_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGUZ_pcqHbpsre7aCCeIIB0hBtKen5BU4uEG0p6fkFTi1M9UHdY05BdFOFI5r-HV1PMAQ4DxcTKC9NPUSOCj13e&_nc_ohc=wAmCXjmSpLEAX_UAkG5&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCBskRz833nSgmP_lqHhZ5YqTdWi7zMEiMAIHDAhkDvJw&oe=6597A97B'} role={'admin'} author={'thiendekaco'} />
      </div>
      <div className={'_post-item-content'}>
        <div className={'_post-item-introduce'}>
          <img className={'_post-item-logo'} src={image} alt={image} />
          <div className={'_post-item-info'}>
            <span className={'_post-item-description'}>
              { description }
            </span>
          </div>
        </div>
        <div className={'_post-item-subtitle'}>
          { subTitle }
        </div>
        <div className={'_post-item-research'}>
          <span className={'_post-item-label'}> {t('Research images')}</span>
          <div className={'_post-item-icon-research'}>
            {research}
          </div>
        </div>
        <div className={'_post-item-activity'}>
          <span className={'_post-item-label'}>{t('This lab is for SDG activity')}</span>
          <img src={activity} alt={activity} className={'_post-item-icon-activity'}/>
        </div>
      </div>
      {footer || <ReactionComponent/> }
    </div>
  )
}


export const PostCardLaboratory_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token }, footer}) => {

  return({

    '&.post-item-laboratory' : {
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      width: footer ? '100%' :  '80%',
      margin: 'auto',
      border: '1px solid ',
      borderColor: token.colorBgSecondary,
      boxSizing: 'border-box',
      backgroundColor: 'white',
      boxShadow: '10px 8px 24px -8px rgba(0,0,0,.04), 1px 1px 1px rgba(0,0,0,0.04)',


      '._post-item-content': {
        display: "flex",
        flexDirection: 'column',
        gap: token.paddingMD,
        whiteSpace: 'wrap',
        padding: 30,
        height: 490,
      }
    },

    '._post-item-title': {
      fontSize: 30,
      borderRadius: '10px 10px 0 0',
      color: token.colorTextBlue,
      padding: '30px 30px 10px 30px',
      borderBottom: '1px solid',
      borderColor: token.colorBgSecondary
    },

    '._post-item-introduce': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: token.paddingMD,
      height: '40%'
    },

    '._post-item-logo': {
      borderRadius: 6,
      width: '40%',
      height: '100%'
    },

    '._post-item-info':{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      flex: '0 1 40%'
    },

    '._post-item-description, ._post-item-label': {
      fontWeight: token.fontWeightLG,
      fontSize: token.fontSizeSM
    },

    '._post-item-admin': {
      marginTop: token.margin + 1
    },

    '._post-item-subtitle': {
      fontSize: 14,
      lineHeight: '26px',
      padding: '0 10px',
      borderRadius: 3,
      borderWidth: 1,
      backgroundColor: token.colorBgSecondary
    },

    '._post-item-icon-activity': {
      width: 60,
      height: 60,
      borderRadius: 4,
      cursor: 'pointer',
      transition: 'transform .3s ease-in-out',

      '&:hover':{
        transform: 'scale(1.3)'
      }
    },

    '._post-item-activity, ._post-item-research': {
      display : 'flex',
      flexDirection: 'column',
      gap: token.paddingSM,

    },

    '._post-item-icon-research': {
      display: 'flex',
      gap: token.paddingMD,


    }
  })
})

export const PostCardLaboratory = styled(PostCardLaboratory_nonAnimation)`
  animation: ${scaleButton} 1s ease-in-out ;
  
  &:hover ._button-icon {
    animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
  },
  
  ._post-item-logo {
    animation: ${fadeDown} .5s cubic-bezier(0,.5,0,1) ;
  }
`
