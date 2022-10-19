import { useEffect } from 'react'
import BlogOverviewPagePreview from '../previews/BlogOverviewPagePreview'
import BlogPagePreview from '../previews/BlogPagePreview'

const Admin = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      CMS.init()
      // hook our preview up to the cms

      CMS.registerPreviewTemplate(
        'Blog Page SEO Settings',
        BlogOverviewPagePreview
      )
      CMS.registerPreviewTemplate('blog', BlogPagePreview)
    })()
  }, [])

  return <div />
}

export default Admin
