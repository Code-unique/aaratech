export const heroSectionQuery = `{
  heroSectionCollection {
    items {
      sys {
        id
      }
      title
      subtitleLeft
      subtitleRight
      heroImage {
        url
        title
      }
    }
  }
}
`;
export const clientLogoSection = `{
  clientLogosSectionCollection {
    items {
      sys {
        id
      }
      title
      websiteLink
      clientLogo {
        url
        title
      }
    }
  }
}
`;

export const worksQuery = `
{
  projectCollection(limit: 6){
    items{
      sys{
        id
      }
      projectTitle
      imagesCollection(limit: 2){
        items{
          url
          title
        }
      }
     
    }
  }
}`;

export function eachWorkQuery(id: string) {
  return `
  {
    projectCollection(limit: 1,where:{sys:{
      id:"${id}"
    }}){
      items{
        sys{
          id
        }
        projectTitle
        projectDescription
        clientName
        projectDate
        clientWebsite

        clientProjectImage {
          url
          title
        }
        theChallengeDescription
        theChallengeImage {
          url
          title
        }
        theOutcomeDescription
        theOutcomeImage {
          url
          title
        }

        imagesCollection{
          items{
            url
            title
          }
        }
        otherProjectsCollection{
          items{
            sys{
              id
            }
            projectTitle
            imagesCollection(limit:2){
              items{
                url
                title
              }
            }
          }
        }
     
      }
    }
  }`;
}

export const testimonialsQuery = `{
 testimonialCollection(limit:9,order: sys_publishedAt_ASC) {
    items {
      sys {
        id
        publishedAt
      }
      reviewerName
      reviewerPhoto{
        url
        title
      }
      description
      ratingNumber
      projectPhoto {
        url
        title
      }
    }
  }
}
`;
export const customProductQuery = `{
  customProductCollection(limit: 6,order:sys_publishedAt_ASC) {
    items {
      sys {
        id
        publishedAt
      }
      title
     link
      image {
        url
        title
      }
    }
  }
}
`;
