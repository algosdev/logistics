import React from 'react'
import Head from 'next/head'
function SEO({ title, keywords, description, image }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />

      <title>{title ? `${title} | MyFrighter` : `MyFrighter`}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={title ? `${title} | Voxe` : `Voxe`}
        key='ogtitle'
      />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta property='og:site_name' content='Voxe' key='ogsitename' />
      {/* <meta property="og:url" content={location.href} key="ogurl" /> */}
      <meta
        property='og:image'
        content={image || 'images/carousel_1.jpg'}
        key='ogimage'
      />
    </Head>
  )
}

export default SEO
