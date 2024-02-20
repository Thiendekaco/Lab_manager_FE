import {LaboratoryInterface, ThemeProps} from "../../../types";
import React, {useContext, useEffect} from "react";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../../hook";
import {ScreenContext} from "../../../context/Screen.context";
import { GlobeHemisphereWest, Buildings} from 'phosphor-react'
import {useSelector} from "react-redux";
import {selectLaboratory} from "../../../store/laboratory/laboratory.selector";




interface PropsPostInterface extends ThemeProps {

}


function Component (props :PropsPostInterface) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const {  className } = props;
  const laboratory = useSelector(selectLaboratory);

  return(
    <div className={CN(className, {
      '_desktop' : isWebUI,
      '_mobile' : !isWebUI
    }, 'post-item')}>
      <img src={laboratory?.logo} alt={laboratory?.logo} className={'__posts-item-logo'}/>

      <div className={'__post-item-content'}>
        <div className={'__post-item-left'}>
          <div className={'__post-item-info'}>
            <div className={'__post-item-name-lab'}>
              {laboratory?.nameLab}
            </div>
          </div>
          <div className={'__post-item-place'}>
            {!!laboratory?.location && <div className={'__post-item-location'}>
                <Buildings weight={"fill"} size={20}/>
              {t(laboratory?.location)}
            </div>}
            {!!laboratory?.country && <div className={'__post-item-country'}>
                <GlobeHemisphereWest weight={'fill'} size={20} />
              {t(laboratory?.country)}
            </div>}
          </div>
        </div>

      </div>
    </div>
  )
}


export const HeaderLaboratory_nonAnimation = styled(Component)<PropsPostInterface>(({theme : {token}} : PropsPostInterface) => {

  return({
    '&.post-item' : {
      borderTop: `2px solid ${token.colorBgSecondary}`,
      display: 'flex',
      padding: 20,
      gap: token.marginXS,
      alignItems: 'center',
      cursor: "pointer",
      height: 180,
      width: '100%',
      marginTop: 200,

      '.__post-item-content': {
        display: "flex",
        flexDirection: 'row',
        flex: '1 1 80%',
        gap: token.paddingMD,
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
      width: 96,
      height: 96,
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

export const HeaderLaboratory = styled(HeaderLaboratory_nonAnimation)`
  &:hover ._button-icon {

  },
`
