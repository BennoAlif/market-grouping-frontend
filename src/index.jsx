import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { SnackbarProvider } from 'notistack'

import App from '@/app'
import { GlobalCSS } from '@/styles'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <SnackbarProvider
            maxSnack={1}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        >
            <GlobalCSS />
            <App />
        </SnackbarProvider>
    </StrictMode>
)
