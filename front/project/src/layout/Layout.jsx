import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import style from './Layout.module.css'

function Layout() {
    return (
        <div className={style.layout}>
            <Outlet />
        </div>
    )
}

export default Layout