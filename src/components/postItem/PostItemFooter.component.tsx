import {ContentType, Theme, ThemeProps} from "../../types";
import React, {useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {Button} from "../button/button.component";
import {ArrowRight} from "phosphor-react";
import {fadeInRight} from "../../styles/styles.animation";



export interface PropsPostInterface extends ThemeProps {
  content : ContentType
}


function Component (props :PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : {title, badge, image, createAt }, className } = props;
  const { token } = useTheme() as Theme;


  return(
    <div className={CN(className, '_post_item_footer')}>
      <div className={'_post_item-content'}>
        {title && <div className={'_post_item-title'}>
          {t(title)}
        </div>}
      </div>
      <Button borderColor={"transparent"} size={'lg'} backgroundColor={'transparent'} icon={<div className={'_button-icon'} > <ArrowRight  size={27} className={'_option-icon'} weight={"bold"} color={"#000000"} /></div>} />
    </div>
  )
}


 const PostItemFooter_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token }}) => {

  return({
    '&._post_item_footer' : {
      borderRadius: 10,
      display: 'flex',
      padding: 20,
      flex: '1 1 30%',
      border: '1px solid',
      borderColor: token.colorBgSecondary,
      justifyContent: 'space-between',
      alignItems: "center",
      cursor: 'pointer',

      '&:hover ._post_item-title': {
        color: token.colorTextRed
      }
    },

    '._post_item-title': {
      fontSize: token.fontSize,
      transition: 'color .3s ease-in-out'
    }
  })
})

export const PostItemFooter = styled(PostItemFooter_nonAnimation)`
      &:hover ._button-icon {
        animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
      },

`
