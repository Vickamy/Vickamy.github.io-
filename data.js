// ============================================================
// DATA.JS — Edit all your portfolio content here
// ============================================================
// This file contains all the content displayed on the website.
// Update the arrays below to change what appears on the site.
// ============================================================

// ── PERSONAL INFO ──────────────────────────────────────────
const personalInfo = {
  name: "Vicent Kamya",
  title: "PhD Chemist | Flow Technologies | Drug Discovery",
  tagline: "Research. Build. Lead. Impact.",
  intro: "Welcome to my page. Here, you will learn about my research, projects, leadership, books, ideas, and ongoing work at the intersection of chemistry, automation, medicine, entrepreneurship, and faith-driven impact.",
  email: "vicent.kamya@uconn.edu",           // ← Update your email
  linkedin: "https://www.linkedin.com/in/kamya-vicent19930413",  // ← Update
  github: "https://github.com/Vickamy",         // ← Update
  scholar: "https://scholar.google.com/",            // ← Update
  orcid: "https://orcid.org/0000-0003-2604-6384",   // ← Update
  location: "USA / Africa",                       // ← Update
  cv_url: "assets/CV_Vicent_Kamya.pdf",            // ← Link to PDF CV if hosted
  mission: "To harness chemistry, automation, and entrepreneurship to solve real problems in drug access, science education, and sustainable development — especially across Africa.",
  about: {
    who: "I am a PhD scientist focusing on developing continuous flow chemistry technologies to make chemical synthesis more approachable, automatable, scalable and sustainable. My research sits at the boundary between synthetic organic chemistry, continuous manufacturing, and medicinal chemistry.",
    workOn: "My current research focuses on building automated mobile flow chemistry platforms that can produce pharmaceutical ingredients continuously and efficiently. A central project involves the continuous-flow synthesis of artemisinin, an antimalarial compound critical to global health. I also investigate artemisinin-derived scaffolds for anticancer activity and other natural-product-based drug discovery programmes.",
    drives: "I am motivated by the gap between what chemistry can do and what reaches patients — especially in Africa. I believe that small, automated, modular synthesis platforms could decentralise pharmaceutical production and make medicines more accessible. Faith, family, and a genuine love of ideas keep me going through the long days of research.",
    vision: "I want to build research capacity and technology infrastructure that enables African scientists and entrepreneurs to lead in pharmaceutical manufacturing, drug discovery, and science education. In the long term, I hope to found or contribute to institutions that combine rigorous science with entrepreneurial energy and community impact."
  }
};

// ── EDUCATION ──────────────────────────────────────────────
const education = [
  {
    degree: "PhD in Chemistry",
    field: "Flow Chemistry & Synthetic Organic Chemistry",
    institution: "University of Connecticut",   // ← Update
    location: "USA",
    start: "2026",
    end: "2026",
    thesis: "Automated Mobile Flow Platforms for Continuous Chemical Synthesis",
    highlights: ["Continuous-flow artemisinin synthesis", "Photochemical flow reactors", "Automation & process control"]
  },
  {
    degree: "MSc in Chemistry",
    field: "Organic Chemistry",
    institution: "University of Nairobi",   // ← Update
    location: "Kenya",
    start: "2022",
    end: "2022",
    thesis: "Phytochemical Investigation of Pentas Species for Leishmanicidal Principles",
    highlights: ["Natural product isolation and characterization", "Neglected Tropical Diseases", "Nature-guided Drug Discovery"]
  },
  {
    degree: "BSc in Chemistry",
    field: "Chemistry",
    institution: "Kyambogo University",   // ← Update
    location: "Kampala, Uganda",
    start: "2016",
    end: "2016",
    highlights: ["Chemistry Education"]
  }
];

// ── RESEARCH EXPERIENCE ────────────────────────────────────
const researchExperience = [
  {
    role: "PhD Researcher",
    group: "Flow Chemistry & Automation Lab",
    institution: "University of Connecticut",
    start: "2022",
    end: "Present",
    description: "Designing and operating continuous-flow synthesis platforms. Developing automated systems for artemisinin production and medicinal compound libraries."
  },
  {
    role: "MSc Researcher",
    group: "Natural Products and Medicinal Chemistry Group",
    institution: "University of Nairobi",
    start: "2018",
    end: "2022",
    description: "Isolated and characterized naturally occurring compounds from five East African medicinal plants to guide the discovery and development of leishmania therapies."
  }
];

// ── TECHNICAL SKILLS ───────────────────────────────────────
const skills = {
  chemistry: ["Continuous-flow synthesis", "Photochemistry", "Organic synthesis", "Natural product chemistry", "Medicinal chemistry", "Analytical chemistry (NMR, HPLC, MS)"],
  automation: ["Flow reactor design", "Process automation", "Arduino/Raspberry Pi integration", "Lab-on-a-chip concepts", "Process analytical technology (PAT)"],
  software: ["Python (basic)", "ChemDraw", "Mnova", "MestReNova", "Microsoft Office", "LaTeX"],
  languages: ["English (fluent)", "Luganda (native)", "French (basic)"],
  other: ["Science writing", "Grant proposal writing", "Teaching & mentoring", "Entrepreneurship & business development"]
};

// ── AWARDS ─────────────────────────────────────────────────
const awards = [
  { year: "2023", title: "PhD Research Excellence Award", org: "University of Connecticut" },
  { year: "2021", title: "Best MSc Thesis Award", org: "University of Nairobi" },
  { year: "2019", title: "Top Graduate — BSc Chemistry", org: "Kyambogo University" }
  // ← Add more awards here
];

// ── PRESENTATIONS ──────────────────────────────────────────
const presentations = [
  { year: "2021", title: "Phytochemical Investigation Of Five Pentas Species for Leishmanicidal Principles", event: "University of Nairobi Research Week, 2021", type: "Oral" },
  { year: "2025", title: "Development of Novel Pentalongin-Naphthol Hybrids as Potent and Safer Antileishmanial Agents", event: "University of Connecticut", type: "Oral" },
  { year: "2026", title: "Democratizing Flow Chemistry: Affordable Automation and Potent Anticancer Artemisinin Derivatives", event: "University of Connecticut (Fall 2026 Chemistry Colloquium)", type: "Oral" }
];

// ── PROJECTS ───────────────────────────────────────────────
// Status options: "Ongoing" | "Completed" | "Proposed" | "Paused"
// Category options: any string — used for filtering
const projects = [
  {
    id: 1,
    title: "Automated Mobile Flow Chemistry Platform",
    category: "Automation",
    status: "Ongoing",
    date: "2022–Present",
    role: "Lead Researcher",
    summary: "Designing a compact, portable continuous-flow synthesis unit capable of producing pharmaceutical ingredients outside of traditional large-scale facilities.",
    details: "This project addresses the challenge of pharmaceutical manufacturing in resource-limited settings. The platform integrates modular flow reactors, automated pumps, inline sensors, and process control software. The goal is a system that a small team can operate reliably to produce consistent, quality-controlled chemical outputs. Applications include antimalarial drugs, anti-infective agents, and other essential medicines.",
    outcomes: ["Working prototype reactor unit", "Automated control interface developed", "Three reaction types validated"],
    tags: ["flow chemistry", "automation", "pharmaceuticals", "Africa", "modular synthesis"],
    publications: []
  },
  {
    id: 2,
    title: "Continuous-Flow Synthesis of Artemisinin",
    category: "Chemistry",
    status: "Ongoing",
    date: "2022–Present",
    role: "Researcher",
    summary: "Developing a continuous-flow methodology for artemisinin synthesis using photosensitisation, singlet oxygen, and controlled flow reactor conditions.",
    details: "Artemisinin is the cornerstone of antimalarial combination therapy and remains in high global demand. This project translates a multi-step batch synthesis into a continuous-flow process, improving safety (by handling reactive intermediates in small volumes), efficiency, and scalability. Photochemical flow reactors with immobilised photosensitisers are central to the approach.",
    outcomes: ["Flow conditions for key steps established", "Improved yield compared to batch benchmark", "Manuscript in preparation"],
    tags: ["artemisinin", "flow chemistry", "photochemistry", "antimalarial", "synthesis"],
    publications: []
  },
  {
    id: 3,
    title: "Artemisinin Derivatives for Anticancer Activity",
    category: "Drug Discovery",
    status: "Ongoing",
    date: "2023–Present",
    role: "Co-researcher",
    summary: "Synthesising and evaluating semi-synthetic artemisinin derivatives as potential anticancer agents, leveraging the known cytotoxic properties of the artemisinin scaffold.",
    details: "Beyond antimalarial use, artemisinin and its derivatives have demonstrated promising cytotoxic activity against various cancer cell lines. This project synthesises novel C-10 and C-12 derivatives and evaluates them against a panel of cancer cell lines. Structure-activity relationships guide further analogue design.",
    outcomes: ["Library of 15+ derivatives synthesised", "Biological screening data acquired"],
    tags: ["artemisinin", "anticancer", "drug discovery", "medicinal chemistry", "semi-synthesis"],
    publications: []
  }
];

// ── JOURNAL ENTRIES ────────────────────────────────────────
const journalEntries = [];

// ── BOOKS ──────────────────────────────────────────────────
const books = [
  {
    id: 1,
    title: "The Purpose Driven Life",
    author: "Rick Warren",
    dateRead: "2024",
    category: "Faith",
    lessons: "Understanding life's core purpose and aligning personal talents, scientific inquiry, and service toward God and community impact.",
    quote: "You were made by God and for God — and until you understand that, life will never make sense.",
    influence: "Reinforced my commitment to leveraging my research and scientific work for community and global health impact.",
    rating: 5
  },
  {
    id: 2,
    title: "Those Invisible Spirits Called Angels",
    author: "Renald E. Showers",
    dateRead: "2024",
    category: "Faith",
    lessons: "A detailed biblical examination of spiritual realities, angelic ministry, and the unseen guidance present in a believer's walk.",
    quote: "God uses His messengers in ways beyond human comprehension to protect, comfort, and fulfill His divine purposes.",
    influence: "Deepened my spiritual perspective and mindfulness of God's unseen hand throughout my academic and personal journey.",
    rating: 5
  },
  {
    id: 3,
    title: "Prevail",
    author: "Cindy Trimm",
    dateRead: "2024",
    category: "Personal Development",
    lessons: "Overcoming life's challenges through resilience, spiritual empowerment, and purposeful mindset shifts.",
    quote: "Your capacity to prevail is determined by the strength of your convictions and the clarity of your vision.",
    influence: "Inspired greater perseverance and tenacity when navigating complex scientific problems and career milestones.",
    rating: 5
  },
  {
    id: 4,
    title: "Unstoppable",
    author: "Cindy Trimm",
    dateRead: "2024",
    category: "Personal Development",
    lessons: "Breaking through limitations, sustaining momentum, and executing vision with unshakeable faith and discipline.",
    quote: "Discipline is the bridge between goals and accomplishment.",
    influence: "Empowered my approach to multi-disciplinary projects, entrepreneurship, and long-term goal setting.",
    rating: 5
  },
  {
    id: 5,
    title: "Hello Tomorrow",
    author: "Cindy Trimm",
    dateRead: "2024",
    category: "Personal Development",
    lessons: "Proactively shaping the future through intentional choices, forward-thinking strategy, and visionary leadership.",
    quote: "The future belongs to those who prepare for it today.",
    influence: "Directly influenced how I plan future research platforms, technology commercialization, and career aspirations.",
    rating: 5
  },
  {
    id: 6,
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    dateRead: "2024-08",
    category: "Entrepreneurship",
    lessons: "Disruption comes from below. Small, affordable, accessible innovations displace incumbents not by being better — but by serving overlooked markets.",
    quote: "Companies that do everything right can still lose market leadership — or fail entirely.",
    influence: "Reframed how I think about the mobile flow platform. The goal is not to beat large manufacturers — it is to serve markets they cannot reach.",
    rating: 5
  },
  {
    id: 7,
    title: "Atomic Habits",
    author: "James Clear",
    dateRead: "2023-04",
    category: "Personal Development",
    lessons: "Tiny daily improvements compound into remarkable results. Systems matter more than goals.",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    influence: "Changed how I structure my research days. I now protect a focused writing block every morning.",
    rating: 5
  }
];

// ── ACTIVITIES ─────────────────────────────────────────────
const activities = [
  {
    title: "Outdoor Exploration",
    icon: "🏔️",
    description: "Hiking, cycling, and spending time in nature. I find that physical movement and open spaces restore clarity after long periods in the laboratory.",
    category: "Recreation"
  },
  {
    title: "Cinema & Storytelling",
    icon: "🎬",
    description: "I am drawn to films with complex characters, moral depth, and narrative precision. Great cinema is philosophy made visual.",
    category: "Culture"
  },
  {
    title: "Reading Widely",
    icon: "📚",
    description: "Beyond technical literature, I read history, biography, theology, economics, and African literature. I believe a scientist who only reads science is only half a scientist.",
    category: "Intellectual"
  },
  {
    title: "Science Communication",
    icon: "🔬",
    description: "Writing and speaking about chemistry and research for broader audiences. I believe scientists have an obligation to make their work understood.",
    category: "Professional"
  },
  {
    title: "Christian Fellowship & Ministry",
    icon: "✝️",
    description: "Active involvement in international Christian fellowship communities, leading worship, facilitating Bible study, and providing pastoral support to students.",
    category: "Faith"
  },
  {
    title: "Mentoring & Coaching",
    icon: "🤝",
    description: "Working with younger students and emerging scientists from African backgrounds — sharing knowledge, networks, and encouragement.",
    category: "Community"
  },
  {
    title: "Entrepreneurship & Innovation",
    icon: "💡",
    description: "Developing business ideas at the intersection of science and society. I believe scientists must also be builders if we want to see our research reach people.",
    category: "Professional"
  },
  {
    title: "Travel & Cultural Exchange",
    icon: "🌍",
    description: "Living and studying across continents has expanded how I see the world. I value cultural intelligence as a genuine leadership skill.",
    category: "Culture"
  },
  {
    title: "Family & Community Values",
    icon: "🏡",
    description: "Deeply committed to family, friendship, and community. I draw strength from relationships and try to invest in people intentionally.",
    category: "Personal"
  }
];

// ── LEADERSHIP ROLES ───────────────────────────────────────
const leadershipRoles = [
  {
    role: "Leadership Team Member",
    org: "International Christian Fellowship",
    start: "2023",
    end: "Present",
    description: "Leading a diverse community of international students. Responsibilities include programme planning, pastoral care, intercultural facilitation, and coordination of weekly events.",
    impact: "Community of 150+ students from 30+ nations. Multiple outreach events organised annually."
  },
  {
    role: "Teaching Assistant & Mentor",
    org: "University Chemistry Department",
    start: "2022",
    end: "Present",
    description: "Supporting undergraduate laboratory sessions, marking assignments, and providing one-to-one mentoring to chemistry students including international students.",
    impact: "Mentored 20+ students. Consistently rated highly in student feedback."
  },
  {
    role: "Student Mentor",
    org: "UConn Chem Mentors",
    start: "2022",
    end: "Present",
    description: "Mentored undergraduate students to help shape their academic and career path. Also helped students to learn research lab workflows.",
    impact: "Guided students through academic, career development, and laboratory research workflows."
  },
  {
    role: "Founder & Director",
    org: "Elite Enterprises",
    start: "2023",
    end: "Present",
    description: "Founding and leading a small entrepreneurial initiative focused on science education, communication, and community development.",
    impact: "Active projects in education content development and science communication."
  }
];

// ── MILESTONES ─────────────────────────────────────────────
const milestones = [
  { year: "2013", title: "Began BSc Chemistry", description: "Enrolled at Kyambogo University, beginning my formal journey in chemistry.", category: "Education" },
  { year: "2016", title: "Graduated with BSc in Chemistry", description: "Completed undergraduate degree in Chemistry at Kyambogo University.", category: "Education" },
  { year: "2017", title: "Chemistry Teacher at Naalya Secondary School", description: "Hired as a chemistry teacher at Naalya Secondary School.", category: "Career" },
  { year: "2018", title: "Began MSc in Chemistry", description: "Started Master's degree research at the University of Nairobi.", category: "Education" },
  { year: "2022", title: "Completed MSc in Chemistry", description: "Completed Master's degree at the University of Nairobi.", category: "Education" },
  { year: "2022", title: "PhD Programme Begins", description: "Began PhD research in flow chemistry and automation at University of Connecticut.", category: "Research" },
  { year: "2023", title: "ICF Leadership Role", description: "Joined the leadership team of the International Christian Fellowship.", category: "Leadership" },
  { year: "2023", title: "Elite Enterprises Founded", description: "Launched first entrepreneurial initiative combining science and community impact.", category: "Entrepreneurship" },
  { year: "2024", title: "First Successful Artemisinin Flow Run", description: "Achieved end-to-end continuous-flow artemisinin synthesis for the first time.", category: "Research" },
  { year: "June 2026", title: "Started Process Chemistry Internship at Pfizer", description: "Started an internship at Pfizer in Process Chemistry, Chemical Research and Development (June 01, 2026). Developed a flow platform incorporating flow-electrochemistry to synthesize derivatives safely and sustainably without toxic reagents, working under Dr. Chase Salazar (Principal Scientist).", category: "Research" },
  { year: "August 2026", title: "Completed Pfizer Internship", description: "Completed a 3-month Internship at Pfizer in Chemical Research and Development (August 21, 2026).", category: "Research" },
  { year: "August 2026", title: "Postdoctoral Fellowship Offer Accepted", description: "Accepted an offer for a Postdoctoral Fellowship at the University of Ottawa (August 14, 2026).", category: "Career" },
  { year: "September 2026", title: "Novel Artemisinin Derivative Synthesized", description: "Synthesized the first novel disulfide-based artemisinin derivative (September 08, 2026).", category: "Research" }
];

// ── OPPORTUNITIES ──────────────────────────────────────────
const opportunities = [
  { title: "Postdoctoral Opportunities", icon: "🎓", description: "Open to postdoctoral positions in flow chemistry, continuous manufacturing, or medicinal chemistry — especially those with an applied or industry-relevant focus." },
  { title: "Research Collaborations", icon: "🔬", description: "Interested in collaborating with research groups working on pharmaceutical synthesis, flow chemistry, natural product chemistry, or drug discovery for neglected diseases." },
  { title: "Funding & Investment", icon: "💰", description: "Seeking funding discussions for the mobile flow platform project and Kazi Konnekt. Open to conversations with development funders, impact investors, and research grant bodies." },
  { title: "Technology Commercialisation", icon: "⚙️", description: "Looking for partnerships to commercialise flow chemistry technology for pharmaceutical production in low-resource settings." },
  { title: "Pharmaceutical Partnerships", icon: "💊", description: "Open to collaborations with pharmaceutical companies or NGOs interested in sustainable artemisinin production or antimalarial manufacturing capacity." },
  { title: "Science Education Partnerships", icon: "📖", description: "Interested in partnerships with educational institutions, publishers, or platforms developing science education resources for African audiences." },
  { title: "Speaking & Writing", icon: "🎤", description: "Available for speaking engagements, podcast appearances, and writing commissions on topics including flow chemistry, science in Africa, entrepreneurship, and faith in the public square." },
  { title: "Mentoring", icon: "🤝", description: "Happy to mentor early-career scientists from African backgrounds navigating research, PhD study abroad, and career development." }
];
