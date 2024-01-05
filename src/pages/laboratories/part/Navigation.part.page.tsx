import {ThemeProps} from "../../../types";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useTranslation} from "../../../hook";
import CN from "classnames";
import {useParams} from "react-router";



interface Props extends ThemeProps {};




function Component ( {className} : ThemeProps){
  const { t } = useTranslation();
  const param = useParams();

  return(
    <div className={CN('laboratory-navigation', className)}>
      <Link to={'member'} className={CN('__navigate-link', {
        '-active' : param['*'] === 'member'
      })}>
        {t('Member')}
      </Link>
      <Link to={''} className={CN('__navigate-link', {
        '-active' : param['*'] === ''
      })}>
        {t('Research')}
      </Link>
      <Link to={'mod'} className={CN('__navigate-link', {
        '-active' : param['*'] === 'modResearch'
      })}>
        {t('Mod')}
      </Link>
      <Link to={'mod'} className={CN('__navigate-link', {
        '-active' : param['*'] === 'modMember'
      })}>
        {t('Mod Research')}
      </Link>
    </div>
  )
};



export const NavigationLaboratoryPart = styled(Component)<Props>(({theme : {token}})=>{

  return ({
    display: 'flex',
    width: '100%',
    height: 50,
    borderTop: '1px solid',
    borderColor: '#e1e1e1',
    justifyContent: 'space-around',


    '.__navigate-link': {
      cursor: 'pointer',
      textDecoration: 'none',
      color: token.color,
      display: 'flex',
      flex: '1',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all .3s ease-in-out',
      borderBottom: '3px solid transparent',

      '&:hover': {
        backgroundColor: token.colorBgSecondary,
        borderBottom: '3px solid black'
      }
    },

    '.-active': {
      backgroundColor: token.colorBgSecondary,
      borderBottom: '3px solid black'
    }
  })
})
