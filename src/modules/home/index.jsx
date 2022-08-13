import axios from 'axios'
import React, { useState } from 'react'

import { Wrapper } from '@/components'

import Result from './result'
import Interest from './interest'

import { sHome } from './styles'

const Home = () => {
    const [subgraph, setSubgraph] = useState({})
    const [isInitial, setIsInitial] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [intersetList, setIntersetList] = useState([])

    const interestCheckboxOnChangeHandler = (e) => {
        if (e.target.checked) {
            setIntersetList([...intersetList, e.target.name])
        } else {
            setIntersetList(
                intersetList.filter((item) => item !== e.target.name)
            )
        }
    }

    const submitButtonHandler = async () => {
        setIsInitial(false)
        setIsLoading(true)

        try {
            const response = await axios.post(
                'https://market-grouping.ew.r.appspot.com/market-grouping',
                {
                    topic: [...intersetList],
                }
            )

            const data = await response.data.data.subgraph

            console.log(response.data.data)
            setSubgraph(data)
        } catch {
            //
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Wrapper>
            <div className={sHome}>
                <Interest
                    isLoading={isLoading}
                    submitButtonHandler={submitButtonHandler}
                    interestCheckboxOnChangeHandler={
                        interestCheckboxOnChangeHandler
                    }
                />
                <Result
                    subgraph={subgraph}
                    isInitial={isInitial}
                    isLoading={isLoading}
                />
            </div>
        </Wrapper>
    )
}

export default Home
