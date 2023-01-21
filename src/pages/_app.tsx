import React  from 'react'
import App from 'next/app'
import Footer from '../footer'
import { useEffect, useState } from 'react';




class MyApp extends App {
  
  render() {  
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    )
  }
}

export default MyApp
