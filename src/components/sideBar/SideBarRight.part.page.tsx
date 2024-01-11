import {LaboratoryType, Theme, ThemeProps} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {ButtonShape} from "../button/ButtonShape.component";
import {useTranslation} from "react-i18next";
import {LaboratoryList} from "../list/ListLaboratory.component";
import {useCallback} from "react";
import {PostLaboratoryMini} from "../postItem/PostItemLaboratoryMini.component";
import { RoleIcon} from "../../constants/Role.constant";


interface Props extends ThemeProps {

}


const doc : LaboratoryType[] = [
  {
    image : 'https://i.stack.imgur.com/OTS4d.png?s=128',
    status : 'private',
    name: 'SEEE lab',
    location : '1 Đại Cồ Việt st, Hai Ba Trung',
    country: 'Viet Nam',
    activity : [{
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_9_en_orig.svg',
      value: 'Industry'
    }, {
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_4_en_orig.svg',
      value: 'Education'
    }]
  },
  {
    image : 'https://i.stack.imgur.com/nxdU4.png',
    status : 'private',
    name: 'Hust lab',
    location : '1 Đại Cồ Việt st, Hai Ba Trung',
    country: 'Viet Nam',
    activity : [{
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_9_en_orig.svg',
      value: 'Industry'
    }, {
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_4_en_orig.svg',
      value: 'Education'
    }]
  },
  {
    image : 'https://i.stack.imgur.com/nxdU4.png',
    status : 'private',
    name: 'jasbdhasbd lab',
    location : '1 Đại Cồ Việt st, Hai Ba Trung',
    country: 'Viet Nam',
    activity : [{
      image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_9_en_orig.svg',
      value: 'Industry'
    }]
  },
]


function Component ({className} : Props) {
  const { t } = useTranslation();
  const { token } = useTheme() as Theme;




  const renderItem = useCallback((content : LaboratoryType)=>{

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
            <LaboratoryList list={doc} renderItem={renderItem} />
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
