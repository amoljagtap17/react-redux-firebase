import React from 'react'

const SubmitButton = ({ btnText }) => {
  return (
    <div className="input-field">
      <button type="submit" className="btn teal lighten-1 z-depth-0">
        {btnText}
      </button>
    </div>
  )
}

export default SubmitButton
