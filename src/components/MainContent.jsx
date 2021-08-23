import React from 'react'
import Stories from './Stories.jsx'
import Posts from './Posts.jsx'
import Suggestions from './Suggestions.jsx'
import MyUser from './MyUser.jsx'
import LinksAndCopyright from './LinksAndCopyright.jsx'


const users = [
	'9gag',
	'meowed',
	'barked',
	'nathanwpylestrangeplanet',
	'wawawicomics',
	'respondeai',
	'filomoderna',
	'memeriagourmet'
]

const posts = [
	{
		userName: 'meowed',
		contentImage: 'assets/img/gato-telefone.svg',
		userThatLiked: 'respondeai',
		countLikes: '101.523'
	},
	{
		userName: 'barked',
		contentImage: 'assets/img/dog.svg',
		userThatLiked: 'adorable_animals',
		countLikes: '99.159'
	}
]

const suggestions = [
	{
		userName: 'bad.vibes.memes',
		reason: 'Segue você'
	},
	{
		userName: 'chibirdart',
		reason: 'Segue você'
	},
	{
		userName: 'razoesparaacreditar',
		reason: 'Novo no Instagram'
	},
	{
		userName: 'adorable_animals',
		reason: 'Segue você'
	},
	{
		userName: 'smallcutecats',
		reason: 'Segue você'
	}
]

export default () => {
	return (
		<div class="corpo">
			<div class="esquerda">
				<Stories users={users} />

				<Posts postList={posts} />

			</div>

			<div class="sidebar">

				<MyUser userName={'catanacomics'} text={'Catana'} />

				<Suggestions suggestions={suggestions} />

				<LinksAndCopyright />
			</div>
		</div>
	)
}