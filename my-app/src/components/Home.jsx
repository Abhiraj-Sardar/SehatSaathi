import React, { useState, useEffect, useRef, useCallback } from 'react';

// Styles as a JavaScript object for inline styling
const styles = {
  // CSS Reset and base styles
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  
  body: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    lineHeight: 1.6,
    overflowX: 'hidden',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },

  // Keyframes for animations (will be added via CSS)
  keyframes: `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    
    @keyframes morphBlob {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    
    @keyframes typewriter {
      from { width: 0; }
      to { width: 100%; }
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    @keyframes slideTestimonial {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes countUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes ripple {
      to { transform: scale(4); opacity: 0; }
    }
  `
};

const Home = () => {
  // State management
  const [isLoading, setIsLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Refs
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const cursorRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "SehatSaathi transformed my healthcare experience! The instant consultation feature saved me during a medical emergency. The doctors are incredibly professional and caring.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "Amazing platform! I got connected with a specialist within minutes. The AI matching system is spot-on. It's like having a doctor in your pocket 24/7.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Anita Verma",
      location: "Bangalore, Karnataka",
      rating: 5,
      text: "The convenience is unmatched! I can consult with doctors from home, and the digital prescriptions make everything so seamless. Highly recommend to everyone!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Pune, Maharashtra",
      rating: 5,
      text: "SehatSaathi's affordable care model is a game-changer. Quality healthcare shouldn't be a luxury, and this platform proves that. Excellent service!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Meera Joshi",
      location: "Hyderabad, Telangana",
      rating: 5,
      text: "The security and privacy features give me complete peace of mind. I feel safe sharing my health information, and the consultations are always thorough.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Arjun Patel",
      location: "Ahmedabad, Gujarat",
      rating: 5,
      text: "Fantastic experience! The app is intuitive, the doctors are knowledgeable, and the whole process is incredibly efficient. Healthcare technology at its finest!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const features = [
    {
      title: "24/7 Availability",
      description: "Round-the-clock medical assistance whenever you need it most",
      icon: "⏰",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "AI-Powered Matching",
      description: "Smart technology connects you with the right specialist instantly",
      icon: "🤖",
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Secure & Private",
      description: "Your health data protected with military-grade encryption",
      icon: "🛡️",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Instant Consultation",
      description: "Get expert medical advice within minutes, not hours",
      icon: "⚡",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Affordable Care",
      description: "Quality healthcare at prices that won't break your budget",
      icon: "💰",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Digital Prescriptions",
      description: "Paperless prescriptions delivered directly to your device",
      icon: "📱",
      color: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }
  ];

  const stats = [
    { label: "Happy Patients", value: 75000, suffix: "+" },
    { label: "Expert Doctors", value: 2500, suffix: "+" },
    { label: "Consultations", value: 150000, suffix: "+" },
    { label: "Cities Served", value: 85, suffix: "+" }
  ];

  // Effects
  useEffect(() => {
    // Add CSS animations to head
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles.keyframes;
    document.head.appendChild(styleSheet);

    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Testimonials auto-slide
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    // Mouse move tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearInterval(testimonialTimer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  const animateCounter = useCallback((element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
    
    updateCounter();
  }, []);

  // Form handling
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsFormSubmitting(false);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  // Render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i}
        style={{
          color: i < rating ? '#fbbf24' : '#d1d5db',
          fontSize: '1.2rem',
          animation: `pulse 0.5s ease-in-out ${i * 0.1}s`
        }}
      >
        ★
      </span>
    ));
  };

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{
            width: '80px',
            height: '80px',
            border: '4px solid rgba(255,255,255,0.3)',
            borderTop: '4px solid white',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }}></div>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px' }}>SehatSaathi</h2>
          <p style={{ opacity: 0.8 }}>Loading your health companion...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Cursor Follower */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          background: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            animation: 'slideInLeft 0.8s ease-out'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              animation: 'pulse 2s infinite'
            }}>
            </div>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
                SehatSaathi
              </h1>
              <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                Your Health Companion
              </p>
            </div>
          </div>

          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            animation: 'slideInRight 0.8s ease-out'
          }}>
            {['Home', 'About', 'Testimonials', 'Contact'].map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{
                    textDecoration: 'none',
                    color: '#374151',
                    fontWeight: '500',
                    position: 'relative',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    animation: `slideInRight 0.8s ease-out ${index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#374151';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '80px'
        }}
      >
        {/* Animated Background Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              background: `rgba(255,255,255,${0.1 - i * 0.01})`,
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Morphing Blobs */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          top: '10%',
          right: '10%',
          animation: 'morphBlob 8s ease-in-out infinite'
        }} />

        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          background: 'rgba(255,255,255,0.05)',
          bottom: '20%',
          left: '15%',
          animation: 'morphBlob 6s ease-in-out infinite reverse'
        }} />

        <div style={{
          textAlign: 'center',
          color: 'white',
          zIndex: 10,
          maxWidth: '800px',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #ffffff, #f0f9ff, #ffffff)',
            backgroundSize: '200% 200%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 3s ease-in-out infinite'
          }}>
            SehatSaathi
          </h1>

          <div style={{
            fontSize: '1.5rem',
            marginBottom: '2rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            borderRight: '3px solid white',
            animation: 'typewriter 4s steps(40) 1s forwards, blink 0.5s step-end infinite 5s'
          }}>
            Your Health Companion - Always Here for You
          </div>

          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.9,
            lineHeight: 1.6,
            animation: 'fadeInUp 1s ease-out 2s forwards',
            opacity: 0
          }}>
            Revolutionizing healthcare through innovative technology and personalized care solutions that put patients first.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1s ease-out 2.5s forwards',
            opacity: 0
          }}>
            <button
              style={{
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                animation: 'pulse 2s infinite'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05) translateY(-2px)';
                e.target.style.boxShadow = '0 10px 25px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1) translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Find a Doctor
            </button>

            <button
              style={{
                padding: '1rem 2rem',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#667eea';
                e.target.style.transform = 'scale(1.05) translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = 'white';
                e.target.style.transform = 'scale(1) translateY(0)';
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          position: 'relative'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Mission, Vision, Values */}
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Why Choose SehatSaathi?
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {[
                {
                  title: "Our Mission",
                  text: "To make quality healthcare accessible, affordable, and convenient for everyone, everywhere.",
                  icon: "🎯"
                },
                {
                  title: "Our Vision", 
                  text: "A world where healthcare barriers no longer exist, and wellness is within reach for all communities.",
                  icon: "👁️"
                },
                {
                  title: "Our Values",
                  text: "Innovation, Compassion, Trust, Excellence, and Accessibility guide everything we do.",
                  icon: "⭐"
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="animate-on-scroll"
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    animationDelay: `${index * 0.2}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    animation: 'pulse 2s infinite'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    color: '#1f2937'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            ref={statsRef}
            className="animate-on-scroll"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'white',
                  borderRadius: '15px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                }}
              >
                <div
                  className="counter"
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: '#667eea',
                    marginBottom: '0.5rem'
                  }}
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <p style={{ color: '#6b7280', fontWeight: '500' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div
            className="animate-on-scroll"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    background: feature.color,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    animation: 'pulse 2s infinite'
                  }}
                >
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#1f2937'
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsRef}
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '3rem',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            What Our Patients Say
          </h2>

          <div style={{
            position: 'relative',
            minHeight: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '600px',
                  opacity: index === currentTestimonial ? 1 : 0,
                  transform: `translateX(${index === currentTestimonial ? '0' : '50px'})`,
                  transition: 'all 0.5s ease-in-out',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '3rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  overflow: 'hidden',
                  border: '3px solid rgba(255,255,255,0.3)',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  {renderStars(testimonial.rating)}
                </div>

                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>

                <div>
                  <h4 style={{
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ opacity: 0.8 }}>
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Navigation Dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: index === currentTestimonial ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  background: index === currentTestimonial 
                    ? 'white' 
                    : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Get In Touch
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
              Have questions? We're here to help you 24/7. Reach out to us anytime.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '4rem'
          }}>
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit} style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  color: '#1f2937'
                }}>
                  Send us a Message
                </h3>

                {['name', 'email', 'phone'].map((field) => (
                  <div key={field} style={{ marginBottom: '1.5rem', position: 'relative' }}>
                    <input
                      type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e5e7eb',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease',
                        background: 'transparent'
                      }}
                      placeholder={`Enter your ${field}`}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#667eea';
                        e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '2rem' }}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e5e7eb',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      background: 'transparent'
                    }}
                    placeholder="Tell us how we can help you"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#667eea';
                      e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: formSubmitted 
                      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isFormSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isFormSubmitting) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {isFormSubmitting ? 'Sending...' : formSubmitted ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '20px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                height: 'fit-content'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '2rem',
                  color: '#1f2937'
                }}>
                  Contact Information
                </h3>

                {[
                  { icon: '📧', label: 'Email', value: 'hello@SehatSaathi.com' },
                  { icon: '📞', label: 'Phone', value: '+91-8800-123-456' },
                  { icon: '💬', label: 'WhatsApp', value: '+91-8800-123-456' },
                  { icon: '📍', label: 'Address', value: 'Innovation Hub, Cyber City, Gurugram, Haryana 122002' },
                  { icon: '⏰', label: 'Hours', value: '24/7 - Always Available for You' }
                ].map((item, index) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      padding: '1rem',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      fontSize: '1.5rem',
                      animation: 'pulse 2s infinite',
                      animationDelay: `${index * 0.2}s`
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        marginBottom: '0.25rem'
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontWeight: '500',
                        color: '#1f2937'
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
        color: 'white',
        padding: '3rem 2rem 1rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              animation: 'pulse 2s infinite'
            }}>
              S
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                SehatSaathi
              </h3>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                Your Health Companion
              </p>
            </div>
          </div>

          <p style={{
            marginBottom: '2rem',
            opacity: 0.8,
            maxWidth: '600px',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            Revolutionizing healthcare through innovative technology and personalized care solutions that put patients first.
          </p>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '2rem',
            opacity: 0.6
          }}>
            <p>
              © 2025 SehatSaathi. All rights reserved. Made with ❤️ for better healthcare.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;