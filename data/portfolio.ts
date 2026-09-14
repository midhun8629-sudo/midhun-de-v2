/**
 * EDIT YOUR WEBSITE HERE
 *
 * Change only the text and links inside quotation marks. The page layout,
 * graphics, and animations live elsewhere and do not need to be edited.
 */
export const portfolioContent = {
  owner: {
    name: "Midhun Mohanan",
    shortName: "Midhun",
    email: "midhun.de@proton.me",
    location: "Kiel, Germany",
    website: "https://midhun.de",
    github: "https://github.com/midhun8629-sudo",
    sourceCode: "https://github.com/midhun8629-sudo/midhun-de-v2",
  },

  navigation: [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Vision", link: "#vision" },
    { name: "Contact", link: "#contact" },
  ],

  hero: {
    eyebrow: "COMPUTATIONAL ENGINEERING · KIEL, GERMANY",
    title: "Modeling complex physical systems with clarity",
    introduction:
      "I’m Midhun Mohanan, an MSc Materials Science student working with finite-element and multiphysics simulation for thermal, structural, and sensor systems.",
    button: "Explore my work",
  },

  aboutCards: [
    {
      title:
        "I build physics-based models for thermal, structural, and coupled engineering problems.",
      description: "",
    },
    {
      title:
        "Based in Kiel, Germany — open to thesis, research, and simulation roles.",
      description: "",
    },
    {
      title: "Core methods",
      description: "Methods I use and continue to deepen",
    },
    {
      title: "MSc Materials Science and Engineering at Kiel University.",
      description: "",
    },
    {
      title:
        "Currently studying semiconductor cooling and magnetoelastic sensor behaviour.",
      description: "CURRENT FOCUS",
    },
    {
      title: "Interested in working together on a simulation problem?",
      description: "",
    },
  ],

  techStack: {
    stack1: ["FEM", "Multiphysics", "Python"],
    stack2: ["Thermal", "Structural", "Validation"],
  },

  projectsSection: {
    heading: "A small selection of",
    accent: "simulation work",
    hoverLabel: "Open profile",
    linkLabel: "View GitHub",
  },

  projects: [
    {
      title: "AI Hardware Thermal Modeling",
      description:
        "Ongoing study of heat flow, cooling performance, and design trade-offs in high-power semiconductor packages.",
    },
    {
      title: "Magnetoelastic SAW Sensor FEM",
      description:
        "A coupled-physics study connecting magnetic state, elastic response, and acoustic phase behaviour.",
    },
    {
      title: "Thermo-mechanical Reliability",
      description:
        "Exploring how temperature gradients translate into stress and warpage in bonded electronic structures.",
    },
    {
      title: "Computational Model Verification",
      description:
        "Using convergence studies, physical balances, and reference cases to separate numerical output from credible evidence.",
    },
  ],

  principlesSection: {
    heading: "What credible",
    accent: "simulation requires",
  },

  principles: [
    {
      quote:
        "A result is useful only when its numerical error, assumptions, and limits are understood.",
      name: "Verification",
      title: "Mesh convergence · balance checks · reference cases",
    },
    {
      quote:
        "The simplest model that preserves the governing physics is often the strongest starting point.",
      name: "Physical clarity",
      title: "Explicit assumptions · appropriate scale · interpretable outputs",
    },
    {
      quote:
        "A technical result should be traceable from its inputs and boundary conditions to its final conclusion.",
      name: "Reproducibility",
      title: "Documented inputs · controlled studies · transparent analysis",
    },
    {
      quote:
        "Simulation earns value when it explains a mechanism or supports a real engineering decision.",
      name: "Engineering relevance",
      title: "Sensitivity · trade-offs · design consequences",
    },
    {
      quote:
        "Claims should remain proportional to the evidence available, especially while a study is still developing.",
      name: "Measured claims",
      title: "Clear status · quantified evidence · stated limitations",
    },
  ],

  experienceSection: {
    heading: "Current study and",
    accent: "technical practice",
  },

  experience: [
    {
      title: "MSc Materials Science and Engineering",
      description:
        "Graduate study at Kiel University with emphasis on continuum mechanics, FEM, and multiphysics modeling.",
    },
    {
      title: "Finite-element Modeling",
      description:
        "Formulating boundary-value problems and studying thermal, structural, and coupled physical behaviour.",
    },
    {
      title: "Scientific Computing",
      description:
        "Using Python and numerical workflows for parameter studies, post-processing, and reproducible analysis.",
    },
    {
      title: "Model Credibility",
      description:
        "Checking convergence, conservation, sensitivity, and consistency before drawing engineering conclusions.",
    },
  ],

  visionSection: {
    heading: "From physical question to",
    accent: "credible evidence",
  },

  approach: [
    {
      phase: "Phase 1",
      title: "Define the physics",
      description:
        "Translate the engineering question into governing fields, scales, boundary conditions, and explicit assumptions.",
    },
    {
      phase: "Phase 2",
      title: "Verify the model",
      description:
        "Test mesh convergence, physical balances, limiting cases, and benchmark behaviour before trusting the result.",
    },
    {
      phase: "Phase 3",
      title: "Interpret the result",
      description:
        "Convert fields and curves into mechanisms, sensitivities, trade-offs, and decisions that can be communicated clearly.",
    },
  ],

  contact: {
    heading: "Let’s discuss a",
    accent: "simulation problem.",
    description:
      "I am open to student research, master’s thesis, internship, and simulation-engineering opportunities.",
    button: "Get in touch",
    copyrightName: "Midhun Mohanan",
    sourceLabel: "Source code",
  },

  interfaceText: {
    copyEmail: "Copy my email",
    emailCopied: "Email copied!",
  },

  metadata: {
    title: "Midhun Mohanan · Computational Engineering",
    description:
      "Midhun Mohanan’s portfolio in finite-element and multiphysics simulation for advanced hardware, materials, and sensors.",
    keywords: [
      "computational engineering",
      "finite element method",
      "multiphysics simulation",
      "thermal simulation",
      "thermo-mechanical modeling",
      "semiconductor cooling",
      "materials science",
    ],
  },
} as const;
