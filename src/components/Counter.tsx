import React, {useState} from 'react';
import classes from './Counter.module.scss';
const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const handleIncrement = () => {
        setCounter((prev) => prev + 1)
    }
    const handleDecrement = () => {
        setCounter((prev) => prev - 1)
    }
    return (
        <div className={classes.btn}>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;