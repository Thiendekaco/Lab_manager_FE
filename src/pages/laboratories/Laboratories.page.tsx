import {ActivityInterface, LabMemberInterface, LaboratoryInterface, ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import {BannerHeader} from "../../components/banner/BannerHeader.component";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {PostLaboratory} from "../../components/postItem/PostItemLaboratory.component";
import {LaboratoryList} from "../../components/list/ListLaboratory.component";
import {SideBar} from "../../components/sideBar/SideBar.component";
import {useTranslation} from "../../hook";
import {Badge} from "../../components/badge/Badge.component";
import { useSelector } from "react-redux";
import { selectListLab } from "../../store/laboratories/laboratories.selector";

interface Props extends ThemeProps {

}


const activityList : ActivityInterface[] = [{
  image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_9_en_orig.svg',
  value: 'Industry'
}, {
  image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_4_en_orig.svg',
  value: 'Education'
}];


function Component ( { className } : Props){
  const listLabFetch = useSelector(selectListLab);
  const [ listLab, setListLab ] = useState<LaboratoryInterface[]>(listLabFetch);
  const [ filterValue, setFilterValue ] = useState('');
  const [ statusValue, setStatusValue ] = useState<'private'| 'public' | 'all'>('all');
  const [ activityValue, setActivityValue ] = useState('all');
  const { t } = useTranslation();

  useEffect(() => {
    setListLab(listLabFetch)
  }, [listLabFetch]);

  const onFilterLab = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
    setFilterValue(e.target.value);
  },[]);

  const onFilterStatus = useCallback((e: ChangeEvent<HTMLSelectElement>)=>{
    setStatusValue(e.target.value as ('private'| 'public' | 'all'));
  },[]);

  const onFilterActivity = useCallback((e: ChangeEvent<HTMLSelectElement>)=>{
    setActivityValue(e.target.value);
  },[]);

  useEffect(() => {
   let _doc = listLab.filter(({country, location, nameLab})=>
     nameLab.toLowerCase().includes(filterValue.toLowerCase()) ||
      location?.toLowerCase().includes(filterValue.toLowerCase()) ||
      country?.toLowerCase().includes(filterValue.toLowerCase())
    );


   setListLab(_doc);
  }, [activityValue, filterValue, listLab, statusValue]);

  const renderItem = useCallback((content : LaboratoryInterface | LabMemberInterface)=>{

    return(
      <PostLaboratory content={content}/>
    )
  },[]);

  return(
    <div className={CN(className)}>
      <BannerHeader image={'https://www.shibaura-it.ac.jp/assets/img/pages/en/academics/kv_img.png'} label={'Laboratory'}/>
      <div className={'__Laboratories-body'}>
        <div className={'__Laboratories-content'}>
          <div className={'__Laboratories-filter'}>
            <input type={'text'} value={filterValue} className={'__filter-search'} onChange={(e) => onFilterLab(e)}/>
            <select  value={statusValue} className={'__filter-status'} onChange={(e)=>onFilterStatus(e)}>
              <option value={'all'}>{t('All')}</option>
              <option value={'private'}>{t('Private')}</option>
              <option value={'public'}>{t('Public')}</option>
            </select>
            <select value={activityValue} className={'__filter-activity'} onChange={(e)=>onFilterActivity(e)}>
              <option value={'all'}>{t('All')}</option>
              {
                activityList.map((ac, index)=> (
                  <option value={ac.value} key={index}>
                    {ac.value}
                  </option> ))
              }
            </select>
          </div>
          <div className={'__filter-value'}>
            <Badge content={activityValue} />
            <Badge content={statusValue} />
          </div>
          <LaboratoryList list={listLab} renderItem={renderItem} />
        </div>

        <SideBar />
      </div>
    </div>
  )
}


export const LaboratoriesPage = styled(Component)<Props>(({ theme: {token}})=>{


  return({

    paddingLeft: token.paddingXS,
    marginBottom: 400,
    marginTop: 330,

    '.__Laboratories-body':{
      display: 'flex',
      marginTop: token.marginXS,
      justifyContent: 'space-between',
    },

    '.__Laboratories-content': {
      display: "flex",
      flexDirection: 'column',
      flex: '0 1 70%',
      gap: token.paddingLG
    },

    '.__filter-search': {
      width: '70%',
      height: 60,
      border: '3px solid',
      borderColor: token.colorBgSecondary,
      borderRadius: 10,
      paddingLeft: 30,
      transition: 'all .3s ease-in-out',
      fontSize: token.fontSize,


      '&:focus': {
        outline: 'none'
      },

      '&:hover': {
        borderColor: token.colorBgGreen
      }
    },

    '.__filter-value': {
      display: 'flex',
      gap: token.padding,
    },

    '.__filter-status, .__filter-activity': {
      width: '10%',
      height: 60,
      backgroundColor: token.colorBgSecondary,
      borderRadius: 10,
      fontSize: token.fontSizeSM,
      paddingLeft: token.paddingMD,
      borderColor: 'transparent'
    },

    '.__Laboratories-filter':{
      display: 'flex',
      justifyContent: 'space-around'
    }

  })

})
