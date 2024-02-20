import {PostOfMemberInterface, ResearchType, ThemeProps} from "../../../../types";
import styled from "styled-components";
import {AutomotiveIcon, HealthIcon, MedicalIcon} from "../../../../components/icon";
import React, {useCallback, useEffect, useState} from "react";
import { PostCardLaboratory } from "../../../../components/postItem/PostCardLaboratory.component";
import CN from "classnames";
import {ResearchLaboratoryList} from "../../../../components/list/ListResearchLaboratory.component";
import {useSelector} from "react-redux";
import {selectLaboratory} from "../../../../store/laboratory/laboratory.selector";
import {getResearchByLaboratory} from "../../../../api/clientApi";


interface Props extends ThemeProps {};




function Component ( { className } : Props ) {
  const laboratory = useSelector(selectLaboratory);
  const [ researchList, setResearchList ] = useState<PostOfMemberInterface[]>([]);

  const getResearchList = useCallback(async () => {
    try {
      const doc = laboratory ? await getResearchByLaboratory(laboratory.nameLab) : [];
      setResearchList(doc);
    }catch (e) {

    }

  }, [laboratory])

  useEffect( () => {
    laboratory && getResearchList();
  }, [laboratory]);


  const renderItem = useCallback((content : PostOfMemberInterface)=>{
    return <PostCardLaboratory content={content} />
  },[])

  return (
    <div className={CN(className)}>
      <ResearchLaboratoryList list={researchList} renderItem={renderItem} />
    </div>
  )
}


export const ResearchListLaboratoryPartPage = styled(Component)<Props>(()=>{

  return({
    scrollBehavior: 'smooth'
  })

})
