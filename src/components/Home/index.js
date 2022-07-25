import './index.scss';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Smallpresentation from './Smallpresentation';

const Home = () => {
  const [letterClass,setLetterClass] = useState('text-animate')
  const introArray = Array.from('Hola!')
  const primeridk = introArray.length+1 
  const nameArray = Array.from('soy Palacio Ivan');
  const jobArray = Array.from('junior web developer')
  const segundoidk = primeridk+nameArray.length+jobArray.length+1
  const jobArray2 = Array.from('que hace arte')
  const jobArray3 = Array.from('de vez en cuando.')
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className="container home-page">
        <div className='text-zone'>
          
            <h1>
              <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={1}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={introArray.length+1}/>
              <br />
              <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={primeridk}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray2} idx={segundoidk}/>
              <br/>
              <AnimatedLetters letterClass={letterClass} strArray={jobArray3} idx={segundoidk+jobArray2.length+10}/>
              </h1>
              <h2> Junior Frontend and Backend Dev / 2D-3D artist entusiast / Gamedev entusiast </h2>
              <Link to="/contact" className='flat-button'>Hit me up!</Link>
        </div> 
        <Smallpresentation/>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Home