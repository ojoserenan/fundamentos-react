import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App(props) {
    return (
        <div>
            <Primeiro></Primeiro>
            <ComParametro
                titulo='Situação do aluno'
                aluno='Jose Renan'
                nota={7} />
            <Fragmento />
        </div>

    )
}