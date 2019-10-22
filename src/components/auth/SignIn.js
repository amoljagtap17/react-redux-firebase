import React from 'react'
import { Formik, Form } from 'formik'
import { InputField } from '../form'

const SignInForm = () => (
  <Form className="white">
    <h5 className="grey-text text-darken-3">Sign In</h5>
    <InputField type="email" label="Email" id="email" name="email" />
    <InputField
      type="password"
      label="Password"
      id="password"
      name="password"
    />
    <div className="input-field">
      <button type="submit" className="btn teal lighten-1 z-depth-0">
        Login
      </button>
    </div>
  </Form>
)

const initialValues = {
  email: '',
  password: ''
}

const handleSubmit = (values, actions) => {
  console.log('values', values, actions)
  actions.setSubmitting(false)
  actions.resetForm(initialValues)
}

const SignIn = () => {
  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={SignInForm}
      />
    </div>
  )
}

export default SignIn
