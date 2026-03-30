import { useCallback, useEffect, useRef, useState } from "react";

// ─── useInView hook ────────────────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const panels = [
  {
    id: 1,
    title: "TIRUMALA",
    subtitle: "Tirumala Up & Down",
    image: "/assets/generated/tirumala-temple.dim_800x500.jpg",
    badge: "✨ Unlimited Timing",
    note: null,
    pricing: [
      { type: "Sedan", price: "₹2,700", note: "All Inclusive" },
      { type: "Ertiga", price: "₹3,700", note: "All Included" },
      { type: "Innova Crysta", price: "₹4,200", note: "All Included" },
    ],
    waMsg:
      "Hi%2C%20I%20want%20to%20book%20Tirumala%20Up%20%26%20Down%20package%20with%20Tirupati%20Trails",
  },
  {
    id: 2,
    title: "SRIKALAHASTI + AIRPORT",
    subtitle: null,
    image: "/assets/generated/srikalahasti-temple.dim_800x500.jpg",
    badge: null,
    note: "⚠️ Waiting charges for Rahukethu Pooja – ₹300",
    subSections: [
      {
        label: "Srikalahasti",
        pricing: [
          { type: "Sedan", price: "₹3,000" },
          { type: "Ertiga", price: "₹3,500" },
          { type: "Crysta", price: "₹4,000" },
        ],
      },
      {
        label: "Airport Drops",
        pricing: [
          { type: "Sedan", price: "₹1,000" },
          { type: "Ertiga", price: "₹1,500" },
          { type: "Crysta", price: "₹2,000" },
        ],
      },
    ],
    waMsg:
      "Hi%2C%20I%20want%20to%20book%20Srikalahasti%20%2F%20Airport%20Drop%20package%20with%20Tirupati%20Trails",
  },
  {
    id: 3,
    title: "TEMPLE TOURS",
    subtitle: null,
    image: "/assets/generated/golden-temple-tour.dim_800x500.jpg",
    badge: "✔ All Inclusive",
    note: null,
    subSections: [
      {
        label: "Golden Temple – Vakulamatha – Srinivasa Mangapuram",
        pricing: [
          { type: "Sedan", price: "₹4,700" },
          { type: "Ertiga", price: "₹5,700" },
          { type: "Crysta", price: "₹7,500" },
        ],
      },
      {
        label: "Tiruthani – Kanchipuram",
        pricing: [
          { type: "Sedan", price: "₹4,700" },
          { type: "Ertiga", price: "₹5,700" },
          { type: "Crysta", price: "₹7,500" },
        ],
      },
    ],
    waMsg:
      "Hi%2C%20I%20want%20to%20book%20a%20Temple%20Tour%20package%20with%20Tirupati%20Trails",
  },
];

const features = [
  {
    icon: "🛡️",
    title: "Trusted Experts",
    desc: "Years of experience in pilgrimage travel",
  },
  {
    icon: "🚗",
    title: "Clean Vehicles",
    desc: "Well-maintained, sanitized fleet",
  },
  {
    icon: "🏷️",
    title: "Affordable Pricing",
    desc: "Transparent rates, no hidden charges",
  },
  {
    icon: "⏰",
    title: "Time-Efficient Service",
    desc: "Punctual pickups, optimized routes",
  },
  {
    icon: "😊",
    title: "Friendly Drivers",
    desc: "Courteous, knowledgeable local drivers",
  },
  {
    icon: "🎧",
    title: "Complete Travel Support",
    desc: "Assistance from booking to return",
  },
];

const fleet = [
  {
    name: "Sedan",
    model: "Swift Dzire / Honda Amaze",
    capacity: "4 Passengers",
    ac: "Full AC",
    luggage: "2 Bags",
    price: "₹2,000 onwards",
    image: "/assets/generated/sedan-white.dim_800x500.jpg",
    features: [
      "Comfortable seating",
      "Music system",
      "GPS navigation",
      "Clean & sanitized",
    ],
  },
  {
    name: "Ertiga",
    model: "Maruti Suzuki Ertiga",
    capacity: "6 Passengers",
    ac: "Full AC",
    luggage: "4 Bags",
    price: "₹3,000 onwards",
    image: "/assets/generated/ertiga-white.dim_800x500.jpg",
    features: [
      "Spacious 3-row seating",
      "Extra legroom",
      "GPS navigation",
      "Ideal for families",
    ],
  },
  {
    name: "Innova",
    model: "Toyota Innova Crysta",
    capacity: "7 Passengers",
    ac: "Full AC",
    luggage: "5 Bags",
    price: "₹4,000 onwards",
    image: "/assets/generated/innova-white.dim_800x500.jpg",
    features: [
      "Premium cabin",
      "Captain seats",
      "GPS navigation",
      "Best for groups",
    ],
  },
];

// ─── WhatsApp Float Button ─────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919000240313?text=Hi%2C%20I%20want%20to%20book%20a%20ride%20with%20Tirupati%20Trails"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110"
      style={{ background: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="white"
        width="28"
        height="28"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="WhatsApp"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Components ────────────────────────────────────────────────────────────────
function GoldButton({
  children,
  href,
  onClick,
  large = false,
  outline = false,
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  large?: boolean;
  outline?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  const base =
    "inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-300 cursor-pointer";
  const size = large ? "px-8 py-4 text-base" : "px-6 py-2.5 text-sm";
  const variant = outline
    ? "border-2 border-gold text-gold hover:bg-gold hover:text-black"
    : "gold-gradient text-black hover:opacity-90 hover:scale-105 shadow-gold";

  if (href) {
    return (
      <a href={href} className={`${base} ${size} ${variant} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${size} ${variant} ${className}`}
    >
      {children}
    </button>
  );
}

// ─── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Fleet", href: "#fleet" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.09_0_0)]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/assets/uploads/img-20251226-wa0001-019d3cc4-da86-73ad-b833-5f6cde1ce182-1.jpg"
              alt="Tirupati Trails Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-gold/60"
            />
            <span className="font-display font-bold text-xl gold-gradient-text tracking-wide">
              Tirupati Trails
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-gray-300 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919000240313?text=Hi%2C%20I%20want%20to%20book%20a%20ride%20with%20Tirupati%20Trails"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-body font-semibold text-sm text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ background: "#25D366" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="16"
                height="16"
                role="img"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <GoldButton href="#booking">Book Now</GoldButton>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-white text-2xl p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-3 bg-[oklch(0.09_0_0)]/98">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-2 font-body text-gray-300 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/919000240313?text=Hi%2C%20I%20want%20to%20book%20a%20ride%20with%20Tirupati%20Trails"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body font-semibold text-sm text-white"
                style={{ background: "#25D366" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  width="16"
                  height="16"
                  role="img"
                  aria-label="WhatsApp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <GoldButton
                href="#booking"
                onClick={closeMenu}
                className="w-full"
              >
                Book Now
              </GoldButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,30,100,0.5) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[oklch(0.09_0_0)] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-32">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/uploads/img-20251226-wa0001-019d3cc4-da86-73ad-b833-5f6cde1ce182-1.jpg"
            alt="Tirupati Trails Logo"
            className="w-28 h-28 rounded-full object-cover border-4 shadow-2xl"
            style={{ borderColor: "#c9a227" }}
          />
        </div>

        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
          <span className="text-sm text-gold font-body font-medium tracking-widest uppercase">
            Your Trusted Travel Partner for Tirupati
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Travel with Comfort,
          <br />
          <span className="gold-gradient-text">Faith &amp; Trust</span>
        </h1>

        <p className="font-body text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Book your Tirupati pilgrimage with ease — comfortable vehicles,
          experienced drivers, and seamless darshan guidance.
        </p>

        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-2xl">📞</span>
          <a
            href="tel:+919000240313"
            className="font-body text-xl font-semibold text-gold tracking-wide hover:underline"
          >
            9000240313
          </a>
          <span className="text-gold">|</span>
          <a
            href="tel:+919640091313"
            className="font-body text-xl font-semibold text-gold tracking-wide hover:underline"
          >
            9640091313
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GoldButton href="#booking" large>
            Book Your Ride Now
          </GoldButton>
          <a
            href="https://wa.me/919000240313?text=Hi%2C%20I%20want%20to%20book%20a%20ride%20with%20Tirupati%20Trails"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base text-white transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ background: "#25D366" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="white"
              width="20"
              height="20"
              role="img"
              aria-label="WhatsApp"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
          <GoldButton href="#packages" outline>
            View Packages
          </GoldButton>
        </div>
      </div>
    </section>
  );
}

// ─── Fleet Section ─────────────────────────────────────────────────────────────
function Fleet() {
  const { ref, inView } = useInView();
  return (
    <section
      id="fleet"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${inView ? "in-view" : ""} bg-[oklch(0.13_0_0)] py-20 lg:py-28`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-3 block">
            Our Vehicles
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Premium <span className="gold-gradient-text">Fleet</span>
          </h2>
          <p className="font-body text-gray-400 mt-4 max-w-xl mx-auto">
            Choose from our clean, well-maintained vehicles — all AC,
            GPS-equipped, and driven by experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((car, i) => (
            <div
              key={car.name}
              data-ocid={`fleet.item.${i + 1}`}
              className="glass-card rounded-2xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-gold flex flex-col"
            >
              {/* Car Image */}
              <div className="relative bg-gradient-to-br from-blue-950 to-blue-900 h-52 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a1e64 0%, #1a3a8f 100%)",
                  }}
                />
                <img
                  src={car.image}
                  alt={car.name}
                  className="relative z-10 w-full h-full object-contain p-4 drop-shadow-2xl"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="glass-card rounded-full px-3 py-1 text-xs font-body font-bold text-gold">
                    {car.price}
                  </span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-2xl text-gold mb-1">
                  {car.name}
                </h3>
                <p className="font-body text-sm text-gray-400 mb-4">
                  {car.model}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="text-center glass-card rounded-xl py-3">
                    <span className="block text-lg mb-1">👥</span>
                    <span className="font-body text-xs text-gray-300">
                      {car.capacity}
                    </span>
                  </div>
                  <div className="text-center glass-card rounded-xl py-3">
                    <span className="block text-lg mb-1">❄️</span>
                    <span className="font-body text-xs text-gray-300">
                      {car.ac}
                    </span>
                  </div>
                  <div className="text-center glass-card rounded-xl py-3">
                    <span className="block text-lg mb-1">🧳</span>
                    <span className="font-body text-xs text-gray-300">
                      {car.luggage}
                    </span>
                  </div>
                </div>

                <ul className="space-y-1.5 mb-6 flex-1">
                  {car.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 font-body text-sm text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full gold-gradient shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <GoldButton href="#booking" className="w-full">
                  Book {car.name}
                </GoldButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Packages ──────────────────────────────────────────────────────────────────
function Packages() {
  const { ref, inView } = useInView();
  return (
    <section
      id="packages"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${inView ? "in-view" : ""} bg-[oklch(0.09_0_0)] py-20 lg:py-28`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-3 block">
            Travel Options
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our <span className="gold-gradient-text">Packages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panels.map((panel, i) => (
            <div
              key={panel.id}
              data-ocid={`packages.item.${i + 1}`}
              className="glass-card rounded-2xl overflow-hidden flex flex-col hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
            >
              {/* Temple Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-8">
                  <span className="font-body text-gold text-xs font-semibold tracking-widest uppercase">
                    🛕 PANEL {panel.id}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white leading-tight mt-0.5">
                    {panel.title}
                  </h3>
                </div>
                {panel.badge && (
                  <div className="absolute top-3 right-3 bg-gold/90 text-black text-xs font-bold px-2.5 py-1 rounded-full shadow-lg">
                    {panel.badge}
                  </div>
                )}
              </div>

              {/* Pricing Content */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                {panel.subtitle && (
                  <p className="font-display text-base font-semibold text-gold/90">
                    {panel.subtitle}
                  </p>
                )}

                {/* Simple pricing panels (Panel 1) */}
                {"pricing" in panel &&
                  panel.pricing &&
                  !("subSections" in panel) && (
                    <div className="space-y-2">
                      {(
                        panel.pricing as {
                          type: string;
                          price: string;
                          note?: string;
                        }[]
                      ).map((p) => (
                        <div
                          key={p.type}
                          className="flex justify-between items-center py-1.5 border-b border-white/5 last:border-0"
                        >
                          <span className="font-body text-sm text-gray-300">
                            {p.type}
                          </span>
                          <div className="text-right">
                            <span className="font-body text-sm font-bold text-gold">
                              {p.price}
                            </span>
                            {p.note && (
                              <span className="block font-body text-xs text-gray-500">
                                {p.note}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                {/* Sub-section pricing (Panel 2 & 3) */}
                {"subSections" in panel && panel.subSections && (
                  <div className="space-y-4">
                    {panel.subSections.map((sub) => (
                      <div key={sub.label}>
                        <p className="font-body text-xs font-semibold text-gold/80 uppercase tracking-wide mb-2 border-b border-gold/20 pb-1">
                          {sub.label}
                        </p>
                        <div className="space-y-1.5">
                          {sub.pricing.map((p) => (
                            <div
                              key={p.type}
                              className="flex justify-between items-center"
                            >
                              <span className="font-body text-sm text-gray-300">
                                {p.type}
                              </span>
                              <span className="font-body text-sm font-bold text-gold">
                                {p.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {panel.note && (
                  <div className="rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2">
                    <p className="font-body text-xs text-amber-400">
                      {panel.note}
                    </p>
                  </div>
                )}

                {/* Book Now Button → WhatsApp */}
                <div className="mt-auto pt-2">
                  <a
                    href={`https://wa.me/919000240313?text=${panel.waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-body font-bold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-gold"
                    style={{
                      background:
                        "linear-gradient(135deg, #d4a843, #f0c040, #b8882a)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Book Now on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
function WhyUs() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${inView ? "in-view" : ""} bg-[oklch(0.13_0_0)] py-20 lg:py-28 relative overflow-hidden`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-3 block">
            Our Strengths
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Why <span className="gold-gradient-text">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-ocid={`features.item.${i + 1}`}
              className="glass-card rounded-2xl p-6 text-center hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-display font-bold text-lg text-gold mb-2">
                {f.title}
              </h3>
              <p className="font-body text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Booking Form ──────────────────────────────────────────────────────────────
function BookingForm() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    vehicle: "",
    package: "",
    pickup: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message with booking details
    const msg = `🙏 *New Booking Request - Tirupati Trails*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Travel Date: ${form.date}
🚗 Vehicle: ${form.vehicle}
📦 Package: ${form.package}
📍 Pickup Location: ${form.pickup}
💬 Message: ${form.message || "N/A"}`;

    window.open(
      `https://wa.me/919000240313?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  const inputCls =
    "w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-body text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold/60 focus:bg-white/8 transition-all duration-200";
  const labelCls =
    "block font-body text-xs text-gray-400 uppercase tracking-wider mb-1.5";

  return (
    <section
      id="booking"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${inView ? "in-view" : ""} bg-[oklch(0.09_0_0)] py-20 lg:py-28 relative overflow-hidden`}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #1a3a8f, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a227, transparent)" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-3 block">
            Reserve Your Seat
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Book Your <span className="gold-gradient-text">Ride</span>
          </h2>
          <p className="font-body text-gray-400 mt-4">
            Fill in the details and we'll confirm your booking via WhatsApp
            instantly.
          </p>
        </div>

        {submitted ? (
          <div className="glass-card rounded-2xl p-12 text-center border-gold/40">
            <div className="text-6xl mb-6">🙏</div>
            <h3 className="font-display text-2xl font-bold text-gold mb-3">
              Booking Request Sent!
            </h3>
            <p className="font-body text-gray-300 mb-6">
              Your request has been sent via WhatsApp. We'll confirm your
              booking shortly.
            </p>
            <GoldButton onClick={() => setSubmitted(false)}>
              Book Another Ride
            </GoldButton>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-8 border-gold/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="book-name" className={labelCls}>
                  Full Name *
                </label>
                <input
                  id="book-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="book-phone" className={labelCls}>
                  Phone Number *
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="Your mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="book-date" className={labelCls}>
                  Travel Date *
                </label>
                <input
                  id="book-date"
                  type="date"
                  name="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </div>
              <div>
                <label htmlFor="book-vehicle" className={labelCls}>
                  Vehicle Type *
                </label>
                <select
                  id="book-vehicle"
                  name="vehicle"
                  required
                  value={form.vehicle}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="" disabled>
                    Select vehicle
                  </option>
                  <option value="Sedan">Sedan (4 Passengers)</option>
                  <option value="Ertiga">Ertiga (6 Passengers)</option>
                  <option value="Innova">Innova Crysta (7 Passengers)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="book-package" className={labelCls}>
                  Package *
                </label>
                <select
                  id="book-package"
                  name="package"
                  required
                  value={form.package}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="" disabled>
                    Select package
                  </option>
                  <option value="Tirumala Darshan">Tirumala Darshan</option>
                  <option value="Local Temple Tour">Local Temple Tour</option>
                  <option value="Tirupati + Sri Kalahasti">
                    Tirupati + Sri Kalahasti
                  </option>
                  <option value="Full Day Spiritual Tour">
                    Full Day Spiritual Tour
                  </option>
                  <option value="Custom Package">Custom Package</option>
                </select>
              </div>
              <div>
                <label htmlFor="book-pickup" className={labelCls}>
                  Pickup Location *
                </label>
                <input
                  id="book-pickup"
                  type="text"
                  name="pickup"
                  required
                  placeholder="Hotel / Address"
                  value={form.pickup}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>

            <div className="mb-7">
              <label htmlFor="book-message" className={labelCls}>
                Additional Message
              </label>
              <textarea
                id="book-message"
                name="message"
                rows={3}
                placeholder="Any special requirements or requests..."
                value={form.message}
                onChange={handleChange}
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-body font-bold text-base text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="22"
                height="22"
                role="img"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Booking via WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Digital Partner Section ───────────────────────────────────────────────────
function DigitalPartner() {
  const { ref, inView } = useInView();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${inView ? "in-view" : ""} bg-[oklch(0.13_0_0)] py-20 lg:py-24`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-3 block">
            Powered By
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Our <span className="gold-gradient-text">Digital Partner</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 border-gold/30 flex flex-col md:flex-row items-center gap-8 hover:border-gold/60 transition-all duration-300">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src="/assets/uploads/img-20260303-wa0001-019d3cc4-dbf1-7208-945b-d194fb79efff-2.jpg"
                alt="Castle Crew Creations Logo"
                className="w-40 h-40 rounded-2xl object-cover shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display font-bold text-2xl text-gold mb-2">
                Castle Crew Creations
              </h3>
              <p className="font-body text-gray-300 text-base mb-5 leading-relaxed">
                Castle Crew Creations is our trusted digital partner, helping
                businesses grow online through cutting-edge technology and
                creative excellence. They specialize in Website Designing, AI
                Advertising, Branding, and more.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {[
                  "Website Designing",
                  "AI Advertising",
                  "Branding",
                  "Digital Marketing",
                ].map((s) => (
                  <span
                    key={s}
                    className="glass-card rounded-full px-4 py-1.5 text-xs font-body font-semibold text-gold border border-gold/30"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="tel:+919032159340"
                  className="flex items-center gap-2 glass-card rounded-xl px-4 py-3 hover:border-gold/40 transition-colors group"
                >
                  <span className="text-lg">📞</span>
                  <div>
                    <p className="font-body text-xs text-gray-500 uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="font-body text-sm text-white group-hover:text-gold transition-colors">
                      9032159340
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:castlecrewcreations@gmail.com"
                  className="flex items-center gap-2 glass-card rounded-xl px-4 py-3 hover:border-gold/40 transition-colors group"
                >
                  <span className="text-lg">✉️</span>
                  <div>
                    <p className="font-body text-xs text-gray-500 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="font-body text-xs text-white group-hover:text-gold transition-colors break-all">
                      castlecrewcreations@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.castlecrewcreations.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass-card rounded-xl px-4 py-3 hover:border-gold/40 transition-colors group"
                >
                  <span className="text-lg">🌐</span>
                  <div>
                    <p className="font-body text-xs text-gray-500 uppercase tracking-wider">
                      Website
                    </p>
                    <p className="font-body text-xs text-white group-hover:text-gold transition-colors">
                      castlecrewcreations.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────────
function Contact() {
  const { ref, inView } = useInView();
  const contactDetails = [
    {
      icon: "📞",
      label: "Phone",
      value: "9000240313 / 9640091313",
      href: "tel:+919000240313",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "tirupatitrails@gmail.com",
      href: "mailto:tirupatitrails@gmail.com",
    },
    {
      icon: "🌐",
      label: "Website",
      value: "www.tirupatitrails.com",
      href: "https://www.tirupatitrails.com",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Tirupati, Andhra Pradesh",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-fade ${inView ? "in-view" : ""} bg-[oklch(0.09_0_0)] py-20 lg:py-28`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold font-body text-sm font-medium tracking-widest uppercase mb-3 block">
            Reach Out
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Get In <span className="gold-gradient-text">Touch</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {contactDetails.map((d, i) => (
              <div
                key={d.label}
                data-ocid={`contact.item.${i + 1}`}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <span className="text-2xl shrink-0">{d.icon}</span>
                <div>
                  <p className="font-body text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="font-body text-base text-white hover:text-gold transition-colors"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-body text-base text-white">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="flex justify-center mb-8">
            <a
              href="https://wa.me/919000240313?text=Hi%2C%20I%20want%20to%20book%20a%20ride%20with%20Tirupati%20Trails"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full font-body font-bold text-base text-white transition-all duration-300 hover:scale-105 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="white"
                width="22"
                height="22"
                role="img"
                aria-label="WhatsApp"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat with Us on WhatsApp
            </a>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="glass-card rounded-2xl p-8 text-center border-gold/40 max-w-xs">
              <div className="border-2 border-gold/50 rounded-xl p-3 inline-block mb-4">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.tirupatitrails.com"
                  alt="QR Code for Tirupati Trails"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="font-body text-sm text-gold font-medium tracking-wide">
                Scan to Book Instantly
              </p>
              <p className="font-body text-xs text-gray-500 mt-1">
                www.tirupatitrails.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[oklch(0.07_0_0)] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/uploads/img-20251226-wa0001-019d3cc4-da86-73ad-b833-5f6cde1ce182-1.jpg"
                alt="Tirupati Trails"
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/60"
              />
              <span className="font-display font-bold text-xl gold-gradient-text">
                Tirupati Trails
              </span>
            </div>
            <p className="font-body text-sm text-gray-500 italic">
              Divine Journey. Seamless Experience.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-gold text-sm uppercase tracking-wider mb-3">
              Contact Us
            </h4>
            <div className="space-y-2">
              <a
                href="tel:+919000240313"
                className="flex items-center gap-2 font-body text-sm text-gray-400 hover:text-gold transition-colors"
              >
                📞 9000240313 / 9640091313
              </a>
              <a
                href="mailto:tirupatitrails@gmail.com"
                className="flex items-center gap-2 font-body text-sm text-gray-400 hover:text-gold transition-colors"
              >
                ✉️ tirupatitrails@gmail.com
              </a>
              <a
                href="https://www.tirupatitrails.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-gray-400 hover:text-gold transition-colors"
              >
                🌐 www.tirupatitrails.com
              </a>
              <a
                href="https://wa.me/919000240313"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-gray-400 hover:text-gold transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  width="14"
                  height="14"
                  role="img"
                  aria-label="WhatsApp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Digital Partner */}
          <div>
            <h4 className="font-body font-semibold text-gold text-sm uppercase tracking-wider mb-3">
              Digital Partner
            </h4>
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/uploads/img-20260303-wa0001-019d3cc4-dbf1-7208-945b-d194fb79efff-2.jpg"
                alt="Castle Crew Creations"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-body text-sm font-semibold text-white">
                Castle Crew Creations
              </span>
            </div>
            <div className="space-y-1.5">
              <a
                href="tel:+919032159340"
                className="flex items-center gap-2 font-body text-xs text-gray-400 hover:text-gold transition-colors"
              >
                📞 9032159340
              </a>
              <a
                href="mailto:castlecrewcreations@gmail.com"
                className="flex items-center gap-2 font-body text-xs text-gray-400 hover:text-gold transition-colors"
              >
                ✉️ castlecrewcreations@gmail.com
              </a>
              <a
                href="https://www.castlecrewcreations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs text-gray-400 hover:text-gold transition-colors"
              >
                🌐 castlecrewcreations.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-500">
            © {year} Tirupati Trails. All rights reserved.
          </p>
          <p className="font-body text-xs text-gray-500 text-center">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.castlecrewcreations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-semibold"
            >
              Castle Crew Creations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[oklch(0.09_0_0)]">
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Packages />
        <WhyUs />
        <BookingForm />
        <DigitalPartner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
