import {ContentType, ThemeProps} from "../../types";
import  CN  from 'classnames';
import styled from "styled-components";
import {useTranslation} from "../../hook";
import {Button} from "../button/Button.component";
import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import {fadeRight} from "../../styles/styles.animation";
import {PostItemFooter} from "../postItem/PostItemFooter.component";
import {scrollTrigger} from "../../styles/obser.animation";

interface Props extends ThemeProps {
  route : string,
  label : string,
  description: string,
  image: string,
  footer?: ContentType[]
};



function Component  ( props : Props) {
  const { className, route, description, label, image, footer} = props;
  const { t } = useTranslation();
  const navigate = useNavigate();


  useEffect(() => {
    scrollTrigger('._introduce-body', {})
  }, []);

  return(
    <div className={CN(className)}>
      <div className={'_introduce-body'}>
        <div className={'_introduction-board'}>
          <h1 className={'_introduction-label'}>
            {t(label)}
          </h1>
          <div className={'_introduction-description'}>
            {t(description)}
          </div>
          <div className={'_group-button'}>
            <h2 className={CN('_group_button_supLabel')}>{t('More')}</h2>
            <Button borderColor={"transparent"}
                    size={'lg'}
                    isRadius={true}
                    onClick={()=>navigate('/heading')}
            />
          </div>
        </div>
        <div className={'_introduction-photo'} />
      </div>
      <div className={'_introduce-footer'}>
        {
          footer?.map(({link, title}, index) => (
              <PostItemFooter content={{ link , title}} key={index}/>
          ))
        }
      </div>
    </div>
  )

}


const Introduction_nonAnimation = styled(Component)<Props>(({image, theme: {token}})=>{


  return({
    width: '110%',
    height: 1000,
    position: 'relative',
    zIndex: 0,
    marginBottom: 200,
    '._introduce-body': {
      width: '100%',
      height: '80%',
      marginLeft: '-100px',
    },

    '._introduction-board':{
      position: 'absolute',
      zIndex: 1,
      display: "flex",
      flexDirection: 'column',
      width: 700,
      height: '80%',
      borderRadius: '0 30px 30px 0',
      background: 'linear-gradient(90deg, #008482 20%, rgba(0, 132, 130, 0.5046393557) 100%)',
      transition: 'transform 1s cubic-bezier(0.65, 0, 0.35, 1)',
      paddingLeft: token.paddingXS,
      justifyContent: "center"
    },

    '._introduction-photo':{
      display: 'flex',
      width: '100%',
      height: '100%',
      maskImage: 'linear-gradient(90deg, black 0%, black 50%, rgba(0, 0, 0, 0) 100%)',
      maskRepeat: 'no-repeat',
      transition: 'mask-size 2s',
      maskSize: '100%',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },


    '._introduction-label': {
      color: token.colorTextLight,
      fontWeight: token.fontWeightLG,
      fontSize: token.fontSizeLG
    },

    '._introduction-description':{
      color: token.colorTextLight,
      lineHeight: '45px',
      fontSize: token.fontSize
    },

    '._group-button': {
      display: "flex",
      gap: token.marginMD,
      alignItems: 'center',
      marginTop: token.marginXS,
      color: token.colorTextLight
    },

    '._introduce-footer': {
      display: 'flex',
      width: '90%',
      margin: 'auto',
      justifyContent: "space-around",
      gap: token.marginXS,
      paddingTop: token.paddingMD,
      marginLeft: -50,
      marginTop: token.marginLG,
      flexWrap: 'wrap'

    }

  });
})


export const Introduction = styled(Introduction_nonAnimation)`

  .active {
    ._introduction-board {
      animation: ${fadeRight} 1s cubic-bezier(0.65, 0, 0.35, 1);
    },

  ._introduction-photo {
    animation: ${fadeRight} 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  }
    
  }
  
`
