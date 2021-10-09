import React from 'react'

function FormProducts() {
    return (
        <>
            <h3> Registrar un nuevo producto </h3>
            <div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nombre producto</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Valor unidad</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword" className="form-label">Descripcion producto</label>
                        <input type="textarea" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Disponible</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
                </div> 
        </>
    )
}

export default FormProducts
