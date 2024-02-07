import {ResearchType, ThemeProps} from "../../../../types";
import styled from "styled-components";
import {AutomotiveIcon, HealthIcon, MedicalIcon} from "../../../../components/icon";
import React, {useCallback} from "react";
import { PostCardLaboratory } from "../../../../components/postItem/PostCardLaboratory.component";
import CN from "classnames";
import {ResearchLaboratoryList} from "../../../../components/list/ListResearchLaboratory.component";


interface Props extends ThemeProps {};

const Doc: ResearchType[] =[ {
  title: 'Robotics',
  subTitle: 'Mục tiêu của ngành Robotics là tạo ra các cỗ máy hiện đại, thông minh nhằm hỗ trợ các hoạt động công việc của con người',
  image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_1_w.svg',
  link : '123',
  research : <></>,

  description : ' ',
  admin : 'Thien'
}, {  title: 'Mechanical',
  subTitle: ' Mechanical Engineer hiểu theo nghĩa đơn giản nhất chính là kỹ sư cơ khí hay kỹ sư thiết kế cơ khí.',
  link : '123',
  image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_2_w.svg',
  research : <></>,

  description : '',
  admin : 'Thien'},
  {  title: 'Network',
    subTitle: 'Công việc của network engineer bao gồm việc chịu trách nhiệm xây dựng, triển khai và thực hiện toàn bộ mạng máy tính trong các tổ chức, doanh nghiệp. ',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_3_w.svg',
    research : <></>,

    description : 'some thing like that',
    admin : 'Thien'},
  {  title: 'Automotive',
    subTitle: 'Sự ra đời của automotive là bước đệm cho sự chuyển mình của ngành công nghiệp sản xuất ô tô.',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_8_w.svg',
    research : <></>,
    description : '',
    admin : 'Thien'} ,
  {  title: 'Software',
    subTitle: 'Kỹ thuật phần mềm (Software Engineering) là ngành chuyên nghiên cứu về quy trình, cách thức hoạt động, kiểm thử(testing) của các chương trình máy tính nhằm đáp ứng các nhu cầu của người dùng. ',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_6_w.svg',
    research : <></>,

    description : '',
    admin : 'Thien'},
  {  title: 'Hardware',
    subTitle: 'Hardware, hay còn gọi là phần cứng, liên quan đến việc thiết kế, chế tạo và sửa chữa các thành phần vật lý của máy tính.',
    link : '123',
    image:'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_5_w.svg',
    research : <></>,

    description : '',
    admin : 'Thien'},
  {  title: 'AITechnology',
    subTitle: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_22_w.svg',
    link : '123',
    image:'Trí tuệ nhân tạo (AI) là lĩnh vực khoa học máy tính chuyên giải quyết các vấn đề nhận thức thường liên quan đến trí tuệ con người.',
    research : <></>,

    description : '',
    admin : 'Thien'},
  {  title: 'Biotechnology',
    subTitle: 'Ngành Công nghệ Sinh học (Biotechnology) là một ngành học có sự kết hợp giữa Công nghệ hiện đại và Sinh học nhằm tạo ra các sản phẩm công nghệ được ứng dụng để giải quyết các vấn đề của cuộc sống. ',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_13_w.svg',
    research : <></>,

    description : '',
    admin : 'Thien'},
  {  title: 'Chemical',
    subTitle: 'Chuyên ngành Kỹ thuật hóa học chính là tập trung vào sản xuất nguyên liệu thô thành thành phẩm, ví dụ như năng lượng, quần áo và thực phẩm.',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_11_w.svg',
    research : <></>,

    description : '',
    admin : 'Thien'},
  {  title: 'Communication',
    subTitle: 'Kỹ thuật thông tin liên lạc là một ngành kỹ thuật tập trung vào kỹ thuật điện và máy tính, thuộc chuyên ngành cấp một của Kỹ thuật Thông tin và Truyền thông.',
    link : '123',
    image: 'https://www.shibaura-it.ac.jp/assets/img/common/_ico_dept_7_w.svg',
    research : <></>,

    description : '',
    admin : 'Thien'}]



function Component ( { className } : Props ) {

  const renderItem = useCallback((content : ResearchType)=>{
    return <PostCardLaboratory content={content} />
  },[])

  return (
    <div className={CN(className)}>
      <ResearchLaboratoryList list={Doc} renderItem={renderItem} />
    </div>
  )
}


export const ResearchListLaboratoryPartPage = styled(Component)<Props>(()=>{

  return({
    scrollBehavior: 'smooth'
  })

})
