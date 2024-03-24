import { useState } from 'react';
import Registro from './components/Registro'

function App () {
  const [alerta, setAlerta] = useState({ error: "", msg: "", color:"" });
  return (
    <>
      <Registro obtenerAlertApp={setAlerta} alerta={alerta}/>
    </>
  )
}

export default App
