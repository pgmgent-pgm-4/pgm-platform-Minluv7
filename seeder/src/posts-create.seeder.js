import { faker } from '@faker-js/faker';
import { htmlToSlateAST } from '@graphcms/html-to-slate-ast';

import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';
import uploadMediumByRemoteUrl from './upload-medium';

const mutationCreatePost = `
mutation MyMutation($body: String = "", $slug: String = "", $title: String = "", $id: ID = "") {
  createPost(
    data: {title: $title, body: $body, slug: $slug, picture: {connect: {id: $id}}}
  ) {
    body
    id
    slug
    title
    picture {
      url
      id
    }
  }
}




`;



(async () => {
  /*
  *
  */

  /*
   * Create a Article = Post (Local Provider)
  */
  const createPost = async ({ title, body, slug, pictureId }) => {
    try {
      const { createPost } = await client.request(mutationCreatePost, { title, body, slug, id: pictureId });

      if (!createPost) {
        throw new Error(`Can't create the post with title ${createPost.title}!`);
      }

      console.log(`Post created with title ${createPost.title}!`)
    } catch (error) {
      console.log(error);
    }
  };

  /*
   * Create posts via promises
  */
  const createPosts = async (n = 20) => {
    for (let i=0; i < n;i++) {
      const result = await uploadMediumByRemoteUrl(faker.image.avatarGitHub())
      await createPost({
        title: faker.lorem.sentence(generateValueBetweenMinAndMax(4, 10)), 
        body: faker.lorem.text(),
        slug: faker.lorem.slug(),
        pictureId: result.id
    })
  }
  };

  /*
   * Create posts
  */
  await createPosts(50);

})();