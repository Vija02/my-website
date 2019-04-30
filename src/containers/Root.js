import React from 'react'

import styles from './Root.module.css'

export default () => {
	return (
		<div>
			<div className={styles.heading}>
				<h1>Michael Salim</h1>
			</div>
			<div className={styles.body}>
				<h2>Hi There!</h2>
				<p>
					There aren't much here right now.
					<br />
					Here are some links for more interesting stuff :)
				</p>

				<Links
					url="https://overrise.co.uk"
					title="OverRise"
					description="A website to help you read the bible!"
				/>
				<Links
					url="https://gql.michaelsalim.co.uk"
					title="Graphiql schema transform"
					description="Helper to transform graphiql schema to parameters"
				/>
				<Links
					url="https://vija02.github.io/object-string-to-css/"
					title="CSS object transform"
					description="Helper to transform CSS Objects to string"
				/>
				<Links
					url="https://play.google.com/store/apps/details?id=com.beyond.stars&hl=en_US"
					title="Beyond Stars"
					description="A visual novel puzzle game available in the playstore!"
				/>
				<Links
					url="https://vija02.github.io/LD39"
					title="The Last (Ludum dare game)"
					description={
						<p>
							A quick survival game in React made for Ludum dare. Link to{' '}
							<a href="https://github.com/Vija02/LD39">github</a>
						</p>
					}
				/>
				<Links
					url="https://github.com/Vija02/dotfiles"
					title="My Dotfiles"
					description="Dotfiles for my linux setup"
				/>

				<h2>More links about me!</h2>
				<Links url="https://github.com/Vija02" title="Github" description="Stores all my public project :)" />
				<Links
					url="https://www.linkedin.com/in/michael-salim/"
					title="Linkedin"
					description="My Linkedin profile!"
				/>
			</div>
		</div>
	)
}

const Links = ({ url, description, title }) => {
	return (
		<div className={styles.linksContainer}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				{title} <span>- {url}</span>
			</a>
			{typeof description === 'string' ? <p>{description}</p> : description}
		</div>
	)
}
