import React from 'react'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
    const navigation = useNavigate()
  return (
    <div>
        <h1>404 PAGE NOT FOUND</h1>
        <button onClick={() => navigation(-1)}>Go Back</button>
    </div>
  )
}

export default NotFoundPage