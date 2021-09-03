import { gql } from 'graphql-request'

export const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $content: String!
    $userId: ID!){
      createPost(
        input: {
          content: $content
          userId: $userId
        }) {
          success
        }
    }
`