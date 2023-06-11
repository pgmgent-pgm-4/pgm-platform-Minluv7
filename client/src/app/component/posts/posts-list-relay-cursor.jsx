/* eslint-disable react/react-in-jsx-scope */
// Import external modules
import { useEffect, useState } from 'react';
import {
  useQuery,
} from '@apollo/client';
import { Button } from 'reactstrap';

// Import custom components
import { GET_POSTS_WITH_CURSOR } from '../../graphql';
import BlogListGrid from './blog-list-grid';

function PostsListRelayCursor() {
  const { data, fetchMore } = useQuery(GET_POSTS_WITH_CURSOR, {
    variables: {
      first: 10,
      after: null,
    },
  });

  const [nodes, setNodes] = useState();
  const [pageInfo, setPageInfo] = useState();

  useEffect(() => {
    if (data && data.postsConnection) {
      setNodes(data.postsConnection.edges.map((edge) => edge.node));
      setPageInfo(data.postsConnection.pageInfo);
    }
    return () => {};
  }, [data]);

  return (
    <div>
      <BlogListGrid posts={nodes} />
      <Button
        color="primary"
        onClick={() => {
          if (pageInfo.hasNextPage) {
            fetchMore({
              variables: {
                first: 10,
                after: pageInfo.endCursor,
              },
            });
          }
        }}
      >
        Load more...
      </Button>
    </div>
  );
}

export default PostsListRelayCursor;
