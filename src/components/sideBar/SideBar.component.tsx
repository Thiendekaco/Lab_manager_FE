import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";
import {Link} from "react-router-dom";


interface Props extends ThemeProps {};



function Component ({className} : Props){
  const { t } = useTranslation();


  return(
    <div className={CN(className, 'sideBar-navigate')}>
      <Link className={CN('__navigate-home', '-link')} to={'/'}>
        {t('Home')}
      </Link>
      <div className={'__navigate-option'}>
        <Link to={'/123'} className={CN('__navigate-item', '-link')}>
          {t('Some thing')}
        </Link>
        <Link to={'/123'} className={CN('__navigate-item', '-link')}>
          {t('Some thing')}
        </Link>
        <Link to={'/123'} className={CN('__navigate-item', '-link')}>
          {t('Some thing')}
        </Link>
      </div>
    </div>
  )
}



export const SideBar = styled(Component)<Props>(({ theme : {token}})=> {

  return({
    width: 240,
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: '80%',
    border: '1px solid',
    backgroundColor: token.colorBgSecondary,
    borderRadius: 8,

    '.__navigate-home': {
      backgroundColor: token.colorBgGreen,
      padding: '40px 20px',
      width: '100%',
      borderRadius: '8px 8px 0 0'
    },

    '.__navigate-option': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD,
      marginTop: token.marginMD
    },

    '.-link': {
      color : token.colorTextDark,
      textDecoration: 'none'
    },

    '.__navigate-home.-link': {
      color: token.colorTextLight
    },

    '.__navigate-item': {
      padding: 20,
      transition: 'background-color .3s',
      borderRadius: '8px 8px 0 0',

      '&:hover': {
        backgroundColor: 'white',

      }
    },
  })
})
