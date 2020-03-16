module.exports = {
  pathPrefix: "/about-blank-ny",
  siteMetadata: {
    prefix: `About:`,
    title: `blank`,
    subtitle: `En form for "personalhåndbok" for ansatte i Blank.`,
    description: `Tanken er at denne siden til enhver tid skal reflektere rutiner og ordninger vi har i Blank. Vi har ofte diskusjoner som ender med at vi blir enig om en praksis, og i de tilfellene er det fint å ha et sted å dokumentere. Alle som jobber i Blank er velkommen til å foreslå endringer.`,
    author: `clara`,
    email: `innboks@blank.no`,
    tel: `982 19 394`,
    name: 'Blank AS',
    adress: 'Youngs gt. 7',
    zip: '0108 Oslo',
    orgnr:'Org. nr: 915 43 3073',
    instagram:'Instagram',
    friendly: 'Kontakt oss, eller kom innom!',
      
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/icon-144x144.png`, // This path is relative to the root of the site.
      },
    },    
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -20
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
