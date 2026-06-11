export const profile = {
  name: 'Hansheng Liu',
  email: '2004hliu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hanshengliu/',
  location: 'West Lafayette, IN / Naperville, IL',
  school: 'Purdue University, 2022–2026',
  nextRole: 'Security Risk & Compliance',
  nextOrg: 'Texas Instruments',
  nextDate: 'July 2026'
}

export const heroFacts = [
  { label: 'Next post', value: 'Texas Instruments' },
  { label: 'Degree', value: 'Purdue ’26' },
  { label: 'Focus', value: 'Security + Data' }
]

export const dossierMeta = [
  { label: 'Subject', value: 'Liu, Hansheng' },
  { label: 'Focus', value: 'Security risk · Digital forensics' },
  { label: 'Education', value: 'Purdue University, 2022–2026' },
  { label: 'Degrees', value: 'B.S. Cybersecurity · B.A. Digital Criminology · E&I Certificate' },
  { label: 'Next post', value: 'Texas Instruments · 07/2026' },
  { label: 'Base', value: 'West Lafayette, IN' }
]

export const work = [
  {
    organization: 'Texas Instruments',
    role: 'Security Risk & Compliance',
    period: 'From 07/2026',
    logo: 'logos/texas-instruments.svg',
    logoAlt: 'Texas Instruments logo',
    incoming: true,
    points: [
      'Returning to Texas Instruments to continue building security risk, compliance, and operational visibility work across enterprise environments.',
      'Bringing prior TI experience in Splunk dashboards, Python automation, Cribl pipelines, evidence collection, and risk metrics into a broader security role.'
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
      'Built predictive modeling pipelines integrating climate datasets, weather APIs, and Google Trends to assess water-related risks, with Power BI dashboards tracking drought, flood, and water stress across six U.S. states.',
      'Automated daily ingestion with Python and Power Query, and applied ML forecasting that improved drought and flood prediction accuracy by 25%.'
    ],
    tags: ['Power BI', 'Python', 'ML forecasting', 'Risk modeling']
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
      'Developed an XGBoost soil moisture prediction model (R² = 0.90) using weather APIs, applying PCA to identify the top factors explaining 80% of variance.',
      'Built ArcGIS, Tableau, and Python visualizations to support precision agriculture analysis and communicate model behavior.'
    ],
    tags: ['XGBoost', 'ArcGIS', 'Tableau', 'PCA']
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
    focus: 'Predictive modeling and risk dashboards that drove real decisions — from drought forecasting to soil moisture prediction (R² = 0.90).',
    tools: [
      'Python',
      'Pandas',
      'SQL',
      'R',
      'Jupyter',
      'XGBoost',
      'scikit-learn',
      'ML forecasting',
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
