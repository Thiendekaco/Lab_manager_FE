import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";


interface Props extends ThemeProps {
  image ?: string,
  label ?: string
}



function Component ( { className, image, label } : Props ){
  const { t } = useTranslation();


  return(
    <div className={CN(className, 'header-page')}>
      <div className={'__header-bg'} />
      <div className={'__header-content'} >
        <h1 className={'__header-title'}>{t(label|| '')}</h1>
        <img className={'__header-photo'} src={image} alt={image} />
      </div>
    </div>
  )

}


export const BannerHeader = styled(Component)<Props>(({ theme : {token}})=>{


  return({
    position: "relative",
    width: '100%',
    height: 600,
    marginTop: token.marginXS,

    '.__header-bg': {
      backgroundImage: token.colorBgMix,
      backgroundBlendMode: 'screen',
      backgroundSize: 'auto, 128px 128px',
      filter: 'blur(72px)',
      width: '100%',
      height: '100%',
      position: "relative",
      zIndex: 0
    },


    '.__header-content': {
      position: "absolute",
      zIndex: '1',
      width: '100%',
      top: 0,
      left: 0
    },

    '.__header-title': {
      marginBottom: token.marginXS,
      fontSize: token.fontSizeMD
    },

    '.__header-photo': {
      width: '100%',
      height: 400,
      borderRadius: '10px  0  0 10px'
    }


  })
})
