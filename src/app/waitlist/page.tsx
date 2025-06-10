"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiUsers,
  FiUser,
  FiZap,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

export default function WaitlistPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const words = "Join the Sphere Waitlist".split(" ");
  const floatingElements = Array.from({ length: 12 }, (_, i) => i);

  const cardData = [
    {
      id: "individual",
      title: "Individual",
      subtitle: "Personal Asset Management",
      description:
        "Secure and manage your personal digital assets with military-grade encryption and intuitive controls.",
      icon: FiUser,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(139, 92, 246, 0.4)",
      features: [
        "Personal Wallet",
        "Asset Tracking",
        "Security Analytics",
        "24/7 Support",
      ],
    },
    {
      id: "project",
      title: "Projects & Teams",
      subtitle: "Collaborative Treasury",
      description:
        "Enterprise-grade multi-signature treasury management with advanced governance and analytics.",
      icon: FiUsers,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      glowColor: "rgba(59, 130, 246, 0.4)",
      features: [
        "Multi-sig Wallets",
        "Team Management",
        "Advanced Analytics",
        "Custom Workflows",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0B0D] via-[#101213] to-[#1A1C1D] text-white flex flex-col items-center justify-center py-24 px-4 relative overflow-hidden">
      {/* Dynamic Mouse Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: hoveredCard ? 2 : 1,
          opacity: hoveredCard ? 0.8 : 0.5,
        }}
      >
        <div className="w-full h-full bg-white rounded-full blur-sm" />
      </motion.div>

      {/* Floating Particles */}
      {floatingElements.map((i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-2 h-2 rounded-full ${i % 3 === 0 ? "bg-purple-400" : i % 3 === 1 ? "bg-blue-400" : "bg-cyan-400"}`}
          />
        </motion.div>
      ))}

      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: y1, opacity }}
      >
        {/* Central Vortex Effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1600px] rounded-full opacity-20"
          style={{
            background: `conic-gradient(from 0deg, 
              transparent, #8b5cf6, transparent, #3b82f6, 
              transparent, #06b6d4, transparent, #8b5cf6)`,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Dynamic Orbs */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        <motion.div
          className="absolute top-[30%] right-[5%] w-80 h-80 rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <motion.div
        className="relative z-20 text-center max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Enhanced Heading */}
        <motion.div
          className="mb-12"
          variants={headingVariants}
          style={{ perspective: "1000px" }}
        >
          <motion.h1
            className="text-6xl md:text-9xl font-black mb-6 leading-tight"
            style={{
              background:
                "linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4, #8b5cf6)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                variants={letterVariants}
                whileHover={{
                  scale: 1.1,
                  rotateY: 15,
                  transition: { duration: 0.3 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Underline */}
          <motion.div
            className="h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mx-auto"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "60%", opacity: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-20 leading-relaxed max-w-4xl mx-auto font-light"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Be the first to experience
          </motion.span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold mx-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            next-generation
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            collaborative asset management on Starknet.
          </motion.span>
        </motion.p>

        {/* Enhanced Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative group cursor-pointer"
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                scale: 1.02,
                rotateY: index === 0 ? 5 : -5,
                z: 50,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Animated Border */}
              <motion.div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm"
                animate={{
                  background:
                    hoveredCard === card.id
                      ? `conic-gradient(from 0deg, ${card.glowColor}, transparent, ${card.glowColor})`
                      : "transparent",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Card Content */}
              <div
                className={`relative bg-gradient-to-br from-[#1A1C1D]/90 to-[#2A2C2D]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-10 h-full transition-all duration-500 group-hover:border-white/20`}
              >
                {/* Icon with Animation */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} p-4 mb-8 mx-auto`}
                  animate={{
                    rotate: hoveredCard === card.id ? [0, 5, -5, 0] : 0,
                    scale: hoveredCard === card.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <card.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-6">
                  <motion.h2
                    className={`text-3xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                    animate={{ scale: hoveredCard === card.id ? 1.05 : 1 }}
                  >
                    {card.title}
                  </motion.h2>

                  <p className="text-gray-400 font-medium">{card.subtitle}</p>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 my-8">
                    {card.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-400"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                      >
                        <FiZap className={`w-4 h-4 text-${card.color}-400`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link href={`/waitlist/${card.id}`} className="block">
                    <motion.button
                      className={`relative w-full group/btn overflow-hidden bg-gradient-to-r ${card.gradient} p-0.5 rounded-2xl`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="bg-[#1A1C1D] rounded-2xl px-8 py-4 group-hover/btn:bg-transparent transition-all duration-300">
                        <span className="text-white font-semibold text-lg flex items-center justify-center gap-3">
                          Join {card.title} Waitlist
                          <motion.div
                            animate={{ x: hoveredCard === card.id ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiArrowRight className="w-5 h-5" />
                          </motion.div>
                        </span>
                      </div>
                    </motion.button>
                  </Link>
                </div>

                {/* Floating Elements inside Card */}
                <AnimatePresence>
                  {hoveredCard === card.id && (
                    <>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-${card.color}-400 rounded-full opacity-60`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 0.6, 0],
                            x: [0, Math.random() * 200 - 100],
                            y: [0, Math.random() * 200 - 100],
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          {[
            { icon: FiUsers, label: "Early Adopters", value: "1,337+" },
            { icon: FiShield, label: "Security Rating", value: "99.9%" },
            { icon: FiTrendingUp, label: "Performance", value: "10x Faster" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
