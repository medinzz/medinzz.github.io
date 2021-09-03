import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useTokenCookie, useRefreshTokenCookie } from '../helpers/cookie_handlers/AuthCookie'
import { authenticationRequestHandler } from '../helpers/api/Request'
import { REGISTER_MUTATION } from '../helpers/api/mutations/Authentication'
import InputComponent from '../components/forms/Input'
import { Link, Redirect } from 'react-router-dom'


const RegisterPage = (props: any) => {


  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setTokenCookie,] = useTokenCookie()
  const [, setRefreshTokenCookie,] = useRefreshTokenCookie()

  const register = async () => {
    let creds = {
      username: username,
      email: email,
      password: password
    }
    if (!token) {
      let res = await authenticationRequestHandler(REGISTER_MUTATION, creds)
      if (res.register.success) {
        setTokenCookie(res.register.token)
        setRefreshTokenCookie(res.register.refreshToken)
      } else {
        let username_errors = res.register.errors.username
        let email_errors = res.register.errors.email
        alert(username_errors[0].message)
        alert(email_errors[0].message)
      }

    } else {
      alert('you are already registered!')
      return <Redirect to='/'></Redirect>
    }
  }

  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <div className="my-5 container-fluid">
        <div className="p-5 text-center row">
          <h1 className="mx-auto home-title col-lg-8">
            Welcome to
            <br />
            Crypto Media!
          </h1>
          <p className="mx-auto home-subtitle">
            Please complete the form below and verify your email afterwards.
          </p>
        </div>
        <Form className="p-1 px-4 mx-auto px-lg-5 col-lg-6">
          <InputComponent
            controlId="formBasicUsername"
            label="Username"
            type="text"
            placeholder="Enter username"

            /* need to set event to type "any"
            TODO: find a way to not set it into any
            */
            onChange={(e: any) => setUsername(e.target.value)}
            inputGuide="use a unique username"
          />

          <InputComponent
            controlId="formBasicEmail"
            label="Email address"
            type="email"
            placeholder="Enter email"

            /* need to set event to type "any"
            TODO: find a way to not set it into any
            */
            onChange={(e: any) => setEmail(e.target.value)}
            inputGuide="We'll never share your email with anyone else."
          />

          <InputComponent
            controlId="formBasicPassword"
            label="Password"
            type="password"
            placeholder="Enter Password"

            /* need to set event to type "any"
            TODO: find a way to not set it into any
            */
            onChange={(e: any) => setPassword(e.target.value)}
            inputGuide="Use a strong password, I haven't made any strong authentication yet."
          />

          <div className="row">
            <Link to="/login" className="btn btn-light col-6">Sign in</Link>

            <Button variant="primary" className="col-6" onClick={register}>
              register
            </Button>
          </div>

        </Form>
      </div>
    </>)
}

export default RegisterPage