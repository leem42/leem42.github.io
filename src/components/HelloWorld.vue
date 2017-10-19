<template>
  <v-app class="container-fluid mb-5">
    <div class="row ">
      <div class="col-md-8 mx-auto">

          <div class="row">
            <div class="col-md-4">
              <img class="fillParent img-fluid" src="../images/selfie.png"> </img>

            </div>
            <div class="card col-md-8">
              <div class="card-body">
                <h3><strong>Michael Tristin Lee</strong></h3>
                <br>
                <p class="card-text medium dark-text text-left">
                  I'm a computer science student at the University of Washington.
                  I have a passion for genomics and its applications in understanding basic biology
                  and diseases. 
                  </p>
                  <br>
                <p class="card-text medium dark-text text-left">
                  I have worked in multiple genomics labs, including
                  Dr.Bill Noble in the UW Genome Sciences, Dr.Mona Singh at Princeton University
                  in the Lewis-Sigler Institue For Integrative Genomics, and 
                  Dr.Rocap in the UW School of Oceanography. 

                  <br><br> I love tennis, diving into books, and learning new things
                </p>


                <div>
                  <v-btn large color="primary" dark>
                    Email
                  </v-btn>
                  <v-btn href="https://www.linkedin.com/in/michael-tristin-lee/" large color="success" dark>Linkedin</v-btn>
                  <v-btn color="error" dark large>Resume</v-btn>
                </div>



              </div>
            </div>

          </div>
      </div>
    </div>

    <div class="row mt-5">
        <div class="col-12"> <h4> <strong> Projects </strong> </h4></div>
        
        
        <br>

        <div class="col-8 text-left mx-auto">
               <h5> Sage Bionetworks </h5>
               <p> 
                 <strong> Front End development with HTML, JS, and CSS </strong> on device agnostic website for 
                 persons afflicted with parkinsons disease. I worked with a UX Designer to create a reactive and responsive website 
                 that would meet the requirements of the people involved. Through this project I learned how to work <strong> vue js, npm, bootstrap,
                  material design principles. </strong> 
               </p>
               <p> Though I can't show an actual link to the website as of the moment I can show a video demo of the website in use- </p>
        </div>
        <div class="col-8 text-left mx-auto">
               <h5> Dr. Bill Noble Genomics Lab </h5>
               <p> 
                Extends code usability and detailed documentation for software tool segway.  
                Works with AWS; using EC2, S3, and CloudFormation.
                Conducts Machine Learning Study on TCGA Data to predict gene expression across cancer afflicted patients 
               </p>
        </div>
        <br>
        <br>


    </div>
   <v-footer fixed class="pa-3">
    <v-spacer></v-spacer>
    <div> Last Updated 10/18 | Made with Vue JS!</div>
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
