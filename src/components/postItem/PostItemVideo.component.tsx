import { ContentType, ThemeProps } from "../../types";
import CN from "classnames";
import {Button} from "../button/button.component";
import React from "react";
import styled from "styled-components";
import {ArrowRight, CaretRight} from "phosphor-react";


interface Props extends ThemeProps {
  content : ContentType;
}


function Component ( props : Props){
  const { content , className } = props;


  return(
    <div className={CN(className)}>
      <div className={'_post-item-video-body'}>
        <div className={'_post-item-video'}>
          <img src={content.image} alt={content.image} />
        </div>
        <div className={'_post-item-button'}>
          <Button borderColor={"transparent"}
                  size={'lg'}
                  isRadius={true}
                  icon={<div className={'_button-icon'} > <CaretRight className={'_option-icon'} weight={"fill"} size={25} color={'#000000'} /> </div> }
                  backgroundColor={'white'}
                  onClick={()=>window.open('https://www.youtube.com/watch?v=cDHkPfzzQlw')}
          />
        </div>
      </div>
      <div className={'_post-item-video-footer'}>
        { content.title }
      </div>

    </div>


  )

}


export const PostItemVideo =styled(Component)<Props>(({theme: {token}})=> {

  return ({
    height: "auto",
    border: '1px solid transparent',
    position: "relative",
    borderRadius: 10,
    display: 'flex',
    zIndex: 0,
    flexDirection: 'column',
    backgroundColor: "#ffffff",
    marginTop: 200,

    '._post-item-video': {
      height: '100%',
      position: 'relative',
      objectFit: 'cover',
      width: '100%',
      overflow: 'hidden',
      transition: 'transform .5s ',
      transform: 'scaleX(1.1)',
      img: {
        marginTop: -50,
        clipPath: 'polygon(100% 100%, 100% 0, 100% 20%, 0 20%, 0 80%, 100% 80%, 100% 100%, 0 100%)'
      }
    },

    '._post-item-button': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: "center",
      alignItems: 'center',
      display: 'flex'
    },

    '._post-item-video-body': {
      display: "flex",
      flex: '0 1 30%',
      overflow: "hidden"
    },

    '._post-item-video-footer': {
      fontSize: token.fontSize,
      color: token.colorTextSecondary,
      marginTop: -50,
      marginBottom: 50,
      textAlign: 'center',
    },

    '&:hover ._post-item-video':{
        transform: 'scale(1.3)'
    }

  });
})
