<template>
  <v-app>
    <div class="row mt-5">

      <div class="col-md-8 mx-auto">
        <div class="row">
          <div class="card col-md-12 p-0">
            <div class="card-body">
              <h3 class="card-title">
                <strong>Michael Tristin Lee</strong>
              </h3>
              <p>
                <i>
                  <strong> B.S. Computer Science, University of Washington</strong>
                </i>
                <i>
                  <strong>Graduation Date: Spring 2018 </strong>
                </i>
              </p>
              <div class="row mt-5">
                <div class="col-md-4">
                  <img class="card-img" src="/static/IMG_3268.jpg" style="width: 100%; border-radius: 10px;"> </img>
                </div>

                <div class="col-md-8 mt-3">
                  <p class="card-text medium dark-text text-left">
                    I'm a computer science student at the University of Washington. I have a passion for genomics and its applications in understanding basic biology and diseases.
                  </p>
                  <p class="card-text medium dark-text text-left">
                    I have worked in multiple genomics labs, including Dr.Bill Noble in the UW Genome Sciences, Dr.Mona Singh at Princeton University in the Lewis-Sigler Institue For Integrative Genomics, and Dr.Rocap in the UW School of Oceanography. In addition to this I have worked on multiple projects that have developed my engineering skills.
                  </p>

                    <v-btn href="mailto:michael.leem42@gmail.com" large color="primary" dark>
                      Email
                    </v-btn>
                    <v-btn href="https://www.linkedin.com/in/michael-tristin-lee/" large color="blue" dark>Linkedin</v-btn>
                    <v-btn a href="https://drive.google.com/open?id=0B-QcR98gGRtSaGhIcjlTREtuclB2NDNBazVReU5JZlN4T1Mw" color="error" dark large>Resume</v-btn>
                    <v-btn href="https://github.com/leem42" color="success" dark large>Github</v-btn>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-8 mx-auto text-left">
        <h4>
          <strong>
            <u> Projects </u>
          </strong>
        </h4>
      </div>

      <br>

      <div class="col-8 text-left mx-auto mb-3">
        <h5>
          <strong> Sage Bionetworks, Seattle WA,
            <a href="https://github.com/leem42/web-mpower-2/tree/feat/vuetify-alternate-checkboxes"> Github of the project </a>
          </strong>
        </h5>
        <p>
          <strong> Front End development with HTML, JS, and CSS </strong> on device agnostic website for persons afflicted with parkinsons disease. I worked with a UX Designer to create a reactive and responsive website that would meet the requirements of the people involved. Through this project I learned how to work
          <strong> vue js, npm, bootstrap, material design principles. </strong>
        </p>
        <p> Though I can't show an actual link to the website (and note that its still under active development) as of the moment I can show a demo of the website in use- </p>
        <div class="text-center">
          <iframe src="https://player.vimeo.com/video/239052058" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>

      </div>
      <div class="col-8 text-left mx-auto">
        <h5>
          <strong> Data Visualization </strong>
        </h5>
        <p>
          <strong> Worked with d3 js visualization package </strong> on project demonstrating the history of protests in the United States and its impacts to the three branches of government (and conversely so). This project involved
          <strong> data wrangling </strong> from multiple sources, primarily done using
          <strong> Python </strong>. And lots of background research on historical events in the United States to derive a greater context for our created visuals.
          <br>
          <br> A link to the project showcase is
          <a href="https://cse442-17s.github.io/Loud-and-Proud/final/"> here </a>
        </p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-8 text-left mx-auto">
        <h4>
          <strong>
            <u> Research </u>
          </strong>
        </h4>
      </div>

      <div class="col-8 text-left mx-auto mb-3">
        <h5>
          <strong> Dr. Bill Noble, University of Washington School of Genomics </strong>
        </h5>
        <p>
          Extends code usability and detailed documentation for software tool segway. Streamlined a process to download data from ENCODE.
          <strong> Works with AWS; using EC2, S3, and CloudFormation. </strong>
        </p>
        <p>
          <strong> Conducts Machine Learning Study on TCGA Data </strong> to predict gene expression across cancer afflicted patients
        </p>
        <p> Github of the project can be found
          <a href="https://github.com/leem42/cse446"> here </a>. </p>

      </div>
      <div class="col-8 text-left mx-auto mb-3">
        <h5>
          <strong> Dr. Mona Singh, Princeton University Lewis-Sigler Institue for Integrative Genomics </strong>
        </h5>
        <p>
          Conducted a research project studying the occurrence of zinc finger proteins under the guidance of Anton Persikov (PhD) and Mona Singh (PhD).
          <strong> Analyzed large data files </strong> of zinc finger proteins using
          <strong> Python. </strong>
          Used
          <strong> statistical measures </strong> find meaningful novel results. Presented a poster of research findings to fellow colleagues and professors. Collaborated in open office environment with other graduate students
        </p>
        <p> Final poster of the results can be viewed
          <a href="https://docs.google.com/presentation/d/e/2PACX-1vTV0vJNLob_f1zjmcQX0CvhDoV4DPkeQdenGdV2BgWnfPIIXFsKBuf9-iMncDP-a3OiHcVOcz_kRu2J/pub?start=false&loop=false&delayms=3000"> here </a>
        </p>
      </div>
      <div class="col-8 text-left mx-auto mb-3">
        <h5>
          <strong> Dr. Gabrielle Rocap, University of Washington School of Oceanography </strong>
        </h5>
        <p>
          Conducted research project studying Prochlorococcus.
          <strong> Utilized Python scripts </strong> to process meta genomic data files. Used
          <strong> spectrophotometer </strong> analyze stock cultures. Presented a poster of research findings at Mary Gates Undergraduate Research Symposium.
        </p>
      </div>

      <br>
      <br>

    </div>
    <v-footer fixed class="pa-3">
      About me- I'm a tennis enthusiast, lover of books, and life long learner!
      <v-spacer></v-spacer>
      <div> Last Updated 10/18 | Made with
        <a href="https://vuetifyjs.com/"> Vuetify </a> and
        <a href="https://vuejs.org/"> Vue JS! </a>
      </div>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello, this website serves to showcase projects and some of the work that I\'ve completed'
    }
  },
  methods: {
    emailRedirect: function () {
      window.location.href = 'mailto:michael.leem42@gmail.com'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}

.dark-text {
  color: black;
}

p.medium {
  font-size: 1rem * 2.5 !important;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.fillParent {
  width: inherit;
  height: inherit;
}
</style>
