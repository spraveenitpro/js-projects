"use client"
import { useState } from 'react';


import ButtonIndependentState from "@/app/components/Button-independent-state";
import ButtonSharedState from "@/app/components/Button-shared-state";

export default function Home() {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1);
    return (
        <main className="flex min-h-screen flex-col items-center  p-24 gap-4">
            <h1 className="text-3xl font-bold">React Counter Buttons</h1>
            <h2 className="text-xl">Buttons with shared state</h2>
            <ButtonIndependentState count={count} onClick={handleClick} />
            <ButtonIndependentState count={count} onClick={handleClick} />
            <h2 className="text-xl">Buttons with independent state</h2>
            <ButtonSharedState />
            <ButtonSharedState />
            <p className="text-xl">Count: {count}</p>
        </main>
    );
}

