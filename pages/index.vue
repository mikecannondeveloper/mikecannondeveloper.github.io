<template>
  <section class="container">
    <div>
      <img class="img-circle" src="~/assets/profile.jpg">
      <h2 class="title">
        S. Michael Cannon
      </h2>
      <h3 class="subtitle">
        Full Stack Software Developer
      </h3><br>
      <p class="subtext"><a href="mailto:mikethedeveloper@gmail.com">mikethedeveloper@gmail.com</a></p><br>
      <b>Relevant Skills</b><hr><br>
      <ul v-for='skill in skills' :key="skill.index">
        <li>{{ skill }}</li>
      </ul><br><br>
      <div v-for='role in experience' :key="role.jobRole">
        <div class="jobrole">
          <b>{{ role.jobRole }}</b><p>{{ role.dateRange }}</p>
        </div><hr><br>
        <ul v-for='item in role.items' :key="item.index">
          <li>{{ item }}</li>
        </ul><br>
      </div>
    </div>
    <p class="subtext"><small>This simple site was generated using <a href="https://vuejs.org/">Vue</a> + <a href="https://nuxtjs.org">Nuxt</a></small></p>
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
      skills: [
        'Advanced usage of Windows, Linux, and macOS systems (including Bash and Powershell)',
        '4+ years of development experience in C++, Python, JS(Node, Vue, jQuery), VBS, VBA, PHP, SQL, and Dart',
        'Agile Software Delivery using GitHub and Trello (Kanban+Scrum)',
        'Application Design, Development, Implementation, Documentation, and Training',
        'CompTIA A+ certified'
      ],
      experience: [
        {
          'jobRole': 'Automation Engineer (World Wide Technology)',
          'dateRange': 'Aug 2016-Current',
          'items': [
            'Built Windows Installer for advanced automation appliance, which was powered by Vagrant, Docker, and Ansible',
            'Built Ansible modules for internal use to automate deployment of customer hardware',
            'Built successful client applications in Electron-Vue with estimated ROI over $400k',
            'Successfully automated multiple projects, using Python scripts to convert, consolidate, or migrate data between platforms for multiple clients'
          ]
        },
        {
          'jobRole': 'Analyst/Programmer (World Wide Technology)',
          'dateRange': 'Jun 2014- Aug 2016',
          'items': [
            'Automated SAP report and data extraction for use in MySQL database',
            'Automated daily data migration across corporate networks from SAP to Oracle/Tableau',
            'Built an intranet web application to manage production and reporting tools for management and other employees in PHP using modern web design standards (HTML5, jQuery, CSS)',
            'Implemented Agile Processes (Kanban), often delivering complete solutions within days of request',
            'Maintained MySQL database and intranet web server',
            'Implemented process improvements using custom applications that save the company $200k+ a year in employee time'
          ]
        },
        {
          'jobRole': 'Freelance Project (Porras Law)',
          'dateRange': 'Sep 2015',
          'items': [
            'Utilized Open Source IP Analysis techniques',
            'Built Python scripts for IP data retrieval and analysis',
            'Assisted with Web Development/Administration'
          ]
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
  padding-bottom: 15px;
}

.jobrole {
  text-align: left;
}

.img-circle {
    float: left;
    z-index: 3;
    position: absolute; /*newly added*/
    left: 20px; /*newly added*/
    top: 5px;/*newly added*/
    border-radius: 50%;
    width: 125px;
}

li {
  text-align: left;
}

.subtext {
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
