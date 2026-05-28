export default function FaithAndFlourCo() {
  const products = [
    {
      name: "Classic Sourdough Loaf",
      desc: "A golden, crusty loaf made with simple ingredients and slow fermentation.",
      image: "/classic-loaf.JPG",
    },
    {
      name: "Sandwich Bread",
      desc: "Soft, homemade sandwich loaves perfect for everyday meals.",
      image: "/sandwhich-bread.JPG",
    },
    {
      name: "Salted Bagels",
      desc: "Chewy, golden bagels finished with a sprinkle of coarse salt.",
      image: "/salted-bagel.JPG",
    },
    {
      name: "Homemade Tortillas",
      desc: "Fresh, soft tortillas made by hand and ready for the table.",
      image: "/tortillas.JPG",
    },
    {
      name: "Rice Krispie Treats",
      desc: "Thick, sweet, homemade treats for parties, gifts, or family nights.",
      image: "/krispie-treats.JPG",
    },
    {
      name: "Sourdough Croutons",
      desc: "Crispy, golden bites perfect for salads, soups, and snacking.",
      image: "/croutons.JPG",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fbf6ed] text-[#3b2b20]">
      <nav className="sticky top-0 z-50 bg-[#fbf6ed]/90 backdrop-blur border-b border-[#e8d8c3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-serif font-bold tracking-wide">Faith & Flour Co.</h1>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8a6b4f]">Homemade Sourdough</p>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#about" className="hover:text-[#9d6b3d]">About</a>
            <a href="#menu" className="hover:text-[#9d6b3d]">Menu</a>
            <a href="#gallery" className="hover:text-[#9d6b3d]">Gallery</a>
            <a href="#order" className="hover:text-[#9d6b3d]">Order</a>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1d13]/80 via-[#2b1d13]/45 to-transparent z-10" />
        <img src="/sandwhich-bread.JPG" alt="Fresh sourdough loaf" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#f5d9ad]">Baked with faith. Shared with love.</p>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">Fresh sourdough from a homegrown kitchen.</h2>
            <p className="text-lg md:text-xl text-[#f7ead7] mb-8 leading-relaxed">
              Handcrafted bread, bagels, tortillas, and sweet treats made with patience, prayer, and simple ingredients.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#order" className="bg-[#d99b54] text-[#2b1d13] px-7 py-3 rounded-full font-bold shadow-lg hover:bg-[#efb36b] transition">Place an Order</a>
              <a href="#menu" className="bg-white/15 border border-white/40 px-7 py-3 rounded-full font-bold hover:bg-white/25 transition">View Menu</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3b2b20] text-[#fbf6ed] py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xl md:text-2xl font-serif italic">“Taste and see that the Lord is good.”</p>
          <p className="mt-2 text-sm tracking-widest uppercase text-[#d9b98c]">Psalm 34:8</p>
        </div>
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src="/IMG_8693.JPG" alt="Making homemade dough" className="rounded-3xl shadow-xl object-cover h-80 w-full" />
          <img src="/IMG_8694.JPG" alt="Fresh dough" className="rounded-3xl shadow-xl object-cover h-80 w-full mt-10" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#9d6b3d] font-bold mb-3">From our kitchen</p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Made by hand, made with heart.</h3>
          <p className="text-lg leading-relaxed text-[#6d5744] mb-5">
            Faith & Flour Co. is built around homemade baked goods that feel like comfort, family, and Sunday dinner all in one. Every loaf is made with care, slow fermentation, and a love for serving others.
          </p>
          <p className="text-lg leading-relaxed text-[#6d5744]">
            Whether you need a fresh sourdough loaf for the week, treats for a gathering, or something special for your table, we would be honored to bake for you.
          </p>
        </div>
      </section>

      <section id="menu" className="bg-[#f1e2cf] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#9d6b3d] font-bold mb-3">Weekly favorites</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">Fresh baked goods</h3>
            <p className="text-[#6d5744] text-lg">A simple starter menu for sourdough, homemade bread, and sweet treats.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <div key={item.name} className="bg-[#fffaf2] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-1 transition">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h4 className="font-serif text-2xl font-bold mb-2">{item.name}</h4>
                  <p className="text-[#6d5744] leading-relaxed mb-5">{item.desc}</p>
                  <button className="w-full bg-[#3b2b20] text-white rounded-full py-3 font-bold hover:bg-[#5a3d29] transition">Ask About Availability</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#9d6b3d] font-bold mb-3">Our promise</p>
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Simple ingredients. Honest baking.</h3>
          <div className="space-y-5 text-lg text-[#6d5744]">
            <p>✞ Baked with gratitude and care</p>
            <p>✞ Small batch, homemade quality</p>
            <p>✞ Fresh pickup options available</p>
            <p>✞ Perfect for families, gifts, and gatherings</p>
          </div>
        </div>
        <img src="/IMG_8682.JPG" alt="Packaged homemade bread" className="rounded-3xl shadow-2xl object-cover w-full h-[500px]" />
      </section>

      <section id="gallery" className="bg-[#3b2b20] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d9b98c] font-bold mb-3">Gallery</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold">A little look inside the kitchen</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["/IMG_8699.JPG", "/IMG_8700.JPG", "/IMG_8701.JPG", "/IMG_8685.JPG", "/IMG_8684.JPG", "/IMG_8683.JPG", "/IMG_8693.JPG", "/IMG_8694.JPG"].map((src, index) => (
              <img key={index} src={src} alt="Faith and Flour bakery photo" className="rounded-2xl object-cover h-52 md:h-64 w-full shadow-lg" />
            ))}
          </div>
        </div>
      </section>

      <section id="order" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9d6b3d] font-bold mb-3">Ready to order?</p>
        <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Bring fresh bread to your table this week.</h3>
        <p className="text-lg text-[#6d5744] leading-relaxed mb-8">
          Message Faith & Flour Co. to see this week’s menu, pickup options, and current availability.
        </p>
        <div className="bg-[#fffaf2] rounded-3xl shadow-xl p-8 border border-[#ead8c2]">
          <p className="font-serif text-2xl font-bold mb-2">Faith & Flour Co.</p>
          <p className="text-[#6d5744] mb-6">Homemade sourdough, breads, and treats</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:faithandflourco@example.com" className="bg-[#d99b54] text-[#2b1d13] px-7 py-3 rounded-full font-bold hover:bg-[#efb36b] transition">Email to Order</a>
            <a href="#" className="bg-[#3b2b20] text-white px-7 py-3 rounded-full font-bold hover:bg-[#5a3d29] transition">Facebook Page</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#2b1d13] text-[#f7ead7] py-10 text-center">
        <h4 className="text-3xl font-serif font-bold mb-2">Faith & Flour Co.</h4>
        <p className="text-[#d9b98c]">Baked with faith. Shared with love.</p>
      </footer>
    </div>
  );
}
