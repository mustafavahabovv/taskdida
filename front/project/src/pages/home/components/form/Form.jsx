import React from 'react'
import style from './Form.module.css'

function Form() {
  return (
    <div className={style.form}>
        <p></p>
        <h1></h1>
        <div className={style.input}>
            <input type="email"  placeholder='Enter your email'/>
            <button></button>
        </div>
    </div>
  )
}

export default Form