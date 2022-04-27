import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} | 14-BPL Franchises Management System</title>
        </Helmet>
    );
};

export default PageTitle;