import {MemberType, ThemeProps} from "../../../../types";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../../../hook";
import {RoleEnum} from "../../../../constants/Role.constant";
import {MemberList} from "../../../../components/list/ListMember.component";
import {useCallback} from "react";
import {PostMember, PostMember_nonAnimation} from "../../../../components/postItem/PostItemMember.component";
import {fadeDown, fadeInRight, fadeStart, scaleButton} from "../../../../styles/styles.animation";
import {PostCardLaboratory_nonAnimation} from "../../../../components/postItem/PostCardLaboratory.component";


interface Props extends ThemeProps {};

const admin: MemberType[] = [{
  name: 'thien',
  role: RoleEnum.ADMIN,
  follow: [],
  image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
},
  {
    name: 'thien',
    role: RoleEnum.ADMIN,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.ADMIN,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  }]

const modder: MemberType[] = [{
  name: 'thien',
  role: RoleEnum.MODER,
  follow: [],
  image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
},
  {
    name: 'thien',
    role: RoleEnum.MODER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MODER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  }];


const member : MemberType[] = [{
  name: 'thien',
  role: RoleEnum.MEMBER,
  follow: [],
  image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien',
    role: RoleEnum.MEMBER,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  }

];



function Component ( { className } : Props ) {
  const { t } = useTranslation();

  const renderItem =  useCallback((content : MemberType)=>{
    return <PostMember content={content} />
  }, [])


  return (
    <div className={CN(className, '-mod-page')}>
      <h2 className={'__mod-page-label'}>
        {t('Members')} 59
      </h2>
      <div className={'__mod-wrap'}>
        <h4 className={'__mod-admin-label'}>
          {t('Admin')} 3
        </h4>
        <input type={'text'} className={'__mod-filter'} placeholder={`${t('Find a -mod')}`}/>
        <MemberList list={admin} renderItem={renderItem} />
      </div>
      <div className={'__mod-wrap'}>
        <h4 className={'__mod-moder-label'}>
          {t('Moder')} 23
        </h4>
        <input type={'text'} className={'__mod-filter'} placeholder={`${t('Find a -mod')}`}/>
        <MemberList list={modder} renderItem={renderItem} />
      </div>
      <div className={'__mod-wrap'}>
        <h4 className={'__mod-moder-label'}>
          {t('-mod')} 123
        </h4>
        <input type={'text'} className={'__mod-filter'} placeholder={`${t('Find a -mod')}`}/>
        <MemberList list={member} renderItem={renderItem} />
      </div>
    </div>
  )
}


export const MemberLaboratoryPartPage_nonAnimation = styled(Component)<Props>(({theme : {token}})=>{

  return({
    backgroundColor: 'white',
    width: '90%',
    margin: 'auto',
    padding: token.paddingMD,
    borderRadius: '10px 10px 0 0',

    '.__mod-filter': {
      width: '100%',
      height: 36,
      border: '3px solid',
      borderColor: token.colorBgSecondary,
      borderRadius: 30,
      paddingLeft: 30,
      transition: 'all .3s ease-in-out',
      fontSize: token.fontSizeSM,


      '&:focus': {
        outline: 'none'
      },

      '&:hover': {
        borderColor: token.colorBgGreen
      },
    },

    '.__mod-wrap': {
      width: '90%',
      margin: 'auto'
    }
  })

})


export const MemberLaboratoryPartPage = styled(MemberLaboratoryPartPage_nonAnimation)`
  animation: ${fadeStart} 1s ease-in-out ;
  
`
