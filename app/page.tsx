export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-8 text-center">
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">
          Welcome to Bellagio
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your Premier Banquet and Conference Hall
        </p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-md font-bold hover:bg-yellow-400 transition">
          Book Your Event
        </button>
      </section>
    </div>
  );
}
