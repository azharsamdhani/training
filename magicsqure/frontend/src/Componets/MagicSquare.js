import React from 'react'
import axios from "axios";

export const MagicSquare = () => {
    const [data,setData] =React.useState([])

    React.useEffect(()=>{
    axios.get('/magicsquare',data).then((res)=>console.log(res.data))})
   

  return (
    <div>
      <input type="text" placeholder='please enter the dimensions of a square matrix'/>
    </div>
  )
}
