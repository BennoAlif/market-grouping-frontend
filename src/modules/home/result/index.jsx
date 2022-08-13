import React from 'react'

import Item from './item'

import { sResult, sResultContent } from './styles'

const Result = ({ subgraph, isInitial, isLoading }) => {
    return (
        <div className={sResult}>
            {isInitial ? (
                <div>
                    <p>Silakan untuk memilih minat terlebih dahulu.</p>
                </div>
            ) : isLoading ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : (
                <div className={sResultContent}>
                    {Object.values(subgraph).map((item, index) => {
                        return (
                            <Item
                                key={index}
                                accountList={item.links}
                                title={`Segment ${index + 1} - ${
                                    item.links.length
                                } Akun`}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Result
