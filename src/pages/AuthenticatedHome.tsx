import { useEffect, useState } from 'react'
import CardComponent from '../components/Card'
import { PostsInterface } from '../helpers/interfaces/Interface'
import { useUserCookie } from '../helpers/cookie_handlers/UserCookie'
import InputComponent from '../components/forms/Input'
import { Button } from 'react-bootstrap'
import NavbarComponent from '../components/Navbar'

// graphql related imports
import { useTokenCookie, useRefreshTokenCookie } from '../helpers/cookie_handlers/AuthCookie'
import { requestHandler, authenticationRequestHandler } from '../helpers/api/Request'
import { REFRESH_TOKEN_MUTATION } from '../helpers/api/mutations/Authentication'
import { POSTS_QUERY } from '../helpers/api/queries/Posts'
import { CREATE_POST_MUTATION } from '../helpers/api/mutations/Posts'

const AuthenticatedHomePage = () => {

  // user cookie 
  const [user, , removeUserCookie] = useUserCookie()

  // graphql variables
  const [token, setTokenCookie, removeTokenCookie] = useTokenCookie()
  const [refreshToken, , removeRefreshTokenCookie] = useRefreshTokenCookie()
  const refreshTokenVariable = { refreshToken: refreshToken }

  // state variables
  const [posts, setPosts] = useState([])
  const [toBePost, setToBePost] = useState('')


  const getNewToken = async () => {
    let res = await authenticationRequestHandler(REFRESH_TOKEN_MUTATION, refreshTokenVariable)
    setTokenCookie(res.refreshToken.token)
  }

  const logout = async () => {
    await removeUserCookie()
    await removeTokenCookie()
    await removeRefreshTokenCookie()
  }

  // Create post function
  const createPostFromAPI = async () => {

    const userid = atob(user.id).split(':')
    const request_variables = {
      content: toBePost,
      userId: parseInt(userid[1])
    }

    /**
     * procedural await for promise is needed here since if the token expires,
     * we need to get a new one and set it to the cookie before querying at restricted endpoints
     */
    if (!token) {
      await getNewToken()
    }
    await requestHandler(token, CREATE_POST_MUTATION, request_variables)
    await queryPostsFromAPI()
  }

  // Get posts function
  const queryPostsFromAPI = async () => {

    // pull token first
    await getNewToken()

    // then pull the latest posts
    let res = await requestHandler(token, POSTS_QUERY)
    let posts_component_array = res.posts.map((item: PostsInterface) => {
      return <CardComponent
        key={item.id}
        content={item.content}
        owner={item.owner.username !== user?.username ? item.owner.username : 'you'}
        created={item.created} />
    })
    setPosts(posts_component_array)
  }


  useEffect(() => {
    window.scrollTo(0, 0)
    queryPostsFromAPI()
  }, [])

  return (<>
    <NavbarComponent onClick={logout} authProcessLabel="Sign out" linkTo="/" />
    <section id="main_page">
      <div className="container mt-5 pt-5 px-5">
        <h1 className="home-title text-center">
          Welcome aboard! 
        </h1>
        <div className="p-1 mt-2 row">
          <InputComponent
            controlId="content"
            type="text"
            placeholder="Post anything about crypto"

            /* need to set event to type "any"
            TODO: find a way to not set it into any
            */
            onChange={(e: any) => setToBePost(e.target.value)}
          />
        </div>
        <div className="px-3 mb-5 row">
          <Button className="ms-auto col-sm-2" variant="outline-primary" id="post-btn" onClick={createPostFromAPI}>
            Post
          </Button>
        </div>
        {posts}
      </div>
    </section>
  </>)
}

export default AuthenticatedHomePage