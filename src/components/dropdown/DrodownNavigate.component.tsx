import { ThemeProps } from "../../types";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "../../hook";
import React, {useContext, useEffect, useState} from "react";
import {ScreenContext} from "../../context/Screen.context";
import CN from "classnames";
import {Link} from "react-router-dom";
import { ArrowRight } from "phosphor-react";
import { fadeDown, fadeEnd, fadeStart, fadeInRight } from "../../styles/styles.animation";

export type ContentOptionType  = {
  option: string,
  link: string,
}

export type GroupOptionType = {
  label?: string,
  options: ContentOptionType[]
}

interface Props extends ThemeProps {
  list : GroupOptionType[],
  isDropdown: boolean
}


function Component (props: Props){
  const {t} = useTranslation();
  const { className, list, theme, isDropdown} = props
  const { isWebUI } = useContext(ScreenContext);
  const [ valueMap, setValueMap ] = useState<Record<string, ContentOptionType[]>>({})
  const [isDropdown_, setIsDropdown ] = useState(isDropdown)

  useEffect(() => {
    setIsDropdown(isDropdown)
  }, [isDropdown]);

  useEffect(() => {
     setValueMap( list.reduce((object, {label, options}) => {
      return {...object, [label || 'nonLabel'] : options}
    }, {}))
  }, [list]);


  return (
    <div className={CN(className, '_navigation_item-option-wrap', {
      '_active' : isDropdown_,
      '_deActive': !isDropdown_
    })}>
      <div className={'_navigation_mask'}></div>
      <div className={'_navigation_item-option-box'}>
        {
          Object.keys(valueMap).map((o, index)=> {
            const listOptionByValue = valueMap[o]

            return(
              <div className={'_option-group'} key={index}>
                <h1 className={'_option-label'}>{o === 'nonLabel' ?  '' : t(o) }</h1>
                {
                  listOptionByValue.map(({option, link}, index)=>(
                    <div className={CN('_option-item',{
                      '_last-item': index === listOptionByValue.length - 1
                    })} key={index}>
                      <Link to={link} className={'_option-link '}>
                        <span className={'text'}>{option}</span>
                        <ArrowRight size={27} className={'_option-icon'}/>
                      </Link>
                    </div>
                  ))
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )

}





export const DropdownNavigate_nonAnimation = styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
      display: 'flex',
      height: '0',
      width: '100%',
      position: "absolute",
      transition: 'display 0.5s ease-in-out',
      transitionDelay: '10s',
      '&._active' : {
        height: '100vh',
        zIndex: 2,
        '._navigation_mask':{
          width: '100%',
          height: '100%',
          zIndex: 1,
          position: "relative",
          backgroundColor: 'rgba(0,0,0,.2)',
        },
        ' ._navigation_item-option-box:hover + ._navigation_mask:hover': {
          height: 0,
        },
        '._navigation_item-option-box, ._navigation_item-option-box:hover ': {
          height: "fit-content",
          minHeight: 500,
          display:'flex'
        },
        '._navigation_mask:hover + ._navigation_item-option-box': {
          height: 0,
          display: "none"
        },
      },
    '._navigation_item-option-box:hover': {
        height: "fit-content",
        minHeight: 500,
        display:'flex'
      },
    '& ._navigation_item-option-box':{
      transformOrigin: 'top',
      display : "none",
      position: 'absolute',
      zIndex: 1000,
      height: 0,
      maxHeight: 700,
      overflowY: "auto",
      scrollSnapType: 'y mandatory',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: token.backgroundColor,
      justifyContent: "flex-start",
      gap: token.paddingLG,
      padding: token.paddingXS,
      '._option-group': {
        display: "flex",
        flexDirection: "column",
        flexBasis: '20%',
        scrollSnapAlign: 'start',

        '._option-label': {
          marginBottom: token.marginXS
        },
        '._option-item': {
          display: 'flex',
          borderTop: '1px solid',
          borderColor: token.color,
          height: 60,
          width: 230,
          padding: token.paddingMD,
          '._option-link': {
            textDecoration: 'none',
            display: "flex",
            color: token.color,
            fontWeight: token.fontWeightXS,
            '._option-icon':{
              marginBottom: token.marginMD,
              transition: 'all .4s cubic-bezier(.65,0,.35,1)',
            },

            '.text' : {
              display: 'block',
              width: 190,
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              overflow: 'hidden'
            }
          },
          '._option-link:hover ._option-icon':{
            // transform: 'translateX(-100%)', /* Di chuyển sang trái */
          },
        },
        '._option-item._last-item': {
          borderBottom: '1px solid',
        },
        '._option-label, ._option-link': {
          transition: "color .4s cubic-bezier(.65,0,.35,1)",
          cursor: "pointer"
        },
        '._option-label:hover, ._option-link:hover': {
          color : token.colorTextRed
        },
      }
    }
  }
})

export const DropdownNavigate = styled(DropdownNavigate_nonAnimation)`

  &._active, &._navigation_item-option-wrap:hover {
    animation: ${fadeDown} 1s ease-in-out forwards;
    ._navigation_item-option-box {
      animation: ${fadeStart} .3s cubic-bezier(.65,0,.35,1) forwards;
    }
  }
  & ._navigation_item-option-box {
      animation: ${fadeEnd} .25s cubic-bezier(.65,0,.35,1) forwards infinite;
    }
  }
  
  & ._navigation_item-option-box {
    ._option-link:hover ._option-icon {
       animation: ${fadeInRight} 1s cubic-bezier(0,.5,0,1);
    }
  }

  
`


