const Footer = () => {
	return (
		<footer
			className="bg-cover bg-center py-20 text-white"
			style={{ backgroundImage: "url('/path-to-footer-image.jpg')" }}
		>
			<div className="text-center">
				<h2 className="text-4xl font-bold">We Will Write A Convincing Call To Action Here</h2>
				<p className="mt-4 text-xl">
					We will write a sub-headline that introduces your call to action...
				</p>
				<button className="mt-6 rounded-full bg-yellow-500 px-6 py-3">Call to Action</button>
			</div>
		</footer>
	)
}

export default Footer
