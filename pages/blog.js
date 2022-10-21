import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import fs from 'fs'
import matter from 'gray-matter'
import serverSideTracking from '../customFunctions/server-side-tracking'
import React, { useEffect } from 'react'
import { useEffectOnce } from 'react-use'

const Blog = ({ data }) => {
  useEffectOnce(() => {
    serverSideTracking('Blog Page View', window.location.href, '3')
  })

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        {/* Title Tag */}
        <title>{data.titleTag}</title>

        {/* Meta Description */}
        <meta content={data.metaDescription} name='description' />

        {/* OG Title */}
        <meta content={data.ogTitle} property='og:title' />

        {/* OG Description */}
        <meta content={data.ogDescription} property='og:description' />

        {/* OG Image */}
        <meta content={data.ogImage} property='og:image' />

        {/* Twitter Title */}
        <meta content={data.twitterTitle} property='twitter:title' />

        {/* Twitter Description */}
        <meta
          content={data.twitterDescription}
          property='twitter:description'
        />

        {/* Twitter Image */}
        <meta content={data.twitterImage} property='twitter:image' />

        <meta property='og:type' content='website' />
        <meta content='summary_large_image' name='twitter:card' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />

        {/* Favicon*/}
        <link href='images/favicon.png' rel='icon' type='image/png' />

        {/* Webclip */}
        <link href='images/webclip.png' rel='apple-touch-icon' />

        {/* Fall Back CSS */}
        {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function (f, b, e, v, n, t, s) {
                      if (f.fbq) return; n = f.fbq = function () {
                        n.callMethod ?
                          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                      };
                      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
                      n.queue = []; t = b.createElement(e); t.async = !0;
                      t.src = v; s = b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t, s)
                    }(window, document, 'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '324857979730418');
                    fbq('track', 'PageView');
                    fbq('trackCustom', '{Blog Page View}', { eventID: '3' });`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=324857979730418&ev=PageView&noscript=1"/>`,
          }}
        />

        {/* Google Analytics Pixel */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `async src="https://www.googletagmanager.com/gtag/js?id=UA-228136749-1"`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-228136749-1');
        `,
          }}
        />

        {/* Google Tag Manager Pixel */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KVMR44T');
          `,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVMR44T" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
      />

      <div>
        <div className='section-uj1l3f'>
          <div className='wrap-uj1l3f'>
            <h1 className='heading-54'>
              Grow Your Jewelry Store Online Easily
            </h1>
            <h3 className='heading-55'>
              With your current POS and processes, integrate your inventory to
              all leading shopping carts seamlessly
            </h3>
          </div>
        </div>
        <div className='wrap-blog'>
          <div className='div-block-65'>
            <Link href='/blog/drive-sales-with-landing-pages-for-retail-jewelers'>
              <a className='div-block-256 w-inline-block'>
                <div className='thumbnail-img' />
                <div>
                  <div className='text-block-7'>
                    <strong className='bold-text'>
                      Grow Your Jeweller Store Online Easily
                    </strong>
                  </div>
                </div>
                <div className='div-block-66'>
                  <div className='div-block-67' />
                  <div className='text-block-8'>Jhom Olison</div>
                  <div className='text-block-9'>
                    5 min read
                    <br />
                  </div>
                </div>
                <div className='div-block-259'>
                  <div className='text-block-10'>
                    Maximize returns by growing your jewelry store business.
                    Integrate your on-premise legacy POS system with Jewelify’s
                    user-friendly cloud-based platform
                    <br />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Script
        id='script-1'
        src='https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=61a866e3f52282c8a4dec5b2'
        type='text/javascript'
        integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='
        crossorigin='anonymous'
      ></Script>
      <Script
        id='script-2'
        src='/js/webflow.js'
        type='text/javascript'
      ></Script>
      {/* [if lte IE 9]><Script> id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"</Script><![endif] */}
    </div>
  )
}

export const getStaticProps = async () => {
  const markdownWithMetadata = fs
    .readFileSync('public/content/blog.md')
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  return {
    props: {
      data: parsedMarkdown.data,
    },
  }
}

export default Blog
