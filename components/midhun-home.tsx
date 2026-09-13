"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const navigation = [
  { label: "About me", href: "#about" },
  { label: "Vision", href: "#vision" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

const projects = [
  {
    number: "01",
    status: "Building",
    title: "AI accelerator thermal management",
    description:
      "A traceable model for studying hotspot temperature, heat flux, interface resistance and cooling performance in high-power compute hardware.",
    evidence: "conjugate heat transfer · energy balance · mesh study",
    visual: "thermal",
  },
  {
    number: "02",
    status: "Building",
    title: "Liquid cold-plate design",
    description:
      "Conjugate heat-transfer studies of channel layout, flow distribution, pressure loss and pumping-power trade-offs.",
    evidence: "CFD · pressure drop · design sweeps",
    visual: "flow",
  },
  {
    number: "03",
    status: "Planned",
    title: "Package thermo-mechanical reliability",
    description:
      "Temperature-to-structure coupling to study thermal stress, interface loading and package warpage under operating cycles.",
    evidence: "thermal–structural FEM · stress · warpage",
    visual: "stress",
  },
] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function FutureSystemVisual() {
  return (
    <div
      className="future-visual"
    >
      <img
        src="/globe-datacenter.webp"
        alt="Earth integrated with a high-density data centre"
      />
      <div className="future-image-shade" aria-hidden="true" />

      <div className="visual-readout readout-top">
        <span>COMPUTE / THERMAL</span>
        <strong>SYSTEM VIEW</strong>
      </div>
      <div className="visual-readout readout-bottom">
        <span>ENERGY · COOLING · RELIABILITY</span>
        <strong>CONNECTED</strong>
      </div>
    </div>
  );
}

export function MidhunHome() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1.08, 0.9]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Midhun Mohanan — home">
          <span>MM</span>
          <small>Semiconductor simulation</small>
        </a>

        <nav aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.label === "Contact" ? "nav-contact" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="about" ref={heroRef}>
        <div className="ruler" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.18 }}
        >
          <motion.p className="eyebrow" variants={reveal} transition={{ duration: 0.55 }}>
            Midhun Mohanan · Germany
          </motion.p>
          <motion.h1 variants={reveal} transition={{ duration: 0.72, ease: "easeOut" }}>
            I model the physics behind
            <span> high-performance hardware.</span>
          </motion.h1>
          <motion.p
            className="hero-intro"
            variants={reveal}
            transition={{ duration: 0.62, ease: "easeOut" }}
          >
            FEM and multiphysics modelling for thermal, fluid and structural
            problems in semiconductor and AI hardware.
          </motion.p>
          <motion.div className="hero-actions" variants={reveal} transition={{ duration: 0.55 }}>
            <a className="button button-primary" href="#projects">
              Explore projects <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-quiet" href="#contact">
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.figure
          className="portrait-frame"
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.95, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Upload public/midhun-portrait.webp. The placeholder is used until it exists. */}
          <motion.img
            src="/midhun-portrait.webp"
            alt="Midhun Mohanan looking toward the camera"
            style={{ scale: reduceMotion ? 1 : portraitScale }}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/midhun-portrait-placeholder.svg";
            }}
          />
          <figcaption>
            <span>PORTRAIT / 01</span>
            <span>Scroll to explore</span>
          </figcaption>
        </motion.figure>

        <div className="hero-index" aria-hidden="true">
          <span>THERMAL SYSTEMS</span>
          <span>MULTIPHYSICS</span>
          <span>PACKAGE RELIABILITY</span>
        </div>
      </section>

      <section className="kinetic-statement" aria-label="Working method">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Model the system.
          <br />
          <span>Verify the physics.</span>
          <br />
          Improve the design.
        </motion.p>

        <div className="method-marquee" aria-hidden="true">
          <div>
            MODEL · VERIFY · COMPARE · OPTIMISE · MODEL · VERIFY · COMPARE · OPTIMISE ·
          </div>
        </div>
      </section>

      <section className="vision-section" id="vision">
        <motion.div
          className="vision-copy"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker"><span /> Vision</p>
          <h2>Simulation should shorten the path from physics to decision.</h2>
          <p>
            The next generation of computing hardware will be constrained by power
            density, cooling and package reliability. I want to build models that
            quantify those limits early—before costly prototypes are made.
          </p>
          <dl className="vision-facts">
            <div>
              <dt>01</dt>
              <dd>High-fidelity physics</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Transparent verification</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Useful design decisions</dd>
            </div>
          </dl>
        </motion.div>

        <motion.div
          className="vision-stage"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <FutureSystemVisual />
        </motion.div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-heading">
          <p className="section-kicker"><span /> Selected work</p>
          <h2>Engineering studies built around evidence.</h2>
          <p>
            Each case study will expose assumptions, governing physics,
            verification and the engineering decision produced by the model.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className={`project-visual ${project.visual}`} aria-hidden="true">
                <span className="visual-axis axis-x">x</span>
                <span className="visual-axis axis-y">y</span>
                <span className="visual-node node-one" />
                <span className="visual-node node-two" />
                <span className="visual-node node-three" />
              </div>

              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-evidence">
                <span>{project.evidence}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <p className="section-kicker"><span /> Contact</p>
        <h2>Let&apos;s model high-performance hardware.</h2>
        <a href="mailto:midhun.de@proton.me">
          Let&apos;s discuss it <span aria-hidden="true">↗</span>
        </a>

        <div className="footer-line">
          <span>© {new Date().getFullYear()} Midhun Mohanan</span>
          <a
            href="https://github.com/midhun8629-sudo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span>Germany</span>
        </div>
      </footer>
    </main>
  );
}
