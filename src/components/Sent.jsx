import React from 'react'
import { Link } from 'react-router-dom'
import sentImg from '../assets/img/sendingmail.gif'

const Sent = () => {
  return (
    <div className="container">
      <Link to="/" className="not-fount-container">
        <img className="img-not-Fount" src={sentImg} alt="" />
      </Link>
      <Link to="/" className="not-fount-container">
        <button>Ir a pagina principal</button>
      </Link>
    </div>
  )
}
export default Sent
