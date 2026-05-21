import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";

export const Route = createFileRoute("/showcase")({
  component: ShowcasePage,
  head: () => ({
    meta: [
      { title: "SoftskySolution | Premium Service Slider" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0, user-scalable=yes" },
    ],
    links: [
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;800&display=swap" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" },
    ],
  }),
});

const slidesData = [
  { 
      category: "⚡ SYSTEM DEVELOPMENT", 
      title: "AI & Smart Automation", 
      desc: "AI Chatbots, Attendance, Booking, Appointment & Staff Management to streamline operations.",
      tags: ["AI Chatbot Systems", "Attendance Mgmt", "Booking Systems", "Staff Mgmt"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format",
      welcome: "✨ Welcome to Smarter Business Operations"
  },
  { 
      category: "📦 INVENTORY & PROCUREMENT", 
      title: "Inventory & Procurement Systems", 
      desc: "Real-time stock tracking, procurement lifecycles, document management & reporting.",
      tags: ["Inventory Mgmt", "Procurement", "Doc Mgmt", "Feedback Reports"],
      bg: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&auto=format",
      welcome: "📊 Gain Total Control Over Your Supply Chain"
  },
  { 
      category: "💰 FINANCE & ACCOUNTING", 
      title: "Finance, SACCO & Loan Systems", 
      desc: "Complete accounting, Sacco management, loan tracking, cooperative & rental systems.",
      tags: ["Finance & Accounting", "Sacco Mgmt", "Loan Mgmt", "Cooperative Mgmt"],
      bg: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&auto=format",
      welcome: "💡 Smart Finance, Zero Errors – Let's Grow Together"
  },
  { 
      category: "🏥 HEALTH & HOSPITAL", 
      title: "Hospital & Clinic Solutions", 
      desc: "Patient records, hospital management, appointment scheduling & staff coordination.",
      tags: ["Hospital Systems", "Clinic Mgmt", "Appointment Scheduling", "E-Health"],
      bg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format",
      welcome: "🩺 Elevate Patient Care with Digital Excellence"
  },
  { 
      category: "⛪ CHURCH & FAITH", 
      title: "Church Management Systems", 
      desc: "Member registration, event planning, donation tracking and online portals for churches.",
      tags: ["Church Mgmt", "Member Registration", "Event Mgmt", "Online Voting"],
      bg: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&auto=format",
      welcome: "🙏 Empowering Ministries with Modern Tools"
  },
  { 
      category: "🏫 EDUCATION & E-LEARNING", 
      title: "School & E-Learning Portals", 
      desc: "Comprehensive school, student portal, exam, result, hostel and e-learning systems.",
      tags: ["E-learning", "Exam Mgmt", "Result Mgmt", "Hostel Mgmt", "School Mgmt"],
      bg: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format",
      welcome: "📚 Shape Future Leaders – Digitize Your Institution"
  },
  { 
      category: "🏨 HOSPITALITY & HOTEL", 
      title: "Hotel & Rental Management", 
      desc: "Booking engines, hotel PMS, rental property systems, transport management.",
      tags: ["Hotel Mgmt", "Rental Mgmt", "Transport Mgmt", "Booking Reservation"],
      bg: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&auto=format",
      welcome: "🏆 Unleash 5-Star Guest Experiences"
  },
  { 
      category: "👥 CRM & BUSINESS AUTO", 
      title: "CRM & Business Automation", 
      desc: "Customer relationship, asset management, multi-user dashboards, cloud systems.",
      tags: ["CRM Systems", "Asset Mgmt", "Business Automation", "Cloud Systems"],
      bg: "https://images.unsplash.com/photo-1552581234-26160f608093?w=1600&auto=format",
      welcome: "🤝 Turn Leads into Loyalty – Automate & Conquer"
  },
  { 
      category: "👨‍💼 PAYROLL & HR", 
      title: "Payroll & Staff Systems", 
      desc: "Payroll management, staff performance, leave tracking & HR dashboards.",
      tags: ["Payroll Systems", "Staff Mgmt", "HR automation", "Multi-user Dashboard"],
      bg: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&auto=format",
      welcome: "⭐ Empower Your Workforce, Simplify Payroll"
  },
  { 
      category: "🌾 AGRICULTURE & COUNTY", 
      title: "Farm & County Portals", 
      desc: "Agriculture management, farm analytics, county service portals & data collection.",
      tags: ["Agriculture/Farm Mgmt", "County Portals", "Data Collection", "IoT-ready"],
      bg: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1600&auto=format",
      welcome: "🌱 Grow Smarter with Agri-Tech & Public Portals"
  },
  { 
      category: "📱 WEBSITE DEVELOPMENT", 
      title: "Modern Business & E-commerce Websites", 
      desc: "Company sites, e-commerce, school websites, real estate, portfolio & custom web apps.",
      tags: ["Company Websites", "E-commerce", "School Websites", "Real Estate", "Landing Pages"],
      bg: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&auto=format",
      welcome: "🌍 Your Digital Presence, Perfected"
  },
  { 
      category: "🛍️ ONLINE STORE & CMS", 
      title: "Online Store & Custom Web Apps", 
      desc: "Mobile-friendly stores, website redesign, hosting, security & maintenance.",
      tags: ["Online Store Dev", "Web Redesign", "Hosting", "Maintenance", "Security"],
      bg: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&auto=format",
      welcome: "🛒 Sell More, Worry Less – E-commerce Unleashed"
  },
  { 
      category: "🎨 GRAPHICS & BRANDING", 
      title: "Creative Digital Branding", 
      desc: "Logo, poster, flyer, social media designs, motion graphics & animated ads.",
      tags: ["Logo Design", "Flyer/Poster", "Motion Graphics", "Social Media Posters"],
      bg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1600&auto=format",
      welcome: "🎯 Make Heads Turn – Creative That Converts"
  },
  { 
      category: "🧾 POS & RETAIL", 
      title: "Point of Sale Systems", 
      desc: "Retail POS, inventory sync, sales analytics & receipt management.",
      tags: ["POS Systems", "Sales Dashboard", "Retail Inventory", "Multi-branch"],
      bg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&auto=format",
      welcome: "💸 Accelerate Sales, Streamline Checkout"
  },
  { 
      category: "🗳️ VOTING & CONFERENCE", 
      title: "Online Voting & Event Systems", 
      desc: "Secure online voting, conference scheduling, event registration & management.",
      tags: ["Online Voting", "Event Mgmt", "Conference Tools", "Registration Systems"],
      bg: "https://images.unsplash.com/photo-1523580495863-d6dcdd28181f?w=1600&auto=format",
      welcome: "🗳️ Democracy Redefined – Secure & Transparent"
  },
  { 
      category: "📊 DATA & API INTEGRATION", 
      title: "Database & API Services", 
      desc: "Database design, API integrations, system maintenance & upgrades.",
      tags: ["Database Design", "API Integration", "System Maintenance", "Upgrades"],
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&auto=format",
      welcome: "🔗 Seamless Integration, Infinite Possibilities"
  },
  { 
      category: "🏢 REAL ESTATE & PROPERTY", 
      title: "Real Estate & Rental Systems", 
      desc: "Property listings, tenant management, rental tracking and lease agreements.",
      tags: ["Real Estate Websites", "Rental Mgmt", "Lease Tracking", "Tenant Portal"],
      bg: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format",
      welcome: "🏡 Unlock Real Estate Potential – Digital Solutions"
  },
  { 
      category: "📈 BUSINESS DASHBOARD", 
      title: "Multi-User Dashboards & Analytics", 
      desc: "Role-based dashboards, KPI tracking, business intelligence tools.",
      tags: ["Multi-user Dashboard", "Analytics", "Cloud-based", "Reporting Systems"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format",
      welcome: "📊 Data-Driven Decisions – Real-Time Insights"
  },
  { 
      category: "✝️ CHURCH & SACCO WEBSITES", 
      title: "Niche Institutional Websites", 
      desc: "Sacco websites, church portals, NGO platforms, event and ministry sites.",
      tags: ["Sacco Websites", "Church Websites", "NGO Websites", "Personal Branding"],
      bg: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&auto=format",
      welcome: "🌟 Digital Homes for Faith & Finance"
  },
  { 
      category: "🔧 SYSTEM MAINTENANCE", 
      title: "Maintenance, Security & Upgrades", 
      desc: "24/7 monitoring, system upgrades, security patches & performance tuning.",
      tags: ["System Maintenance", "Security", "Performance", "Cloud Deployment"],
      bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format",
      welcome: "🛡️ Always Secure, Always Reliable"
  }
];

function ShowcasePage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalSlides = slidesData.length;

  // Touch & Swipe states
  const touchStartX = useRef(0);
  const mouseDownX = useRef(0);

  // Auto-sliding effect
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused, totalSlides]);

  function handleConnectClick(serviceTitle: string) {
    navigate({
      to: "/contact",
      search: { service: serviceTitle }
    });
  }

  function handleReachUsClick(serviceTitle: string) {
    navigate({
      to: "/contact",
      search: { service: serviceTitle }
    });
  }

  // Swipe / Drag Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
    setPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      } else {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }
    }
    setPaused(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownX.current = e.clientX;
    setPaused(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseDownX.current === 0) return;
    const diff = e.clientX - mouseDownX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      } else {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }
    }
    mouseDownX.current = 0;
    setPaused(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0a0c10]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        /* HEADER */
        .site-header {
            background: white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 20;
        }
        .header-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }
        .logo-area h1 {
            font-size: 1.7rem;
            font-weight: 700;
            letter-spacing: -0.3px;
            background: linear-gradient(135deg, #1e2b3c, #2c5a6e);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        .logo-area p {
            font-size: 0.8rem;
            color: #2c5a6e;
            font-weight: 500;
        }
        .founder-badge {
            background: #eef2ff;
            padding: 0.4rem 1rem;
            border-radius: 40px;
            font-size: 0.85rem;
            font-weight: 500;
            color: #1e4a6b;
        }
        .founder-badge span {
            font-weight: 700;
        }

        /* FULL-WIDTH SLIDER */
        .services-slider-section {
            background: #ffffff;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
        }
        .carousel-container {
            position: relative;
            width: 100%;
            overflow: hidden;
            background: #000;
            box-shadow: 0 10px 25px -8px rgba(0,0,0,0.1);
        }
        .carousel-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
            will-change: transform;
        }
        .carousel-slide {
            flex: 0 0 100%;
            min-height: 580px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            position: relative;
            display: flex;
            align-items: flex-end;
        }
        /* Overlay for readability */
        .carousel-slide::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.2) 100%);
            pointer-events: none;
        }
        .slide-content {
            position: relative;
            z-index: 2;
            padding: 2.5rem 3rem;
            color: white;
            max-width: 780px;
            width: 100%;
            text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        .welcome-text {
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 1px;
            color: #ffdd88;
            margin-bottom: 0.5rem;
            display: inline-block;
            background: rgba(0,0,0,0.5);
            padding: 0.2rem 1rem;
            border-radius: 40px;
            backdrop-filter: blur(4px);
        }
        .slide-category {
            font-size: 0.85rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            background: rgba(255,255,255,0.2);
            display: inline-block;
            padding: 0.3rem 1rem;
            border-radius: 40px;
            backdrop-filter: blur(5px);
            margin-bottom: 0.75rem;
            font-weight: 600;
        }
        .slide-title {
            font-size: 2.3rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 0.5rem;
        }
        .slide-description {
            font-size: 1rem;
            opacity: 0.95;
            margin-bottom: 1.25rem;
            max-width: 90%;
        }
        .service-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin-top: 0.5rem;
            margin-bottom: 1.5rem;
        }
        .service-tag {
            background: rgba(255,255,255,0.2);
            backdrop-filter: blur(4px);
            padding: 0.25rem 0.85rem;
            border-radius: 30px;
            font-size: 0.7rem;
            font-weight: 500;
        }
        
        /* BETTER ICON BUTTONS (Font Awesome) */
        .cta-button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 0.5rem;
        }
        .btn-connect {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: #2c5a6e;
            color: white;
            padding: 0.75rem 1.8rem;
            border-radius: 60px;
            font-weight: 600;
            font-size: 0.9rem;
            text-decoration: none;
            transition: all 0.25s ease;
            border: none;
            cursor: pointer;
            box-shadow: 0 6px 14px rgba(0,0,0,0.25);
            letter-spacing: 0.3px;
        }
        .btn-connect:hover {
            background: #1e3f4e;
            transform: translateY(-2px);
            box-shadow: 0 12px 22px rgba(0,0,0,0.3);
        }
        .btn-outline {
            background: transparent;
            border: 2px solid rgba(255,255,255,0.9);
            backdrop-filter: blur(4px);
            box-shadow: none;
        }
        .btn-outline:hover {
            background: rgba(255,255,255,0.2);
            border-color: white;
            transform: translateY(-2px);
        }
        
        .dots-container {
            display: flex;
            justify-content: center;
            gap: 14px;
            margin-top: 1.8rem;
            margin-bottom: 1rem;
        }
        .dot {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .dot.active {
            width: 28px;
            background: #2c5a6e;
        }
        .about-founder {
            background: white;
            padding: 2rem 1.5rem;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }
        .footer-note {
            max-width: 800px;
            margin: 0 auto;
            font-size: 0.9rem;
            color: #334155;
        }

        @media (max-width: 700px) {
            .carousel-slide { min-height: 540px; }
            .slide-title { font-size: 1.7rem; }
            .slide-content { padding: 1.5rem; }
            .btn-connect { padding: 0.5rem 1.2rem; font-size: 0.8rem; }
            .slide-description { max-width: 100%; }
        }
        @media (max-width: 480px) {
            .carousel-slide { min-height: 580px; }
            .slide-title { font-size: 1.5rem; }
        }
      ` }} />

      <header className="site-header">
        <div className="header-container">
          <div className="logo-area">
            <h1>SoftskySolution</h1>
            <p>Precision • Automation • Innovation</p>
          </div>
          <div className="founder-badge">
            ⚡ Founded by <span>Caleb Mumo Kisangau</span>
          </div>
        </div>
      </header>

      <section className="services-slider-section">
        <div 
          className="carousel-container"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slidesData.map((slide, idx) => (
              <div 
                key={idx}
                className="carousel-slide"
                style={{ 
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('${slide.bg}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 30%'
                }}
              >
                <div className="slide-content">
                  <div className="welcome-text">{slide.welcome}</div>
                  <div className="slide-category">{slide.category}</div>
                  <div className="slide-title">{slide.title}</div>
                  <div className="slide-description">{slide.desc}</div>
                  <div className="service-tags">
                    {slide.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="service-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="cta-button-group">
                    <button 
                      className="btn-connect" 
                      onClick={() => handleConnectClick(slide.title)}
                    >
                      <i className="fas fa-paper-plane"></i> Connect with Us
                    </button>
                    <button 
                      className="btn-connect btn-outline" 
                      onClick={() => handleReachUsClick(slide.title)}
                    >
                      <i className="fas fa-headset"></i> Reach Us / Get Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dots-container">
          {slidesData.map((_, idx) => (
            <div 
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => {
                setPaused(true);
                setCurrentIndex(idx);
                setTimeout(() => setPaused(false), 2000);
              }}
            />
          ))}
        </div>
      </section>

      <div className="about-founder">
        <div className="footer-note">
          <strong>SoftskySolution</strong>, founded by Caleb Mumo Kisangau, delivers enterprise-grade software, web ecosystems, and creative branding. 
          Trusted automation partner for businesses, SACCOs, hospitals, schools and government portals across Kenya. 
          📍 Nairobi • Let's build the future together.
        </div>
      </div>
    </div>
  );
}
