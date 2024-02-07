import {LabMemberInterface, LaboratoryInterface, Theme, ThemeProps} from "../../types";
import React, {useCallback, useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {useNavigate} from "react-router";



interface PropsPostInterface extends ThemeProps {
  content : LabMemberInterface | LaboratoryInterface
}


function Component (props :PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : { nameLab, country, location, logo }, className } = props;
  const { token } = useTheme() as Theme;
  const navigate = useNavigate();


  const onCLickToLaboratory = useCallback(()=>{
    navigate(`/laboratories/${nameLab}`)
  },[nameLab, navigate])

  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, 'post-item')} onClick={onCLickToLaboratory}>
      <img src={logo} alt={logo} className={'__posts-item-logo'} />

      <div className={'__post-item-content'}>
        <div className={'__post-item-name-lab'}>
          {nameLab}
        </div>
      </div>
    </div>
  )
}


export const PostLaboratoryMini = styled(Component)<PropsPostInterface>(({theme : {token}} : PropsPostInterface) => {

  return({
    '&.post-item' : {
      display: 'flex',
      borderRadius: 10,
      margin: 'auto',
      padding: 10,
      backgroundColor: token.colorBgSecondary,
      alignItems: 'center',
      cursor: "pointer",
      height: 50,
      width: '90%',
      transition: 'all .3s ease-in-out',

      '&:hover':{
        transform: 'scale(1.1)'
      }
    },

    '&._desktop' : {
      flexDirection: "row",
      justifyContent: 'space-between'
    },

    '&._mobile' : {
      flexDirection: "column",
      height: 154
    },

    '.__posts-item-logo': {
      borderRadius : 10,
      width: 40,
      backgroundColor: 'white',
      height: 40,
      border: '1px solid transparent'
    },

  })
})

