import {ThemeProps} from "../../types";
import React, {useMemo} from "react";
import CN from "classnames";
import styled from "styled-components";
import {fadeInRight, scaleButton} from "../../styles/styles.animation";
import {ArrowRight} from "phosphor-react";


interface Props extends ThemeProps {
  icon ?: React.ReactNode,
  backgroundColor ?: string,
  isBorder ?: boolean,
  isRadius ?: boolean,
  size : 'sm'|'md'|'lg'|'xs',
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  borderColor ?: string,
  right ?: boolean
}


function Component (props: Props){
  const { className, right, icon, isBorder, isRadius, size, } = props
  const _icon = useMemo(()=>icon || <div className={'_button-icon'} > <ArrowRight  size={27} className={'_option-icon'} weight={"bold"} color={"#FFFFFF"}/></div>, [icon])



  return(
    <button
      className={CN(className, {
        '-button-radius': isRadius,
        '-button-retangle': !isRadius,
        '-button-border': isBorder,
        '-right' : right
      }, size)}
      onClick={props.onClick}
    >
      {_icon}
    </button>
  )
}


export const Button_nonAnimation = styled(Component)<Props>(({theme: {token}, backgroundColor, borderColor} :Props) => {
  return({
    backgroundColor : backgroundColor || token.colorBgGreen,
    border : '1px solid',
    borderColor: borderColor || "transparent",
    display: 'block',
    cursor: 'pointer',
    position: "relative",

      '&.-button-radius': {
        borderRadius: '50%',
      },
      '&.sm': {
        width: 10,
        height: 10
      },
      '&.md': {
        width: 60,
        height: 60
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

export const Button = styled(Button_nonAnimation)`
      &:hover ._button-icon {
        animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
      },
      &:hover {
        animation: ${scaleButton} .4s;
      }   
`
