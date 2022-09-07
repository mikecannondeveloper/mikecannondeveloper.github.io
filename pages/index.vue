  <template>
  <section class="container">
    <div style="margin-bottom:50px;"><br/>
      <div class="page-header">
        <div>
        <h2 class="title">
          S. Michael Cannon
        </h2>
        <img class="img-circle" src="@/assets/profile.jpg"/>
        <h3 class="subtitle">
          Full Stack Software Developer
        </h3>
        </div>
        <div>
          <p class="siteUrl"><a href="https://mikecannon.dev">https://mikecannon.dev</a></p>
          <p class="email"><a href="mailto:mikecannondeveloper@gmail.com">mikecannondeveloper@gmail.com</a></p>
        </div>
      </div><br/>
      <b>Skills</b><hr><br/>
      <ul v-for='skill in skills' :key="skill.index">
        <li>{{ skill }}</li>
      </ul><br/>
      <div>
        <b>Certifications</b>
      </div><hr><br/>
      <div class="cert-container">
      <div v-for='cert in certs' :key="cert.name">
        <li>
          <b class="certTitle">{{ cert.name }}</b><br/>
          <img class="badge" :src="cert.badge"/>
        </li>    
      </div>
      </div><br/>
      <div v-for='role in experience' :key="role.jobRole">
        <div class="job-header">
          <div class="job-role">
            <b>{{ role.jobRole }}</b><br/>
            <p>{{ role.company }}</p>
          </div>
          <div class="date-range">
            <p>{{ role.dateRange }}</p>
          </div>
        </div>
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

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      email: "mikecannondeveloper@gmail.com",
      skills: [
        '8 years of professional software development experience in Java, Python, JavaScript (NodeJs, Vue, React, Typescript) ',
        '4 years of professional software development experience in cloud based environments (AWS, GCP)',
        'Software Application Design, Development, Implementation, and Documentation',
      ],
      certs: [
        {
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
      experience: [
        {
          jobRole: 'Consultant',
          company: 'Daugherty Business Solutions',
          dateRange: '2022',
          items: [
            'Developed multiple web applications managing Carbon Credits for Bayer Digital Farming Solutions using AWS architecture',
          ]
        },
        {
          jobRole: 'Software Engineer',
          company: 'Propelled Brands',
          dateRange: '2020 - 2022',
          items: [
            'Created integration testing solution to test synchronization of CRM data across multiple internal and external sources',
            'Supported the creation of multiple new internal solutions in Google Cloud Platform (GCP)'
          ]
        },
        {
          jobRole: 'Frontend Developer',
          company: 'Capital One',
          dateRange: '2019 - 2020',
          items: [
            'Built integrated UI solution for marketing campaign management using VueJS & Typescript',
            'Updated existing REST API solutions using Springboot (hosted on AWS)',
          ]
        },
        {
          jobRole: 'Core Automation Developer',
          company: 'World Wide Technology',
          dateRange: '2016 - 2019',
          items: [
            'Designed and implemented multiple client and web applications in VueJS and Electron with ROI over $450k',
            'Wrote and maintained script used to translate Cisco ACE config files to F5 config files.',
          ]
        },
        {
          jobRole: 'Analyst/Programmer',
          company: 'World Wide Technology',
          dateRange: '2014 - 2016',
          items: [
            'Automated SAP ERP report and data extraction for use in MySQL database',
            'Built an intranet web application in PHP, MySQL, and jQuery that saved warehouse $200k+ a year'
          ]
        }
      ],
      education: [{
          institution: 'Western Governors University',
          name: 'Bachelor of Science, Software Development'
        }
      ]
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

.job-role {
  text-align: left;
}

.date-range {
  text-align: right;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
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
  .bar-chart {
    display: none;
  }
}

.cert-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style-type: none;
}

.cert-container li {
  margin-top: 25px;
  margin-left: 20px;
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

.badge {
 max-height: 75px;
 margin-top: 15px;
}

@media print {
  .title {
    font-size: 24px;
    text-align: left;
  }
  .subtitle {
    font-size: 18px;
    text-align: left;
  }
  .img-circle {
    display: none;
  }
  .subtext {
    display: none;
  }
  .siteUrl, .email {
    position: relative;
    text-align: right;
  }
  .bar-chart {
    display: none;
  }
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
  .badge {
    display: none;
  }

}
</style>
