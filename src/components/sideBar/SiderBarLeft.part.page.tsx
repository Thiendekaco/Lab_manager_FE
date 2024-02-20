import {LaboratoryInterface, Member, Theme, ThemeProps} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {Eye, EyeSlash, Buildings, Users} from "phosphor-react";
import {useTranslation} from "../../hook";
import {ButtonShape} from "../button/ButtonShape.component";

import {scaleButton} from "../../styles/styles.animation";
import {useDispatch, useSelector} from "react-redux";
import {selectMember} from "../../store/member/member.selector";
import {useCallback, useEffect, useState} from "react";
import {joinLabStart, leaveLabStart} from "../../store/member/member.action";


interface Props extends ThemeProps {
  content : LaboratoryInterface;
}




function Component  ({ className, content } : Props) {
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;
  const dispatch = useDispatch();
  const currentMember = useSelector(selectMember);
  const [ member, setMember ] = useState<Member | null>(currentMember);
  const [ isJoinned, setIsJoinned ] = useState(false);
  useEffect(() => {
    setMember(currentMember);
    setIsJoinned(!!member?.laboratories?.find((l) => l.nameLab === content.nameLab))
  }, [content.nameLab, currentMember, member?.laboratories]);

  const onJoinLab = useCallback(()=>{
    if(member?.user?.email){
      dispatch(joinLabStart(member?.user?.email, content.nameLab))
    }
  }, [content.nameLab, dispatch, member?.user?.email])

  const onQuitLab = useCallback(()=>{
    if(member?.user?.email){
      dispatch(leaveLabStart(member?.user?.email, content.nameLab))
    }
  }, [content.nameLab, dispatch, member?.user?.email])

  return (
    <div className={CN(className, 'side-bar-right')}>
        <div className={'__side-bar-right-about-box'}>
           <h3 className={'__side-bar-label'}>
             {t('About')}
           </h3>
            <div className={CN('__side-bar-status', '-text')}>
               <EyeSlash  size={20} />
              { 'PRIVATE' }
            </div>
            <div className={CN('__side-bar-location', '-text')}>
              <Buildings size={20} /> { t(content?.location || '') }
            </div>
            <div className={CN('__side-bar-members', '-text')}>
              <Users size={20} /> {content.laboratoryDetail?.members.length || 0} {t('members')}
            </div>
          <ButtonShape backgroundColor={token.colorBgSecondary} label={t('More')} />
        </div>
        <div className={'__side-bar-right-group-button'}>
          {!(member && isJoinned) ? <div className={'__side-bar-right-join'}>
            <ButtonShape label={t('Join')}
                         onClick={onJoinLab}
                         backgroundColor={token.colorBgGreen1}
                         backgroundColorHover={token.colorBgGreen1}
                         colorTextChange={'white'}
                         color={'white'}
            />
          </div>
            :
            <div className={'__side-bar-right-quit'}>
          <ButtonShape label={t('Quit')}
                       onClick={onQuitLab}
                       backgroundColor={token.colorBgSecondary}
                       backgroundColorHover={token.colorBgSecondary}
                       colorTextChange={token.colorTextDark}
          />
        </div>
      }
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
