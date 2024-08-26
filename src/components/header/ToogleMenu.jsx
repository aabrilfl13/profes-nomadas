const ToogleMenu = () => {
	return (
		<div className="absolute top-15 left-0 bg-white shadow-lg rounded-lg p-4">
			<ul>
				<li className="py-2">
					<a href="#home">Home</a>
				</li>
				<li className="py-2">
					<a href="#about">About</a>
				</li>
				<li className="py-2">
					<a href="#services">Services</a>
				</li>
				<li className="py-2">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default ToogleMenu;
