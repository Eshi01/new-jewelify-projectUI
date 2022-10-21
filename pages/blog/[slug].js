import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import serverSideTracking from '../../customFunctions/server-side-tracking'
import { useEffectOnce } from 'react-use'

const Blog = ({ htmlString, data }) => {
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
        <link href='/images/favicon.png' rel='icon' type='image/png' />

        {/* Webclip */}
        <link href='/images/webclip.png' rel='apple-touch-icon' />

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
                    fbq('trackCustom', '${data.eventNameForTracking}', { eventID: '${data.eventIdForTracking}' });`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=324857979730418&ev=PageView&noscript=1"
                    />`,
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
        <div>
          <div className='div-block-98 v2' />
          <div className='section-div'>
            <div className='div-wrapper'>
              <div>
                <a
                  href='https://jewelify.ai/blog'
                  className='link-block-page w-inline-block'
                >
                  <h1 className='heading-135'>Blog &gt; </h1>
                </a>
                <a href='#' className='link-block-page w-inline-block'>
                  <h1 className='heading-135'> Jewelery Article</h1>
                </a>
              </div>
              <div>
                <h1 className='heading-134'>{data.blogTitle}</h1>
              </div>
              <div className='author-div-wrapper'>
                <img
                  src={data.authorImage}
                  loading='lazy'
                  alt=''
                  className='image-69'
                />
                <p className='paragraph-37 _1'>{data.blogAuthor}</p>
                <p className='paragraph-37'>{data.timeToRead}</p>
              </div>
              <div className='div-block-248'>
                <img
                  loading='lazy'
                  sizes='(max-width: 479px) 91vw, (max-width: 1279px) 90vw, 1092px'
                  src={data.blogImage}
                  alt=''
                />
                <div className='blog-content-wrapper'>
                  <div className='social-icon-wrapper-blog'>
                    <div className='div-block-249'>
                      <a href='#' className='link-block-27 w-inline-block'>
                        <img
                          src='/images/f-1.svg'
                          loading='lazy'
                          alt=''
                          className='social-icon-blog-image'
                        />
                      </a>
                      <a href='#' className='link-block-28 w-inline-block'>
                        <img
                          src='/images/Path.svg'
                          loading='lazy'
                          alt=''
                          className='social-icon-blog-image'
                        />
                      </a>
                      <a href='#' className='link-block-29 w-inline-block'>
                        <img
                          src='/images/Union.svg'
                          loading='lazy'
                          alt=''
                          className='social-icon-blog-image'
                        />
                      </a>
                      <a href='#' className='link-block-30 w-inline-block'>
                        <img
                          src='/images/Vector_3.svg'
                          loading='lazy'
                          alt=''
                          className='social-icon-blog-image'
                        />
                      </a>
                      <a href='#' className='link-block-26 w-inline-block'>
                        <img
                          src='/images/Combined-Shape.svg'
                          loading='lazy'
                          alt=''
                          className='social-icon-blog-image'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='blog-content-wrapper-div'>
                    <div className='div-block-255'>
                      <div
                        dangerouslySetInnerHTML={{ __html: htmlString }}
                      ></div>
                    </div>
                    <div className='div-block-251'>
                      <div className='div-block-250'>
                        <p className='paragraph-38'>
                          Published {data.publishDate}
                        </p>
                      </div>
                      <div className='div-block-253'>
                        <div className='div-block-252'>
                          <img
                            src={data.authorImage}
                            loading='lazy'
                            alt=''
                            className='image-65'
                          />
                        </div>
                        <div className='div-block-254'>
                          <p className='paragraph-39'>Written by</p>
                          <p className='blop-author-name'>{data.blogAuthor}</p>
                          <p className='paragraph-40'>
                            {data.authorDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='section-4 wf-section'>
            <div className='section-wrapper-div'>
              <h1 className='heading-137'>Continue Reading</h1>
              <div className='featured-blog-div'>
                <div className='related-blog-div-wrapper'>
                  <div className='blog-related-post-wrapper'>
                    <img
                      src='/images/image-51.png'
                      loading='lazy'
                      alt=''
                      className='image-66'
                    />
                    <h1 className='heading-135'> Jewellery Article</h1>
                    <h1 className='heading-136'>
                      Grow Your Jeweller Store Online Easily
                    </h1>
                    <div className='author-div-wrapper'>
                      <img
                        src='/images/Ellipse-18.png'
                        loading='lazy'
                        alt=''
                        className='image-70'
                      />
                      <p className='paragraph-37 _1'>Jhom Olison</p>
                      <p className='paragraph-37'>5 min read</p>
                    </div>
                    <p className='paragraph-41'>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                  <div className='blog-related-post-wrapper'>
                    <img
                      src='/images/image-52-1.png'
                      loading='lazy'
                      alt=''
                      className='image-66'
                    />
                    <h1 className='heading-135'> Jewellery Article</h1>
                    <h1 className='heading-136'>
                      Grow Your Jeweller Store Online Easily
                    </h1>
                    <div className='author-div-wrapper'>
                      <img
                        src='/images/Ellipse-18.png'
                        loading='lazy'
                        alt=''
                        className='image-70'
                      />
                      <p className='paragraph-37 _1'>Jhom Olison</p>
                      <p className='paragraph-37'>5 min read</p>
                    </div>
                    <p className='paragraph-41'>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                  <div className='blog-related-post-wrapper'>
                    <img
                      src='/images/image-53.png'
                      loading='lazy'
                      alt=''
                      className='image-66'
                    />
                    <h1 className='heading-135'> Jewellery Article</h1>
                    <h1 className='heading-136'>
                      Grow Your Jeweller Store Online Easily
                    </h1>
                    <div className='author-div-wrapper'>
                      <img
                        src='/images/Ellipse-18.png'
                        loading='lazy'
                        alt=''
                        className='image-70'
                      />
                      <p className='paragraph-37 _1'>Jhom Olison</p>
                      <p className='paragraph-37'>5 min read</p>
                    </div>
                    <p className='paragraph-41'>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        id='script-1'
        src='https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=605c57757b3ae676ffca1b7b'
        type='text/javascript'
        integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0='
        crossorigin='anonymous'
      ></Script>
      <Script
        id='script-2'
        src='/js/webflow.js'
        type='text/javascript'
      ></Script>
      {/* [if lte IE 9]><Script id="script-3" src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></Script><![endif] */}
    </div>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('public/posts')
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join('public/posts', slug + '.md'))
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  }
}

export default Blog
