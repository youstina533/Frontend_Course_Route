import React, {useState} from 'react'
import Child from './Child.jsx'

export default function Parent() {
    let [age,setAge] = useState(20);
  return (
    <div>
      <Child age={age} />
    </div>
  )
}
