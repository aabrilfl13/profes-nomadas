
const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <h3 className="text-yellow-500 uppercase mb-2">Prefix For The Testimonials Section</h3>
        <h2 className="text-4xl font-bold">Heading For The Testimonials Section Will Be Here</h2>
      </div>
      <div className="flex justify-around">
        {["Testimonial Author Name", "Testimonial Author Name"].map((author, index) => (
          <div key={index} className="w-1/3 text-center bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">"We will write a testimonial from a satisfied customer..."</p>
            <p className="font-bold mt-4">{author}</p>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
