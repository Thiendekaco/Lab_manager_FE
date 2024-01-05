import {Theme, ThemeProps} from "../../types";
import CN from "classnames";
import { Heart, Share, ThumbsUp, ThumbsDown } from "phosphor-react";
import styled, {useTheme} from "styled-components";
import {useCallback, useState} from "react";

interface Props extends ThemeProps {}



function Component ({className} : Props){
  const [ isLike, setIsLike ] = useState(false);
  const [ isDiskLike, setIsDiskLike ] = useState(false);
  const [ isLove, setIsLove ] = useState(false);
  const { token } = useTheme() as Theme;
  const onClickToLike = useCallback(()=>{
    setIsLike(!isLike);
    setIsLove(false);
    setIsDiskLike(false);
  },[isLike])

  const onClickToLove = useCallback(()=>{
    setIsLove(!isLove);
    setIsLike(false);
    setIsDiskLike(false);
  },[isLove])

  const onClickToDiskLike = useCallback(()=>{
    setIsDiskLike(!isDiskLike);
    setIsLike(false);
    setIsLove(false);
  },[isDiskLike])

  return(
    <div className={CN(className, 'reaction-wrap')}>
      <Heart size={32}
            onClick={onClickToLove}
             weight={'fill'}
             color={isLove ? token.colorBgRed : token.colorBgSecondary }
             className={'__reaction-icon'}/>
      <ThumbsUp size={32}
             onClick={onClickToLike}
             weight={'fill'}
             color={isLike ? '#2C6ED8' : token.colorBgSecondary }
             className={'__reaction-icon'}/>
      <ThumbsDown size={32}
             onClick={onClickToDiskLike}
             weight={'fill'}
             color={isDiskLike ? '#2C6ED8' : token.colorBgSecondary }
             className={'__reaction-icon'}/>
      <Share size={32} weight={'fill'} color={token.colorBgSecondary} className={'__reaction-icon'}/>
    </div>
  )
}


export const ReactionComponent = styled(Component)<Props>(({theme: {token}})=>{

  return({
    display: 'flex',
    width:'100%',
    gap: token.paddingMD,
    borderTop: '1px solid',
    borderColor: token.colorBgSecondary,
    padding: '1vw',


    '.__reaction-icon': {
      cursor: 'pointer',
      transition: 'all .3s ease-in-out',

      '&:hover': {
        transform: 'scale(1.3)'
      }
    }
  })
})

