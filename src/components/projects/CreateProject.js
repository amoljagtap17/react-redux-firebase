import React from 'react'
import * as Yup from 'yup'
import { Form } from 'formik'
import { Formik, InputField, SubmitButton } from '../form'

const CreateProjectForm = () => (
  <Form className="white">
    <h5 className="grey-text text-darken-3">Create New Project</h5>
    <InputField label="Title" id="title" name="title" />
    <InputField
      component="textarea"
      label="Project Content"
      id="content"
      name="content"
      className="materialize-textarea"
    />
    <SubmitButton btnText="Create" />
  </Form>
)

const initialValues = {
  title: '',
  content: ''
}

const SignInSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  content: Yup.string().required('Content is required!')
})

const handleSubmit = (values, actions) => {
  console.log('values', values, actions)
  actions.setSubmitting(false)
  actions.resetForm(initialValues)
}

const CreateProject = () => {
  return (
    <div className="container">
      <Formik
        validationSchema={SignInSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={CreateProjectForm}
      />
    </div>
  )
}

export default CreateProject
