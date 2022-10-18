---
title: testing-again
blogTitle: Testing Again
publishDate: October 18, 2022 9:32 PM
blogAuthor: Eshi
authorImage: /img/ellipse-1-2-.png
blogImage: /images/g27.png
---
 implementation for repositories connected to Netlify sites. This means that you can use Git to work with large asset files like images, audio, and video, without bloating your repository. It does this by replacing the asset files in your repository with text pointer files, then uploading the assets to the Netlify Large Media storage service.

If you have a Netlify site with Large Media enabled, Netlify CMS (version 2.6.0 and above) will handle Large Media asset files seamlessly, in the same way as files stored directly in the repository.

Requirements
To use Netlify Large Media with Netlify CMS, you will need to do the following:

Upgrade Netlify CMS to version 2.6.0 or above.
Configure Netlify CMS to use the Git Gateway backend with Netlify Identity.
Configure the Netlify site and connected repository to use Large Media, following the Large Media docs on Netlify.
When these are complete, you can use Netlify CMS as normal, and the configured asset files will automatically be handled by Netlify Large Media.

Image transformations
All JPEG, PNG, and GIF files that are handled with Netlify Large Media also have access to Netlify's on-demand image transformation service. This service allows you to request an image to match the dimensions you specify in a query parameter added to the image URL.