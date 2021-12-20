import React, { useState } from 'react';



const Counter = () => {
    const [count, setCount] = useState(0);

    const click = () => {
        setCount(count + 1);

    }
    const decr = () => {
        setCount(count - 1);
    }
    const btn = {
        width: "2pc",

    }
    return (
        <div style={{ display: "block", height: "200px", width: "200px", margin: "auto" }}>

            <button style={btn} onClick={decr}>-</button>

            <h1>{count}</h1>

            <button style={btn} onClick={click}>+</button>
        </div>
    );
}

export default Counter;
