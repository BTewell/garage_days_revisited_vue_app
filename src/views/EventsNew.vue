<template>
  <div class="root">
    <section style="background: url('/img/GDR-signup.jpg')" class="hero listing-single-hero d-flex align-items-center">
      <div class="container">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><a href="/home">Home</a></li>
          <li class="breadcrumb-item active">New Event</li>
        </ul>
        <h1 class="has-lines">Create New <span class="text-primary"> Event</span></h1>    
      </div>
    </section>
    <aside class="col-lg-4">                   
      <div class="widget opening-hours">
        <header>
          <h3 class="has-lines"><small> Events </small> New Event </h3>
        </header>      
        <div v-for="error in errors">
          {{ error }}
        </div>
        <form class="days" v-on:submit.prevent="makeEvent()">
          <div class="day d-flex justify-content-between"><strong>Event Title:</strong><input type="text" v-model="newEventTitle"></div>
          <div class="day d-flex justify-content-between"><strong>Event Address:</strong><input type="text" v-model="newEventAddress"></div>
          <div class="day d-flex justify-content-between"><strong>Event Details:</strong><input type="text" v-model="newEventDetails"></div>
          <div class="day d-flex justify-content-between"><strong>Event Start Date:</strong><input type="text" v-model="newEventStartDate"></div>
          <div class="day d-flex justify-content-between"><strong>Event End Date:</strong><input type="text" v-model="newEventEndDate"></div>
          <div class="day d-flex justify-content-between"><strong>Event Start Time:</strong><input type="text" v-model="newEventStartTime"></div>
          <div class="day d-flex justify-content-between"><strong>Event End Time:</strong><input type="text" v-model="newEventEndTime"></div>
          <input type="submit" class="btn btn-primary has-shadow has-wide-padding" value="Create new event">
          <!-- <button>Make a new recipe</button> -->
        </form>
      </div>
    </aside>    
<!--     <div v-for="error in errors">
      {{ error }}
    </div>
    <form v-on:submit.prevent="makeEvent()">
      <p>Title: <input type="text" v-model="newEventTitle"></p>
      <p>Address: <input type="text" v-model="newEventAddress"></p>
      <p>Details: <input type="text" v-model="newEventDetails"></p>
      <p>Start Date: <input type="text" v-model="newEventStartDate"></p>
      <p>End Date: <input type="text" v-model="newEventEndDate"></p>
      <p>Start Time: <input type="text" v-model="newEventStartTime"></p>
      <p>End Time: <input type="text" v-model="newEventEndTime"></p>
      <input type="submit" value="Add a new event">
      <button>Make a new recipe</button>
    </form> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newEventTitle: "",
      newEventAddress: "",
      newEventDetails: "",
      newEventStartDate: "",
      newEventEndDate: "",
      newEventStartTime: "",
      newEventEndTime: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    makeEvent: function() {
      console.log('making the new event');
      // make a request to the api to the create action
      // response = HTTP.get("/api/events")
      // recipes = reponse.parse
      var params = {
        title: this.newEventTitle,
        address: this.newEventAddress,
        details: this.newEventDetails,
        start_date: this.newEventStartDate,
        end_date: this.newEventEndDate,
        start_time: this.newEventStartTime,
        end_time: this.newEventEndTime
      };
      axios.post("/api/events", params).then(response => {
        console.log('things are going well');
        console.log(response);
        console.log(response.data.id);
        console.log(this.$route.params.id, params);
        this.$router.push("/events/" + response.data.id);
      }).catch(error => {
        console.log('things are going poorly');
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      });
    }
  }
};
</script>