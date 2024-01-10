import React from "react";
import {RoleEnum} from "../constants/Role.constant";

export type ContentType = {
  image ?: string,
  link :  string,
  title ?: string,
  badge ?: string,
  createAt ?: string
}


export type ResearchType = {
  image ?: string,
  link :  string,
  title ?: string,
  subTitle : string,
  activity ?: string,
  research ?: React.ReactNode,
  laboratory ?: LaboratoryType
  description ?: string,
  admin : string
}

export interface ActivityInterface {
  value: string,
  image: string
}

export type LaboratoryType = {
  image : string,
  status : 'public' | 'private',
  name: string,
  location ?: string,
  createAt ?: string,
  top ?: number,
  country ?: string,
  activity ?: ActivityInterface[]
}

export interface SocialProfile {
  facebook ?: string,
  telegram ?: string,
  custom_1 ?: string,
  custom_2 ?: string
}

export type UserProfile = {
  image : string,
  name: string,
  location ?: string,
  createAt ?: string,
  school ?: string,
  country ?: string,
  social ?: SocialProfile
  research ?: ResearchType[],
  laboratory ?: LaboratoryType[]
}


export type MemberType = {
  name : string,
  image ?: string,
  role : RoleEnum,
  follow : MemberType[]
}
