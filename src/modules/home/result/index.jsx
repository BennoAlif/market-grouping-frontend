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
                    {subgraph.map((item) => {
                        return (
                            <Item
                                key={item.id}
                                accountList={item.links}
                                title={`Subgraph ${item.id} - ${item.links.length} Akun`}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Result
