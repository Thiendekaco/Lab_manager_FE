import { ThemeProps } from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React from "react";
import { RoleIcon } from "../../constants/Role.constant";
import { RoleEnum } from "../../types";


interface Props extends ThemeProps {
  author: string,
  image: string,
  role : 'admin'|'moder'|'member'
}


function Component({ className, author, image, role } : Props){


  return(
    <div className={CN(className, 'header-post')}>
      <div className={'_icon-logo-wrap'}>
      </div>
      <span className={'header-name'}>{author}</span>
      <div className={'header-role'}>{RoleIcon[role as RoleEnum]}</div>
    </div>
  )
}

export const HeaderPostComponent = styled(Component)<Props>(({theme: {token}}) => {

  return({
    display: "flex",
    gap: token.paddingMD,
    width: '100%',
    height:'100%',
    alignItems: 'center',

    '._icon-logo-wrap': {
      width: 50,
      height: 50,
      display: 'flex',
      alignItems:'center',
    },

    '._icon-logo': {
      width: 50,
      margin: 'auto',
      height: 50,
      borderRadius: '50%',
      border: '2px solid',


      borderColor: token.colorBgRed,


    },
    '.header-name': {
      color: token.color
    },

    '.__role-icon': {
      transition: 'transform .3s ease-in-out',
      cursor: 'pointer',
      '&:hover':{
        transform: 'scale(2)'
      },
    }
  })

})


