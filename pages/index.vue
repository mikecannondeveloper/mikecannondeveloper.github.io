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
import data from './data';

export default {
  components: {
    AppLogo
  },
  data() {
    return data
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
