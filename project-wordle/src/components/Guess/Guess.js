import React, { useState } from 'react';

function Guess() {
    const [guess, setGuess] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (guess.length === 5) {
            console.log({ guess });
            setGuess("");
        }
    }
    const handleChange = (e) => {
        setGuess((e.target.value).toUpperCase());
    }

    return (
        <>
            <form className="guess-input-wrapper" onSubmit={handleSubmit}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input id="guess-input" type="text" value={guess} onChange={handleChange} />
            </form>

        </>
    )
}

export default Guess;
