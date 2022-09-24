import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const enviarFormulario = (e) => {
    e.preventDefault()
    if (email === '' || description === '') {
      alert('Debes completar el formulario')
    }
    setEmail('')
    setDescription('')
  }
  return (
    <form className="form-contact" onSubmit={enviarFormulario}>
      <div className="container input-form">
        <h3 className="title-contact">Correo</h3>
        <input
          value={email}
          className="input-contact "
          name="Correo"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="container-description input-form">
        <h3 className="title-contact description">Descripción</h3>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-contact"
          name="message"
          rows="10"
          cols="30"
        ></textarea>
      </div>
      {email !== '' && description !== '' ? (
        <Link to="/react-router/enviado" className="not-fount-container">
          <button className="bt-submit" type="submit">
            Enviar
          </button>
        </Link>
      ) : (
        <button className="bt-submit" type="submit">
          Enviar
        </button>
      )}
    </form>
  )
}

export default Contact
