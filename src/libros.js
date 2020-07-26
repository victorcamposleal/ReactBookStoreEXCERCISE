import React, { useState } from 'react'
import Libro from './Libro'
import Footer from './footer'



    
function Main(props) {

    
return (

        <>
            {props.libro.map(function (datos) {
                 

             return (

                <> 
                    <Libro
                        titulo={datos.titulo}
                        autor={datos.autor}
                        imagen={datos.img}
                        stock={datos.stock}
                       
                        />
                           </> 
                )
            })}

        </>




    )









}

export default Main