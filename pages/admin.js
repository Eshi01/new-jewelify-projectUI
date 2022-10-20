import { useEffect } from 'react'
import BlogPagePreview from '../previews/BlogPagePreview'

const Admin = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      CMS.init()
      // hook our preview up to the cms
      CMS.registerPreviewTemplate('blog', BlogPagePreview)
      CMS.registerPreviewStyle('css/normalize.css')
      CMS.registerPreviewStyle('css/webflow.css')
      CMS.registerPreviewStyle('css/jewelify.webflow.css')
    })()
  }, [])

  return <div />
}

export default Admin
