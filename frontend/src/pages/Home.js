import React from 'react'
import GameList from '../containers/GameList';
import Layout from '../containers/Layout';
import { service } from '../services/api';

const Home = () => {
    return (
        <Layout>
            <GameList />
        </Layout>
    )
}

export default Home
