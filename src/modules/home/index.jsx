import React from 'react'

import { Wrapper } from '@/components'

import Result from './result'
import Interest from './interest'

import { sHome } from './styles'

const Home = () => {
    return (
        <Wrapper>
            <div className={sHome}>
                <Interest />
                <Result />
            </div>
        </Wrapper>
    )
}

export default Home
