import {LaboratoryType, Theme, ThemeProps} from "../../types";
import React, {useCallback, useContext} from "react";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {Badge} from "../badge/Badge.component";
import {useTranslation} from "../../hook";
import {ScreenContext} from "../../context/Screen.context";
import { GlobeHemisphereWest, Buildings, Users   } from 'phosphor-react'
import {fadeInRight} from "../../styles/styles.animation";
import {useNavigate} from "react-router";



interface PropsPostInterface extends ThemeProps {
  content : LaboratoryType
}


function Component (props :PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { content : { name, status, country, location, activity, image }, className } = props;
  const { token } = useTheme() as Theme;
  const navigate = useNavigate();


  const onCLickToLaboratory = useCallback(()=>{
    navigate(`/laboratories/${name}`)
  },[name, navigate])

  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI,
    }, 'post-item')} onClick={onCLickToLaboratory}>
      <img src={image} alt={image} className={'__posts-item-logo'} />

      <div className={'__post-item-content'}>
        <div className={'__post-item-left'}>
          <div className={'__post-item-info'}>
            <div className={'__post-item-name-lab'}>
              {name}
            </div>
            <div className={'_post-item-badge'}>
              <Badge content={status} background={"#4274b7"} />
            </div>
          </div>
          <div className={'__post-item-place'}>
            {!!location && <div className={'__post-item-location'}>
                <Buildings weight={"fill"} size={20}/>
              {t(location)}
            </div>}
            {!!country && <div className={'__post-item-country'}>
                <GlobeHemisphereWest weight={'fill'} size={20} />
              {t(country)}
            </div>}
          </div>
        </div>
        <div className={'__post-item-right'}>
          { activity?.map((a) => (
            <img src={a.image} alt={a.image} id={a.value} className={'__post-item-activity'}/>
          ))}
        </div>
      </div>
    </div>
  )
}


export const PostLaboratory_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token}} : PropsPostInterface) => {

  return({
    '&.post-item' : {
      borderTop: `1px solid ${token.colorBgSecondary}`,
      display: 'flex',
      padding: 20,
      gap: token.marginXS,
      alignItems: 'center',
      cursor: "pointer",
      height: 180,
      width: '100%',
      '.__post-item-content': {
        display: "flex",
        flexDirection: 'row',
        flex: '1 1 80%',
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

    '.__posts-item-logo, .__post-item-activity': {
      borderRadius : 10,
      width: 64,
      height: 64,
      border: '1px solid transparent'
    },

    '&._last-box': {
      borderBottom: `1px solid ${token.colorBgSecondary}`,
    },


    '.__post-item-right': {
      display: "flex",
      flexWrap: 'wrap'
    },

    '.__post-item-name-lab': {
      fontSize: token.fontSize,
      fontWeight: token.fontWeightMD
    },

    '.__post-item-info':{
      display: "flex",
      alignItems: "center",
      gap: token.paddingMD,
      transition: 'color .3s ease-in-out',
    },

    '.__post-item-location, .__post-item-country': {
      display: 'flex',
      gap: token.padding
    }


  })
})

export const PostLaboratory = styled(PostLaboratory_nonAnimation)`
  &:hover ._button-icon {

  },
`
