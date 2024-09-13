import PropTypes from "prop-types"
import { useState } from "react"

import "./tikTokCard.css"

const TikTokCard = ({ data }) => {
	const [videoError, setVideoError] = useState(false)
	const [showButton, setShowButton] = useState(false)
	const [isClicked, setIsClicked] = useState(false)

	const handleCardClick = (event) => {
		event.preventDefault()
		setShowButton(!showButton)
		setIsClicked(!isClicked)
	}

	const handleButtonClick = (event) => {
		event.stopPropagation() // Prevent the click event from bubbling up to the card
	}

	const handleVideoError = () => {
		setVideoError(true)
	}

	return (
		<div className="card">
			<div className="relative h-full w-full">
				{videoError ? (
					<div className="flex h-full w-full items-center justify-center">
						<p className="text-center">HERE IS THE VIDEO</p>
					</div>
				) : (
					<video
						className="flex h-full w-full cursor-pointer"
						muted={true}
						loop
						autoPlay
						playsInline
						onError={handleVideoError}
						onClick={handleCardClick}
					>
						<source src={data.url} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				)}
				{showButton && (
					<div
						className={`absolute inset-0 z-50 flex items-center justify-center ${isClicked ? "bg-black/50" : ""}`}
						onClick={handleCardClick}
					>
						<a
							href={data.url}
							className="rounded-xl bg-white px-4 py-2 text-black"
							target="_blank"
							rel="noopener noreferrer"
							onClick={handleButtonClick}
						>
							Saber más
						</a>
					</div>
				)}
				{/* Overlay Section */}
				<div className="overlay">
					<div>
						<h2 className="text-lg font-bold">{data.title}</h2>
						<p className="text-sm">{data.description}</p>
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
