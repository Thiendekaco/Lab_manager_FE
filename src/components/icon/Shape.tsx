import {ThemeProps} from "../../types";
import React from "react";
import CN from "classnames";
import styled from "styled-components";
import {X, Check, Minus } from "phosphor-react";

interface Props extends ThemeProps {
  icon: React.ReactNode;
  backgroundIcon: string;
  size : string | number;
}


function Component (props: Props){
  const { className, icon } = props



  return(
    <button
      className={CN(className)}
    >
      <div className={'__button-mask'} />
      {icon}
    </button>
  )
}


 const Shape = styled(Component)<Props>(({theme: {token}, backgroundIcon, size} :Props) => {
  return({
    width: size,
    height: size,
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
      backgroundColor: backgroundIcon,
      zIndex: 0,
      opacity : .1,
      borderRadius: 'inherit',
      width: "inherit",
      height: "inherit"
    },

    '.__button-icon': {
      position: 'absolute',
      top:'15%',
      left: '13%',
      zIndex: 1
    },

    '&:hover': {
      transform: 'scale(1.25)'
    }
  })
})

export default Shape;

