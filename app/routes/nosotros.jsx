import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export function meta(){
  return(
    {
      title: 'GuitarLA - Nosotros',
      description: 'Venta de guitarras, blog de música'
    }
  )
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" className='' />
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ratione eius magni quos nihil quas cumque esse excepturi illo odit, adipisci vel numquam consectetur dicta a? Minus harum rem qui!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium ratione eius magni quos nihil quas cumque esse excepturi illo odit, adipisci vel numquam consectetur dicta a? Minus harum rem qui!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros