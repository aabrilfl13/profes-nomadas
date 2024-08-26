import PackList from "../components/packs/PackList";
import Hero from "../components/hero/Hero"
import { packsData } from "../data/packsData";

const HomePage = () =>{
    return(
        <div>
        {/* Esto es para ir viend como queda */}
        <Hero/>
        <PackList packs={packsData} />
      </div>
    )

}

export default HomePage;