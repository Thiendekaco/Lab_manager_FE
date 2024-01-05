import {MemberType, ResearchType, ThemeProps} from "../../../../types";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../../../hook";
import {RoleEnum} from "../../../../constants/Role.constant";
import {MemberList} from "../../../../components/list/ListMember.component";
import React, {useCallback, useEffect, useState} from "react";
import {PostMember, PostMember_nonAnimation} from "../../../../components/postItem/PostItemMember.component";
import {fadeDown, fadeInRight, fadeStart, scaleButton} from "../../../../styles/styles.animation";
import {
  PostCardLaboratory,
  PostCardLaboratory_nonAnimation
} from "../../../../components/postItem/PostCardLaboratory.component";
import {PostModMember} from "../../../../components/postItem/PostModMember.component";
import {ifError} from "assert";
import {AutomotiveIcon, HealthIcon, MedicalIcon} from "../../../../components/icon";
import {ModAction} from "../../../../components/reaction/ModAction.component";
import {PostItemResearch} from "../../../../components/postItem/PostItemResearch.component";
import {PostItemCard} from "../../../../components/postItem/PostItemCard.component";
import {ResearchListLaboratoryPartPage} from "./ResearchListLaboratory.part.page";
import {ResearchLaboratoryList} from "../../../../components/list/ListResearchLaboratory.component";


interface Props extends ThemeProps {};

const admin: MemberType[] = [{
  name: 'thien1',
  role: RoleEnum.ADMIN,
  follow: [],
  image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
},
  {
    name: 'thien2',
    role: RoleEnum.ADMIN,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  },
  {
    name: 'thien3',
    role: RoleEnum.ADMIN,
    follow: [],
    image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
  }]

const Doc: ResearchType[] =[
  {
    title: 'hahaha1',
    subTitle: 'akakakaka',
    image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
    link : '123',
    research : <HealthIcon />,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that  sadhjasvcasv usa dugsav dusavdasdwfyv d a aysd gasygd sadasgdyasgd asdgyasgdyadhsada ',
    admin : 'Thien'
  }, {  title: 'hahaha2',
    subTitle: 'akakakaka',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
    research : <> <HealthIcon /> <MedicalIcon /> </>,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that',
    admin : 'Thien'
  },
  {  title: 'hahaha3',
    subTitle: 'akakakaka',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
    research : <HealthIcon />,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that',
    admin : 'Thien'
  },
  {  title: 'hahaha4',
    subTitle: 'akakakaka',
    link : '123',
    research : <> <HealthIcon /> < AutomotiveIcon/> <MedicalIcon /> </>,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that',
    admin : 'Thien'
  }]






function Component ( { className } : Props ) {
  const { t } = useTranslation();
  const [ listMember, setListMember ] = useState<MemberType[]>(admin)
  const [ listResearch, setlistResearch ] = useState<ResearchType[]>(Doc);

  const handleListModMember = useCallback((nameItem : string)=>{
    setListMember(listMember.filter(({name}) => name !== nameItem))
  }, [listMember])

  const handleListModResearch = useCallback((nameItem : string)=>{
    setlistResearch(listResearch.filter(({title}) => title !== nameItem))
  }, [listResearch])

  useEffect(() => {
    if(listMember.length !== 3){
      setListMember([...listMember,{
        name: `thien!${Date.now()}`,
        role: RoleEnum.MEMBER,
        follow: [],
        image: 'https://i.stack.imgur.com/OTS4d.png?s=128'
      }])
    }
  }, [listMember]);

  useEffect(() => {
    if(listResearch.length !== 4){
      setlistResearch([...listResearch,{  title: 'hahaha',
        subTitle: `${Date.now()}`,
        link : '123',
        research : <> <HealthIcon /> < AutomotiveIcon/> <MedicalIcon /> </>,
        activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
        description : 'some thing like that',
        admin : 'Thien'
      }])
    }
  },  [listResearch]);


  const renderItemMember =  useCallback((content : MemberType)=>{
    return <PostModMember content={content}
                          footer={<ModAction
                              nameFilter={content.name}
                             onNext={handleListModMember}
                             onDeny={handleListModMember}
                             onAccept={handleListModMember} /> }
    />
  }, [handleListModMember])

  const renderItemResearch = useCallback((content : ResearchType)=>{
    return <PostCardLaboratory content={content}
                          footer={<ModAction
                            nameFilter={content.title || ''}
                            onNext={handleListModResearch}
                            onDeny={handleListModResearch}
                            onAccept={handleListModResearch} /> }
    />
  }, [handleListModMember])




  return (
    <div className={CN(className, 'mod-page')}>
      <h2 className={'__mod-page-label'}>
        {t('Mod Members')} 59
      </h2>
      <div className={'__mod-wrap'}>
        <h4 className={'__mod-admin-label'}>
          {t('Admin')} 3
        </h4>
        <MemberList list={listMember} renderItem={renderItemMember} />
      </div>
      <div className={'__mod-wrap'}>
        <h4 className={'__mod-moder-label'}>
          {t('Research')}
        </h4>
        <ResearchLaboratoryList renderItem={renderItemResearch} list={listResearch}/>
      </div>
    </div>
  )
}


export const ModLaboratoryPartPage_nonAnimation = styled(Component)<Props>(({theme : {token}})=>{

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


export const ModLaboratoryPartPage = styled(ModLaboratoryPartPage_nonAnimation)`
  animation: ${fadeStart} 1s ease-in-out ;
  
`
