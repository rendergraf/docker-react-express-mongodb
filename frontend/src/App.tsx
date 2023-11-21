import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import reactLogo from './assets/react.svg'
import Counter from './components/Counter'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Counter />
		</>
	)
}

export default App
