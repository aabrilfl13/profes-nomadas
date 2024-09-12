import PropTypes from "prop-types"
import { useState } from "react"

const TikTokCard = ({ data }) => {
	const [isMuted, setIsMuted] = useState(true)
	const [videoError, setVideoError] = useState(false)

	const handleVideoClick = (event) => {
		event.preventDefault()
		setIsMuted(!isMuted)
	}

	const handleVideoError = () => {
		setVideoError(true)
	}

	console.log(data)

	return (
		// <div className="card h-[500px] w-[280px] overflow-hidden rounded-[32px] bg-base-100 shadow-xl">
		// 	{/* Video Section */}
		// 	<div className="relative h-full w-full">
		// 		{videoError ? (
		// 			<div className="flex h-full w-full items-center justify-center">
		// 				<p className="text-center">HERE IS THE VIDEO</p>
		// 			</div>
		// 		) : (
		// 			<video
		// 				className="w-ful h-full cursor-pointer"
		// 				muted={isMuted}
		// 				loop
		// 				autoPlay
		// 				onClick={handleVideoClick}
		// 				onError={handleVideoError}
		// 			>
		// 				<source src={data.url} type="video/mp4" />
		// 				Your browser does not support the video tag.
		// 			</video>
		// 		)}
		// 		{/* Overlay Section */}
		// 		<div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
		// 			<div>
		// 				<h2 className="text-lg font-bold">{data.title}</h2>
		// 				<p className="text-sm">{data.description}</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className="h-[500px] max-w-[280px] overflow-hidden rounded-3xl bg-white text-black shadow-xl">
			<div className="relative h-full w-full">
				<div className="flex h-full w-full items-center justify-center">
					<p className="text-center">{data.title}</p>
				</div>

				{/* Overlay Section */}
				<div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-black">
					<div>
						<h2 className="text-lg font-bold">A TITLE</h2>
						<p className="text-sm">a description, just introduction</p>
					</div>
				</div>
			</div>
		</div>
	)
}

TikTokCard.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}).isRequired,
}

export default TikTokCard
