import { useState } from "react";
import ButtonEvento from "./ButtonEvento"

function Evento() {
    const [eventoAtivado, SetEventoAtivado] = useState()

    function meuEvento() {
        SetEventoAtivado(true);
        console.log(`Primeiro Evento Ativado`)
    }

    function segundoEvento() {
        console.log(`Segundo Evento Ativado`)
    }

    return(
        <div>
            <ButtonEvento event={meuEvento} text="Primeiro Evento" />

            { eventoAtivado && (
                <ButtonEvento event={segundoEvento} text="Segundo Evento" />
            )}
        </div>
    )
}

export default Evento