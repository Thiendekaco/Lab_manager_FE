import {LabMemberInterface, LaboratoryInterface, ThemeProps} from "../../../types";
import CN from "classnames";
import styled from "styled-components";
import {LaboratoryList} from "../../../components/list/ListLaboratory.component";
import {useCallback, useEffect, useState} from "react";
import {PostLaboratory} from "../../../components/postItem/PostItemLaboratory.component";
import {useSelector} from "react-redux";
import {selectMember} from "../../../store/member/member.selector";



interface Props extends ThemeProps {};





function Component({ className } : Props){
  const member = useSelector(selectMember)
  const [ currentLabList , setCurrentLablist ] = useState<LabMemberInterface[]>(member?.laboratories || [])

  useEffect(() => {
    setCurrentLablist(member?.laboratories || [])
  }, [member?.laboratories]);


  const renderItem = useCallback((content : LabMemberInterface | LaboratoryInterface) : React.ReactNode=>{

    return(
      <PostLaboratory content={content}/>
    )
  },[]);



  return(
    <div className={CN(className)}>
      <LaboratoryList list={currentLabList} renderItem={renderItem} />
    </div>
  )
}


export const LaboratoryProfilePart = styled(Component)<Props>(()=>{


  return({


  })
})

