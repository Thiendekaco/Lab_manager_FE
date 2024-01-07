import {Outlet, useNavigate} from "react-router"
import {ThemeProps} from "../../types";
import CN from "classnames";
import styled from "styled-components";
import {useEffect, useRef} from "react";


interface Props extends ThemeProps{};

function Component ({className} : Props) {
  const navigate = useNavigate();
  const time = useRef(1);
  useEffect(() => {
    if(time.current === 1){
      navigate('registration');
      time.current = 2;
    }

  }, [navigate]);

  return(
    <div className={CN(className,"signUp_container")}>
      <Outlet/>
    </div>
    )

}


export const AuthenticationSignUp = styled(Component)<Props>(({theme: {token}})=>{

  return({
      backgroundColor: token.colorBgLight,
      width: '100%',
      height: '721'

  })
})
