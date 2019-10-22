import React from 'react'
import * as Yup from 'yup'
import { Form } from 'formik'
import { Formik, InputField, SubmitButton } from '../form'

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
    <SubmitButton btnText="Login" />
  </Form>
)

const initialValues = {
  email: '',
  password: ''
}

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!')
})

const handleSubmit = (values, actions) => {
  console.log('values', values, actions)
  actions.setSubmitting(false)
  actions.resetForm(initialValues)
}

const SignIn = () => {
  return (
    <div className="container">
      <Formik
        validationSchema={SignInSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={SignInForm}
      />
    </div>
  )
}

export default SignIn
