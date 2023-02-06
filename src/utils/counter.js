import {useState} from 'react';

export function Counter() {
    const [count, setcount] = useState(0);

    return(
    <> <p>clicked {count} times</p>
        <button onClick={() => setcount (count + 1)}>
        Click me - 
      </button>
      </>
   )
}

