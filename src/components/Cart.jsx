import React from 'react'
const productImage = require.context('../assets/img', true)

const Cart = (props) => {
  return (
    <div className="container-cart">
      {props.puchaseOrder.map((e) => (
        <div className="container-list" key={e.idOrder}>
          <img className="img-card" src={productImage(e.srcs)} alt={e.nombre} />
          <h3>{e.nombre}</h3>
          <p>{e.cantidad}</p>
          <h3>{e.valor}</h3>
          <h3>{e.valor * e.cantidad}</h3>
        </div>
      ))}
      <h3>
        {props.puchaseOrder
          .map((item) => item.valor * item.cantidad)
          .reduce((prev, curr) => prev + curr, 0)}
      </h3>
      <button onClick={() => props.setViewCart(false)}>cerrar</button>
    </div>
  )
}

export default Cart
