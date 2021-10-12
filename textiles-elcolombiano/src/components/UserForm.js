import React from "react";

function UserForm() {
  return (
    <div>
      <div class="container">
        <div class="card">
          <h5 class="card-header">Modificar usuario</h5>
          <div class="card-body">
            <form>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="formUsuarioNombre">Nombre</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formUsuarioNombre"
                    value=""
                    readonly
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="formUsuarioEmail">Correo Electrónico</label>
                  <input
                    type="email"
                    class="form-control"
                    id="formUsuarioEmail"
                    value=""
                    readonly
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="formUsuarioRol">Rol</label>
                  <select class="custom-select" id="formUsuarioRol" required>
                    <option selected>Seleccione un rol</option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="formUsuarioEstado">Estado</label>
                  <select class="custom-select" id="formUsuarioEstado" required>
                    <option selected>Seleccione un estado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Autorizado">Autorizado</option>
                    <option value="No autorizado">No autorizado</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="text-center">
                <button class="btn btn-primary" type="submit">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserForm;
