import { useState } from 'react';

import React from 'react'

export default function App({ data }) {
	const [count, setCount] = useState(0)
	return (
		<main>
			<h1>app</h1>
			<p>Lorem Ipsum</p>
			<div>{count}</div>
			<button onClick={() => setCount(count + 1)}>{count}</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</main>
	)
}
