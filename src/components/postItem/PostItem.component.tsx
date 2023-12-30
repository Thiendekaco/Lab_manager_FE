import {ContentType, Theme, ThemeProps} from "../../types";
import React, {useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {Badge} from "../badge/Badge.component";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {Button} from "../button/Button.component";
import {ArrowRight} from "phosphor-react";
import {fadeInRight, scaleButton} from "../../styles/styles.animation";



 interface PropsPostInterface extends ThemeProps {
  content : ContentType
}


function Component (props :PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : {title, badge, image, createAt }, className } = props;
  const { token } = useTheme() as Theme;

  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, '_post_item')}>
      {
        isWebUI && <img src={image} alt={image} className={'_posts_item-logo'}/>

      }
      <div className={'_post_item-content'}>
        <div className={'_post_item-info'}>
          {
            !isWebUI && <img className={'_posts_item-logo'} src={image} alt={image}/>

          }
          {createAt && <div className={'_post_item-createAt'}>
            {t(createAt)}
          </div>}
          <div className={'_post_item-badge'}>
            { badge && <Badge content={badge} background={"#4274b7"} /> }
          </div>
        </div>
        {title && <div className={'_post_item-title'}>
          {t(title)}
        </div>}
      </div>
      <Button borderColor={"transparent"} size={'lg'} backgroundColor={'transparent'} icon={<div className={'_button-icon'} > <ArrowRight  size={27} className={'_option-icon'} weight={"bold"} color={"#000000"} /></div>} />
    </div>
  )
}


export const PostItem_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token}} : PropsPostInterface) => {

  return({
    '&._post_item' : {
      borderTop: `1px solid ${token.colorBgSecondary}`,
      display: 'flex',
      padding: 20,
      gap: token.marginXS,
      cursor: "pointer",
      justifyContent: 'space-between',
      '._post_item-content': {
        display: "flex",
        flexDirection: 'column',
        gap: token.paddingMD,
        justifyContent: "center",
        '._post_item-info':{
          display: "flex",
          gap: token.paddingMD,
          transition: 'color .3s ease-in-out',
        }
      },

      '&:hover ._post_item-content': {
        color : token.colorTextRed
      }
    },

    '&._desktop' : {
      flexDirection: "row",
    },

    '&._mobile' : {
      flexDirection: "column",
      height: 154
    },

    '& ._posts_item-logo': {
      borderRadius : 10,
      display: "flex",
      flex: '1 1 200px',
      maxWidth: 300,
      border: '1px solid transparent',
    },

    '&._last-box': {
      borderBottom: `1px solid ${token.colorBgSecondary}`,
    }
  })
})

export const PostItem = styled(PostItem_nonAnimation)`
      &:hover ._button-icon {
        animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
      },
`
