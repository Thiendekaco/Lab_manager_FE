import {ThemeProps} from "../../types";
import styled from "styled-components";
import CN from "classnames";


interface Props extends ThemeProps {
  children : React.ReactNode
};


function Component ({className, children} : Props) {

  return (
    <div className={CN(className, 'new-lab-modal')}>
      <div className={'__modal-mask'} />
      <div className={'__modal-content'}>
        {children}
      </div>
    </div>
  )
}


export const BaseModal = styled(Component)(({theme : { token }})=>{

  return({
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex : 10001,
    width: '100%',
    height: '100%',

    '.__modal-mask': {
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: 'black',
      opacity: .5
    },

    '.__modal-content': {
      position: 'absolute',
      zIndex: 1001,
      top: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      left: 0,
      margin: 'auto'

    }
  })
})
