import React, {useState} from 'react';
export default function Count(){

    let [count, setcount] = useState(0);

function countt(){
    setcount(count + 1);
}

    return (
        <div>
            <button onClick={countt}>Count= {count}</button>
        </div>
    )
}