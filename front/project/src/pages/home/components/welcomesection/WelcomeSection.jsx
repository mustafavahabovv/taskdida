import React from 'react'
import style from './WelcomeSection.module.css'

function MainImg() {
  return (
    <div className={style.mainimg}>
      <div className={style.content}>
        <h1></h1>
        <p></p>
        <div className={style.containerBtn}>
          <button className={style.firstBtn}></button>
          {/* <button className={style.secondBtn}></button> */}
        </div>
      </div>
      <div className={style.img}>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default MainImg