import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import NotFound from './components/NotFount.jsx'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'
import Add from './components/Add'
import product from './data/products'
import { useState } from 'react'
import Sent from './components/Sent.jsx'

function App() {
  const [puchaseOrder, setPuchaseOrder] = useState([])
  const [info, setInfo] = useState(product)
  const [addProduct, setAddProduct] = useState(0)
  const [amount, setAmount] = useState(1)
  const viewProduct = (idProduct) => {
    setAddProduct(idProduct)
    console.log(idProduct)
  }
  const cancelAdd = () => {
    setAddProduct(0)
    setAmount(1)
  }
  const add = (name, value, format, srcs) => {
    setAddProduct(0)
    setAmount(1)
    setPuchaseOrder([
      ...puchaseOrder,
      {
        idOrder:
          puchaseOrder.length >= 1
            ? Math.max(...puchaseOrder.map((f) => f.idOrder)) + 1
            : 1,
        id: addProduct,
        cantidad: parseInt(amount),
        nombre: name,
        valor: value,
        formato: format,
        srcs: srcs,
      },
    ])
    console.log(puchaseOrder)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar puchaseOrder={puchaseOrder} />
        <Routes>
          <Route
            path="/react-router"
            element={
              <Home
                info={info}
                viewProduct={viewProduct}
                addProduct={addProduct}
              />
            }
          />

          <Route path="/react-router/enviado" element={<Sent />} />
          <Route path="/react-router/contacto" element={<Contact />} />
          <Route
            path="/react-router/carro"
            element={
              <Cart
                puchaseOrder={puchaseOrder}
                setPuchaseOrder={setPuchaseOrder}
              />
            }
          />
          <Route path="/react-router/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {addProduct > 0 ? (
        <Add
          info={info}
          setInfo={setInfo}
          addProduct={addProduct}
          puchaseOrder={puchaseOrder}
          setPuchaseOrder={setPuchaseOrder}
          amount={amount}
          setAmount={setAmount}
          add={add}
          cancelAdd={cancelAdd}
        />
      ) : null}
    </div>
  )
}
export default App
