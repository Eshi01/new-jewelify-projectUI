import React from 'react'
import Head from 'next/head'

export default class BlogPagePreview extends React.Component {
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
          <link href='/images/favicon.png' rel='icon' type='image/png' />

          {/* Webclip */}
          <link href='/images/webclip.png' rel='apple-touch-icon' />

          {/* Fall Back CSS */}
          {/* [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] */}
        </Head>
        <div>
          <div>
            <div className='div-block-98 v2' />
            <div className='section-div'>
              <div className='div-wrapper'>
                <div>
                  <a
                    href='blog.html'
                    className='link-block-page w-inline-block'
                  >
                    <h1 className='heading-135'>Blog &gt; </h1>
                  </a>
                  <a href='#' className='link-block-page w-inline-block'>
                    <h1 className='heading-135'> Jewelery Article</h1>
                  </a>
                </div>
                <div>
                  <h1 className='heading-134'>
                    {entry.getIn(['data', 'blogTitle'])}
                  </h1>
                </div>
                <div className='author-div-wrapper'>
                  <img
                    src={entry.getIn(['data', 'authorImage'])}
                    loading='lazy'
                    alt=''
                    className='image-69'
                  />
                  <p className='paragraph-37 _1'>
                    {entry.getIn(['data', 'blogAuthor'])}
                  </p>
                  <p className='paragraph-37'>
                    {entry.getIn(['data', 'timeToRead'])}
                  </p>
                </div>
                <div className='div-block-248'>
                  <img
                    loading='lazy'
                    sizes='(max-width: 479px) 91vw, (max-width: 1279px) 90vw, 1092px'
                    src={entry.getIn(['data', 'blogImage'])}
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
                          dangerouslySetInnerHTML={{
                            __html: entry.getIn(['data', 'body']),
                          }}
                        ></div>
                      </div>
                      <div className='div-block-251'>
                        <div className='div-block-250'>
                          <p className='paragraph-38'>
                            Published {entry.getIn(['data', 'publishDate'])}
                          </p>
                        </div>
                        <div className='div-block-253'>
                          <div className='div-block-252'>
                            <img
                              src={entry.getIn(['data', 'authorImage'])}
                              loading='lazy'
                              alt=''
                              className='image-65'
                            />
                          </div>
                          <div className='div-block-254'>
                            <p className='paragraph-39'>Written by</p>
                            <p className='blop-author-name'>
                              {entry.getIn(['data', 'author'])}
                            </p>
                            <p className='paragraph-40'>
                              {entry.getIn(['data', 'authorDescription'])}
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
      </div>
    )
  }
}
