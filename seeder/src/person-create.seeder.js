import { faker } from '@faker-js/faker';
import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import uploadMediumByRemoteUrl from './upload-medium';

const mutationCreateAuthUser = `
mutation MyMutation($password: String!, $email: String = "", $userName: String!, $id: ID = "") {
  createAuthUser(
    data: {userName: $userName, password: $password, email: $email, person: {connect: {id: $id}}}
  ) {
    email
    password
    userName
    person {
      firstName
      lastName
      initials
      memberType
      picture {
        id
        url
      }
    }
  }
}


`;

const memberTypes = [
  'Student',
  'Teacher',
  'Alumnus',
];


(async () => {
  /*
   * Create a User (Local Provider)
  */
  const createPerson = async ({ userName, email, password, firstName, lastName, initials, memberType, picture }) => {
    try {

      const { createAuthUser } = await client.request(mutationCreateAuthUser, { userName, email, password, firstName, lastName, memberType, initials, picture });

      if (!createAuthUser) {
        throw new Error(`Can't create the user with username ${createAuthUser.userName}!`);
      }

      console.log(`User created with username ${createAuthUser.userName}!`)
    } catch (error) {
      console.log(error);
    }
  };

  

  /*
   * Create a Users via promises
  */
  const createPersons = async (n = 20) => {
    for (let i = 0; i < n; i++) {
      const result = await uploadMediumByRemoteUrl(faker.image.avatarGitHub())

      await createPerson({
      userName: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      initials: faker.lorem.word(3),
      memberType: memberTypes[generateValueBetweenMinAndMax(0, memberTypes.length - 1)],
      picture: result.id
      })
    }
  };


  /*
   * Create Models in Auth
  */
  await createPersons(50);

})();