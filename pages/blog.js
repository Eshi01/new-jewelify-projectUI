/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Pagination from 'react-bootstrap/Pagination'

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
    const matterData = matter(file)

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.')),
    }
  })

  return {
    props: {
      blogs,
    },
  }
}

const App = ({ blogs }) => {
  const router = useRouter()
  return (
    <div className='wrapper'>
      <div
        id='pricing-area'
        className='m-5 d-flex justify-content-center'
        style={{
          background: 'linear-gradient(to bottom,#f3fbfe 50% ,white 50%)',
          height: '40%',
          width: '95%',
          alignContent: 'center',
        }}
      >
        <div
          className='justify-content-center'
          style={{
            paddingLeft: '5%',
            alignContent: 'center',
            paddingTop: '5%',
          }}
        >
          <h1
            className='d-flex justify-content-center'
            style={{ paddingBottom: '3%' }}
          >
            Grow Your Jeweller Store Online Easily
          </h1>
          <p className='d-flex justify-content-center'>
            With your current POS and processes, integrate your inventory to all
            leading shopping carts seamlessly
          </p>
          <div
            className='justify-content-center'
            style={{ alignContent: 'center' }}
          >
            <div
              className='container d-flex justify-content-center'
              style={{ padding: '5%' }}
            >
              <div className='row'>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g21.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    {blogs.map((blog) => (
                      <div key={blog.slug}>
                        <Link href={`/blog/${blog.slug}`}>
                          <h2>Grow Your Jeweller Store Online Easily</h2>
                        </Link>
                      </div>
                    ))}

                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g22.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g23.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g20.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g27.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g19.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g24.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g25.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
                <div className='col-4'>
                  <div style={{ padding: '3%' }}>
                    <img
                      src='images/g26.png'
                      className=''
                      style={{ paddingBottom: '3%' }}
                    ></img>
                    <p className='text-dark'>Jewellery Article</p>
                    <h2>Grow Your Jeweller Store Online Easily</h2>
                    <div className='row d-flex justify-content-center p-3'>
                      <div className='col-2'>
                        <img
                          src='images/g28.png'
                          className=''
                          style={{ paddingBottom: '3%' }}
                        ></img>
                      </div>
                      <div className='col-10 pt-2'>
                        <p className='text-dark'>Jhom Olison | 5 min read</p>
                      </div>
                    </div>
                    <p>
                      Maximize returns by growing your jewelry store business.
                      Integrate your on-premise legacy POS system with
                      Jewelify’s user-friendly cloud-based platform and start
                      selling online. Once integrated, you can:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '4%' }}>
              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>

                <Pagination.Item active>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item disabled>{4}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
export default App
