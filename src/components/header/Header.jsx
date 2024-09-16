import "../../App.css"
import HamburgerButton from "./HamburgerButton"

const Header = () => {
	return (
		<div className="custom-gradient navbar relative z-20 bg-base-100">
			<div className="flex-none"></div>
			<div className="flex-1">
				<HamburgerButton />
				<a className="btn btn-ghost text-xl">PROFES NOMADAS</a>
			</div>
		</div>
	)
}

export default Header
