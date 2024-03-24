
import SocialButton from './SocialButton'
import Formulario from './Formulario'
import Alert from './Alert'



function Registro ({ obtenerAlertApp, alerta }) {
 
  alerta.msg
  return (
    <>
      <div className='container d-flex flex-column align-items-center p-5'>
        <h1 className='fs-1'>Crea una cuenta</h1>
        <div className='d-flex gap-3 justify-content-center my-3'>
          <SocialButton icon='fa-brands fa-3x fa-facebook' />
          <SocialButton icon='fa-brands fa-3x fa-github' />
          <SocialButton icon='fa-brands fa-3x fa-linkedin' />
        </div>
        <p>O usa tu email para registrarte</p>
        <Formulario obtenerAlertRegistro={obtenerAlertApp}/>

        {alerta.msg && <Alert color={alerta.color}>{alerta.msg}</Alert>}
      </div>
    </>
  )
}

export default Registro
