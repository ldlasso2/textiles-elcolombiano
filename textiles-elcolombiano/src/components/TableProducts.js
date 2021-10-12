import React from 'react'

function TableProducts() {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Código de producto</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Valor unidad</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Buzo</td>
                        <td>Buzo con capota, unicolor</td>
                        <td>42900</td>
                        <td>Disponible</td>
                        <td><button type="submit">Modificar</button></td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default TableProducts
