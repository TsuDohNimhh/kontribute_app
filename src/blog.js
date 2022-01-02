import React from 'react';
import { Navbar } from './components';
import { BlogLanding } from './containers';

function Blog () {
    return (
        <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <BlogLanding />
        </div>
        </div>
    )
}

export default Blog;