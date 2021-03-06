import { URL_BACKEND_admin } from "../../environments/environments";

export const getProductos = async (termino="") => {
  let url=termino.trim().length>2? `${URL_BACKEND_admin}/producto?search=${termino}`:
  `${URL_BACKEND_admin}/producto`;
  const peticion=await fetch (url);
  const data= await peticion.json();
  return data;
};

export const postProducto = async (objProducto) => {
  const peticion = await fetch(`${URL_BACKEND_admin}/producto`, {
    method: "POST",
    body: JSON.stringify(objProducto),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await peticion.json();
  return data;
};

export const putProducto = async (objProducto) => {
  const peticion = await fetch(
    `${URL_BACKEND_admin}/producto/${objProducto.prod_id}`,
    {
      method: "PUT",
      body: JSON.stringify(objProducto),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const data = await peticion.json();
  return data;
};

export const deleteProducto = async (prod_id) => {
  const peticion = await fetch(`${URL_BACKEND_admin}/producto/${prod_id}`, {
    method: "DELETE",
  });
  const data = await peticion.json();
  return data;
};
