import React from 'react';
import { Footer, Collection, Header, Erc20 } from './containers';
import { CTA, Navbar } from './components';
import TeamBonsai from './team';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team-bonsai" element={<TeamBonsai />} />
        </Routes>
    </Router>
}

function Home () {
    return (
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <CTA />
        <Collection />
        <Erc20 />
        <Footer />
        </div>
    )
}

export default App;