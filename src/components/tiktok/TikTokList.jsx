import PropTypes from "prop-types"
import { FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TikTokCard from "../cards/TikTokCard"

import "swiper/css"
import "swiper/css/free-mode"

const sliderProps = {
	modules: [FreeMode],
	// speed: 100,  // Set the speed of the slider when it is in auto move
	freeMode: false,
	slidesPerView: "auto",
	spaceBetween: 15,
	loop: true,
	navigation: true,
	centeredSlides: true,
	initialSlide: 1, // Set the second slide as the default active slide
	onSlideChange: () => console.log("slide change"),
	onSwiper: (swiper) => console.log(swiper),
}

const TikTokList = ({ tiktoks }) => {
	return (
		<section className="my-20 sm:my-32">
			<Swiper className="mySwiper" {...sliderProps}>
				{tiktoks.map((tiktok, index) => (
					<SwiperSlide key={index} className="h-[500px] max-w-[280px] overflow-hidden rounded-3xl">
						<TikTokCard data={tiktok} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

TikTokList.propTypes = {
	tiktoks: PropTypes.array.isRequired,
}

export default TikTokList
