import Button from "../../common/button";
const Hero = () => {
	return (
		<div
			className="hero"
			style={{
				backgroundImage:
					"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
			}}
		>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-md">
					<h1 className="mb-5 text-3xl font-bold">
						¿Quieres vivir una nueva experiencia única en Irlanda?
					</h1>
					<p className="mb-5">Explora nuestros packs</p>
					<Button text="VER PACKS" color="btn-secondary" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
