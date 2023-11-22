import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import store from './store'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App tab="home" />
		</Provider>
	</React.StrictMode>,
)
