// Import Dependencies
import React from 'react';
import { observer } from 'mobx-react';

// Import Utils
import { Direction } from 'utils';

// Services
import { useMobxServices } from 'services';

// Import Layout
import { Flex, Block } from 'layout';

// Import Typography
import { Text } from 'typography';

// Import Common components
import { Button } from 'common/button';

// Import Sub Components
import Commit from './commit';

function HTTPDemo() {
  const { githubService } = useMobxServices();

  return (
    <Flex flexDirection='column'>
      {githubService.isLoaded &&
        githubService.commits.map((commit) => (
          <Commit key={commit.sha} flexDirection='column' p='1rem' my='1rem'>
            <a href={commit.html_url} target='_blank' rel='noopener noreferrer'>
              <Text bold ellipsis>
                {commit.commit.message}
              </Text>
            </a>
            <Flex alignItems='center'>
              <Block as={Direction} dirPaddingRight='1rem'>
                <img
                  src={`${commit.author.avatar_url}&s=20`}
                  alt={commit.commit.author.name}
                />
              </Block>
              <Text bold>{commit.commit.author.name}</Text>
            </Flex>
          </Commit>
        ))}

      {githubService.isLoaded && githubService.canShowMore && (
        <Button
          onClick={() => githubService.showMore()}
          aria-label='Show More Commits'
        >
          Show More
        </Button>
      )}

      {githubService.hasError && (
        <Text error>
          Something went wrong while requesting data from github. <br />
          Most Probably this ip address has hit the rate limit for
          unauthenticated user.
        </Text>
      )}
    </Flex>
  );
}

export default observer(HTTPDemo);
