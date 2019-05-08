<template>
  <div class="signup">
    <div class="container">
    <section style="background: url('/img/GDR-login.jpg')no-repeat" class="listing-single-hero d-flex align-items-center">
      <div class="container">
        <h1 class="has-lines">Garage Days <span class="text-primary"> Revisited</span></h1>    
      </div>
    </section>
    <aside class="col-lg-6">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Profiles </small> Signup </h3>
        </header>      
        <div v-for="error in errors">
          {{ error }}
        </div>
      <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>User Name:</label> 
          <input type="text" class="form-control" v-model="userName">
        </div>        
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email Address:</label>
          <input type="emailAddress" class="form-control" v-model="emailAddress">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
          <input type="submit" class="btn btn-primary mt-3 mt-lg-0 ml-lg-3 has-wide-padding" value="Create user profile">
          <!-- <button>Make a new recipe</button> -->
        </form>
      </div>
    </aside>
      <!-- <form v-on:submit.prevent="submit()">
        <h1>Garage Days Revisited</h1>
        <h2>Sign-up</h2>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>User Name:</label> 
          <input type="text" class="form-control" v-model="userName">
        </div>        
        <div class="form-group">
          <label>First Name:</label> 
          <input type="text" class="form-control" v-model="firstName">
        </div>
        <div class="form-group">
          <label>Last Name:</label> 
          <input type="text" class="form-control" v-model="lastName">
        </div>
        <div class="form-group">
          <label>Email Address:</label>
          <input type="emailAddress" class="form-control" v-model="emailAddress">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
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
      userName: "",
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        user_name: this.userName,
        first_name: this.firstName,
        last_name: this.lastName,
        email_address: this.emailAddress,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>