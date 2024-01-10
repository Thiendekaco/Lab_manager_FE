import {Theme, ThemeProps, UserProfile} from "../../types";
import React, {useCallback, useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {useNavigate} from "react-router";
import {ButtonShape} from "../button/ButtonShape.component";



interface Props extends ThemeProps {
  content : UserProfile
}


function Component (props : Props) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : { name, image }, className } = props;
  const { token } = useTheme() as Theme;
  const navigate = useNavigate();


  const onCLickToLaboratory = useCallback(()=>{
    navigate(`${name}`)
  },[name, navigate])

  const onClickToOpenOption = useCallback(()=>{

  },[])

  const onCLickToProfile = useCallback(()=>{
    navigate(`/home/profile/${name}`)
  },[name, navigate])

  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, 'post-member')}  onClick={onCLickToProfile} >
      <img src={image} alt={image} className={'__posts-member-logo'}/>

      <div className={'__post-member-content'}>
        <div className={'__post-member-left'}>
          <div className={'__post-member-info'}>
            <div className={'__post-member-name-lab'}>
              {name}
            </div>
          </div>
        </div>
        <div className={'__post-member-right'}>
          <ButtonShape label={'Follow'} onClick={onClickToOpenOption}/>
        </div>
      </div>
    </div>
  )
}


export const PostProfileUser_nonAnimation = styled(Component)<Props>(({theme : {token}} ) => {

  return({
    '&.post-member' : {
      display: 'flex',
      gap: token.paddingSM,
      alignItems: 'center',
      height: 90,
      margin: 'auto',
      padding: 20,
      width: '100%',
      borderRadius: 10,
      border: `1px solid ${token.borderColor}`,
      cursor: 'pointer',
      transition: 'box-shadow .3s ease-in-out',

      '.__post-member-content': {
        display: "flex",
        flexDirection: 'row',
        width: '90%',
        gap: token.paddingMD,
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
      flex: '0 1 100px',
      position: 'relative',
      zIndex: 0
    },

    '.__post-member-info':{
      display: "flex",
      alignItems: "center",
      transition: 'color .3s ease-in-out',
      gap: 8
    },

    '.__posts-member-logo': {
      borderRadius : '50%',
      width: 40,
      backgroundColor: 'white',
      height: 40,
      border: '1px solid transparent'
    },

    '&:hover': {
      boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
    }
  })
})

export const PostProfileUser = styled(PostProfileUser_nonAnimation)`

`
