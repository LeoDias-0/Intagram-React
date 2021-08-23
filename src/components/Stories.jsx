import React from 'react'


const Story = (props) => {
    const {userName} = props

    return (
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${userName}.svg`} />
            </div>
            <div class="usuario">
                {userName}
            </div>
        </div>
    )
}

export default (props) => {
    const { users } = props
    return (
        <div class="stories">
            {users.map(user => <Story userName={user} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}