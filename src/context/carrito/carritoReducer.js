const CarritoReducer=(stateActual,action)=>{
 
    
    if(action.type === "SELECCIONAR_CATEGORIA"){
        return{
            ...stateActual,
            categoria_global:action.data
        }
    }
    if(action.type === "SELECCIONA_PRODUCTO"){
        return{
            ...stateActual,
            producto_global:action.data
        }
    }
    

    return{...stateActual}
}

export default CarritoReducer