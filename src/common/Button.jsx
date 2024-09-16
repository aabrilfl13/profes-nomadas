import PropTypes from "prop-types"

const Button = ({ text, color }) => {
	return <button className={`btn btn-active ${color}`}>{text}</button>
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
}

export default Button
