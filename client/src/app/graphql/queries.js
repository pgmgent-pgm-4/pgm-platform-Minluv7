import { gql } from "@apollo/client";

export const GET_AUTHUSER = gql`
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
      }
      authUser {
        email
      }
      
    }
  }
`