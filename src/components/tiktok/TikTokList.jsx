import TikTokCard from "@/components/cards/TikTokCard"

const TikTokList = ({ tiktoks }) => {
	// TODO: Make slider component
	return (
		<div className="flex min-h-screen items-center justify-center">
			{tiktoks.map((tiktok, index) => (
				<TikTokCard key={index} data={tiktok} />
			))}
		</div>
	)
}

export default TikTokList
