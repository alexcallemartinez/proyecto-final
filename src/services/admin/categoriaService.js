import { URL_BACKEND_admin } from "../../environments/environments";


export const getCategorias = async () => {
    const peticion = await fetch(`${URL_BACKEND_admin}/categoria`);
    const data = await peticion.json();
    return data;

}

export const getCategoriasById = async id => {
  const peticion = await fetch(`${URL_BACKEND_admin}/categoria/${id}`);
  const data = await peticion.json();
  return data;

}

export const postCategoria = async (objCategoria) => {
    const peticion = await fetch(`${URL_BACKEND_admin}/categoria`, {
        method: "POST",
        body: JSON.stringify(objCategoria),
        headers: {
            "Content-type": "application/json"
        }

    });
    const data = await peticion.json();
    return data;
}

export const putCategoria = async (objCategoria) => {
    const peticion = await fetch(`${URL_BACKEND_admin}/categoria/${objCategoria.cat_id}`, {
      method: "PUT",
      body: JSON.stringify(objCategoria),
      headers: {
        "Content-type": "application/json"
      }
    });
    const data = await peticion.json();
    return data;
  }

  export const deleteCategoria = async cat_id => {
    const peticion = await fetch(`${URL_BACKEND_admin}/categoria/${cat_id}`, {
      method: "DELETE"
    });
    const data = await peticion.json();
    return data;
  }