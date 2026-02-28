const { HubTwoTone } = require("@mui/icons-material");
require("dotenv").config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    title: `Turing Hut`,
    description: `The Programming Club of VNR VJIET`,
    siteUrl: `https://turinghut.org/`,
    keywords: `vnrvjiet,
    Turing hut,
    Turinghut,
    VNR,
    Coding club,
    Programming club,
    club,
    VNR cse,
    VNRVJIET`
  },
  flags: {
    DEV_SSR: true
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: "transparent"
            }
          }
        ]
      }
    },

    // MDX plugin
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              quality: 90,
              linkImagesToOriginal: false,
              backgroundColor: "transparent"
            }
          }
        ]
      }
    },

    // Source filesystem for pages (required for MDX pages)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/assets/events`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletters`,
        path: `${__dirname}/src/assets/newsletters`
      }
    },
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: process.env.GATSBY_POSTHOG_API_KEY,
        apiHost: "https://us.i.posthog.com",
        head: true,
        isEnabledDevMode: false
      }
    }
  ]
};
