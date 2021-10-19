import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <h1>Page Not Found</h1>
            <button><Link to='/home'>Back to Home page</Link></button>

        </div>
    );
};

export default NotFound;