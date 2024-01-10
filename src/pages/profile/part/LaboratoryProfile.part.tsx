import {LaboratoryType, ThemeProps} from "../../../types";
import CN from "classnames";
import styled from "styled-components";
import {LaboratoryList} from "../../../components/list/ListLaboratory.component";
import {useCallback} from "react";
import {PostLaboratory} from "../../../components/postItem/PostItemLaboratory.component";



interface Props extends ThemeProps {};

const content : LaboratoryType[] = [
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
  }
]



function Component({ className } : Props){



  const renderItem = useCallback((content : LaboratoryType)=>{

    return(
      <PostLaboratory content={content}/>
    )
  },[]);



  return(
    <div className={CN(className)}>
      <LaboratoryList list={content} renderItem={renderItem} />
    </div>
  )
}


export const LaboratoryProfilePart = styled(Component)<Props>(()=>{


  return({


  })
})

