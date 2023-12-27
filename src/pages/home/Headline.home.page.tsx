import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import { PostItem} from "../../components/postItem/PostItem.component";
import {useTranslation} from "../../hook";
import {Button} from "../../components/button/button.component";
import {ArrowRight} from "phosphor-react";
import React from "react";
import {useNavigate} from "react-router";
import { ContentType } from "../../types";

interface Props extends ThemeProps{};



const data :  ContentType[] = [
  {
    title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
    badge : 'Information',
    link: '/',
    image : 'https://www.shibaura-it.ac.jp/assets/mele1128.jpg',
    createAt : '2023/12/06'
  },
  {
    title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
    badge : 'Information',
    link: '/',
    image : 'https://www.shibaura-it.ac.jp/assets/mele1128.jpg',
    createAt : '2023/12/06'
  },
  {
    title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
    badge : 'Information',
    link: '/',
    image : 'https://www.shibaura-it.ac.jp/assets/mele1128.jpg',
    createAt : '2023/12/06'
  },
  {
    title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
    badge : 'Information',
    link: '/',
    image : 'https://www.shibaura-it.ac.jp/assets/mele1128.jpg',
    createAt : '2023/12/06'
  },
]


function Component ({ theme, className}: Props){
  const { t } = useTranslation();
  const navigate = useNavigate();


  return(
    <div className={CN(className, '_headline_wrap')}>
      <div className={'_headline_label'}>
        <h2 className={'_headline_label'}>{t('News, Press Release')}</h2>
        <div className={'_headline_button_group'}>
          <p className={'_headline_supLabel'}>{t('More')}</p>
          <Button borderColor={"transparent"}
                  size={'md'}
                  isRadius={true}
                  onClick={()=>navigate('/heading')}
          />
        </div>
      </div>
      <div className={'_headline_list_news'}>
        {
          data.map((content, index)=><PostItem  key={index} content={content} className={CN({ '_last-box' : index + 1 === data.length })} />)
        }
      </div>
    </div>
  )
}



export const HeadlineHome = styled(Component)<Props>(({theme :{token}}: Props) => {
  return({
    '&._headline_wrap': {
      display: "flex",
    },

    '._headline_label': {
      display: "flex",
      flex: '0 1 25%',
      flexDirection: 'column',
      justifyContent: 'center',
      '._headline_button_group': {
        display: "flex",
        justifyContent: "flex-start",
        gap: token.paddingMD,
        '._headline_supLabel':{
          fontWeight: token.fontWeightXS
        }
      },

      '._headline_label': {
        fontSize: token.fontSizeMD,
      },
    },

    '._headline_list_news':{
      display: "flex",
      flex: '0 1 70%',
      flexDirection: 'column'
    },

  })
})

