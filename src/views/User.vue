<template>
  <div class="profile">
    <h1>Garage Days Revisited</h1>
    <h3>User Profile</h3>
    <p>User Name: {{user.user_name}}</p>
    <p>First Name: {{user.first_name}}</p>
    <p>Last Name: {{user.last_name}}</p>
    <p>Email Address: {{user.email_address}}</p>
  <router-link v-bind:to="'/user/:id/edit'" tag="button">Edit Profile</router-link>   
  </div>
</template>
<style>
img{
  width: 200px;
}
</style>

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
        user_id: ""
      }
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
      this.currentUser = Number(localStorage.currentUser);
      console.log(this.currentUser);
    });
  },
  methods: {}
};
</script>
