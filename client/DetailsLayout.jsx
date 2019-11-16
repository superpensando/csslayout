import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const DetailsLayout = ({ children }) => {
    return (
        <Layout>
            <div className="mw8 center">
                <div className="mv4">
                    <Link to="/" className="link black pa1 ba b--black-60">CSS Layout</Link>
                </div>
                <div className="mb5">
                    {children}
                </div>
            </div>
        </Layout>
    );
};

export default DetailsLayout;