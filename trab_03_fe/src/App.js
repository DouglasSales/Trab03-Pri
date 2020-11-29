import React, {useState} from 'react';
import Contagem from './contagem';
import Conectar from './login';

function App() {
  let [login, setLogin] = useState ({
    Conectado: false
  });

  return (
    <div>
      <center>          
          <div>
          { login.Conectado ? 
            <Contagem dica='digite seu nome'></Contagem> :
            <div></div>}
          </div>
      
        <div></div> 
        
        <div>
          <Conectar login={ (ptroca) => setLogin({ Conectado: ptroca})}></Conectar>
        </div> 
      </center>     
    </div>
  );
}

export default App;
