import {UserData} from "./user.types";
import {LaboratoryBaseInterface, RoleEnum} from "./laboratory.types";
import {PostOfMemberInterface} from "./post.types";

export interface MemberBase {
  id ?: number,
  name ?: string,
  university ?: string,
  age ?: number,
  user ?: Pick<UserData, 'email'>
  logo ?: string
}

export interface MemberLabInterface extends MemberBase{
  role: RoleEnum,
  statusJoined: "success" | "pending" | "reject",
  timeJoined: string
}

export interface LabMemberInterface extends LaboratoryBaseInterface , Pick<MemberLabInterface, 'role' | 'statusJoined' | 'timeJoined'> {}

export interface Member extends MemberBase {
   laboratories ?: LabMemberInterface[]
}

export interface MemberState {
  readonly currentMember : Member | null;
  readonly currentPost : PostOfMemberInterface[]
  readonly isLoading : boolean;
  readonly error : Error | null
}
