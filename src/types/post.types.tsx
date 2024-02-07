import {Member} from "./member.types";
import {LaboratoryBaseInterface} from "./laboratory.types";


export interface PostBaseInteface {
  title : string,
  subTitle ?: string,
  createAt ?: string,
  logo?: string,
  passed : boolean,
  field : string[],
  context : string
}

export interface PostOfMemberInterface extends PostBaseInteface {
  laboratory : LaboratoryBaseInterface
}
