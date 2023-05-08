export default {
  email: "mikecannondeveloper@gmail.com",
  skills: [
    '9 years of professional software development experience in Go, Java, Python, JavaScript (NodeJs, Vue, React, Typescript) ',
    '5 years of professional software development experience in cloud based environments (AWS, GCP, Azure)',
    'Software Application Design, Development, Implementation, and Documentation',
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
        'Developed multiple web applications managing Carbon Credits for Bayer Digital Farming Solutions using AWS microservice architecture',
        'Updated existing internal application for generating SQL queries through a User Interface (Azure, React, MongoDB)',
        'Assisted in feature enhancement for Credit Card Payment system at The Home Depot (Go, React, Redis, CockroachDB)',
        'Migrated and enhanced existing automated end-to-end tests from WebdriverIO (Selenium-based) to Playwright',
        'Led multiple study groups to complete their AWS certifications (Cloud Practitioner and Solutions Architect)'
      ]
    },
    {
      jobRole: 'Software Engineer',
      company: 'Propelled Brands',
      dateRange: '2020 - 2022',
      items: [
        'Created integration testing solution to test synchronization of CRM data across multiple internal and external sources',
        'Supported the creation of multiple new, internal client-facing solutions in Google Cloud Platform (GCP)',
        'Feature enhancement for existing applications built with Angular and .Net'
      ]
    },
    {
      jobRole: 'Frontend Developer',
      company: 'Capital One',
      dateRange: '2019 - 2020',
      items: [
        'Built complex integrated UI solution for marketing campaign management using VueJS, D3, & Typescript',
        'Updated existing REST API microservice solutions using Springboot & Postgres (hosted on AWS)',
      ]
    },
    {
      jobRole: 'Core Automation Developer',
      company: 'World Wide Technology',
      dateRange: '2016 - 2019',
      items: [
        'Designed and implemented multiple client and web applications in VueJS and Electron with ROI over $450k',
        'Developed an integrated web application service to automate documentation generation',
        'Wrote and maintained script used to translate Cisco ACE config files to F5 config files.',
      ]
    },
    {
      jobRole: 'Analyst/Programmer',
      company: 'World Wide Technology',
      dateRange: '2014 - 2016',
      items: [
        'Automated SAP ERP report and data extraction for use in MySQL database',
        'Enhanced operational efficiency of common warehouse tasks through the implementation of software',
        'Designed and built an intranet web application in PHP, MySQL, and jQuery that saved warehouse $200k+ a year'
      ]
    }
  ],
  education: [{
    institution: 'Western Governors University',
    name: 'Bachelor of Science, Software Development'
  }]
}