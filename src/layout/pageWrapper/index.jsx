import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../header'
import { sPageWrapper } from './styles'

const PageWrapper = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>Market Grouping</title>
            </Helmet>
            <div className={sPageWrapper}>
                <Header />
                <div>{children}</div>
            </div>
        </>
    )
}

export default PageWrapper
