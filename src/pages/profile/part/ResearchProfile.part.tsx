import {LaboratoryType, ResearchType, ThemeProps} from "../../../types";
import CN from "classnames";
import styled from "styled-components";
import {PostProfileResearch} from "../../../components/postItem/PostItemProfileResearch.component";
import {HealthIcon, MedicalIcon} from "../../../components/icon";
import React from "react";


interface Props extends ThemeProps {

};



const content: ResearchType[] = [{
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
    admin : 'Thien'}]

function Component({ className } : Props){


  return(
    <div className={CN(className)}>
      { content.map((content, index)=>{
        return(
          <div key={index} className={'__research-profile-item'}>
            <PostProfileResearch content={content} />
          </div>
        )
      }) }
    </div>
  )
}


export const ResearchProfilePart = styled(Component)<Props>(({ theme: {token}})=>{


  return({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: token.paddingMD,
      '.__research-profile-item': {
          flex: '1 1 490px'
      }

  })
})

