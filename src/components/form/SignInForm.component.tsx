
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {Theme, ThemeProps} from "../../types";
import styled, {useTheme} from "styled-components";
import CN from "classnames";
import {ButtonShape} from "../button/ButtonShape.component";
import {fadeDown, fadeStart} from "../../styles/styles.animation";
import { useDispatch } from "react-redux";
import { emailSignInStart } from "../../store/user/user.action";


interface Props extends ThemeProps{};

const defaultFormField = {
  password : '',
  email: ''
}
const defauMessage = {
  bool : false,
  message : ''
}

function Component ({className} : ThemeProps){
  const [formField, setFormField] = useState(defaultFormField)
  const [{bool, message}, setErrorMessage] = useState(defauMessage)
  const navigate = useNavigate()
  const { token } = useTheme() as Theme
  const {password, email} = formField
  const dispatch = useDispatch();
  const handleInput = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setFormField({...formField, [e.target.name] : e.target.value})
  }
  // const dispatch = useDispatch()



  const checkValid = (e: React.FormEvent<HTMLFormElement>) =>{
    const formInput = e.currentTarget.querySelectorAll('.sign_in_form-input')

    if(!(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))){
      formInput[0].classList.add('invalid')
      return false
    }
    if(!(password.length >= 8)){
      formInput[1].classList.add('invalid')
      return false
    }
    if(email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)){
      if(password.length >= 8){
        formInput[0].classList.remove('invalid')
        formInput[1].classList.remove('invalid')
        return true
      }
    }
  }
  const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      if(checkValid(e)){
        setFormField(defaultFormField)
        setErrorMessage(defauMessage)
        dispatch(emailSignInStart(email, password))
        navigate('/')
      }else{
        setErrorMessage({
          message: 'ERROR',
          bool: true
        })
      }
    }catch(error){
      console.log((error as Error).message)
    }


  }

  return(
    <div className={CN(className,'sign_in_box')}>
      <h2>Sign In</h2>

      <form className='sign_in_form' onSubmit={e=>handleSubmit(e)} >
        {bool ?
          <div className='sign_in_form-container-notify'>
            <p>{message}</p>
          </div>:<></>}
        <div className='sign_in_form-container-1'>
          <span className='sign_in_form-group'>

              <input type="text" name="email"
                     id="email"
                     value={email}
                     className='sign_in_form-input form-control'
                     placeholder='Enter your email or number here...'
                     onChange={(e)=>handleInput(e)}
                     required
                     autoFocus/>
                  <label htmlFor ="email" className='sign_in_form-label'> Email or number</label>
          </span>
          <select name="fnumber" id="fnumber" className='sign_in_form-select'>
            <option value="+84">VietNam</option>
            <option value="+84">VietNam</option>
            <option value="+84">VietNam</option>
          </select>
        </div>
        <div className='sign_in_form-container-1'>
          <span className='sign_in_form-group'>
              <input type="text" name="password"
                     id="password"
                     className='sign_in_form-input form-control'
                     placeholder='Enter your password here...'
                     value={password}
                     onChange={(e)=>handleInput(e)}
                     required />
              <label htmlFor ="password" className='sign_in_form-label'> Your Password</label>
          </span>
          <button className='sign_in_form-btn' type='button'>SEE</button>
        </div>

        <div className='sign_in_form-container-2'>
          <ButtonShape className="btn btn-danger" type="submit" label={'SIGN IN'} color={token.colorTextLight}/>
          <label htmlFor="checkbox" className='form_label-checkbox'>
            <div style={{ display: 'flex'}}>
              <input type='checkbox' className='sign_in_form-checkbox' id="checkbox"/>
              <div className='checkmark'></div>
              Remmember
            </div>
            <a href='https://www.netflix.com/vn/LoginHelp' className='Link' >Do you need help ? </a>
          </label>

        </div>
        <div className='sign_in_form-footer'>
          This is the first time you join my Web ?
          <Link to='/' className='-link' >Sign up now !</Link>
        </div>
      </form>
    </div>

  )
}

const SignInForm_nonAnimation  = styled(Component)<Props>(({ theme: {token}})=>{

  return({
    zIndex: 1,
    margin: 'auto',
    backgroundColor: token.colorBgLight,
    top: '10%',
    left: '35%',
    borderRadius: 20,
    padding: 60,
    boxShadow: '10px 20px 20px 10px rgba(0, 0, 0, 0.2)',
    maxWidth: 550,

    '.sign_in_form': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },

    '.sign_in_form-container-notify': {
      display: 'block',
      backgroundColor: token.colorBgYellow,
      color: token.colorBgLight,
      border: '1px solid transparent',
      borderRadius: 10,
      width: '100%',
      minHeight: 50,
      padding: token.paddingSM,

    },

    '.sign_in_form-container-1': {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      marginTop: 30,
    },
    '.sign_in_form-group':{
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },

    '.sign_in_form-input': {
      height: 50,
      marginRight: 10,
      paddingLeft: token.paddingMD,
      backgroundColor: token.colorBgSecondary,
      fontWeight: token.paddingLG,
      float: 'left',
      border: 'solid 3px transparent'  ,
      borderRight: 'transparent',
      borderRadius: '5px 0px 0px 5px',
      transition: 'border-color .3s ease-in-out',

      '&:focus': {
        outline: 'none'
      },

      '&:hover': {
        borderColor: token.colorBgGreen
      }
    },

    '.invalid': {
      borderBottom: '1px solid #e87c03'
    },

    '.sign_in_form-label': {
        marginTop: 5,
        cursor: 'text',
        transformOrigin: 'bottom left',
        transform: 'translate(12px, -36px) scale(1.3)',
        opacity: .5,
        overflow: 'hidden',
        maxWidth: '66.66%',
        textOverflow: 'ellipsis',
        fontSize: 'smaller'
    },
    'input.sign_in_form-input::placeholder':{
      opacity: 0,
      fontSize: 'small'
    },

    'input.sign_in_form-input:focus::placeholder':{
      opacity: 1,
    },

    '.sign_in_form-input:focus + .sign_in_form-label,.sign_in_form-input:not(:placeholder-shown) + .sign_in_form-label': {
        cursor: 'pointer',
        opacity: .9,
        transform: 'translate(12px, -50px) scale(1)',
        marginTop: 1
    },
    '.sign_in_form-label, .sign_in_form-input::placeholder':{
        transition: 'ease-in 0.2s'
    },

    '.sign_in_form-select, .sign_in_form-btn': {
        width: 100,
        height: 50,
        border: 'solid 0px white',
        borderLeft: 'transparent',
        borderRadius: '0 5px 5px 0',
        color: token.colorBgLight,
        padding: token.paddingSM,
        fontSize: 'smaller',
        marginLeft: -20,
        backgroundColor: token.colorBgDark
    },

    '.sign_in_form-container-2': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',

      '.btn': {
        marginTop: 70,
        height: 50,
        fontWeight: token.fontWeight,
        fontSize: token.fontSize,
        backgroundColor: token.colorBgGreen,
        border: '1px solid transparent',
        borderRadius: 20
      }
    },


    '.form_label-checkbox':{
      marginTop: 20,
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      fontWeight: token.fontWeight,
      cursor: 'pointer'
    },

    '.sign_in_form-checkbox' : {
        margin: 5,
        display: 'block',
        opacity: 0,
        width: 15,
        height: 15,
        border: 'solid 2px transparent',
        marginRight: 10
      },
    '.checkmark' : {
        display: 'block',
        position: 'absolute',
        border: 'solid 8px transparent',
        borderRadius: 3,
        backgroundColor: token.colorBgSecondary,
        top: 2,
        left: 2,
        marginRight: 2,
      '&:hover': {
        backgroundColor: token.colorBgGreen
      }
    },
    '.checkmark::after':{
      position: 'absolute',
      content: "''",
      display: 'none',
      width: 5,
      top: -7,
      left: -4,
      height: 10,
      border: '1px solid black',
      borderWidth: '0 3px 3px 0',
      webkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)'
    },
    '.sign_in_form-checkbox:checked ~ .checkmark': {
        backgroundColor: token.colorBgGreen
      },

    '.sign_in_form-checkbox:checked ~ .checkmark::after':{
        display: 'block'
      },

    'a' : {
      color: token.colorBgDark,
      textDecoration: 'none',
        '&:hover':{
            color: 'gray',
            cursor: 'pointer'
        }
    },
    '.sign_in_form-footer':{
      marginTop: '20%',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
    }
  })
})


export const SignInForm = styled(SignInForm_nonAnimation)`
  .sign_in_form-container-notify{
    animation: ${fadeStart} .5s ease-in-out;
  }
  
  animation: ${fadeDown} .5s ease-in-out;

`
