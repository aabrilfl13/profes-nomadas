const Header = () => {
	return (
		<header
			className="h-screen bg-cover bg-center text-white"
			style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
		>
			<nav className="flex items-center justify-between p-6">
				<h1 className="text-4xl font-bold">Profes Nómadas</h1>
				<ul className="flex space-x-4">
					<li>
						<a href="#" className="hover:text-yellow-500">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-yellow-500">
							About
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-yellow-500">
							Services
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-yellow-500">
							Blog
						</a>
					</li>
					<li>
						<a href="#" className="hover:text-yellow-500">
							Contact
						</a>
					</li>
				</ul>
				<button className="rounded-full bg-yellow-500 px-4 py-2 text-white">ÚNETE AHORA</button>
			</nav>
			<div className="flex h-full flex-col items-center justify-center">
				<h2 className="text-5xl font-bold">
					We Will Write A Headline Highlighting Your Business Here
				</h2>
				<p className="mt-4 text-xl">
					We will write a persuasive introduction for you or your company.
				</p>
				<button className="mt-6 rounded-full bg-yellow-500 px-6 py-3">Call to Action</button>
			</div>
		</header>
	)
}

export default Header
