import './ReviewCard.css';
import logo from '../../assets/img/logo-nomada.png';

const ReviewCard = () => {
    return (
    <div className='flex justify-center'>
      <div className="review-card flex items-center rounded-lg shadow-lg p-1 w-80 h-28">
        <div className="mr-2">
          <img src={logo} alt="Icono" className="w-48 h-24 rounded-full" />
        </div>
        <div>
          <div className="flex items-center my-1">
            <h3 className="font-bold text-sm">María Belenguer</h3>
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-gray-500 ml-1">★</span>
          </div>
          <p className="text-xs mt-2">Me encanta desde el primer momento en que la vi. Mi acento british ha mejorado muchísimo.</p>
        </div>
      </div>
    </div>
    );
  }
  
  export default ReviewCard;
  