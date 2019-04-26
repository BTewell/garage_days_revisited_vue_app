<template>
  <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Garage Days Revisited</h1>
        <h2>Login</h2>
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