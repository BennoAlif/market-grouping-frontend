import React from 'react'
import { Helmet } from 'react-helmet'

const PageWrapper = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Market Grouping</title>
            </Helmet>
            <div>{children}</div>
        </>
    )
}

export default PageWrapper
