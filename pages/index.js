import Head from 'next/head'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Main from '../components/Main'
import Banner from '../components/HomeBanner'
import Footer from '../components/Footer'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import News from '../components/News'
export default function Home() {
  return (
    <>
      <SEO title='My Frighter' />
      <Header active='home' />
      <Banner />
      <Services />
      <AboutUs />
      {/* <Main />*/}
      <Footer />
      <div className='main-container'></div>
    </>
  )
}
