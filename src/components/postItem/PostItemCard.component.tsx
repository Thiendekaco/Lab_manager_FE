import {ContentType, Theme, ThemeProps} from "../../types";
import React, {useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {Badge} from "../badge/Badge.component";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {Button} from "../button/Button.component";
import {ArrowRight} from "phosphor-react";
import {fadeInRight} from "../../styles/styles.animation";



 interface PropsPostInterface extends ThemeProps {
  content : ContentType
}


function Component (props :PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : {title, badge, image, createAt }, className } = props;
  const { token } = useTheme() as Theme;

  return(
    <div className={CN(className, '_post_item_card')}>
      <div className={'_post_item-content'}>
        {createAt && <div className={'_post_item-createAt'}>
          {t(createAt)}
        </div>}
        <div className={'_post_item-badge'}>
          { badge && <Badge content={badge} background={"#4274b7"} /> }
        </div>
        {title && <div className={'_post_item-title'}>
          {t(title)}
        </div>}
      </div>
      <Button borderColor={"transparent"} size={'lg'} backgroundColor={'transparent'} icon={<div className={'_button-icon'} > <ArrowRight  size={27} className={'_option-icon'} weight={"bold"} color={"#000000"} /></div>} />
    </div>
  )
}


export const PostItemCard_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token }}) => {

  return({
    '&._post_item_card' : {
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      padding: 30,
      width: '100%',
      border: '1px solid',
      borderColor: token.colorBgSecondary,
      justifyContent: 'space-between',
      '._post_item-content': {
        display: "flex",
        flexDirection: 'column',
        gap: token.paddingMD,
        whiteSpace: 'wrap',

      }
    },

    '._post_item-title': {
      fontSize: 40,
      fontWeight: 800
    }
  })
})

export const PostItemCard = styled(PostItemCard_nonAnimation)`
      &:hover ._button-icon {
        animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
      },
`
