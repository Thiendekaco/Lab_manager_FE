import {Theme, ThemeProps} from "../../types";
import { useTranslation } from "../../hook";
import { ScreenContext } from "../../context/Screen.context";
import styled, {useTheme} from "styled-components";
import { urlYtbHome } from "../../constants/Url.constant";
import CN from "classnames";
import React, {useCallback, useContext, useState} from "react";
import {Button} from "../../components/button/Button.component";
import {Carousel} from "../../components/carousel/Carousel.component";
import { ContentType } from "../../types";
import {ArrowLeft, ArrowRight} from "phosphor-react";
import {HeadlineHome} from "./Headline.home.page";
import {PostItemCard} from "../../components/postItem/PostItemCard.component";
import {useNavigate} from "react-router";
import {Introduction} from "../../components/page-introduction/Introduce.component";
import {Empty} from "../../components/empty/Empty.component";
import {PostItemVideo} from "../../components/postItem/PostItemVideo.component";


interface Props extends ThemeProps {}


function Component({theme, className} : Props) {
  const { isWebUI } = useContext(ScreenContext);
  const {t} = useTranslation();
  const [ turnLeftImage, setTurnLeftImage ] = useState(false);
  const [ turnRightImage, setTurnRightImage ] = useState(false);
  const [ turnLeftPostCard, setTurnLeftPostCard ] = useState(false);
  const [ turnRightPostCard, setTurnRightPostCard ] = useState(false);
  const { token } = useTheme() as Theme;

  const navigate = useNavigate();

  const onClickToTurnRightImg = useCallback(()=>{
    setTurnRightImage(true);
  }, []);

  const onClickToTurnLeftImg = useCallback(()=>{
    setTurnLeftImage(true);
  }, []);

  const onClickToTurnRightPostCard = useCallback(()=>{
    setTurnRightPostCard(true);
  }, []);

  const onClickToTurnLeftPostCard = useCallback(()=>{
    setTurnLeftPostCard(true);
  }, []);
  const renderItemImage = useCallback((content : ContentType, className : string)=>{

    return(
      <img className={className} src={content.image} width={350} height={200} alt={content.image} />
    )
  },[])

  const renderItemPost = useCallback((content : ContentType, className : string) => {
    return(
      <PostItemCard className={className} content={content} />
    )
  },[])

  const renderItemVideo = useCallback((content : ContentType, className : string) => {
    return(
      <PostItemVideo content={content} className={CN(className)} />
    )
  },[])


  return (
    <div className={CN(className, '_homepage-container', {
      '_desktop': isWebUI,
      '_mobile': !isWebUI
    })}>
      <div className={'_homepage_video-container'}>
        <div className={'_homepage-video_mask'} >
          <div className={'_homepage-video_content'}>
            <h1 className={CN('_homepage-video_title','_text')}>{t(' Rise to the challenge - a new world awaits you')}</h1>
            <div className={CN('_homepage_video_subtext', '_text')}>
              {t('Long-term vision')}
              <Button size={'md'} isRadius={true}/>
            </div>
          </div>
        </div>
        <video width="1400px" height="100%" autoFocus={true} loop={true} autoPlay={true} controls={true} muted={true}>
          <source src={urlYtbHome} type="video/mp4" />
        </video>
        <div className={'_homepage-video-label'} >
        </div>
      </div>
      <div className={'_homepage_carousel'}>
        <div className={'_carousel-bg'} />
        <div className={'_carousel-content'}>
          <div className={'_homepage_carousel-label'}>
            <h2 className={CN('_homepage_carousel-title')}>{t('Special Contents')}</h2>
            <p className={CN('_homepage_carousel-content')}>{t('HUST is the only private university of science and technology selected for the Japanese government\'s exclusive Top Global University Project.')}</p>
            <div className={'_group-button'} style={{display: 'flex', gap: token.paddingMD}}>
              <Button size={"lg"} onClick={onClickToTurnRightImg} isRadius={true}
                      backgroundColor={"transparent"}
                      borderColor={token.colorBgGreen1}
                      isBorder={true}
                      icon={
                        <div className={'_button-icon'} >
                          <ArrowLeft
                            size={27}
                            className={'_option-icon'}
                            weight={"bold"}
                            color={token.colorBgGreen1}
                          />
                        </div>}
              />
              <Button size={'lg'} onClick={onClickToTurnLeftImg} isRadius={true}
                      backgroundColor={"transparent"}
                      borderColor={token.colorBgGreen1}
                      isBorder={true}
                      icon={
                        <div className={'_button-icon'} >
                          <ArrowRight
                            size={27}
                            className={'_option-icon'}
                            weight={"bold"}
                            color={token.colorBgGreen1}
                          />
                        </div>}
              />
            </div>
          </div>
          <Carousel content={[
            {link : 'something', image: 'https://www.shibaura-it.ac.jp/assets/img/pages/home/spe_1_ban_en.jpg'},
            {link : 'something', image: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/bach-khoa1-700x410.jpg?alt=media&token=36e66373-8461-4690-b7de-f8eb8e83920e'},
            {link : 'something', image: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/GTBKHN3.jpg?alt=media&token=6debef96-70bc-4cb3-b276-cbe9ebfd93c0'},
            {link : 'something', image: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/PTN5.jfif?alt=media&token=340dc398-1044-4dfc-8ec5-caaeec75d923'},
            {link : 'something', image: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/PTN2.jpg?alt=media&token=04a5bded-fb44-4a88-8647-2418eca3c218'},
            {link : 'something', image: 'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/PTN4.jfif?alt=media&token=df48070b-fcdf-4f6b-9c29-04c641234ac7'}
          ]}
                    turnLeft={turnLeftImage}
                    turnRight={turnRightImage}
                    setTurnLeft={setTurnLeftImage}
                    setTurnRight={setTurnRightImage}
                    renderItem={renderItemImage}
                    className_={'-image-carousel'}
          />
        </div>
      </div>
      <div className={'_wrap_box'}>
        <h1 className={CN('_homepage_title', '-center')}>{t('Heading')}</h1>
        <HeadlineHome />
      </div>
      <div className={CN('_wrap_box', '-prize-box')}>
        <h1 className={CN('_homepage_title', '-left')}>{t('The Prize Winner')}</h1>
        <Carousel content={[
          {
            title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
            badge : 'Information',
            link: '/123',
            createAt : '2023/12/06'
          },
          {
            title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
            badge : 'Information',
            link: '/123',
            createAt : '2023/12/06'
          },
          {
            title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
            badge : 'Information',
            link: '/123',
            createAt : '2023/12/06'
          },
          {
            title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
            badge : 'Information',
            link: '/123',
            createAt : '2023/12/06'
          },
          {
            title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
            badge : 'Information',
            link: '/123',
            createAt : '2023/12/06'
          },
          {
            title : 'Prof. Cristiano Giordani (University of Antioquia, Medellin, Colombia) visited Mele Lab and delivered a seminar',
            badge : 'Information',
            link: '/123',
            createAt : '2023/12/06'
          }]}
                  renderItem={renderItemPost}
                  className_={'-post-card-carousel'}
                  turnLeft={turnLeftPostCard}
                  turnRight={turnRightPostCard}
                  setTurnLeft={setTurnLeftPostCard}
                  setTurnRight={setTurnRightPostCard}
        />
        <div className={'_group-button'} style={{display: 'flex', gap: token.paddingMD, justifyContent: 'space-between'}}>
          <div className={CN('_group', '-left')}>
            <Button size={"lg"} onClick={onClickToTurnRightPostCard} isRadius={true}
                    backgroundColor={"transparent"}
                    borderColor={token.colorBgGreen1}
                    isBorder={true}
                    icon={
                      <div className={'_button-icon'} >
                        <ArrowLeft
                          size={27}
                          className={'_option-icon'}
                          weight={"bold"}
                          color={token.colorBgGreen1}
                        />
                      </div>}
            />
            <Button size={'lg'} onClick={onClickToTurnLeftPostCard} isRadius={true}
                    backgroundColor={"transparent"}
                    borderColor={token.colorBgGreen1}
                    isBorder={true}
                    icon={
                      <div className={'_button-icon'} >
                        <ArrowRight
                          size={27}
                          className={'_option-icon'}
                          weight={"bold"}
                          color={token.colorBgGreen1}
                        />
                      </div>}
                    />
          </div>
          <div className={CN('_group', '-right')}>
            <h2 className={CN('_group_button_supLabel')}>{t('More')}</h2>
            <Button borderColor={"transparent"}
                    size={'lg'}
                    isRadius={true}
                    onClick={()=>navigate('/heading')}
            />
          </div>
        </div>
      </div>
      <Empty />
      <Introduction image={'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/bach-khoa1-700x410.jpg?alt=media&token=36e66373-8461-4690-b7de-f8eb8e83920e'} route={'/123'} description={'Nurturing practical\n' +
        'engineers who learn\n' +
        'from the world and\n' +
        'contribute to the world'}
        label={'About HUST'}
        footer={[{link: '/something', title: 'More thing'}, {link: '/something', title: 'New Update'}]}
      />
      <Introduction image={'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/bach-khoa1-700x410.jpg?alt=media&token=36e66373-8461-4690-b7de-f8eb8e83920e'} route={'/123'} description={'Nurturing practical\n' +
        'engineers who learn\n' +
        'from the world and\n' +
        'contribute to the world'}
        label={'One Love'}
        footer={[{link: '/something', title: 'More thing'}, {link: '/something', title: 'New Update'}, {link: '/something', title: 'Headline'}]}
      />
      <Introduction image={'https://firebasestorage.googleapis.com/v0/b/crwn-clothing-123btt.appspot.com/o/bach-khoa1-700x410.jpg?alt=media&token=36e66373-8461-4690-b7de-f8eb8e83920e'} route={'/123'} description={'Nurturing practical\n' +
        'engineers who learn\n' +
        'from the world and\n' +
        'contribute to the world'}
        label={'One Future'}

      />
      <div className={'_home-list-video'}>
        <div className={'_carousel-bg'} />
        <div>
          <h1 className={CN('_homepage_title', '-center')}>{t('SIT Video')}</h1>
          <Carousel content={[
            {
              title : 'Prof. Cristiano Giordanir',
              link: '/123',
              image: 'https://img.youtube.com/vi/2FzoFe4Eg68/sddefault.jpg'
            },
            {
              title : 'Prof. Cristiano Giordanir',
              link: '/123',
              image: 'https://img.youtube.com/vi/2FzoFe4Eg68/sddefault.jpg'
            },
            {
              title : 'Prof. Cristiano Giordanir',
              link: '/123',
              image: 'https://img.youtube.com/vi/2FzoFe4Eg68/sddefault.jpg'
            }]}
                    renderItem={renderItemVideo}
                    className_={'-post-video-carousel'}
                    turnLeft={false}
                    turnRight={false}
          />
        </div>
        </div>


    </div>
  )
}


export const HomePage = styled(Component)<Props>(({ theme: { token },  }: Props) => {
  return {
    '&._homepage-container': {
      display: "flex",
      overflow: 'hidden',
      flexDirection: 'column',
      gap: token.paddingMD,
      width: '100vw',
      marginBottom: 400,

      '._homepage_video-container':{
          width: '100%',
        '._homepage-video_mask': {
          width: '100%',
          height: '100%',
          zIndex: 1,
          position: "absolute",
          display: 'flex',
          alignItems: 'center',
          '._homepage-video_content':{
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            '._homepage-video_title': {
              fontSize: token.fontSizeLG,
            },
            '._homepage_video_subtext':{
              fontSize: token.fontSize,
              fontWeight: token.fontWeightXS,
              display: 'flex',
              alignItems: "center",
              gap: token.paddingMD
            },
            '._text': {
              color: '#fff'
            },

          }
        },
        '._homepage-video': {
          position: 'relative',
        }
      },
      '._homepage_carousel': {
        marginTop: token.marginXS,
        zIndex: 0,
        position: 'relative',
        height: 480,
        '._homepage_carousel-label': {
          display: "flex",
          flexDirection: 'column',
          flex: '0 1 35%',

          '._homepage_carousel-title': {
            fontSize: token.fontSize + 10,
            color: token.colorBgGreen1,
          },
          '._homepage_carousel-content': {
            fontSize: token.fontSizeSM + 5,
            lineHeight: '24px',
            width: '100%',
            color: token.colorTextSecondary
          }
        },

        '.-image-carousel':{
          flex: '1 1 50%'
        },
        '.tabs-box': {
          position: 'absolute'
        }
      }
    },

    '&._desktop': {
      paddingLeft: token.paddingXS + 20,
      '._homepage_video-container':{
        height: 860,
        overflowY: "hidden",
        position: "relative",

        '._homepage-video_mask': {
          '._homepage-video_content':{
            width: '50%',
            left: '8.3333333333vw',
            bottom: '22.6666666667%',
            position: 'absolute',
            '._homepage-video_title': {
              fontSize: token.fontSizeLG,

            },
            '._homepage_video_subtext':{
              fontSize: token.fontSize - 100,
              fontWeight: token.fontWeightXS
            },
          }
        },
        '._homepage-video': {
          borderRadius: '4px 0 0 4px',
          position: 'relative',
          zIndex: 0,
          '.html5-video-player .ytp-chrome-top': {
            display: "none !important"
          }
        }
      }
    },

    '&._mobile': {
      padding : 0,
      '._homepage_video-container': {
        '._homepage-video': {
          width: '100%'
        }
      }
    },

    '._carousel-content': {
      display: "flex",
      gap: token.paddingXS,
      position: "absolute",
      zIndex: '1',
      width: '100%',
      height: 480,
      top: 0,
      left: 0
    },

    '._carousel-bg': {
      backgroundImage: token.colorBgMix,
      backgroundBlendMode: 'screen',
      backgroundSize: 'auto, 128px 128px',
      filter: 'blur(72px)',
      width: '100%',
      height: '100%',
      position: "relative",
      zIndex: -1
    },

    '._wrap_box': {
      marginTop: 50,
      width: '100%',
      position: "relative",
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingXS,
      marginBottom: 200,
      height: 'fit-content'
    },


    '._homepage_title': {
      width: 'fit-content',
      fontSize: 54,
      fontWeight: 600,
      color: token.colorBgGreen1
    },

    '.-center': {
      margin: "auto",
    },

    '._group':{
      display: 'flex',
      gap: token.paddingMD,
      alignItems: "center"
    },

    '._group.-right': {
      marginRight: 90
    },

    '._group_button_supLabel':{
      fontWeight: token.fontWeightXS
    },

    '._home-list-video': {
      width: '100%',
      height: 800,
      '._carousel-bg': {
        backgroundImage: token.colorBgMix,
        backgroundBlendMode: 'screen',
        backgroundSize: 'auto, 128px 128px',
        filter: 'blur(72px)',
        width: '100%',
        height: '100%',
        position: "absolute",
        zIndex: -1
      },

      '._carousel-content': {
        position: 'relative',
        zIndex: 1
      }
    }

  }
})




