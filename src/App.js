import React from 'react';
import { Footer, Team, Header } from './containers';
import { CTA, Navbar } from './components';
import Blog from './blog';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
    return <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
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
        <Team />
        <Footer />
        </div>
    )
}

export default App;