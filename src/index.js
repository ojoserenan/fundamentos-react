import ReactDOM from 'react-dom'
import react from 'react'
import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo='Situação do aluno'
            aluno='Jose Renan'
            nota= {7} />
        <Fragmento/>
    </div>,
    document.getElementById('root')
    )




