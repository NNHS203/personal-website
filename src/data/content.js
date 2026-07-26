export const profile = {
  name: 'Hansheng Liu',
  email: '2004hliu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hanshengliu/',
  location: 'Dallas, TX',
  school: 'Purdue University, graduated May 2026',
  currentRole: 'IT Security Analyst, Risk & Compliance',
  currentOrg: 'Texas Instruments',
  currentSince: 'July 2026'
}

export const heroFacts = [
  { label: 'Current role', value: 'Texas Instruments' },
  { label: 'Graduated', value: 'Purdue · May ’26' },
  { label: 'Focus', value: 'Security + Data' }
]

export const dossierMeta = [
  { label: 'Subject', value: 'Liu, Hansheng' },
  { label: 'Focus', value: 'Security risk · Digital forensics' },
  { label: 'Education', value: 'Purdue University · Graduated 05/2026' },
  { label: 'Degrees', value: 'B.S. Cybersecurity · B.A. Digital Criminology · E&I Certificate' },
  { label: 'Current role', value: 'Texas Instruments · 07/2026–Present' },
  { label: 'Base', value: 'Dallas, TX' }
]

export const work = [
  {
    organization: 'Texas Instruments',
    role: 'IT Security Analyst, Risk & Compliance',
    period: '07/2026 — Present',
    logo: 'logos/texas-instruments.svg',
    logoAlt: 'Texas Instruments logo',
    points: [
      'Supporting enterprise security risk and compliance work with an emphasis on control visibility, evidence collection, and risk reporting.',
      'Building on prior TI experience with Splunk dashboards, Python automation, Cribl pipelines, and operational risk metrics.'
    ],
    tags: ['Security risk', 'Compliance', 'Splunk', 'Automation']
  },
  {
    organization: 'Indiana State Police',
    role: 'Cybercrime & Digital Forensics Intern',
    period: '08/2025 — 12/2025',
    logo: 'logos/indiana-state-police.svg',
    logoAlt: 'Indiana State Police logo',
    points: [
      'Completed cross-divisional training across Field Enforcement, SWAT, Laboratory, Digital Forensics, and Investigations.',
      'Participated in ride-alongs and unit briefings, observing coordination during investigations and public-safety responses.',
      'Assisted investigators by supporting digital evidence review and understanding how actionable indicators are identified.'
    ],
    tags: ['Digital forensics', 'Evidence review', 'Investigations']
  },
  {
    organization: 'Texas Instruments',
    role: 'IT Security Risk & Compliance Intern',
    period: '05/2025 — 08/2025',
    logo: 'logos/texas-instruments.svg',
    logoAlt: 'Texas Instruments logo',
    points: [
      'Designed enterprise-wide Splunk SIEM dashboards analyzing 800K+ logs, improving visibility into phishing, insider threats, and compliance gaps.',
      'Automated API ingestion pipelines with Python and Cribl, cutting manual workload by 90% and reducing open critical risk by 30% through real-time monitoring, audit evidence collection, and vulnerability tracking.',
      'Delivered hands-on training sessions to 30+ staff on Splunk, Cribl, and API workflows.'
    ],
    tags: ['Splunk', 'SIEM', 'Python ETL', 'Cribl']
  },
  {
    organization: 'PepsiCo',
    role: 'Environmental Risk Researcher',
    period: '08/2024 — 05/2025',
    logo: 'logos/pepsico.svg',
    logoAlt: 'PepsiCo logo',
    points: [
      'Co-built an environmental monitoring dashboard for PepsiCo manufacturing sites across six U.S. states, benchmarking current weather and water-risk conditions against 10 years of historical data.',
      'Automated daily weather API ingestion and integrated National Weather Service and Google Trends data in Power BI and Power Query for state- and county-level monitoring of drought, flood, rainfall, snow, humidity, and wind.'
    ],
    tags: ['Power BI', 'Power Query', 'API integration', 'Environmental risk'],
    evidence: [
      {
        label: 'Official project page',
        url: 'https://datamine.purdue.edu/pepsico/'
      },
      {
        label: '2025 symposium poster',
        url: 'https://datamine.purdue.edu/posters/TDM_Symposium2025_Poster_PepsiCo_EnvironmentalRisks.pdf'
      }
    ]
  },
  {
    organization: 'Sinopec',
    role: 'Cybersecurity Intern',
    period: '07/2024 — 08/2024',
    logo: 'logos/sinopec.svg',
    logoAlt: 'Sinopec logo',
    points: [
      'Monitored 200K+ security events and logs daily across SIEM and EDR, triaging high-severity alerts for infrastructure protecting 100+ subsidiaries and 500K+ employees behind firewalls, IPS, and WAFs.',
      'Served on the Blue Team in a National Cybersecurity Defense Exercise — intercepted simulated SQLi, XSS, and brute-force attacks, performed forensic remediation on compromised servers, and maintained health checks for 80+ detection servers.'
    ],
    tags: ['SIEM', 'EDR', 'Blue team', 'Forensic remediation']
  },
  {
    organization: 'John Deere',
    role: 'Soil Moisture Researcher',
    period: '01/2024 — 05/2024',
    logo: 'logos/john-deere.svg',
    logoAlt: 'John Deere logo',
    points: [
      'Co-developed an XGBoost soil-moisture prediction model that reached R² = 0.90 on the test set, using soil and weather data sourced through USDA SSURGO and Meteostat.',
      'Applied PCA to seven weather variables, with three principal components explaining 80% of the information, and communicated spatial patterns through ArcGIS, Tableau, and Python visualizations.'
    ],
    tags: ['XGBoost', 'ArcGIS', 'Tableau', 'PCA'],
    evidence: [
      {
        label: 'Official project page',
        url: 'https://datamine.purdue.edu/current_partners/john-deere/'
      },
      {
        label: '2024 symposium poster',
        url: 'https://datamine.purdue.edu/wp-content/uploads/2024/07/TDM_Symposium2024_Poster_JohnDeere_Soil_Moisture.pdf'
      }
    ]
  }
]

export const tracks = [
  {
    title: 'SIEM, detection & threat operations',
    focus: 'Building detections and running them in production — alerting, log correlation, threat hunting, incident response, and blue-team operations at enterprise scale.',
    tools: [
      'Splunk SIEM',
      'Cribl',
      'Alert development',
      'Log analysis & correlation',
      'Detection engineering',
      'Threat hunting',
      'Incident response',
      'Blue team operations',
      'EDR triage',
      'Phishing metrics',
      'Risk analytics'
    ]
  },
  {
    title: 'Adversary, network & offensive security',
    focus: 'Mapping attacker behavior to the wire — TTPs, packet-level analysis, and offensive testing in controlled legal lab environments.',
    tools: [
      'MITRE ATT&CK',
      'Packet-level analysis',
      'Wireshark',
      'TCP/IP',
      'DNS',
      'HTTP/HTTPS',
      'OSI model',
      'Kali Linux',
      'Nmap',
      'Metasploit',
      'Burp Suite',
      'Hydra',
      'John the Ripper'
    ]
  },
  {
    title: 'Digital forensics & cybercrime investigation',
    focus: 'Forensically sound acquisition, preservation, analysis, and presentation — backed by cybercrime theory and live casework exposure.',
    tools: [
      'Magnet AXIOM',
      'Cellebrite',
      'Autopsy',
      'FTK Imager',
      'Forensic remediation',
      'Chain of custody',
      'Evidence reports',
      'Digital evidence review'
    ]
  },
  {
    title: 'Systems, cloud & infrastructure',
    focus: 'Deploying, administering, and hardening workloads across enterprise operating systems, networks, and cloud environments.',
    tools: [
      'AWS',
      'Docker',
      'Linux',
      'Windows Server',
      'Active Directory',
      'VMware',
      'Bash',
      'PowerShell',
      'DNS & DHCP',
      'Cloud & security APIs',
      'Firewalls · IPS · WAF',
      'System hardening'
    ]
  },
  {
    title: 'Data, ML & applied analytics',
    focus: 'Predictive modeling and risk dashboards built for real operational questions — from environmental monitoring to soil moisture prediction (R² = 0.90).',
    tools: [
      'Python',
      'Pandas',
      'SQL',
      'R',
      'Jupyter',
      'XGBoost',
      'scikit-learn',
      'Environmental risk monitoring',
      'PCA',
      'Power BI',
      'Tableau',
      'ArcGIS',
      'Power Query'
    ]
  },
  {
    title: 'Software delivery & automation',
    focus: 'Python pipelines that remove manual work, plus full-stack builds that ship — APIs, mobile apps, payments, and clear documentation.',
    tools: [
      'REST APIs',
      'API ingestion',
      'Automation pipelines',
      'Insomnia',
      'Java',
      'React Native',
      'Node.js',
      'Firebase',
      'Supabase',
      'Stripe API',
      'Flask',
      'GitHub',
      'Technical writing'
    ]
  }
]

export const projects = [
  {
    name: 'Cyber Threat Awareness & Prevention',
    type: 'Security education program',
    stack: ['Phishing simulation', 'Training materials', 'Awareness metrics'],
    summary:
      'Designed phishing simulations and training materials for 2,000+ School District 203 staff members, measurably improving security awareness across the district.'
  },
  {
    name: 'Jobbit',
    type: 'Full-stack mobile app',
    stack: ['React Native', 'Supabase', 'Authentication'],
    summary:
      'A mobile job-tracking application for structured job notes, application status tracking, and a cleaner workflow around recruiting activity.'
  },
  {
    name: 'Budget Bites',
    type: 'Mobile food-ordering app',
    stack: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
    summary:
      'A mobile ordering workflow for discounted food boxes — partner restaurant pickup, authentication, live content, and payments.'
  },
  {
    name: 'Purrfect',
    type: 'Social mobile app',
    stack: ['React Native', 'Supabase', 'Realtime'],
    summary:
      'A pet-focused social mobile application with user authentication, profile flows, and real-time interaction patterns.'
  },
  {
    name: 'Half Café App',
    type: 'Cafeteria ordering web app',
    stack: ['Python', 'Flask', 'AWS', 'Docker'],
    summary:
      'Developed and deployed an online cafeteria ordering system on AWS, giving staff a remote order queue during school hours.'
  }
]

const toolHighlights = [
  'Splunk SIEM',
  'Python',
  'MITRE ATT&CK',
  'Wireshark',
  'Cribl',
  'Magnet AXIOM',
  'Cellebrite',
  'Autopsy',
  'Metasploit',
  'Nmap',
  'AWS',
  'Docker',
  'Power BI'
]

export const marqueeTools = [...new Set([...toolHighlights, ...tracks.flatMap((track) => track.tools)])]
