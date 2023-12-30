import {ContentType, ResearchType, ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import { Plus, Minus } from "phosphor-react";
import React, {useState} from "react";
import {ButtonIcon} from "../button/ButtonIcon.component";

interface Props extends ThemeProps {
  content ?: ResearchType[];
  label : string,
  renderItem : ( content: ResearchType )=> React.ReactNode;
}



function Component ( {className, content, label, renderItem} : Props ) {
  const [ boxSelected, setBoxSelected ] = useState(false);

  const handleStyleOfContent = (questionOfBoxIsSelected : HTMLDivElement, bool : boolean)=>{
    if(bool){
      questionOfBoxIsSelected.style.maxHeight = "" ;
      questionOfBoxIsSelected.style.padding = "0 0";
    }else{
      questionOfBoxIsSelected.style.padding = "25px 0";
      questionOfBoxIsSelected.style.maxHeight = questionOfBoxIsSelected.scrollHeight+ 50 + "px" ;
    }
  }
  const handleOnClickExportContent = (e : React.MouseEvent<HTMLDivElement>) =>{
    const itemBoxIsSelected = e.currentTarget;
    const allOfCollapsesBox = document.querySelectorAll("." + itemBoxIsSelected.className);
    if(allOfCollapsesBox){
      allOfCollapsesBox.forEach((tag) =>{
        if(tag.className === "Question active"){
          const questionOfCollapseBefore = tag.nextElementSibling as HTMLDivElement;
          tag.classList.remove('active')
          handleStyleOfContent(questionOfCollapseBefore, true);
        }
      })
    }
    itemBoxIsSelected.classList.toggle('active');
    const questionOfCollapseAfter = itemBoxIsSelected.nextElementSibling as HTMLDivElement ;
    handleStyleOfContent( questionOfCollapseAfter ,questionOfCollapseAfter?.style.maxHeight !=="")
    setBoxSelected(!boxSelected);
  }

  return(
    <div className={CN(className,"collapse-box")}>
        <div className="__collapse-label" onClick={(e) =>handleOnClickExportContent(e)} >
          {label} {
           <ButtonIcon
             size={'md'}
             icon = {!boxSelected ?
             <Plus size={25} weight={"fill"} color={'#000000'}/> :
             <Minus size={25} weight={"fill"} color={'#000000'}/> }
            />
        }

        </div>
        <div className = "__content-card">
          {
            content?.map((c)=>  renderItem(c) )
          }
        </div>
    </div>
  )

}



export const Collapse = styled(Component)<Props>(({theme : {token}})=>{



  return({
    '&.collapse-box': {
      position: 'relative',
      margin: 'auto',
      width: '100%',
      height: 'max-content',
    },

  '.__collapse-label': {
      backgroundColor: token.colorBgSecondary,
      cursor: 'pointer',
      borderRadius: 5,
      border: '2px solid transparent',
      width: '100%',
      height: 80,
      fontSize: token.fontSize,
      textAlign: 'start',
      padding: '25px',
      display: 'flex',
      justifyContent: 'space-between',
      transition: 'background-color .2s ease-in-out'
    },
    '.__content-card' : {
      gap: token.paddingMD,
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      maxHeight: 0,
      transition: 'max-height,padding  0.2s ease-out',
    },

  })
})
