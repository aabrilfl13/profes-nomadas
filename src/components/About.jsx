
const About = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <h3 className="text-yellow-500 uppercase mb-2">Prefix for the Company's About Section</h3>
        <h2 className="text-4xl font-bold mb-4">Headline For The Company’s About Section Will Be Here</h2>
        <p className="text-lg max-w-2xl mx-auto">In this part, we will introduce you or your business to website visitors...</p>
        <button className="bg-yellow-500 px-6 py-3 mt-6 rounded-full">Read More</button>
      </div>
      <div className="flex justify-center space-x-8 mt-12">
        <img src="/path-to-image1.jpg" alt="image1" className="w-1/3 rounded-lg shadow-lg" />
        <img src="/path-to-image2.jpg" alt="image2" className="w-1/3 rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default About;
