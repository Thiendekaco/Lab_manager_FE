import {Theme, ThemeProps} from "../../types";
import CN from "classnames";

import styled, {useTheme} from "styled-components";
import React from "react";
import {ButtonAccept} from "../button/ButtonAccept.component";

interface Props extends ThemeProps {
  nameFilter : string;
  onAccept : ( name : string) => void;
  onDeny : (name : string ) => void;
  onNext : (name : string) => void;

}



function Component ({className, nameFilter, onNext, onAccept, onDeny} : Props){
  const { token } = useTheme() as Theme;


  return(
    <div className={CN(className, 'reaction-wrap')}>
      <ButtonAccept isAccept={true} onClick={() => onAccept(nameFilter)}/>
      <ButtonAccept isAccept={false} onClick={() => onDeny(nameFilter)}/>
      <ButtonAccept onClick={()=> onNext(nameFilter)}/>
    </div>
  )
}


export const ModAction = styled(Component)<Props>(({theme: {token}})=>{

  return({
    display: 'flex',
    gap: token.paddingMD,
    justifyContent: 'center',
    borderTop: '1px solid',
    borderColor: token.colorBgSecondary,
    padding: '1vw',

    '.__reaction-icon': {
      cursor: 'pointer',
      transition: 'all .3s ease-in-out',

      '&:hover': {
        transform: 'scale(1.3)'
      }
    }
  })
})

