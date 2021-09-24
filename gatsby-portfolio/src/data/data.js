module.exports = {
  SiteTitle: 'Owen Craston',
  Sitelogo: '#',
  SiteLogoText: 'Owen Craston',
  SiteAuthor: 'Owen Craston',
  SiteDescription: 'Developer',
  defaultDescription: 'Developer', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 24,
  }, 
  SiteSocialLinks: {
    github: 'https://github.com/owencraston',
    linkedin: 'https://www.linkedin.com/in/owencraston/',
  },
  SiteAddress: {
    city: 'Toronto',
    region: 'Ontario',
    country: 'Canada',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'owengc12@gmail.com',
  },
  SiteCopyright: '2021',
};
