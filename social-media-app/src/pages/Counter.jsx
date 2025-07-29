import React, {useState} from "react";

function Counter() {
    // Use useState to manage the state of the counter 
    const [count, setCount] = useState(0);

    // Function to increment the counter 
    function handleIncrement() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>The counter is ad {count}.</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default Counter;