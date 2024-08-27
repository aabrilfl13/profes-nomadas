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
		<div className="card overflow-hidden rounded-[32px] bg-base-100 shadow-xl">
			{/* Video Section */}
			<div className="relative h-full w-full">
				{videoError ? (
					<div className="flex h-[412px] w-[210px] items-center justify-center">
						<p className="text-center">HERE IS THE VIDEO</p>
					</div>
				) : (
					<video
						className="h-auto w-[210px] cursor-pointer"
						muted={isMuted}
						loop
						autoPlay
						onClick={handleVideoClick}
						onError={handleVideoError}
					>
						<source src={data.url} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}
				{/* Overlay Section */}
				<div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
					<div>
						<h2 className="text-lg font-bold">Username</h2>
						<p className="text-sm">Description of the reel goes here...</p>
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
