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
      avatarUrl {
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
      avatarUrl {
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
  }
  `

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
  }
`;

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
}

`;

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

