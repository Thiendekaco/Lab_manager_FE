import React from "react";
import { Crown, Users, Ghost  } from "phosphor-react";
import { RoleEnum } from "../types";




export const RoleIcon : Record<RoleEnum, React.ReactNode> = {
  [RoleEnum.ADMIN] : <Crown  weight={"fill"} size={20} color={"#F8F22A"} className={'__role-icon'}/>,
  [RoleEnum.MEMBER] : <Users weight={"fill"} size={20}  color={'#2C6ED8'} />,
  [RoleEnum.MODER] : <Ghost weight={"fill"} size={20}  color={'#65d82c'} />
}
