module.exports = {
  siteMetadata: {
    title: "Champion Electrical Contracting, LLC",
    description:
      "Champion Electrical Contracting, LLC is a full-service electrical contractor serving Palm Beach, Broward and Miami-Dade Counties. We offer our services on both commercial and residential projects.",
    url: "https://www.championelectrical.net/",
    siteUrl: "https://www.championelectrical.net/",
    image: "/img/champelec-og-image.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: "https://www.championelectrical.net/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-decap-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
  ],
};
