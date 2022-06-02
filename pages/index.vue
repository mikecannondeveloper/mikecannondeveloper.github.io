  <template>
  <section class="container">
    <div style="margin-bottom:50px;"><br/>
      <h2 class="title">
        S. Michael Cannon
      </h2>
      <img class="img-circle" src="~/assets/profile.jpg">
      <h3 class="subtitle">
        Full Stack Software Developer
      </h3>
      <p class="siteUrl"><a href="https://mikecannon.dev">https://mikecannon.dev</a></p>
      <p class="email"><a href="mailto:mikecannondeveloper@gmail.com">mikecannondeveloper@gmail.com</a></p><br/>
      <b>Relevant Skills</b><hr><br/>
      <ul v-for='skill in skills' :key="skill.index">
        <li>{{ skill }}</li>
      </ul><br/>
      <bar-chart class="bar-chart" :data="barChartData" :options="barChartOptions" :height="100" />
      <div>
        <b>Certifications</b>
      </div><hr><br/>
      <div class="cert-container">
      <div v-for='cert in certs' :key="cert.index">
        <li><b>{{ cert }}</b></li>    
      </div>
      </div><br/>
      <div v-for='role in experience' :key="role.jobRole">
        <div class="jobrole">
          <b>{{ role.jobRole }}</b><p>{{ role.dateRange }}</p>
        </div><hr><br/>
        <ul v-for='item in role.items' :key="item.index">
          <li>{{ item }}</li>
        </ul><br/>
      </div>
      <div>
        <b>Education</b>
      </div><hr><br/>
      <div v-for='program in education' :key="program.program">
        {{ program.institution }}    
        <b>{{ program.name }}</b>    
      </div>
    </div>
    <p class="subtext"><small>This simple site was generated using <a href="https://vuejs.org/">Vue</a> + <a href="https://nuxtjs.org">Nuxt</a></small></p>
    <p class="subtext"><small>This page is print friendly for an easy to distribute pdf resume!</small></p>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import BarChart from '~/components/BarChart.js'

const techSkills = {
        'JavaScript': 7,
        'NodeJS': 6,
        'Python': 3,
        'Vue': 6,
        'Java': 1,
        'AWS': 2,
        'React': 1,
        'GCP': 1
      }

export default {
  components: {
    AppLogo,
    BarChart
  },
  data() {
    return {
      skills: [
        '7+ years of professional software development experience in Java, Python, JavaScript (NodeJs, Vue, React) ',
        'Software Application Design, Development, Implementation, and Documentation',
      ],
      certs: [
        'CompTIA A+',
        'CompTIA Project+',
        'AWS Cloud Practitioner',
      ],
      experience: [
        // {
        //   jobRole: 'Consultant (Daugherty Consulting)',
        //   dateRange: 'Mar 2022 - Current',
        //   items: [
        //     'Worked with a team of developers to develop a web application for a Bayer health company',
        //   ]
        // },
        {
          jobRole: 'Software Engineer (Propelled Brands)',
          dateRange: 'Oct 2020 - Mar 2022',
          items: [
            'Created integration testing solution to test synchronization of CRM data across multiple internal and external sources',
            'Supported the creation of multiple new internal solutions in Google Cloud Platform (GCP)'
          ]
        },
        {
          jobRole: 'Frontend Developer (Capital One)',
          dateRange: 'Oct 2019 - Sep 2020',
          items: [
            'Built integrated UI solution for marketing campaign management using VueJS & Typescript',
            'Updated existing REST API solutions using Java Springboot and PostgresSQL (hosted on AWS)',
          ]
        },
        {
          jobRole: 'Core Automation Developer (World Wide Technology)',
          dateRange: 'Aug 2016 - Sep 2019',
          items: [
            'Built multiple client applications in Electron-Vue (NodeJS runtime) with estimated ROI over $450k',
            'Built multiple internal facing web applications in VueJS, NodeJS & MongoDB',
            'Wrote and maintained script used to translate Cisco ACE config files to F5 config files.',
          ]
        },
        {
          jobRole: 'Analyst/Programmer (World Wide Technology)',
          dateRange: 'Jun 2014 - Aug 2016',
          items: [
            'Automated SAP ERP report and data extraction for use in MySQL database',
            'Built an intranet web application to manage production and reporting tools in PHP, MySQL, and jQuery',
            'Implemented process improvements using custom application software that saved company $200k+ a year'
          ]
        }
      ],
      education: [{
          institution: 'Western Governors University',
          name: 'Bachelor of Science, Software Development'
        }
      ],
      barChartData: {
        labels: Object.keys(techSkills),
        datasets: [
          {
            label: 'Years',
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: Object.keys(techSkills).map(x=>'rgb(54, 162, 235)'),
            data: Object.values(techSkills)
          }
        ]
      },
      barChartOptions: {
        layout: {
        padding: {
            left: 0,
            right: 50,
            top: 0,
            bottom: 0
        }
    },
        indexAxis: 'y',
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: 'Skills'
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false
              },
              gridLines: {
                display: false
              },

            }
          ],
          yAxes: [{
            gridLines: {
                display: false
              },
          }]
        }
      }

    }
  }
}
</script>

<style>
.container {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  text-align: center;
  font-weight: 300;
  font-size: 42px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  text-align: center;
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 10px;
}

.jobrole {
  text-align: left;
}

.bar-chart {
  padding-bottom: 25px;
}

.img-circle {
  float: left;
  z-index: 2;
  position: absolute; /*newly added*/
  left: 20px; /*newly added*/
  top: 15px;/*newly added*/
  border-radius: 50%;
  width: 125px;
}

@media only screen and (max-width: 500px) {
  .img-circle {
    width: 50%;
    left: 25%;
    right: 25%;
    z-index: 0;
    position: relative;
    margin-bottom: 15px;
    float: none;
  }
}

.cert-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.cert-container li {
  margin-left: 25px;
  list-style-position: inside;
}

li {
  text-align: left;
}

.subtext, .email {
  text-align: center;
}

.links {
  padding-top: 15px;
}

@media only screen {
  .siteUrl {
    display: none;
  }
}

@media print {
  .title {
    font-size: 24px;
  }
  .subtitle {
    font-size: 18px;
  }
  .img-circle {
    display: none;
  }
  .subtext {
    display: none;
  }
  a:link, a:visited {
    color: #000;
  }
  .siteUrl {
    display: block;
    text-align: center;
  }
  .bar-chart {
    display: none;
  }

}
</style>
