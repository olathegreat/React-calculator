import React, {useState} from 'react';
import "./App.css";

const App = () => {
    const [num, setNum]= useState("");
    
    const clickChange = (e)=>{
        setNum(num + e.target.textContent);
    }
    const finalChange = () =>{
        // if(num==""){
        //     setNum(0)
        // }
       try{
        if(eval(num)>=1){
            setNum(eval(num).toLocaleString());

        }
        if(eval(num)<1){
            setNum(eval(num).toFixed(2));
        }
        
       
            
    
       
       }catch{
        alert("something is wrong")
       }
    }
   
    
  return (
    <div className='App'>
        <div className='calculator'>
            <div className='display'>
                <input type="text" value={num}/>
            </div>
            <div className='buttons'>
                <div className='upfunction'>
                    <div className='btn up'onClick={()=>setNum("")} >C</div>
                    <div className='btn up' onClick={()=>setNum( num.slice(0,-1))} >Del</div>
                    <div className='btn up'onClick={clickChange} >%</div>
                    <div className='btn opp' onClick={clickChange} >/</div>
                    <div className='btn num' onClick={clickChange} >7</div>
                    <div className='btn num'onClick={clickChange} >8</div>
                    <div className='btn num' onClick={clickChange} >9</div>
                    <div className='btn opp' onClick={clickChange} >*</div>
                    <div className='btn num' onClick={clickChange} >4</div>
                    <div className='btn num' onClick={clickChange} >5</div>
                    <div className='btn num' onClick={clickChange} >6</div>
                    <div className='btn opp' onClick={clickChange} >-</div>
                    <div className='btn num' onClick={clickChange} >1</div>
                    <div className='btn num' onClick={clickChange} >2</div>
                    <div className='btn num' onClick={clickChange} >3</div>
                    <div className='btn opp'onClick={clickChange} >+</div>
                    <div className='btn up' onClick={clickChange} >.</div>
                    <div className='btn num' onClick={clickChange} >0</div>
                    <div className='btn btn2' onClick={finalChange}>=</div>

                </div>
               

            </div>
            <div className='name'>
                    Calculator App
            </div>
        </div>
         <div className='footer'>Developed by <span className='name'>Olarotimi Olaniran</span></div>    
    </div>
  );
}

export default App;
