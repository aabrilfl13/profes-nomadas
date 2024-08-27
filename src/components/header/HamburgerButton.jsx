import { useState } from "react"
import ToogleMenu from "./ToogleMenu"

const HamburgerButton = () => {
	const [isOpen, setIsOpen] = useState(false)

	function toggleMenu() {
		setIsOpen(!isOpen)
	}
	return (
		<div>
			<button className="btn btn-square btn-ghost" onClick={toggleMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					className="inline-block h-5 w-5 stroke-current"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>
			{isOpen && <ToogleMenu />}
		</div>
	)
}

export default HamburgerButton
