import { GraphQLClient, request, gql } from 'graphql-request'

// change this for different endpoint.
const endpoint = "http://127.0.0.1:8000/graphql"

export const api = async (token: string, body: typeof gql, variables?: object) => {
  const graphQLClient = new GraphQLClient( endpoint, {
    headers: {
      authorization: 'JWT ' + token,
    },
  })

  await graphQLClient.request(body, variables).then(res => {
    return JSON.stringify(res)
  })
}

export const authRequest = async(body: typeof gql, variables: object) => {  
  return await request(endpoint, body, )
}