import './index.scss'
import React, { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Pfpanim from '../../assets/images/pfpbiker.webp'

function Contact() {
    const [letterClass,setLetterClass] = useState('text-animate')
    const refForm = useRef();   

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
  
  return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={Array.from('Contacto')} idx={10}/>
                </h1>
                <p>
                    Para contactarme se encuentra a disposicion los siguientes links en la izquierda de la pagina.
                </p>
            </div>
            <div className='back-container'>
                <div className="shadow">
                    <img className='back-anim' src={Pfpanim} alt='biker' />
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
    </>
  )
}

export default Contact