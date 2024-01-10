import {ThemeProps, UserProfile} from "../../../types";
import CN from "classnames";
import styled from "styled-components";
import {MemberList} from "../../../components/list/ListMember.component";
import {useCallback} from "react";
import {PostProfileUser} from "../../../components/postItem/PostItemProfileUser.component";


interface Props extends ThemeProps {};

const content : UserProfile[] = [{
  image: 'https://avatars.githubusercontent.com/u/139972251?s=400&v=4',
  name: 'Thiendekaco',
  location: '1 Đại Cồ Việt st, Hai Ba Trung',
  createAt: '06/10/2023',
  school: 'HUST',
  country: 'Hanoi, VietName',
  social: {
    facebook: 'ahsbdhabsdas.com',
    telegram: 'asbdhasbhasbd.com'
  },
},
  {
    image: 'https://avatars.githubusercontent.com/u/139972251?s=400&v=4',
    name: 'Thiendekaco',
    location: '1 Đại Cồ Việt st, Hai Ba Trung',
    createAt: '06/10/2023',
    school: 'HUST',
    country: 'Hanoi, VietName',
    social: {
      facebook: 'ahsbdhabsdas.com',
      telegram: 'asbdhasbhasbd.com'
    },
  },
]



function Component({ className } : Props){




  return(
    <div className={CN(className)}>
      {
        content.map((c)=> {
          return ( <PostProfileUser content={c} />)
        })
      }
    </div>
  )
}


export const FollowerProfilePart = styled(Component)<Props>(({theme: {token}})=>{


  return({
    display: 'flex',
    gap: token.paddingMD,
  })
})

