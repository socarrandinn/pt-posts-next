'use client'
import React from 'react'

const ErrorHandle = ({ error }: any) => {
  return (
    <div><pre> {JSON.stringify(error, null, 2)} </pre></div>
  )
}

export default ErrorHandle