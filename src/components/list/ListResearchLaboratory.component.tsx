import {PostOfMemberInterface, ResearchType, ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";
import React from "react";


interface Props extends ThemeProps {
  renderItem : (content : PostOfMemberInterface)=> React.ReactNode;
  list : PostOfMemberInterface[];
};






function Component ({className, renderItem, list} : Props){



  return(
    <div className={CN( className )}>
      <div className={'__list-laboratory-body'}>
        {
          list.map((item, index)=> <div key={index}>{renderItem(item)}</div>)
        }
      </div>
    </div>
  )

}



export const ResearchLaboratoryList = styled(Component)<Props>(({theme: {token}}) => {

  return({
    width: '100%',
    height: '100%',
    minHeight: 3000,

    '.__list-laboratory-body': {
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG
    }

  })
})
