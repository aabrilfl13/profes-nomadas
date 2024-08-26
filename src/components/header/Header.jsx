import HamburgerButton from "./HamburgerButton";
const Header = () => {
	return (
		<div className="navbar bg-base-100 relative z-20">
			<div className="flex-none"></div>
			<div className="flex-1">
				<HamburgerButton />
				<a className="btn btn-ghost text-xl">PROFES NOMADAS</a>
			</div>
		</div>
	);
};

export default Header;
