import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React from "react";


interface Props extends ThemeProps {

}


const image = 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_8_w.svg'
function Component({ className } : Props){


  return(
    <div className={CN(className)}>
      <div className={'_icon-logo-wrap'}>
        <img className={'_icon-logo'} src={image} alt={image}/>
      </div>
      <span className={'_icon-label'}>Automotive</span>
    </div>
  )
}

const AutomotiveIcon = styled(Component)<Props>(({theme: {token}}) => {

  return({
    display: "flex",
    gap: 8,

    '._icon-logo-wrap': {
      borderRadius: 6,
      width: 50,
      height: 50,
      backgroundColor: '#f94783',
      display: 'flex',
      alignItems:'center',
    },

    '._icon-logo': {
      width: 30,
      margin: 'auto',
      height: 30,

      cursor: 'pointer',
      transition: 'transform .3s ease-in-out',

      '&:hover':{
        transform: 'scale(1.3)'
      }
    },

    '._icon-label':{
      color: token.colorTextSecondary,
      fontSize: token.fontSizeSM,
      display: "flex",
      alignItems: 'center'
    }
  })

})


export default AutomotiveIcon;
