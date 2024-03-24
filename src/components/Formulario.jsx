import { useState } from 'react';

const Formulario = ({ obtenerAlertRegistro }) => {
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [contraseña, setContraseña] = useState('');
const [confirmarContraseña, setConfirmarContraseña] = useState('');

const validacion = (e) => {
    e.preventDefault()
    if(contraseña !== confirmarContraseña) {
      obtenerAlertRegistro({
        error: true,
        msg: 'Las contraseñas no coinciden',
        color: 'danger',
    });
    return
    }

    if(nombre === '' || email === '' || contraseña === '' || confirmarContraseña === '') {
      obtenerAlertRegistro({
            error: true,
            msg: 'Completa todos los campos',
            color: 'danger',
        });
        return
    }
    obtenerAlertRegistro({ error: false, msg: 'Cuenta creada exitosamente', color: 'success'})
    setNombre('')
    setEmail('')
    setContraseña('')
    setConfirmarContraseña('')
}


  return (
    <>
      <form className="formulario" onSubmit={validacion}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre} 
            />
        </div>

        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            name="contraseña"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
            />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            name="contraseña"
            className="form-control"
            placeholder="Confirmar contraseña"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
            />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
      </form>
    </>
  )
}

export default Formulario
