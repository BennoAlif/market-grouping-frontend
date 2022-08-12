import React from 'react'

import { sWrapper } from './styles'

const Wrapper = ({ children }) => {
    return <div className={sWrapper}>{children}</div>
}

export default Wrapper
