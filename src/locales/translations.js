export const translations = {
  en: {
    header: {
      name: 'Hansheng Liu'
    },
    intro: {
      title: 'Welcome to My Portfolio',
      description: 'Cybersecurity & Digital Criminology Double Major at Purdue'
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Texas Instruments — IT Security Risk & Compliance Intern',
          duration: 'May 2025 - August 2025',
          details: [
            'Designed and developed an enterprise-wide interactive Splunk dashboard to visualize operational metrics across Risk & Compliance activities impacting all of Texas Instruments.',
            'Created and optimized Splunk searches, dashboards, and alerts to monitor and analyze data related to training participation, phishing simulation outcomes, risk trends, open procedures, compliance status, and critical task management.',
            'Built ETL pipelines using Python to efficiently extract, transform, and load data from diverse sources into Splunk, enabling comprehensive analysis.',
            'Integrated data via Cribl pipelines to streamline REST API ingestion, ensuring data integrity and consistency across platforms.',
            'Utilized Insomnia to test and validate APIs, safeguarding the reliability of data ingestion and processing workflows.',
            'Enabled enterprise-wide data visibility by deploying and configuring Universal Forwarders across critical servers, enhancing real-time security insights.',
            'Enhanced organizational transparency by developing dashboards that analyzed 800K+ logs across risk trends, training participation, phishing simulations, compliance procedures, and task management.',
            'Strengthened expertise in data pipeline development, cybersecurity metrics, operational risk analysis, and compliance monitoring.'
          ]
        },
        {
          title: 'PepsiCo — Mapping Environmental Risks',
          duration: 'August 2024 - May 2025',
          details: [
            'Built a predictive environmental risk mapping tool for PepsiCo to identify and mitigate water-related risks across key U.S. states, supporting the company’s 2025 water-use efficiency goals.',
            'Developed an interactive Power BI dashboard integrating real-time and historical climate data (temperature, drought, flood, humidity, etc.) with state- and county-level risk insights.',
            'Automated daily API data extractions and transformations via Power Query for seamless analysis and up-to-date monitoring.',
            'Implemented machine learning/keyword-based monitoring and social listening to detect emerging sustainability challenges, triggering alerts on abnormal water-related incidents.',
            'Collaborated cross-functionally with PepsiCo mentors, faculty advisors, and a multi-disciplinary student team to deliver insights that drive sustainable and adaptive manufacturing operations.'
          ]
        },
        {
          title: 'Sinopec — Cybersecurity Intern',
          duration: 'July 2024 - August 2024',
          details: [
            'Spearheaded cyber defense initiatives for Shengli Oil Field (SLOF), collaborating with Qianxin, NSFocus, and Sangfor to protect critical infrastructure.',
            'Administered and maintained firewalls, Intrusion Prevention Systems (IPS), and Web Application Firewalls (WAF) to defend against a wide range of cyber threats.',
            'Provided IT support and database management for SLOF, serving nearly 500,000 employees across ~100 affiliated companies, ensuring system reliability and swift issue resolution.',
            'Supervised physical server room operations, overseeing device installations and ensuring continuous monitoring to prevent operational disruptions.',
            'Selected as a Blue Team member in the National Cybersecurity Defense Exercise, successfully intercepting thousands of attacks including network scanning, SQL injection, XSS, brute force, and backdoor attempts.',
            'Conducted forensic analysis and offline remediation on compromised servers and endpoints, eliminating attack vectors and reinforcing system security.',
            'Monitored and analyzed suspicious IP traffic using situational awareness platforms and WAF tools, blocking malicious requests in real time.',
            'Strengthened expertise in cybersecurity operations, IT infrastructure support, and incident response, contributing to a robust defense posture for SLOF.'
          ]
        },
        {
          title: 'John Deere — Estimating Soil Moisture Using Geospatial and Weather Data',
          duration: 'January 2024 - April 2024',
          details: [
            'Developed a machine learning model to predict soil moisture levels using XGBoost, achieving an R² accuracy of 0.9 on test data — enabling growers to optimize crop planting, tilling, and fertilization timing.',
            'Engineered a comprehensive dataset by merging USDA SSURGO soil data (sand, silt, clay composition) with Midwest weather data (temperature, precipitation, wind, snow, air pressure) from MeteoStat APIs.',
            'Conducted feature extraction and PCA analysis, identifying key soil and weather variables impacting soil moisture, with 80% of variance explained by three principal components.',
            'Created interactive visualizations with Python libraries, ArcGIS, and Tableau to map soil textures, precipitation patterns, and moisture predictions across geographic regions.',
            'Constructed time-series data pipelines to capture temporal relationships between weather variables and soil characteristics.',
            'Collaborated closely with John Deere mentors and academic advisors to align technical outcomes with precision agriculture goals.'
          ]
        }
      ]
    },
    education: {
      title: 'Education',
      items: [
        {
          school: 'Purdue University, 610 Purdue Mall, West Lafayette, IN 47907',
          degree: [
            'Bachelor of Science — Cybersecurity',
            'Bachelor of Arts — Digital Criminology',
            'Certificate in Entrepreneurship & Innovation'
          ],
          duration: 'August 2022 - May 2026',
          details: []
        }
      ]
    },
    skills: {
      title: 'Skills',
      items: [
        'Splunk', 'Kali Linux', 'VMWare', 'Magnet AXIOM', 'Cellebrite', 'Autopsy', 'Metasploit', 'Nmap', 'Wireshark', 'John the Ripper', 'Hydra', 'Python', 'Java', 'Node.js', 'React Native', 'HTML/CSS', 'Flask', 'Power BI', 'Tableau', 'ArcGIS', 'SQL', 'XGBoost', 'PCA', 'AWS', 'Docker', 'Firebase', 'Cribl', 'Insomnia', 'GitHub', 'Agile (Scrum)', 'Trello', 'MS Office'
      ]
    },
    projects: {
      title: 'Projects',
      items: [
        {
          title: 'Budget Bites — Food Ordering Mobile App',
          duration: 'July 2023 - April 2024',
          details: [
            'Developed a fully functional React Native mobile app allowing users to order food boxes and pick them up at partner restaurants.',
            'Implemented backend functionality using Node.js, Firebase, Sanity, and Stripe APIs for user authentication, real-time database storage, content management, and secure payments.',
            'Designed and integrated user-friendly features for browsing food options, customizing orders, and scheduling pickups.',
            'Ensured secure user authentication and data protection through Firebase Authentication and Stripe payment gateway integration.'
          ]
        },
        {
          title: 'Half Cafe App — Ordering web app for school cafeteria',
          duration: 'August 2020 - July 2021',
          details: [
            'Worked on a 4-person team to build an online ordering web app for our school’s cafeteria using Python, Flask, HTML/CSS, AWS and Docker etc.',
            'Supported implementation of agile development methods including Scrum framework, Trello project management, and GitHub version control',
            'Web app enabled cafeteria staff to receive and fulfill drink orders remotely during school hours',
            'Team delivered functioning prototype after 1 semester of development'
          ]
        },
        {
          title: 'Phishing Project — Phishing project with IT district 203',
          duration: 'August 2020 - July 2021',
          details: [
            'Developed and executed phishing simulation for 2000+ staff members to improve security awareness',
            'Sent simulated phishing emails and fake login pages and tracked staff response rates',
            'Educated staff who fell for phishing attempts by directing them to our informational webpage on phishing risks',
            'Project was a collaboration with the school district’s IT department as part of their cybersecurity curriculum'
          ]
        }
      ]
    },
    contact: {
      email: 'liu343@purdue.edu',
      phone: '773-584-7886',
      linkedin: 'https://www.linkedin.com/in/hanshengliu/',
      website: 'https://nnhs203.github.io/personal-website/'
    }
  },
  zh: {
    header: {
      name: '刘涵升'
    },
    intro: {
      title: '欢迎访问我的作品集',
      description: '网络安全与数据工程专业学生 | 软件工程师'
    },
    experience: {
      title: '工作经历',
      items: [
        {
          title: '德州仪器 — IT安全风险与合规实习生',
          duration: '2025年5月 - 2025年8月',
          details: [
            '设计并开发了企业级Splunk交互式仪表板，实现对德州仪器风险与合规活动的运营指标可视化。',
            '创建并优化Splunk搜索、仪表板和告警，监控和分析培训参与、钓鱼模拟、风险趋势、流程、合规状态及关键任务管理等数据。',
            '使用Python搭建ETL数据管道，高效提取、转换并加载多源数据至Splunk，支持全面分析。',
            '通过Cribl管道集成REST API数据，确保各平台间数据一致性与完整性。',
            '利用Insomnia测试和验证API，保障数据采集与处理流程的可靠性。',
            '在关键服务器部署和配置Universal Forwarders，实现企业级数据可视化，提升实时安全洞察能力。',
            '开发分析80万+日志的仪表板，涵盖风险趋势、培训、钓鱼模拟、合规流程及任务管理，提升组织透明度。',
            '深化了数据管道开发、网络安全指标、运营风险分析与合规监控等专业能力。'
          ]
        },
        {
          title: '百事可乐 — 环境风险映射',
          duration: '2024年8月 - 2025年5月',
          details: [
            '为百事可乐开发预测性环境风险映射工具，识别并缓解美国重点州的水资源相关风险，助力公司2025年用水效率目标。',
            '开发交互式Power BI仪表板，整合实时与历史气候数据（温度、干旱、洪水、湿度等）及州/县级风险洞察。',
            '通过Power Query自动化每日API数据提取与转换，实现高效分析与实时监控。',
            '实现基于机器学习和关键词的监控及社交媒体监听，及时发现可持续发展挑战并对异常水事件自动预警。',
            '与百事可乐导师、院系顾问及多学科学生团队协作，推动可持续与自适应制造运营。'
          ]
        },
        {
          title: '中石化 — 网络安全实习生',
          duration: '2024年7月 - 2024年8月',
          details: [
            '主导胜利油田（SLOF）网络防御，协同奇安信、绿盟、深信服等厂商保护关键基础设施。',
            '管理防火墙、入侵防御系统（IPS）和Web应用防火墙（WAF），防御多种网络威胁。',
            '为SLOF提供IT支持和数据库管理，服务近50万员工、约100家子公司，保障系统高可用与高效运维。',
            '监督机房运维，负责设备安装与持续监控，防止运营中断。',
            '作为国家网络安全防御演习蓝队成员，成功拦截SQL注入、XSS、暴力破解等多类攻击。',
            '对受损服务器和终端进行取证分析与离线修复，消除攻击路径，强化系统安全。',
            '利用态势感知平台和WAF工具监控分析可疑IP流量，实时阻断恶意请求。',
            '提升了网络安全运维、IT基础设施支持和事件响应等能力，为SLOF构建坚实防线。'
          ]
        },
        {
          title: '约翰迪尔 — 利用地理与气象数据估算土壤水分',
          duration: '2024年1月 - 2024年4月',
          details: [
            '开发基于XGBoost的机器学习模型，预测土壤水分，测试集R²达0.9，助力农户优化播种、耕作和施肥时机。',
            '整合USDA SSURGO土壤数据（砂、粉、黏土比例）与中西部气象数据（温度、降水、风、雪、气压），实现数据融合。',
            '进行特征提取与主成分分析，识别影响土壤水分的关键变量，前三主成分解释80%方差。',
            '用Python、ArcGIS、Tableau等工具制作交互式可视化，展示土壤质地、降水分布和水分预测。',
            '构建时序数据管道，捕捉气象变量与土壤特性间的动态关系。',
            '与约翰迪尔导师和学术顾问紧密合作，确保技术成果契合精准农业目标。'
          ]
        }
      ]
    },
    education: {
      title: '教育背景',
      items: [
        {
          school: '普渡大学，610 Purdue Mall, West Lafayette, IN 47907',
          degree: [
            '网络安全理学学士',
            '数字犯罪学文学学士',
            '创业与创新证书'
          ],
          duration: '2022年8月 - 2026年5月',
          details: []
        }
      ]
    },
    skills: {
      title: '技能',
      items: [
        'Splunk', 'Kali Linux', 'VMWare', 'Magnet AXIOM', 'Cellebrite', 'Autopsy', 'Metasploit', 'Nmap', 'Wireshark', 'John the Ripper', 'Hydra', 'Python', 'Java', 'Node.js', 'React Native', 'HTML/CSS', 'Flask', 'Power BI', 'Tableau', 'ArcGIS', 'SQL', 'XGBoost', 'PCA', 'AWS', 'Docker', 'Firebase', 'Cribl', 'Insomnia', 'GitHub', '敏捷开发（Scrum）', 'Trello', 'MS Office'
      ]
    },
    projects: {
      title: '项目经验',
      items: [
        {
          title: 'Budget Bites — 食品订购移动应用',
          duration: '2023年7月 - 2024年4月',
          details: [
            '独立开发完整的React Native移动应用，支持用户订购食品盒并在合作餐厅自取。',
            '后端采用Node.js、Firebase、Sanity和Stripe API，实现用户认证、实时数据库、内容管理与安全支付。',
            '设计并集成友好界面，支持浏览食品、定制订单和预约取餐。',
            '通过Firebase认证和Stripe支付网关，保障用户身份验证与数据安全。'
          ]
        },
        {
          title: 'Half Cafe App — 学校食堂订餐Web应用',
          duration: '2020年8月 - 2021年7月',
          details: [
            '与4人团队合作，基于Python、Flask、HTML/CSS、AWS和Docker开发学校食堂订餐Web应用。',
            '支持Scrum敏捷开发、Trello项目管理和GitHub版本控制。',
            '实现食堂远程接单与饮品配送，提升运营效率。',
            '团队在一学期内交付可用原型。'
          ]
        },
        {
          title: '钓鱼项目 — 与IT区203合作',
          duration: '2020年8月 - 2021年7月',
          details: [
            '为2000+名员工设计并执行钓鱼邮件模拟，提升安全意识。',
            '发送模拟钓鱼邮件和假登录页，跟踪员工响应率。',
            '对受骗员工进行风险教育，指引访问钓鱼风险信息网页。',
            '项目与学区IT部门合作，作为网络安全课程一部分。'
          ]
        }
      ]
    },
    contact: {
      location: '美国',
      email: 'liu343@purdue.edu',
      phone: '773-584-7886',
      linkedin: 'https://www.linkedin.com/in/hanshengliu/',
      website: 'https://nnhs203.github.io/personal-website/'
    }
  }
}
