export const profile = {
  name: "K. Senthilkumar",
  title: "Technical Manager",
  tagline: "Welding & Quality Specialist — Oil & Gas",
  location: "Dubai, UAE",
  email: "senkumark@gmail.com",
  phone: "+971 55 799 8618",
  linkedin: "https://www.linkedin.com/in/senthil-kumar-716bb051",
  linkedinLabel: "linkedin.com/in/senthil-kumar-716bb051",
  yearsExperience: 25,
  intlYears: 15,
  summary:
    "Senior Quality, Engineering & Welding Leader with 25+ years of experience, including 15 years in international operations across the Middle East. Extensive expertise in manufacturing, welding, repair, and remanufacturing of Oil & Gas equipment — valves, wellheads, Christmas trees, BOPs, risers, drilling tools, and pressure equipment for onshore and offshore projects.",
  summarySecondary:
    "Strong command of API QMS, ASME codes, AWS standards, and special processes, with a proven record of process optimization, cost reduction, compliance assurance, and cross-functional leadership.",
};

export const keyExpertise: string[] = [
  "Technical & Techno-Commercial Leadership",
  "API Q1 QMS & API Monograms (5CT, 6A, 7-1, 16A, 16C & 16AR)",
  "Welding Engineering (WPS, PQR, WPQ, Weld Mapping)",
  "GTAW, Laser Welding, SAW, SMAW, FCAW, Micro Laser Welding & Brazing",
  "Manufacturing, Repair & Remanufacturing",
  "Special Processes: PWHT, Heat Treatment, Laser Cladding, Shot Peening",
  "QA/QC, Inspection, Testing & Failure Analysis",
  "Vendor Development, Audits & Subcontractor Management",
  "Cost Optimization & Productivity Improvement",
  "ASME, API, AWS, ASTM, NACE Compliance",
];

export type Experience = {
  company: string;
  location: string;
  role: string;
  period: string;
  duration: string;
  companyProfile?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Accurate Edge Group",
    location: "Dubai, UAE",
    role: "Technical Manager",
    period: "Oct 2023 – Present",
    duration: "2+ years",
    points: [
      "Lead technical, welding, and quality functions for Oil & Gas repair and manufacturing projects.",
      "Drive compliance with API/ASME standards and customer specifications.",
      "Ensure execution of technical compliance in line with project-specific approved WPS's through monitoring and frequent process audits.",
      "Provide technical guidance to cross-functional UAE and overseas Quality and Engineering teams on material, welding, and quality requirements.",
      "Design, select, develop, and qualify special process procedures — Welding, Brazing, Heat Treatment — for on-plot piping & pipeline.",
      "Develop and qualify new welding procedures for fabrication and field welding of piping, fittings, spools, vessels, and structural steel across refinery and pipeline projects.",
      "Own material selection, engineering drawing review, and failure investigation analysis.",
    ],
  },
  {
    company: "NTS Amega Global",
    location: "Dubai, UAE",
    role: "Welding & Repair Development Manager",
    period: "Jan 2022 – Oct 2023",
    duration: "2 years",
    companyProfile:
      "Market leader in repair, rental, and manufacturing solutions supporting energy markets worldwide.",
    points: [
      "Developed and qualified welding repair procedures for critical pressure equipment.",
      "Established in-house special processes and improved repair turnaround time.",
      "Led GTAW, Stub Manufacturing, Hard Facing & PTA process improvement, documentation, PQR approval, and Welder Performance Qualification.",
      "Prepared and secured technical approval of WPS/WQTR from clients per project requirements.",
      "Coordinated fabrication shop, site fab/construction, and quality teams to optimize inspection processes and resource utilization.",
    ],
  },
  {
    company: "Aswan International Engineering",
    location: "Dubai, UAE",
    role: "QHSE & Welding Manager",
    period: "Jul 2020 – Jan 2022",
    duration: "1.5 years",
    companyProfile:
      "Established 1979; engineering solutions for Oil & Gas, Heavy Industries, and Process Industries, specializing in manufacturing, repair, and reconditioning of mechanical parts.",
    points: [
      "Managed company-wide QA/QC program; maintained QMS compliance to ISO 9001:2015, API Q1, and product standards API 16A, 16C, 6A, 5CT, 7-1.",
      "Prepared and controlled department budgets and resource allocation.",
      "Directed preparation and issue control of QMS documentation.",
      "Led continual improvement of integrated Health, Safety & Environmental management.",
      "Planned and ran the internal audit program; managed external third-party audits and corrective/preventive actions.",
      "Tracked quality KPIs and maintained special-process validation records.",
    ],
  },
  {
    company: "DServ — Delta Corporation Group",
    location: "Qatar",
    role: "Quality & HSE Manager / Management Representative",
    period: "Apr 2017 – Mar 2019",
    duration: "2 years",
    companyProfile:
      "Oilfield service company: manufacture, remanufacture, refurbishment, repair, and rental of drilling equipment — API 6D check/ball/plug/gate valves, API 6A wellheads & X-mas trees, API 16C choke & kill manifolds.",
    points: [
      "Managed company-wide QA/QC program in compliance with ISO 9001, API Q1 & API Q2.",
      "Held authority to hold, suspend, or stop production and deliveries where required for compliance.",
      "Evaluated and selected vendors; led vendor audits per API Spec Q1 (9th ed.) and ISO 9001:2015.",
      "Served as Management Representative for ISO 9001, API Q1 & API Q2; acted as Lead Auditor for internal audits.",
      "Delivered casing connector projects for Qatar Gas & ExxonMobil; QA/QC for QAPCO, QP-NGL, QP-Dukhan, QP-Ras Laffan & Qchem refinery projects.",
    ],
  },
  {
    company: "MTQ Oilfield Service WLL",
    location: "Bahrain",
    role: "QA/QC – Assistant Manager & QMR",
    period: "Nov 2014 – Mar 2017",
    duration: "2.5 years",
    companyProfile:
      "Manufacture, repair, refurbishment, rental & servicing of oilfield equipment; steel structure fabrication and threading services.",
    points: [
      "Headed the QA/QC function, coordinating Sales, Production, and Special Projects for the Bahrain operation.",
      "Served as Management Representative for QMS (API Q1 9th Edition, ISO 9001:2015).",
      "Ran internal audits on the Integrated Management System and vendor audits per API Spec Q1.",
      "Authored quality and operating procedures, risk assessments, and work instructions compliant to API Q1.",
      "Qualified WPS/PQR/WQR per ASME Section IX, API, and NACE across SAW, GMAW, GTAW, Stub Manufacturing, Hard Facing & PTA processes.",
    ],
  },
  {
    company: "Schoeller Bleckmann Oilfield Equipment ME FZE",
    location: "Dubai, UAE",
    role: "Product / QC Engineer",
    period: "Nov 2007 – Nov 2014",
    duration: "7 years",
    points: [
      "Costed and evaluated products against customer requirements from initial design through delivery.",
      "Led product design, manufacturing scheduling, and customer/vendor coordination.",
      "Managed GTAW, Stub Manufacturing, Hard Facing & PTA process improvement, PQR approval, and Welder Performance Qualification.",
      "Ran technical bid evaluation for welding consumables, pipe, plate materials, and pressure piping components.",
      "Performed metallurgical inspection and failure analysis for pipes and components.",
      "Directed workshop activity: machining drawings, material handling, NDT inspection, and delivery documentation.",
    ],
  },
  {
    company: "TVS-Brakes India Ltd",
    location: "Chennai, India",
    role: "Assistant Manager — Materials, Engg. R&D",
    period: "Oct 2000 – Oct 2007",
    duration: "7 years",
    points: [],
  },
  {
    company: "LGB-Steel & PRICOL",
    location: "Coimbatore, India",
    role: "Engineer — Metallurgy Department",
    period: "Nov 1995 – Oct 2000",
    duration: "5 years",
    points: [],
  },
];

export const education = [
  {
    degree: "B.E. — Metallurgy",
    institution: "PSG College of Technology",
  },
  {
    degree: "MBA — Production & Quality",
    institution: "Annamalai University",
  },
];

export const certifications: string[] = [
  "ISO 9001:2015 Lead Auditor (QMS) — IRCA Certificate No. 1016342",
  "ISO 14001:2015 Lead Auditor — IRCA Certificate No. BTE/C1171/01",
  "API Spec Q1 Lead Auditor — API-U Training, Certificate No. 2020-165-06.20",
  "API Spec Q2 Practitioner — API-U Learning, Certificate No. 2016-03772",
  "AWS Certified Welding Inspector — Certificate No. 12021301 (Exp. 1 Feb 2027)",
  "NDE Level II (RT, UT, PT & MPT) — SNT-TC-1A, ASNT",
  "IMS/ISO Internal Auditor — ISO 9001:2015, ISO 14001:2015, ISO 45001:2018",
  "ASME BPV Code 2023 — Updates & Key Changes Training",
];

export const standards: string[] = [
  "API Q1",
  "API 5CT",
  "API 6A",
  "API 6D",
  "API 7-1",
  "API 16A",
  "API 16C",
  "API 16AR",
  "ASME Section IX",
  "ASME BPV Code",
  "AWS D1.1",
  "ASTM",
  "NACE MR0175",
  "ISO 9001:2015",
  "ISO 14001:2015",
  "ISO 45001:2018",
];

export const weldingProcesses: string[] = [
  "GTAW (Automatic & Manual)",
  "Laser Welding",
  "Micro Laser Welding",
  "SAW",
  "SMAW",
  "FCAW",
  "GMAW",
  "Brazing",
  "Hard Facing & PTA",
  "Stub Manufacturing",
];
