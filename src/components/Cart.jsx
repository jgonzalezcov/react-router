import { Link } from 'react-router-dom'
import React from 'react'
const productImage = require.context('../assets/img', true)

const Cart = (props) => {
  return (
    <div className="container container-up-cart">
      <div className="container-cart">
        <div className="container-title-list">
          <h3 className="title-img">Torta</h3>
          <h3 className="title-name">Nombre</h3>
          <h3 className="title-value">Valor</h3>
          <h3 className="title-amount">Cantidad</h3>
          <h3 className="title-total">Subtotal</h3>
        </div>

        {props.puchaseOrder.map((e) => (
          <div className="container-list" key={e.idOrder}>
            <img
              className="img-card-list"
              src={productImage(e.srcs)}
              alt={e.nombre}
            />
            <div className="container-name-cart">
              <h3 className="name-cart">{e.nombre}</h3>
            </div>
            <div className="container-value-cart">
              <h3 className="value-cart">${e.valor.toLocaleString('de-DE')}</h3>
            </div>
            <div className="container-amount-cart">
              <h3 className="amount-cart-list">{e.cantidad}</h3>
            </div>
            <div className="container-total-cart">
              <h3 className="total-cart">
                ${(e.valor * e.cantidad).toLocaleString('de-DE')}
              </h3>
            </div>
          </div>
        ))}
        <div className="container-total-general">
          <h3 className="total-general">
            Total $
            {props.puchaseOrder
              .map((item) => item.valor * item.cantidad)
              .reduce((prev, curr) => prev + curr, 0)
              .toLocaleString('de-DE')}
          </h3>
        </div>
        <Link to="/react-router" className="container-button-cart">
          <button
            className="button-cart"
            onClick={() => props.setViewCart(false)}
          >
            cerrar
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
