import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import githubLogo from '../../assets/githubLogo.svg';

import { Title, Form, Repositories } from './styles';
const Dashboard: React.FC = () => {
    return (
        <>
            <img src={githubLogo} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>;
            <Form>
                <input placeholder="Digite o nome do repositório" type="text" />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                <a href="#">
                    <img
                        src="https://avatars2.githubusercontent.com/u/11357244?s=460&u=c232d975a857dbbef4048695540ecd22400b9a75&v=4"
                        alt="Welder Rodrigues"
                    />
                    <div>
                        <strong>NLW</strong>
                        <p>Ecoleta - Next Level Week #01 </p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;
