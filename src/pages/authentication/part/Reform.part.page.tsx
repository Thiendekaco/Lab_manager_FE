

import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';
import React, {useState, useEffect, FormEvent, ChangeEvent, useCallback} from 'react';
import styled from "styled-components";
import {ThemeProps} from "../../../types";
import CN from "classnames";
import {shake, transaletFrom} from "../../../styles/styles.animation";
import {ButtonShape} from "../../../components/button/ButtonShape.component";
// import { useDispatch, useSelector } from 'react-redux'
// import { signUpStart } from '../../store/user/user.action';
// import { selectUserFromUserReducer}from '../../store/user/user.selector';

const logo = require('../../../assets/images/HustLogo.ico')
let demoMessage = ['','',''];

interface Props extends ThemeProps{};

function Component  ({ className} : Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const naviage = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector(selectUserFromUserReducer)
  const defaultEmail = location.search.replace('?email=', '').replace('%40', '@')

  const [Doc, setDoc] = useState(null);
  const [message, setMessage] = useState(['','',''])
  const [formField, setFormField] = useState({email : defaultEmail, password: ''})
  const {email, password} = formField

  // const getDoc =  async() =>{
  //   const Arr = await getCategoriesAndDocuments("SignUpPage");
  //   setDoc(Arr[2]);
  // }
  // useEffect(()=>{
  //   getDoc();
  // },[])

  const checkValid = (e: FormEvent<HTMLFormElement>) =>{
    const formInput = e.currentTarget.querySelectorAll('.form_input')
    const checkboxContainer = e.currentTarget.querySelector('.checkbox_container')
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      formInput[0].classList.add('invalid_form');
      demoMessage[0] = 'Email của bạn chưa đúng định dạng'
    }

    if(!(checkboxContainer?.querySelector('.form_checkBox') as HTMLInputElement)?.checked){
      checkboxContainer?.querySelector('.checkmark')?.classList.add('invalid_form')
      demoMessage[1] = 'checkBox chưa được check'
    }else{
      checkboxContainer?.querySelector('.checkmark')?.classList.remove('invalid_form')
      demoMessage[1] = ''
    }

    if(!(password.length >= 8)){
      formInput[1].classList.add('invalid_form');
      demoMessage[2] = 'Mật khẩu của bạn phải tối thiểu 8 ký tự'
    }else{
      formInput[1].classList.remove('invalid_form');
      demoMessage[2] = ''
    }
    if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      formInput[0].classList.remove('invalid_form');
      demoMessage[0] = ''
      if(password.length >= 8){
        if((checkboxContainer?.querySelector('.form_checkBox') as HTMLInputElement)?.checked){
          checkboxContainer?.querySelector('.checkmark')?.classList.remove('invalid_form')
          formInput[1].classList.remove('invalid_form');
          setMessage(demoMessage) ;
          return true
        }
      }
    }
    setMessage(demoMessage)
    return false;
  }

  const incorrectAccount = (e :  FormEvent<HTMLFormElement>)=>{
    const formInput = e.currentTarget.querySelectorAll('.form_input')
    formInput[0].classList.add('invalid_form');
    demoMessage[0] = 'Email của bạn đã được sử dụng'
    setMessage(demoMessage)
  }
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>)=>{
    setFormField({...formField, [e.target.id] : e.target.value})
  }

  const onNavigateToHome =  useCallback(()=>{
    navigate('/')
  },[navigate])

  const handleSubmitFormField = (e : FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(checkValid(e)){
      // dispatch(signUpStart(email, password));
      // if(user.error && user.error.code === 'auth/email-already-in-use'){
      //   incorrectAccount(e)
      // }else{
        naviage('/signUp/confirm');
      // }
    }

  }

  return(
    // Doc&&
    <div className={CN(className,"reform_container")}>

        <div className='signUp_header'>
          <div className={CN('_navigation_item','-logo')} onClick={onNavigateToHome}>
            <img src={logo} alt={logo}/>
          </div>
            <Link to='/login' className='signUp_header-sigin'>Đăng Nhập</Link>
        </div>
        <hr />
        <div className='reform_content'>
            <div className='reform_box'>
                <span className='reform_step'>Buớc 2/3</span>
                <h3 className='reform_title'>{'SIbhajusbhcdabshadxad'}</h3>
                <span className='reform_detail'>{'asjnkjandjnajsndjasda'}</span>
                <form  onSubmit={e =>handleSubmitFormField(e)} className={'__form-wrapper'}>
                    <div className='form_group'>
                        <input type='text' id='email' className='form_input '
                               placeholder='Email'
                               autoFocus
                               onChange={e =>handleOnchange(e)}
                               value={email}
                               required/>
                    </div>
                    <div className='form_group'>
                        <input type='password' id='password'
                               placeholder='Password'
                               className='form_input'
                               onChange={e =>handleOnchange(e)}
                               value={password}
                               required/>
                    </div>
                    <label className='checkbox_container'>
                        <input type="checkbox" id='checkbox' className='form_checkBox' />
                        <div className='checkmark'></div>
                        Bạn đồng ý với các điều khoản của chúng tôi
                    </label>
                    <ButtonShape className='reform_btn' type='submit' label={'Next'}/>
                </form>
            </div>
        </div>

    </div>
  )
}


const ReformPart_NonAnimation = styled(Component)<Props>(({theme: {token}}) => {

  return ({
    width: '100%',
    height: '100%',
    position: 'relative',

    'hr': {
      width: '100%',
      color: '#000'
    },

    '.reform_content': {
      position: 'fixed',
      width: '100%',
    },
    '.__form-wrapper': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      gap: token.padding
    },

    '.form_group': {
      marginBottom: token.marginMD
    },
    '.reform_box': {
      position: 'relative',
      left: '40%',
      top: '40px',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      width: '30%',
      height: '50%',
    },
    '.reform_title, .reform_detail': {
      marginBottom: 20
    },
    '.reform_step': {
      marginBottom: 10
    },
    '.reform_title': {
      fontWeight: 700
    },
    '.reform_detail': {
      fontWeight: 500
    },
    '.reform_btn': {
      height: 70,
      width: '100%',
      marginTop: 30,
      position: 'relative',
      border: 'solid transparent',
      borderRadius: 10,
      backgroundColor: token.colorBgGreen,
      color: token.colorBgLight,
      fontWeight: 600,
      fontSize: 'x-large'
    },
        '.form_input': {
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
        '.form_input:focus + .form_label, .form_input:not(:placeholder-shown) + .form_label': {
          opacity: 1,
          color: 'gray',
          transform: 'scale(0.9) translate(0px, -55px)',
          cursor: 'pointer'
        },

        '.invalid_form': {
          border: '1px solid #c11119'
        },

      '.checkbox_container': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        '.form_checkBox': {
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
          borderRadius: 2,
          '&:hover': {
            backgroundColor: '#ccc'
          }
        },

        '.checkmark::after': {
          content: "''",
          position: 'absolute',
          display: 'none',
          width: 7,
          borderRadius: 2,
          height: 14,
          left: 4,
          top: -1,
          border: 'solid white',
          borderWidth: '0 3px 3px 0',
          transform: 'rotate(45deg)'
        },
        '.form_checkBox:checked  + .checkmark': {
          backgroundColor: token.colorBgGreen
        },
        '.form_checkBox:checked + .checkmark::after': {
          display: 'block'
        },
        '.invalid_form': {
          border: '1px solid #c11119'
        }
      },
      '.notify_form': {
        color: '#c11119',
        display: 'block',
        marginTop: 5,
        position: 'relative'
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
})


export const ReformPart = styled(ReformPart_NonAnimation)`

  .reform_content {
    animation: ${transaletFrom} 0.7s ease-in-out;
  },

  .notify_form{
    animation: ${shake} ease-in-out 0.2s 2 ;
  }
    
`
