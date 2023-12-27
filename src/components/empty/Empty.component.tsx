import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";


interface Props extends ThemeProps {};


function Component ( { className } : Props){

  return(<div className={CN(className)} />)
}



export const Empty = styled(Component)<Props>(({theme: {token}})=> {

  return({
    backgroundImage: token.colorBgMix,
    width: '100%',
    height: 300,
    backgroundBlendMode: 'screen',
    backgroundSize: 'auto, 128px 128px',
    filter: 'blur(72px)',
  })
})
