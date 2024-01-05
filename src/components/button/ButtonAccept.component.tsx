import {ThemeProps} from "../../types";
import React from "react";
import CN from "classnames";
import styled from "styled-components";
import {X, Check, Minus } from "phosphor-react";

interface Props extends ThemeProps {
  isAccept ?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


function Component (props: Props){
  const { className, isAccept, onClick } = props
  const icon = isAccept === undefined ? <Minus weight={'bold'} size={25} className={'__button-icon'} /> : ( isAccept ? <Check weight={'bold'} color={'#3CD73F'} size={25} className={'__button-icon'}/> : <X weight={'bold'} size={25} color={'#AD1424'} className={'__button-icon'}/>)



  return(
    <button
      className={CN(className)}
      onClick={onClick}
    >
      <div className={'__button-mask'} />
      {icon}
    </button>
  )
}


export const ButtonAccept = styled(Component)<Props>(({theme: {token}, isAccept} :Props) => {
  return({
    width: 40,
    height: 40,
    margin: 'auto',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    position: 'relative',
    zIndex : 0,
    padding: 0,

    '.__button-mask': {
      position: 'relative',
      backgroundColor: isAccept === undefined ? "gray" : ( isAccept ? '#4CEAAC'  : 'red') ,
      zIndex: 0,
      opacity : .1,
      borderRadius: 'inherit',
      width: 40,
      height: 40
    },

    '.__button-icon': {
      position: 'absolute',
      top:'22%',
      left: '22%',
      zIndex: 1
    },

    '&:hover': {
      transform: 'scale(1.25)'
    }
  })
})

