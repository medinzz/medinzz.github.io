import { gql } from 'graphql-request'

export const LOGIN_MUTATION = gql`
mutation login(
  $email: String!
  $password: String!){
    tokenAuth(
      email: $email
      password: $password){
        success,
		    errors,
		    token,
		    refreshToken,
        user{
          id
          verified
          firstName
          lastName
          isActive
          username
        }
      }
}`

export const REGISTER_MUTATION = gql`
mutation register(
  $username: String!
  $email: String!
  $password: String!){
  register(
    email: $email
    username: $username
    password1: $password
    password2: $password){
      success
      token
      refreshToken	
      errors
    }
}`

export const REFRESH_TOKEN_MUTATION = gql`
mutation refreshToken($refreshToken: String!){
  refreshToken(refreshToken: $refreshToken){
    token
    refreshToken
    success
    errors
    payload
  }
}`
