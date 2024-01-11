
import { Link, useLocation } from 'react-router-dom';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import React, {useState, useEffect, useCallback} from 'react';
import styled, {useTheme} from "styled-components";
import {Theme, ThemeProps} from "../../../types";
import CN from "classnames";
import {transaletFrom} from "../../../styles/styles.animation";
import {useNavigate} from "react-router";
import {Mountains } from "phosphor-react";
import Shape from "../../../components/icon/Shape";
import {ButtonShape} from "../../../components/button/ButtonShape.component";

const logo = require('../../../assets/images/HustLogo.ico')
interface Props extends ThemeProps {};


function Component({ className } : Props){
  const location = useLocation()
  const [Doc, setDoc] = useState(null);
  const navigate = useNavigate();
  const { token } = useTheme() as Theme;
  // const getDoc =  async() =>{
  //   const Arr = await getCategoriesAndDocuments("SignUpPage");
  //   setDoc(Arr[1]);
  //
  // }
  // useEffect(()=>{
  //   getDoc();
  // },[])
  const onNavigateToHome =  useCallback(()=>{
    navigate('/')
  },[navigate])

  return(
    <div className={CN("registration_container", className)}>
        <div className='signUp_header'>
          <div className={CN('.__auth_logo-container','_navigation_item','-logo')} onClick={onNavigateToHome}>
            <img src={logo} alt={logo}/>
          </div>
            <Link to='/login' className='signUp_header-sigin'>Đăng Nhập</Link>
        </div>
        <hr />
        <div className='registration_content'>
            <div className='registration_box'>
                <Shape className='registration_image' size={200}
                       icon={<Mountains  size={150}
                                         weight={'fill'}
                                         className={'__button-icon'}
                                         color={token.colorBgGreen} /> }
                       backgroundIcon={token.colorBgGreen}/>
                <span className='registration_step'>Buớc 1/3</span>
                <h3 className='registration_title'>{'ahsdbhasdbbbbb'}</h3>
                <span className='registration_detail'>{'asjbdhhhhaksdjkkkkkkasjd'}</span>
                <Link to={`/signUp/reform${location.search}`} style={{ textDecoration: 'none'}}>
                    <ButtonShape className='registration_btn' label={'Next'}/>
                </Link>
            </div>
        </div>

    </div>
  )

}
 const RegistrationPart_nonAnimation = styled(Component)<Props>(({theme: {token}})=> {

  return({
    width: '100%',
    height: '100%',
    position: 'relative',
    'hr': {
      width: '100%',
      color: '#000'
    },
  '.registration_content': {
      width: '100%',
      padding: 'auto',
      margin: 'auto',
      position: 'fixed',
    '.registration_box': {
        position: 'relative',
        left: '40%',
        top: 100,
        color: '#333',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        width: '20%',
        height: '50%',
      '.registration_image': {
          marginBottom: 50
      },
      '.registration_title, .registration_detail': {
          marginBottom: 20
      },
      '.registration_title': {
          fontWeight: 700
      },
      '.registration_detail': {
          fontWeight: 500,
          marginBottom: 50
      },
      '.registration_btn': {
          height: 70,
          width: '120%',
          position: 'relative',
          left: -20,
          border: 'solid transparent',
          borderRadius: 10,
          backgroundColor: token.colorBgGreen,
          color: token.colorBgLight,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 'x-large'
        }
      }

    },

    '.signUp_header': {
      display: 'flex',
      flexDirection: 'row',
      height: '10%',
    },

    '.signUp_header-logo' : {
        position: 'relative',
        left: 40,
        top: -55
    },

    '.signUp_header-sigin': {
        position: 'relative',
        marginLeft: '75%',
        top: 25,
        color: token.colorBgDark,
        textDecoration: 'none',
        fontSize: 'x-large',
        height: 20
    },

    '._navigation_item.-logo img': {
      display: 'block',
      width: '65px',
      height: '65px'
    },

  })
});

export  const RegistrationPart = styled(RegistrationPart_nonAnimation)`
  .registration_content{
    animation: ${transaletFrom} .7s ease-in-out;
  }
  
`
