// ============================================================
// DATA.JS — Edit all your portfolio content here
// ============================================================
// This file contains all the content displayed on the website.
// Update the arrays below to change what appears on the site.
// ============================================================

// ── PERSONAL INFO ──────────────────────────────────────────
const personalInfo = {
  name: "Vicent Kamya",
  title: "PhD Chemist | Flow Chemistry Researcher | Automation Builder | Science Entrepreneur",
  tagline: "Research. Build. Lead. Impact.",
  intro: "I document my research, projects, leadership, books, ideas, and ongoing work at the intersection of chemistry, automation, medicine, entrepreneurship, and faith-driven impact.",
  email: "v.kamya@example.com",           // ← Update your email
  linkedin: "https://linkedin.com/in/vicentkamya",  // ← Update
  github: "https://github.com/vicentkamya",         // ← Update
  scholar: "https://scholar.google.com/",            // ← Update
  orcid: "https://orcid.org/0000-0000-0000-0000",   // ← Update
  location: "Europe / Africa",                       // ← Update
  cv_url: "#",                                       // ← Link to PDF CV if hosted
  mission: "To harness chemistry, automation, and entrepreneurship to solve real problems in drug access, science education, and sustainable development — especially across Africa.",
  about: {
    who: "I am Vicent Kamya, a PhD chemist specialising in flow chemistry and laboratory automation. My research sits at the boundary between synthetic organic chemistry, continuous manufacturing, and medicinal chemistry. I am driven by a conviction that science done well — and shared widely — can transform communities.",
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
    institution: "University Placeholder",   // ← Update
    location: "Europe",
    start: "2022",
    end: "Present",
    thesis: "Automated Mobile Flow Platforms for Continuous Chemical Synthesis",
    highlights: ["Continuous-flow artemisinin synthesis", "Photochemical flow reactors", "Automation & process control"]
  },
  {
    degree: "MSc in Chemistry",
    field: "Organic & Medicinal Chemistry",
    institution: "University Placeholder",   // ← Update
    location: "Africa",
    start: "2019",
    end: "2021",
    thesis: "Pentalongin-Derived Scaffolds for Antileishmanial Therapy",
    highlights: ["Natural product synthesis", "Biological activity assays", "Medicinal chemistry"]
  },
  {
    degree: "BSc in Chemistry",
    field: "Chemistry",
    institution: "University Placeholder",   // ← Update
    location: "Africa",
    start: "2015",
    end: "2019",
    highlights: ["First Class Honours", "Best student award"]
  }
];

// ── RESEARCH EXPERIENCE ────────────────────────────────────
const researchExperience = [
  {
    role: "PhD Researcher",
    group: "Flow Chemistry & Automation Lab",
    institution: "University Placeholder",
    start: "2022",
    end: "Present",
    description: "Designing and operating continuous-flow synthesis platforms. Developing automated systems for artemisinin production and medicinal compound libraries."
  },
  {
    role: "MSc Researcher",
    group: "Medicinal Chemistry Group",
    institution: "University Placeholder",
    start: "2019",
    end: "2021",
    description: "Synthesised and characterised pentalongin-derived compounds. Conducted antileishmanial screening and structure-activity relationship studies."
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
  { year: "2023", title: "PhD Research Excellence Award", org: "University Placeholder" },
  { year: "2021", title: "Best MSc Thesis Award", org: "University Placeholder" },
  { year: "2019", title: "Top Graduate — BSc Chemistry", org: "University Placeholder" }
  // ← Add more awards here
];

// ── PRESENTATIONS ──────────────────────────────────────────
const presentations = [
  { year: "2024", title: "Continuous-Flow Synthesis of Artemisinin Using a Mobile Platform", event: "European Flow Chemistry Conference", type: "Oral" },
  { year: "2023", title: "Automated Flow Platforms for Pharmaceutical Manufacturing in Resource-Limited Settings", event: "International Symposium on Continuous Manufacturing", type: "Poster" }
  // ← Add more presentations here
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
  },
  {
    id: 4,
    title: "Pentalongin Scaffolds for Antileishmanial Therapy",
    category: "Drug Discovery",
    status: "Completed",
    date: "2019–2021",
    role: "Principal Investigator (MSc)",
    summary: "Synthesised and characterised a series of pentalongin-derived compounds as potential treatments for leishmaniasis, a neglected tropical disease.",
    details: "Leishmaniasis affects millions in tropical and subtropical regions with limited treatment options. Pentalongin, a naturally occurring naphthoquinone, exhibits antileishmanial activity. This project prepared analogues by structural modification, evaluated them against Leishmania donovani, and established preliminary structure-activity relationships. MSc thesis project.",
    outcomes: ["12 novel compounds synthesised", "IC50 data established for all compounds", "MSc thesis awarded best thesis prize"],
    tags: ["leishmaniasis", "natural products", "medicinal chemistry", "neglected diseases", "naphthoquinone"],
    publications: ["MSc Thesis, 2021"]
  },
  {
    id: 5,
    title: "Kazi Konnekt — Gig Economy Platform",
    category: "Entrepreneurship",
    status: "Proposed",
    date: "2024–Present",
    role: "Co-founder & Concept Lead",
    summary: "A digital platform concept connecting skilled freelancers and service providers with clients across East Africa, addressing youth unemployment and skill monetisation.",
    details: "Kazi Konnekt (Swahili: 'Work Connect') is a proposed gig economy platform tailored to the East African market. The concept addresses high youth unemployment by creating a trusted marketplace where verified skills — from plumbing to graphic design — can be offered and found easily. The platform would include skills verification, rating systems, and payment integration appropriate for mobile-first users.",
    outcomes: ["Business concept document prepared", "Market research conducted", "Seeking co-founders and seed funding"],
    tags: ["entrepreneurship", "Africa", "technology", "employment", "gig economy"],
    publications: []
  },
  {
    id: 6,
    title: "Elite Enterprises — Business Development Initiative",
    category: "Entrepreneurship",
    status: "Ongoing",
    date: "2023–Present",
    role: "Founder",
    summary: "A small entrepreneurial initiative exploring business opportunities that bridge science, education, and community development.",
    details: "Elite Enterprises is my vehicle for exploring entrepreneurial ideas grounded in science and community impact. Current activities include science education resources, consulting on chemistry-related projects, and developing content for African science communicators. The enterprise reflects my conviction that scientists must also be builders.",
    outcomes: ["Active client base established", "Science communication content produced", "Revenue streams under development"],
    tags: ["entrepreneurship", "education", "science communication", "Africa", "business"],
    publications: []
  },
  {
    id: 7,
    title: "Freelancing for Scientists — Education Project",
    category: "Education",
    status: "Ongoing",
    date: "2024–Present",
    role: "Author & Educator",
    summary: "Writing a practical guide and online resource helping African scientists and researchers develop freelancing skills and generate income beyond traditional academia.",
    details: "Many talented African scientists lack pathways to apply their skills commercially. This project develops a book and accompanying online course covering scientific writing, grant consulting, data analysis services, science communication, and digital product creation — all as viable freelancing niches for researchers. The aim is practical, actionable, and Africa-focused.",
    outcomes: ["Book outline complete", "Three chapters drafted", "Early reader feedback collected"],
    tags: ["education", "freelancing", "Africa", "science careers", "writing"],
    publications: []
  }
];

// ── JOURNAL ENTRIES ────────────────────────────────────────
const journalEntries = [
  {
    id: 1,
    date: "2025-06-01",
    title: "A New Phase: Reflecting on Year Three of the PhD",
    category: "Research",
    summary: "Three years in. Time to take stock of what has been built, what has been learned, and what still lies ahead.",
    content: "Year three of the PhD has been the most productive and also the most demanding. The flow platform prototype is working. We have data. The synthesis is running. But the emotional weight of doing this far from home, in a different climate, in a language not my own, is real. I write this entry not for anyone else but as a record — proof that I was here, thinking, working, pressing forward. The artemisinin work is exciting. I genuinely believe it matters. That belief is what gets me into the lab at 7am.",
    tags: ["reflection", "PhD", "research", "milestone"]
  },
  {
    id: 2,
    date: "2025-03-15",
    title: "Conference: Flow Chemistry Symposium",
    category: "Conferences",
    summary: "Presenting our flow platform work for the first time to an international audience. Notes on the experience.",
    content: "Standing at the poster board, explaining our mobile flow platform to researchers from six countries — this was a moment I had imagined many times. The questions were sharp. Two people wanted to collaborate. One professor from Germany specifically asked about scaling to a container-based mobile lab. That conversation alone was worth the conference fee. I left energised.",
    tags: ["conference", "flow chemistry", "networking", "presentation"]
  },
  {
    id: 3,
    date: "2024-11-20",
    title: "First Successful Artemisinin Flow Run",
    category: "Research",
    summary: "The day the photochemical flow sequence worked end-to-end for the first time.",
    content: "November 20th. The reaction ran. All the way through. Clean conversion, acceptable yield, no blockage. I stared at the HPLC trace for five minutes. Then I called my supervisor. Then I sat down and laughed. Eighteen months of troubleshooting to get to this point. The chemistry works. Now we optimise.",
    tags: ["artemisinin", "breakthrough", "flow chemistry", "milestone", "photochemistry"]
  },
  {
    id: 4,
    date: "2024-08-10",
    title: "Reading: The Innovator's Dilemma",
    category: "Learning",
    summary: "Notes on Christensen's classic and how it applies to pharmaceutical manufacturing in Africa.",
    content: "Christensen's argument about disruptive innovation resonates deeply with what I think about pharmaceutical manufacturing. Small, modular, 'good enough' technologies deployed at the bottom of the market — that is precisely the logic of the mobile flow platform. Not competing with Pfizer's billion-dollar facilities. Making a different product for a different market. The book clarified my thinking considerably.",
    tags: ["reading", "entrepreneurship", "innovation", "pharmaceuticals"]
  },
  {
    id: 5,
    date: "2024-05-04",
    title: "Launching the ICF Leadership Season",
    category: "Leadership",
    summary: "Beginning a new term of leadership within the International Christian Fellowship. Reflections on servant leadership.",
    content: "Leading a community of students from over thirty nations is genuinely one of the most stretching things I do. Every week requires listening across cultural distances, navigating different expectations, holding space for people who are lonely, disoriented, or struggling. I do not have all the answers. But I am learning to lead with questions — and with presence.",
    tags: ["ICF", "leadership", "faith", "community", "reflection"]
  }
];

// ── BOOKS ──────────────────────────────────────────────────
const books = [
  {
    id: 1,
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
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    dateRead: "2023-04",
    category: "Personal Development",
    lessons: "Tiny daily improvements compound into remarkable results. Systems matter more than goals.",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    influence: "Changed how I structure my research days. I now protect a 2-hour focused writing block every morning.",
    rating: 5
  },
  {
    id: 3,
    title: "Shoe Dog",
    author: "Phil Knight",
    dateRead: "2023-11",
    category: "Biography",
    lessons: "Building something from nothing is chaotic, exhausting, and requires sustained irrational commitment.",
    quote: "Don't tell people how to do things, tell them what to do and let them surprise you with their results.",
    influence: "Inspired the early thinking behind Kazi Konnekt. Knight's story reminded me that building businesses is fundamentally about people.",
    rating: 4
  },
  {
    id: 4,
    title: "Mere Christianity",
    author: "C.S. Lewis",
    dateRead: "2022-12",
    category: "Faith",
    lessons: "Rational, careful engagement with the core claims of the Christian faith. Lewis demonstrates that intellectual rigour and deep faith are not enemies.",
    quote: "I believe in Christianity as I believe that the Sun has risen — not only because I see it, but because by it I see everything else.",
    influence: "Deepened my ability to articulate my faith clearly and confidently in an academic environment.",
    rating: 5
  },
  {
    id: 5,
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    dateRead: "2024-01",
    category: "Literature",
    lessons: "The weight of history on individual lives. The importance of telling African stories through African eyes.",
    quote: "The only authentic ending is the one provided here: John 3:16.",
    influence: "A reminder of why African voices — including in science and scholarship — must be amplified, not borrowed.",
    rating: 5
  },
  {
    id: 6,
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    dateRead: "2024-03",
    category: "Entrepreneurship",
    lessons: "Leadership in difficult times requires honesty, decisiveness, and the courage to make decisions without perfect information.",
    quote: "There are no silver bullets to be had; only lead bullets.",
    influence: "Made me more honest with myself about the difficulty of building something — and less afraid of that difficulty.",
    rating: 4
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
    role: "Student Representative",
    org: "Postgraduate Research Committee",
    start: "2022",
    end: "2023",
    description: "Representing PhD student interests in departmental research governance meetings. Advocated for improved support for international researchers.",
    impact: "Successfully proposed improved induction resources for international PhD students."
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
  { year: "2015", title: "Began BSc Chemistry", description: "Enrolled at university, beginning my formal journey in chemistry.", category: "Education" },
  { year: "2019", title: "BSc Awarded — First Class", description: "Graduated with First Class Honours. Awarded best graduating student in Chemistry.", category: "Education" },
  { year: "2019", title: "MSc Research Begins", description: "Started MSc research on pentalongin scaffolds for antileishmanial therapy.", category: "Research" },
  { year: "2021", title: "MSc Awarded — Best Thesis", description: "Completed MSc with best thesis award. Twelve novel compounds synthesised.", category: "Education" },
  { year: "2022", title: "PhD Programme Begins", description: "Relocated to Europe. Began PhD research in flow chemistry and automation.", category: "Research" },
  { year: "2023", title: "ICF Leadership Role", description: "Joined the leadership team of the International Christian Fellowship.", category: "Leadership" },
  { year: "2023", title: "Elite Enterprises Founded", description: "Launched first entrepreneurial initiative combining science and community impact.", category: "Entrepreneurship" },
  { year: "2024", title: "First Successful Artemisinin Flow Run", description: "Achieved end-to-end continuous-flow artemisinin synthesis for the first time.", category: "Research" },
  { year: "2024", title: "International Conference Presentation", description: "Presented flow platform research at a major European flow chemistry conference.", category: "Research" },
  { year: "2025", title: "Manuscript in Preparation", description: "First peer-reviewed manuscript on continuous-flow artemisinin synthesis in preparation.", category: "Research" }
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
