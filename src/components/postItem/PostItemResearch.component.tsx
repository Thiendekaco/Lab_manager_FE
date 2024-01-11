import {ContentType, ResearchType, Theme, ThemeProps} from "../../types";
import React, {useCallback, useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {Button} from "../button/Button.component";
import {ArrowRight} from "phosphor-react";
import {fadeInRight} from "../../styles/styles.animation";
import {useNavigate} from "react-router";



 interface PropsPostInterface extends ThemeProps {
  content : ResearchType
}


function Component (props : PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : {title, activity, subTitle, admin, research, description, image }, className } = props;
  const { token } = useTheme() as Theme;
  const navigate = useNavigate();

  const onClickToNavigate = useCallback(()=>{
    navigate(`/research/${title}-${admin}`)
  }, [admin, navigate, title])

  return(
    <div className={CN(className, 'post-item-laboratory')} onClick={onClickToNavigate}>
      <div className={'_post-item-title'}>
        {title}
      </div>
      <div className={'_post-item-content'}>
        <div className={'_post-item-introduce'}>
          <img className={'_post-item-logo'} src={image} alt={image} />
          <div className={'_post-item-info'}>
            <span className={'_post-item-description'}>
              { description }
            </span>
            <span className={'_post-item-admin'}>
               {admin}
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
      <Button borderColor={"transparent"} right={true} size={'md'} backgroundColor={'transparent'} icon={<div className={'_button-icon'} > <ArrowRight  size={20} className={'_option-icon'} weight={"bold"} color={"#000000"} /></div>} />
    </div>
  )
}


export const PostItemResearch_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token }}) => {

  return({

    '&.post-item-laboratory' : {
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 450px',
      border: '1px solid ',
      borderColor: token.colorBgSecondary,
      boxSizing: 'border-box',
      cursor: 'pointer',
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
      backgroundColor: token.colorBgSecondary,
      padding: '1vw 3.7333333333vw 1vw 3.7333333333vw'
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
      gap: token.paddingSM
    },

    '._post-item-icon-research': {
      display: 'flex',
      gap: token.paddingMD
    }
  })
})

export const PostItemResearch = styled(PostItemResearch_nonAnimation)`
      &:hover ._button-icon {
        animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
      },
`
