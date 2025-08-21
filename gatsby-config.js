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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
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
        // Specify the app host if self-hosting (optional, default: https://us.i.posthog.com)
        apiHost: "https://us.i.posthog.com",
        // Puts tracking script in the head instead of the body (optional, default: true)
        head: true,
        // Enable posthog analytics tracking during development (optional, default: false)
        isEnabledDevMode: false
      }
    }
    // {
    //   resolve: `gatsby-plugin-env-variables`,
    //   options: {
    //     // Define your environment variables here
    //     API_KEY: process.env.API_KEY,
    //     AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    //     PROJECT_ID: process.env.PROJECT_ID,
    //     STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    //     MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    //     APP_ID: process.env.APP_ID,
    //     // Add more variables if needed
    //   },
    // },
  ]
};
