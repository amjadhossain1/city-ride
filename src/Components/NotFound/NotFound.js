import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Opps!!</h2>
            <h3>The page you are looking for is not available</h3>
            <p>Go back to <Link to="/home">Home</Link></p>
        </div>
    );
};

export default NotFound;