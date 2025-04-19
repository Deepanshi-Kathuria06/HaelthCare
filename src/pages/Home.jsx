import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import doctorImage from "../assets/hero.png";
import processImage from "../assets/processImage.png";
import step1Image from "../assets/step1.png";
import step2Image from "../assets/step2.png";
import step3Image from "../assets/step3.png";
import bpIcon from "../assets/bp-icon.png";
import sugarIcon from "../assets/sugar-icon.png";
import bmiIcon from "../assets/bmi-icon.png";
import cholesterolIcon from "../assets/cholesterol-icon.png";
import lifestyleIcon from "../assets/lifestyle-icon.png";
import onsiteIcon from "../assets/onsite-icon.png";
import detectIcon from "../assets/detect-icon.png";
import insightsIcon from "../assets/insights-icon.png";
import costIcon from "../assets/cost-icon.png";
import consultIcon from "../assets/consult-icon.png";
import aboutUsImage from "../assets/aboutus.png";
import HeartIcon from "../assets/image.png";
import "./Home.css";

const Home = () => {
  // Refs for scroll animations
  const howItWorksRef = useRef(null);
  const whyChooseRef = useRef(null);

  // Scroll progress for How It Works section
  const { scrollYProgress: howItWorksScroll } = useScroll({
    target: howItWorksRef,
    offset: ["start end", "end start"]
  });

  // Scroll progress for Why Choose section
  const { scrollYProgress: whyChooseScroll } = useScroll({
    target: whyChooseRef,
    offset: ["start end", "end start"]
  });

  // Animation values for How It Works steps
  const step1Opacity = useTransform(howItWorksScroll, [0, 0.3], [0, 1]);
  const step2Opacity = useTransform(howItWorksScroll, [0.3, 0.6], [0, 1]);
  const step3Opacity = useTransform(howItWorksScroll, [0.6, 0.9], [0, 1]);
  const step1Scale = useTransform(howItWorksScroll, [0, 0.3], [0.8, 1]);
  const step2Scale = useTransform(howItWorksScroll, [0.3, 0.6], [0.8, 1]);
  const step3Scale = useTransform(howItWorksScroll, [0.6, 0.9], [0.8, 1]);

  // Animation values for Why Choose section
  const bgScale = useTransform(whyChooseScroll, [0, 1], [1.1, 1]);
  const bgOpacity = useTransform(whyChooseScroll, [0, 0.3], [0, 1]);
  const sectionY = useTransform(whyChooseScroll, [0, 1], [100, 0]);
  const overlayOpacity = useTransform(whyChooseScroll, [0, 0.2], [1, 0]);
  const shapesY = useTransform(whyChooseScroll, [0, 1], [50, -50]); // Added shapesY definition

  // Data for Screening Includes
  const screeningItems = [
    { icon: bpIcon, title: "Blood Pressure", description: "Comprehensive hypertension screening" },
    { icon: sugarIcon, title: "Sugar (Fasting/Random)", description: "Diabetes risk assessment" },
    { icon: bmiIcon, title: "BMI, BRI", description: "Body composition analysis" },
    { icon: cholesterolIcon, title: "Cholesterol", description: "Lipid profile evaluation" },
    { icon: lifestyleIcon, title: "Lifestyle Risk Questionnaire", description: "Personalized health assessment" }
  ];

  // Data for Why Choose HeartShield
  const benefits = [
    { 
      icon: onsiteIcon, 
      title: "On-site screenings", 
      description: "No hospital visits required",
      color: "#00b4d8"
    },
    { 
      icon: detectIcon, 
      title: "Detect silent killers early", 
      description: "Prevent before symptoms appear",
      color: "#ef476f"
    },
    { 
      icon: insightsIcon, 
      title: "Personal & organizational insights", 
      description: "Actionable health data",
      color: "#06d6a0"
    },
    { 
      icon: costIcon, 
      title: "Cost-effective health investment", 
      description: "Save on long-term healthcare costs",
      color: "#ffd166"
    },
    { 
      icon: consultIcon, 
      title: "Follow-up consulting", 
      description: "Personal doctor consultations",
      color: "#7209b7"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-text"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="tag">Your Health, Our Priority</span>
          <h1>
            Your Heart's <span className="highlight">Silent</span>
            <br /> Guardian
          </h1>
          <p>
            Prevent heart attacks before they happen. Get risk screened where
            it matters most — your workplace.
          </p>
        </motion.div>

        <motion.div
          className="hero-img"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <img src={doctorImage} alt="Doctor" className="clean-doctor" />
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="about-us-teal">
        <motion.div 
          className="about-glow"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <div className="about-wrapper">
          <motion.div 
            className="about-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={aboutUsImage} alt="Team working on health tech" className="about-img" />
          </motion.div>

          <motion.div 
            className="about-right"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="about-subtitle">WHO WE ARE</h3>
            <h2 className="about-title">
              Empowering Workplaces with <span className="teal-text">Heart Intelligence</span>
            </h2>
            <p className="about-paragraph">
              At HeartShield, we blend compassion with cutting-edge <strong>health AI</strong> to identify silent threats before they strike. Our workplace-first mission ensures your people are protected, empowered, and well.
            </p>

            <div className="feature-grid">
              <motion.div 
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                💡 Real-time Screening
              </motion.div>
              <motion.div 
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                🧠 AI-Driven Insights
              </motion.div>
              <motion.div 
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                🩺 Seamless Doctor Connect
              </motion.div>
            </div>

            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Know Our Mission
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="modern-how-it-works" ref={howItWorksRef}>
        <div className="modern-container">
          <div className="modern-left">
            <img src={processImage} alt="Process" className="modern-process-image" />
          </div>
          <div className="modern-right">
            <h2 className="modern-title">How It Works</h2>
            <div className="steps-container">
              <motion.div 
                className="step-box step-1"
                style={{ opacity: step1Opacity, scale: step1Scale }}
              >
                <div className="step-number">1</div>
                <img src={step1Image} alt="Step 1" className="step-image" />
                <div className="step-content">
                  <h3>Book a Screening</h3>
                  <p>Corporate or individual health screening</p>
                </div>
              </motion.div>
              <motion.div 
                className="step-box step-2"
                style={{ opacity: step2Opacity, scale: step2Scale }}
              >
                <div className="step-number">2</div>
                <img src={step2Image} alt="Step 2" className="step-image" />
                <div className="step-content">
                  <h3>Onsite Visit</h3>
                  <p>Team arrives or online submission</p>
                </div>
              </motion.div>
              <motion.div 
                className="step-box step-3"
                style={{ opacity: step3Opacity, scale: step3Scale }}
              >
                <div className="step-number">3</div>
                <img src={step3Image} alt="Step 3" className="step-image" />
                <div className="step-content">
                  <h3>Receive Report</h3>
                  <p>With optional consultation</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Screening Includes Section */}
      <section className="screening-section">
        <div className="screening-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="screening-header"
          >
            <h2 className="screening-title">Our Screening Includes</h2>
            <p className="screening-subtitle">
              Reports provided in an easy-to-understand <span className="traffic-light">"Traffic Light"</span> format: 
              <span className="traffic-green"> Green</span>, <span className="traffic-yellow"> Yellow</span>, <span className="traffic-red"> Red</span>.
            </p>
          </motion.div>

          <div className="screening-grid">
            {screeningItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="screening-card"
              >
                <div className="card-icon-container">
                  <img src={item.icon} alt={item.title} className="card-icon" />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <div className="traffic-light-indicator">
                  <div className="light green"></div>
                  <div className="light yellow"></div>
                  <div className="light red"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HeartShield Section */}
      <section className="why-choose-section" ref={whyChooseRef}>
        {/* Modern gradient background with subtle animation */}
        <motion.div 
          className="modern-bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ scale: bgScale, opacity: bgOpacity }}
        >
          <div className="gradient-overlay"></div>
          <div className="grid-pattern"></div>
        </motion.div>

        {/* Floating abstract shapes with parallax effect */}
        <motion.div 
          className="abstract-shapes"
          style={{ y: shapesY }}
        >
          <div className="floating-circle"></div>
          <div className="floating-dots"></div>
          <div className="floating-wave"></div>
        </motion.div>

        {/* Overlay that fades out as section comes into view */}
        <motion.div 
          className="section-overlay"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div 
          className="why-choose-container"
          style={{ y: sectionY }}
        >
          <motion.div 
            className="why-choose-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              <span className="title-decorator"></span>
              Why Choose <span className="highlight-text">HeartShield</span>
            </h2>
            <p className="section-subtitle">Comprehensive cardiac care designed for modern workplaces</p>
          </motion.div>

          {/* Modern pill-shaped badge */}
          <motion.div 
            className="modern-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="badge-content">
              <span className="badge-icon">✓</span>
              <p>Reliable Heart Care, Anytime, Anywhere!</p>
            </div>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="modern-benefit-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                style={{ 
                  '--card-accent': item.color,
                  boxShadow: `0 4px 30px ${item.color}20`
                }}
              >
                <motion.div 
                  className="modern-icon-wrapper"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.4 }
                  }}
                  style={{ 
                    background: `linear-gradient(135deg, ${item.color}10, ${item.color}30)`,
                    border: `1px solid ${item.color}20`
                  }}
                >
                  <img src={item.icon} alt={item.title} className="benefit-icon" />
                </motion.div>
                <h3 className="benefit-title">{item.title}</h3>
                <p className="benefit-description">{item.description}</p>
                <motion.div 
                  className="modern-hover-indicator"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ 
                    background: `linear-gradient(90deg, transparent, ${item.color}40, transparent)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Testimonials Section */}



  {/* Testimonials Section */}
<section className="testimonials-section">
  <div className="testimonials-container">
    <motion.div
      className="testimonials-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="section-divider"></div>
    </motion.div>

    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="quote-icon">“</div>
      <blockquote className="testimonial-text">
        HeartShield's detailed reports and hands-on support helped our team take control of their health. Highly recommended!
      </blockquote>
      <div className="client-info">
        <div className="client-name">— Ankita Verma, HR Lead</div>
        <div className="client-company">Infotech Pvt Ltd</div>
      </div>
    </motion.div>

    {/* CTA Section */}
    <motion.div
      className="cta-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <h3 className="cta-title">Ready to Protect Your Team's Heart Health?</h3>
      <div className="cta-buttons">
        <motion.button
          className="cta-button primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule a Screening
        </motion.button>
        <motion.button
          className="cta-button secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Check Your Risk Now
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>

    </>
  );
};

export default Home;