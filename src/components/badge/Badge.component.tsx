import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React, {useContext} from "react";
import {ScreenContext} from "../../context/Screen.context";
import {useTranslation} from "../../hook";


interface Props extends ThemeProps {
  content : string | React.ReactNode,
  background ?: string
}



function Component ({className, content} : Props) {
  const { t } = useTranslation();


  return (
    <div className={CN(className, '_badge-wrap')}>
      <div className={'_badge-content'}>
        {typeof  content === 'string' ? t(content) :  content}
      </div>
    </div>
  )
}


export const Badge = styled(Component)<Props>(({theme: {token}, background} : Props) => {
  return ({
    backgroundColor : background || token.colorBgGreen,
    border: '1px solid transparent',
    borderRadius: 10,
    padding: '5px 10px',
    width: 'fit-content',
    '& ._badge-content':{
      color: token.colorTextLight,
      fontSize : token.fontSizeSM + 2,
    }
  })
})
