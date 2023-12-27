import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import {useContext} from "react";
import {ScreenContext} from "../../context/Screen.context";
import {useTranslation} from "../../hook";


interface Props extends ThemeProps {
  content : string,
  background ?: string
}



function Component ({className, content} : Props) {
  const { t } = useTranslation();


  return (
    <div className={CN(className, '_badge-wrap')}>
      <div className={'_badge-content'}>
        {t(content)}
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
