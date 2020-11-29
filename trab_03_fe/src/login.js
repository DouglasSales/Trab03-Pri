import React, {useState} from 'react';

const Logar = props => {
    const logos = ["logo2.png", "logo1.jpg"];
    const txt_button = ["Login", "Logout"];
    const txt_texto = ["Por favor, faça login!", "Seja bem-vindo!"];
    
    let [strtext, setStrtext] = useState ({
        troca: false
    });

    function clickOnClick(ptroca) {
        setStrtext({
            troca: ptroca
        });

        props.login(ptroca);
    }


    return (
      <div>
          <p>
              { txt_texto[strtext.troca ? 1 : 0] }
          </p>
          <img className="imagem" src={ logos[strtext.troca ? 1 : 0] } alt="troca imagem no clique" heigth="80" width="80"></img>
          <p>
              <button onClick={() => clickOnClick(!strtext.troca)}>
                  { txt_button[strtext.troca ? 1 : 0] }
              </button>
          </p>
      </div> 
    );
}

export default Logar;