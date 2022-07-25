import './index.scss'
import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Backanim from '../../assets/images/Biker.webp';


const About = () => {
  const [letterClass,setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
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
            <p>
            También soy un aficionado del arte 2D como el modelado 3D y  del desarrollo de videojuegos, estos forman parte de mi hobby.
            </p>
        </div>
        <div className='back-container'>
          <div className="shadow">
            <img className='back-anim' src={Backanim} alt='biker' />
          </div>
        </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About