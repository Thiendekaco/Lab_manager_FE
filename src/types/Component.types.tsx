import React from "react";

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
  country ?: string,
  activity ?: ActivityInterface[]
}
