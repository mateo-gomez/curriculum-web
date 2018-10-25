import React from 'react'

// Components
import Figure from '../../figure/components/figure'

// Style css
import './card.css'

// Images
import '../../images/foto.jpg'

export default function Card(props) {
	return (
		<div className="card mb-4">
			<div className="row">
				<div className="col">
					<div className="card-body">
						<h2 className="card-title">
							{props.title}
						</h2>
						<div className="card-subtitle mb-2 text-muted">
							<strong>Edad: </strong>{props.age}
						</div>
						<div className="card-text">
							{props.body}
						</div>
					</div>
				</div>
				{
					props.img ?
						<div className="col">
							<Figure
								// className="col"
								img={props.img}
								alt={props.alt}
							/>
						</div>
					:
					<div></div>
				}
			</div>
		</div>
	)
}