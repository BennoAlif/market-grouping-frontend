import React from 'react'
import { Helmet } from 'react-helmet'

import { sPageWrapper } from './styles'

const PageWrapper = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Market Grouping</title>
            </Helmet>
            <div className={sPageWrapper}>{children}</div>
        </>
    )
}

export default PageWrapper
