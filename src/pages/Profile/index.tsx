import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'xpedroleonardo'}
            name={'Pedro Leonardo'}
            avatarUrl={'https://avatars3.githubusercontent.com/u/50972494?s=460&u=e5bf2cf9f485f501d8ac807dc587fd096a12ab31&v=4'}
            followers={123}
            following={123}
            company={undefined}
            location={'São Paulo, Brasil'}
            email={'wer@gmail.com'}
            blog={undefined}
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
