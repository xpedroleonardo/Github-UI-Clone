import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/xpedroleonardo'}>
          xpedroleonardo
        </Link>
        <span>/</span>
        <Link className={'reponame'} to={'/xpedroleonardo/Twitter-UI-Clone'}>
          Twitter-UI-Clone
        </Link>
      </Breadcrumb>

      <p>sadfughnafdkjfghvnasdfkiujghasdfjguhhbnukjmhnk</p>


      <Stats>
        <li>
          <StarIcon />
          <b>0</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/xpedroleonardo/Twitter-UI-Clone'} target="_blank">
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
