import './index.scss'
import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'


const About = () => {
  const [letterClass,setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={Array.from('Sobre mi:')}
                idx={1}              
                />
            </h1>
            <p>
                Todavía no poseo un rumbo especifico pero siempre me agrado envolverme en cualquier entorno informático,
                 ya sea desde mantener y reparar dispositivos u computadoras personales como también aprender
                 nuevas tecnologías y lenguajes de programación.
            </p>
            <p>
                Yo busco poder obtener experiencia en programación de sistemas back-end pero también no tengo problemas en tener
                 la oportunidad de realizar programación para front-end.
            </p>
        </div>
    </div>
  )
}

export default About