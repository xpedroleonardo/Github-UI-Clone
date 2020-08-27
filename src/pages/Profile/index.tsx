import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {

  const TabContent = () => (

    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">9</span>
    </div>

  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

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
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
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

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
