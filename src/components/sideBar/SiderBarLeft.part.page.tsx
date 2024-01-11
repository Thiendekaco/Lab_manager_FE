import {LaboratoryType, Theme, ThemeProps} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {Eye, EyeSlash, Buildings, Users} from "phosphor-react";
import {useTranslation} from "../../hook";
import {ButtonShape} from "../button/ButtonShape.component";

import {scaleButton} from "../../styles/styles.animation";


interface Props extends ThemeProps {
  content : LaboratoryType;
}




function Component  ({ className, content } : Props) {
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;



  return (
    <div className={CN(className, 'side-bar-right')}>
        <div className={'__side-bar-right-about-box'}>
           <h3 className={'__side-bar-label'}>
             {t('About')}
           </h3>
            <div className={CN('__side-bar-status', '-text')}>
              { content?.status === "public" ? <Eye  size={20} /> : <EyeSlash  size={20} /> }
              { t(content.status.toUpperCase()) }
            </div>
            <div className={CN('__side-bar-location', '-text')}>
              <Buildings size={20} /> { t(content?.location || '') }
            </div>
            <div className={CN('__side-bar-members', '-text')}>
              <Users size={20} /> 50 {t('members')}
            </div>
          <ButtonShape backgroundColor={token.colorBgSecondary} label={t('More')} />
        </div>
        <div className={'__side-bar-right-group-button'}>
          <div className={'__side-bar-right-join'}>
            <ButtonShape label={t('Join')}
                         backgroundColor={token.colorBgGreen1}
                         backgroundColorHover={token.colorBgGreen1}
                         colorTextChange={'white'}
                         color={'white'}
            />
          </div>
          <div className={'__side-bar-right-quit'}>
            <ButtonShape label={t('Quit')}
                         backgroundColor={token.colorBgSecondary}
                         backgroundColorHover={token.colorBgSecondary}
                         colorTextChange={token.colorTextDark}
            />
          </div>
        </div>
    </div>
  )
}



export const SideBarRightPart_nonAnimation = styled(Component)<Props> (({theme: {token}})=>{


  return ({
    width: '80%',
    height: 'fit-content',
    display: 'flex',
    position: 'sticky',
    top: 210,
    marginBottom: token.marginXS,
    flexDirection: 'column',
    gap: token.paddingMD,


    '.__side-bar-right-about-box, .__side-bar-right-group-button': {
      borderRadius: 10,
      width: '100%',
      backgroundColor: 'white',
      padding: 30,
      boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD,
    },

    '.__side-bar-right-about-box': {
      height: 300
    },

    '.__side-bar-right-group-button': {
      height: 'fit-content'
    },

    '.__side-bar-label': {
      fontWeight: token.fontWeightLG
    },

    '.-text' : {
      display: 'flex',
      gap: token.paddingMD
    },

    '.__side-bar-right-join, .__side-bar-right-quit': {
      display: 'flex'
    }




  })
})


export const SideBarRightPart = styled(SideBarRightPart_nonAnimation)`
  animation: ${scaleButton} 1s ease-in-out;
`
