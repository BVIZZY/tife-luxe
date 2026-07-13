import React, { useState } from "react";

function App() {
  // State to manage booking modal visibility
  const [isOpen, setIsOpen] = useState(false);
  
  // State for form inputs
  const [selectedService, setSelectedService] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

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

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert("Booking Request Received!\nService: " + selectedService + "\nDate: " + appointmentDate + "\nTime: " + appointmentTime);
    setIsOpen(false);
  };

  return (
    /* Outermost Div: Changed gradient opacity from 85%/90% down to a much lighter 40%/60% for a bright, vibrant image */
    <div className="min-h-screen text-white font-sans selection:bg-amber-500 selection:text-black bg-cover bg-center bg-no-repeat bg-fixed relative bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.6)),url('/blurred_background.jpg')]">
      {/* Top Banner */}
      <div className="bg-amber-500 text-black text-xs font-bold tracking-widest uppercase py-2 text-center relative z-10">
        ✨ Opening Special: Enjoy 20% Off Your First Luxury Session ✨
      </div>

      {/* Navigation Header */}
      <header className="p-6 flex justify-between items-center bg-transparent max-w-6xl mx-auto relative z-10">
        <h1 className="font-display text-2xl tracking-widest text-amber-500 font-bold">
          TIFE LUXE
        </h1>
        <a
          href="https://calendly.com/sunblessing200/30min"
          className="bg-amber-500 text-black hover:bg-amber-600 transition-all duration-300 text-xs tracking-widest uppercase px-6 py-2 rounded-sm font-bold shadow-md inline-block"
        >
          Book Now
        </a>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto text-center px-4 pt-16 pb-24 relative z-10">
        <h2 className="font-display text-4xl md:text-6xl tracking-wider uppercase mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          Redefining <br />
          <span className="text-amber-500">Elegance</span>
        </h2>
        <p className="text-zinc-200 text-xs tracking-widest uppercase mb-8 drop-shadow-[0_1px_5px_rgba(0,0,0,0.8)]">
          Ink, Lashes & Fine-Line Tattoos
        </p>
        <div className="w-16 h-[1px] bg-amber-500 mx-auto mb-8"></div>
        <a
          href="https://calendly.com/sunblessing200/30min"
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 shadow-lg shadow-amber-500/20 inline-block"
        >
          Schedule Session
        </a>
      </main>

      {/* Menu Section */}
      <section className="max-w-3xl mx-auto px-4 py-16 bg-neutral-950/75 backdrop-blur-md rounded-xl border border-zinc-900/50 mb-16 relative z-10">
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl tracking-widest uppercase text-amber-500">
            The Menu
          </h3>
          <p className="text-zinc-400 text-xs tracking-widest uppercase">
            Our Premium Experiences
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-5 rounded-lg border border-zinc-900 bg-black/60 hover:border-amber-500/30 transition-all duration-300 flex justify-between items-start group"
            >
              <div>
                <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-amber-500 transition-colors">
                  {service.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-1">{service.desc}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-amber-500 font-medium text-sm">{service.price}</span>
                <a 
                  href="https://calendly.com/sunblessing200/30min"
                  className="text-[10px] uppercase tracking-wider border border-amber-500/40 px-2 py-1 rounded text-zinc-300 hover:bg-amber-500 hover:text-black transition-all inline-block"
                >
                  Select
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 pb-24 relative z-10">
        <div className="text-center mb-10">
          <h3 className="font-display text-2xl tracking-widest uppercase text-amber-500">
            Our Lookbook
          </h3>
          <p className="text-zinc-400 text-xs tracking-widest uppercase">
            Flawless Custom Execution
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="aspect-[3/4] overflow-hidden rounded-lg border border-zinc-900 bg-neutral-900/50 relative group"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  if (e.target.src.indexOf("public") === -1) {
                    e.target.src = "./public" + img.src;
                  }
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Booking Appointment Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-neutral-950 border border-zinc-800 p-6 rounded-xl w-full max-w-md shadow-2xl relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>
            
            <h3 className="font-display text-xl tracking-wider uppercase text-amber-500 mb-2 text-center">
              Book Appointment
            </h3>
            <p className="text-zinc-400 text-xs text-center mb-6">Select your premium session details</p>
            
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Select Service</label>
                <select 
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-neutral-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="">-- Choose a Service --</option>
                  <option value="Classic Lash Extensions">Classic Lash Extensions ($80)</option>
                  <option value="Volume Lash Extensions">Volume Lash Extensions ($120)</option>
                  <option value="Premium Brow Ombre Ink">Premium Brow Ombre Ink ($250)</option>
                  <option value="Lash Lift & Tint">Lash Lift & Tint ($65)</option>
                  <option value="Fine-Line Custom Tattoo">Fine-Line Custom Tattoo (Quote Required)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Select Date</label>
                  <input 
                    required
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full bg-neutral-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Select Time</label>
                  <input 
                    required
                    type="time"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    className="w-full bg-neutral-900 border border-zinc-800 rounded p-2 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Full Name</label>
                <input 
                  required
                  type="text"
                  placeholder="Your Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-neutral-900 border border-zinc-800 rounded p-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1">Phone Number</label>
                <input 
                  required
                  type="tel"
                  placeholder="Contact Number"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-neutral-900 border border-zinc-800 rounded p-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold tracking-widest uppercase py-3 rounded mt-4 transition-colors"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
