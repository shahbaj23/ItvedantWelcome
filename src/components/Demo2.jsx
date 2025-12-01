import React from 'react'

function Demo2() {
  const errorBug = null;
  return (
    <>
    {
      errorBug.map((x)=>{
        <p>{x.Demo2}</p>
      })
    }
    </>
  )
}

export default Demo2