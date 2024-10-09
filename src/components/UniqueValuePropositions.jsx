
const UniqueValuePropositions = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h3 className="text-yellow-500 uppercase mb-2">Prefix Describing Your Unique Value Propositions</h3>
        <h2 className="text-4xl font-bold">Headline Describing Your Unique Value Propositions Will Be Here</h2>
      </div>
      <div className="flex justify-around">
        {["Unique Value Proposition 1", "Unique Value Proposition 2", "Unique Value Proposition 3"].map((value, index) => (
          <div key={index} className="w-1/3 text-center">
            <h4 className="text-2xl font-bold">{value}</h4>
            <p className="text-gray-600 mt-4">In this part, we will write about what makes your business unique...</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueValuePropositions;
