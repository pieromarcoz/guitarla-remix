import { Link } from '@remix-run/react'
import Navegacion from './navegacion';
import logo from '../../public/img/logo.svg'

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link className="logo" to={'/'}>
          <img src={logo} alt="Imagen Logo" className='logo'/>
        </Link>
        <Navegacion/>
        
      </div>
    </header>
  )
}

export default Header