
export interface UserState  {
  readonly currentUser : UserData | null;
  readonly isLoading : boolean;
  readonly error : Error | null
}

export interface AdditionalInformation  {
  displayName ?: string;
  logo ?: string;
}


export interface UserData extends AdditionalInformation{
  createdAt : Date;
  email : string;
}

export interface UserDoc {
  email : string,
  password: string
}
