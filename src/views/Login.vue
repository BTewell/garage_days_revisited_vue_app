<template>
  <div class="login">
    <section style="background: url('/img/garage-int-BW.jpg')" class="listing-single-hero d-flex align-items-center">
      <div class="container">
        <h1 class="has-lines">User <span class="text-primary"> Login</span></h1>    
      </div>
    </section>
    <div class="container">
    <aside class="col-lg-4">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Profile </small> User Login </h3>
        </header>      
        <div v-for="error in errors">
          {{ error }}
        </div>
        <form class="days" v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email Address:</label>
          <input type="emailAddress" class="form-control" v-model="emailAddress">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
        </form>
      </div>
    </aside>      
<!--       <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email Address:</label>
          <input type="emailAddress" class="form-control" v-model="emailAddress">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      emailAddress: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email_address: this.emailAddress,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("currentUser", response.data.user_id);
          this.$router.push("/home");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.emailAddress = "";
          this.password = "";
        });
    }
  }
};
</script>