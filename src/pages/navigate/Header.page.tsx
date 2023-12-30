import styled, {StyledObject, useTheme} from "styled-components";
import { useTranslation } from  '../../hook';
import { ThemeProps } from "../../types";
import React, {
  AnchorHTMLAttributes,
  MouseEventHandler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { ScreenContext } from "../../context/Screen.context";
import {Link} from "react-router-dom";
import CN from 'classnames';
import { Outlet } from "react-router-dom";
import { Substitute } from "styled-components/dist/types";
import { Globe, MagnifyingGlass   } from "phosphor-react";
import { Theme } from "../../types";
import {
  ContentOptionType,
  DropdownNavigate,
  GroupOptionType
} from "../../components/dropdown/DrodownNavigate.component";
const Logo = require('../../assets/images/HustLogo.ico');


interface Props extends ThemeProps {}

export const Content : ContentOptionType = {
  option: 'Something',
  link: '/something',
}

export const groupContent : GroupOptionType = {
  label: 'Sometimes',
  options: [Content, Content, Content]
}

export const groupContent2 : GroupOptionType = {
  label: 'Sometimes123',
  options: [Content, Content, Content]
}

export const objectGroupContent : Record<string, GroupOptionType[]> = {
  Headline : [groupContent],
  Research: [groupContent, groupContent2],
  Laboratories: [groupContent, groupContent, groupContent2],
  Ranking: [groupContent]
}



const x = window.document;
let mouseLeaveX = 0;
let mouseLeaveY = 0;

export function Component ( { className} : Props) {
  const { t } = useTranslation();
  const { isWebUI } = useContext(ScreenContext)
  const { token } = useTheme() as Theme;
  const [ contentOption, setContentOption ] = useState<GroupOptionType[]>([])
  const [isHover, setIsHover ] = useState<boolean>(false);


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
  }, [])

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
                to={'/headline'}
                id={'Headline'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={(e) =>onMouseLeave(e)}
          >
            {t('Headline')}
            <span className={'-dropdownIcon'}/>
          </Link>
          <Link className={'_navigation_item -link'}
                to={'/research'}
                id={'Research'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={onMouseLeave}
          >
            {t('Research')}
            <span className={'-dropdownIcon'}/>
          </Link>
          <Link className={'_navigation_item -link'}
                to={'/laboratories'}
                id={'Laboratories'}
                onMouseEnter={(e) => onMouseEnter(e)}
                onMouseLeave={(e) =>onMouseLeave(e)}
          >
            {t('Laboratories')}
            <span className={'-dropdownIcon'}/>
          </Link>
          <Link className={'_navigation_item -link'}
                to={'/ranked'}
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

        <div className={'_navigation_item -login'}>
          {t('Login')}
        </div>
        <div className={'_navigation_item -signUp'}>
          {t('SignUp')}
        </div>
      </div>
      <DropdownNavigate list={contentOption} isDropdown={isHover}/>
    </>
  )}


export const HeaderPage =  styled(Component)<Props>(({ theme: { token } }: Props) => {
  return {
    '&._navigation_wrap': {
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    },

    '&._desktop': {
      height: '130px',
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
        alignItems: 'flex-end',
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


  }
})
