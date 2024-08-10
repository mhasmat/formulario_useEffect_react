import  { useState, useEffect } from 'react';

const CounterApp = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((c) => c+1);            
      }, 1000);

      return () => {
        clearInterval(interval); 
      };
    }, []);


  return (
    <>
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>        
    </>
  );
}

export default CounterApp;