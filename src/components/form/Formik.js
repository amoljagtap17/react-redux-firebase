import React from 'react'
import { Formik as FormikWrapper } from 'formik'

const Formik = ({
  enableReinitialize = true,
  validateOnBlur = false,
  validateOnChange = false,
  validationSchema,
  initialValues,
  onSubmit,
  component
}) => {
  return (
    <FormikWrapper
      enableReinitialize={enableReinitialize}
      validateOnBlur={validateOnBlur}
      validateOnChange={validateOnChange}
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
      component={component}
    />
  )
}

export default Formik
