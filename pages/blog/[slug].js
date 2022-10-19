import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'

export default function Blog({ frontmatter, markdown }) {
  return (
    <div style={{ padding: '5%' }}>
      <hr />
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
          <h1 className='heading-134'>{frontmatter.blogTitle}</h1>
        </div>
        <div className='author-div-wrapper'>
          <img
            src={frontmatter.authorImage}
            loading='lazy'
            alt=''
            className='image-69'
          />
          <p className='paragraph-37 _1'>{frontmatter.blogAuthor}</p>
          <p className='paragraph-37'>5 min read</p>
        </div>
        <div className='div-block-248'>
          <img
            loading='lazy'
            sizes='(max-width: 479px) 91vw, (max-width: 1279px) 90vw, 1092px'
            src={frontmatter.blogImage}
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
              <ReactMarkdown>{markdown}</ReactMarkdown>
              <br />
              <div className='div-block-251'>
                <div className='div-block-250'>
                  <p className='paragraph-38'>
                    Published {frontmatter.publishDate}
                  </p>
                </div>
                <div className='div-block-253'>
                  <div className='div-block-252'>
                    <img
                      src={frontmatter.authorImage}
                      loading='lazy'
                      alt=''
                      className='image-65'
                    />
                  </div>
                  <div className='div-block-254'>
                    <p className='paragraph-39'>Written by</p>
                    <p className='blop-author-name'>{frontmatter.blogAuthor}</p>
                    <p className='paragraph-40'>
                      {frontmatter.authorDescription}
                    </p>
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
                  Integrate your on-premise legacy POS system with Jewelify’s
                  user-friendly cloud-based platform and start selling online.
                  Once integrated, you can:
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
                  Integrate your on-premise legacy POS system with Jewelify’s
                  user-friendly cloud-based platform and start selling online.
                  Once integrated, you can:
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
                  Integrate your on-premise legacy POS system with Jewelify’s
                  user-friendly cloud-based platform and start selling online.
                  Once integrated, you can:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8')
  )
  let frontmatter = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter, markdown },
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./content/blogs')

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename } }
  })

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  }
}
