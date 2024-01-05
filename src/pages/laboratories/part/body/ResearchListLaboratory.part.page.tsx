import {ResearchType, ThemeProps} from "../../../../types";
import styled from "styled-components";
import {AutomotiveIcon, HealthIcon, MedicalIcon} from "../../../../components/icon";
import React, {useCallback} from "react";
import { PostCardLaboratory } from "../../../../components/postItem/PostCardLaboratory.component";
import CN from "classnames";
import {ResearchLaboratoryList} from "../../../../components/list/ListResearchLaboratory.component";


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
    admin : 'Thien'
  }]



function Component ( { className } : Props ) {

  const renderItem = useCallback((content : ResearchType)=>{
    return <PostCardLaboratory content={content} />
  },[])

  return (
    <div className={CN(className)}>
      <ResearchLaboratoryList list={Doc} renderItem={renderItem} />
    </div>
  )
}


export const ResearchListLaboratoryPartPage = styled(Component)<Props>(()=>{

  return({
    scrollBehavior: 'smooth'
  })

})
