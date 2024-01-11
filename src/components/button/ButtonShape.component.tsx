import {ThemeProps} from "../../types";
import React, {useMemo} from "react";
import CN from "classnames";
import styled from "styled-components";
import {fadeInRight, scaleButton} from "../../styles/styles.animation";
import {ArrowRight} from "phosphor-react";


interface Props extends ThemeProps {
  icon ?: React.ReactNode,
  label ?: string| React.ReactNode,
  backgroundColor ?: string,
  backgroundColorHover ?: string,
  colorTextChange ?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color ?: string
  type ?:  "button" | "submit" | "reset"
}


function Component (props: Props){
  const { className, label, type } = props




  return(
    <button
      type={type}
      className={CN(className)}
      onClick={props.onClick}
    >
      {label}
    </button>
  )
}


export const ButtonShape = styled(Component)<Props>(({theme: {token}, color, backgroundColor, backgroundColorHover, colorTextChange} :Props) => {
  return({
    backgroundColor: backgroundColor || token.colorBgSecondary,
    color : color || token.color,
    width: '80%',
    height: 40,
    margin: 'auto',
    borderRadius: 10,
    borderColor: 'transparent',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent : 'center',
    gap: token.padding,

    '&:hover': {
      backgroundColor: backgroundColorHover || token.colorTextDark,
      color: colorTextChange || token.colorTextLight,
      transform: 'scale(1.25)'
    }
  })
})

