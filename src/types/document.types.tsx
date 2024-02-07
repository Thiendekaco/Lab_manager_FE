import React from "react";
import {LaboratoryInterface, RoleEnum} from "./laboratory.types";

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
  laboratory ?: any
  description ?: string,
  admin : string
}

export interface ActivityInterface {
  value: string,
  image: string
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
  laboratory ?: LaboratoryInterface[]
}


export type MemberType = {
  name : string,
  image ?: string,
  role : RoleEnum,
  follow : MemberType[]
}
