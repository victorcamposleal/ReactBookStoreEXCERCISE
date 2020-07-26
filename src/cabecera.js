import React,{ useState } from 'react'


function Cabecera(props) {

    let [vip,setvip]=useState(false)
    function user() {
return(
setvip(true))
        
    }




    
if (vip===false){
 
    return(
       <div> 

       <button onClick={user}>vip?</button>
       <h1>{props.user.nombre}</h1>
       <img src={props.user.imagen} />
       
       </div>
   
    ) 
   } 


   else if (vip===true){
 
    return(
        <div> 
         
       <h1>Hello!!! you are a vip now</h1>
        <h2>{props.user.nombre}</h2>
        <img src={props.user.imagen} />
        </div>
    
     ) 
    } 
    
}


export default Cabecera