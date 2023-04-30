const { HubTwoTone } = require("@mui/icons-material");

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
    }
  ]
};
