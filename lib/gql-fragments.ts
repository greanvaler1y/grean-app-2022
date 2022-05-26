import { gql } from 'graphql-request';
export const FULL_POST_DATA = gql`
  fragment FullPostData on Post {
    slug
    title
    coverImage {
      url
      width
      height
    }
    featured
    body {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            description
            width
            height
          }
        }
      }
    }
    authorCollection {
      items {
        name
        slug
        picture {
          url
          width
          height
        }
      }
    }
    tagsCollection {
      items {
        title
        slug
      }
    }
    sys {
      firstPublishedAt
    }
    relatedPostsCollection {
      items {
        slug
      }
    }
  }
`;

export const SHORT_POST_DATA = gql`
  fragment ShortPostData on Post {
    slug
    title
    coverImage {
      url
      width
      height
    }
    featured
    body {
      json
    }
    authorCollection {
      items {
        name
        slug
        picture {
          url
          width
          height
        }
      }
    }
    tagsCollection {
      items {
        title
        slug
      }
    }
    sys {
      firstPublishedAt
    }
  }
`;

export const PAGE_DATA = gql`
  fragment PageData on Page {
    title
    slug
    body {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            description
            width
            height
          }
        }
      }
    }
  }
`;

export const AUTHOR_DATA = gql`
  fragment AuthorData on Author {
    slug
    name
    description
    social
    picture {
      url
      width
      height
    }
  }
`;

export const TAG_DATA = gql`
  fragment TagData on Tag {
    slug
    title
    description
  }
`;

export const TAG_AND_TOTAL_POSTS = gql`
  fragment TagAndPosts on Tag {
    slug
    title
    linkedFrom {
      postCollection {
        total
      }
    }
  }
`;

export const AUTHOR_AND_TOTAL_POSTS = gql`
  fragment AuthorAndPosts on Author {
    slug
    name
    linkedFrom {
      postCollection {
        total
      }
    }
  }
`;
