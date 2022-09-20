import React from 'react'

const Contact = () => {
  return (
    <form className="form-contact">
      <div className="container-correo input-form">
        <h3 className="title-contact">Correo</h3>
        <input className="input-contact" name="Correo" />
      </div>
      <div className="container-description input-form">
        <h3 className="title-contact description">Descripción</h3>

        <textarea
          className="input-contact"
          name="message"
          rows="10"
          cols="30"
        ></textarea>
      </div>
      <button className="bt-submit" type="submit">
        Enviar
      </button>
    </form>
  )
}

export default Contact
