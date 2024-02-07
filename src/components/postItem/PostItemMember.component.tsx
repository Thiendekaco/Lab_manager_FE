import {MemberType, Theme, ThemeProps} from "../../types";
import React, {useCallback, useContext, useState} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {Badge} from "../badge/Badge.component";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {useNavigate} from "react-router";
import { RoleIcon} from "../../constants/Role.constant";
import {RoleEnum} from "../../types";
import {ButtonShape} from "../button/ButtonShape.component";
import {fadeDown, fadeStart} from "../../styles/styles.animation";



interface PropsPostMemberInterface extends ThemeProps {
  content : MemberType
}


function Component (props :PropsPostMemberInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : { name, image, role }, className } = props;
  const { token } = useTheme() as Theme;
  const [ isOpenOptionModal, setIsOpenOptionModal ] = useState(false);
  const navigate = useNavigate();


  const onCLickToProfileUser = useCallback(()=>{
    navigate(`/profile/${name}`)
  },[name, navigate])

  const onClickToOpenOption = useCallback(()=>{
    setIsOpenOptionModal(!isOpenOptionModal);
  },[isOpenOptionModal])



  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, 'post-member')} onClick={onCLickToProfileUser}>
      <img src={image} alt={image} className={'__posts-member-logo'} />

      <div className={'__post-member-content'}>
        <div className={'__post-member-left'}>
          <div className={'__post-member-info'}>
            <div className={'__post-member-name-lab'}>
              {name}
            </div>
            <div className={'_post-member-badge'}>
              <Badge content={RoleIcon[role as RoleEnum]} background={token.colorBgSecondary} />
            </div>
          </div>
        </div>
        <div className={'__post-member-right'}>
          <ButtonShape label={'...'} onClick={onClickToOpenOption}/>
          {isOpenOptionModal && <div className={'__post-member-option'}>
            <div className={'__option-item'}>
              {t('Follow')}
            </div>
            <div className={'__option-item'}>
              {t('Remove member')}
            </div>
            <div className={'__option-item'}>
              {t('Update role member')}
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}


export const PostMember_nonAnimation = styled(Component)<PropsPostMemberInterface>(({theme : {token}} ) => {

  return({
    '&.post-member' : {
      display: 'flex',
      gap: token.paddingSM,
      alignItems: 'center',
      height: 90,
      margin: 'auto',
      width: '100%',
      cursor: 'pointer',



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
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      flex: '0 1 60px',
      position: 'relative',
      zIndex: 0
    },

    '.__post-member-name-lab': {
      fontSize: token.fontSize,
      fontWeight: token.fontWeightMD
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

export const PostMember = styled(PostMember_nonAnimation)`
  .__option-item{
    animation: ${fadeDown} .3s ease-in-out;
  }
`
