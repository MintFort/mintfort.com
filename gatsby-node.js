const path = require('path')
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)

const { languages } = require('./siteConfig')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}

exports.onCreateNode = async ({ node, getNode, store, cache, actions: { createNodeField, createNode } }) => {
  if (node.internal.type === `MarkdownRemark` && node.fileAbsolutePath) {
    const value = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      value,
      name: "slug"
    })
  }

  if (node.internal.type === "MediumPost" && node.virtuals.previewImage.imageId.length) {
    const url = `https://cdn-images-1.medium.com/max/600/${node.virtuals.previewImage.imageId}`

    const fileNode = await createRemoteFileNode({
      url,
      store,
      cache,
      createNode,
      createNodeId: id => id
    })

    if (fileNode) {
      node.image___NODE = fileNode.id
    }
  }
}

exports.createPages = ({ graphql, actions: { createPage } }) => new Promise(resolve => {
  graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(({ data }) => {
    data.allMarkdownRemark.edges.forEach(({ node: { fields } }) => {
      if (fields && fields.slug) {

        createPage({
          path: fields.slug,
          component: path.resolve(`src/templates/page.js`),
          context: {
            slug: fields.slug
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
