import React from "react";

function UserTable() {
  return (
    <div>
      <div class="container">
        <h1 class="text-center text-dark mb-4">Gestión de usuarios</h1>
        <br />

        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Registro exitoso!</strong> se ha modificado el usuario
          correctamente.
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <table id="usuarios" class="table table-hover table-sm">
          <thead class="p-3 text-center">
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Firulais</td>
              <td>Firulais007@gmail.com</td>
              <td>Vendedor</td>
              <td>Autorizado</td>
              <td class="text-center">
                <button class="btn btn-success btn-sm">
                  Modificar <span class="material-icons">edit</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
