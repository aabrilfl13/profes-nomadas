import PropTypes from "prop-types"

const Pack = ({ name, image, prices }) => {
	const { basic, medium, premium, extraPremium } = prices

	return (
		<div className="card mb-10 mt-4 w-full max-w-xs bg-base-100 shadow-xl sm:max-w-md">
			<figure>
				<img src={image} alt={name} className="h-48 w-full rounded-t-lg object-cover" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{name}</h2>
				<div className="card-actions">
					<p className="flex w-full justify-between">
						Pack Básico: <span>${basic}</span>
					</p>
					{medium !== null && (
						<p className="flex w-full justify-between">
							Pack Medio: <span>${medium}</span>
						</p>
					)}
					{premium !== null && (
						<p className="flex w-full justify-between">
							Pack Premium: <span>${premium}</span>
						</p>
					)}
					{extraPremium !== null && (
						<p className="flex w-full justify-between">
							Pack Extra Premium: <span>${extraPremium}</span>
						</p>
					)}
					<div className="mt-4 flex w-full justify-end">
						<a href="#" className="text-blue-500">
							Leer más
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

Pack.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	prices: PropTypes.shape({
		basic: PropTypes.number.isRequired,
		medium: PropTypes.number,
		premium: PropTypes.number,
		extraPremium: PropTypes.number,
	}).isRequired,
}

export default Pack
