export async function getCurso(){
    const respuesta = await fetch(`${process.env.API_URL}/curso?populate=*`)
    return await respuesta.json()
}