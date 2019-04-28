<template>
  <div class="root">
    <h1>Garage Days Revisited</h1>
    <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateUser()">
      <p>User Name: <input type="text" v-model="user.user_name"></p>
      <p>First Name: <input type="text" v-model="user.first_name"></p>
      <p>Last Name: <input type="text" v-model="user.last_name"></p>
      <p>Email Address: <input type="text" v-model="user.email_address"></p>
      <p>Password: <input type="text" v-model="user.password"></p>
      <p>Password Confirmation: <input type="text" v-model="user.password_confirmation"></p>
      <input type="submit" value="Update User">
      <!-- <button>Make a new user</button> -->
    </form>
    <hr>
    <button v-on:click="deleteUser()">Delete User</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {
        user_name: "",
        first_name: "",
        last_name: "",
        email_address: "",
        password: "",
        password_confirmation: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function() {
      console.log('making the new user');
      // make a request to the api to the create action
      // response = HTTP.get("/api/users")
      // users = reponse.parse
      var params = {
        user_name: this.user.user_name,
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email_address: this.user.email_address,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation
      };
      console.log(params);
      axios.patch("/api/users/" + this.$route.params.id, params).then(response => {
        console.log('things are going well');
        console.log(response);
        this.$router.push("/user/");
      }).catch(error => {
        console.log('things are going poorly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    },
    deleteUser: function() {
      console.log('deleting the user...');
      // make an HTTP request using axios to the destroy action of my API
      axios.delete("/api/users/" + this.$route.params.id).then(response => {
        this.$router.push("/signup");
      });
    }
  }
};
</script>