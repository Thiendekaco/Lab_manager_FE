import {ResearchType, ThemeProps, UserProfile} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import {HealthIcon} from "../../components/icon";
import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {SideBar} from "../../components/sideBar/SideBar.component";
import {useParams} from "react-router";
import {PostProfileUser} from "../../components/postItem/PostItemProfileUser.component";
import EasyMDE from "easymde";

interface Props extends ThemeProps {};

const content : ResearchType = {
  title: 'hahaha',
  subTitle: 'akakakaka',
  link : '123',
  image: 'https://www.shibaura-it.ac.jp/faculty/laboratory/img/thumbnail/tn_7d5bf6596da27b4a632d1d313d3c4f29_lab_img_1.jpg',
  research : <HealthIcon />,
  activity: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_sdgs_3_orig.svg',
  description : 'some thing like that',
  admin : 'Thien',
  laboratory : {
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
}

const user: UserProfile = {
  image : 'https://avatars.githubusercontent.com/u/139972251?s=400&v=4',
  name: 'Thiendekaco',
  location : '1 Đại Cồ Việt st, Hai Ba Trung',
  createAt : '06/10/2023',
  school : 'HUST',
  country : 'Hanoi, VietName',
  social : {
    facebook: 'ahsbdhabsdas.com',
    telegram: 'asbdhasbhasbd.com'
  }
}







function Component({ className } : Props){
  const { research } = useParams();
  const [value, setValue] = useState("Initial value");
  const [ easyMD, setEasyMD ] = useState<EasyMDE>()

  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  useEffect(() => {
    const parentElement = document.querySelector(`.research-wrapper`);
    const editorElement = parentElement?.querySelector('.__research-content-editor');
    if (!editorElement){
      return;
    }
    const easyMDE = new EasyMDE({element: editorElement as HTMLElement, uploadImage: true});
    setEasyMD(easyMDE)
  }, []);


  return(
    <div className={CN(className, 'research-wrapper')} >
      <div className={'__research-content'}>
        <textarea className={'__research-content-editor'} value={value}  />;
        <div className={'__research-author'}>
        <PostProfileUser content={user} />
        </div>
        <div className={'__research-laboratory'}>

        </div>
        <div className={'__research-field'}>

        </div>
      </div>
      <SideBar />
    </div>
  )
}


export const ResearchDetailPage = styled(Component)(({theme: {token}})=>{


  return({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 200,
    padding: token.paddingXS,

    '.__research-content': {
      display: 'flex',
      flexDirection : 'column',

    }
  })
})
