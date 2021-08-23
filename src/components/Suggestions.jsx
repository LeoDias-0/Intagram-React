import React from 'react'


export default (props) => {
    const { suggestions } = props
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {suggestions.map(suggestion => {
                const { userName, reason } = suggestion
                return (
                    <Suggestion userName={userName} reason={reason} />
                )
            })}
        </div>
    )
}

const Suggestion = (props) => {
    const {userName, reason} = props

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${userName}.svg`} />
                <div class="texto">
                    <div class="nome">{userName}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}