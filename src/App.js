import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Graph from './components/Graph';

function App() {


  const {onChange,reset,watch}=useForm();

  const [name,setName]=useState('')
  const [click,setClick]=useState(false)


  const handleSubmit=(e)=>{
       console.log("name",name)
       setClick(true)
  } 


  const handleClear=()=>{

    reset();

    
  }

  return (
    <div className="App">

     {! click  && <>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} />
      <button className='submitBtn' onClick={(e)=>handleSubmit(e)}>submit</button>
      <form>
     <button className='clear' onClick={()=>handleClear()}>clear</button>
        </form>
      </>}
  

    {   click  &&  <Graph/>}
    </div>
    
  );
}

export default App;
