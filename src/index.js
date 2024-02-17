import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n'

import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App tab="" />
        </BrowserRouter>
    </React.StrictMode>
)
