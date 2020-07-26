import React,{ useState } from 'react'

function Footer(props) {

let Oferta=props.libro[Math.floor( Math.random() * props.libro.length ) ];


{/* <h2>{props.autor}</h2>
<h1>{oferta.titulo}</h1>
<img src={oferta.imagen}/>
<p>{oferta.titulo}</p>
<p>ya no hay</p>
<button onClick={stocks}>restale un Libro</button>
</div> 

let elemento = array[Math.floor( Math.random() * array.length ) ];

*/}

    return(
        <div>
        <h1>el libro de oferta!!!!</h1>
        <h2>{Oferta.titulo}</h2>
       <img src={Oferta.img}/>
</div>



)

    
}

export default Footer