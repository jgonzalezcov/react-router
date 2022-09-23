import React from 'react'
import { Link } from 'react-router-dom'
import notFountImg from '../assets/img/nofount.gif'

const NotFount = () => {
  return (
    <div className="container">
      <Link to="/" className="not-fount-container">
        <img className="img-not-Fount" src={notFountImg} alt="" />
      </Link>
    </div>
  )
}

export default NotFount
