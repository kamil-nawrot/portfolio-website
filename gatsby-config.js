module.exports = {
  siteMetadata: {
    title: `KamilNawrot - portfolio`,
    description: `Personal website of Kamil Nawrot, aspiring front-end developer on the beginning of his journey. Its main goal is to introduce visitors to me and my projects.`,
    author: `@kamil-nawrot`,
    url: "https://www.kamilnawrot.pl",
    image: '/images/thumbnail.png',
    menuItems: [
      {
        name: 'start',
        path: '/',
      },
      {
        name: 'portfolio',
        path: '/portfolio'
      },
      {
        name: 'blog',
        path: '/blog'
      }
    ],
    languages: ['en', 'pl'],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ["src"],
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1,
          once: true,
          disable: false,
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        svgo: false,
        icon: true,
        rule: {
          include: /\.icon\.svg$/
        }
      }
    },
    `gatsby-plugin-graphql-loader`,
// this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
