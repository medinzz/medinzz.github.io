export interface UserObjInterface {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  verified: boolean,
  is_active: boolean
}

export interface AuthTokenObjInterface {
  token: string,
  refresh_token: string,
  success: boolean,
  errors: object,
  user: UserObjInterface
}

export interface TokenPayloadInterface{
  username: string,
  exp: number,
  origIat: number
}
