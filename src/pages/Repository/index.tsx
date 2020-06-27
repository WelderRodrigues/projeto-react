import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import githubLogo from '../../assets/githubLogo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={githubLogo} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={20} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="" alt="" />
                    <div>
                        <strong></strong>
                        <p></p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong></strong>
                        <span></span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="aaa">
                    <div>
                        <strong>aaa</strong>
                        <p>aaa</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
