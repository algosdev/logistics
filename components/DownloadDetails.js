import React from 'react'

function DownloadDetails() {
  return (
    <div className='download-cont'>
      <div className='mini-title bold'>Company Details</div>
      <div className='content'>
        <div className='icon'>
          <img src='/pdf-download.png' alt='' />
        </div>
        <div className='details'>
          <div className='leading'>
            <span>Governance Info</span>
            <span className='size'>7.76 KB</span>
          </div>
          <div className='leading bold'>Board Governance</div>
        </div>
      </div>
      <div className='content'>
        <div className='icon'>
          <img src='/pdf-download.png' alt='' />
        </div>
        <div className='details'>
          <div className='leading'>
            <span>Governance Info</span>
            <span className='size'>7.76 KB</span>
          </div>
          <div className='leading bold'>Board Governance</div>
        </div>
      </div>
      <div className='border'></div>
    </div>
  )
}

export default DownloadDetails
