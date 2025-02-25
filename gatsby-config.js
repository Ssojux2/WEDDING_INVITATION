/**
 * Gatsby 구성 파일
 */
module.exports = {
  siteMetadata: {
    title: `Wedding Invitation`,
    siteUrl: `https://ornate-ganache-cbd5c5.netlify.app`,
    description: `소준섭 & 박범지의 결혼식에 초대합니다`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets`,
      },
    },
  ]
};