import { getGuitarra } from "~/models/guitarras.server"
import { useLoaderData } from "@remix-run/react";

export async function loader({params}){
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)
    console.log(guitarra);
    if(guitarra.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada'
        })
    }
    return guitarra
}

export function meta({data}){
    if(!data){
        return{
            title: 'GuitarLA - Guitarra No Encontrada',
            description: `Guitarras, venta de guitarras, guitarra no encontrada `
        }
    }
    return{
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
    }
  }

function Guitarra() {
    const guitarra = useLoaderData()
    const { nombre, descripcion, precio, imagen} = guitarra.data[0].attributes
    return (
        <div className="guitarra">
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
            </div>
        </div>
    )
}

export default Guitarra