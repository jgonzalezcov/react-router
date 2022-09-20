import React from 'react'
const productImage = require.context('../assets/img', true)

const Home = (props) => {
  return (
    <main>
      <div className="card-container container">
        <div className="card-border">
          {props.info.map((e) => (
            <div className="card" key={e.id}>
              <img
                className="img-card"
                src={productImage(e.srcs)}
                alt={e.alt}
              />
              <div className="text-container">
                <div className="container-product">
                  <h3 className="product">Nombre: {e.nombre}</h3>
                </div>
                <p className="format">Formtato: {e.formato}</p>
                <h3 className="value">
                  Valor: ${e.valor.toLocaleString('de-DE')}
                </h3>
                <button
                  className="add-product"
                  onClick={() => props.viewProduct(e.id)}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Home
