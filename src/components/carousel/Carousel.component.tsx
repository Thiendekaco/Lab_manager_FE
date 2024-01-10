import React, {useCallback, useEffect, useMemo, useState} from "react";
import {ContentType, ThemeProps} from "../../types";
import CN from "classnames";
import styled from "styled-components";
import {useNavigate} from "react-router";



export interface PropsCarouselInterface extends ThemeProps {
  content : ContentType[],
  renderItem: (content : ContentType, className: string) =>React.ReactNode,
  turnLeft ?: boolean,
  setTurnLeft?: (turnLeft : boolean)=> void,
  turnRight ?: boolean,
  setTurnRight?: (turnRight : boolean)=> void,
  className_ ?: string,
}

export default function Component(props : PropsCarouselInterface) {
  const {className, content, turnRight = false, turnLeft = false, setTurnRight, setTurnLeft, renderItem} =  props;
  const tabsBoxWrapper = document.querySelector(`.${ props.className_}`);
  const tabsBox = tabsBoxWrapper?.querySelector(".tabs-box");
  const [isLeft, setIsLeft] = useState(true);
  const [ isDragging, setIsDragging ] = useState(false)
  const navigate = useNavigate();
  const [ timeStart, setTimeStart ] = useState(Date.now)
  const onClickToOpen = useCallback((link : string)=>{
    const timeEnd = Date.now();

    if(timeEnd - timeStart > 200) return ;
    return () => navigate(`/${link}`);
  }, [navigate, timeStart])

  useEffect(() => {
    if(turnLeft && tabsBox){
      tabsBox.scrollLeft += 900;
      if (setTurnLeft) {
        setTurnLeft(false);
      }
    }
    if(turnRight && tabsBox){
      tabsBox.scrollLeft -= 900;
      if (setTurnRight) {
        setTurnRight(false);
      }
    }

  }, [turnLeft, turnRight, tabsBox, tabsBoxWrapper]);



  const dragging = useCallback((e : React.MouseEvent<HTMLDivElement>) => {
    if(!isDragging) return;
    if(tabsBox){
      tabsBox.scrollLeft -= e.movementX;
    }

  }, [isDragging, tabsBox]);

  const dragStop = useCallback(() => {
    setIsDragging(false);
  },[]);


  useEffect(() => {
    const interval = setInterval(() => {
      const tabsBoxWrapper = document.querySelector(`.${ props.className_}`);
      const tabsBox = tabsBoxWrapper?.querySelector(".tabs-box");

      if (tabsBox?.scrollLeft && tabsBox.scrollLeft >= tabsBox.scrollWidth - 2 * (tabsBox.scrollWidth / content.length) - 40) {
        setIsLeft(false);
      } else if (tabsBox?.scrollLeft === 0) {
        setIsLeft(true);
      }
      if (isLeft && tabsBox?.scrollLeft !== undefined) {
        tabsBox.scrollLeft += 900;
      } else if(tabsBox?.scrollLeft !== undefined){
        tabsBox.scrollLeft -= 900;
      }
    }, 7000);

    return ()=> {
      clearInterval(interval);
    }
  }, [content.length, isLeft, props.className_, tabsBox, tabsBoxWrapper]);

  return (

    <div className={CN(className,"_carousel-wrapper", props.className_)} onMouseLeave={dragStop}>
      <div className="_carousel-icon">
        <i id="left" className="fa-solid fa-angle-left"></i>
      </div>
      <div className={CN("tabs-box", {
        'dragging' : isDragging
      })}>
        {content.map((c, index) => (
          <div className={`tab ${index === 0 ? "active" : ""}`}
               onMouseMove={(e) =>dragging(e)}
              onMouseDown={()=>{setTimeStart(Date.now);
                                        setIsDragging(true) }}
               onMouseUp={dragStop}
               onClick={onClickToOpen(c.link)}
               key={index}
          >
            {renderItem(c, '_tab_item')}
          </div>
        ))}
      </div>
      <div className="icon">
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}


export const Carousel =  styled(Component)<PropsCarouselInterface>(({theme: {token}} : PropsCarouselInterface)=>{
  return({
    '&._carousel-wrapper' :{
      display: "flex",
      position: "relative",
      borderRadius: 13,
      '.tabs-box': {
        display: 'flex',
        zIndex: '1000',
        flexDirection: 'row',
        width: '100%',
        height: 'fit-content',
        gap: 30,
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
        flexWrap: 'nowrap',
        transition: 'scrollLeft 3s ease-in-out',
        '.tab': {
          fontSize: '1.18rem',
          whiteSpace: 'nowrap',
          flex: '1 0 30%',
          height: 'fit-content',
          padding: '13px 20px',
          borderRadius: 3,
          border: '1px solid transparent',
          width: "fit-content",
          '&:hover ._tab_item':{
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)'
          },

          '._tab_item': {
            transition: 'box-shadow .2s ease-in-out',
            position: 'relative',
            zIndex: 0,
            cursor: 'pointer'
          }
        },
      },
      '.tabs-box.dragging': {
        scrollBehavior: 'auto',
        '.tab': {
          userSelect: 'none',
          '._tab_item': {
            userSelect: 'none',
            pointerEvents: 'none'
          }
        }
      },
    },
  })
})


