
import {CheckCircle, Mountains} from "phosphor-react";
import { Link, useNavigate } from 'react-router-dom';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import React, {useState, useEffect, useCallback} from 'react';
// import { signOutStart } from "../../store/user/user.action";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserFromUserReducer } from "../../store/user/user.selector";
import {Theme, ThemeProps} from "../../../types";
import styled, {useTheme} from "styled-components";
import {shake, transaletFrom} from "../../../styles/styles.animation";
import CN from "classnames";
import Shape from "../../../components/icon/Shape";
import {ButtonShape} from "../../../components/button/ButtonShape.component";


interface Props extends ThemeProps{};
const logo = require('../../../assets/images/HustLogo.ico')

function Component ({ className}: Props){

  // const dispatch = useDispatch()
  const navigate = useNavigate()
  // const user =  useSelector(selectUserFromUserReducer)
  const [Doc, setDoc] = useState(null);
  const { token } = useTheme() as Theme;
  const getDoc =  async() =>{
    // const Arr = await getCategoriesAndDocuments("SignUpPage");
    // setDoc(Arr[0]);
  }
  // useEffect(()=>{
  //   getDoc();
  // },[])
  const handleSignOut = ()=>{
    // dispatch(signOutStart())
    // if(user.error) return;
    navigate('/');
  }


  const onNavigateToHome =  useCallback(()=>{
    navigate('/home')
  },[navigate])


  return(
    // Doc&&
    <div className={CN(className,"confirm_container")}>
        <div className='signUp_header'>
          <div className={CN('_navigation_item','-logo')} onClick={onNavigateToHome}>
            <img src={logo} alt={logo}/>
          </div>
            <div className='signUp_header-sigin' onClick={handleSignOut}>Đăng Xuất</div>
        </div>
        <hr />
        <div className='confirm_content'>
            <div className='confirm_box'>
              <Shape className='registration_image' size={200}
                     icon={<CheckCircle  size={150}
                                       weight={'fill'}
                                       className={'__button-icon'}
                                       color={token.colorBgGreen} /> }
                     backgroundIcon={token.colorBgGreen}/>
                <span className='confirm_step'>Buớc 3/3</span>
                <h3 className='confirm_title'>{'Something'}</h3>
                <span className='confirm_detail'>{'iasbdhsabdhabsd'}</span>
                <Link to='/home'>
                    <ButtonShape className='confirm_btn' type='submit' label={"Let's get started"}/>
                </Link>
            </div>
        </div>

    </div>
  )

}

 const ConfirmPart_nonAnimation = styled(Component)<Props>(({theme: {token}})=>{

  return({
    '&.confirm_container': {
        width:'100%',
        height: '100%',
        position: 'relative',
        'hr': {
          width: '100%',
          color: '#000'
        },
        '.confirm_content': {
          position: 'fixed',
          width: '100%',
        },

    '.confirm_box': {
      position: 'relative',
      textAlign: 'center',
      gap: token.padding,
      left: '40%',
      top: 150,
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      height: '50%',
      '.confirm_image': {
          width: 50,
          height: 50,
          marginLeft: '40%',
          color: '#ff0000',
          marginBottom: 10
      },
      '.confirm_title, .confirm_detail': {
          marginBottom: 20
      },
      '.confirm_step': {
          marginBottom: 10,
      },
      '.confirm_title': {
          fontWeight: 700,
      },
      '.confirm_detail': {
          fontWeight: 500
      },
      '.confirm_btn': {
          height: 70,
          marginTop: 30,
          position: 'relative',
          border: 'solid transparent',
          borderRadius: 10,
          backgroundColor: token.colorBgGreen,
          color: token.colorBgLight,
          fontWeight: 600,
          fontSize: 'x-large'
        },
      '.form_group': {
        '.form_input' :{
            width: '100%',
            height: 60,
            borderRadius: 5,
            border: 'double 1px gray',
            backgroundColor: 'transparent',
            marginBottom: -10,
            paddingLeft: 10
          },
          'input:focus': {
            outline: 'none'
          },
        '.form_label': {
            position: 'relative',
            transform: 'scale(1.3) translate(5px, -22px)',
            transformOrigin: 'left bottom',
            transition: 'ease-in-out 0.3s',
            marginLeft: 10,
            opacity: 0.5,
        },

        '.form_input:focus + .form_label,.form_input:not(:placeholder-shown) + .form_label': {
            opacity: 1,
            color: 'gray',
            transform: 'scale(0.9) translate(0px, -55px)',
            cursor: 'pointer'
        },

        '.correct_form': {
            border: '1px solid #2bb871'
          },
        '.invalid_form': {
            border: '1px solid #c11119'
          }
        },
      '.checkbox_container':{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
        '.form_checkBox':{
            top: 0,
            position: 'relative',
            left: 0,
            width: 0,
            height: 0,
          },
        '.checkmark': {
            position: 'relative',
            marginRight: 10,
            top: 0,
            left: 0,
            width: 20,
            height: 20,
            cursor: 'pointer',
            border: 'solid 1px black',
            borderRadius: 2
          },
        '.checkmark:hover':{
            backgroundColor: '#ccc'
          },
        '.checkmark::after':{
            content: '',
            position: 'absolute',
            display: 'none',
            left: 7,
            width: 7,
            borderRadius: 2,
            height: 14,
            border: 'solid white',
            borderWidth: '0 3px 3px 0',
            transform: 'rotate(45deg)'
          },
        '.form_checkBox:checked  + .checkmark':{
            backgroundColor: '#2bb871',
          },
        '.form_checkBox:checked + .checkmark::after': {
            display: 'block'
          }
        },
      '.checkbox_container:hover + .notify_form': {
          display: 'block'
        },
      '.notify_form': {
          color: '#c11119',
          display: 'none',
          margiTop: 5,

          position: 'relative'
        }

      }
    },
    '._navigation_item.-logo img': {
      display: 'block',
      width: '65px',
      height: '65px'
    },


    '.signUp_header': {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
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
  })
});


export const ConfirmPart = styled(ConfirmPart_nonAnimation)`

  .confirm_content {
    animation: ${transaletFrom} 0.7s ease-in-out;
  }

  .notify_form{
     animation: ${shake} ease-in-out 0.2s 2 ;
  }
`
