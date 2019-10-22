import React from 'react';
import './advertising.css';

export default function Advertising(props) {
  return <div>
    <div className="section--intro section--intro-3">
      <div className="section--intro-block">
        <h1>Disclaimer</h1>
      </div>
    </div>
    <div className="section">
      <div className="block">
        <p>Este plan de entrenamiento no pretende reemplazar ninguna recomendación médica. No somos médicos titulados,
          no se busca diagnosticar, curar o tratar ningúna enfermedad ni reemplazar ningún tratamiento que lleve actualmente. </p>
        <p>Siempre debe consultar a su médico y nutricionista para cuestiones relacionadas con su salud, use la información de este programa
          bajo su propio riesgo, no asumiremos ninguna responsabilidad por pérdidas o daños indirectos que puedan resultar, entre otros, 
          pérdidas económicas, lesiones, enfermedades o muerte. De antemano le recomendamos que se tome examenes previo al inicio de 
          este plan de entrenamiento para corroborar que está en condiciones de efectuarlo sin problemas.
        </p>
      </div>
    </div>
  </div>
}