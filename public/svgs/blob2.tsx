import React from 'react'

interface Props {
  className?: string
}

const Blob2 = ({className}: Props) => {
  return (
    <div className={`masking ${className}`}>
    </div>
  )
}

export default Blob2