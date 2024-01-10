export default {
  email: "mikecannondeveloper@gmail.com",
  skills: [
    '9 years of professional software development experience in Go, Java, Python, JavaScript (NodeJs, Vue, React, Typescript) ',
    '5 years of professional software development experience in cloud based environments (AWS, GCP, Azure)',
    'Software Application Design, Development, Implementation, Testing, and Documentation',
    'Currently developing skills in Machine Learning and AI'
  ],
  certs: [{
      name: 'CompTIA A+',
      badge: require('~/assets/CompTIA_A.png')
    },
    {
      name: 'CompTIA Project+',
      badge: require('~/assets/CompTIA_Project.png')
    },
    {
      name: 'AWS Cloud Practitioner',
      badge: require('~/assets/AWS_Cloud_Practioner.png')
    },
    {
      name: 'AWS Solutions Architect',
      badge: require('~/assets/AWS_Solution_Architect.png')
    },
    {
      name: 'GCP Cloud Engineer',
      badge: require('~/assets/GCP_Cloud_Engineer.png')
    }
  ],
  experience: [{
      jobRole: 'Consultant',
      company: 'Daugherty Business Solutions',
      dateRange: '2022-Present',
      items: [
        'Developed multiple web application POCs for managing Carbon Credits for Bayer Digital Farming Solutions using AWS microservice architecture (NodeJS, ReactJS, Azure LDAP, DynamoDB)',
        'Implemented feature enhancement for Credit Card Payment system at The Home Depot (Go, React, Redis, CockroachDB)',
        'Migrated and enhanced existing automated end-to-end tests from WebdriverIO (Selenium-based) to Playwright at The Home Depot',
        'Led multiple internal study groups to complete AWS certifications (Cloud Practitioner and Solutions Architect)',
        'Updated existing internal application for generating SQL queries through a User Interface (Azure, React, MongoDB)',
        'Built out Proof of Concept AI solutions for internal LLM based search service with RAG (Retrieval Augmented Generation) architecture (Python, ChromaDB)'
      ]
    },
    {
      jobRole: 'Software Engineer',
      company: 'Propelled Brands',
      dateRange: '2020 - 2022',
      items: [
        'Created integration testing solution to test synchronization of CRM data across multiple internal and external sources',
        'Supported the creation of multiple new, internal client-facing solutions in Google Cloud Platform (GCP)',
        'Built entirely serverless backend infrastructure, with synchronizations across multiple external sources feeding into BigQuery and Firebase',
        'Implemented feature enhancements for existing franchise management application built with Angular and .Net'
      ]
    },
    {
      jobRole: 'Frontend Developer',
      company: 'Capital One',
      dateRange: '2019 - 2020',
      items: [
        'Built complex graph based UI solution for marketing campaign management using VueJS, D3, & Typescript',
        'Created a new UI framework for new VueJS based frontend to migrate to from existing Web Components based solution',
        'Updated existing REST API microservice solutions using Springboot & Postgres (hosted on AWS)',
      ]
    },
    {
      jobRole: 'Core Automation Developer',
      company: 'World Wide Technology',
      dateRange: '2016 - 2019',
      items: [
        'Designed and implemented multiple client and web applications in VueJS and Electron with ROI over $450k',
        'Developed integrated web application service to automate documentation generation',
        'Wrote and maintained script used to translate Cisco ACE config files to F5 config files. (Python, SQLite)',
      ]
    },
    {
      jobRole: 'Analyst/Programmer',
      company: 'World Wide Technology',
      dateRange: '2014 - 2016',
      items: [
        'Automated SAP ERP report and data extraction for use in MySQL database',
        'Enhanced operational efficiency of common warehouse tasks through the implementation of software',
        'Streamlined existing label printing process from web application',
        'Designed and built an intranet web application in PHP, MySQL, and jQuery that saved warehouse $200k+ a year'
      ]
    }
  ],
  education: [{
    institution: 'Western Governors University',
    name: 'Bachelor of Science, Software Development'
  }]
}