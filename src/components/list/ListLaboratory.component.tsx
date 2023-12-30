import {LaboratoryType, ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React from "react";


interface Props extends ThemeProps {
  renderItem : (content : LaboratoryType)=> React.ReactNode;
  list : LaboratoryType[];
};






function Component ({className, renderItem, list} : Props){



  return(
    <div className={CN( className )}>
      <div className={'__list-laboratory-body'}>
        {
          list.map((item, index)=> <div key={index}>{renderItem(item)}</div>)
        }
      </div>
      <div className={'__list-laboratory-footer'}>

      </div>
    </div>
  )

}



export const LaboratoryList = styled(Component)<Props>(({theme: {token}}) => {

  return({
    width: '100%',
    height: '100%',
    maxHeight: 1000,
    overflow: "auto",
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar' :{
      display: 'none'
    },

  })
})
