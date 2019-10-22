import React from 'react'
import * as Yup from 'yup'
import { Form } from 'formik'
import { Formik, InputField, SubmitButton } from '../form'

const SignUpForm = props => (
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
    <SubmitButton btnText="Sign Up" />
  </Form>
)

const initialValues = {
  email: '',
  password: '',
  firstName: '',
  lastName: ''
}

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Email is required!'),
  password: Yup.string().required('Password is required!'),
  firstName: Yup.string()
    .min(2, 'Too short!')
    .max(15, 'Too long!')
    .required('First Name is required!'),
  lastName: Yup.string()
    .min(2, 'Too short!')
    .max(15, 'Too long!')
    .required('Last Name is required!')
})

const handleSubmit = (values, actions) => {
  console.log('values', values, actions)
  actions.setSubmitting(false)
  actions.resetForm(initialValues)
}

const SignUp = () => {
  return (
    <div className="container">
      <Formik
        validationSchema={SignUpSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={SignUpForm}
      />
    </div>
  )
}

export default SignUp
