import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import currency from '../assets/images/icons/currency.png'
import { LOGIN_MUTATION } from '../helpers/api/mutations/Authentication'
import { authenticationRequestHandler } from '../helpers/api/Request'
import { useTokenCookie, useRefreshTokenCookie } from '../helpers/cookie_handlers/AuthCookie'
import { useUserCookie } from '../helpers/cookie_handlers/UserCookie'
import InputComponent from '../components/forms/Input'
import { Link } from 'react-router-dom'


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
      if (res.tokenAuth.success) {
        setTokenCookie(res.tokenAuth.token)
        setRefreshTokenCookie(res.tokenAuth.refreshToken)
        setUserCookie(res.tokenAuth.user)
      } else {
        let nonFieldErrors = res.tokenAuth.errors.nonFieldErrors
        alert(nonFieldErrors[0].message)
      }

    } else {
      alert('you are already logged in!')
      console.log(user)
    }
  }
  useEffect(() => {
    window.scrollTo(0,0)
  })
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="my-5 row">
            <Form className="p-lg-5 mt-5 mx-auto col-lg-6">
              <div className="text-center row">
                <h1 className="home-title mx-auto">
                  Crypto Media
                </h1>
                <p className="home-subtitle mx-auto">
                  Your next generation social media
                </p>
              </div>
              <div className="p-5">
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
                  inputGuide="You should never share your password."
                />

                {/* 
                Use this if you want to have show password functionality


                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> 
                */}
                <div className="row">
                  <Link to="/register" className="btn btn-light col-6">Sign up</Link>
                  <Button variant="primary" className="col-6" onClick={login}>
                    login
                  </Button>
                </div>
              </div>
            </Form>
            <div className="col-lg-6 mt-5">
              <div className="py-5 row w-100">
                <img className="mx-auto w-50" src={currency} alt="currency.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage