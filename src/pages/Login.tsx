import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { LOGIN } from '../helpers/api/mutations/Authentication'
import { authRequest } from '../helpers/api/Request'


const LoginPage = (props: any) => {
  
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

  const login = async() => {
    let creds = {
      email: email, 
      password: password
    }
    await authRequest(LOGIN, creds).then(res => console.log(res))
  }
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={login}>
        login
      </Button>
    </Form>
    </>
  )
}

export default LoginPage