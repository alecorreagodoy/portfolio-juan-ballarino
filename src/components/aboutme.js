import React, { Component } from 'react';
import { auth } from 'firebase';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }

class Aboutme extends Component{
  
   

    render(){
      const style = {
        
        margin: 'auto',
      }
        return(
          
          <div id ="Aboutme"className="Section 1" >
            <Dialog 
                title="Sobre mí"
                style={style}
                message="Soy Arquitecto egresado de la Universidad de Belgrano, Argentina, con formación en retail y diseño de escaparates.
                

                Trabajo en el campo profesional hace más de 9 años, sobre todo en el área de retail, realizando tareas de diseño, dirección, 
                coordinación y gestión de obras de locales comerciales; computo, presupuesto, complementando con la licitación de las obras a ejecutar.
                
                Algunas marcas para las que he trabajado: Chanel, Dior, Guerlain, Carolina Herrera, Paco Rabanne, Clinique, Tom Ford, Burberry, L’Occitane en Provence, 
                Dolce & Gabanna, Lacoste, Hugo Boss, Gucci, Bvlgari, Tiffany & co, Starbucks Coffee, Samsonite Black Label y Classic, Havanna, entre otras.
                
                A raíz de la diversidad de las tareas realizadas es que he adquirido experiencia en todos los campos y he aprendido a desenvolverme de manera independiente y resolutiva,
                 trabajando bajo presión en relación a los tiempos de entrega y clientes exigentes; adquiriendo habilidades de negociación y conciliación, y muy buenas relaciones interpersonales, lo que me permitió también liderar equipos de trabajo interdisciplinarios.
                
                Mi búsqueda es constante hacia nuevos desafíos y crecimiento profesional, me ha llevado a orientarme al Diseño de tiendas y la Dirección de Obra, ya que considero tener una orientada vocación hacia la coordinación de tareas y equipos de trabajo, sin perder de vista la importancia de la calidad de entrega, los tiempos y costos de ejecución de un proyecto.
                ">

            </Dialog>
            </div>
            
        );
        
    }
    
}


export default Aboutme;