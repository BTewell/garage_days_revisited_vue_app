<template>
  <div class="profile">
    <section style="background: url('/img/listing-hero-bg.jpg') no-repeat;" class="hero listing-single-hero d-flex align-items-end">
      <div class="container">
        <div class="content d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-end">
          <div class="heading-info">
            <h1 class="text-primary">Garage Days Revisitors</h1>
            <div class="listing-rate d-flex align-items-center">
              <ul class="rate list-inline">
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
                <li class="list-inline-item"><i class="fa fa-star"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>    
    <aside class="col-lg-4">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Profile </small> Current User </h3>
        </header>
        <div class="days">
          <div class="day d-flex justify-content-between"><strong>User Name</strong><span>{{ user.user_name }} </span></div>
          <div class="day d-flex justify-content-between"><strong>First Name</strong><span>{{ user.first_name }}</span></div>
          <div class="day d-flex justify-content-between"><strong>Last Name</strong><span>{{ user.last_name }}</span></div>
          <div class="day d-flex justify-content-between"><strong>Email Address</strong><span>{{ user.email_address }} </span></div>
        </div>
      </div>
      <a href="/user/:id/edit" class="btn btn-primary has-shadow has-wide-padding">Edit User Profile</a>
    </aside><!-- <h1>Garage Days Revisited</h1> -->
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
