import {ThemeProps, UserProfile} from "../../types";
import CN from "classnames";
import styled from "styled-components";
import {Outlet, Link} from "react-router-dom";
import {CommonProfilePart} from "./part/CommonProfile.part";
import {useTranslation} from "../../hook";
import {useParams} from "react-router";
import {HealthIcon, MedicalIcon} from "../../components/icon";
import React from "react";


interface Props extends ThemeProps {};


const content: UserProfile = {
  image : 'https://avatars.githubusercontent.com/u/139972251?s=400&v=4',
  name: 'Thiendekaco',
  location : '1 Đại Cồ Việt st, Hai Ba Trung',
  createAt : '06/10/2023',
  school : 'HUST',
  country : 'Hanoi, VietName',
  social : {
    facebook: 'ahsbdhabsdas.com',
    telegram: 'asbdhasbhasbd.com'
  },
  research : [{
    title: 'hahaha',
    subTitle: 'akakakaka',
    image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
    link : '123',
    research : <HealthIcon />,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that  sadhjasvcasv usa dugsav dusavdasdwfyv d a aysd gasygd sadasgdyasgd asdgyasgdyadhsada ',
    admin : 'Thien'
  }, {  title: 'hahaha',
    subTitle: 'akakakaka',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
    research : <> <HealthIcon /> <MedicalIcon /> </>,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that',
    admin : 'Thien'},
    {  title: 'hahaha',
      subTitle: 'akakakaka',
      link : '123',
      image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
      research : <> <HealthIcon /> <MedicalIcon /> </>,
      activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
      description : 'some thing like that',
      admin : 'Thien'}
  ],
  laboratory : [
    {
      image : 'https://i.stack.imgur.com/nxdU4.png',
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
      name: 'SEEE lab',
      location : '1 Đại Cồ Việt st, Hai Ba Trung',
      country: 'Viet Nam',
      activity : [{
        image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_9_en_orig.svg',
        value: 'Industry'
      }, {
        image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_4_en_orig.svg',
        value: 'Education'
      },
      ]
    },
  ]
}




function Component({ className } : Props){
  const { t } = useTranslation();
  const param = useParams();


  return(
    <div className={CN(className)}>
      <div className={'__profile-side-bar'}>
        <CommonProfilePart content={content} />
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

