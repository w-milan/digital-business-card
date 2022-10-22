import React from 'react'
import profil from '../images/profil.png'

const Info = () => {
  return (
    <div className='info'>
      <img src={profil} alt="Larsson" />
      <h1>Henrik Larsson</h1>
      <h2>Football player</h2>
      <span>www.larssonhenrik.website</span>
      <button><i className="fa-solid fa-envelope"></i>Email</button>
    </div>
  )
}

export default Info