import React from 'react'


export default (props) => {
    const {userName, text} = props

    return (
        <div class="usuario">
            <img src={`assets/img/${userName}.svg`} />
            <div class="texto">
                <strong>{userName}</strong>
                {text}
            </div>
        </div>
    )
}