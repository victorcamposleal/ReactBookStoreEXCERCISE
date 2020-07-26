import React, { useState } from 'react'
import Main from './libros'

function Libro(props) {
   console.log(props.stock-1)
   let [stock,setStock]=useState(props.stock)
function stocks() {

   console.log(stock-1)


   if (stock===0) {

      
      setStock("ya no hay libros") 
   }

   else{
      setStock(stock - 1)
   }
      }
  
    return(

       
       <div> 
<h1>{props.titulo}</h1>
<h2>{props.autor}</h2>
<img src={props.imagen}/>
<p>{stock}</p>
<p>ya no hay</p>
<button onClick={stocks}>restale un Libro</button>
</div>
) 
}


export default Libro