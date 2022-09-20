import { Link } from 'react-router-dom'
import logo from '../assets/img/logoHeader.png'
import cart from '../assets/img/carro.png'
export default function Navigation() {
  return (
    <>
      <header>
        <img className="img-logo" src={logo} alt="" />
        <div className="link-container">
          <Link to="/carro" className="logo-container">
            <img className="shopping-cart" src={cart} alt="" />
          </Link>

          <Link to="/" className="link-home">
            <button className="bt-link">Home</button>
          </Link>
          <Link to="/contacto" className="link-contacto">
            <button className="bt-link">Contacto</button>
          </Link>
        </div>
      </header>
    </>
  )
}
