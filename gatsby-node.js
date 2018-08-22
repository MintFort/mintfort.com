const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

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


exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      value,
      name: "slug"
    })
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
