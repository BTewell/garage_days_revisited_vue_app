<template>
  <div class="root">
    <h1>Garage Days Revisited</h1>
    <div v-for="error in errors">
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
      <!-- <button>Make a new event</button> -->
    </form>
    <hr>
    <button v-on:click="deleteEvent()">Delete event</button>
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