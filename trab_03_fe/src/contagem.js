import React, {useState} from 'react';

const Contador = props => {
  let [strtext, setStrtext] = useState({
      desctexto: '',
      qtd: 0
  });

    function inputChange(event) {
        setStrtext({
            desctexto: '',
            qtd: event.target.value.length
        });
    }

    return(
        <div>
        <label>Digite para contagem dos caracteres: </label>
        <input type="text" onChange={event => inputChange(event) } />     

        <p>
            Contando os caracteres conforme digitação.<p> Quantidade:  {strtext.qtd} </p>
        </p>
        </div>
    );

}

export default Contador;
