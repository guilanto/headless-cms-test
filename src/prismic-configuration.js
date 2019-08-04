export default {

  apiEndpoint: 'https://gto-navigation-web.prismic.io/api/v2',

  // -- Access token if the Prismic repository is not public
  // accessToken: 'xxxxxx',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc) {
    if (doc.type === 'page') return `/${doc.uid}`;
    return '/';
  },
};
