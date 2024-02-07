import styled, {useTheme} from "styled-components";
import { useTranslation } from  '../../hook';
import { ThemeProps } from "../../types";
import React, {
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { ScreenContext } from "../../context/Screen.context";
import {Link} from "react-router-dom";
import CN from 'classnames';
import { Globe, MagnifyingGlass   } from "phosphor-react";
import { Theme } from "../../types";
import {
  ContentOptionType,
  DropdownNavigate,
  GroupOptionType
} from "../../components/dropdown/DrodownNavigate.component";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {signOutStart} from "../../store/user/user.action";
import {getListLabStart} from "../../store/laboratories/laboratories.action";

const Logo = require('../../assets/images/HustLogo.ico');


interface Props extends ThemeProps {}

export const ContentI : ContentOptionType = {
  option: 'Robotics',
  link: '',
}
export const ContentII : ContentOptionType = {
  option: 'Mechanical',
  link: '',
}
export const ContentIII : ContentOptionType = {
  option: 'Network',
  link: '',
}
export const ContentIV : ContentOptionType = {
  option: 'Software',
  link: '',
}
export const ContentV : ContentOptionType = {
  option: 'Hardware',
  link: '',
}
export const ContentVI : ContentOptionType = {
  option: 'Automotive',
  link: '',
}
export const ContentVII : ContentOptionType = {
  option: 'Chemical',
  link: '',
}
export const ContentVIII : ContentOptionType = {
  option: 'Biotechnology',
  link: '',
}
export const ContentIX : ContentOptionType = {
  option: 'AI',
  link: '',
}
export const ContentX : ContentOptionType = {
  option: 'Communication',
  link: '',
}

export const Content1 : ContentOptionType = {
  option: 'News',
  link: 'https://lab-manager.vercel.app',
}
export const Content2 : ContentOptionType = {
  option: 'Research',
  link: 'https://lab-manager.vercel.app/research',
}
export const Content3 : ContentOptionType = {
  option: 'Laboratories',
  link: 'https://lab-manager.vercel.app/laboratories',
}
export const Content : ContentOptionType = {
  option: 'Something',
  link: '',
}

export const groupContent : GroupOptionType = {
  label: 'Sometimes',
  options: [Content1, Content2, Content3]
}

export const groupContent2 : GroupOptionType = {
  label: 'Sometimes123',
  options: [ContentI, ContentII, ContentIII,ContentIV,ContentV,ContentVI,ContentVII, ContentVIII,ContentIX, ContentX]
}
export const groupContent3 : GroupOptionType = {
  label: 'Sometimes1234',
  options: [Content, Content, Content,Content,Content]
}

export const objectGroupContent : Record<string, GroupOptionType[]> = {
  Headline : [groupContent],
  Research: [ groupContent2],
  Laboratories: [groupContent3],
  Ranking: [groupContent]
}



const x = window.document;
let mouseLeaveX = 0;
let mouseLeaveY = 0;

export function Component ( { className} : Props) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { token } = useTheme() as Theme;
  const navigate = useNavigate();
  const [ contentOption, setContentOption ] = useState<GroupOptionType[]>([])
  const [isHover, setIsHover ] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getListLabStart());
  }, [dispatch]);

  const onNavigateToSignIn =  useCallback(()=>{
    navigate('/signIn')
  },[navigate])

  const onNavigateToSignUp =  useCallback(()=>{
    navigate('/signUp')
  },[navigate])

  const onSignOut = useCallback(()=>{
    dispatch(signOutStart())
    window.location.reload();
  }, [dispatch])

  const onNavigateToMyProfile =  useCallback(()=>{
    navigate('/profile/myProfile')
  },[navigate])

  const onMouseEnter = useCallback(( e : React.MouseEvent<HTMLAnchorElement>)=>{
    const value = e.currentTarget.id;
    setContentOption(objectGroupContent[value]);
    setIsHover(true);
  },[])

  const eventMousemove = useCallback((event : MouseEvent) => {
    if((mouseLeaveX + 10 <= event.clientX  || mouseLeaveX - 10 > event.clientX ) &&
      (event.clientY >= mouseLeaveY + 50 || event.clientY <= mouseLeaveY)){
      setIsHover(false)
    }
    if(isHover){
      setIsHover(false)
    }
  }, [isHover])

  const onMouseLeave = useCallback(( e : React.MouseEvent<HTMLAnchorElement>)=>{
    mouseLeaveX = e.clientX;
    mouseLeaveY = e.clientY;
    x.addEventListener("mousemove", eventMousemove);
  },[eventMousemove])

  useEffect(() => {
    x.removeEventListener("mousemove", eventMousemove);
  }, [ isHover]);

  return(
    <>
      <div className={
        CN('_navigation_wrap', {
          '_desktop' : isWebUI,
          '_mobile' : !isWebUI,
        }, className)
      }>
        <div className={'_navigation_item -logo'}>
          <img src={Logo} alt={Logo}/>
        </div>
        <div className={
          CN('_navigation_box')}>
          <Link className={'_navigation_item -link'}
                to={'/'}
                id={'Headline'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={(e) =>onMouseLeave(e)}
          >
            {t('Headline')}
            <span className={'-dropdownIcon'}/>
          </Link>
          <Link className={'_navigation_item -link'}
                to={'research'}
                id={'Research'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={onMouseLeave}
          >
            {t('Research')}
            <span className={'-dropdownIcon'}/>
          </Link>
          <Link className={'_navigation_item -link'}
                to={'laboratories'}
                id={'Laboratories'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={(e) =>onMouseLeave(e)}
          >
            {t('Laboratories')}
            <span className={'-dropdownIcon'}/>
          </Link>
          <Link className={'_navigation_item -link'}
                to={'ranked'}
                id={'Ranking'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={(e) =>onMouseLeave(e)}
          >
            {t('Ranking')}
            <span className={'-dropdownIcon'}/>
          </Link>
        </div>

        <div className={'_navigation_item -locale'}>
          <Globe size={token.sizeLG - 2} color={token.color}  />
          {t('Language')}
        </div>

        <div className={'_navigation_item -search'}>
          <MagnifyingGlass size={token.sizeLG - 2} color={token.color}  />
          {t('Search')}
        </div>

        {
          currentUser ?
          <>
            <div className={CN('_navigation_item','-signOut')} onClick={onSignOut}>
              {t('SignOut')}
            </div>
            <div className={CN('_navigation_item', '-profile')} onClick={onNavigateToMyProfile}>
              <img src={currentUser.logo} alt={'logo user'}/>
            </div>
          </> :
          <>
            <div className={CN('_navigation_item', '-login')} onClick={onNavigateToSignIn}>
              {t('Login')}
            </div>
            <div className={CN('_navigation_item', '-signUp')} onClick={onNavigateToSignUp}>
              {t('SignUp')}
            </div>
          </>
        }
      </div>
      <DropdownNavigate list={contentOption} isDropdown={isHover}/>
    </>
  )}


export const HeaderPage =  styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '&._navigation_wrap': {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: 200,
      position: 'fixed',
      top: 0,
      zIndex: 10000,
      backgroundColor: 'white'
    },

    '&._desktop': {
      height: '200px',
      padding:  token.paddingMD,
      paddingBottom: 0,
      marginBottom: token.marginLG,
      '._navigation_item.-logo': {
        img : {
          display: 'block',
          width: '65px',
          height: '65px'
        }
      },

      '._navigation_box': {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around' ,
        marginLeft: token.marginXS,
        flex: '1 1 60%',
        '.-link': {
          letterSpacing: 0,
          fontSize: token.fontSize,
          fontWeight: token.fontWeightLG,
          textDecoration: 'none',
          transition: 'color 0.4s cubic-bezier(0.65, 0, 0.35, 1) 0s',
          '.-dropdownIcon': {
            border: 'solid black',
            borderWidth: '0 2px 2px 0',
            height: 6,
            margin: '7px 0 0 7px',
            display: 'inline-block',
            padding: 3,
            transform: 'rotate(45deg)',
            '-webkit-transform': 'rotate(45deg)'
          },
        },

        '.-link:hover' : {
          color: token.colorTextRed
        },

        '.-link:hover .-dropdownIcon': {
          borderColor: token.colorTextRed
        }

      },

      '._navigation_item' : {
        color: token.color,
        display: 'flex',
        flex: '0 1 130px',
        margin: token.marginMD
      },
    },

    '&._mobile': {

    },

    '.-signUp, .-login, .-signOut, .-profile': {
      cursor: 'pointer',
      transform: 'color .3s ease-in-out',

      '&:hover': {
        opacity: .7
      }
    }


  }
})
