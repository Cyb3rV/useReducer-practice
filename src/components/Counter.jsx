import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState(0);
    
    const increment = () => setCounter(counter + 1);
    
    
    const decrement = () => setCounter(counter - 1);

    return(
        <div style={{textAlign:"center"}}>
            <h2>Counter</h2>
            <nav>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </nav>
            <h3>{counter}</h3>
        </div>
    )
}