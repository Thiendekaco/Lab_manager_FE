import {Member, ResearchType, SocialProfile, ThemeProps, UserProfile} from "../../../types";
import CN from "classnames";
import styled from "styled-components";
import { useTranslation } from "../../../hook";
import {ProfileEdit} from "../../../components/edit/ProfileEdit.component";
import {useParams} from "react-router";

interface Props extends ThemeProps {
  content : Member;
};





function Component ( { className, content } : Props) {
  const { t } = useTranslation();
  const { logo, name,  laboratories} = content;
 const { user } = useParams();

  return (
    <div className={CN(className)}>
      <div className={'__profile-user-image'}>
        <img src={logo} alt={logo}/>
      </div>
      <div className={'__profile-edit'}>
        <ProfileEdit content={content} isShowEdit={ user === 'myProfile' }/>
      </div>
      <hr className={'__profile-hr'}/>
      <div className={'__profile-laboratory-icon-group'}>
        <h2>{t('Laboratories')}</h2>
        {
          laboratories?.map((value, index)=>
            <img className={'__profile-laboratory-icon-map'}
                  src={value.logo || ''}
                 alt={value.logo || ''}
                 key={index}
            />)
        }
      </div>
    </div>
  )
}


export const CommonProfilePart = styled(Component)<Props>(({theme: {token}})=>{

  return({
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 290px',
    marginBottom: token.marginXS,

    '.__profile-user-image': {
      height: 'auto',
      width: '100%',


      'img': {
        height : '100%',
        width : '100%',
        borderRadius: '50%',
        borderColor: token.colorBgSecondary,
        border: '4px solid',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      }
    },

    '.__profile-hr': {
      width: '100%',
      marginTop: token.marginXS,
      height: 3,
      backgroundColor: '#d0d7de'
    },

    '.__profile-laboratory-icon-map': {
      width: 90,
      marginRight: 10,
      height: 90,
      padding: 10,
      cursor: 'pointer',
      border: '2px solid #d0d7de',
      borderRadius: 20,
      transition: 'all .5s ease-in-out',

      '&:hover': {
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      }
    }
  })
})
