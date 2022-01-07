import React from 'react';
import { Navbar } from './components';
import { Team, Footer, Roadmap } from './containers';

function TeamBonsai () {
    return (
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Team />
            <Roadmap />
            <Footer />
        </div>
        </div>
    )
}

export default TeamBonsai;