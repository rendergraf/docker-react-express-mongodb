import App from '@src/App.tsx'
import store from '@store'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container) 

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
)
