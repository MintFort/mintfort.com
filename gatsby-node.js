const path = require('path')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

const { languages } = require('./siteConfig')

exports.onCreateNode = async ({ node, store, cache, actions: { createNode } }) => {

  if (node.internal.type === "MediumPost" && node.virtuals.previewImage.imageId.length) {
    const url = `https://cdn-images-1.medium.com/max/600/${node.virtuals.previewImage.imageId}`

    const fileNode = await createRemoteFileNode({
      url,
      store,
      cache,
      createNode,
      createNodeId: id => `medium-img-${id}`
    })

    if (fileNode) {
      node.image___NODE = fileNode.id
    }
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => new Promise(resolve => {
  graphql(`
      {
        allContentfulMarkdownPage {
          edges {
            node {
              node_locale
              slug
            }
          }
        }
      }
    `
  ).then(({ data }) => {
    data.allContentfulMarkdownPage.edges.forEach(({ node }) => {

      if (node.node_locale.includes('en')) {
        createPage({
          path: node.slug,
          component: path.resolve(`src/templates/page.js`),
          context: {
            slug: node.slug
          }
        })
      }

    })
    resolve()
  })
})

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage, createRedirect } = actions

  if (page.path.includes('404') || page.path.includes('blog')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    const component = path.resolve('src/templates/redirect.js')

    deletePage(page)
    createPage({
      ...page,
      component,
      context: {
        languages,
        pathname: page.path
      }
    })

    languages.forEach(local => {
      createRedirect({
        fromPath: `/${local}/blog`,
        toPath: '/blog',
        isPermanent: true,
        redirectInBrowser: true
      })

      createPage({
        ...page,
        originalPath: page.path,
        path: `/${local}${page.path}`,
        context: {
          local: `/${local}/`, // this is a regex variable, not to be confused with a path
          languages,
          pathname: page.path
        }
      })
    })

    resolve()
  })
}
