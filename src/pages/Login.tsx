import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { LOGIN_MUTATION } from '../helpers/api/mutations/Authentication'
import { USER_QUERY } from '../helpers/api/queries/Users'
import { requestHandler, authenticationRequestHandler } from '../helpers/api/Request'
import currency from '../assets/images/icons/currency.png'
import { useTokenCookie, useRefreshTokenCookie } from '../helpers/cookie_handlers/AuthCookie'
import { useUserCookie } from '../helpers/cookie_handlers/UserCookie'

const LoginPage = (props: any) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUserCookie,] = useUserCookie()
  const [token, setTokenCookie,] = useTokenCookie()
  const [, setRefreshTokenCookie,] = useRefreshTokenCookie()

  const login = async () => {
    let creds = {
      email: email,
      password: password
    }
    if (!token) {
      let res = await authenticationRequestHandler(LOGIN_MUTATION, creds)
      setTokenCookie(res.tokenAuth.token)
      setRefreshTokenCookie(res.tokenAuth.refreshToken)
      setUserCookie(res.tokenAuth.user)
    } else {
      alert('you are already logged in!')
      console.log(user)
    }
  }
  return (
    <>
      <section>
        <div className="p-5 mt-5 row w-100">
          <Form className="p-5 mx-auto col-lg-6">
            <div className="text-center row">
              <h1 className="mx-auto col-8">
                Crypto Media
              </h1>
              <p className="mx-auto w-50">
                Your next generation social media
              </p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={login}>
              login
            </Button>
          </Form>
          <div className="col-lg-6">
            <div className="py-5 row w-100">
              <img className="mx-auto w-50" src={currency} alt="currency.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage