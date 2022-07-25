import './index.scss';
import SillyAnim from '../../../assets/images/smallshowcase-cube.webp'
import React from 'react'
import Loader from 'react-loaders';

function Smallpresentation() {
  return (
    <>
    <div className='sm-container'>
      <div className="shadow">
        <img className='silly-anim' src={SillyAnim} alt='biker' />
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default Smallpresentation