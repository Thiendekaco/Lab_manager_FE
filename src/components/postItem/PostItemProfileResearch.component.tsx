import {  ResearchType, Theme, ThemeProps} from "../../types";
import React, {useCallback, useContext, useState} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";

import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import {useNavigate} from "react-router";

import {fadeDown, fadeStart} from "../../styles/styles.animation";




interface Props extends ThemeProps {
  content : ResearchType;
}


function Component (props :Props) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : { title, description, research }, className} = props;
  const { token } = useTheme() as Theme;
  const [ isOpenOptionModal, setIsOpenOptionModal ] = useState(false);
  const navigate = useNavigate();


  // const onCLickToLaboratory = useCallback(()=>{
  //   navigate(`${name}`)
  // },[name, navigate])


  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, 'post-research')}>
        <div className={'__post-research-row'}>
          <h3>{title}</h3>
          <div className={'__post-research-type'}>
            { research }
          </div>
        </div>
      <div className={'__post-research-row'}>
        <span>{ description }</span>
      </div>

    </div>
  )
}

 const PostProfileResearch_nonAnimation = styled(Component)<Props>(({theme : {token}} ) => {

  return({
    display: 'flex',
    height: 200,
    padding: 20,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    border: '1px solid',
    flexDirection: 'column',
    borderColor: token.borderColor,
    borderRadius: 10,
    justifyContent: 'space-between',
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',

    '.__post-research-type': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: token.paddingSM
    },

    '.__post-research-row': {
      display: 'flex',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      justifyContent: 'space-between'
    },

    '&:hover': {
      boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
    }
  })
})

export const PostProfileResearch = styled(PostProfileResearch_nonAnimation)`
  animation: ${fadeStart} .3s ease-in-out;
  transform-origin: top;
  .__option-item{
    animation: ${fadeDown} .3s ease-in-out;
  }
`
