import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import { useTranslation } from "../../hook";
import React from "react";


interface Props extends ThemeProps {
  image : string,
  description ?: string
  label: string,
  icon : React.ReactNode,
  id: string
};


function Component ( { className, label, id, icon, description} : Props ) {
  const { t } = useTranslation();


  return(
    <div className={CN(className, 'banner-wrap')} id={id}>
      <div className={'__banner-logo'}>
        <div className={'__banner-logo-cover'}>
          {icon}
          <div>{t(label)}</div>
        </div>

      </div>
      <div className={'__banner-date'}>
        <div className={'__banner-date-left'}>
          {t('Program Detail')}
        </div>
        <div className={'__banner-date-right'}>
          {t(description || '')}
        </div>
      </div>
    </div>
  )

}


export const Banner = styled(Component)<Props> (({ theme: {token}, image})=> {

  return({

    marginTop: token.marginXS,
    marginBottom: token.marginXS,

    '.__banner-logo': {
      width: '100%',
      height: 270,
      borderRadius: 10,
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center' ,
      backgroundSize: 'cover'
    },

    '.__banner-logo-cover': {
      color: token.colorTextLight,
      fontSize: 32,
      display: 'flex',
      borderRadius: "inherit",
      height: '100%',
      width: '100%',
      gap: token.paddingMD,
      paddingLeft: token.paddingLG,
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,.5)'
    },

    '.__banner-date': {
      width: '100%',
      marginTop: 50,
      height: 78,
      borderRadius: 10,
      display: 'flex',
      border: '1px solid',
      borderColor: token.colorBgSecondary
    },

    '.__banner-date-left': {
      width: '20%',
      height: '100%',
      display: 'flex',
      fontWeight: token.fontWeightXS,
      padding: token.padding,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },

    '.__banner-date-right': {
      display: 'flex',
      padding: token.paddingMD,
      alignItems: 'center',
      overflow: 'hidden'
    }

  })

})


