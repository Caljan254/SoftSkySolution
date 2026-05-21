import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "IT Skills Training | Learn to Build & Design | SoftSkySolution" },
      {
        name: "description",
        content:
          "Hands-on online training programs to master system development, websites, and graphic design. Flexible schedule, 50/50 payment plan. Enroll today with SoftSkySolution.",
      },
    ],
  }),
  component: Training,
});

const systemPrograms = [
  {
    icon: "🏢",
    title: "Business Systems Development",
    duration: "8 Weeks",
    level: "Beginner → Advanced",
    shortDesc: "Master building management systems used in real companies.",
    fullDesc:
      "A comprehensive program covering the full lifecycle of business software. You will build multi-user staff portals, inventory trackers, CRM platforms and procurement systems. Projects use real-world databases and modern backend stacks.",
    skills: [
      "Staff & Inventory Management Systems",
      "CRM & Business Automation",
      "Procurement & Document Management",
      "Multi-user Dashboard Systems",
    ],
    projects: ["Staff Portal", "Inventory Tracker", "CRM System"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "💰",
    title: "Finance & Accounting Systems",
    duration: "6 Weeks",
    level: "Intermediate",
    shortDesc: "Build financial software for SACCOs, cooperatives, and businesses.",
    fullDesc:
      "Learn to develop fully functional financial platforms including payroll processing, loan management, cooperative accounting, and point-of-sale systems. You will gain hands-on experience integrating M-Pesa and generating professional financial reports.",
    skills: [
      "Payroll & Loan Management Systems",
      "Sacco & Cooperative Management",
      "POS & Accounting Systems",
    ],
    projects: ["Payroll System", "Sacco Portal", "POS Software"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🏥",
    title: "Healthcare & Hospitality Systems",
    duration: "6 Weeks",
    level: "Intermediate",
    shortDesc: "Create systems for hospitals, hotels, and rental properties.",
    fullDesc:
      "Design and build complete healthcare and hospitality management platforms. This includes clinic patient records, doctor scheduling, hotel room booking engines, and rental management dashboards , all with professional UI and database design.",
    skills: [
      "Hospital & Clinic Management Systems",
      "Hotel & Rental Management",
      "Booking & Appointment Scheduling",
    ],
    projects: ["Clinic Manager", "Hotel Booking System", "Appointment Scheduler"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🎓",
    title: "Education Systems Development",
    duration: "7 Weeks",
    level: "Beginner → Advanced",
    shortDesc: "Build school management and e-learning platforms.",
    fullDesc:
      "An intensive program covering everything from student admission portals to full e-learning platforms with exams, results, and parent portals. You will also build hostel management and fee collection systems used in real schools.",
    skills: [
      "School Management & Student Portals",
      "E-learning & Examination Systems",
      "Result & Hostel Management",
    ],
    projects: ["School Portal", "Exam System", "Hostel Manager"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🤖",
    title: "AI & Smart Systems",
    duration: "5 Weeks",
    level: "Intermediate",
    shortDesc: "Learn to build intelligent systems and chatbots.",
    fullDesc:
      "Explore the world of AI-powered software development. Build custom chatbots, automated attendance systems, digital voting platforms and learn to integrate third-party APIs and design efficient databases for intelligent applications.",
    skills: [
      "AI Chatbot Systems Development",
      "Attendance & Voting Systems",
      "API Integration & Database Design",
    ],
    projects: ["AI Chatbot", "Voting System", "API Integrator"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🏛️",
    title: "Specialized & Public Systems",
    duration: "6 Weeks",
    level: "Intermediate",
    shortDesc: "Build systems for counties, agriculture, and transport.",
    fullDesc:
      "Learn to develop specialized platforms for the public sector including county service portals, farm management systems, transport logistics dashboards, church administration platforms, and community feedback engines.",
    skills: [
      "County Service Portals",
      "Agriculture & Transport Management",
      "Church & Feedback Systems",
    ],
    projects: ["County Portal", "Farm Manager", "Church System"],
    projectLabel: "Sample Projects You'll Build",
  },
];

const webPrograms = [
  {
    icon: "🌐",
    title: "Business & Corporate Websites",
    duration: "5 Weeks",
    level: "Beginner → Advanced",
    shortDesc: "Build professional websites for companies and organizations.",
    fullDesc:
      "Learn to design and develop stunning, modern corporate websites for companies, schools, churches, SACCOs, NGOs and real estate agencies. You will cover responsive design, SEO, contact forms, and professional content layouts.",
    skills: [
      "Company & Business Websites",
      "School & Church Websites",
      "Sacco & NGO Websites",
      "Real Estate Websites",
    ],
    projects: ["Company Site", "School Website", "Real Estate Site"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🛒",
    title: "E-commerce & Online Stores",
    duration: "6 Weeks",
    level: "Intermediate",
    shortDesc: "Learn to build fully functional online stores.",
    fullDesc:
      "Build complete e-commerce solutions with product catalogues, shopping carts, M-Pesa payment integration, order management, and admin dashboards. You will also build hotel booking websites and custom web applications.",
    skills: [
      "E-commerce Websites",
      "Online Store Development",
      "Hotel Booking Websites",
      "Custom Web Applications",
    ],
    projects: ["Online Store", "Booking Site", "Web App"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "👤",
    title: "Portfolio & Personal Branding",
    duration: "4 Weeks",
    level: "Beginner",
    shortDesc: "Build your own brand and portfolio websites.",
    fullDesc:
      "Create elegant portfolio websites, personal brand pages, event landing pages, and news/blog platforms. Perfect for graduates, freelancers, creatives and professionals who want a strong digital presence.",
    skills: [
      "Portfolio & Personal Branding",
      "Landing Pages & Event Websites",
      "News & Blog Websites",
    ],
    projects: ["Portfolio Site", "Landing Page", "Blog Website"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🔧",
    title: "Technical & Backend Skills",
    duration: "4 Weeks",
    level: "Intermediate → Advanced",
    shortDesc: "Master the technical side of website development.",
    fullDesc:
      "Deep dive into the technical backbone of websites: responsive mobile-first design, website redesigns, domain and hosting setup, security best practices, SSL, performance optimization, and deployment workflows.",
    skills: [
      "Responsive Mobile-Friendly Design",
      "Website Redesign & Hosting",
      "Website Deployment & Security",
    ],
    projects: ["Mobile Site", "Hosting Setup", "Secure Site"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "📱",
    title: "Progressive Web Apps (PWA)",
    duration: "5 Weeks",
    level: "Intermediate",
    shortDesc: "Build web apps that work like native mobile apps.",
    fullDesc:
      "Learn to create Progressive Web Applications that install on phones, work offline, and deliver native-like experiences. You will master service workers, push notifications, offline caching, and app-shell architecture using modern frameworks.",
    skills: [
      "PWA Architecture & Service Workers",
      "Offline Caching & Sync",
      "Push Notifications",
      "App Installation & Manifest",
    ],
    projects: ["Offline App", "PWA Store", "Push Notification App"],
    projectLabel: "Sample Projects You'll Build",
  },
  {
    icon: "🔗",
    title: "API Development & Integration",
    duration: "5 Weeks",
    level: "Intermediate → Advanced",
    shortDesc: "Build and connect powerful web APIs for any project.",
    fullDesc:
      "Master building RESTful APIs, connecting third-party services, and creating data-driven web applications. You will integrate M-Pesa, SMS gateways, social login, maps, and custom backend APIs into real web projects.",
    skills: [
      "RESTful API Development",
      "M-Pesa & Payment API Integration",
      "Third-Party Service Connections",
      "Authentication & Authorization",
    ],
    projects: ["Payment API", "Social Login App", "Data Dashboard"],
    projectLabel: "Sample Projects You'll Build",
  },
];

const graphicsPrograms = [
  {
    icon: "🖨️",
    title: "Print Design Mastery",
    duration: "4 Weeks",
    level: "Beginner",
    shortDesc: "Design professional print materials for any business.",
    fullDesc:
      "Master the art of print design from scratch. Create stunning event posters, business flyers, large-format banners, professional business cards, and creative invitation cards. You will also design social media graphics ready for digital publication.",
    skills: [
      "Poster, Flyer & Banner Design",
      "Business Card Design",
      "Invitation Card Design",
      "Social Media Posters",
    ],
    projects: ["Event Flyer", "Business Card", "Social Media Post"],
    projectLabel: "Sample Projects You'll Design",
  },
  {
    icon: "✨",
    title: "Brand Identity Design",
    duration: "3 Weeks",
    level: "Beginner → Intermediate",
    shortDesc: "Learn to create unforgettable brand identities.",
    fullDesc:
      "Build complete brand identities from the ground up. Learn logo design fundamentals, colour theory, typography pairing, and brand guidelines creation. You will leave this program with a full professional portfolio of brand identity work.",
    skills: [
      "Logo Design Fundamentals",
      "Complete Brand Identity",
      "Color Theory & Typography",
      "Brand Guidelines Creation",
    ],
    projects: ["Logo Design", "Brand Guide", "Color Palette"],
    projectLabel: "Sample Projects You'll Design",
  },
  {
    icon: "🎬",
    title: "Motion Graphics & Animation",
    duration: "5 Weeks",
    level: "Intermediate",
    shortDesc: "Bring your designs to life with animation.",
    fullDesc:
      "Take your design skills to the next level by adding motion. Create animated adverts, social media video content, motion graphics for YouTube, and learn basic video editing. In-demand skills for digital marketing agencies.",
    skills: [
      "Motion Graphics Design",
      "Animated Advertisements",
      "Social Media Animations",
      "Video Editing Basics",
    ],
    projects: ["Animated Ad", "Motion Graphic", "Social Animation"],
    projectLabel: "Sample Projects You'll Create",
  },
];

function EnrollModal({
  programTitle,
  isOpen,
  onClose,
}: {
  programTitle: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "⚙️ System Development Training",
    trainingTime: "Morning (8am, 12pm)",
    interests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const subject = `Training Enrollment Request: ${programTitle}`;
    const body = `
📋 New Training Enrollment Request

👤 Full Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
📚 Selected Program: ${programTitle}
📚 Training Category: ${formData.category}
🕐 Preferred Time: ${formData.trainingTime}
💡 Interests/Skills: ${formData.interests}
    `.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: subject,
          from_name: formData.fullName,
          replyto: formData.email,
          email: "softskysolution@gmail.com",
          message: body,
        }),
      });

      const result = await response.json();
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          category: "⚙️ System Development Training",
          trainingTime: "Morning (8am, 12pm)",
          interests: "",
        });
      } else {
        setError(result.message || "Failed to send message. Make sure to add your Web3Forms Access Key in the code.");
      }
    } catch (err) {
      setError("An error occurred while sending. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "white",
          borderRadius: "24px",
          maxWidth: "550px",
          width: "90%",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "30px",
          boxShadow: "0 25px 40px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            float: "right",
            background: "none",
            border: "none",
            fontSize: "1.8rem",
            cursor: "pointer",
            color: "#64748b",
          }}
        >
          &times;
        </button>

        {isSuccess ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ fontSize: "4rem", marginBottom: "10px" }}>🎉</div>
            <h3 style={{ color: "#10b981", fontSize: "1.5rem", marginBottom: "10px" }}>
              Congratulations!
            </h3>
            <p style={{ color: "#475569", fontSize: "1.1rem", lineHeight: 1.6 }}>
              Message sent successfully.<br />
              Please wait for feedback from our staff. We will reach out to you shortly.
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              style={{
                marginTop: "30px",
                padding: "10px 24px",
                background: "#1e3a5f",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <>
            <h3 style={{ marginTop: 0, color: "#1e3a5f", fontSize: "1.5rem" }}>
              📋 Enroll in a Training Program
            </h3>
            <p style={{ color: "#475569", marginBottom: "20px", fontSize: "0.95rem" }}>
              Fill in your details below. Your request will be sent directly to our admissions team.
            </p>

            {error && (
              <div style={{ padding: "12px", background: "#fee2e2", color: "#b91c1c", borderRadius: "8px", marginBottom: "20px", fontSize: "0.9rem" }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                👤 Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              />

              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                📧 Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              />

              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                📱  Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 ..."
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              />

              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                📚 Select Training Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              >
                <option>⚙️ System Development Training</option>
                <option>🌐 Website Development Training</option>
                <option>🎨 Graphics & Branding Training</option>
              </select>

              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                🕐 Your Preferred Training Time *
              </label>
              <select
                name="trainingTime"
                value={formData.trainingTime}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              >
                <option>Morning (8am, 12pm)</option>
                <option>Afternoon (1pm, 5pm)</option>
                <option>Evening (6pm, 9pm)</option>
                <option>Weekends (Sat/Sun)</option>
                <option>Flexible / Custom</option>
              </select>

              <label
                style={{
                  display: "block",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  color: "#334155",
                }}
              >
                💡 Tell us what you want to learn
              </label>
              <textarea
                name="interests"
                rows={3}
                value={formData.interests}
                onChange={handleChange}
                placeholder="Which specific skills are you interested in? (e.g., E-commerce, Logo Design, School Management Systems, etc.)"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "20px",
                  border: "1px solid #cbd5e1",
                  borderRadius: "8px",
                  boxSizing: "border-box",
                }}
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  background: isSubmitting ? "#94a3b8" : "linear-gradient(135deg, #1e3a5f, #2563eb)",
                  color: "white",
                  padding: "14px",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "⏳ Sending Request..." : "✉️ Send Training Request →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// Each section manages its own expanded card ID so only one card expands at a time per section
function ProgramSection({
  programs,
  sectionIcon,
  sectionTitle,
  sectionSubtitle,
  programCountLabel,
  bgColor,
}: {
  programs: any[];
  sectionIcon: string;
  sectionTitle: string;
  sectionSubtitle: string;
  programCountLabel: string;
  bgColor?: string;
}) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section style={{ padding: "60px 20px", background: bgColor || "#f0f4f8" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{sectionIcon}</div>
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#0f172a",
              margin: "0 0 10px",
              fontWeight: 700,
            }}
          >
            {sectionTitle}
          </h2>
          <p style={{ color: "#64748b", fontSize: "1.1rem" }}>{sectionSubtitle}</p>
          <span
            style={{
              display: "inline-block",
              background: "#1e3a5f",
              color: "white",
              padding: "6px 24px",
              borderRadius: "30px",
              fontSize: "0.85rem",
              marginTop: "15px",
              fontWeight: 600,
            }}
          >
            🎯 {programCountLabel}
          </span>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "30px",
          }}
        >
          {programs.map((p, i) => (
            <ProgramCard
              key={i}
              program={p}
              isExpanded={expandedId === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  program,
  isExpanded,
  onToggle,
}: {
  program: any;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
          transition: "transform 0.3s, box-shadow 0.3s",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #e2e8f0",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-5px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 2px 10px rgba(0,0,0,0.10)";
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: "12px" }}>{program.icon}</div>
        <h3
          style={{
            fontSize: "1.3rem",
            marginBottom: "8px",
            color: "#1e3a5f",
            fontWeight: 700,
          }}
        >
          {program.title}
        </h3>

        <div
          style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "14px" }}
        >
          <span
            style={{
              background: "rgba(96,165,250,0.13)",
              color: "#1e3a5f",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            ⏱️ {program.duration}
          </span>
          <span
            style={{
              background: "rgba(16,185,129,0.12)",
              color: "#065f46",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            📊 {program.level}
          </span>
          <span
            style={{
              background: "rgba(99,102,241,0.10)",
              color: "#4338ca",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            💻 Online | 🕒 Flexible
          </span>
        </div>

        <p
          style={{
            color: "#475569",
            marginBottom: "6px",
            lineHeight: 1.55,
            fontSize: "0.9rem",
          }}
        >
          {program.shortDesc}
        </p>

        {isExpanded && (
          <div style={{ marginTop: "4px", marginBottom: "4px" }}>
            <p
              style={{
                color: "#64748b",
                lineHeight: 1.6,
                fontSize: "0.85rem",
                marginBottom: "14px",
              }}
            >
              {program.fullDesc}
            </p>

            <div
              style={{
                background: "#e0f2fe",
                padding: "12px 16px",
                borderRadius: "10px",
                marginBottom: "14px",
                textAlign: "center",
              }}
            >
              <p
                style={{ fontSize: "0.8rem", color: "#0369a1", fontWeight: 600 }}
              >
                💰 50% deposit before · 50% towards end
              </p>
            </div>

            <ul style={{ listStyle: "none", marginBottom: "14px", padding: 0 }}>
              {program.skills.map((skill: string, i: number) => (
                <li
                  key={i}
                  style={{
                    padding: "6px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.85rem",
                    color: "#334155",
                  }}
                >
                  <span
                    style={{
                      color: "#10b981",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    ✓
                  </span>
                  {skill}
                </li>
              ))}
            </ul>

            <div
              style={{
                background: "#f1f5f9",
                padding: "14px",
                borderRadius: "12px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  color: "#1e3a5f",
                  marginBottom: "10px",
                }}
              >
                📁 {program.projectLabel}:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {program.projects.map((tag: string, i: number) => (
                  <span
                    key={i}
                    style={{
                      background: "white",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      color: "#1e3a5f",
                      border: "1px solid #cbd5e1",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onToggle}
          style={{
            background: "none",
            border: "none",
            color: "#2563eb",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: "pointer",
            padding: "6px 0",
            textAlign: "left",
            marginBottom: "14px",
          }}
        >
          {isExpanded ? "▲ Show less" : "▼ Read more"}
        </button>

        <div style={{ flexGrow: 1 }} />

        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #1e3a5f, #2563eb)",
            color: "white",
            borderRadius: "10px",
            fontSize: "1rem",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.02)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          ✉️ Enroll Now
        </button>
      </div>
      <EnrollModal
        programTitle={program.title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

function Training() {
  const steps = [
    { icon: "💻", num: "1️⃣", title: "ONLINE", desc: "Train from anywhere in the world" },
    { icon: "⏰", num: "2️⃣", title: "PICK TIME", desc: "Choose your best schedule" },
    { icon: "💰", num: "3️⃣", title: "50/50 PAYMENT", desc: "50% before, 50% towards end" },
    {
      icon: "🤝",
      num: "4️⃣",
      title: "SIGN AGREEMENT",
      desc: "Terms agreed before training starts",
    },
  ];

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
        background: "#f0f4f8",
        color: "#1a2a3a",
        lineHeight: 1.5,
        minHeight: "100vh",
      }}
    >
      {/* ── Hero – reduced vertical padding & no standalone icon row ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
          color: "white",
          padding: "40px 20px 36px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              marginBottom: "12px",
              fontWeight: 800,
              lineHeight: 1.25,
              textAlign: "center",
            }}
          >
            🚀 Learn to{" "}
            <span style={{ color: "#60a5fa" }}>Build &amp; Design</span>
            {" "}Like a Pro
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              opacity: 0.9,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Hands-on online training programs to master system development, websites, and
            graphic design
          </p>
        </div>
      </div>

      {/* ── How It Works – icons are smaller / compact ── */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <span
              style={{
                background: "rgba(255,255,255,0.2)",
                padding: "6px 22px",
                borderRadius: "40px",
                fontSize: "0.9rem",
                display: "inline-block",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              🎯 HOW IT WORKS
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "20px 30px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  minWidth: "180px",
                  transition: "transform 0.3s",
                }}
              >
                <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>{step.num}</div>
                <div style={{ fontSize: "2rem" }}>{step.icon}</div>
                <div
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {step.title}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#e2e8f0", textAlign: "center" }}>
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "28px",
              paddingTop: "22px",
              borderTop: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span style={{ fontSize: "1rem", color: "#facc15", marginRight: "8px" }}>
              ⭐
            </span>
            <span
              style={{ color: "#e2e8f0", fontSize: "0.95rem", fontWeight: 500 }}
            >
              ✨ Simple, Transparent, and Flexible , Designed for Your Success ✨
            </span>
          </div>
        </div>
      </div>

      {/* ── Ticker ── */}
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "14px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <style>{`
          @keyframes scrollTicker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .scroll-ticker { display: inline-block; animation: scrollTicker 25s linear infinite; }
          .scroll-ticker span { display: inline-block; padding: 0 20px; font-size: 0.95rem; font-weight: 500; }
        `}</style>
        <div className="scroll-ticker">
          {[
            "⚡ System Development", "✦", "🌐 Website Development", "✦", "🎨 Graphics Design", "✦",
            "🏷️ Digital Branding", "✦", "🤖 AI Chatbots", "✦", "🛍️ E-commerce", "✦",
            "📱 Mobile-Friendly Design", "✦", "✨ Logo Design", "✦", "🎬 Motion Graphics", "✦", "🗄️ Database Design", "✦",
            "⚡ System Development", "✦", "🌐 Website Development", "✦", "🎨 Graphics Design", "✦",
            "🏷️ Digital Branding", "✦", "🤖 AI Chatbots", "✦", "🛍️ E-commerce", "✦",
            "📱 Mobile-Friendly Design", "✦", "✨ Logo Design", "✦", "🎬 Motion Graphics", "✦", "🗄️ Database Design", "✦",
          ].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── System Development ── */}
      <ProgramSection
        programs={systemPrograms}
        sectionIcon="⚙️"
        sectionTitle="System Development Training"
        sectionSubtitle="Learn to build real-world software systems from scratch"
        programCountLabel="6 Comprehensive Programs"
        bgColor="#f0f4f8"
      />

      {/* ── Website Development (now 6 programs) ── */}
      <ProgramSection
        programs={webPrograms}
        sectionIcon="🌐"
        sectionTitle="Website Development Training"
        sectionSubtitle="Learn to build stunning, responsive websites that work on all devices"
        programCountLabel="6 Comprehensive Programs"
        bgColor="#fff"
      />

      {/* ── Graphics & Branding ── */}
      <ProgramSection
        programs={graphicsPrograms}
        sectionIcon="🎨"
        sectionTitle="Graphics & Digital Branding Training"
        sectionSubtitle="Learn to create stunning visuals and build strong brand identities"
        programCountLabel="3 Comprehensive Programs"
        bgColor="#f0f4f8"
      />
    </div>
  );
}