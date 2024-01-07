import {SignInForm} from "../../components/form/SignInForm.component";
import {FooterPage} from "../navigate/Footer.page";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {ThemeProps} from "../../types";
import CN from "classnames";
import React, {useCallback} from "react";
import {useNavigate} from "react-router";


interface Props extends ThemeProps{};
const Logo = require('../../assets/images/HustLogo.ico');

function Component({className} : Props){
  const navigate = useNavigate();

  const onNavigateToHome =  useCallback(()=>{
    navigate('/')
  },[navigate])

  return(
    <div className={CN(className,'auth')} >
      <div className={CN('.__auth_logo-container','_navigation_item','-logo')} onClick={onNavigateToHome}>
        <img src={Logo} alt={Logo}/>
      </div>
      <div className='__auth_content' >
        <SignInForm />
      </div>
      <div className='__auth_footer' >
        <FooterPage />
      </div>
    </div>
  )
}



export const AuthenticationSignIn = styled(Component)<Props>(({ theme: {token}})=>{

  return({

  '.__auth_logo-container': {
      position: 'absolute',
      zIndex: 1,
      top: 100,
      left: '3%',
      opacity: 1
  },

  '.__auth_background':{
      position: 'relative',
      opacity: 0.5,
      objectFit: 'cover'

  },

  '.__auth_footer':{
      width: '100%',
      paddingBottom: '1%'
  },

    '._navigation_item.-logo img': {
        display: 'block',
        width: '65px',
        height: '65px'
    },

    '.__auth_content':{
      marginBottom: token.marginXS
    }

  })
})
