import { gql } from "@apollo/client";

export const GET_ALLAUTHUSERs = gql`
  query AuthUser($where: AuthUserWhereUniqueInput!) {
    authUser(where: $where) {
      email
      userName
      password
    }
  }
`;

export const GET_ALLAUTHUSER = gql`
  query AuthUsers {
    authUsers {
      userName
      email
    }
  }
`;

export const GET_ALL_AUTHUSERS = gql`
query AuthUsers {
  authUsers {
    email
    userName
    password
    person {
      firstName
      lastName
      memberType
      picture {
        url
      }

    }
  }
}
`

export const GET_AUTHUSER = gql`
query GetAuthUserByID($teamId: String) {
  authUser(where: {userName: $teamId}) {
    id
    email
    password
    person {
      picture {
        url
      }
      firstName
      lastName
      memberType
    }
  }
}`

export const GET_TRAININGS = gql`
query getTrainings {
  trainings {
    description
    title
  }
}
`
export const FIRST_TRAINING = gql`
query MyQuery($first: Int = 1) {
  trainings(first: $first) {
    id
    title
    description
  }
}
`


export const GET_ALLBLOGS = gql`
query GetAllBlogs {
    posts {
      id
      title
      slug
      body
      picture{
        url
      }
    }
  }`

export const GET_BLOG = gql`
query GetBlogById($postId: String!) {
    post(where: { slug: $postId }) {
      id
      title
      slug
      body
      picture{
        url
      }
    }
  }`;

  export const FIRST_BLOGS = gql`
  query FirstPosts($first: Int = 3) {
    posts(first: $first) {
      slug
      title
      picture {
        url
        id
      }
      body
      tags {
        name
      }
    }
  }`

export const GET_EDUCATION_PROGRAM = gql`
query educationProgrammeById($programmeId: ID) {
  educationProgramme(where: {id: $programmeId}) {
    description
    academicYear
    name
    courses {
      ectsFiches
      description
      name
      academicYear
      period
      studypoints
      semester
    }
  }
}`;

export const GETALLEDUCATIONPROGRAMME = gql`
query getAllEducationProgramme {
  educationProgrammes {
    id
    academicYear
    name
    description
    courses {
      id
      academicYear
      ectsFiches
      name
      description
      studypoints
      semester
      period
      programmeLine {
        colorCode
        descriptoin
        name
      }
    }
    authUser {
      email
      userName
    }
  }
}

`

export const GET_ALL_WORKPIECES = gql`
query getAllWorkpieces {
  workpieces {
    description
    title
    link
    picture {
      url
      id
    }
  }
}
`

export const GET_ID_WORKPIECE = gql`
query getIdByWorkpiece($werkstukkenId: String) {
  workpiece(where: {title: $werkstukkenId}) {
    description
    link
    title
    picture {
      url
      id
    }
  }
}
`

export const FIRST_WORKPIECE = gql`
query firstWorkpiece($skip: Int = 1, $first: Int = 1) {
  workpieces(skip: $skip, first: $first) {
    title
    picture {
      id
      url
    }
    link
    description
  }
}
`

export const GET_ALL_SERVICES = gql`
query getAllServices {
  services {
    id
    body {
      html
    }
    title
    synopsis
    picture {
      url
      id
    }
  }
}
`
export const GET_ID_SERVICE = gql`
query serviceById($serviceId: ID) {
  service(where: {id: $serviceId}) {
    title
    
    synopsis
    body {
      markdown
    }
    picture {
      id
      url
    }
  }
}
`
export const FIRST_SERVICES = gql`
query firstServices($first: Int = 1) {
  services(first: $first) {
    title
    id
    synopsis
    body{
      markdown
    }
    picture {
      url
      id
    }
  }
}
`

export const GET_POSTS_WITH_PAGINATION = gql`
query GetPostsWithPagination($first: Int = 10, $skip: Int = 0) {
  postsConnection(first: $first, skip: $skip) {
    pageInfo {
      hasNextPage
      endCursor
      hasPreviousPage
      pageSize
    }
    aggregate {
      count
    }
    edges {
      node {
        id
        title
      }
    }
  }
}

`