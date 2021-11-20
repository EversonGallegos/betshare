import React from 'react'
import Header from '../containers/Header';
import { Container } from '../components/styles/app.styles';
import GameList from '../containers/GameList';
import { GlobalStyles } from '../styles/global';

const Home = () => {
    return (
        <Container>
            <Header />
            <GameList />
        </Container>
    )
}

export default Home
