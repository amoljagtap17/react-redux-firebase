import React from 'react'
import { Field } from 'formik'

const InputField = ({ type = 'text', label, id, name }) => (
  <div className="input-field">
    <label htmlFor={id}>{label}</label>
    <Field type={type} id={id} name={name} />
  </div>
)

export default InputField
