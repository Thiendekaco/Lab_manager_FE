import {Theme, ThemeProps, LabMemberInterface, LaboratoryInterface} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {ButtonShape} from "../button/ButtonShape.component";
import {useTranslation} from "react-i18next";
import {LaboratoryList} from "../list/ListLaboratory.component";
import {useCallback, useEffect, useState} from "react";
import {PostLaboratoryMini} from "../postItem/PostItemLaboratoryMini.component";
import { RoleIcon} from "../../constants/Role.constant";
import {useSelector} from "react-redux";
import {selectMember} from "../../store/member/member.selector";


interface Props extends ThemeProps {

}


function Component ({className} : Props) {
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;
  const member = useSelector(selectMember)
  const [ currentLabList , setCurrentLablist ] = useState<LabMemberInterface[]>(member?.laboratories || [])

  useEffect(() => {
    setCurrentLablist(member?.laboratories || [])
  }, [member?.laboratories]);
  const renderItem = useCallback((content : LabMemberInterface | LaboratoryInterface)=>{

    return(
      <PostLaboratoryMini content={content}/>
    )
  },[]);
  return (
    <>
      <div className={CN(className)}>
        <div className={'__side-bar-left-profile'}>
          <div className={'__profile-logo'}>

          </div>
          <div className={'__profile-role'}>
            {t('Member')}{RoleIcon['member']}
          </div>
        </div>
        <ButtonShape label={t('Creat new Laboratory')} backgroundColorHover={token.colorBgRed} />
        <div className={'__side-bar-left-your-lab'}>
          <div className={'__your-lab-label'}>
            {t('Your Laboratory')}
          </div>
          <div className={'__your-lab-list'}>
            <LaboratoryList list={currentLabList} renderItem={renderItem} />
          </div>
        </div>
      </div>
    </>

  )
}



export const SideBarLeftPart = styled(Component)<Props> (({theme: {token}})=>{


  return ({
    display: 'flex',
    flexDirection: 'column',
    gap: token.paddingMD,
    borderTop: '2px solid #f5f5f5',
    paddingTop: 10,


    '.__side-bar-left-your-lab': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD
    },

    '.__your-lab-label': {
      fontWeight: token.fontWeightXS,
      marginLeft: token.margin
    },

    '.__side-bar-left-profile': {
      height: 200,
      width: '90%',
      backgroundColor: token.colorBgSecondary,
      margin: 'auto',
      borderRadius: 10
    },


    '.__profile-logo': {
      width: '90%',
      height: '50%'
    },

    '.__profile-role': {
      display: 'flex',
      margin : 'auto',
      width: 'fit-content'
    }

  })
})
