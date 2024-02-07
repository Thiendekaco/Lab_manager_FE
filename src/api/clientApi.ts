import axios from "axios";
import {BASE_URL_REALTIME_DATA, BASE_URL_STATIC_DATA} from "../constants/Url.constant";
import {LaboratoryInterface, Member, MemberBase, PostOfMemberInterface, UserDoc} from "../types";
import {userSagas} from "../store/user/user.saga";

export interface  clientAxiosProps {
  method : string,
  options : {},
  url : string,
  params ?: { [key : string] : string}
};


export const client = async ({method, url, options} : clientAxiosProps) :Promise<any> =>{

  const headers = {
    Accept: "*/*",
    "Content-Type": "application/x-www-form-urlencoded",
  };
  const _option  = new URLSearchParams(
    Object.entries(options)
  ).toString()
  return await axios({ baseURL: BASE_URL_REALTIME_DATA, url, method, data : _option, headers})
    .then(({data}) =>  data)
}

export const getStaticData = async ({ url, params } : clientAxiosProps) : Promise<any> =>{
  const baseURL = BASE_URL_STATIC_DATA;

  return await axios.get(url, { baseURL, params})
}

// export const getCollectionByAddress = async (nftCollectiontAddress : string) =>{
//   return  await  client({ method :'POST',
//     url :'/getCollectionByAddress',
//     options : { collection_address : nftCollectiontAddress }})
// }

export const getListLaboratory = async () => {
  return await client({
    method: 'GET',
    url: '/laboratories',
    options: {}
  })
}

export const createNewLaboratory = async ( laboratoryGeneral : LaboratoryInterface, admin : string) => {
  return await client({
    method: 'POST',
    url: '/laboratories',
    options: {admin, laboratoryGeneral}
  })
}

export const getInformationOfMember = async ( email : string ) :Promise<Member[]> => {

  return await client({
    method: 'GET',
    url: '/members/profile',
    options: {},
    params: {
      "email" : email
    }
  })
}

export const getResearchListOfMember = async ( email : string) : Promise<PostOfMemberInterface[]> =>{

  return await client({
    method: 'GET',
    url: '/researches',
    options: {},
    params: {
      "email" : email
    }
  })
}

export const putMemberJoinIntoLab = async (email : string, lab: string, role: string = 'member')=> {

  return await  client({
    method : 'POST',
    url: '/members/join',
    options: {},
    params: {
      email,
      lab,
      role
    }
  })
}


export const deleteMemberInLab = async (email : string, laboratory: string) => {
  await client({
    method: 'DELETE',
    url: '/members',
    options : {},
    params: {
      email,
      laboratory
    }
  })
}

export const createUserToDocument = async (user : UserDoc, member : MemberBase)=> {
  await client({
    method: 'POST',
    url: '/user',
    options: {
      user ,
      member
    }
  })
}

export const findUserByEmail = async ( email: string) => {
  return await client({
    method: 'GET',
    url: '/user',
    options: {},
    params: {
      email
    }
  })
}


