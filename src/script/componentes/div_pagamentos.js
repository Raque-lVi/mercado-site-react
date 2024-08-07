export default function cabecalho(props) {
    return (
        <div id="div_pagamentos" className={props.class}>
              <h3 className="h3_pagamentos">{props.nome}</h3>
                {props.resto && icones()}
        </div>
    )
}

function icones() {
    return (
        <div className="div_cartao_bandeiras">

            <a href="" className="i"><i className="fa-brands fa-cc-mastercard" style={{color: '#42c449'}}></i></a>
            <a href="" className="i"><i className="fa-brands fa-cc-visa" style={{color: '#42c449'}}></i></a>
            <a href="" className="i"><i className="fa-brands fa-cc-amex" style={{color: '#42c449'}}></i></a>
            <p style={{fontSize: '20px', padding: '10px'}}>...</p>

        </div>
    )
}