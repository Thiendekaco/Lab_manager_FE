import { UserData } from "./user.types";
import {MemberLabInterface} from "./member.types";


export type FieldType  = 'health' | 'iot' | 'ai'
  export enum RoleEnum  {
    ADMIN = 'admin',
    MODER = 'moder',
    MEMBER = 'member'
  }

  export type LaboratoryDetailType = {
    roles: RoleEnum[],
    numberOfMember: number,
    description: string,
    members : MemberLabInterface[]
  }

  export interface LaboratoryBaseInterface {
    id: number,
    nameLab: string,
    location ?: string,
    logo ?: string,
    country ?: string,
    nameSchool ?: string,
    field : FieldType[],
    ranking ?: number,
  }

  export interface LaboratoryInterface extends LaboratoryBaseInterface{
    laboratoryDetail ?: LaboratoryDetailType
  }


export interface LaboratoryState  {
  readonly listLab : LaboratoryInterface[];
  readonly isLoading : boolean;
  readonly error : Error | null
}



