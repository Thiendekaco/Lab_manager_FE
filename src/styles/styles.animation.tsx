import {keyframes} from "styled-components";

export const fadeDown =  keyframes({
  from : {
    opacity: 0,
  },
  to  : {
    opacity: 1,
  }
})

export  const fadeEnd = keyframes({
  '0%' :{
    opacity: 1,
  },
  '99%' :{
    opacity: 0,
  },
  '100%' : {
    height: 0,
    opacity: 0,
  }
})

export const fadeStart = keyframes({
  '0%' :{
    height: 0,
    opacity: 0,
  },
  '1%': {
    transform: 'scaleY(0.1)',
    opacity: 0,
  },
  '50%': {
    transform: 'scaleY(0.5)',
    opacity: 0,
  },
  '100%': {
    transform: 'scaleY(1)',
    opacity: 1,
  }
})


export const fadeFinish = keyframes({
  '0%' :{
    height: '100%',
    opacity: 1,
  },
  '1%': {
    transform: 'scaleY(1.2)',
    opacity: 0.5,
  },
  '50%': {
    transform: 'scaleY(1.1)',
    opacity: 0.5,
  },
  '100%': {
    transform: 'scaleY(1)',
    opacity: 1,
  }
})



export const fadeInRight = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
  },
  '50%': {
    opacity: 0,
    transform: 'translate3d(50%,0,0)',
  },
  '50.01%': {
    opacity: 0,
    transform: 'translate3d(-100%,0,0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
  }
})

export const scaleButton = keyframes({
    '0%': {
    transform: 'scale(1)'
  },
  '10%': {
    transform: 'scale(.9)'
  },
  '75%': {
    transform: 'scale(1.1)'
  },
  '100%': {
    transform: 'scale(1)'
  }
})


export const fadeRight = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate3d(-100%,0,0)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate3d(0,0,0)',
  }
})


export const transaletFrom = keyframes({
      'from': { left: '100%' },

      'to' : { left: 0 }
})

export const shake = keyframes({
  'from': {left: -2},
    'to': {left: 2}
})




