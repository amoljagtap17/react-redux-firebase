import React from 'react'
import { Field, ErrorMessage } from 'formik'

const InputField = ({
  type = 'text',
  component = 'input',
  label,
  id,
  name,
  ...rest
}) => (
  <div className="input-field">
    <label htmlFor={id}>{label}</label>
    <Field type={type} component={component} id={id} name={name} {...rest} />
    <ErrorMessage
      name={name}
      component="span"
      className="helper-text"
      style={{ color: 'red' }}
    />
  </div>
)

export default InputField
