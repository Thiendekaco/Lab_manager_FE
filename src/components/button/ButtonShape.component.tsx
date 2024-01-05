import {ThemeProps} from "../../types";
import React, {useMemo} from "react";
import CN from "classnames";
import styled from "styled-components";
import {fadeInRight, scaleButton} from "../../styles/styles.animation";
import {ArrowRight} from "phosphor-react";


interface Props extends ThemeProps {
  icon ?: React.ReactNode,
  label ?: string,
  backgroundColor ?: string,
  backgroundColorHover ?: string,
  colorTextChange ?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color ?: string
}


function Component (props: Props){
  const { className, label } = props




  return(
    <button
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

    '&:hover': {
      backgroundColor: backgroundColorHover || token.colorTextDark,
      color: colorTextChange || token.colorTextLight,
      transform: 'scale(1.25)'
    }
  })
})

