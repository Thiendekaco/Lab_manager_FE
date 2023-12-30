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
