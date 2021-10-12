import React from "react";

function Alert() {
  return (
    <div>
      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="card w-50">
            <h5 class="card-header text-white bg-primary">Usuarios</h5>
            <div class="card-body text-center">
              <h5 class="card-title">Registro Exitoso!</h5>
              <p class="card-text">
                Se ha modificado el usuario correctamente.
              </p>
              <button href="#" class="btn btn-outline-secondary">
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
