import {MemberType, ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React from "react";


interface Props extends ThemeProps {
  renderItem : (content : MemberType)=> React.ReactNode;
  list : MemberType[];
};






function Component ({className, renderItem, list} : Props){



  return(
    <div className={CN( className )}>
      <div className={'__list-member-body'}>
        {
          list.map((item, index)=> <div key={index}>{renderItem(item)}</div>)
        }
      </div>
      <div className={'__list-member-footer'}>

      </div>
    </div>
  )

}



export const MemberList = styled(Component)<Props>(({theme: {token}}) => {

  return({
    width: '100%',
    height: '100%',
    maxHeight: 1000,
    overflow: "auto",
    scrollbarWidth: 'none',
    minHeight: 300,

    '&::-webkit-scrollbar' :{
      display: 'none'
    },

    '.__list-member-body': {
      display:'flex',
      flexDirection: 'column',
      gap: token.margin
    }

  })
})
