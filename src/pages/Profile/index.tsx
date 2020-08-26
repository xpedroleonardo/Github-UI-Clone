import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';

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

            <div>
              {[1,2,3,4,5,6].map(n => (
                <RepoCard 
                  key={n}
                  username={'xpedroleonardo'}
                  reponame={'Twitter-UI-Clone'}
                  description={'Clone twitter'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={10}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
