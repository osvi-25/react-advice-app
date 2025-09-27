import { useState } from 'react'
import './AdviceApp.css'

export const AdviceApp = () => {
    const [advice, setAdvice] = useState("Please click a button for advice");
    const [count, setCount] = useState(0);

    async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((c)=>c+1)
   }


  return (
        <div className="app-container">
            <p className="advice">{advice}</p>
            <button onClick={getAdvice}>Get Advice</button>
            <p>You read <b>{count}</b> pieces of advice</p>
        </div>
  )
}
