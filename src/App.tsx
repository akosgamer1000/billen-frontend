
import { useEffect, useState } from 'react'
import './App.css'
import { billen } from './billen'
function  App() {

  const[bill,getBill]=useState([] as billen[])
  useEffect(()=>{

    async function laod() {
      
        const adat= await fetch("http://localhost:3000/billentyuzet");
        const adat2= await adat.json() as billen[];
        getBill(adat2);
      
      
    }
    laod()
  },[])
  return (
    <div>
      <table>
      {bill.map((x)=>(
          <tr>
            <td>{x.id}</td>
            <td>{x.name}</td>
            <td>{x.price}</td>
            <td>{x.arrivedate}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default App
