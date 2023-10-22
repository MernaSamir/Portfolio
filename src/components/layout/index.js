import React from 'react'
import Header from './header'
import Footer from './footer'

export default function layout({children}) {
  return (
    <>
    <Header/>
    <main className="content">{children}</main>

    <Footer/>
    </>
  )
}
