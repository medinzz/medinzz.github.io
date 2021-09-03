import { gql } from 'graphql-request'


export const POSTS_QUERY = gql`
query{
  posts{
    id
    owner{
      id
      username
    }
    content
    created
    updated
  }
}

`