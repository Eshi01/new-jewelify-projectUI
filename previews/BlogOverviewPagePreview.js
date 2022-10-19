import Head from 'next/head'

import Link from 'next/link'
import React from 'react'

export default class BlogOverviewPagePreview extends React.Component {
  render() {
    const { entry } = this.props

    return (
      <div>
        <Head>
          <meta charSet='utf-8' />
          {/* Title Tag */}
          <title>{entry.getIn(['data', 'titleTag'])}</title>

          {/* Meta Description */}
          <meta
            content={entry.getIn(['data', 'metaDescription'])}
            name='description'
          />

          {/* OG Title */}
          <meta
            content={entry.getIn(['data', 'ogTitle'])}
            property='og:title'
          />

          {/* OG Description */}
          <meta
            content={entry.getIn(['data', 'ogDescription'])}
            property='og:description'
          />

          {/* OG Image */}
          <meta
            content={entry.getIn(['data', 'ogImage'])}
            property='og:image'
          />

          {/* Twitter Title */}
          <meta
            content={entry.getIn(['data', 'twittertitle'])}
            property='twitter:title'
          />

          {/* Twitter Description */}
          <meta
            content={entry.getIn(['data', 'twitterDescription'])}
            property='twitter:description'
          />

          {/* Twitter Image */}
          <meta
            content={entry.getIn(['data', 'twitterImage'])}
            property='twitter:image'
          />

          <meta property='og:type' content='website' />
          <meta content='summary_large_image' name='twitter:card' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />

          {/* Favicon*/}
          <link href='images/favicon.png' rel='icon' type='image/png' />

          {/* Webclip */}
          <link href='images/webclip.png' rel='apple-touch-icon' />

          {/* Fall Back CSS */}
          {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
        </Head>
        <div>
          <div>
            <div className='section-uj1l3f'>
              <div className='wrap-uj1l3f'>
                <h1 className='heading-54'>
                  Grow Your Jewelry Store Online Easily
                </h1>
                <h3 className='heading-55'>
                  With your current POS and processes, integrate your inventory
                  to all leading shopping carts seamlessly
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
                        Integrate your on-premise legacy POS system with
                        Jewelify’s user-friendly cloud-based platform
                        <br />
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
