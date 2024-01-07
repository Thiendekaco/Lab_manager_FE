import {MemberType, Theme, ThemeProps} from "../../types";
import React, {useCallback, useContext, useState} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";

import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {useNavigate} from "react-router";

import {fadeDown, fadeStart} from "../../styles/styles.animation";
import {ModAction} from "../reaction/ModAction.component";




interface PropsPostModMemberInterface extends ThemeProps {
  content : MemberType;
  footer ?: React.ReactNode
}


function Component (props :PropsPostModMemberInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : { name, image, role }, className, footer} = props;
  const { token } = useTheme() as Theme;
  const [ isOpenOptionModal, setIsOpenOptionModal ] = useState(false);
  const navigate = useNavigate();


  const onCLickToLaboratory = useCallback(()=>{
    navigate(`${name}`)
  },[name, navigate])


  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, 'post-member')}>
      <img src={image} alt={image} className={'__posts-member-logo'} />

      <div className={'__post-member-content'}>
        <div className={'__post-member-left'}>
          <div className={'__post-member-name'}>
            {name}
          </div>

        </div>
        <div className={'__post-member-right'}>
          { !!footer && footer}
        </div>
      </div>
    </div>
  )
}


export const PostModMember_nonAnimation = styled(Component)<PropsPostModMemberInterface>(({theme : {token}} ) => {

  return({
    '&.post-member' : {
      display: 'flex',
      gap: token.paddingSM,
      alignItems: 'center',
      height: 90,
      padding: token.paddingMD,
      margin: 'auto',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 20,
      border: '1px solid',
      borderColor: token.colorBgSecondary,
      boxShadow: '1px 1px 3px rgba(0,0,0,0.1)',


      '.__post-member-content': {
        display: "flex",
        flexDirection: 'row',
        width: '80%',
        gap: token.paddingSM,
        justifyContent: "space-between",
      },

    },

    '&._desktop' : {
      flexDirection: "row",
    },

    '&._mobile' : {
      flexDirection: "column",
      height: 154
    },

    '.__post-member-right': {
      display: "flex",
      flexWrap: 'nowrap',
      justifyContent: 'flex-end',
      gap: token.padding + 2,
      position: 'relative',
      zIndex: 0
    },

    '.__post-member-left':{
      display: 'flex',
      alignItems: 'center',
      flex: '1 0',
      cursor: 'pointer',
      overflow: 'hidden',
      flexShrink: 1
    },

    '.__post-member-name': {
      transition: 'all .3s ease-in-out',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: token.fontSize,
      fontWeight: token.fontWeightMD,

      '&:hover': {
        textDecoration: 'underline'
      }
    },

    '.__posts-member-logo': {
      borderRadius : '50%',
      width: 40,
      backgroundColor: 'white',
      height: 40,
      border: '1px solid transparent'
    },

    '.__post-member-option': {
      position: 'absolute',
      width: 200,
      left: -200,
      borderRadius: 10,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      zIndex: 1,
      justifyContent: 'space-around',
      alignItems:'center',
      backgroundColor: 'white',
      boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.2)',

    },

    '.__option-item': {
      textAlign: 'start',
      width: '100%',
      cursor: 'pointer',
      transition: 'background-color .3s ease-in-out',
      padding: 5,
      borderRadius: 'inherit',

      '&:hover': {
        backgroundColor: token.colorBgSecondary
      }
    }

  })
})

export const PostModMember = styled(PostModMember_nonAnimation)`
  animation: ${fadeStart} .3s ease-in-out;
  transform-origin: top;
  .__option-item{
    animation: ${fadeDown} .3s ease-in-out;
  }
`
