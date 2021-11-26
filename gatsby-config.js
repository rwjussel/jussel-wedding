module.exports = {
  siteMetadata: {
    siteUrl: "https://ryanandjill.com",
    title: "Jussel Wedding",
    purpose: "save the date",
    description: "Here's the deal; Lets just do something simple... nothing crazy, just a simple site."
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `timeline`,
        path: `${__dirname}/timeline`,
      }
    }
  ],
};
