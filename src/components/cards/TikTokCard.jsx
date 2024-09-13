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
		<div className="h-[474px] max-w-[267px] overflow-hidden rounded-3xl text-black shadow-xl">
			<div className="relative h-full w-full">
				{videoError ? (
					<div className="flex h-full w-full items-center justify-center">
						<p className="text-center">HERE IS THE VIDEO</p>
					</div>
				) : (
					<video
						className="flex h-full w-full cursor-pointer"
						muted={isMuted}
						loop
						autoPlay
						playsInline
						onClick={handleVideoClick}
						onError={handleVideoError}
					>
						<source src={data.url} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}

				{/* Overlay Section */}
				<div className="bg-black">
					<div
						className="items-cent absolute bottom-0 left-0 z-10 flex w-full justify-between p-4 text-white"
						style={{
							background:
								"linear-gradient(to top, rgba(0, 0, 0, 0.8) 70%, rgba(108, 117, 125, 0) 100%)",
						}}
					>
						<div>
							<h2 className="text-lg font-bold">{data.title}</h2>
							<p className="text-sm">{data.description}</p>
						</div>
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
