import React, { useRef, useState } from 'react'

export default function Demo() {

    const [count1,setCount1] = useState(0);

    const count2 = useRef(0)

    const stateClick = ()=>{
        setCount1(count1+1);
        console.log(setCount1(count1+1))
    }

    const refClick = ()=>{
        count2.current = count2.current + 1
        console.log(count2.current)
    }

  return (
    <div>
        <button className='border p-2 bg-gray-400 ml-10 mx-3' type='button' onClick={stateClick}>useState increment</button>
        <span>State count: {count1}</span> <br /> <br />
        <button className='border p-2 bg-gray-400 ml-10 mx-3' type='button' onClick={refClick}>useRef increment</button>
        <span>Ref count: {count2.current}</span>
    </div>
  )
}
