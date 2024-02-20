import {MemberLabInterface, MemberType, PostOfMemberInterface, ResearchType, ThemeProps} from "../../../../types";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../../../hook";
import { RoleEnum } from "../../../../types";
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
import {ResearchLaboratoryList} from "../../../../components/list/ListResearchLaboratory.component";
import {useDispatch, useSelector} from "react-redux";
import {selectMemberPending, selectResearchPending} from "../../../../store/laboratory/laboratory.selector";


interface Props extends ThemeProps {};










function Component ( { className } : Props ) {
  const { t } = useTranslation();
  const listMember_ = useSelector(selectMemberPending);
  const listResearch_ = useSelector(selectResearchPending);
  const [ listMember, setListMember ] = useState<MemberLabInterface[]>(listMember_)
  const [ listResearch, setlistResearch ] = useState<PostOfMemberInterface[]>(listResearch_);



  const handleListModMember = useCallback((nameItem : string)=>{
    setListMember(listMember.filter(({name}) => name !== nameItem))
  }, [listMember])

  const handleListModResearch = useCallback((nameItem : string)=>{
    setlistResearch(listResearch.filter(({title}) => title !== nameItem))
  }, [listResearch])


  const renderItemMember =  useCallback((content : MemberLabInterface)=>{
    return <PostModMember content={content}
                  footer={<ModAction
                      nameFilter={content.name || content.user?.email || ''}
                     onNext={handleListModMember}
                     onDeny={handleListModMember}
                     onAccept={handleListModMember} /> }
    />
  }, [handleListModMember])

  const renderItemResearch = useCallback((content : PostOfMemberInterface)=>{
    return <PostCardLaboratory content={content}
                  footer={<ModAction
                    nameFilter={content.title || ''}
                    onNext={handleListModResearch}
                    onDeny={handleListModResearch}
                    onAccept={handleListModResearch} /> }
    />
  }, [handleListModResearch])




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
