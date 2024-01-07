import {Theme, ThemeProps} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import React, {useEffect, useMemo, useState} from "react";
import { Trophy, Medal, CurrencyEth, Polygon  } from "phosphor-react";


interface Props extends ThemeProps {
  top : number;
}

enum AchiveTier  {
  TOP_ONE = 'top_1',
  TOP_TWO = 'top_2',
  TOP_THERE = 'top_3',
  TOP_FOUR = 'top_4' ,
  TOP_FIVE = 'top_5',
  UNDER_TOP_TEN= 'under-top-10',
  UNDER_TOP_HUNDRED = 'under-top-100'
}

function Component({ className, top } : Props){
  const { token  } = useTheme() as Theme;

  const AchiveBg = useMemo(()=>{
    return ({
        [AchiveTier.TOP_ONE] : {
          bg : token.colorBgYellow,
          icon : <Trophy weight={'fill'} size={32} className={'__achive-icon'} color={token.colorBgYellow}/>,
          label : 'TOP 1 '
        },
        [AchiveTier.TOP_TWO] : {
          bg : token.colorBgBlue,
          icon : <Medal weight={'fill'} size={32} className={'__achive-icon'} color={token.colorBgBlue}/>,
          label : 'TOP 2'
        },
        [AchiveTier.TOP_THERE] :{
          bg : token.colorBgRed,
          icon : <Medal weight={'fill'} size={32} className={'__achive-icon'} color={token.colorBgRed}/>,
          label : 'TOP 3'
        },
        [AchiveTier.TOP_FOUR] : {
          bg : token.colorBgGreen,
          icon : <Medal weight={'fill'} size={32} className={'__achive-icon'} color={token.colorBgGreen}/>,
          label: 'TOP 4'
        },
        [AchiveTier.TOP_FIVE] : {
          bg : token.colorBgPink,
          icon : <Medal weight={'fill'} size={32} className={'__achive-icon'}  color={token.colorBgPink}/>,
          label: 'TOP 5'
        },
        [AchiveTier.UNDER_TOP_TEN] : {
          bg : '#3c6ed1',
          icon : <CurrencyEth size={32} className={'__achive-icon'} weight={'fill'} color={token.colorBgBlue3}/>,
          label: 'TOP 10'
        },
        [AchiveTier.UNDER_TOP_HUNDRED] : {
          bg : '#22b6c7',
          icon : <Polygon size={32} className={'__achive-icon'}  weight={'fill'} color={token.colorBgBlue2}/>,
          label: 'TOP 100'
        }
      }
    )
  },[token.colorBgBlue, token.colorBgGreen, token.colorBgPink, token.colorBgRed, token.colorBgYellow])

  const [ styleAchive, setStyleAchive ] = useState(AchiveBg[AchiveTier.UNDER_TOP_HUNDRED]);



  useEffect(() => {
    switch (true) {
      case top === 1 :
        setStyleAchive(AchiveBg[AchiveTier.TOP_ONE]);
        break;

      case top === 2 :
        setStyleAchive(AchiveBg[AchiveTier.TOP_TWO]);
        break;

      case top === 3 :
        setStyleAchive(AchiveBg[AchiveTier.TOP_THERE]);
        break;

      case top === 4 :
        setStyleAchive(AchiveBg[AchiveTier.TOP_FOUR]);
        break;

      case top === 5 :
        setStyleAchive(AchiveBg[AchiveTier.TOP_FIVE]);
        break;

      case top > 5 && top <= 10 :
        setStyleAchive(AchiveBg[AchiveTier.UNDER_TOP_TEN]);
        break;

      case top > 10 && top <= 100 :
        setStyleAchive(AchiveBg[AchiveTier.UNDER_TOP_HUNDRED]);
        break;

    }
  }, [top]);

  return(
    <div className={CN(className)}>
      <button
        className={CN('__button-wrap')}
      >
        <div className={'__button-mask'} style={{backgroundColor : styleAchive.bg}} />
        <div className={'__button-icon'}>
          {styleAchive.icon}
        </div>

      </button>
      <span className={'_icon-label'}>{styleAchive.label}</span>
    </div>

  )
}

const AchiveIcon = styled(Component)<Props>(({theme: {token}} ) => {

  return({
    display: "flex",
    gap: 8,

    '.__button-wrap': {
      width: 50,
      height: 50,
      margin: 'auto',
      borderRadius: 5,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      cursor: 'pointer',
      transition: 'all .3s ease-in-out',
      position: 'relative',
      zIndex : 0,
      padding: 0,
    },



    '.__button-mask': {
      position: 'relative',
      zIndex: 0,
      opacity : .3,
      borderRadius: 'inherit',
      width: 50,
      height: 50
    },

    '.__button-icon': {
      position: 'absolute',
      top:'22%',
      left: '21%',
      zIndex: 1,
      fontWeight: token.fontWeightXS,
    },

    '.__achive-icon': {
      cursor: 'pointer',
      transition: 'all .3s ease-in-out',

      '&:hover': {
        transform: 'scale(1.3)'
      }
    },

    '._icon-label':{
      color: token.colorTextSecondary,
      fontSize: token.fontSizeSM,
      display: "flex",
      alignItems: 'center'
    }
  })
})


export default AchiveIcon;
