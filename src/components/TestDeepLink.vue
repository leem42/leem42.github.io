<template>
  <v-app>
    <div class="row mt-5">

      <div class="col-md-8 mx-auto">
        <div class="row">
          <div class="card col-md-12 p-0">
            <div class="card-body">
              <h3 class="card-title">
                <strong>Web View of Test App Download Page</strong>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>


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
