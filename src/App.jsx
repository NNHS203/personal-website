import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import GlobalStyles from '@mui/material/GlobalStyles'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import CodeIcon from '@mui/icons-material/Code'
import EmailIcon from '@mui/icons-material/Email'
import LightModeIcon from '@mui/icons-material/LightMode'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
}

const modeTokens = {
  dark: {
    pageBg: '#03050a',
    sectionBg: '#03050a',
    toolkitBg: '#07111f',
    projectBg: '#f8fbff',
    textPrimary: '#f8fbff',
    textStrong: '#ffffff',
    textMuted: 'rgba(248,251,255,0.72)',
    textSubtle: 'rgba(248,251,255,0.56)',
    projectText: '#1d1d1f',
    projectMuted: '#6e6e73',
    headerBg: 'rgba(3,5,10,0.9)',
    headerBorder: 'rgba(124,245,255,0.14)',
    headerText: '#f8fbff',
    accent: '#7cf5ff',
    accentBlue: '#8ec5ff',
    gridLine: 'rgba(124,245,255,0.08)',
    panelBg: 'rgba(9,14,25,0.72)',
    panelBgStrong: 'linear-gradient(145deg, rgba(10,16,28,0.86), rgba(4,8,17,0.9) 46%, rgba(0,113,227,0.14))',
    panelBorder: 'rgba(124,245,255,0.18)',
    panelShadow: '0 22px 90px rgba(0,113,227,0.14)',
    chipBg: 'rgba(255,255,255,0.1)',
    chipText: '#ffffff',
    heroWash: 'radial-gradient(circle, rgba(0,113,227,0.42), rgba(124,245,255,0.17) 38%, transparent 68%)',
    heroOrb: 'radial-gradient(circle, rgba(124,245,255,0.18), rgba(142,197,255,0.09) 32%, transparent 68%)',
    railBg: 'linear-gradient(90deg, rgba(124,245,255,0.08), rgba(255,255,255,0.03), rgba(142,197,255,0.07))'
  },
  light: {
    pageBg: '#f5f8fc',
    sectionBg: '#f6fbff',
    toolkitBg: '#eef6fb',
    projectBg: '#ffffff',
    textPrimary: '#111827',
    textStrong: '#07111f',
    textMuted: 'rgba(17,24,39,0.7)',
    textSubtle: 'rgba(17,24,39,0.54)',
    projectText: '#111827',
    projectMuted: '#5b6472',
    headerBg: 'rgba(255,255,255,0.9)',
    headerBorder: 'rgba(0,113,227,0.16)',
    headerText: '#111827',
    accent: '#0071e3',
    accentBlue: '#0066cc',
    gridLine: 'rgba(0,113,227,0.08)',
    panelBg: 'rgba(255,255,255,0.84)',
    panelBgStrong: 'linear-gradient(145deg, rgba(255,255,255,0.92), rgba(244,250,255,0.94) 48%, rgba(0,113,227,0.08))',
    panelBorder: 'rgba(0,113,227,0.16)',
    panelShadow: '0 22px 80px rgba(0,50,120,0.12)',
    chipBg: 'rgba(0,113,227,0.08)',
    chipText: '#0d3158',
    heroWash: 'radial-gradient(circle, rgba(0,113,227,0.18), rgba(124,245,255,0.16) 38%, transparent 68%)',
    heroOrb: 'radial-gradient(circle, rgba(0,113,227,0.14), rgba(124,245,255,0.12) 32%, transparent 68%)',
    railBg: 'linear-gradient(90deg, rgba(0,113,227,0.08), rgba(255,255,255,0.6), rgba(124,245,255,0.16))'
  }
}

const work = [
  {
    organization: 'Texas Instruments',
    role: 'Incoming Security Risk & Compliance',
    period: 'Starting July 26, 2026',
    logo: 'logos/texas-instruments.svg',
    logoAlt: 'Texas Instruments logo',
    points: [
      'Returning to Texas Instruments to continue building security risk, compliance, and operational visibility work across enterprise environments.',
      'Bringing prior TI experience in Splunk dashboards, Python automation, Cribl pipelines, evidence collection, and risk metrics into a broader security role.'
    ],
    tags: ['Incoming', 'Security risk', 'Compliance', 'Splunk', 'Automation']
  },
  {
    organization: 'Indiana State Police',
    role: 'Cybercrime & Digital Forensics Intern',
    period: 'August 2025 - December 2025',
    logo: 'logos/indiana-state-police.svg',
    logoAlt: 'Indiana State Police logo',
    points: [
      'Completed cross-divisional training across Field Enforcement, SWAT, Laboratory, Digital Forensics, and Investigations.',
      'Supported digital evidence review workflows and observed how actionable indicators are identified during investigative and public-safety responses.'
    ],
    tags: ['Digital forensics', 'Evidence review', 'Investigations', 'Public safety']
  },
  {
    organization: 'Texas Instruments',
    role: 'IT Security Risk & Compliance Intern',
    period: 'May 2025 - August 2025',
    logo: 'logos/texas-instruments.svg',
    logoAlt: 'Texas Instruments logo',
    points: [
      'Designed enterprise-wide Splunk SIEM dashboards analyzing 800K+ logs for phishing, insider threat, compliance gaps, audit evidence, and risk visibility.',
      'Automated API ingestion pipelines with Python and Cribl, reducing manual workload and enabling real-time monitoring, evidence collection, and vulnerability tracking.'
    ],
    tags: ['Splunk', 'SIEM', 'Python ETL', 'Cribl', 'Risk metrics']
  },
  {
    organization: 'PepsiCo / Purdue The Data Mine',
    role: 'Environmental Risk Researcher',
    period: 'August 2024 - May 2025',
    logo: 'logos/pepsico.svg',
    logoAlt: 'PepsiCo logo',
    points: [
      'Built predictive modeling pipelines integrating climate datasets, weather APIs, and Google Trends to assess water-related operating risks.',
      'Designed Power BI dashboards and automated daily ingestion with Python and Power Query for drought, flood, and water-stress indicators across six U.S. states.'
    ],
    tags: ['Power BI', 'Python', 'Power Query', 'APIs', 'Risk modeling']
  },
  {
    organization: 'Sinopec SLOF - Victory Soft',
    role: 'Cybersecurity Intern',
    period: 'July 2024 - August 2024',
    logo: 'logos/sinopec.svg',
    logoAlt: 'Sinopec logo',
    points: [
      'Monitored 200K+ security events and logs daily across SIEM and EDR while triaging high-severity alerts and maintaining detection infrastructure.',
      'Administered firewalls, IPS, and WAFs for critical infrastructure and served on blue-team exercise work involving SQLi, XSS, brute-force, and remediation.'
    ],
    tags: ['SIEM', 'EDR', 'WAF', 'IPS', 'Blue team']
  },
  {
    organization: 'John Deere / Purdue The Data Mine',
    role: 'Soil Moisture Researcher',
    period: 'January 2024 - May 2024',
    logo: 'logos/john-deere.svg',
    logoAlt: 'John Deere logo',
    points: [
      'Developed an XGBoost soil moisture prediction model using weather APIs and applied PCA to identify top factors explaining 80% of variance.',
      'Built ArcGIS, Tableau, and Python visualizations to support precision agriculture analysis and communicate model behavior.'
    ],
    tags: ['XGBoost', 'Pandas', 'ArcGIS', 'Tableau', 'PCA']
  }
]

const tracks = [
  {
    title: 'Security operations and risk analytics',
    focus: 'Security foundations, risk thinking, cyberlaw, ethics, and measurable operational controls.',
    tools: ['Splunk', 'Cribl', 'Python ETL', 'REST APIs', 'Insomnia', 'Phishing metrics']
  },
  {
    title: 'Offensive security and vulnerability testing',
    focus: 'Network, web, and infrastructure testing in controlled legal and ethical lab environments.',
    tools: ['Kali Linux', 'Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'Hydra', 'John the Ripper']
  },
  {
    title: 'Digital forensics and cybercrime investigation',
    focus: 'Forensically sound acquisition, preservation, analysis, presentation, and cybercrime theory.',
    tools: ['Magnet AXIOM', 'Cellebrite', 'Autopsy', 'FTK Imager', 'Chain of custody', 'Evidence reports']
  },
  {
    title: 'Systems, UNIX, and network administration',
    focus: 'Enterprise operating systems, routed and switched networks, directory services, virtualization, and hardening.',
    tools: ['Linux', 'Windows Server', 'Active Directory', 'VMware', 'Bash', 'PowerShell', 'DNS', 'DHCP']
  },
  {
    title: 'Data, ML, and applied analytics',
    focus: 'Database fundamentals, applied machine learning, statistics, and corporate-partner data products.',
    tools: ['Python', 'Pandas', 'SQL', 'R', 'Jupyter', 'Power BI', 'Tableau', 'ArcGIS', 'scikit-learn']
  },
  {
    title: 'Software delivery and technical communication',
    focus: 'Readable code, object-oriented programming, system development, documentation, and stakeholder communication.',
    tools: ['Java', 'React Native', 'Node.js', 'Firebase', 'Docker', 'GitHub', 'Stripe API', 'Technical writing']
  }
]

const projects = [
  {
    name: 'Jobbit',
    type: 'Full-stack mobile app',
    stack: ['React Native', 'Supabase', 'Authentication', 'Structured notes'],
    summary: 'A mobile job-tracking application for structured job notes, application status tracking, and a cleaner workflow around recruiting activity.'
  },
  {
    name: 'Budget Bites',
    type: 'Mobile food-ordering app',
    stack: ['React Native', 'Node.js', 'Firebase', 'Sanity', 'Stripe'],
    summary: 'A mobile ordering workflow for discounted food boxes, partner restaurant pickup, authentication, live content, and payments.'
  },
  {
    name: 'Purrfect',
    type: 'Full-stack social mobile app',
    stack: ['React Native', 'Supabase', 'Realtime', 'Authentication'],
    summary: 'A pet-focused social mobile application with user authentication, profile flows, and real-time interaction patterns.'
  },
  {
    name: 'Cyber Threat Awareness & Prevention',
    type: 'Security education project',
    stack: ['Phishing simulation', 'Training materials', 'Awareness metrics'],
    summary: 'Designed phishing simulations and training materials for 2,000+ School District 203 staff members to improve security awareness.'
  },
  {
    name: 'Half Cafe App',
    type: 'Full-stack cafeteria ordering web app',
    stack: ['Python', 'Flask', 'HTML/CSS', 'AWS', 'Docker'],
    summary: 'Developed and deployed an online cafeteria ordering system on AWS, giving staff a remote order queue during school hours.'
  }
]

const toolHighlights = [
  'Splunk',
  'Python',
  'SQL',
  'Kali Linux',
  'Wireshark',
  'Metasploit',
  'Magnet AXIOM',
  'Cellebrite',
  'Autopsy',
  'Active Directory',
  'Power BI',
  'ArcGIS'
]

const marqueeTools = [...new Set([...toolHighlights, ...tracks.flatMap((track) => track.tools)])]

function SectionTitle({ label, title, children, light = false }) {
  return (
    <Box sx={{ maxWidth: 900, mb: { xs: 4, md: 8 } }}>
      <Typography
        sx={{
          color: light ? 'var(--text-subtle)' : 'var(--project-muted)',
          fontSize: 13,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: 0
        }}
      >
        {label}
      </Typography>
      <Typography
        component="h2"
        sx={{
          mt: 1,
          color: light ? 'var(--text-strong)' : 'var(--project-text)',
          fontSize: { xs: 34, sm: 52, md: 72 },
          fontWeight: 700,
          lineHeight: { xs: 1.04, md: 0.98 },
          letterSpacing: 0
        }}
      >
        {title}
      </Typography>
      {children && (
        <Typography
          sx={{
            mt: 2.5,
            color: light ? 'var(--text-muted)' : 'var(--project-muted)',
            fontSize: { xs: 17, md: 21 },
            lineHeight: 1.55
          }}
        >
          {children}
        </Typography>
      )}
    </Box>
  )
}

function Panel({ children, dark = false, sx }) {
  return (
    <Box
      sx={{
        height: '100%',
        p: { xs: 2.5, md: 4 },
        borderRadius: '8px',
        border: dark ? '1px solid var(--panel-border)' : '1px solid rgba(0,0,0,0.08)',
        bgcolor: dark ? 'var(--panel-bg)' : 'rgba(255,255,255,0.86)',
        boxShadow: dark ? 'var(--panel-shadow)' : '0 22px 70px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(28px)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': dark
          ? {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'linear-gradient(120deg, transparent 0%, var(--panel-shine) 28%, transparent 42%)',
              transform: 'translateX(-120%)',
              animation: 'panelShine 7s ease-in-out infinite'
            }
          : {},
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

function ScrambleLabel({ children }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        color: 'var(--accent)',
        fontFamily: '"SF Mono", "Menlo", "Consolas", monospace',
        fontSize: 12,
        fontWeight: 800,
        textTransform: 'uppercase',
        '&::before': {
          content: '"//"',
          color: 'var(--accent-muted)'
        },
        '&::after': {
          content: '"_"',
          animation: 'cursorBlink 1s steps(2, start) infinite'
        }
      }}
    >
      {children}
    </Box>
  )
}

function SkillMarquee() {
  const rows = [marqueeTools, [...marqueeTools].reverse()]

  return (
    <Stack
      spacing={1.2}
      sx={{
        my: { xs: 3.5, md: 7 },
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, #000 7%, #000 93%, transparent)'
      }}
    >
      {rows.map((row, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            width: 'max-content',
            gap: 1,
            animation: `${index === 0 ? 'marqueeLeft' : 'marqueeRight'} ${index === 0 ? 32 : 38}s linear infinite`
          }}
        >
          {[...row, ...row].map((tool, toolIndex) => (
            <Box
              key={`${tool}-${toolIndex}`}
              sx={{
                px: 2,
                py: 1,
                borderRadius: 999,
                color: 'var(--chip-text)',
                bgcolor: 'var(--chip-bg)',
                border: '1px solid var(--panel-border)',
                fontSize: { xs: 12, md: 13 },
                fontWeight: 750,
                whiteSpace: 'nowrap',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)'
              }}
            >
              {tool}
            </Box>
          ))}
        </Box>
      ))}
    </Stack>
  )
}

function App() {
  const [themeMode, setThemeMode] = React.useState(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('portfolio-theme') || 'light'
  })
  const tokens = modeTokens[themeMode]

  React.useEffect(() => {
    const scrollToHash = () => {
      const targetId = window.location.hash.slice(1)
      if (!targetId) return
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: 'start' })
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  React.useEffect(() => {
    window.localStorage.setItem('portfolio-theme', themeMode)
  }, [themeMode])

  return (
    <Box
      data-theme={themeMode}
      sx={{
        minHeight: '100vh',
        bgcolor: 'var(--page-bg)',
        color: 'var(--text-primary)',
        overflowX: 'hidden',
        '--page-bg': tokens.pageBg,
        '--section-bg': tokens.sectionBg,
        '--toolkit-bg': tokens.toolkitBg,
        '--project-bg': tokens.projectBg,
        '--text-primary': tokens.textPrimary,
        '--text-strong': tokens.textStrong,
        '--text-muted': tokens.textMuted,
        '--text-subtle': tokens.textSubtle,
        '--project-text': tokens.projectText,
        '--project-muted': tokens.projectMuted,
        '--header-bg': tokens.headerBg,
        '--header-border': tokens.headerBorder,
        '--header-text': tokens.headerText,
        '--accent': tokens.accent,
        '--accent-blue': tokens.accentBlue,
        '--accent-muted': themeMode === 'dark' ? 'rgba(124,245,255,0.45)' : 'rgba(0,113,227,0.42)',
        '--grid-line': tokens.gridLine,
        '--panel-bg': tokens.panelBg,
        '--panel-bg-strong': tokens.panelBgStrong,
        '--panel-border': tokens.panelBorder,
        '--panel-shadow': tokens.panelShadow,
        '--panel-shine': themeMode === 'dark' ? 'rgba(124,245,255,0.1)' : 'rgba(0,113,227,0.08)',
        '--chip-bg': tokens.chipBg,
        '--chip-text': tokens.chipText,
        '--hero-wash': tokens.heroWash,
        '--hero-orb': tokens.heroOrb,
        '--rail-bg': tokens.railBg
      }}
    >
      <GlobalStyles
        styles={{
          html: {
            scrollPaddingTop: '72px'
          },
          body: {
            overflowX: 'hidden'
          },
          '@keyframes auroraShift': {
            '0%': { transform: 'translate3d(-10%, -8%, 0) rotate(0deg)', opacity: 0.7 },
            '50%': { transform: 'translate3d(8%, 6%, 0) rotate(8deg)', opacity: 1 },
            '100%': { transform: 'translate3d(-10%, -8%, 0) rotate(0deg)', opacity: 0.7 }
          },
          '@keyframes marqueeLeft': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-50%)' }
          },
          '@keyframes marqueeRight': {
            from: { transform: 'translateX(-50%)' },
            to: { transform: 'translateX(0)' }
          },
          '@keyframes panelShine': {
            '0%, 58%': { transform: 'translateX(-120%)' },
            '76%, 100%': { transform: 'translateX(120%)' }
          },
          '@keyframes cursorBlink': {
            '0%, 45%': { opacity: 1 },
            '46%, 100%': { opacity: 0 }
          },
          '@keyframes floatConsole': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-14px)' }
          },
          '@keyframes ringSpin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' }
          },
          '@keyframes heroDrift': {
            '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
            '50%': { transform: 'translate3d(26px, -18px, 0) scale(1.04)' }
          },
          '@keyframes scanline': {
            from: { transform: 'translateY(-100%)' },
            to: { transform: 'translateY(520%)' }
          }
        }}
      />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'var(--header-bg)',
          color: 'var(--header-text)',
          borderBottom: '1px solid var(--header-border)',
          backdropFilter: 'saturate(180%) blur(20px)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 52 }}>
            <Typography sx={{ flexGrow: 1, fontSize: 15, fontWeight: 700 }}>Hansheng Liu</Typography>
            <Stack direction="row" spacing={{ xs: 1, sm: 2.5 }} alignItems="center">
              {['Work', 'Toolkit', 'Projects'].map((item) => (
                <Button
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  sx={{ display: { xs: 'none', sm: 'inline-flex' }, color: 'var(--header-text)', opacity: 0.82, minWidth: 0, px: 1, fontSize: 13, textTransform: 'none' }}
                >
                  {item}
                </Button>
              ))}
              <Button
                onClick={() => setThemeMode((mode) => (mode === 'dark' ? 'light' : 'dark'))}
                aria-label={`Switch to ${themeMode === 'dark' ? 'light' : 'dark'} mode`}
                sx={{
                  minWidth: 36,
                  width: 36,
                  height: 36,
                  p: 0,
                  borderRadius: 999,
                  color: 'var(--header-text)',
                  border: '1px solid var(--header-border)',
                  bgcolor: themeMode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,113,227,0.06)'
                }}
              >
                {themeMode === 'dark' ? <LightModeIcon sx={{ fontSize: 18 }} /> : <DarkModeIcon sx={{ fontSize: 18 }} />}
              </Button>
              <Button
                href="https://www.linkedin.com/in/hanshengliu/"
                target="_blank"
                rel="noreferrer"
                variant="contained"
                sx={{ bgcolor: 'var(--accent)', color: themeMode === 'dark' ? '#03050a' : '#ffffff', borderRadius: 999, px: { xs: 1.8, sm: 2 }, py: 0.7, fontSize: 13, textTransform: 'none', boxShadow: '0 0 28px rgba(124,245,255,0.35)' }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ pt: 6.5, background: 'var(--page-bg)' }}>
        <Box
          sx={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.72,
            backgroundImage:
              'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.85), transparent 74%)'
          }}
        />
        <Box
          sx={{
            position: 'fixed',
            width: 620,
            height: 620,
            right: '-12%',
            top: '-10%',
            pointerEvents: 'none',
            zIndex: 0,
            filter: 'blur(42px)',
            background: 'var(--hero-wash)',
            animation: 'auroraShift 13s ease-in-out infinite'
          }}
        />
        <Container maxWidth="xl">
          <Box
            component={motion.section}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            sx={{
              minHeight: { xs: 'auto', md: 'calc(100vh - 52px)' },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.05fr) minmax(360px, 0.95fr)' },
              alignItems: 'center',
              gap: { xs: 3, md: 7 },
              py: { xs: 5.5, md: 11 },
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                width: { xs: 320, md: 560 },
                height: { xs: 320, md: 560 },
                left: { xs: '-34%', md: '18%' },
                top: { xs: '4%', md: '8%' },
                borderRadius: '50%',
                pointerEvents: 'none',
                background: 'var(--hero-orb)',
                filter: 'blur(18px)',
                animation: 'heroDrift 14s ease-in-out infinite'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                left: { xs: 8, md: 20 },
                right: { xs: 8, md: 20 },
                bottom: { xs: 18, md: 28 },
                height: 1,
                pointerEvents: 'none',
                background:
                  'linear-gradient(90deg, transparent, var(--accent-muted), rgba(255,255,255,0.16), transparent)'
              }
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                sx={{
                  color: 'var(--accent)',
                  fontSize: 13,
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: 0
                }}
              >
                Personal website
              </Typography>
              <Typography
                component="h1"
                sx={{
                  maxWidth: 780,
                  mt: 1.6,
                  fontSize: { xs: 58, sm: 92, md: 116, lg: 132 },
                  fontWeight: 800,
                  lineHeight: { xs: 0.96, md: 0.92 },
                  letterSpacing: 0,
                  color: 'var(--text-strong)',
                  textShadow: '0 0 54px rgba(124,245,255,0.14)'
                }}
              >
                Hansheng Liu
              </Typography>
              <Typography
                component="h2"
                sx={{
                  mt: 2,
                  maxWidth: 780,
                  fontSize: { xs: 28, sm: 45, md: 56 },
                  fontWeight: 760,
                  lineHeight: 1.04,
                  color: 'var(--text-strong)'
                }}
              >
                Cybersecurity and Digital Criminology.
              </Typography>
              <Typography sx={{ mt: { xs: 2.2, md: 3 }, maxWidth: 760, color: 'var(--text-muted)', fontSize: { xs: 17, md: 23 }, lineHeight: 1.5 }}>
                Purdue graduate starting at Texas Instruments on July 26, 2026. I work across security risk,
                digital forensics, systems, data analytics, and practical software delivery.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mt: { xs: 3, md: 4 } }}>
                <Button href="#work" variant="contained" sx={{ bgcolor: 'var(--accent)', color: themeMode === 'dark' ? '#03050a' : '#ffffff', borderRadius: 999, px: 3, py: 1.2, textTransform: 'none', boxShadow: '0 0 42px rgba(124,245,255,0.32)' }}>
                  View work
                </Button>
                <Button href="mailto:2004hliu@gmail.com" variant="outlined" sx={{ color: 'var(--text-strong)', borderRadius: 999, px: 3, py: 1.2, textTransform: 'none', borderColor: 'var(--panel-border)' }}>
                  Email me
                </Button>
              </Stack>
              <Stack direction="row" spacing={0.9} useFlexGap flexWrap="wrap" sx={{ mt: { xs: 2.4, md: 3 } }}>
                {['Security risk', 'Digital forensics', 'Data analytics', 'Full-stack builds'].map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    sx={{
                      bgcolor: 'var(--chip-bg)',
                      color: 'var(--chip-text)',
                      border: '1px solid var(--panel-border)',
                      borderRadius: '6px',
                      fontWeight: 650
                    }}
                  />
                ))}
              </Stack>
              <Box
                sx={{
                  mt: { xs: 3, md: 5 },
                  display: { xs: 'none', sm: 'grid' },
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
                  gap: 0,
                  maxWidth: 760,
                  borderTop: '1px solid var(--panel-border)',
                  borderBottom: '1px solid var(--panel-border)',
                  background:
                    'var(--rail-bg)',
                  backdropFilter: 'blur(18px)'
                }}
              >
                {[
                  ['Next', 'Texas Instruments'],
                  ['Degree', 'Purdue 2026'],
                  ['Focus', 'Security + data']
                ].map(([label, value]) => (
                  <Box
                    key={label}
                    sx={{
                      py: 2,
                      px: { xs: 0, sm: 2.2 },
                      borderRight: { sm: label === 'Focus' ? 'none' : '1px solid var(--panel-border)' }
                    }}
                  >
                    <Typography sx={{ color: 'var(--accent-blue)', fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0 }}>
                      {label}
                    </Typography>
                    <Typography sx={{ mt: 0.5, color: 'var(--text-strong)', fontSize: { xs: 17, md: 19 }, fontWeight: 760 }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Panel
              dark
              sx={{
                minHeight: { xs: 'auto', md: 510 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--panel-bg-strong)',
                boxShadow: 'var(--panel-shadow)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 16,
                  borderRadius: '8px',
                  pointerEvents: 'none',
                  border: '1px solid rgba(255,255,255,0.08)',
                  maskImage: 'linear-gradient(180deg, #000, transparent 58%)'
                }
              }}
            >
              <Stack
                spacing={{ xs: 1.8, md: 2.4 }}
                direction={{ xs: 'row', sm: 'column' }}
                alignItems={{ xs: 'flex-start', sm: 'stretch' }}
              >
                <Box
                  sx={{
                    width: { xs: 86, md: 126 },
                    height: { xs: 86, md: 126 },
                    flex: '0 0 auto',
                    borderRadius: '50%',
                    display: 'block',
                    position: 'relative',
                    border: '2px solid rgba(124,245,255,0.42)',
                    boxShadow: '0 0 58px rgba(124,245,255,0.2), 0 18px 70px rgba(0,0,0,0.38)',
                    overflow: 'visible',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -10,
                      borderRadius: '50%',
                      border: '1px dashed rgba(124,245,255,0.38)',
                      animation: 'ringSpin 18s linear infinite'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      inset: -22,
                      borderRadius: '50%',
                      border: '1px solid rgba(142,197,255,0.12)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={`${import.meta.env.BASE_URL}hansheng-liu-profile.png`}
                    alt="Hansheng Liu profile"
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      position: 'relative',
                      zIndex: 1
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: 'var(--accent-blue)', fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0 }}>
                    Starting July 26, 2026
                  </Typography>
                  <Typography sx={{ mt: { xs: 0.7, md: 1 }, color: 'var(--text-strong)', fontSize: { xs: 27, md: 48 }, fontWeight: 780, lineHeight: 1 }}>
                    Texas Instruments
                  </Typography>
                  <Typography sx={{ mt: 1.4, color: 'var(--text-muted)', fontSize: { xs: 15.5, md: 19 }, lineHeight: 1.5 }}>
                    Incoming Security Risk & Compliance, returning after a TI internship focused on Splunk,
                    automation, Cribl pipelines, and risk visibility.
                  </Typography>
                  <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 2.4 }}>
                    {['Splunk', 'Cribl', 'Python', 'Risk metrics'].map((item) => (
                      <Chip
                        key={item}
                        size="small"
                        label={item}
                        sx={{
                          bgcolor: 'var(--chip-bg)',
                          color: 'var(--chip-text)',
                          borderRadius: '6px',
                          fontWeight: 700
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ my: 4, borderColor: 'var(--panel-border)', display: { xs: 'none', sm: 'block' } }} />

              <Stack spacing={1.4} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <LocationOnIcon sx={{ color: 'var(--accent)', fontSize: 18 }} />
                  <Typography sx={{ color: 'var(--text-muted)', fontSize: 15 }}>Naperville, IL / West Lafayette, IN</Typography>
                </Stack>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <SchoolIcon sx={{ color: 'var(--accent)', fontSize: 18 }} />
                  <Typography sx={{ color: 'var(--text-muted)', fontSize: 15 }}>Purdue University, 2022-2026</Typography>
                </Stack>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <WorkIcon sx={{ color: 'var(--accent)', fontSize: 18 }} />
                  <Typography sx={{ color: 'var(--text-muted)', fontSize: 15 }}>Texas Instruments, Indiana State Police, The Data Mine</Typography>
                </Stack>
                <Stack direction="row" spacing={1.2} alignItems="center">
                  <EmailIcon sx={{ color: 'var(--accent)', fontSize: 18 }} />
                  <Typography sx={{ color: 'var(--text-muted)', fontSize: 15 }}>2004hliu@gmail.com</Typography>
                </Stack>
              </Stack>
            </Panel>
          </Box>
        </Container>

        <Box
          id="work"
          sx={{
            bgcolor: 'var(--section-bg)',
            color: 'var(--text-primary)',
            py: { xs: 9, md: 14 },
            position: 'relative',
            zIndex: 1,
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 160,
              pointerEvents: 'none',
              background: 'linear-gradient(180deg, var(--accent-muted), transparent)'
            }
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
            <SectionTitle label="Selected work" title="Operational work, not just coursework." light>
              Security and data projects across risk compliance, public safety, critical infrastructure, environmental intelligence, and digital agriculture.
            </SectionTitle>
            <Grid container spacing={2.5}>
              {work.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  md={index === 0 ? 12 : 6}
                  key={`${item.organization}-${item.role}-${item.period}`}
                >
                  <Panel
                    dark
                    sx={{
                      minHeight: { xs: 'auto', md: index === 0 ? 300 : 360 },
                      background:
                        index % 2 === 0
                          ? 'linear-gradient(135deg, var(--chip-bg), var(--panel-bg) 42%, rgba(0,113,227,0.08))'
                          : 'linear-gradient(135deg, rgba(255,255,255,0.16), var(--panel-bg) 48%, var(--chip-bg))'
                    }}
                  >
                    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'center' }} spacing={2}>
                      <Box
                        sx={{
                          width: { xs: 116, md: index === 0 ? 150 : 128 },
                          height: { xs: 54, md: index === 0 ? 64 : 58 },
                          boxSizing: 'border-box',
                          borderRadius: '8px',
                          display: 'grid',
                          placeItems: 'center',
                          p: 0,
                          bgcolor: 'rgba(255,255,255,0.93)',
                          border: '1px solid rgba(255,255,255,0.18)',
                          boxShadow: '0 18px 50px rgba(0,0,0,0.22)',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <Box
                          component="img"
                          src={`${import.meta.env.BASE_URL}${item.logo}`}
                          alt={item.logoAlt}
                          sx={{
                            position: 'absolute',
                            inset: { xs: '10px 12px', md: '10px 14px' },
                            width: { xs: 'calc(100% - 24px)', md: 'calc(100% - 28px)' },
                            height: 'calc(100% - 20px)',
                            objectFit: 'contain',
                            display: 'block'
                          }}
                        />
                      </Box>
                      <Stack spacing={0.5} alignItems={{ xs: 'flex-start', sm: 'flex-end' }}>
                        <Typography sx={{ color: 'var(--accent-blue)', fontSize: 14, fontWeight: 700 }}>{item.period}</Typography>
                        <Typography sx={{ color: 'var(--text-subtle)', fontSize: 14, textAlign: { sm: 'right' } }}>{item.role}</Typography>
                      </Stack>
                    </Stack>
                    <Typography sx={{ mt: 1, maxWidth: 900, fontSize: { xs: 28, md: index === 0 ? 46 : 34 }, fontWeight: 780, lineHeight: 1.04 }}>
                      {item.organization}
                    </Typography>
                    <Divider sx={{ my: 3, borderColor: 'var(--panel-border)' }} />
                    <Stack spacing={1.5} sx={{ maxWidth: 950 }}>
                      {item.points.map((point) => (
                        <Typography key={point} sx={{ color: 'var(--text-muted)', lineHeight: 1.55 }}>
                          {point}
                        </Typography>
                      ))}
                    </Stack>
                    <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
                      {item.tags.map((tag) => (
                        <Chip key={tag} size="small" label={tag} sx={{ bgcolor: 'var(--chip-bg)', color: 'var(--chip-text)', borderRadius: '6px', fontWeight: 600 }} />
                      ))}
                    </Stack>
                  </Panel>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          id="toolkit"
          sx={{
            py: { xs: 9, md: 15 },
            bgcolor: 'var(--toolkit-bg)',
            color: 'var(--text-primary)',
            position: 'relative',
            zIndex: 1,
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              opacity: 0.55,
              background:
                'radial-gradient(circle at 18% 8%, rgba(124,245,255,0.18), transparent 24%), radial-gradient(circle at 86% 30%, rgba(0,113,227,0.22), transparent 28%)'
            }
          }}
        >
          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
            <SectionTitle label="Professional skills" title="A moving toolkit, not a transcript." light>
              A focused toolkit for cybersecurity, digital forensics, systems, networking, data, ML, and technical communication.
              I am keeping this section skill-first instead of listing course names.
            </SectionTitle>

            <SkillMarquee />

            <Grid container spacing={2.5}>
              {tracks.map((track) => (
                <Grid item xs={12} md={6} lg={4} key={track.title}>
                  <Panel
                    dark
                    sx={{
                      transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: 'rgba(124,245,255,0.4)',
                        boxShadow: '0 30px 100px rgba(124,245,255,0.13)'
                      }
                    }}
                  >
                    <ScrambleLabel>skill track</ScrambleLabel>
                    <Typography sx={{ mt: 1.4, color: 'var(--text-strong)', fontSize: 24, fontWeight: 750, lineHeight: 1.12 }}>{track.title}</Typography>
                    <Typography sx={{ mt: 1.5, color: 'var(--text-muted)', lineHeight: 1.55 }}>{track.focus}</Typography>
                    <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 2.4 }}>
                      {track.tools.map((tool) => (
                        <Chip key={tool} size="small" label={tool} sx={{ bgcolor: 'var(--chip-bg)', color: 'var(--chip-text)', borderRadius: '6px', fontWeight: 650 }} />
                      ))}
                    </Stack>
                  </Panel>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box id="projects" sx={{ py: { xs: 9, md: 14 }, bgcolor: 'var(--project-bg)', color: 'var(--project-text)', position: 'relative', zIndex: 1 }}>
          <Container maxWidth="xl">
            <SectionTitle label="Projects" title="Interactive builds with security instincts.">
              Product thinking, backend integration, user flows, and awareness campaigns grounded in practical delivery.
            </SectionTitle>
            <Grid container spacing={2.5}>
              {projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={projects.length % 3 === 2 && index >= projects.length - 2 ? 6 : 4}
                  key={`${project.name}-${project.type}`}
                >
                  <Panel sx={{ display: 'flex', flexDirection: 'column', minHeight: 340, bgcolor: '#fff', transition: 'transform 180ms ease, box-shadow 180ms ease', '&:hover': { transform: 'translateY(-8px) rotate(-0.35deg)', boxShadow: '0 30px 90px rgba(0,0,0,0.13)' } }}>
                    <CodeIcon sx={{ color: 'var(--accent)', fontSize: 30 }} />
                    <Typography sx={{ mt: 3, fontSize: 30, fontWeight: 750, lineHeight: 1.06 }}>{project.name}</Typography>
                    <Typography sx={{ mt: 1, color: 'var(--project-muted)', fontWeight: 700 }}>{project.type}</Typography>
                    <Typography sx={{ mt: 2, color: 'var(--project-muted)', lineHeight: 1.55, flexGrow: 1 }}>{project.summary}</Typography>
                    <Stack direction="row" spacing={0.8} useFlexGap flexWrap="wrap" sx={{ mt: 3 }}>
                      {project.stack.map((item) => (
                        <Chip key={item} size="small" label={item} sx={{ borderRadius: '6px', fontWeight: 600 }} />
                      ))}
                    </Stack>
                  </Panel>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ bgcolor: 'var(--section-bg)', py: { xs: 8, md: 11 }, position: 'relative', zIndex: 1 }}>
          <Container maxWidth="lg">
            <Panel dark sx={{ textAlign: 'center', py: { xs: 6, md: 8 } }}>
              <ScrambleLabel>available for focused cyber work</ScrambleLabel>
              <Typography sx={{ mt: 2, color: 'var(--text-strong)', fontSize: { xs: 38, md: 64 }, fontWeight: 780, lineHeight: 1 }}>
                Built for cyber roles where technical evidence has to be clear.
              </Typography>
              <Typography sx={{ mt: 2.5, mx: 'auto', maxWidth: 760, color: 'var(--text-muted)', fontSize: { xs: 18, md: 21 }, lineHeight: 1.55 }}>
                I am most interested in security operations, risk analytics, vulnerability analysis, digital forensics, cybercrime investigation, and
                data-driven public-sector security work.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} justifyContent="center" sx={{ mt: 4 }}>
                <Button startIcon={<EmailIcon />} href="mailto:2004hliu@gmail.com" variant="contained" sx={{ bgcolor: 'var(--accent)', color: themeMode === 'dark' ? '#03050a' : '#ffffff', borderRadius: 999, px: 3, py: 1.1, textTransform: 'none', boxShadow: '0 0 42px rgba(124,245,255,0.32)' }}>
                  2004hliu@gmail.com
                </Button>
                <Button startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/hanshengliu/" target="_blank" rel="noreferrer" variant="outlined" sx={{ color: 'var(--text-strong)', borderRadius: 999, px: 3, py: 1.1, textTransform: 'none', borderColor: 'var(--panel-border)' }}>
                  LinkedIn
                </Button>
              </Stack>
            </Panel>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ bgcolor: 'var(--page-bg)', color: 'var(--text-muted)', py: 4, borderTop: '1px solid var(--panel-border)' }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent="space-between" alignItems={{ sm: 'center' }}>
            <Typography sx={{ fontSize: 13 }}>Hansheng Liu - Cybersecurity and Digital Criminology</Typography>
            <Link href="https://www.linkedin.com/in/hanshengliu/" target="_blank" rel="noreferrer" sx={{ color: 'var(--accent-blue)', fontSize: 13 }}>
              linkedin.com/in/hanshengliu
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default App
