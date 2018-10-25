const path = require('path')
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`)

const { languages } = require('./siteConfig')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        siteConfig: path.resolve(__dirname, "siteConfig")
      },
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  })
}


exports.onCreateNode = async ({ node, getNode, store, cache, actions: { createNodeField, createNode } }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      value,
      name: "slug"
    })
  }

  if (node.internal.type === "MediumPost" && node.virtuals.previewImage.imageId.length) {
    const url = `https://cdn-images-1.medium.com/max/1000/${node.virtuals.previewImage.imageId}`

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
      createPage({
        path: fields.slug,
        component: path.resolve(`./src/utils/markdown-template.js`),
        context: {
          slug: fields.slug
        }
      })
    })
    resolve()
  })
})


exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.includes('404')) {
    return Promise.resolve()
  }

  return new Promise(resolve => {
    const component = path.resolve('src/utils/redirect.js')

    deletePage(page)
    createPage({
      ...page,
      component,
      context: {
        languages,
        locale: '',
        routed: false,
        redirectPage: page.path
      }
    })

    languages.forEach(locale => createPage({
      ...page,
      originalPath: page.path,
      path: `/${locale}${page.path}`,
      context: {
        languages,
        locale,
        routed: true,
        originalPath: page.path
      }
    }))

    resolve()
  })
}
