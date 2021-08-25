export interface UserObjInterface {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  verified: boolean,
  isActive: boolean
}

export interface AuthTokenObjInterface {
  token: string,
  refreshToken: string,
  success: boolean,
  errors: object,
  user: UserObjInterface
}

export interface TokenPayloadInterface{
  username: string,
  exp: number,
  origIat: number
}
