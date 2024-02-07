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


function RoboticIcon() {
  return null;
}

function Mechanical() {
  return null;
}

function MechanicalIcon() {
  return null;
}

function NetworkIcon() {
  return null;
}

function MultimediaIcon() {
  return null;
}

function SoftwareIcon() {
  return null;
}

function HardwareIcon() {
  return null;
}

function CommunicationIcon() {
  return null;
}

function ChemicalIcon() {
  return null;
}

function BiotechnologyIcon() {
  return null;
}

const Doc: ResearchType[] =[ {
  title: 'Robotics',
  subTitle: 'Mục tiêu của ngành Robotics là tạo ra các cỗ máy hiện đại, thông minh nhằm hỗ trợ các hoạt động công việc của con người.',
  image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_1_w.svg',
  link : '123',
  research : <RoboticIcon />,

  description : ' ',
  admin : 'Thien'
}, {  title: 'Mechanical',
  subTitle: ' Mechanical Engineer hiểu theo nghĩa đơn giản nhất chính là kỹ sư cơ khí hay kỹ sư thiết kế cơ khí.',
  link : '123',
  image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_2_w.svg',
  research :  <MechanicalIcon /> ,

  description : '',
  admin : 'Thien'},
  {  title: 'Network',
    subTitle: 'Công việc của network engineer bao gồm việc chịu trách nhiệm xây dựng, triển khai và thực hiện toàn bộ mạng máy tính trong các tổ chức, doanh nghiệp. ',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_3_w.svg',
    research : <NetworkIcon />,

    description : 'some thing like that',
    admin : 'Thien'},
  {  title: 'Automotive',
    subTitle: 'Sự ra đời của automotive là bước đệm cho sự chuyển mình của ngành công nghiệp sản xuất ô tô.',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_8_w.svg',
    research :  < AutomotiveIcon/> ,
    description : '',
    admin : 'Thien'} ,
  {  title: 'Software',
    subTitle: 'Kỹ thuật phần mềm (Software Engineering) là ngành chuyên nghiên cứu về quy trình, cách thức hoạt động, kiểm thử(testing) của các chương trình máy tính nhằm đáp ứng các nhu cầu của người dùng. ',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_6_w.svg',
    research :  <SoftwareIcon/> ,

    description : '',
    admin : 'Thien'},
  {  title: 'Hardware',
    subTitle: 'Hardware, hay còn gọi là phần cứng, liên quan đến việc thiết kế, chế tạo và sửa chữa các thành phần vật lý của máy tính.',
    link : '123',
    image:'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_5_w.svg',
    research :  < HardwareIcon/> ,

    description : '',
    admin : 'Thien'},
  {  title: 'AITechnology',
    subTitle: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_22_w.svg',
    link : '123',
    image:'Trí tuệ nhân tạo (AI) là lĩnh vực khoa học máy tính chuyên giải quyết các vấn đề nhận thức thường liên quan đến trí tuệ con người.',
    research :  < AITechnologyIcon/> ,

    description : '',
    admin : 'Thien'},
  {  title: 'Biotechnology',
    subTitle: 'Ngành Công nghệ Sinh học (Biotechnology) là một ngành học có sự kết hợp giữa Công nghệ hiện đại và Sinh học nhằm tạo ra các sản phẩm công nghệ được ứng dụng để giải quyết các vấn đề của cuộc sống. ',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_13_w.svg',
    research :  < BiotechnologyIcon/> ,

    description : '',
    admin : 'Thien'},
  {  title: 'Chemical',
    subTitle: 'Chuyên ngành Kỹ thuật hóa học chính là tập trung vào sản xuất nguyên liệu thô thành thành phẩm, ví dụ như năng lượng, quần áo và thực phẩm.',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_11_w.svg',
    research :  < ChemicalIcon/> ,

    description : '',
    admin : 'Thien'},
  {  title: 'Communication',
    subTitle: 'Kỹ thuật thông tin liên lạc là một ngành kỹ thuật tập trung vào kỹ thuật điện và máy tính, thuộc chuyên ngành cấp một của Kỹ thuật Thông tin và Truyền thông.',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_7_w.svg',
    research :  < CommunicationIcon/> ,

    description : '',
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
              {t('Robotics')}
              <Desktop weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={CN('_navigate-item', '-black-border')} onClick={scrollToBanner('banner-2')}>
              {t('Mechanical')}
              <Cpu weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={CN('_navigate-item', '-black-border')} onClick={scrollToBanner('banner-3')}>
              {t('Network')}
              <Atom weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-4')}>
              {t('Automotive')}
             <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-5')}>
              {t('Software')}
              <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-6')}>
              {t('Hardware')}
              <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-7')}>
              {t('AITechnology')}
              <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-8')}>
              {t('Biotechnology')}
              <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-9')}>
              {t('Chemical')}
              <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
            <div className={'_navigate-item'} onClick={scrollToBanner('banner-10')}>
              {t('Communication')}
              <Flask weight={'fill'} size={53} color={'#008482'} />
            </div>
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_1_w.svg'}
                    icon={<Desktop size={53} color={'#ffffff'} />}
                    label={'Robotics'}
                    id={'banner-1'}
                    description={'Mục tiêu của ngành Robotics là tạo ra các cỗ máy hiện đại, thông minh nhằm hỗ trợ các hoạt động công việc của con người.'}
            />
            <Collapse label={'Ranking 1st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 2st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 3st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 4st'} content={Doc} renderItem={renderItem} />
          </div>

          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_2_w.svg'}
                    icon={<Cpu size={53} color={'#ffffff'} />}
                    label={'Mechanical'}
                    id={'banner-2'}
                    description={'Mechanical Engineer hiểu theo nghĩa đơn giản nhất chính là kỹ sư cơ khí hay kỹ sư thiết kế cơ khí.'}
            />
            <Collapse label={'Ranking 1st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 2st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 3st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 4st'} content={Doc} renderItem={renderItem} />
          </div>

          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_3_w.svg'}
                    icon={<Atom size={53} color={'#ffffff'} />}
                    label={'Network'}
                    id={'banner-3'}
                    description={'Công việc của network engineer bao gồm việc chịu trách nhiệm xây dựng, triển khai và thực hiện toàn bộ mạng máy tính trong các tổ chức, doanh nghiệp.'}
            />
            <Collapse label={'Ranking 1st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 2st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 3st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 4st'} content={Doc} renderItem={renderItem} />
          </div>


          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_8_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'Automotive'}
                    id={'banner-4'}
                    description={'Sự ra đời của automotive là bước đệm cho sự chuyển mình của ngành công nghiệp sản xuất ô tô.'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_6_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'Software'}
                    id={'banner-5'}
                    description={'Kỹ thuật phần mềm (Software Engineering) là ngành chuyên nghiên cứu về quy trình, cách thức hoạt động, kiểm thử(testing) của các chương trình máy tính nhằm đáp ứng các nhu cầu của người dùng.'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_5_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'Hardware'}
                    id={'banner-6'}
                    description={'Hardware, hay còn gọi là phần cứng, liên quan đến việc thiết kế, chế tạo và sửa chữa các thành phần vật lý của máy tính.'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_22_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'AITechnology'}
                    id={'banner-7'}
                    description={'Trí tuệ nhân tạo (AI) là lĩnh vực khoa học máy tính chuyên giải quyết các vấn đề nhận thức thường liên quan đến trí tuệ con người.'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_13_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'Biotechnology'}
                    id={'banner-8'}
                    description={'Ngành Công nghệ Sinh học (Biotechnology) là một ngành học có sự kết hợp giữa Công nghệ hiện đại và Sinh học nhằm tạo ra các sản phẩm công nghệ được ứng dụng để giải quyết các vấn đề của cuộc sống.'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_11_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'Chemical'}
                    id={'banner-9'}
                    description={'Chuyên ngành Kỹ thuật hóa học chính là tập trung vào sản xuất nguyên liệu thô thành thành phẩm, ví dụ như năng lượng, quần áo và thực phẩm.'}
            />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
            <Collapse label={'something'} content={Doc} renderItem={renderItem} />
          </div>
          <div className={'_research-content-box'}>
            <Banner image={'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_7_w.svg'}
                    icon={<Flask size={53} color={'#ffffff'} />}
                    label={'Communication'}
                    id={'banner-10'}
                    description={'Kỹ thuật thông tin liên lạc là một ngành kỹ thuật tập trung vào kỹ thuật điện và máy tính, thuộc chuyên ngành cấp một của Kỹ thuật Thông tin và Truyền thông.'}
            />
            <Collapse label={'Ranking 1st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 2st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 3st'} content={Doc} renderItem={renderItem} />
            <Collapse label={'Ranking 4st'} content={Doc} renderItem={renderItem} />
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
    marginBottom: 400,
    '._research-wrap': {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 200,
      justifyContent: 'space-between'
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
