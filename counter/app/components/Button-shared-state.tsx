"use client";
import { useState } from "react";



export default function ButtonSharedState() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4"
            onClick={handleClick}
        >
            I have been clicked {count} times
        </button>
    );
};