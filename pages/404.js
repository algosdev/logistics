import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Page404() {
  return (
    <div className='page404'>
      <Header dark='dark' />
      <div className='container'>
        <div className='text404'>404</div>
        <div className='oops'>Oops! That page can’t be found.</div>
        <div className='inner'>
          <form>
            <div className='input'>
              <div className='label'>
                It looks like nothing was found at this location. Maybe try a
                search?
              </div>
              <input type='text' placeholder='Search' />
            </div>
          </form>
          <div className='label'>
            It looks like nothing was found at this location. Maybe try a
            search?
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Page404
