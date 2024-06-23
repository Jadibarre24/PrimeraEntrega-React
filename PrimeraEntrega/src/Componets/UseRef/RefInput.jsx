import React, { useEffect, useRef } from 'react'

const RefInput = () => {

    const refInputFocus = useRef()

    useEffect(() => {
        refInput.current.focus()
    },[])
  return (
    <div>
      <input
        type="text"
        placeholder='nombre'
        ref={refInputFocus} 
      />
    </div>
  )
}

export default RefInput
