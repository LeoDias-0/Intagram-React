import React from 'react'


const Actions = () => {
    return (
        <div class="acoes">
            <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
        </div>
    )
}


const PostTopBar = (props) => {
    const {userName} = props

    return (
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${userName}.svg`} />
                {userName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}


const Post = (props) => {
    const { userName, contentImage, userThatLiked, countLikes } = props
    return (
        <div class="post">
            <PostTopBar userName={userName} />

            <div class="conteudo">
                <img src={contentImage} />
            </div>

            <div class="fundo">
                <Actions />

                <div class="curtidas">
                    <img src={`assets/img/${userThatLiked}.svg`} />
                    <div class="texto">
                        Curtido por <strong>{userThatLiked}</strong> e <strong>outras {countLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default (props) => {
    const { postList } = props

    return (
        <div class="posts">
            {postList.map(post => {
                const { userName, contentImage, userThatLiked, countLikes } = post
                return (<Post
                    userName={userName}
                    contentImage={contentImage}
                    userThatLiked={userThatLiked}
                    countLikes={countLikes}
                />)
            })}
        </div>
    )
}