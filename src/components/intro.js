import React from 'react';
import './intro.css';
import bg from '../images/bg3.jpg';

export default function Intro(props) {
  return <div>
    <div className="section--intro plan--intro section--intro-1">
      <div className="section--intro-block">
        <h1>REBORN</h1>
        <h4>Plan de entrenamiento de 12 semanas</h4>
      </div>
    </div>
    <div className="section">
      <div className="block">
        <h2 className="underline">¿Quienes Somos?</h2>
        <p>Andrés, entrenador personal, certificado con la National Strength and Conditioning Association (NSCA), y Felipe, Licenciado en ciencias del deporte
          de la UDCA, juntos hemos realizado seminarios y cursos sobre métodos de entrenamiento (Trx, Stroops, Funcional), 
          pero especialmente nos orientamos al entrenamiento de fuerza e hipertrofia muscular.
          Llevamos varios años hablando sobre entrenamiento en redes sociales y con la marca Soul4Fit. 
          Nuestra motivación es compartir el conocimiento apoyado en bases cientificas, al mismo tiempo, tratando de desmitificar muchos conceptos erroneos
          que aún siguen existiendo en el entorno del entrenamiento físico. </p>
      </div>
    </div>
  </div>
}