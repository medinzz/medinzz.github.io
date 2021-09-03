export interface UserObjInterface {
  id: number,
  username: string,
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

export interface PostsInterface{
  id: string,
  content: string,
  owner: {
    id: number,
    username: string
  },
  created: string
}
