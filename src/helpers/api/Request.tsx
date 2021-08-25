import { GraphQLClient, request } from 'graphql-request'


const endpoint = "http://127.0.0.1:8000/graphql"

/**
  * API Request Handler
  * 
  * @param {string} token Token for authorization 
  * @param {string} request_body gql body for either queries or mutation
  * @param {object} variables Variables that need to be passed to request_body
  **/
export const requestHandler = async (token: string, request_body: string, variables?: object) => {

  const graphQLClient = new GraphQLClient( endpoint, {
    headers: {
      authorization: 'JWT ' + token,
    },
  })

  return await graphQLClient.request(request_body, variables)
}

/** 
  * API Authentication Handler
  * @param {string} request_body The gql body for authentication mutations
  * @param {object} variables Variables that need to be passed to request_body
  **/
export const authenticationRequestHandler = async(request_body: string, variables: object) => {  
  return await request(endpoint, request_body, variables)
}