import React from 'react'
import { Field, ErrorMessage } from 'formik'

const InputField = ({ type = 'text', label, id, name }) => (
  <div className="input-field">
    <label htmlFor={id}>{label}</label>
    <Field type={type} id={id} name={name} />
    <ErrorMessage
      name={name}
      component="span"
      className="helper-text"
      style={{ color: 'red' }}
    />
  </div>
)

export default InputField
