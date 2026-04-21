"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans">

      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-[#050510]/70">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-sm font-semibold tracking-wide">
            Diego.QS
          </h1>

          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#awebix" className="hover:text-white transition">Project</a>
            <a href="#services" className="hover:text-white transition">Services</a>
          </nav>

        </div>
      </header>

  {/* HERO */}
<section
  id="about"
  className="relative pt-32 min-h-screen flex items-center px-6 overflow-hidden"
>
  {/* 🌌 SPLINE SIDE VISUAL */}
  <div className="absolute right-6 top-1/2 z-[1] hidden md:block h-[520px] w-[420px] -translate-y-1/2 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl pointer-events-none">
  {!loaded && (
    <div className="w-full h-full bg-[#050510] animate-pulse" />
  )}

  <Spline
    scene="https://prod.spline.design/AjxUjmfM9xXrWzUx/scene.splinecode"
    onLoad={() => setLoaded(true)}
    className={`w-full h-full transition-opacity duration-400 ease-out ${
      loaded ? "opacity-100" : "opacity-0"
    }`}
  />
</div>

  {/* 🌑 OVERLAY OSCURO */}
  <div className="absolute inset-0 bg-[#050510]/70 z-0"></div>

  {/* 🌌 GLOW EXTRA */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#C026D3] opacity-20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#A2DCEE] opacity-20 blur-[120px] rounded-full"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12">

    {/* TEXTO */}
    <div>

      <div className="flex gap-3 mb-6 text-xs text-zinc-400 flex-wrap">

        {/* TAG */}
        <motion.span
          whileHover={{ scale: 1.08, y: -2 }}
          className="relative px-3 py-1 rounded-full border border-white/10 overflow-hidden group backdrop-blur-md"
        >
          {/* Glow hover */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#C026D3]/20 to-[#A2DCEE]/20" />

          <span className="relative z-10">
            ⚛️ React + Next.js
          </span>
        </motion.span>

        {/* TAG */}
        <motion.span
          whileHover={{ scale: 1.08, y: -2 }}
          className="relative px-3 py-1 rounded-full border border-white/10 overflow-hidden group backdrop-blur-md"
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#C026D3]/20 to-[#A2DCEE]/20" />

          <span className="relative z-10">
            🧠 Node.js + NestJS
          </span>
        </motion.span>

        {/* TAG */}
        <motion.span
          whileHover={{ scale: 1.08, y: -2 }}
          className="relative px-3 py-1 rounded-full border border-white/10 overflow-hidden group backdrop-blur-md"
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#C026D3]/20 to-[#A2DCEE]/20" />

          <span className="relative z-10">
            🐳 Docker + 🐘 PostgreSQL
          </span>
        </motion.span>

      </div>

        <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
  >
    Hello, I'm <br />

    <span className="relative inline-block">
      
      {/* Texto */}
      <span className="bg-gradient-to-r from-[#C026D3] via-[#A2DCEE] to-[#C026D3] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
        DiegoQ.
      </span>

      {/* Glow */}
      <span className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-[#C026D3] to-[#A2DCEE]" />

    </span>
  </motion.h1>

      <p className="mt-6 max-w-xl text-zinc-400 text-lg leading-relaxed">
        Full-Stack, Cloud, and Infrastructure Developer.
        Experience building modern, scalable applications and automations.
      </p>

     <div className="flex gap-4 mt-8 flex-wrap">

        {/* 🔥 BOTÓN PRINCIPAL */}
        <motion.a
          href="https://www.linkedin.com/in/diego-quir%C3%B3s-92407a260/"
          target="_blank"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-3 rounded-lg text-sm font-medium overflow-hidden group"
        >

          {/* Glow animado */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] opacity-90 group-hover:opacity-100 transition" />

          {/* Light sweep */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <span className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/20 blur-lg transform skew-x-[-20deg] group-hover:left-full transition-all duration-700" />
          </span>

          {/* Texto */}
          <span className="relative z-10 text-white">
            Get in Touch →
          </span>

        </motion.a>


        {/* 🧊 BOTÓN SECUNDARIO */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-3 rounded-lg text-sm border border-white/10 overflow-hidden group backdrop-blur-xl"
        >

          {/* Glow suave hover */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/5" />

          {/* Borde glow */}
          <span className="absolute inset-0 rounded-lg border border-transparent group-hover:border-white/30 transition" />

          <span className="relative z-10">
            Learn more
          </span>

        </motion.a>

      </div>
    </div>

  </div>
</section>

  <section className="py-24 px-6 max-w-6xl mx-auto">

    <div className="grid md:grid-cols-3 gap-8">

      {/* TEXTO IZQUIERDA */}
      <div>
        <h2 className="text-3xl font-semibold leading-tight">
          Want to know more? <br />
          <span className="bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] bg-clip-text text-transparent">
            Here’s what I do.
          </span>
        </h2>

        <p className="text-zinc-400 mt-4 text-sm max-w-xs">
          My main areas of expertise in software development and infrastructure.
        </p>
      </div>

      {/* CARDS */}
      <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">

        {/* FRONTEND */}
        <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group p-6 rounded-xl bg-[#0a0a1a]/80 border border-white/5 backdrop-blur-xl relative overflow-hidden"
          >

            {/* Glow hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#C026D3]/10 to-[#A2DCEE]/10" />

            <h3 className="font-semibold mb-2 relative z-10">
              Frontend Development
            </h3>

            <p className="text-zinc-400 text-sm relative z-10">
              Building modern interfaces with React, Next.js and Tailwind.
            </p>

          </motion.div>

                  {/* BACKEND */}
                <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -5,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group p-6 rounded-xl bg-[#0a0a1a]/80 border border-white/5 backdrop-blur-xl relative overflow-hidden"
          >

            {/* Glow hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#C026D3]/10 to-[#A2DCEE]/10" />

            <h3 className="font-semibold mb-2 relative z-10">
              Backend Development
            </h3>

            <p className="text-zinc-400 text-sm relative z-10">
              Scalable APIs using Node.js, NestJS and PostgreSQL.
            </p>

          </motion.div>

        {/* CLOUD */}
        <motion.div
          whileHover={{ 
            scale: 1.05,
            y: -5,
          }}
          transition={{ type: "spring", stiffness: 200 }}
          className="group p-6 rounded-xl bg-[#0a0a1a]/80 border border-white/5 backdrop-blur-xl relative overflow-hidden"
        >

          {/* Glow hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#C026D3]/10 to-[#A2DCEE]/10" />

          <h3 className="font-semibold mb-2 relative z-10">
            Cloud & DevOps
          </h3>

          <p className="text-zinc-400 text-sm relative z-10">
            Basic cloud infrastructure, deployments and containerization with Docker.
          </p>

        </motion.div>

        {/* PERFORMANCE */}
       <motion.div
        whileHover={{ 
          scale: 1.05,
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 200 }}
        className="group p-6 rounded-xl bg-[#0a0a1a]/80 border border-white/5 backdrop-blur-xl relative overflow-hidden"
      >

        {/* Glow hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#C026D3]/10 to-[#A2DCEE]/10" />

        <h3 className="font-semibold mb-2 relative z-10">
          Performance & Optimization
        </h3>

        <p className="text-zinc-400 text-sm relative z-10">
          Optimizing applications for speed, scalability and efficiency.
        </p>

      </motion.div>

      </div>

    </div>

  </section>

     {/* AWEBIX */}
<section id="awebix" className="py-20 px-6 max-w-4xl mx-auto relative">

  {/* 🔥 Glow dinámico */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.15, 0.35, 0.15],
      }}
      transition={{ duration: 5, repeat: Infinity }}
     className="w-[350px] h-[120px] bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] rounded-3xl blur-3xl"
    />
  </div>

  {/* 🧠 Título animado */}
  <motion.h2
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="text-2xl font-semibold mb-8"
  >
    Personal Project
  </motion.h2>

  {/* 💎 Card */}
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.1 }}
    whileHover={{ 
      scale: 1.05,
      rotateX: 5,
      rotateY: -5,
    }}
    className="relative p-6 rounded-2xl bg-gradient-to-r from-[#C026D3]/10 to-[#A2DCEE]/10 border border-[#C026D3]/20 backdrop-blur-md transition shadow-xl shadow-purple-500/10"
    style={{ transformStyle: "preserve-3d" }}
  >

    {/* ✨ Glow interno en hover */}
    <motion.div
      className="absolute inset-0 rounded-2xl opacity-0"
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "radial-gradient(circle at center, rgba(192,38,211,0.25), transparent 70%)",
      }}
    />

    <h3 className="text-xl font-semibold relative z-10">
      🚀 Co-Founder{" "}
      <span className="bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] bg-clip-text text-transparent">
        Awebix
      </span>
    </h3>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-zinc-400 mt-3 relative z-10"
    >
      Startup focused on web development, digital solutions, and online presence for businesses.
    </motion.p>

    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-zinc-500 mt-2 text-sm relative z-10"
    >
      Development of websites, performance optimization, and custom solutions for clients.
    </motion.p>

    <motion.a
      href="https://www.awebix.net/es"
      target="_blank"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] hover:opacity-90 transition shadow-lg shadow-purple-500/20 relative z-10"
    >
      View project →
    </motion.a>

  </motion.div>
</section>

   {/* SERVICES */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-12">
          Need more info? <span className="text-[#A2DCEE]">I got you.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            { title: "Frontend Development", desc: "React, Next.js, Tailwind" },
            { title: "Backend Development", desc: "Node.js, NestJS APIs" },
            { title: "Cloud & DevOps", desc: "Docker & deployments" },
            { title: "SEO Optimization", desc: "Performance improvements" },
            { title: "Responsive Design", desc: "Mobile-first design" },
            { title: "UI/UX Design", desc: "Clean modern interfaces" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0b0b18] border border-white/5 hover:border-[#C026D3]/30 transition">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

    <section className="py-24 px-6 max-w-5xl mx-auto relative">

      {/* 🔥 Glow animado */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl"
        />
      </div>

      {/* 🧊 Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -10 }}
        className="relative rounded-2xl bg-gradient-to-r from-[#0a0a1a] to-[#050510] border border-white/5 p-12 text-center backdrop-blur-xl"
      >

        {/* TITULO */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Let’s build something{" "}
          <span className="bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] bg-clip-text text-transparent">
            great together.
          </span>
        </motion.h2>

        {/* TEXTO */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-zinc-400 mt-4 max-w-xl mx-auto"
        >
          I’m currently open to job opportunities and collaborations in software development.
        </motion.p>

        {/* BOTON */}
        <motion.a
          href="mailto:dquiros@awebix.net"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-[#C026D3] to-[#A2DCEE] hover:opacity-90 transition shadow-lg shadow-purple-500/20"
        >
          Get in touch →
        </motion.a>

      </motion.div>

    </section>

    </div>
  );
}
