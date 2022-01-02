import React from 'react';
import { Navbar } from './components';
import { BlogLanding, Footer } from './containers';

function Blog () {
    return (
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <BlogLanding />
            <Footer />
        </div>
        </div>
    )
}

export default Blog;