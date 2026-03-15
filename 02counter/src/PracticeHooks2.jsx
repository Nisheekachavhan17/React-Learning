import React, { useState } from 'react'

const PracticeHooks2 = () => {
    const[name,setName]= useState("");
  return (
    <div>
        <input type="text" onChange={e=>setName(e.target.value)} />
      <h1>u typed :{name}</h1>
    </div>
  )
}

export default PracticeHooks2