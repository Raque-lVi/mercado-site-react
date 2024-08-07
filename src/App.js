import './App.css';
import Cabecalho from './script/componentes/cabecalho'
import DivPagamento from './script/componentes/div_pagamentos'
import Pix_qr from './script/componentes/pix_QRcode'


function App() {
  return (
    <div className="App">

      <Cabecalho />

      <main>

        <section className="Pagamentos">
          <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>  PAGAMENTO:  </h1>

          <div id="conteine-de-divs">
            <DivPagamento class = {'lat'} nome = "PIX" resto = {false}></DivPagamento>
            <DivPagamento class = {'mei'} nome = "DINHEIRO" resto = {false}></DivPagamento>
            <DivPagamento class = {'lat'} nome = "CARTÃO" resto = {true}></DivPagamento>
          </div>
          
        </section>

        <section id="produto-De-Pagamento"> {//<!--section 2 // Detalhes das informaçoes de pagamento + pix-->
                                            }
            <div style={{border: '3px black solid', borderleft: 'none', borderBottom: 'none', borderTop: 'none'}}>

                <h3 class="h3_produto">Pix</h3>

                {//<!--pix-->
                }

                <div class="pix_QRcode_Telefone">
                    <ul class="pix_telefone">

                      <Pix_qr nome = "Chave: " resposta = '(84) 996247885' resto = {true}></Pix_qr>
                      <Pix_qr nome = "Nome: " resposta = 'Manoel Vitoriano Dantas' resto = {true}></Pix_qr>

                    </ul>

                    <ul class="pix_QRcode">
                      
                      <Pix_qr nome = 'imagem de um qrcode, faça seu pagamento' resposta = './src/Imagem/qrcod.png' resto = {false}></Pix_qr>
                      <Pix_qr nome = "Nome: " resposta = 'Vivian Raquel Batista Dantas' resto = {true}></Pix_qr>

                    </ul>
                </div>


            </div>

            <!--Pagamento por cartao-->

            <div class="produto_cartao">
                <h3 class="h3_produto">CARTÃO</h3>
                <ul class="lu_pix">
                    <li class="li_pix">
                        <p class="nome1">Maquininha: </p>
                        <p class="nome2">Ton</p>
                    </li>
                    <li class="li_pix">
                        <p class="nome1">Bandeiras Aceitas: </p>
<p style="white-space: pre-wrap;" class="nome2">
MasterCard, HiperCard
Visa, Amex
Elo
                        </p>
                    </li>
                </ul>
            </div>
        </section>



      </main>

    </div>
  );
}

export default App;
