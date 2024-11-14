import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button type="button" class="btn btn-primary"><Link className={`nav-link`} to="/">Home</Link></button>
    </div>
  );
};

export default NotFound;
