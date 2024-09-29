import profeNomada1 from '@/assets/img/profe-nomada-info-1.png';
import profeNomada2 from '@/assets/img/profe-nomada-info-2.png';
import profeNomada3 from '@/assets/img/profe-nomada-info-3.png';
import profeNomada4 from '@/assets/img/profe-nomada-info-4.png';

import './profeNomadasInfo.css'


const ProfeNomadaInfo = () =>{
    return (
        <section className="profe-nomadas">
          <h1 className="mt-4 mb-2">¿Qué es <br /> Profe Nómadas?</h1>
          <p>
            En Profes Nómadas creemos que la enseñanza no tiene que limitarse a un aula tradicional. 
            Nuestra misión es empoderar a maestr@s y maestros jóvenes que buscan llevar su pasión por 
            la enseñanza más allá de las fronteras, explorando nuevas culturas y formas de vida 
            mientras desarrollan su carrera profesional. 
            <br />
            <br />
            Con un enfoque cercano y amigable, te guiamos 
            para que conviertas tus sueños en realidad, llevándote de las oposiciones a las oportunidades 
            internacionales. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <div className="profe-nomadas-gallery">
            <img id="profe-nomada-1" src={profeNomada1} alt="Descripción de la imagen 1" />
            <img id="profe-nomada-2" src={profeNomada2} alt="Descripción de la imagen 2" />
            <img  id="profe-nomada-3" src={profeNomada3} alt="Descripción de la imagen 3" />
            <img  id="profe-nomada-4" src={profeNomada4} alt="Descripción de la imagen 4" />
          </div>
        </section>
      );
}

export default ProfeNomadaInfo