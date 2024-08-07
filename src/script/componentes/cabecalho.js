export default function cabecalho() {
    return (
        <header className="cabecalho">
            <a href="./carrinho.html">

                <img className="carrinhoVazio" src="./src/Imagem/carrinho-de-compras-de-design-xadrez.png"
                    alt="carrinho de compras" />
            </a>

            {/*Botoes do cabeçario-->*/}

            <nav>
                <ul className="botoes-menu">

                    <li> <a href="./"> QUEM SOMOS?</a></li>

                    <li> <a href="./paginaVendas.html"> PRODUTOS </a></li>

                    <li> <a href="./login.html"> ENTRE </a></li>

                </ul>
            </nav>
        </header>
    )
}