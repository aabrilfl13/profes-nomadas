
const Services = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h3 className="text-yellow-500 uppercase mb-2">Prefix For The Services Section</h3>
        <h2 className="text-4xl font-bold">Heading For The Services Section Will Be Here</h2>
      </div>
      <div className="flex justify-around">
        {["Service 1", "Service 2", "Service 3"].map((service, index) => (
          <div key={index} className="w-1/3 text-center">
            <img src={`/path-to-service${index + 1}.jpg`} alt={`service${index + 1}`} className="rounded-lg shadow-lg mb-4" />
            <h4 className="text-2xl font-bold">{service}</h4>
            <button className="bg-yellow-500 px-6 py-3 mt-6 rounded-full">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
