import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import classes from './Layout.module.css'
function Layout({children}) {
  return <>
    <Header/>
    <main className={classes.main}>{children}</main>
    <Footer/>
  </>
}

export default Layout