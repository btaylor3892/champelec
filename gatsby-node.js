const path = require("path");
const kebabCase = require("lodash/kebabCase"); // Only import what we need
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach((e) => console.error(e.toString()));
    throw new Error("GraphQL query failed");
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((edge) => {
    const id = edge.node.id;
    const templateKey = String(edge.node.frontmatter.templateKey);

    createPage({
      path: edge.node.fields.slug,
      // tags: edge.node.frontmatter.tags, // <-- Removed this (see note below)
      component: path.resolve(`src/templates/${templateKey}.js`),
      // additional data can be passed via context
      context: {
        id,
      },
    });
  });

  // --- Tag pages ---
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((edge) => {
    // Use optional chaining instead of _.get
    if (edge?.node?.frontmatter?.tags) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });

  // Eliminate duplicate tags with a Set
  const uniqueTags = [...new Set(tags)];

  // Make tag pages
  uniqueTags.forEach((tag) => {
    const tagPath = `/sectors/${kebabCase(tag)}/`; // Use the specific import
    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
