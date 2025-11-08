"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaClock, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdRestaurantMenu } from "react-icons/md";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    {
      category: "Kaladi Pizzas",
      items: [
        { name: "Classic Kaladi Margherita", price: "₹299", desc: "Fresh Kaladi cheese, tomato sauce, basil" },
        { name: "Spicy Kaladi Delight", price: "₹349", desc: "Kaladi cheese, jalapeños, bell peppers, onions" },
        { name: "Jammu Special Pizza", price: "₹399", desc: "Premium Kaladi, mushrooms, olives, corn" },
        { name: "Paneer & Kaladi Fusion", price: "₹369", desc: "Double cheese with paneer tikka" },
      ],
    },
    {
      category: "Kaladi Burgers",
      items: [
        { name: "Kaladi Cheese Burger", price: "₹199", desc: "Grilled patty with melted Kaladi cheese" },
        { name: "Spicy Kaladi Burger", price: "₹229", desc: "Spicy patty, Kaladi cheese, jalapenos" },
        { name: "Veggie Kaladi Burger", price: "₹189", desc: "Vegetable patty with Kaladi cheese" },
        { name: "Double Kaladi Delight", price: "₹279", desc: "Double patty, double Kaladi cheese" },
      ],
    },
    {
      category: "Kaladi Specials",
      items: [
        { name: "Kaladi Fries", price: "₹149", desc: "Crispy fries topped with melted Kaladi" },
        { name: "Kaladi Sandwich", price: "₹159", desc: "Grilled sandwich with Kaladi & veggies" },
        { name: "Kaladi Nachos", price: "₹199", desc: "Nachos loaded with Kaladi cheese sauce" },
        { name: "Kaladi Cheese Sticks", price: "₹179", desc: "Crispy fried Kaladi cheese sticks" },
      ],
    },
    {
      category: "Beverages",
      items: [
        { name: "Noon Chai (Pink Tea)", price: "₹79", desc: "Traditional Kashmiri salt tea" },
        { name: "Kahwa", price: "₹89", desc: "Aromatic Kashmiri green tea" },
        { name: "Fresh Juices", price: "₹99", desc: "Seasonal fruit juices" },
        { name: "Soft Drinks", price: "₹49", desc: "Chilled beverages" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Jammu Kaladi Cafe
          </h1>
          <div className="hidden md:flex gap-6">
            {["Home", "About", "Menu", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
                onClick={() => setActiveSection(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in">
              Authentic Jammu Kaladi
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Experience the Rich Heritage of Jammu's Famous Cheese
            </p>
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
              <div className="text-6xl mb-4">🧀</div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                What is Kaladi?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kaladi is a traditional cheese from Jammu, crafted with centuries-old techniques.
                This unique cheese has a firm texture and rich, savory flavor that melts beautifully,
                making it perfect for pizzas, burgers, and our signature dishes.
              </p>
            </div>
            <a
              href="#menu"
              className="inline-block bg-accent text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            Why Jammu Kaladi Cafe?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Authentic Heritage
              </h3>
              <p className="text-gray-700">
                We bring you the authentic taste of Jammu with traditional Kaladi cheese,
                prepared using age-old recipes passed down through generations.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Master Craftsmen
              </h3>
              <p className="text-gray-700">
                Our chefs are trained in the art of Kaladi preparation, ensuring every dish
                captures the perfect balance of tradition and innovation.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-b from-orange-50 to-white shadow-lg">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Unique Fusion
              </h3>
              <p className="text-gray-700">
                Experience Kaladi like never before - in pizzas, burgers, and creative fusion
                dishes that honor tradition while embracing modern tastes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <MdRestaurantMenu className="text-6xl text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Signature Menu
            </h2>
            <p className="text-xl text-gray-700">
              Every dish crafted with love and authentic Jammu Kaladi cheese
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {menuItems.map((section, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h3 className="text-3xl font-bold text-secondary mb-6 border-b-4 border-accent pb-3">
                  {section.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-start p-4 rounded-lg hover:bg-orange-50 transition-colors border-2 border-transparent hover:border-accent"
                    >
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                      <div className="text-2xl font-bold text-accent ml-4">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Highlight */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Kaladi Difference
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Unlike regular cheese, Kaladi is a dense, protein-rich delicacy with a unique texture
            that doesn't melt away but creates a delightful, stretchy consistency. It's naturally
            preserved and packed with authentic Himalayan flavors that transport you straight to
            the valleys of Jammu.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="text-xl font-bold mb-2">High Protein</h4>
              <p>Rich in nutrients and authentic taste</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🌿</div>
              <h4 className="text-xl font-bold mb-2">Natural</h4>
              <p>Made with traditional methods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">✨</div>
              <h4 className="text-xl font-bold mb-2">Unique Taste</h4>
              <p>Flavor profile like no other cheese</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
            Visit Us Today
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Location & Hours
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-accent text-2xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-700">
                      Greater Noida Extension<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-accent text-2xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Hours</p>
                    <p className="text-gray-700">
                      Mon - Sun: 11:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-accent text-2xl mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-700">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Connect With Us
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <FaInstagram className="text-pink-600 text-3xl" />
                  <span className="text-gray-800 font-medium">@jammukaladicafe</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <FaFacebook className="text-blue-600 text-3xl" />
                  <span className="text-gray-800 font-medium">Jammu Kaladi Cafe</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <FaWhatsapp className="text-green-600 text-3xl" />
                  <span className="text-gray-800 font-medium">WhatsApp Order</span>
                </a>
                <a
                  href="mailto:info@jammukaladicafe.com"
                  className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <MdEmail className="text-red-600 text-3xl" />
                  <span className="text-gray-800 font-medium">info@jammukaladicafe.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent to-orange-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Taste the Tradition?
          </h2>
          <p className="text-xl mb-8">
            Visit Jammu Kaladi Cafe today and experience the authentic flavors of Jammu
            right here in Greater Noida Extension!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-white text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              View Menu
            </a>
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-900 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Jammu Kaladi Cafe</h3>
          <p className="text-amber-200 mb-4">
            Bringing the authentic taste of Jammu to Greater Noida Extension
          </p>
          <p className="text-sm text-amber-300">
            © 2024 Jammu Kaladi Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
