import educacionIrlanda from "../assets/Educacion-Irlanda.png"

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
