import React from "react";

function App() {
  const services = [
    { name: "Classic Lash Extensions", price: "$80", desc: "Natural, elegant enhancement." },
    { name: "Volume Lash Extensions", price: "$120", desc: "Full, dramatic luxury glamour." },
    { name: "Premium Brow Ombre Ink", price: "$250", desc: "Flawless, long-lasting defined brows." },
    { name: "Lash Lift & Tint", price: "$65", desc: "Beautifully lifted natural lashes." }
  ];

  const galleryImages = [
    { src: "/look1.jpg", alt: "Lash Extension Look" },
    { src: "/look2.jpg", alt: "Ombre Brow Fine Line Ink" },
    { src: "/look3.jpg", alt: "Fine-Line Tattoo Detail" },
    { src: "/look4.jpg", alt: "Luxury Lash Set" }
  ];

  return (
    <div className="min-h-screen text-white font-sans selection:bg-amber-500 selection:text-black bg-[#0A0A0A]">
      {/* Top Banner */}
      <div className="bg-amber-500 text-black text-xs font-bold tracking-widest uppercase py-2 text-center">
        ✨ Opening Special: Enjoy 20% Off Your First Luxury Session ✨
      </div>

      {/* Navigation Header */}
      <header className="p-6 flex justify-between items-center bg-transparent max-w-6xl mx-auto">
        <h1 className="font-display text-2xl tracking-widest text-amber-500 font-bold">
          TIFE LUXE
        </h1>
        <a
          href="https://calendly.com/sunblessing200/30min"
          className="bg-amber-500 text-black hover:bg-amber-600 transition-all duration-300 px-4 py-2 rounded-full font-semibold text-xs tracking-wider uppercase inline-block"
        >
          Book Now
        </a>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center px-4 pt-16 pb-24">
        <h2 className="font-display text-4xl md:text-6xl tracking-wider uppercase mb-2">
          Redefining <br />
          <span className="text-amber-500">Elegance</span>
        </h2>
        <p className="text-zinc-400 text-xs tracking-widest uppercase mb-8">
          Ink, Lashes & Fine-Line Tattoos
        </p>
        <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-8"></div>
        <a
          href="https://calendly.com/sunblessing200/30min"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 inline-block"
        >
          Schedule Session
        </a>
      </main>

      {/* Menu Section */}
      <section className="max-w-3xl mx-auto px-4 py-16 bg-neutral-950/40 backdrop-blur-md rounded-2xl mb-16 border border-neutral-900">
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl tracking-widest uppercase text-amber-500">
            The Menu
          </h3>
          <p className="text-zinc-500 text-xs tracking-widest uppercase">
            Our Premium Experiences
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between items-start border-b border-neutral-900 pb-4">
              <div>
                <h4 className="font-semibold text-sm text-neutral-200">{service.name}</h4>
                <p className="text-xs text-neutral-400 mt-1">{service.desc}</p>
              </div>
              <span className="text-amber-500 font-mono text-sm">{service.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl tracking-widest uppercase text-amber-500">
            Our Work
          </h3>
          <p className="text-zinc-500 text-xs tracking-widest uppercase">
            Visual Perfection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

