import {ResearchType, ThemeProps} from "../../types";
import styled from "styled-components";
import {Collapse} from "../../components/collapse/Collapse.component";
import React, {useCallback, useEffect, useState} from "react";
import {PostItemResearch, PostItemResearch_nonAnimation} from "../../components/postItem/PostItemResearch.component";
import { HealthIcon, MedicalIcon, AutomotiveIcon } from "../../components/icon";
import CN from "classnames";
import {useTranslation} from "../../hook";
import { Desktop, Cpu, Flask  , Atom   } from "phosphor-react";
import {Banner} from "../../components/banner/Banner.component";
import {SideBar} from "../../components/sideBar/SideBar.component";
interface Props extends ThemeProps {};


const Doc: ResearchType[] =[ {
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
    research : <HealthIcon />,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that',
    admin : 'Thien'},
  {  title: 'hahaha',
    subTitle: 'akakakaka',
    link : '123',
    research : <> <HealthIcon /> < AutomotiveIcon/> <MedicalIcon /> </>,
    activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
    description : 'some thing like that',
    admin : 'Thien'}]



function Component (props : Props) {
  const { className } = props;
  const { t } = useTranslation();
  const renderItem = useCallback(( c : ResearchType)=>{
   return <PostItemResearch content={c} />
  },[])
  const [ bannerId , setBannerId ] = useState('');

  const scrollToBanner = useCallback((idBanner: string)=>{

    return ()=> {
        setBannerId(idBanner)
    }
  },[])

  useEffect(() => {
    if(bannerId === '') return;
    const parentElement = document.querySelector('.research-page');
    const banner = parentElement?.querySelector(`#${bannerId}`);
    banner?.scrollIntoView({ behavior: 'smooth'});
  }, [bannerId]);



  return(
    <div className={CN(className, 'research-page')}>
      <h1>{ t('Laboratory')}</h1>
      <div className={'_research-wrap'}>
        <div className={'_research-content'} >
          <div className={'_navigate-box'}>
            <div className={CN('_navigate-item', '-black-border')} onClick={scrollToBanner('banner-1')}>
              {t('College of Engineering')}
              <Desktop weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={CN('_navigate-item', '-black-border')} onClick={scrollToBanner('banner-2')}>
              {t('College of Systems Engineering and Science ')}
              <Cpu weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={CN('_navigate-item', '-black-border')} onClick={scrollToBanner('banner-3')}>
              {t('College of Engineering and Design')}
              <Atom weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-4')}>
              {t('School of Architecture')}
             <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'\thttps://www.shibaura-it.ac.jp/assets/img/pages/research/search/s1_ttl_bg.jpg'}
                    icon={<Desktop size={53} color={'#ffffff'} />}
                    label={'College of Engineering'}
                    id={'banner-1'}
                    description={'dhausgdysahduhsauhd uahsduhashd uashdhuahsud'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>

          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/pages/research/search/s2_ttl_bg.jpg'}
                    icon={<Cpu size={53} color={'#ffffff'} />}
                    label={'College of Engineering and Design'}
                    id={'banner-2'}
                    description={'dhausgdysahduhsauhd uahsduhashd uashdhuahsud'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>

          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/pages/research/search/s3_ttl_bg.jpg'}
                    icon={<Atom size={53} color={'#ffffff'} />}
                    label={'College of Engineering'}
                    id={'banner-3'}
                    description={'dhausgdysahduhsauhd uahsduhashd uashdhuahsud'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>


          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/pages/research/search/s4_ttl_bg.jpg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'School of Architecture'}
                    id={'banner-4'}
                    description={'dhausgdysahduhsauhd uahsduhashd uashdhuahsud'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>

        </div>
        <SideBar />
      </div>

    </div>

  )


}




export const ResearchPage = styled(Component)<Props>(({theme : {token}})=>{


  return ({
    paddingLeft: token.paddingXS,

    '._research-wrap': {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: token.marginXS
    },


    '._research-content': {
      display: 'flex',
      flexDirection: "column",
      flex: '0 1 70%',
      gap: token.paddingXS
    },

    '._navigate-box': {
      height: 215,
      display: 'flex',
      width: '100%',
      gap: token.paddingSM,
      padding: 20,
      borderRadius: 10,
      backgroundColor: token.colorBgSecondary,
    },

    '._navigate-item': {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      cursor: 'pointer',
      alignItems: 'center',
      padding: '10px 20px ',
      justifyContent: 'space-between',
      transition: 'color .3s ease-in-out',


      '&:hover': {
        color : '#008482'
      }
    },

    '._navigate-item.-black-border': {
      borderRight: '1px solid',
      borderColor: '#e1e1e1'
    },


    '._research-content-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingMD
    }


  })
})
