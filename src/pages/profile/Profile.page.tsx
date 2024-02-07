import {ThemeProps, UserProfile} from "../../types";
import CN from "classnames";
import styled from "styled-components";
import {Outlet, Link} from "react-router-dom";
import {CommonProfilePart} from "./part/CommonProfile.part";
import {useTranslation} from "../../hook";
import {useParams} from "react-router";
import {HealthIcon, MedicalIcon} from "../../components/icon";
import React from "react";
import {useSelector} from "react-redux";
import {selectMember} from "../../store/member/member.selector";


interface Props extends ThemeProps {};







function Component({ className } : Props){
  const { t } = useTranslation();
  const param = useParams();
  const member = useSelector(selectMember)

  return(
    <div className={CN(className)}>
      <div className={'__profile-side-bar'}>
        {
          member && <CommonProfilePart content={member} />
        }

      </div>
      <div className={'__profile-content'}>
        <div className={'__profile-navigate'}>
            <Link className={CN('__profile-navigate-item', {
              '-active' : param['*'] === ''
            })}
                  to={''}>
              {t('Research')}
            </Link>
            <div className={'__profile-divide'}/>
            <Link className={CN('__profile-navigate-item',{
              '-active' : param['*'] === 'follow'
            })}
                  to={'follow'}>
              {t('Follow')}
            </Link>
            <div className={'__profile-divide'}/>
          <Link className={CN('__profile-navigate-item',{
            '-active' : param['*'] === 'laboratory'
          })}
                  to={'laboratory'}>
              {t('Laboratories')}
            </Link>
        </div>
        <Outlet />
      </div>
    </div>
  )
}


export const ProfilePage = styled(Component)<Props>(({ theme: {token}})=>{


  return({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 250,
    padding: '0px 84px',
    justifyContent: 'space-between',
    gap: token.paddingMD,

    '.__profile-content': {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1 70%',
      marginTop: token.marginXS
    },

    '.__profile-navigate': {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: token.paddingMD
    },

    '.__profile-navigate-item': {
      textDecoration : 'none',
      color: token.colorTextDark,
      width: '100%',
      textAlign: 'center',
      padding: 20,
      height: 60,
      backgroundColor: token.colorBgSecondary,
      transition: 'all .3s ease-in-out',
      borderBottom: '2px solid transparent',

    },

    '.__profile-navigate-item:hover, .-active': {
      opacity: 0.7,
      borderColor: 'black'
    },


    '.__profile-divide': {
      width: 2,
      height: '100%',
      display: 'block',
      backgroundColor: token.colorBgLight
    }

  })
})

