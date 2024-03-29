import {LaboratoryInterface, ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import {useTranslation} from "../../hook";
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {HeaderLaboratory} from "./part/HeaderLaboratory.page";
import {SideBarLeftPart} from "../../components/sideBar/SideBarRight.part.page";
import {SideBarRightPart} from "../../components/sideBar/SiderBarLeft.part.page";
import {NavigationLaboratoryPart} from "./part/Navigation.part.page";
import {Outlet} from "react-router-dom";
import {ScreenContext} from "../../context/Screen.context";
import {useSelector} from "react-redux";
import {selectLaboratory} from "../../store/laboratory/laboratory.selector";


interface Props extends ThemeProps{};


type LaboratoryTypeParam = {
  laboratory ?: string
}





function Component ( { className } : Props){
  const { t } = useTranslation();
  const laboratory = useSelector(selectLaboratory);
  const { isWebUI } = useContext(ScreenContext);
  const param = useParams();


  return(
   <div className={CN(className, 'laboratory')}>
     <div className={'__laboratory-side-bar-left'}>
        <SideBarLeftPart />
     </div>
     <div className={'__laboratory-body'}>
       <div className={'__laboratory-body-header'}>
        {!!laboratory && <HeaderLaboratory />}
         <NavigationLaboratoryPart />
      </div>
       <div className={'__laboratory-body-content'}>
         <div className={'__laboratory-body-content-center'}>
          <Outlet />
         </div>
         { isWebUI && param['*'] !== 'about' && <div className={'__laboratory-body-side-bar-right'}>
           { laboratory  && <SideBarRightPart content={laboratory}/> }
         </div> }
       </div>
     </div>

   </div>
  )

}



export const LaboratoryPage = styled(Component)<Props>(({theme: {token}})=>{


  return ({

    display: 'flex',
    width: '100%',
    position: 'relative',
    marginBottom: 50,

    '.__laboratory-side-bar-left': {
      flex: '0 1 20%',
      marginTop: 200,
      top: 200,
      left: 0,
      position: 'sticky',
      height: 700
    },

    '.__laboratory-body': {
      flex: '1 0 80%'
    },

    '.__laboratory-body-header': {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: token.paddingMD
    },

    '.__laboratory-body-content-center': {
      display: 'flex',
      marginTop: token.margin,
      flexDirection: 'column',
      flex: '1 1 600px',
    },

    '.__laboratory-body-content': {
      display: 'flex',
      flexWrap: 'nowrap',
      backgroundColor: 'white'
    },

    '.__laboratory-body-side-bar-right': {
      display: 'flex',
      flex: '1 1 500px',
      marginTop: token.margin,
    }

  })
})
