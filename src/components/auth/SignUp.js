import React from 'react'
import { Formik, Form } from 'formik'
import { InputField } from '../form'

const SignUpForm = () => (
  <Form className="white">
    <h5 className="grey-text text-darken-3">Sign Up</h5>
    <InputField type="email" label="Email" id="email" name="email" />
    <InputField
      type="password"
      label="Password"
      id="password"
      name="password"
    />
    <InputField label="First Name" id="firstName" name="firstName" />
    <InputField label="Last Name" id="lastName" name="lastName" />
    <div className="input-field">
      <button type="submit" className="btn teal lighten-1 z-depth-0">
        Sign Up
      </button>
    </div>
  </Form>
)

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
}

const handleSubmit = (values, actions) => {
  console.log('values', values, actions)
  actions.setSubmitting(false)
  actions.resetForm(initialValues)
}

const SignUp = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={SignUpForm}
      />
    </div>
  )
}

export default SignUp
