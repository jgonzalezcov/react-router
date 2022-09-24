import React from 'react'

const productImage = require.context('../assets/img', true)

const Add = (props) => {
  return (
    <div className="container-add">
      {props.info
        .filter((y) => y.id === props.addProduct)
        .map((e) => (
          <div className="card-product" key={e.id}>
            <img className="img-card" src={productImage(e.srcs)} alt={e.alt} />
            <div className="text-container-product">
              <div className="container-product">
                <h3 className="product">Nombre: {e.nombre}</h3>
              </div>
              <p className="format">Formtato: {e.formato}</p>
              <h3 className="value">
                Valor: ${e.valor.toLocaleString('de-DE')}
              </h3>
              <div className="accept-product">
                <input
                  min="1"
                  max="10"
                  className="input-amount"
                  type="number"
                  value={props.amount}
                  onChange={(e) => props.setAmount(e.target.value)}
                />
                <button
                  onClick={() =>
                    props.add(e.nombre, e.valor, e.formato, e.srcs)
                  }
                >
                  Agregar
                </button>
              </div>
              <button className="bt-cancel" onClick={() => props.cancelAdd()}>
                Cancelar
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Add
