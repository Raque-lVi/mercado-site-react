export default function li(props){
    return(
        <li class="li_pix">
            {props.resto && (
                <>
                    <p class="nome1">{props.nome} </p>
                    <p class="nome2"> {props.resposta} </p>
                </>
            )},
            {props.resto == false && (
                <>
                    <img class="img_qrcod" src={props.resposta} alt={props.nome}></img>
                </>
            )}
        </li>
        
            

    )
}