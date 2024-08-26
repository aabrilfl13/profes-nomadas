const Pack = ({ name, image, prices }) => {
  const { basic, medium, premium, extraPremium } = prices;

  return (
    <div className="card bg-base-100 w-full max-w-xs sm:max-w-md shadow-xl mt-4 mb-10"> 
      <figure>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <p className="flex justify-between w-full">
            Pack Básico: <span>${basic}</span>
          </p>
          {medium !== null && (
            <p className="flex justify-between w-full">
              Pack Medio: <span>${medium}</span>
            </p>
          )}
          {premium !== null && (
            <p className="flex justify-between w-full">
              Pack Premium: <span>${premium}</span>
            </p>
          )}
          {extraPremium !== null && (
            <p className="flex justify-between w-full">
              Pack Extra Premium: <span>${extraPremium}</span>
            </p>
          )}
          <div className="flex justify-end mt-4 w-full">
            <a href="#" className="text-blue-500">Leer más</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pack;
