import { useState } from 'react'
import Counter from '/src/components/Counter'
import viteLogo from '/vite.svg'
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Counter />
		</>
	)
}

export default App
