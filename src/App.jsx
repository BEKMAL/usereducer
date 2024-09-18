import { useReducer, useState } from 'react'

import './App.css'

function App() {
let initialstate = 0;
const [state, dispatch] = useReducer(reducer, {count:0})
// function init(){
//   return{count:2}
// }
function reducer(state,action){
  switch(action.type){
    case 'increment':
      return {count: state.count + 1};
      case 'decrement':
      return {count: state.count -1};
      case 'reset':
        return {count:0}
    default:
      throw new Error();
  }
}
  return (
    <>
    <h1>Use Reducer hook</h1><br/><br/>
    <h1>count:{state.count}</h1>
   <div style={{display:'flex',justifyContent:'center',gap:'20px'}}> 
   <button className='my-button' onClick={()=>dispatch({type:'increment'})}
   >Increment</button>
   <button className='my-button' onClick={()=>dispatch({type:'decrement'})}
   >Decrement</button>
   <button className='my-button' onClick={()=>dispatch({type:'reset'})}
   >Reset</button>
   </div>
    </>
  )
}

export default App
