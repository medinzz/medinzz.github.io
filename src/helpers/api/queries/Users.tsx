import { gql } from 'graphql-request'


export const USER_QUERY =  gql`
query user($id: ID!){
  user(id: $id){
    id
    email
    verified
    dateJoined
    firstName
    lastName
  }
}`