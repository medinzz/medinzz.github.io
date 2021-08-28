import React from 'react'
import { Form } from 'react-bootstrap'

const InputComponent = (props: any) => {
  return (
    <>
    <Form.Group className="mb-3" controlId={props.controlId}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
      <Form.Text className="text-muted">
        {props.inputGuide}
      </Form.Text>
    </Form.Group>
    </>
  )
}

export default InputComponent