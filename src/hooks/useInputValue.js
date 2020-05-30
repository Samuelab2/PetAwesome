import React, { useState } from 'react'

export const useInputValue = initialVaue => {
  const [value, setValue] = useState(initialVaue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}