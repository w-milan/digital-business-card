import React from 'react'
import profil from '../images/profil.png'

const Info = () => {
  return (
    <div className='info'>
      <img src={profil} alt="Larsson" />
      <h1>Henrik Larsson</h1>
      <h2>Football player</h2>
    </div>
  )
}

export default Info