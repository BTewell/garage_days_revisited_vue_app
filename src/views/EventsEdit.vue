<template>
  <div class="root">
    <section style="background: url('/img/GDR-faces-cups.jpg')no-repeat" class="hero listing-single-hero d-flex align-items-center">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/home">Home</a></li>
          <li class="breadcrumb-item active">Event</li>
        </ul>
        <h1 class="has-lines">Edit <span class="text-primary"> Event</span></h1>    
      </div>
    </section>
    <aside class="col-lg-6">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Events </small> Edit Event </h3>
        </header>      
        <div v-for="error in errors">
          {{ error }}
        </div>
        <form class="days" v-on:submit.prevent="updateEvent()">
          <div class="day d-flex justify-content-between"><strong>Event Title:</strong><input type="text" v-model="event.title"></div>
          <div class="day d-flex justify-content-between"><strong>Event Address:</strong><input type="text" v-model="event.address"></div>
          <div class="day d-flex justify-content-between"><strong>Event Details:</strong><input type="text" v-model="event.details"></div>
          <div class="day d-flex justify-content-between"><strong>Event Start Date:</strong><input type="text" v-model="event.start_date"></div>
          <div class="day d-flex justify-content-between"><strong>Event End Date:</strong><input type="text" v-model="event.end_date"></div>
          <div class="day d-flex justify-content-between"><strong>Event Start Time:</strong><input type="text" v-model="event.start_time"></div>
          <div class="day d-flex justify-content-between"><strong>Event End Time:</strong><input type="text" v-model="event.end_time"></div>
          <input type="submit" class="btn btn-primary mt-3 mt-lg-0 ml-lg-3 has-wide-padding" value="Update event">
          <!-- <button>Make a new recipe</button> -->
        </form>
        <hr>
        <button class="btn btn-outline-primary mt-3 mt-lg-0 ml-lg-3 has-wide-padding" v-on:click="deleteEvent()">Delete event</button>
      </div>
    </aside>
    <!-- <div v-for="error in errors">
      {{ error }}
    </div>

    <form v-on:submit.prevent="updateEvent()">
      <p>Title: <input type="text" v-model="event.title"></p>
      <p>Address: <input type="text" v-model="event.address"></p>
      <p>Details: <input type="text" v-model="event.details"></p>
      <p>Start Date: <input type="text" v-model="event.start_date"></p>
      <p>End Date: <input type="text" v-model="event.end_date"></p>
      <p>Start Time: <input type="text" v-model="event.start_time"></p>
      <p>End Time: <input type="text" v-model="event.end_time"></p>
      <input type="submit" value="Update event">
      <button>Make a new event</button>
    </form>
    <hr>
    <button class="btn navbar-btn btn-outline-primary mt-3 mt-lg-0 ml-lg-3" v-on:click="deleteEvent()">Delete event</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event: {
        title: "",
        address: "",
        details: "",
        start_date: "",
        end_date: "",
        start_time: "",
        end_time: ""
      },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.event = response.data;
    });
  },
  methods: {
    updateEvent: function() {
      console.log('making the new event');
      // make a request to the api to the create action
      // response = HTTP.get("/api/events")
      // events = reponse.parse
      var params = {
        title: this.event.title,
        address: this.event.address,
        details: this.event.details,
        start_date: this.event.start_date,
        end_date: this.event.end_date,
        start_time: this.event.start_time,
        end_time: this.event.end_time
      };
      console.log(params);
      axios.patch("/api/events/" + this.$route.params.id, params).then(response => {
        console.log('things are going well');
        console.log(response);
        this.$router.push("/events/" + this.$route.params.id);
      }).catch(error => {
        console.log('things are going poorly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    },
    deleteEvent: function() {
      console.log('deleting the event...');
      // make an HTTP request using axios to the destroy action of my API
      axios.delete("/api/events/" + this.$route.params.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>