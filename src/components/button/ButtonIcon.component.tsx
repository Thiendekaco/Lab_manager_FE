import {ThemeProps} from "../../types";
import React, {useMemo} from "react";
import CN from "classnames";
import styled from "styled-components";


interface Props extends ThemeProps {
  icon ?: React.ReactNode,
  backgroundColor ?: string,
  isBorder ?: boolean,
  size : 'sm'|'md'|'lg'|'xs',
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  borderColor ?: string,
  right ?: boolean
}


function Component (props: Props){
  const { className, right, icon, isBorder, size, } = props


  return(
    <button
      className={CN(className, {
        '-button-border': isBorder,
        '-right' : right
      }, size)}
      onClick={props.onClick}
    >
      {icon || <></>}
    </button>
  )
}


export const ButtonIcon = styled(Component)<Props>(({theme: {token}, backgroundColor, borderColor} :Props) => {
  return({
    backgroundColor : backgroundColor || 'white',
    borderColor: borderColor || "transparent",
    display: 'block',
    cursor: 'pointer',
    position: "relative",
    borderRadius: '50%',

    '&.sm': {
      width: 10,
      height: 10
    },
    '&.md': {
      width: 40,
      height: 40
    },
    '&.lg': {
      width: 80,
      height: 80
    },
    '&.xs': {
      width: 100,
      height: 100
    },
    '&.-button-icon:hover' :  {
      transition: 'all .4s cubic-bezier(.65,0,.35,1)',
      position: "relative"
    },
    '&.-button-icon': {
      position: "relative",
    },

    '&.-button-border': {
      border: '2px solid'
    },

    '&.-right': {
      left: '80%'
    }

  })
})

