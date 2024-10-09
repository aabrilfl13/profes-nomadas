const Header = () => {
  return (
    <header className="bg-cover bg-center h-screen text-white" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-4xl font-bold">Profes Nómadas</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#" className="hover:text-yellow-500">About</a></li>
          <li><a href="#" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
          <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
        </ul>
        <button className="bg-yellow-500 px-4 py-2 rounded-full text-white">ÚNETE AHORA</button>
      </nav>
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="text-5xl font-bold">We Will Write A Headline Highlighting Your Business Here</h2>
        <p className="text-xl mt-4">We will write a persuasive introduction for you or your company.</p>
        <button className="bg-yellow-500 px-6 py-3 mt-6 rounded-full">Call to Action</button>
      </div>
    </header>
  );
};

export default Header;
