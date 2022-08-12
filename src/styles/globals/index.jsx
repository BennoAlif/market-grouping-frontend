import React from 'react'
import { Global, css } from '@emotion/react'

const globalCSS = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto';
    }
`

const GlobalCSS = () => {
    return <Global styles={globalCSS} />
}

export default GlobalCSS
