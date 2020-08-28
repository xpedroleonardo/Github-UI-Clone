import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 25px 32px;
`;

export const Line = styled.div`
    max-width: 1280px;
    width: 100%;
    border-top: solid 1px var(--border);
`;

export const GithubLogo = styled(FaGithub)`
    margin-top: 25px;

    width: 24px ;
    height:  24px;
    fill: var(--border);
    flex-shrink: 0;
`;