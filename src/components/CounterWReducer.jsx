import { useReducer, useState } from "react"

function CounterReducer(state, action){
    switch(action.type){
        case "increment":
            return {counter:state.counter + 1};
        case "increment5":
            return {counter:state.counter + action.payload};
        case "reset":
            return {counter: 0};
        case "decrement":
            console.log("test");
            return {counter:state.counter - 1};
        case "decrement5":
            return {counter:state.counter - action.payload};
        default:
            return state;
    
    }
}

const initialState = {counter:0};



export default function Counter(){
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(CounterReducer, initialState);
    
    // const increment = () => setCounter(counter + 1);

    // const decrement = () => setCounter(counter - 1);

    const increment = () => dispatch({type: "increment"});
    const decrement = () => dispatch({type: "decrement"});
    const reset = () => dispatch({type: "reset"});
    const increment5 = () => dispatch({type: "increment5", payload: 5});
    const decrement5 = () => dispatch({type: "decrement5", payload: 5});


    return(
        <div style={{textAlign:"center"}}>
            <h2>Counter</h2>
            <nav>
                <button onClick={increment5}>+5</button>
                <button onClick={increment}>+</button>
                <button onClick={reset}>0</button>
                <button onClick={decrement}>-</button>
                <button onClick={decrement5}>-5</button>
            </nav>
            <h3>{state.counter}</h3>
        </div>
    )
}