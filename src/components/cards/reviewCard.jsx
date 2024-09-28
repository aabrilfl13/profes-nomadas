import "./reviewCard.css"
import PropTypes from "prop-types"

const ReviewCard = ({ data }) => {
	return (
		<div className="flex justify-center">
			<div className="review-card flex h-28 w-80 items-center rounded-lg p-1 shadow-lg">
				<div className="mr-2">
					<img src={data.logo} alt="Icono" className="h-24 w-48 rounded-full" />
				</div>
				<div>
					<div className="my-1 flex items-center">
						<h3 className="text-sm font-bold">{data.name}</h3>
						<span className="text-yellow-500">★★★★★</span>
						<span className="ml-1 text-gray-500">★</span>
					</div>
					<p className="mt-2 text-xs">{data.description}</p>
				</div>
			</div>
		</div>
	)
}

ReviewCard.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		logo: PropTypes.string.isRequired,
	}).isRequired,
}
export default ReviewCard
