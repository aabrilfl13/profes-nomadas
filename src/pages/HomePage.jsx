import PackList from "../components/packs/PackList";
import { packsData } from "../data/packsData";

const HomePage = () =>{
    return(
        <div>
        <PackList packs={packsData} />
      </div>
    )

}

export default HomePage;