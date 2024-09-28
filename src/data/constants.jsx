import titokVideo from "@/assets/videos/tiktok.mp4"
import titokVideo1 from "@/assets/videos/vid1.mp4"
import titokVideo2 from "@/assets/videos/vid2.mp4"
import educacionIrlanda from "../assets/BackgroundHero.png"
import logo1 from "../assets/img/logo-nomada.png"
import { FreeMode } from "swiper/modules"

import "swiper/css"
import "swiper/css/free-mode"

//Datos de los precios para el componente pack
//El bascio siempre tiene que estar , los demas precios son opcionales

export const packsData = [
	{
		name: "MI NUEVO YO",
		image: educacionIrlanda,
		prices: {
			basic: 10,
			medium: 20,
			premium: 30,
			extraPremium: null,
		},
	},
	{
		name: "CALIDAD DE VIDA",
		image: educacionIrlanda,
		prices: {
			basic: 30,
			medium: 40,
			premium: 50,
			extraPremium: 60,
		},
	},
]

export const tiktokData = [
	{
		title: "Some title",
		description:
			"¿Necesitamos sí o sí saber gaelico/irlandés para que nos puedan contratar en un colegio de educación primaria? NO \
			Nos conceden unos años para poder aprenderlo ya que saben que es un idioma muyyy complicado. \
			Nos contratarán de colegios siempre que necesiten cubrir un puesto y les gustemos 🤷🏻‍♀️",
		url: titokVideo,
	},
	{
		title: "Some title",
		description:
			"¿Qué nivel de inglés necesito para trabajar en Irlanda? \
			Va a depender mucho de en qué ámbito de educación nos movamos y dd las necesidades actuales de los centros (pista, tienen mucha) \
			Pero desde Profes Nómadas siempre vamos a recomendar empezar a trabajar en educación primaria o educación secundaria cuando ya tengamos un nivel C1 o cercano, aunque hay formas de poder trabajar sin aún tenerlo.",
		url: titokVideo1,
	},
	{
		title: "Some title",
		description:
			"IRLANDA está buscando DOCENTES de educación primaria y educación secundaria deeesesperadamente!!! \
			A una semana de empezar el curso escolar siguen faltando 1017 puestos por cubrir😳 \
			No es para nada tarde para empezar con la preparación y poder entrar pronto en un centro. \
			Escríbenos por privado y te explicamos cómo te podemos ayudar 🤞🏼🧚🏻‍♀️",
		url: titokVideo2,
	},
]

export const reviewsData = [
	{
		name: "María Belenguer",
		description:
			"Me encanta desde el primer momento en la que la vi. \
		 Mi acento british ha mejorado muchísimo",
		logo: logo1,
	},
	{
		name: "Ramon Belenguer",
		description:
			"Increible experiencia, \
		 Empece desde 0 y llegue hasta masachusen",
		logo: logo1,
	},
	{
		name: "Jorge Belenguer",
		description:
			"Increible experiencia, \
		 Empece desde 0 y llegue hasta masachusen",
		logo: logo1,
	},
]

export const sliderProps = {
	modules: [FreeMode],
	freeMode: false,
	slidesPerView: "auto",
	spaceBetween: 15,
	loop: true,
	navigation: true,
	centeredSlides: true,
	initialSlide: 1,
	onSlideChange: () => console.log("slide change"),
	onSwiper: (swiper) => console.log(swiper),
}
