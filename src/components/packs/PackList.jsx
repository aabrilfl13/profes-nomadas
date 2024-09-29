import PropTypes from "prop-types"
import Pack from "@/components/packs/Pack"

const PackList = ({ packs }) => {
	return (
		<div className="pack-list flex flex-col items-center">
			<h1 className="text-2xl">Nuestros Planes</h1>
			{packs.map((pack, index) => (
				<Pack key={index} {...pack} />
			))}
		</div>
	)
}

PackList.propTypes = {
	packs: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			prices: PropTypes.shape({
				basic: PropTypes.number,
				medium: PropTypes.number,
				premium: PropTypes.number,
				extraPremium: PropTypes.number,
			}).isRequired,
		})
	).isRequired,
}

export default PackList
